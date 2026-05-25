import { Settings, Lightbulb, Database, Cloud, TrendingUp, Wrench } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Services() {
  const applicationManagement = [
    'Application Development',
    'Application Maintenance',
    'Technology Updates & Upgrades',
    'Application Integration',
    'Performance Enhancement',
    'System Review & Optimization'
  ];

  const strategicConsulting = [
    'Process Optimization Strategy',
    'Digital Transformation',
    'Business Process Reengineering',
    'Technology Roadmap Planning',
    'Change Management',
    'Best Practice Implementation'
  ];

  const sapServices = [
    'SAP Implementation',
    'SAP Workflow Administration',
    'SAP S/4HANA Migration',
    'SAP HCM Solutions',
    'SAP FI/SD/MM Consulting',
    'SAP Support & Maintenance'
  ];

  const microsoftServices = [
    'SharePoint Implementation',
    'SharePoint Customization',
    'Office 365 Integration',
    'Document Management Solutions',
    'Collaboration Platforms',
    'Azure Cloud Solutions'
  ];

  const salesforceServices = [
    'Salesforce Implementation',
    'Sales Cloud Automation',
    'Service Cloud Solutions',
    'Custom App Development',
    'Salesforce Integration',
    'Lightning Migration'
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            Comprehensive <span className="text-blue-700">IT Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Application Management Services offering comprehensive, cost-effective solutions to develop, maintain, upgrade, and ensure high system availability
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center mb-4">
              <Settings className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Management</h3>
            <p className="text-gray-700 mb-4">
              End-to-end application lifecycle management services
            </p>
            <ul className="space-y-2">
              {applicationManagement.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div className="w-14 h-14 bg-purple-700 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Consulting</h3>
            <p className="text-gray-700 mb-4">
              Expert guidance for your digital transformation journey
            </p>
            <ul className="space-y-2">
              {strategicConsulting.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-purple-700 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Success & Growth</h3>
            <p className="text-gray-700 mb-4">
              Continuous improvement and performance optimization
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                Continuous Improvement
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                System Upgrades
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                Performance Tuning
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                Development Services
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                Solution Management
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                System Review
              </li>
            </ul>
          </div>
        </div>

        {/* Platform Expertise */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Platform Expertise</h3>
          
          <Tabs defaultValue="sap" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sap" className="text-base">SAP</TabsTrigger>
              <TabsTrigger value="microsoft" className="text-base">Microsoft</TabsTrigger>
              <TabsTrigger value="salesforce" className="text-base">Salesforce</TabsTrigger>
            </TabsList>

            <TabsContent value="sap" className="mt-6">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-8 h-8 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">SAP Services</h4>
                    <p className="text-gray-600 mb-6">
                      Is your business ready for transforming processes from distributed system landscape to SAP? Our team of certified SAP experts can help you with comprehensive implementation and support services.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {sapServices.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Wrench className="w-5 h-5 text-blue-700 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="microsoft" className="mt-6">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-8 h-8 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Microsoft Services</h4>
                    <p className="text-gray-600 mb-6">
                      Critical workload of enterprises large and small is shifting towards a common platform for collaboration, document management, and workflows. We help you leverage Microsoft technologies effectively.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {microsoftServices.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <Wrench className="w-5 h-5 text-green-700 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="salesforce" className="mt-6">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Salesforce Services</h4>
                    <p className="text-gray-600 mb-6">
                      Our services and expertise enable organizations to maximize benefits of cloud-computing in areas such as Salesforce automation, customer support and service, together with emerging areas like asset tracking and contract management.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {salesforceServices.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <Wrench className="w-5 h-5 text-purple-700 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}