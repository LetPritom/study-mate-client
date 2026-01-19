import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogPosts = [
  {
    title: "How to Find the Perfect Study Partner in 2026",
    excerpt: "Discover the key traits to look for in a study buddy and how StudyMate's smart matching can save you hours of frustration.",
    date: "January 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    category: "Study Tips",
    gradient: "from-[#f55a00] to-[#ff8c00]"
  },
  {
    title: "Why Group Study Beats Solo Learning (Science Explained)",
    excerpt: "Recent studies show collaborative learning boosts retention by up to 50%. Here's how to make it work for you.",
    date: "December 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    category: "Learning Science",
    gradient: "from-[#ff8c00] to-[#f55a00]"
  },
  {
    title: "Top 5 Subjects Students Are Struggling With Right Now",
    excerpt: "From Physics to Programming — see what's trending and how finding the right partner can change everything.",
    date: "January 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    category: "Education Trends",
    gradient: "from-[#f55a00] to-[#e04e00]"
  }
];

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 to-transparent pointer-events-none"></div>

      <div className=" mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-base-content">Latest from the </span>
            <span className="bg-linear-to-r from-[#f55a00] to-[#ff8c00] bg-clip-text text-transparent">
              StudyMate Blog
            </span>
          </h2>
          <p className="mt-5 text-xl text-base-content/70 max-w-3xl mx-auto">
            Practical tips, learning science, and real student stories to help you study smarter.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 120}`}
              className="group bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-base-300/50 hover:border-[#f55a00]/30 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-medium text-white bg-linear-to-r ${post.gradient}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-center gap-4 text-sm text-base-content/60 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#f55a00] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-base-content/70 mb-6 line-clamp-3 grow">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="mt-auto">
                  <span className="inline-flex cursor-pointer items-center text-[#f55a00] font-medium group-hover:text-[#ff8c00] transition-colors">
                    Read More 
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="btn btn-lg bg-linear-to-r from-[#f55a00] to-[#ff8c00] hover:from-[#e04e00] hover:to-[#f57c00] text-white px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-none">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;