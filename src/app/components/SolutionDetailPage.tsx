import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export interface SolutionFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface SolutionBenefit {
  metric: string;
  label: string;
  description: string;
}

export interface SolutionDetailPageProps {
  // Hero Section
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  
  // Challenge Section
  challengeTitle: string;
  challengeDescription: string;
  challengePoints: string[];
  
  // Solution Overview
  solutionTitle: string;
  solutionDescription: string;
  solutionImage?: string;
  
  // Features
  featuresTitle: string;
  features: SolutionFeature[];
  
  // Benefits/ROI
  benefitsTitle: string;
  benefits: SolutionBenefit[];
  
  // Integration (optional)
  integrationTitle?: string;
  integrationDescription?: string;
  integrationLogos?: { name: string; logo: ReactNode }[];
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
}

export function SolutionDetailPage({
  eyebrow,
  title,
  subtitle,
  heroImage,
  challengeTitle,
  challengeDescription,
  challengePoints,
  solutionTitle,
  solutionDescription,
  solutionImage,
  featuresTitle,
  features,
  benefitsTitle,
  benefits,
  integrationTitle,
  integrationDescription,
  integrationLogos,
  ctaTitle,
  ctaDescription,
}: SolutionDetailPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }} />
        </div>

        {/* Ambient Light */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {eyebrow}
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[58px] xl:text-[72px] 2xl:text-[88px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-6"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl leading-relaxed text-slate-300 mb-10"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all">
                Download Overview
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section - Light */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
                    The Challenge
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                    {challengeTitle}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {challengeDescription}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-4"
                >
                  {challengePoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                      <p className="text-slate-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right - Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
                  {/* Placeholder for challenge visual */}
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    Challenge Visual
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview - Light */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-xl">
                  {/* Placeholder for solution visual */}
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    Solution Visual
                  </div>
                </div>
              </motion.div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
                    Our Solution
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                    {solutionTitle}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {solutionDescription}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Light */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {featuresTitle}
              </h2>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits/ROI Section - Light */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {benefitsTitle}
              </h2>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 text-center border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                    {benefit.label}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section - Light (Optional) */}
      {integrationTitle && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  {integrationTitle}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                  {integrationDescription}
                </p>
              </motion.div>

              {/* Integration Logos */}
              {integrationLogos && integrationLogos.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap justify-center items-center gap-12"
                >
                  {integrationLogos.map((integration, index) => (
                    <div key={index} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                      {integration.logo}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Light */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                {ctaTitle}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                {ctaDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}