import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send, Building2, Clock } from 'lucide-react';
import { useState } from 'react';
import { HeroH1, EyebrowPill } from '../../components/ui';

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:info@anand-pag.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Irving, TX',
      label: 'Headquarters',
      address: '1300 Walnut Hill Lane, Ste. 111',
      city_state_zip: 'Irving, TX 75038',
      phone: '+1 (972) 325-8874',
      email: 'info@anand-pag.com'
    },
    {
      city: 'Sunnyvale, CA',
      label: 'West Coast Office',
      address: '1155 Sonora Court, Ste. 106',
      city_state_zip: 'Sunnyvale, CA 94086',
      phone: '+1 (972) 325-8874',
      email: 'info@anand-pag.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Dark */}
      <section className="relative  overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
              backgroundSize: '64px 64px'
            }}
          />
          
          {/* Floating Orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [-50, 50, -50],
              y: [-50, 75, -50],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '10%', left: '5%' }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
            animate={{
              x: [50, -50, 50],
              y: [50, -75, 50],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '40%', right: '10%' }}
          />
        </div>

        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-32 sm:py-40 lg:py-48">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6 sm:mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  GET IN TOUCH
                </span>
              </div>

              {/* Headline */}
              <HeroH1 className="mb-6 sm:mb-8">
                Let's build something<br />
                extraordinary together
              </HeroH1>

              {/* Subline */}
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] leading-[1.5] sm:leading-[1.6] text-slate-300 mb-8">
                Ready to transform your enterprise? Our team is here to discuss your digital transformation needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Section - Light */}
      <section className="bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                  Send us a message
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[14px] font-[600] text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-[600] text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="john.smith@company.com"
                    />
                  </div>

                  {/* Company & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-[14px] font-[600] text-gray-900 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[14px] font-[600] text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-[14px] font-[600] text-gray-900 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[14px] font-[600] text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  </button>
                </form>
              </motion.div>

              {/* Right: Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                    Contact information
                  </h2>
                  <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600">
                    Prefer to reach out directly? Here's how you can get in touch with our team.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-600/50 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[18px] font-[700] text-gray-900 mb-1">Email Us</h3>
                        <a 
                          href="mailto:info@anand-pag.com" 
                          className="text-[15px] text-blue-600 hover:text-blue-700 font-medium break-all"
                        >
                          info@anand-pag.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-600/50 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[18px] font-[700] text-gray-900 mb-1">Call Us</h3>
                        <a 
                          href="tel:+19723258874" 
                          className="text-[15px] text-blue-600 hover:text-blue-700 font-medium"
                        >
                          +1 (972) 325-8874
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-600/50 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[18px] font-[700] text-gray-900 mb-2">Business Hours</h3>
                        <div className="space-y-1 text-[14px] text-gray-600">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Notice */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                  <p className="text-[14px] text-gray-700 leading-[1.65]">
                    <strong className="font-[600] text-gray-900">Quick Response:</strong> We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations - Light */}
      <section className="bg-gray-50 py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
                Our locations
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 max-w-2xl mx-auto">
                Visit us at one of our offices across the United States.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[22px] font-[700] text-gray-900 mb-1">
                        {office.city}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-blue-100 text-blue-700">
                        {office.label}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-[15px]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div className="text-gray-600">
                        <p>{office.address}</p>
                        <p>{office.city_state_zip}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-blue-600 hover:text-blue-700 font-medium">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-700 font-medium">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
