import { Helmet } from "react-helmet-async";
import { useParams, Navigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RichTextContent from "@/components/RichTextContent";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleHeroBackground from "@/components/ArticleHeroBackground";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import { BLAB_URL } from "@/lib/constants";
import { ChevronRight, Calendar, User } from "lucide-react";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const { data: article, isLoading, error } = useQuery({
    queryKey: ["insight", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("insights")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  // Fetch 3 latest articles for "More from Insights" section
  const { data: relatedArticles } = useQuery({
    queryKey: ["related-insights", article?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("insights")
        .select("*")
        .eq("is_published", true)
        .neq("id", article?.id || "")
        .order("published_date", { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
    enabled: !!article?.id,
  });

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1147] to-[#0a0e27]">
          <div className="pt-20">
            <Skeleton className="w-full h-[500px] bg-white/5" />
            <div className="container mx-auto max-w-[900px] px-6 py-16 space-y-8">
              <Skeleton className="h-12 w-3/4 bg-white/5" />
              <Skeleton className="h-4 w-1/2 bg-white/5" />
              <Skeleton className="h-96 w-full bg-white/5" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !article) {
    return <Navigate to="/insights" replace />;
  }

  const formattedDate = new Date(article.published_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const articleUrl = `https://www.cortek.io/insights/${article.slug}`;
  const metaDescription = article.meta_description || article.summary;

  return (
    <>
      <Helmet>
        <title>{article.title} | CORTEK Insights</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={articleUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${article.title} | CORTEK Insights`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={article.thumbnail_url} />
        <meta property="article:published_time" content={article.published_date} />
        <meta property="article:author" content={article.author} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${article.title} | CORTEK Insights`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={article.thumbnail_url} />
        
        {/* Schema.org BlogPosting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            image: article.thumbnail_url,
            datePublished: article.published_date,
            dateModified: article.updated_at,
            author: {
              "@type": "Person",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "CORTEK",
              logo: {
                "@type": "ImageObject",
                url: "https://www.cortek.io/lovable-uploads/favicon-ct-512.png",
              },
            },
            description: metaDescription,
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Full-width Hero Section with Category-Themed Background */}
      <div className="relative w-full h-[500px] overflow-hidden bg-[#0a0e27]">
        {/* Category-based elegant background */}
        <ArticleHeroBackground title={article.title} />
        
        {/* Hero Content */}
        <div className="relative h-full flex items-end">
          <div className="container mx-auto max-w-[900px] px-6 pb-16">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-white/70 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-white/90">{article.title}</span>
            </nav>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora text-white mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By {article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body - Dark Gradient Background */}
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1147] to-[#0a0e27]">
        <article className="py-16 px-6">
          <div className="container mx-auto max-w-[900px]">
            {/* Article Content */}
            <RichTextContent content={article.body_content} className="mb-12" />
            
            {/* Social Share */}
            <div className="border-t border-white/10 pt-8 mb-12">
              <SocialShareButtons
                url={articleUrl}
                title={article.title}
                summary={article.summary}
              />
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--electric-blue))] border-none rounded-2xl overflow-hidden mb-16">
              <CardContent className="p-8 md:p-12 text-center text-white">
                <div className="max-w-[720px] mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
                    Ready to build your bespoke CRM system?
                  </h2>
                  <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed">
                    Speak to the Cortek team about creating a tailored CRM designed around your workflows — complete with built-in automation that saves hours every week.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => setShowBookingModal(true)}
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg mb-3"
                  >
                    Book a Consultation
                  </Button>
                  <p className="text-sm text-white/70">
                    Free 30-minute consultation • No obligation • Bespoke proposal included
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            {relatedArticles && relatedArticles.length > 0 && (
              <div className="mt-20">
                <h2 className="text-3xl font-bold font-sora text-white mb-8">
                  More from Insights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      to={`/insights/${related.slug}`}
                      className="group"
                    >
                      <Card className="h-full bg-white/[0.03] border-white/10 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={related.thumbnail_url}
                            alt={related.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-white line-clamp-2 text-lg group-hover:text-[hsl(var(--electric-blue))] transition-colors">
                            {related.title}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>

      <Footer />
      
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        blabUrl={BLAB_URL}
      />
    </>
  );
};

export default InsightArticle;
