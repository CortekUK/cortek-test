-- Update published date for the "What is a CRM?" article
UPDATE insights 
SET published_date = '2025-11-04',
    updated_at = now()
WHERE slug = 'what-is-a-crm';