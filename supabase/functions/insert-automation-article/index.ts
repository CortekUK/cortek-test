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

    const bodyContent = `<p>Small UK businesses lose an average of 120 hours every month to tasks that could easily be automated. That's effectively a full-time employee dedicated entirely to repetitive admin—copying data, updating spreadsheets, sending manual follow-ups, and handling small tasks that drain time but add little value.</p>

<p>Automation changes this completely. By turning manual processes into automated workflows, small businesses can significantly reduce costs, improve accuracy, and free up time for growth-focused work. Modern automation tools are affordable, easy to set up, and built specifically for small organisations—meaning you don't need technical expertise or large budgets to get started.</p>

<p>This guide walks you through what automation is, why it matters, and how to begin implementing it in your business.</p>

<h2>What Is Business Process Automation?</h2>

<p>Business Process Automation (BPA) uses technology to complete repetitive, rule-based tasks with minimal human involvement. It transforms manual, time-consuming processes into efficient automated workflows.</p>

<p>Examples of tasks that can be automated:</p>

<ul>
<li>Customer follow-up emails</li>
<li>Invoice creation and reminders</li>
<li>Appointment scheduling</li>
<li>Lead tracking</li>
<li>Data entry</li>
<li>Order processing</li>
<li>Inventory notifications</li>
<li>Onboarding steps</li>
</ul>

<p>Automation isn't here to replace jobs—it's here to eliminate unnecessary admin so your team can focus on important, revenue-generating work.</p>

<h2>Why Automation Matters for Small Businesses</h2>

<h3>1. Save time on repetitive work</h3>
<p>Automation completes tasks in minutes that would normally take hours. It works instantly and continues to operate even outside business hours.</p>

<h3>2. Reduce operational costs</h3>
<p>Fewer manual hours means lower admin costs. Automation also reduces time spent fixing errors, chasing information, and managing paperwork.</p>

<h3>3. Improve accuracy</h3>
<p>Automated tasks follow the same rules every time, dramatically reducing mistakes in data entry, invoicing, scheduling, and customer management.</p>

<h3>4. Boost customer experience</h3>
<p>Automation helps deliver fast, consistent service—from quick responses to personalised communication.</p>

<h3>5. Increase employee satisfaction</h3>
<p>Removing mundane tasks reduces burnout and gives your team more time for meaningful work.</p>

<h2>How to Identify What to Automate First</h2>

<p>Start small. Focus on areas where automation creates the biggest impact with the least effort.</p>

<h3>1. Identify repetitive tasks</h3>
<p>Look for work your team does daily or weekly, such as updating spreadsheets, sending recurring emails, or transferring data between systems.</p>

<h3>2. Look for bottlenecks and pain points</h3>
<p>Processes that cause delays, errors, or frustration are prime candidates for automation.</p>

<h3>3. Prioritise tasks with high impact</h3>
<p>Start with "quick wins" such as:</p>

<ul>
<li>Follow-up emails</li>
<li>Invoice reminders</li>
<li>Customer onboarding steps</li>
<li>Lead qualification</li>
<li>Social media posting</li>
<li>Appointment booking</li>
</ul>

<p>These deliver immediate value without long setup times.</p>

<h2>Step-by-Step Guide to Start Automating</h2>

<h3>1. Map your current processes</h3>
<p>Document how each process currently works. Outline each step, who handles it, and what inputs or approvals are required. This reveals inefficiencies and areas for improvement.</p>

<h3>2. Choose the right tools</h3>
<p>Look for automation tools that are:</p>

<ul>
<li>Easy for your team to use</li>
<li>Affordable</li>
<li>Able to integrate with tools you already have</li>
<li>Scalable as you grow</li>
</ul>

<p>No-code and low-code solutions are ideal for small UK businesses getting started.</p>

<h3>3. Test with one small workflow</h3>
<p>Pick a simple task—like sending a welcome email to new leads—and automate it first. This builds confidence and shows immediate results.</p>

<h3>4. Train your team</h3>
<p>Ensure everyone understands:</p>

<ul>
<li>How the new automated workflow works</li>
<li>What has changed</li>
<li>Who is responsible if issues arise</li>
</ul>

<p>Clear communication helps your team adapt smoothly.</p>

<h3>5. Monitor and optimise</h3>
<p>Automation is most effective when reviewed regularly. Track performance, identify improvements, and adjust workflows as your business grows.</p>

<h2>Types of Tools That Help Small Businesses Automate</h2>

<p>Here are categories of tools commonly used by small businesses to automate everyday work:</p>

<h3>Email & Marketing Automation</h3>
<p>Automates newsletters, customer journeys, follow-up messages, reminders, and personalised campaigns.</p>

<h3>Accounting & Invoicing Automation</h3>
<p>Handles recurring invoices, payment reminders, expense tracking, and basic bookkeeping.</p>

<h3>HR & Payroll Automation</h3>
<p>Manages timesheets, payroll calculations, staff onboarding, and leave requests.</p>

<h3>Inventory & Order Management Automation</h3>
<p>Automates stock tracking, order processing, low-stock alerts, and purchase orders.</p>

<h2>Conclusion</h2>

<p>Automating business processes is one of the most effective moves a small UK business can make. It reduces manual work, cuts costs, improves accuracy, enhances customer experience, and gives your team more time to focus on growth.</p>

<p>You don't need to overhaul your entire operation at once—start small, automate one process, and build from there. Even modest automation efforts create powerful long-term advantages and help small businesses compete more effectively in a fast-moving market.</p>

<p>Take the first step today: choose one repetitive task, automate it, and experience the immediate improvements in efficiency and productivity.</p>`;

    const { data, error } = await supabase
      .from('insights')
      .insert({
        title: 'How to Start Automating Business Processes: A Money-Saving Guide for UK Small Businesses',
        slug: 'how-to-start-automating-business-processes',
        summary: 'UK businesses lose 120 hours monthly to manual tasks. Learn how to identify and automate processes to save time, reduce costs, and boost efficiency.',
        author: 'Lucy Sinders',
        published_date: '2025-11-28',
        thumbnail_url: '/lovable-uploads/how-to-start-automating.png',
        body_content: bodyContent,
        meta_description: 'Discover how UK small businesses can save 120+ hours monthly through business process automation. A practical guide to identifying tasks, choosing tools, and implementing cost-effective workflows.',
        is_published: true
      })
      .select();

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
