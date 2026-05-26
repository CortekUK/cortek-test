-- Insert the "What is a CRM?" article
INSERT INTO insights (title, slug, summary, author, published_date, thumbnail_url, body_content, meta_description, is_published) 
VALUES (
  'What is a CRM?',
  'what-is-a-crm',
  'A simple guide to understanding CRMs and how they transform business operations.',
  'Cortek Team',
  '2025-11-10',
  'https://www.cortek.io/lovable-uploads/what-is-a-crm.png',
  '<p>A CRM, or Customer Relationship Management system, is software that helps businesses manage interactions with their customers, prospects, and partners. It acts as a central hub for all communication, tracking leads, sales, support tickets, and more — giving teams full visibility into customer journeys.</p>

<p>Modern CRMs like those built by CORTEK go beyond contact management. They automate repetitive workflows, integrate with tools such as email, WhatsApp, and accounting systems, and help businesses make smarter, data-driven decisions.</p>

<p>For growing companies, a well-designed CRM is the foundation for efficiency and scalability. Instead of juggling spreadsheets and separate systems, teams can manage everything in one connected platform — ensuring faster response times, better collaboration, and stronger client relationships.</p>

<p>At CORTEK, we design bespoke CRM systems tailored to your industry — whether it''s construction, retail, or professional services — so your business can scale without losing its personal touch.</p>',
  'A simple guide to understanding CRMs and how they transform business operations.',
  true
)
ON CONFLICT (slug) DO NOTHING;