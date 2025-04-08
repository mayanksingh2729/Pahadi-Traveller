
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogData } from '@/data/blogData';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const BlogPost = () => {
  const { id } = useParams();
  
  // Find the blog post with the matching ID
  const post = blogData.find(post => post.id === id);
  
  // If post not found, show an error message
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="content-container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
          <Button>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  // Find related posts based on category and tags
  const relatedPosts = blogData
    .filter(relatedPost => 
      relatedPost.id !== post.id && 
      (
        relatedPost.category === post.category || 
        (relatedPost.tags && post.tags && 
          relatedPost.tags.some(tag => post.tags.includes(tag)))
      )
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-50 py-6">
        <div className="content-container">
          <Link to="/blog" className="inline-flex items-center text-forest-700 hover:text-forest-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all blogs
          </Link>
          
          <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-10">
            {/* Hero image */}
            <div className="aspect-video w-full relative">
              <Dialog>
                <DialogTrigger asChild>
                  <img 
                    src={post.imageSrc} 
                    alt={post.title} 
                    className="w-full h-full object-cover cursor-zoom-in"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                  <img 
                    src={post.imageSrc} 
                    alt={post.title} 
                    className="w-full h-auto object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Blog content */}
            <div className="p-6 md:p-10">
              {post.category && (
                <Link to={`/blog/category/${post.category.toLowerCase()}`}>
                  <span className="inline-block text-xs font-medium bg-forest-100 text-forest-800 px-2.5 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                </Link>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                {post.tags && (
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{post.tags.join(', ')}</span>
                  </div>
                )}
              </div>
              
              <div className="prose prose-forest max-w-none">
                {post.content?.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                {!post.content && (
                  <>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Uttarakhand, nestled in the bosom of the Himalayas, is a state of bewildering beauty and serene spirituality. From the lofty snow-capped peaks to the gentle meadows, from the dense forests to the pristine lakes, Uttarakhand is a paradise for nature lovers.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      The state is also renowned for its numerous temples and is often referred to as "Devbhumi" or "Land of the Gods". The Char Dham pilgrimage, which includes Yamunotri, Gangotri, Kedarnath, and Badrinath, attracts millions of devotees every year.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Beyond its natural and spiritual allure, Uttarakhand boasts a rich cultural heritage. The folklore, dances, and music are as enchanting as the scenery. Local festivals like Kumaoni Holi and Garhwali Basant Panchami are celebrated with immense enthusiasm.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Adventure enthusiasts find their calling in Uttarakhand. Trekking, river rafting, paragliding, skiing—the options are endless. Places like Auli, Rishikesh, and Munsiyari have become hubs for adrenaline-pumping activities.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      The local cuisine, influenced by the mountain life, is a delightful mix of simplicity and flavor. Dishes like Kafuli, Jhangora ki Kheer, and Aloo ke Gutke tantalize the taste buds.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      But perhaps what sets Uttarakhand apart is its people. Warm, hospitable, and rooted in traditions, they welcome visitors with open arms. Their stories, passed down through generations, add an extra layer of charm to this already magical place.
                    </p>
                  </>
                )}
              </div>
            </div>
          </article>
          
          {/* Related posts section */}
          {relatedPosts.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <Link to={`/blog/${relatedPost.id}`}>
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={relatedPost.imageSrc} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 hover:text-forest-700 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 text-sm">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </>
  );
};

export default BlogPost;
