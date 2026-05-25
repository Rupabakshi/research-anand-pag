import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

export function ROICalculator() {
  const [employees, setEmployees] = useState(1000);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [processTime, setProcessTime] = useState(20);
  const [errorRate, setErrorRate] = useState(10);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    // Time savings calculation
    const hoursPerYear = employees * processTime * 12; // monthly processes
    const hourlyRate = avgSalary / 2080; // annual hours
    const timeSavings = hoursPerYear * 0.70 * hourlyRate; // 70% reduction

    // Error reduction savings
    const errorCost = employees * (errorRate / 100) * 500; // $500 per error
    const errorSavings = errorCost * 12 * 0.85; // 85% reduction

    // Compliance savings
    const complianceSavings = employees * 50; // $50 per employee annually

    // Total savings
    const totalSavings = timeSavings + errorSavings + complianceSavings;

    // Implementation cost estimate
    const implementationCost = employees * 150; // $150 per employee

    // ROI calculation
    const roi = ((totalSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = (implementationCost / (totalSavings / 12)).toFixed(1);

    return {
      timeSavings: Math.round(timeSavings),
      errorSavings: Math.round(errorSavings),
      complianceSavings: Math.round(complianceSavings),
      totalSavings: Math.round(totalSavings),
      implementationCost: Math.round(implementationCost),
      roi: Math.round(roi),
      paybackMonths,
      hoursSaved: Math.round(hoursPerYear * 0.70)
    };
  };

  const results = calculateROI();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <span className="text-sm font-semibold">Calculate Your Savings</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            ROI <span className="text-blue-700">Calculator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you could save with our SAP process optimization solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Your Business Metrics</h3>
            </div>

            <div className="space-y-8">
              {/* Number of Employees */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label htmlFor="employees" className="text-base font-semibold">
                    Number of Employees
                  </Label>
                  <span className="text-2xl font-bold text-blue-700">{employees.toLocaleString()}</span>
                </div>
                <Slider
                  id="employees"
                  min={100}
                  max={10000}
                  step={100}
                  value={[employees]}
                  onValueChange={(value) => setEmployees(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>100</span>
                  <span>10,000</span>
                </div>
              </div>

              {/* Average Salary */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label htmlFor="salary" className="text-base font-semibold">
                    Average Salary
                  </Label>
                  <span className="text-2xl font-bold text-blue-700">${avgSalary.toLocaleString()}</span>
                </div>
                <Slider
                  id="salary"
                  min={40000}
                  max={150000}
                  step={5000}
                  value={[avgSalary]}
                  onValueChange={(value) => setAvgSalary(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$40k</span>
                  <span>$150k</span>
                </div>
              </div>

              {/* Process Time */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label htmlFor="time" className="text-base font-semibold">
                    Hours/Month on Manual Processes
                  </Label>
                  <span className="text-2xl font-bold text-blue-700">{processTime}h</span>
                </div>
                <Slider
                  id="time"
                  min={5}
                  max={40}
                  step={1}
                  value={[processTime]}
                  onValueChange={(value) => setProcessTime(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Error Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label htmlFor="errors" className="text-base font-semibold">
                    Current Error Rate
                  </Label>
                  <span className="text-2xl font-bold text-blue-700">{errorRate}%</span>
                </div>
                <Slider
                  id="errors"
                  min={1}
                  max={25}
                  step={1}
                  value={[errorRate]}
                  onValueChange={(value) => setErrorRate(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Calculate Button */}
              <Button
                onClick={() => setShowResults(true)}
                className="w-full bg-blue-700 hover:bg-blue-800 text-lg py-6"
              >
                Calculate Your Potential Savings
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Potential Annual Savings</h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="text-sm text-blue-200 mb-2">Total Annual Savings</div>
                <div className="text-5xl font-bold mb-2">
                  ${showResults && <AnimatedCounter end={results.totalSavings} />}
                  {!showResults && '---'}
                </div>
                <div className="text-blue-200">Year 1 Net Savings</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="w-8 h-8 mb-2 text-blue-300" />
                  <div className="text-2xl font-bold mb-1">
                    {showResults && <AnimatedCounter end={results.hoursSaved} />}
                    {!showResults && '---'}
                  </div>
                  <div className="text-sm text-blue-200">Hours Saved</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <TrendingUp className="w-8 h-8 mb-2 text-blue-300" />
                  <div className="text-2xl font-bold mb-1">
                    {showResults && <AnimatedCounter end={results.roi} suffix="%" />}
                    {!showResults && '---'}
                  </div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Savings Breakdown</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-700" />
                    <span className="font-medium text-gray-900">Time Savings</span>
                  </div>
                  <span className="font-bold text-green-700">
                    ${showResults && results.timeSavings.toLocaleString()}
                    {!showResults && '---'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-700" />
                    <span className="font-medium text-gray-900">Error Reduction</span>
                  </div>
                  <span className="font-bold text-blue-700">
                    ${showResults && results.errorSavings.toLocaleString()}
                    {!showResults && '---'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-700" />
                    <span className="font-medium text-gray-900">Compliance</span>
                  </div>
                  <span className="font-bold text-purple-700">
                    ${showResults && results.complianceSavings.toLocaleString()}
                    {!showResults && '---'}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Payback Period</span>
                  <span className="text-xl font-bold text-blue-700">
                    {showResults && results.paybackMonths} months
                    {!showResults && '---'}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-700 mb-4">
                Ready to realize these savings? Schedule a consultation with our experts.
              </p>
              <Button className="w-full bg-blue-700 hover:bg-blue-800">
                Schedule Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-gray-500 mt-12 max-w-3xl mx-auto"
        >
          * Calculations are estimates based on industry averages and our client success data. 
          Actual results may vary based on your specific business requirements and implementation scope.
        </motion.p>
      </div>
    </section>
  );
}