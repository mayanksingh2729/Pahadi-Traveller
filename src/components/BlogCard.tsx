
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  author: string;
  category?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  imageSrc,
  date,
  author,
  category
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video w-full overflow-hidden">
        <Link to={`/blog/${id}`}>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="pt-6">
        {category && (
          <Link to={`/blog/category/${category.toLowerCase()}`}>
            <span className="inline-block text-xs font-medium bg-forest-100 text-forest-800 px-2.5 py-1 rounded-full mb-3">
              {category}
            </span>
          </Link>
        )}
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-forest-700 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="border-t px-6 py-4 text-sm text-gray-500 flex items-center justify-between">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          <span>{author}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
