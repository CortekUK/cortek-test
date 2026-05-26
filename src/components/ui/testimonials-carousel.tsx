"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCarouselProps {
  testimonials: Array<{
    text: string;
    image: string;
    name: string;
    role: string;
  }>;
  className?: string;
}

function TestimonialsCarousel({ testimonials, className = "" }: TestimonialCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearTimeout(intervalId);
  }, [api, current]);

  return (
    <section className={`w-full py-20 lg:py-32 ${className}`}>
      <div className="section-container">
        <div className="flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What <span className="text-deep-purple">Our Clients</span> Say
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-deep-purple rounded-full"></div>
            </div>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto mt-8">
              See how businesses across industries are transforming their operations with Cortek automation.
            </p>
          </div>
          
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-background-light rounded-xl h-full p-6 md:aspect-video flex justify-between flex-col border border-foreground/[0.08] hover:border-deep-purple/20 transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all min-h-[300px] md:min-h-0">
                    <Quote className="w-8 h-8 stroke-1 text-deep-purple/60" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <p className="text-foreground-secondary max-w-xs text-base leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="flex flex-row gap-3 text-sm items-center pt-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={testimonial.image} />
                          <AvatarFallback className="bg-deep-purple/10 text-deep-purple font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground">{testimonial.name}</span>
                          <span className="text-foreground-secondary text-sm">{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export { TestimonialsCarousel };