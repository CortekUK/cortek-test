"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Testimonial {
  company: string;
  avatar: string;
  name: string;
  role: string;
  review: string;
  rating?: number;
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[];
  companyLogoPath?: string;
  avatarPath?: string;
  showRating?: boolean;
}

export const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, companyLogoPath = "", avatarPath = "", showRating = false, ...props }, ref) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div ref={ref} className={cn("py-16", className)} {...props}>
        <Carousel
          setApi={setApi}
          className="max-w-screen-xl mx-auto px-4 lg:px-8"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.company}
                className="flex flex-col items-center cursor-grab"
              >
                {showRating && testimonial.rating && (
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-5 h-5",
                          i < testimonial.rating! ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                )}
                
                <p className="max-w-xl text-balance text-center text-xl sm:text-2xl text-foreground italic">
                  "{testimonial.review}"
                </p>
                
                <div className="mt-8 flex flex-col items-center">
                  <div className="relative size-16 rounded-full overflow-hidden bg-gradient-to-br from-deep-purple to-electric-blue mb-4">
                    {testimonial.avatar ? (
                      <img
                        src={typeof testimonial.avatar === 'string' && testimonial.avatar.startsWith('http') 
                          ? testimonial.avatar 
                          : testimonial.avatar}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  
                  <h5 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h5>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-foreground-muted">
                    {testimonial.company}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "size-2 rounded-full transition-all duration-300",
                  index === current 
                    ? "bg-deep-purple w-6" 
                    : "bg-deep-purple/30 hover:bg-deep-purple/50"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCarousel.displayName = "TestimonialCarousel";