import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from 'lucide-react';
import { HeroH1, EyebrowPill } from '../../components/ui';

export default function Privacy() {
  const { theme } = useTheme();
  const lastUpdated = "February 17, 2026";

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, including name, email address, company name, phone number, and any other information you choose to provide when you contact us or use our services.",
        "We automatically collect certain information about your device when you visit our website, including IP address, browser type, operating system, and browsing behavior through cookies and similar technologies."
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and respond to your requests and inquiries",
        "To send you technical notices, updates, security alerts, and support messages",
        "To communicate with you about products, services, offers, and events",
        "To monitor and analyze trends, usage, and activities in connection with our services",
        "To detect, prevent, and address technical issues and protect against fraud or malicious activity"
      ]
    },
    {
      icon: Shield,
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share your information with trusted service providers who assist us in operating our website and conducting our business, under strict confidentiality agreements.",
        "We may disclose your information if required by law or in response to valid requests by public authorities.",
        "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
      ]
    },
    {
      icon: Eye,
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "We use industry-standard encryption protocols (SSL/TLS) for data transmission.",
        "Access to personal information is restricted to authorized personnel only.",
        "While we strive to protect your personal information, no method of transmission over the Internet is 100% secure."
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content: [
        "Access: You may request access to the personal information we hold about you.",
        "Correction: You may request correction of inaccurate or incomplete personal information.",
        "Deletion: You may request deletion of your personal information, subject to legal obligations.",
        "Opt-out: You may opt out of receiving promotional communications by following the unsubscribe instructions.",
        "Cookies: You can set your browser to refuse cookies or alert you when cookies are being sent."
      ]
    },
    {
      icon: AlertCircle,
      title: "Data Retention",
      content: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.",
        "When we no longer need your personal information, we will securely delete or anonymize it."
      ]
    }
  ];

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
                  LEGAL
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <HeroH1 className="mb-6">
                  Privacy Policy
                </HeroH1>
              </motion.div>

              {/* Last Updated */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300"
              >
                Last Updated: {lastUpdated}
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <p className="text-[18px] sm:text-[20px] leading-[1.7] text-gray-600 mb-6">
                At Anand PAG Inc., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-[18px] sm:text-[20px] leading-[1.7] text-gray-600">
                By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-16 sm:space-y-20">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 pt-1">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-4 pl-16">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mt-20 sm:mt-28"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                International Data Transfers
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-6">
                Anand PAG Inc. operates globally with offices in the United States and India. Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
              
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6 mt-12">
                Children's Privacy
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
              
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6 mt-12">
                Changes to This Privacy Policy
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6 mt-12">
                Contact Us
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-6">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-900 font-semibold mb-2">
                  Anand PAG Inc.
                </p>
                <p className="text-[15px] leading-[1.7] text-gray-600">
                  3100 Olympus Blvd, #460<br />
                  Coppell, TX 75019<br />
                  Email: <a href="mailto:privacy@anand-pag.com" className="text-blue-600 hover:text-blue-700 font-medium">privacy@anand-pag.com</a><br />
                  Phone: <a href="tel:+19724998126" className="text-blue-600 hover:text-blue-700 font-medium">+1 (972) 499-8126</a>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
