-- Fix overly permissive RLS policies on client-related tables
-- These tables currently use 'true' conditions which allow anyone to access any client's data

-- 1. Fix client_profiles table policies
DROP POLICY IF EXISTS "Clients can insert their own profile" ON public.client_profiles;
DROP POLICY IF EXISTS "Clients can update their own profile" ON public.client_profiles;
DROP POLICY IF EXISTS "Clients can view their own profile" ON public.client_profiles;

CREATE POLICY "Clients can insert their own profile" 
ON public.client_profiles 
FOR INSERT 
WITH CHECK (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can update their own profile" 
ON public.client_profiles 
FOR UPDATE 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can view their own profile" 
ON public.client_profiles 
FOR SELECT 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

-- 2. Fix client_branding table policies
DROP POLICY IF EXISTS "Clients can insert their own branding" ON public.client_branding;
DROP POLICY IF EXISTS "Clients can update their own branding" ON public.client_branding;
DROP POLICY IF EXISTS "Clients can view their own branding" ON public.client_branding;

CREATE POLICY "Clients can insert their own branding" 
ON public.client_branding 
FOR INSERT 
WITH CHECK (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can update their own branding" 
ON public.client_branding 
FOR UPDATE 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can view their own branding" 
ON public.client_branding 
FOR SELECT 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

-- 3. Fix client_preferences table policies
DROP POLICY IF EXISTS "Clients can insert their own preferences" ON public.client_preferences;
DROP POLICY IF EXISTS "Clients can update their own preferences" ON public.client_preferences;
DROP POLICY IF EXISTS "Clients can view their own preferences" ON public.client_preferences;

CREATE POLICY "Clients can insert their own preferences" 
ON public.client_preferences 
FOR INSERT 
WITH CHECK (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can update their own preferences" 
ON public.client_preferences 
FOR UPDATE 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can view their own preferences" 
ON public.client_preferences 
FOR SELECT 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

-- 4. Fix client_whatsapp_config table policies
DROP POLICY IF EXISTS "Clients can insert their own WhatsApp config" ON public.client_whatsapp_config;
DROP POLICY IF EXISTS "Clients can update their own WhatsApp config" ON public.client_whatsapp_config;
DROP POLICY IF EXISTS "Clients can view their own WhatsApp config" ON public.client_whatsapp_config;

CREATE POLICY "Clients can insert their own WhatsApp config" 
ON public.client_whatsapp_config 
FOR INSERT 
WITH CHECK (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can update their own WhatsApp config" 
ON public.client_whatsapp_config 
FOR UPDATE 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can view their own WhatsApp config" 
ON public.client_whatsapp_config 
FOR SELECT 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

-- 5. Fix client_setup_status table policies  
DROP POLICY IF EXISTS "Clients can insert their own setup status" ON public.client_setup_status;
DROP POLICY IF EXISTS "Clients can update their own setup status" ON public.client_setup_status;
DROP POLICY IF EXISTS "Clients can view their own setup status" ON public.client_setup_status;

CREATE POLICY "Clients can insert their own setup status" 
ON public.client_setup_status 
FOR INSERT 
WITH CHECK (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can update their own setup status" 
ON public.client_setup_status 
FOR UPDATE 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);

CREATE POLICY "Clients can view their own setup status" 
ON public.client_setup_status 
FOR SELECT 
USING (
  client_id IN (
    SELECT client_id FROM app_user_roles 
    WHERE auth_user_id = auth.uid()
  )
);