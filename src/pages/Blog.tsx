
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { blogData } from '@/data/blogData';

const Blog = () => {
  // Blog categories - extract unique categories from blog data
  const allCategories = ["All", ...new Set(blogData.map(post => post.category || "Uncategorized"))];
  
  // State for active category
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  // State for search query
  const [searchQuery, setSearchQuery] = React.useState("");
  
  // Filter posts based on active category and search query
  const filteredPosts = blogData.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        title="Travel Stories & Guides"
        subtitle="Explore our collection of adventures, tips, and insights about traveling in Uttarakhand"
      />

      <section className="section-padding">
        <div className="content-container">
          {/* Search and filter section */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Blog Posts</h2>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-forest-700" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard 
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageSrc={post.imageSrc}
                date={post.date}
                author={post.author}
                category={post.category}
              />
            ))}
          </div>
          
          {/* Show when no posts match filter */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600">
                We couldn't find any articles matching your criteria. Try adjusting your search or selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Blog;
