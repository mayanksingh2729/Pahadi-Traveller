
import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  position: string;
  imageSrc: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Uttarakhand's beauty left me speechless. The travel guides on this site helped me discover hidden gems I would have missed otherwise.",
      name: "Priya Sharma",
      position: "Adventure Enthusiast",
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
    },
    {
      text: "The detailed blog posts about Kedarnath Trek prepared me perfectly for what to expect. This website is a treasure trove for Uttarakhand travel.",
      name: "Rahul Gupta",
      position: "Travel Photographer",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
    },
    {
      text: "I discovered the most magical sunset spots through this blog. The authenticity and genuine love for Uttarakhand shines through in every post.",
      name: "Anjali Negi",
      position: "Yoga Instructor",
      imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Travelers Say</h2>
          <p className="text-gray-600">
            Hear from fellow travelers who have explored the beauty of Uttarakhand with the help of our guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-forest-100" />
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.text}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.imageSrc} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
