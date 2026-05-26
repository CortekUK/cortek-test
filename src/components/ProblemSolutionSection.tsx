import { AlertCircle, CheckCircle, Calendar, MessageSquare, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: Calendar,
      text: "Empty courts and missed bookings"
    },
    {
      icon: MessageSquare,
      text: "Endless WhatsApp groups and emails"
    },
    {
      icon: TrendingDown,
      text: "Staff bogged down with admin instead of growth"
    }
  ];

  return (
    <section className="section-spacing bg-background animate-section-enter">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Running a Padel Club{" "}
            <span className="text-deep-purple">Shouldn't Be This Hard</span>
          </h2>
          <div className="w-24 h-1 bg-deep-purple mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Problems Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-background-light border border-neutral-border"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground font-medium">{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-deep-purple/5 to-electric-blue/5 p-8 rounded-2xl border border-deep-purple/10"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-deep-purple/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-deep-purple" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The Solution</h3>
            </div>
            
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Cortek automates your club's bookings, communications, and marketing — so your team works less, 
              your players stay engaged, and your courts stay full.
            </p>

            <div className="mt-6 flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 bg-deep-purple rounded-full border-2 border-white dark:border-background flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-deep-purple font-medium">Trusted by 100+ padel clubs</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;