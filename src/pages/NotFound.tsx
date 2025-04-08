
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mountain } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <Mountain className="h-24 w-24 text-forest-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold font-heading mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Trail Not Found</h2>
        <p className="text-gray-600 mb-8">
          Looks like you've wandered off the beaten path! The page you're looking for seems to be hiding somewhere in the Himalayan wilderness.
        </p>
        <Button asChild className="bg-forest-700 hover:bg-forest-800">
          <Link to="/">
            Back to Home Trail
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
