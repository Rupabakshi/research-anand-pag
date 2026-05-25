import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { FileText, Scale, AlertTriangle, Shield, Users, Ban } from 'lucide-react';
import { HeroH1, EyebrowPill } from '../../components/ui';

export default function Terms() {
  const { theme } = useTheme();
  const lastUpdated = "February 17, 2026";

  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the Anand PAG Inc. website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you should not use our website or services.",
        "We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of those changes."
      ]
    },
    {
      icon: FileText,
      title: "Use of Services",
      content: [
        "You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions.",
        "You may not use our services in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use of our services.",
        "You are responsible for maintaining the confidentiality of any login credentials and for all activities that occur under your account.",
        "We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business."
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property Rights",
      content: [
        "All content on this website, including text, graphics, logos, images, software, and documentation, is the property of Anand PAG Inc. and is protected by United States and international copyright, trademark, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from our website without prior written consent.",
        "Process Factory® and other product names are registered trademarks of Anand PAG Inc. Use of these trademarks without permission is strictly prohibited.",
        "Client data and customizations developed specifically for client implementations remain the property of the respective clients."
      ]
    },
    {
      icon: Shield,
      title: "Professional Services",
      content: [
        "Our SAP consulting and implementation services are provided in accordance with the terms specified in individual Statement of Work (SOW) agreements.",
        "We make no guarantees regarding specific outcomes or results from our services, though we commit to industry best practices and professional standards.",
        "Client responsibilities include providing timely access to systems, data, and subject matter experts as outlined in the SOW.",
        "Project timelines and deliverables are subject to change based on scope modifications, client delays, or unforeseen technical challenges."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Disclaimers and Limitations of Liability",
      content: [
        "OUR SERVICES ARE PROVIDED \"AS IS\" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.",
        "We do not warrant that our services will be uninterrupted, error-free, or completely secure. We are not responsible for any service interruptions, including but not limited to system failures, network issues, or acts of third parties.",
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANAND PAG INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR DATA, ARISING FROM YOUR USE OF OUR SERVICES.",
        "Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific services giving rise to the claim during the twelve (12) months preceding the claim."
      ]
    },
    {
      icon: Ban,
      title: "Prohibited Activities",
      content: [
        "You may not use our services to transmit any unlawful, harassing, defamatory, abusive, threatening, or obscene content.",
        "You may not attempt to gain unauthorized access to our systems, networks, or user accounts.",
        "You may not use automated systems (bots, scrapers) to access our services without written permission.",
        "You may not reverse engineer, decompile, or disassemble any software provided as part of our services.",
        "You may not use our services to compete with our business or to develop competing products or services."
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
                  Terms & Conditions
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
                These Terms and Conditions govern your use of the Anand PAG Inc. website and services. By accessing our website or engaging our services, you agree to comply with and be bound by these terms.
              </p>
              <p className="text-[18px] sm:text-[20px] leading-[1.7] text-gray-600">
                Please read these terms carefully before using our services. If you have any questions about these Terms and Conditions, please contact us before using our services.
              </p>
            </motion.div>

            {/* Terms Sections */}
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

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mt-20 sm:mt-28 space-y-12"
            >
              <div>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                  Confidentiality
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-4">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our business relationship. This obligation survives the termination of services.
                </p>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600">
                  Specific confidentiality terms for consulting engagements are detailed in individual Non-Disclosure Agreements (NDAs) and Statement of Work documents.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                  Governing Law and Jurisdiction
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-4">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600">
                  Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts located in Dallas County, Texas.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                  Severability
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600">
                  If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                  Entire Agreement
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600">
                  These Terms and Conditions, together with our Privacy Policy and any executed service agreements, constitute the entire agreement between you and Anand PAG Inc. regarding the use of our website and services, superseding any prior agreements.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 mb-6">
                  For questions regarding these Terms and Conditions, please contact:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-900 font-semibold mb-2">
                    Anand PAG Inc.
                  </p>
                  <p className="text-[15px] leading-[1.7] text-gray-600">
                    3100 Olympus Blvd, #460<br />
                    Coppell, TX 75019<br />
                    Email: <a href="mailto:legal@anand-pag.com" className="text-blue-600 hover:text-blue-700 font-medium">legal@anand-pag.com</a><br />
                    Phone: <a href="tel:+19724998126" className="text-blue-600 hover:text-blue-700 font-medium">+1 (972) 499-8126</a>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}