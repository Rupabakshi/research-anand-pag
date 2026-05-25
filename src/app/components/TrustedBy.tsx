import { motion } from 'motion/react';

export function TrustedBy() {
  const clients = [
    { name: 'Manufacturing Corp', industry: 'Manufacturing' },
    { name: 'Global Retail', industry: 'Retail' },
    { name: 'Healthcare Systems', industry: 'Healthcare' },
    { name: 'Financial Services', industry: 'Finance' },
    { name: 'Tech Enterprise', industry: 'Technology' },
    { name: 'Energy Solutions', industry: 'Energy' },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Trusted by Industry Leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-blue-50 group-hover:to-blue-100 transition-all">
                  <span className="text-2xl font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <p className="text-xs text-slate-500 text-center font-medium">{client.industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
