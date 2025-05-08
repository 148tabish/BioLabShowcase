import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface SlideProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const slides: SlideProps[] = [
  {
    title: "Advanced Research Peptides",
    description: "Discover our premium collection of peptides for laboratory research with verified molecular structure and high purity guarantee.",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80",
    link: "/product/1",
    category: "Peptides",
  },
  {
    title: "Professional Laboratory Equipment",
    description: "Equip your lab with our state-of-the-art calibration kits and analytical instruments for precise research applications.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80",
    link: "/product/11",
    category: "Laboratory Equipment",
  },
  {
    title: "Pharmaceutical Grade Compounds",
    description: "Ultra-pure compounds meeting pharmaceutical specifications for advanced research with GMP compliance.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80",
    link: "/product/14",
    category: "Pharmaceutical Compounds",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <div 
      className="relative mb-12" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel 
        className="w-full overflow-hidden"
        opts={{
          loop: true,
          duration: 50, // Faster transition
        }}
        setApi={(api) => {
          api?.on('select', () => {
            setActiveIndex(api.selectedScrollSnap());
          });
          // Programmatically navigate to the active index when it changes
          if (api && api.selectedScrollSnap() !== activeIndex) {
            api.scrollTo(activeIndex);
          }
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-white">
                  <div className="max-w-3xl">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/80 rounded-full mb-4">
                      {slide.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base mb-8 max-w-2xl text-gray-200">
                      {slide.description}
                    </p>
                    <Link href={slide.link}>
                      <Button size="lg" className="font-medium">
                        View Product
                        <i className="fas fa-arrow-right ml-2 text-xs"></i>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === index ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none text-white" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none text-white" />
      </Carousel>
    </div>
  );
}