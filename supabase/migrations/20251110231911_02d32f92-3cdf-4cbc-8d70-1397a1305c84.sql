-- Update author for the custom CRM article
UPDATE insights 
SET author = 'Lucy Sinders',
    updated_at = now()
WHERE slug = 'why-every-growing-business-needs-a-custom-crm';