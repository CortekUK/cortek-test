import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error('OPENAI_API_KEY not found');
      throw new Error('OpenAI API key not configured');
    }

    const { messages } = await req.json();
    console.log('Chat request received:', { messageCount: messages?.length });

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Messages array is required');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          {
            role: 'system',
            content: `You are Cortek's AI assistant. Cortek is a comprehensive business automation platform that provides digital solutions for every industry, including gyms, construction, restaurants, retail, offices, and professional services.

            Our three main service categories are:
            
            **Customer Engagement:**
            - WhatsApp & SMS automation
            - Social media automation
            - Customer engagement tools
            - Booking and scheduling systems
            
            **Operations Automation:**
            - Workflow automation
            - Process optimization
            - System integrations
            - Custom automation solutions
            
            **Reporting & Insights:**
            - Analytics and reporting
            - Business intelligence
            - Performance tracking
            - Data-driven insights
            
            We also offer bespoke integrations, QR code systems, and tailored solutions for specific industry needs. Our platform helps businesses streamline operations, improve customer engagement, and gain valuable insights.
            
            Be helpful, professional, and knowledgeable about Cortek's comprehensive automation offerings. Always encourage users to book a free consultation to discuss their specific automation needs.`
          },
          ...messages
        ],
        max_completion_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received successfully');

    return new Response(JSON.stringify({
      message: data.choices[0].message.content
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-ai function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'An unexpected error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});