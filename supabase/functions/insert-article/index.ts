import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const bodyContent = `<p>A CRM, or Customer Relationship Management system, is software that helps businesses manage interactions with their customers, prospects, and partners. It acts as a central hub for all communication, tracking leads, sales, support tickets, and more — giving teams full visibility into customer journeys.</p>

<p>Modern CRMs like those built by CORTEK go beyond contact management. They automate repetitive workflows, integrate with tools such as email, WhatsApp, and accounting systems, and help businesses make smarter, data-driven decisions.</p>

<p>For growing companies, a well-designed CRM is the foundation for efficiency and scalability. Instead of juggling spreadsheets and separate systems, teams can manage everything in one connected platform — ensuring faster response times, better collaboration, and stronger client relationships.</p>

<p>At CORTEK, we design bespoke CRM systems tailored to your industry — whether it's construction, retail, or professional services — so your business can scale without losing its personal touch.</p>`;

    const { data, error } = await supabase
      .from('insights')
      .insert({
        title: 'What is a CRM?',
        slug: 'what-is-a-crm',
        summary: 'A simple guide to understanding CRMs and how they transform business operations.',
        author: 'Cortek Team',
        published_date: '2025-11-10',
        thumbnail_url: 'https://www.cortek.io/lovable-uploads/what-is-a-crm.png',
        body_content: bodyContent,
        meta_description: 'A simple guide to understanding CRMs and how they transform business operations.',
        is_published: true,
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting article:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, article: data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
