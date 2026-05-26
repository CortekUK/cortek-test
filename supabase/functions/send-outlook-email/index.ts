import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import * as nodemailer from "npm:nodemailer@6.9.7";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  businessName: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log('Received form submission:', {
      name: formData.name,
      email: formData.email,
      businessName: formData.businessName,
      messageLength: formData.message?.length || 0
    });

    // Check for SMTP password
    const smtpPassword = Deno.env.get("OUTLOOK_SMTP_PASS");
    if (!smtpPassword) {
      throw new Error("OUTLOOK_SMTP_PASS environment variable is not set");
    }

    // Create transporter with Microsoft 365 SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // STARTTLS
      requireTLS: true,
      auth: {
        user: "support@cortek.io",
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: true,
      },
      logger: true,
      debug: true,
    });

    // Format the email body
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
          <p style="margin: 10px 0;"><strong>Business/Club Name:</strong> ${formData.businessName}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="color: #666; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #888; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString('en-GB', { 
              timeZone: 'Europe/London',
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </p>
        </div>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: '"Cortek Contact Form" <support@cortek.io>',
      to: "support@cortek.io",
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailBody,
      replyTo: formData.email,
    });

    console.log('Email sent successfully:', info.messageId);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: info.messageId 
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Check for specific SMTP AUTH disabled error
    let errorMessage = 'Failed to send email';
    let statusCode = 500;
    
    if (error.message?.includes('SmtpClientAuthentication is disabled')) {
      errorMessage = 'Email service configuration error: SMTP authentication is disabled for this email account. Please contact support.';
      statusCode = 503; // Service Unavailable
    } else if (error.message?.includes('OUTLOOK_SMTP_PASS')) {
      errorMessage = 'Email service configuration error: Missing credentials.';
      statusCode = 503;
    } else if (error.responseCode === 535 || error.message?.includes('Authentication unsuccessful')) {
      errorMessage = 'Email service authentication failed. Please verify credentials.';
      statusCode = 503;
    } else {
      errorMessage = error.message || 'Failed to send email';
    }
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage 
      }),
      {
        status: statusCode,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        },
      }
    );
  }
});