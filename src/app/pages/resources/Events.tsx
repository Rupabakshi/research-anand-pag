import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, MapPin, Users, Clock, Video, ArrowRight } from 'lucide-react';
import { PrefetchLink } from '../../components/PrefetchLink';

export default function Events() {
  const { theme } = useTheme();
  const upcomingEvents = [
    {
      id: 1,
      title: 'SAP S/4HANA Migration Summit 2026',
      date: 'March 15, 2026',
      time: '9:00 AM - 5:00 PM PST',
      location: 'San Francisco, CA',
      type: 'In-Person',
      attendees: 500,
      description: 'Full-day summit covering migration strategies, risk mitigation, and success stories from Fortune 500 companies preparing for the 2027 SAP deadline.',
      topics: ['Migration Planning', 'Change Management', 'Technical Architecture', 'ROI Optimization'],
      speakers: ['Sekhar Yenamandra, CEO', 'Industry Experts', 'Client Panel'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
      status: 'Registration Open'
    },
    {
      id: 2,
      title: 'Regulatory Compliance Automation Webinar',
      date: 'March 8, 2026',
      time: '2:00 PM - 3:30 PM EST',
      location: 'Virtual',
      type: 'Webinar',
      attendees: 250,
      description: 'Learn how leading organizations are achieving 100% regulatory compliance through intelligent automation and the ERC® framework.',
      topics: ['Compliance Automation', 'Risk Management', 'Audit Readiness', 'ERC® Framework'],
      speakers: ['Anand PAG Compliance Team', 'Fortune 100 CFO'],
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop',
      status: 'Registration Open'
    },
    {
      id: 3,
      title: 'Healthcare Revenue Cycle Innovation Forum',
      date: 'April 12, 2026',
      time: '10:00 AM - 4:00 PM CDT',
      location: 'Chicago, IL',
      type: 'In-Person',
      attendees: 300,
      description: 'Healthcare executives share strategies for reducing claim denials, accelerating collections, and improving patient financial experiences.',
      topics: ['Revenue Cycle Management', 'Claim Accuracy', 'Patient Experience', 'Process Automation'],
      speakers: ['Healthcare CFOs', 'Revenue Cycle Leaders', 'Technology Experts'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
      status: 'Registration Open'
    },
    {
      id: 4,
      title: 'Process Factory® Live Demo Session',
      date: 'February 28, 2026',
      time: '11:00 AM - 12:00 PM PST',
      location: 'Virtual',
      type: 'Webinar',
      attendees: 150,
      description: 'Interactive demonstration of Process Factory® Mobile showing real-world workflow automation scenarios and ROI calculations.',
      topics: ['Workflow Automation', 'Mobile Solutions', 'Integration', 'ROI Analysis'],
      speakers: ['Product Team', 'Implementation Experts'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      status: 'Registration Open'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'SAP Innovation Conference 2025',
      date: 'November 10, 2025',
      location: 'New York, NY',
      attendees: 800,
      recording: true
    },
    {
      id: 6,
      title: 'Financial Services Compliance Summit',
      date: 'October 5, 2025',
      location: 'Boston, MA',
      attendees: 400,
      recording: true
    },
    {
      id: 7,
      title: 'Manufacturing Excellence Workshop',
      date: 'September 20, 2025',
      location: 'Detroit, MI',
      attendees: 250,
      recording: true
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>

        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [-50, 50, -50],
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
            
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8"
              >
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  EVENTS & WEBINARS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[58px] xl:text-[72px] 2xl:text-[88px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-6"
              >
                Join Industry Leaders
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300"
              >
                Connect with SAP experts and peers at our exclusive events, summits, and webinars
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* Upcoming Events - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
                Upcoming Events
              </h2>
            </motion.div>

            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative aspect-[16/10] lg:aspect-auto">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider">
                        {event.type}
                      </div>
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-lg text-[11px] font-semibold">
                        {event.status}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-6 sm:p-8">
                      <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2 text-[14px] text-gray-600">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[14px] text-gray-600">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[14px] text-gray-600">
                          {event.type === 'Virtual' ? (
                            <Video className="w-4 h-4 text-blue-600" />
                          ) : (
                            <MapPin className="w-4 h-4 text-blue-600" />
                          )}
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[14px] text-gray-600">
                          <Users className="w-4 h-4 text-blue-600" />
                          <span>{event.attendees} Expected Attendees</span>
                        </div>
                      </div>

                      <p className="text-[14px] sm:text-[15px] leading-[1.65] text-gray-600 mb-6">
                        {event.description}
                      </p>

                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-3">Topics Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.topics.map((topic, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-[12px] font-medium rounded-full">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Speakers */}
                      <div className="mb-6">
                        <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-2">Speakers</h4>
                        <p className="text-[13px] text-gray-600">{event.speakers.join(' • ')}</p>
                      </div>

                      <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50">
                        <span className="relative flex items-center gap-2">
                          Register Now
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Past Events - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-4">
                Past Events
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[1.6] text-slate-300">
                Access recordings and materials from our previous events
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {event.recording && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-blue-600/20 border border-blue-400/30 rounded text-[10px] text-blue-300 font-semibold uppercase tracking-wider">
                        <Video className="w-3 h-3" />
                        Recording Available
                      </div>
                    )}
                  </div>

                  <h3 className="text-[20px] lg:text-[22px] font-bold text-white mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-[13px] text-slate-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-slate-300">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-slate-300">
                      <Users className="w-3.5 h-3.5" />
                      <span>{event.attendees} Attendees</span>
                    </div>
                  </div>

                  <button className="text-[13px] text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2">
                    Watch Recording
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                Stay Updated on Future Events
              </h2>
              
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-10 sm:mb-12">
                Subscribe to receive notifications about upcoming webinars, summits, and exclusive industry events
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <PrefetchLink
                  to="/company/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <span className="relative">Subscribe to Updates</span>
                </PrefetchLink>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
