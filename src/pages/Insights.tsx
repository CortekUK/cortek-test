import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightCard from "@/components/InsightCard";
import { Skeleton } from "@/components/ui/skeleton";
import { InsightsHeroBackground } from "@/components/ui/insights-hero-background";

const Insights = () => {
  const { data: insights, isLoading } = useQuery({
    queryKey: ["insights"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("insights")
        .select("*")
        .eq("is_published", true)
        .order("published_date", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Insights & Articles | CORTEK</title>
        <meta
          name="description"
          content="Discover insights on automation, CRM systems, and digital transformation from CORTEK."
        />
        <meta
          name="keywords"
          content="CRM insights, business automation, digital transformation, WhatsApp automation, business efficiency"
        />
        <link rel="canonical" href="https://www.cortek.io/insights" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Insights & Articles | CORTEK" />
        <meta
          property="og:description"
          content="Discover insights on automation, CRM systems, and digital transformation from CORTEK."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cortek.io/insights" />
        <meta property="og:image" content="https://www.cortek.io/cortek-social-preview.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insights & Articles | CORTEK" />
        <meta
          name="twitter:description"
          content="Discover insights on automation, CRM systems, and digital transformation from CORTEK."
        />
        <meta name="twitter:image" content="https://www.cortek.io/cortek-social-preview.png" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-6 overflow-hidden bg-background">
        <InsightsHeroBackground />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-[800px] mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sora mb-6">
              <span className="text-foreground">Insights & </span>
              <span className="animate-gradient-shift bg-gradient-to-r from-deep-purple via-electric-blue to-deep-purple bg-clip-text text-transparent">
                Articles
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-4 leading-relaxed">
              Explore CRM strategy, automation best practice, and business innovation — powered by Cortek.
            </p>
            <p className="text-base md:text-lg text-foreground-secondary/70 leading-relaxed">
              Practical guides, industry breakdowns, and real use cases for growing teams.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-video w-full rounded-2xl" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          ) : insights && insights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight) => (
                <InsightCard
                  key={insight.id}
                  title={insight.title}
                  summary={insight.summary}
                  thumbnail_url={insight.thumbnail_url}
                  slug={insight.slug}
                  published_date={insight.published_date}
                  author={insight.author}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No articles available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Insights;
