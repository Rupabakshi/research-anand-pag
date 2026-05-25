import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { PrefetchLink } from '../../components/PrefetchLink';
import { HeroH1, EyebrowPill } from '../../components/ui';

export default function Blog() {
  const { theme } = useTheme();
  const featuredPost = {
    title: 'The Future of SAP: S/4HANA Migration Strategies for 2026',
    excerpt: 'With the 2027 maintenance deadline approaching, enterprises face critical decisions about their SAP migration strategy. Learn the proven approaches that minimize risk while maximizing business value.',
    author: 'Sekhar Yenamandra',
    date: 'February 10, 2026',
    readTime: '8 min read',
    category: 'SAP Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    tags: ['S/4HANA', 'Migration', 'Digital Transformation']
  };

  const blogPosts = [
    {
      id: 1,
      title: 'ERC® Framework: Automating Regulatory Compliance in Utilities',
      excerpt: 'How utility companies are leveraging automated compliance workflows to meet stringent regulatory requirements while reducing manual effort by 80%.',
      author: 'Anand PAG Team',
      date: 'February 5, 2026',
      readTime: '6 min read',
      category: 'Regulatory Compliance',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      tags: ['ERC', 'Utilities', 'Compliance']
    },
    {
      id: 2,
      title: 'Process Factory® Mobile: Transforming Field Service Operations',
      excerpt: 'Real-world case studies showing how mobile-first SAP solutions are revolutionizing field service management and driving productivity gains.',
      author: 'Anand PAG Team',
      date: 'January 28, 2026',
      readTime: '7 min read',
      category: 'Mobile Solutions',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
      tags: ['Process Factory', 'Mobile', 'Field Service']
    },
    {
      id: 3,
      title: 'Healthcare Revenue Cycle Optimization with SAP',
      excerpt: 'Best practices for healthcare organizations looking to streamline billing, reduce claim denials, and improve patient financial experiences.',
      author: 'Anand PAG Team',
      date: 'January 20, 2026',
      readTime: '9 min read',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
      tags: ['Healthcare', 'Revenue Cycle', 'SAP']
    },
    {
      id: 4,
      title: 'Master Data Management: The Foundation of Digital Transformation',
      excerpt: 'Why successful SAP implementations start with clean, governed master data—and how to get there without disrupting operations.',
      author: 'Anand PAG Team',
      date: 'January 12, 2026',
      readTime: '5 min read',
      category: 'Data Management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Master Data', 'Data Governance', 'SAP']
    },
    {
      id: 5,
      title: 'SAP Workflow Automation: Eliminating Redundant Manual Activities',
      excerpt: 'Identify and automate the hidden inefficiencies in your business processes that cost millions in productivity annually.',
      author: 'Anand PAG Team',
      date: 'December 18, 2025',
      readTime: '6 min read',
      category: 'Process Optimization',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['Workflow', 'Automation', 'Efficiency']
    },
    {
      id: 6,
      title: 'Financial Services Compliance: Navigating Regulatory Complexity',
      excerpt: 'How financial institutions are using intelligent automation to stay ahead of evolving regulatory requirements across multiple jurisdictions.',
      author: 'Anand PAG Team',
      date: 'December 5, 2025',
      readTime: '8 min read',
      category: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&h=500&fit=crop',
      tags: ['Finance', 'Compliance', 'Automation']
    }
  ];

  const categories = ['All Posts', 'SAP Strategy', 'Regulatory Compliance', 'Mobile Solutions', 'Healthcare', 'Data Management', 'Process Optimization', 'Financial Services'];

  return (
    <div className="bg-white">
      
      {/* Hero Section - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [50, -50, 50],
            y: [-30, 50, -30],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', right: '10%' }}
        />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Centered Content */}
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  INSIGHTS & EXPERTISE
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <HeroH1 className="mb-6">
                  Industry Insights & Best Practices
                </HeroH1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300"
              >
                Expert perspectives on SAP transformation, regulatory compliance, and enterprise technology strategy
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Post - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 sm:mb-28"
            >
              <h2 className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-12">Featured Article</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-[12px] font-semibold uppercase tracking-wider">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-[13px] text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPost.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-[12px] font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50">
                    <span className="relative flex items-center gap-2">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* All Posts Grid */}
            <div>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-12">Latest Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    {/* Card */}
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider">
                          {post.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-[20px] lg:text-[22px] font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-[14px] sm:text-[15px] leading-[1.65] text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-3 text-[12px] text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.date}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-medium rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter CTA - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-32 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [-50, 50, -50],
              y: [-50, 50, -50],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6">
                Stay Informed on SAP Innovation
              </h2>
              
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-10 sm:mb-12">
                Subscribe to receive insights on SAP strategy, compliance, and digital transformation delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <PrefetchLink
                  to="/company/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <span className="relative">Subscribe to Newsletter</span>
                </PrefetchLink>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
