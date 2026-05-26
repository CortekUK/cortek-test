import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormData {
  name: string;
  email: string;
  businessName: string;
  message: string;
  formType?: 'contact' | 'consultation';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormData = await req.json();
    
    console.log('Received form submission:', {
      name: formData.name,
      email: formData.email,
      businessName: formData.businessName,
      formType: formData.formType || 'contact',
      messageLength: formData.message?.length || 0
    });

    // Get Make.com webhook URL from environment
    const webhookUrl = Deno.env.get("MAKE_WEBHOOK_URL");
    if (!webhookUrl) {
      throw new Error("MAKE_WEBHOOK_URL environment variable is not set");
    }

    // Validate the webhook URL format
    let validatedUrl: URL;
    try {
      validatedUrl = new URL(webhookUrl);
      
      // Ensure it's an HTTPS URL
      if (validatedUrl.protocol !== 'https:') {
        throw new Error(`Invalid webhook URL protocol: ${validatedUrl.protocol}. Make.com webhooks must use HTTPS.`);
      }
      
      // Validate it's a Make.com webhook domain
      if (!validatedUrl.hostname.includes('make.com') && !validatedUrl.hostname.includes('integromat.com')) {
        console.warn('Warning: Webhook URL does not appear to be a Make.com domain');
      }
    } catch (urlError) {
      console.error('Invalid webhook URL format:', urlError);
      throw new Error(`Invalid webhook URL format: ${urlError.message}. Please ensure MAKE_WEBHOOK_URL is a valid HTTPS URL like: https://hook.eu2.make.com/[your-webhook-id]`);
    }

    // Prepare data for Make.com
    const makeData = {
      name: formData.name,
      email: formData.email,
      businessName: formData.businessName,
      message: formData.message,
      formType: formData.formType || 'contact',
      timestamp: new Date().toISOString(),
      source: 'cortek.io'
    };

    console.log('Sending to Make.com webhook:', validatedUrl.hostname + '...');

    // Send to Make.com webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(makeData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Make.com webhook error:', response.status, errorText);
      throw new Error(`Make.com webhook returned ${response.status}: ${errorText}`);
    }

    const responseData = await response.text();
    console.log('Make.com webhook response:', responseData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        makeResponse: responseData
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
    console.error('Error processing form submission:', error);
    
    let errorMessage = 'Failed to submit form';
    let statusCode = 500;
    
    if (error.message?.includes('MAKE_WEBHOOK_URL')) {
      errorMessage = 'Form submission service is not configured. Please contact support.';
      statusCode = 503;
    } else if (error.message?.includes('webhook returned')) {
      errorMessage = 'Form submission service error. Please try again later.';
      statusCode = 502;
    } else {
      errorMessage = error.message || 'Failed to submit form';
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