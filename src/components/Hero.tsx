
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaText = "Explore Destinations",
  ctaLink = "/destinations"
}) => {
  return (
    <div 
      className="relative h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="content-container relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>
          {ctaText && ctaLink && (
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-medium text-lg">
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
