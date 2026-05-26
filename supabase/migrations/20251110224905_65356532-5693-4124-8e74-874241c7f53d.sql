-- Create insights table for blog articles
CREATE TABLE IF NOT EXISTS public.insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  summary TEXT NOT NULL CHECK (char_length(summary) <= 150),
  author TEXT NOT NULL,
  published_date DATE NOT NULL,
  thumbnail_url TEXT NOT NULL,
  body_content TEXT NOT NULL,
  meta_description TEXT,
  is_published BOOLEAN DEFAULT true,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;

-- Public read access for published articles
CREATE POLICY "Anyone can view published insights"
ON public.insights
FOR SELECT
USING (is_published = true);

-- Only admins can insert insights
CREATE POLICY "Admins can insert insights"
ON public.insights
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM app_user_roles
    WHERE auth_user_id = auth.uid()
    AND role = 'admin'
  )
);

-- Only admins can update insights
CREATE POLICY "Admins can update insights"
ON public.insights
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_user_roles
    WHERE auth_user_id = auth.uid()
    AND role = 'admin'
  )
);

-- Only admins can delete insights
CREATE POLICY "Admins can delete insights"
ON public.insights
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM app_user_roles
    WHERE auth_user_id = auth.uid()
    AND role = 'admin'
  )
);

-- Create trigger for updated_at
CREATE TRIGGER update_insights_updated_at
BEFORE UPDATE ON public.insights
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for insights images
INSERT INTO storage.buckets (id, name, public)
VALUES ('insights-images', 'insights-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for insights-images bucket
CREATE POLICY "Public can view insights images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'insights-images');

CREATE POLICY "Admins can upload insights images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'insights-images' AND
  EXISTS (
    SELECT 1 FROM app_user_roles
    WHERE auth_user_id = auth.uid()
    AND role = 'admin'
  )
);

CREATE POLICY "Admins can update insights images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'insights-images' AND
  EXISTS (
    SELECT 1 FROM app_user_roles
    WHERE auth_user_id = auth.uid()
    AND role = 'admin'
  )
);

CREATE POLICY "Admins can delete insights images"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'insights-images' AND
  EXISTS (
    SELECT 1 FROM app_user_roles
    WHERE auth_user_id = auth.uid()
    AND role = 'admin'
  )
);