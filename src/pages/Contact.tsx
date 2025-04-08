
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        title="Contact Us"
        subtitle="Have questions or want to collaborate? We'd love to hear from you!"
      />

      <section className="section-padding">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about Uttarakhand travel, want to share your stories, or are interested in collaborating with us, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-forest-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">Satpuli, Uttarakhand, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mountain-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-mountain-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:info@himalayanwanderlust.com" className="text-gray-600 hover:text-forest-700 transition-colors">
                      info@pahaditravellerlust.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spirit-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-spirit-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-forest-700 transition-colors">
                      +91 8755743400
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-earth-100 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-earth-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Social Media</h3>
                    <div className="text-gray-600">
                      Follow us on 
                      <a href="https://www.instagram.com/mayanknegi.27?igsh=MTdtMm9rOHE5NDF2bw==" target="_blank" rel="noopener noreferrer" className="text-forest-700 hover:text-forest-800 font-medium mx-1">
                        Instagram
                      </a>
                      or
                      <a href="https://www.facebook.com/profile.php?id=61573616938908" target="_blank" rel="noopener noreferrer" className="text-forest-700 hover:text-forest-800 font-medium mx-1">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mayank Negi"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Your Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@pahaditravellerlust.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Your Message <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-forest-700 hover:bg-forest-800 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
