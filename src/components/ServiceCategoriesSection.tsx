import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { HorizontalScrollContainer, HorizontalScrollItem } from "@/components/ui/horizontal-scroll";
import { AnimatedCard, CardVisual, Visual3 } from "@/components/ui/animated-card-chart";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import IntegrationsGrid from "@/components/ui/integrations-grid";
import { AnimatedNetwork } from "@/components/ui/animated-network";
import operationsAutomationImg from "@/assets/services/operation.jpg";
import reportingInsightsImg from "@/assets/services/analytics.jpg";
import allSolutionsImg from "@/assets/services/solutions.jpg";
const serviceCategories = [{
  title: "Operations Management",
  description: "Simplify your day-to-day with a CRM that streamlines bookings, tasks, and workflows. Cortek builds systems that connect your tools, manage teams, and automate reminders — all from one intuitive platform.",
  features: ["Booking & reservation tools", "Task and workflow automation", "Team collaboration tools", "Real-time notifications"],
  image: operationsAutomationImg,
  icon: Zap,
  tag: "automation",
  src: operationsAutomationImg,
  link: "/contact",
  color: "#10B981",
  textColor: "#1F2937"
}, {
  title: "Reporting & Insights",
  description: "Make smarter decisions with built-in analytics that track performance across your business. Custom dashboards and live data reports give you visibility into every part of your operations.",
  features: ["Usage analytics", "Real-time dashboards", "Performance reports", "Customer feedback tracking"],
  image: reportingInsightsImg,
  icon: TrendingUp,
  tag: "insights",
  src: reportingInsightsImg,
  link: "/contact",
  color: "#8B5CF6",
  textColor: "#1F2937"
}, {
  title: "Customer Engagement",
  description: "Build lasting relationships through personalised communication and automated touchpoints. Cortek CRMs keep customers informed, engaged, and coming back — across email, SMS, and social channels.",
  features: ["Automated WhatsApp & SMS messaging", "Customer journey mapping", "Social media scheduling", "Personalised promotions"],
  image: operationsAutomationImg,
  icon: Users,
  tag: "engagement",
  src: null,
  link: "/contact",
  color: "#3B82F6",
  textColor: "#1F2937",
  isDynamic: true
}, {
  title: "Bespoke Solutions",
  description: "Every business is unique — your CRM should be too. From advanced integrations to industry-specific tools, Cortek develops fully customised systems that fit your exact workflow.",
  features: ["Bespoke integrations", "Advanced CRM features", "Industry-specific modules", "Custom development"],
  image: allSolutionsImg,
  icon: Sparkles,
  tag: "solutions",
  src: allSolutionsImg,
  link: "/contact",
  color: "#F59E0B",
  textColor: "#1F2937"
}];
const ServiceCategoriesSection = () => {
  return <>
      {/* Section Header */}
      <section className="section-spacing bg-white dark:bg-background animate-section-enter">
        <div className="section-container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }} viewport={{
          once: true
        }} className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-sora">
              Core <span className="bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">System Modules</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-8 font-inter">
              Every Cortek CRM includes fully custom modules designed to fit your operations — with automation built into each.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Desktop: Horizontal Scrolling Service Categories */}
      <div className="hidden lg:block">
        <HorizontalScrollContainer>
          {serviceCategories.map((category, index) => {
          const IconComponent = category.icon;
          return <HorizontalScrollItem key={category.title}>
                <div className="flex items-center justify-center h-full relative" style={{
              background: `linear-gradient(135deg, ${category.color}15 0%, ${category.color}05 100%)`
            }}>
                  <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div initial={{
                  opacity: 0,
                  x: -50
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.2
                }} className="space-y-8">
                      <div className="flex items-center space-x-4">
                        <div className="p-4 rounded-2xl shadow-lg" style={{
                      backgroundColor: category.color
                    }}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sora">
                        {category.title}
                      </h3>

                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-inter max-w-2xl">
                        {category.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-foreground font-sora">
                          Key Features:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{
                          backgroundColor: category.color
                        }} />
                              <span className="text-muted-foreground font-inter">
                                {feature}
                              </span>
                            </li>)}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link to={category.link}>
                          <Button size="lg" className="text-white font-semibold" style={{
                        backgroundColor: category.color
                      }}>
                            Get Started
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div initial={{
                  opacity: 0,
                  x: 50
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.4
                }} className="relative">
                      {index === 0 ?
                  // OrbitingSkills for Operations Automation
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] flex items-center justify-center">
                          <OrbitingSkills />
                        </div> : index === 1 ?
                  // Animated Chart for Reporting & Insights
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                          <AnimatedCard className="w-full h-[500px] border-0">
                            <CardVisual className="h-full">
                              <Visual3 mainColor="#8b5cf6" secondaryColor="#a78bfa" />
                            </CardVisual>
                          </AnimatedCard>
                        </div> : index === 2 ?
                  // AnimatedNetwork for Customer Engagement
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
                          <AnimatedNetwork />
                        </div> : index === 3 ?
                  // IntegrationsGrid for See All Solutions
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-background flex items-center justify-center p-8">
                          <IntegrationsGrid />
                        </div> :
                  // Gradient background for other categories
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]" style={{
                    background: `linear-gradient(135deg, ${category.color}25 0%, ${category.color}10 100%)`
                  }} />}

                      {/* Floating Stats */}
                      <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border">
                        <div className="text-2xl font-bold text-foreground">
                          {index === 0 ? "80%" : index === 1 ? "100%" : index === 2 ? "3x" : "100%"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {index === 0 ? "Less Manual" : index === 1 ? "Live Data" : index === 2 ? "Engagement" : "Custom"}{" "}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </HorizontalScrollItem>;
        })}
        </HorizontalScrollContainer>
      </div>

      {/* Mobile: Simple Elegant Cards */}
      <section className="block lg:hidden section-spacing bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <div className="grid gap-6 md:gap-8">
            {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return <motion.div key={category.title} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Card Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? 'h-80' : 'h-48'}`}>
                    {index === 0 ?
                // OrbitingSkills for Operations Automation on mobile
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background">
                        <OrbitingSkills />
                      </div> : index === 1 ?
                // Animated Chart for Reporting & Insights on mobile
                <AnimatedCard className="w-full h-full border-0 rounded-none">
                        <CardVisual className="h-full">
                          <Visual3 mainColor="#8b5cf6" secondaryColor="#a78bfa" />
                        </CardVisual>
                      </AnimatedCard> : index === 2 ?
                // AnimatedNetwork for Customer Engagement on mobile
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
                        <AnimatedNetwork />
                      </div> : index === 3 ?
                // IntegrationsGrid for See All Solutions on mobile
                <div className="w-full h-[320px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-background p-4">
                        <IntegrationsGrid />
                      </div> : <div className="w-full h-full" style={{
                  background: `linear-gradient(135deg, ${category.color}25 0%, ${category.color}10 100%)`
                }} />}

                    {/* Icon Overlay */}
                    <div className="absolute top-4 left-4 p-3 rounded-xl shadow-lg" style={{
                  backgroundColor: category.color
                }}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Stat Badge */}
                    <div className="absolute bottom-4 right-4 z-10 bg-white dark:bg-gray-900 rounded-lg px-3 py-2 shadow-lg">
                      <div className="text-sm font-bold text-foreground">
                        {index === 0 ? "80%" : index === 1 ? "100%" : index === 2 ? "3x" : "100%"}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {index === 0 ? "Less Manual" : index === 1 ? "Live Data" : index === 2 ? "Engagement" : "Custom"}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-sora">
                      {category.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3 font-sora">
                        Key Features:
                      </h4>
                      <div className="space-y-2">
                        {category.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{
                        backgroundColor: category.color
                      }} />
                            <span className="text-sm text-muted-foreground font-inter">
                              {feature}
                            </span>
                          </div>)}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link to={category.link} className="block">
                      <Button className="w-full text-white font-semibold" style={{
                    backgroundColor: category.color
                  }}>
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </>;
};
export default ServiceCategoriesSection;