import { Users, ShoppingCart, Database, DollarSign, Grid, Building2 } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: Users,
      title: 'HCM Suite',
      description: 'Comprehensive Human Capital Management solutions',
      features: [
        'Time Management',
        'Employee Life-cycle Management',
        'Talent Management & Succession Planning',
        'Employee Benefits Management',
        'Organizational Change Management'
      ],
      color: 'blue'
    },
    {
      icon: ShoppingCart,
      title: 'Sales Solutions',
      description: 'Streamline your sales processes end-to-end',
      features: [
        'Order-to-Cash Process',
        'Sales Automation',
        'Customer Relationship Management',
        'Quote Management',
        'Revenue Recognition'
      ],
      color: 'green'
    },
    {
      icon: Database,
      title: 'Master Data Management',
      description: 'Centralized data governance and quality',
      features: [
        'Product Data Management',
        'Vendor Onboarding',
        'Data Quality & Validation',
        'Master Data Governance',
        'Data Stewardship'
      ],
      color: 'purple'
    },
    {
      icon: DollarSign,
      title: 'Finance Solutions',
      description: 'Complete financial process automation',
      features: [
        'Procure-to-Pay (Invoice Management)',
        'Expense Management',
        'Labor Cost Management',
        'Financial Reporting',
        'Budget Management'
      ],
      color: 'orange'
    },
    {
      icon: Grid,
      title: 'Cross Applications',
      description: 'Solutions that span multiple business areas',
      features: [
        'Day At-a-glance Dashboard',
        'Statistical Sampling',
        'Workflow Integration',
        'Process Monitoring',
        'Analytics & Insights'
      ],
      color: 'teal'
    },
    {
      icon: Building2,
      title: 'HMS',
      description: 'Hospital Management System solutions',
      features: [
        'Patient Management',
        'Appointment Scheduling',
        'Medical Records',
        'Billing & Insurance',
        'Inventory Management'
      ],
      color: 'red'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-700',
    green: 'from-green-500 to-green-700',
    purple: 'from-purple-500 to-purple-700',
    orange: 'from-orange-500 to-orange-700',
    teal: 'from-teal-500 to-teal-700',
    red: 'from-red-500 to-red-700'
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <span className="text-sm font-semibold">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry-Specific <span className="text-blue-700">Business Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions designed to address your unique business challenges across various domains
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-br ${colorClasses[solution.color as keyof typeof colorClasses]} p-6 text-white`}>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p className="text-white/90">{solution.description}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect overlay */}
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
