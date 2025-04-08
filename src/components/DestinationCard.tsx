
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  location: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  description,
  imageSrc,
  location
}) => {
  return (
    <Card className="overflow-hidden card-hover shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative">
        <Link to={`/destinations/${id}`}>
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <div className="flex items-center mb-1 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
          </div>
        </Link>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 line-clamp-2">{description}</p>
        <Link 
          to={`/destinations/${id}`}
          className="mt-3 inline-block text-forest-700 hover:text-forest-800 font-medium"
        >
          Explore More
        </Link>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
