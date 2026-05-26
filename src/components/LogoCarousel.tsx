const LogoCarousel = () => {
  // Placeholder logo names - in a real implementation these would be actual client logos
  const logos = [
    "SportZone", "FitnessCorp", "TechFlow", "HealthFirst", "ClubMax", 
    "AutoFlow", "BusinessHub", "SmartRetail", "FlexiGym", "DataDrive"
  ];

  return (
    <section className="section-divider section-spacing bg-background-light animate-section-enter">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="relative inline-block">
            <h3 className="text-lg font-medium text-foreground-secondary mb-8">
              Trusted Across Businesses
            </h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-deep-purple rounded-full"></div>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-slide-x-infinite space-x-12">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 w-40 h-16 bg-background border border-neutral-border rounded-lg flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-shadow duration-200"
              >
                <span className="text-foreground-secondary font-medium text-sm">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;