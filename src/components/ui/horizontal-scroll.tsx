"use client";
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const HorizontalScrollContainer = ({
  children,
  className = ""
}: HorizontalScrollProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={`relative pb-24 ${className}`}>
      <Carousel
        setApi={setApi}
        opts={{ 
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {children}
        </CarouselContent>
        
        {/* Stylish Arrow Buttons */}
        <CarouselPrevious className="left-4 lg:left-8 h-12 w-12 lg:h-16 lg:w-16 border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/50">
          <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" />
        </CarouselPrevious>
        
        <CarouselNext className="right-4 lg:right-8 h-12 w-12 lg:h-16 lg:w-16 border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/50">
          <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
        </CarouselNext>

        {/* Progress Indicator */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
          <p className="text-sm font-medium text-foreground">
            {current + 1} / {count}
          </p>
        </div>
      </Carousel>
    </section>
  );
};

interface HorizontalScrollItemProps {
  children: React.ReactNode;
  className?: string;
}

export const HorizontalScrollItem = ({
  children,
  className = ""
}: HorizontalScrollItemProps) => {
  return (
    <CarouselItem className={`min-w-full ${className}`}>
      {children}
    </CarouselItem>
  );
};
