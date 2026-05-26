import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ContactMiniFAQ = () => {
  const faqs = [
    {
      question: "How quickly do you respond?",
      answer: "We reply within 2–4 hours during business hours, Monday to Friday. For urgent CRM queries, our support team is always on hand."
    },
    {
      question: "Do you offer demos?",
      answer: "Yes — every free consultation includes a live walkthrough of how a Cortek CRM system works for your type of business."
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We specialise in community-driven and service-based industries such as gyms, retail, healthcare, restaurants, property management, and creative agencies."
    },
    {
      question: "Can your CRM connect with our existing tools?",
      answer: "Absolutely. Cortek systems integrate seamlessly with platforms such as Google Workspace, Slack, Stripe, and more — so everything stays connected."
    },
    {
      question: "How long does it take to get started?",
      answer: "Most businesses are up and running with a custom CRM in as little as two to six weeks after consultation."
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 relative">
      <div className="section-container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center font-sora">
            Common Questions
          </h2>
          <p className="text-foreground-secondary text-center mb-8 max-w-2xl mx-auto">
            Quick answers about Cortek's bespoke CRM systems and how we work.
          </p>
          
          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-border/20"
              >
                <h3 className="text-lg font-bold text-foreground mb-2 font-sora">
                  {faq.question}
                </h3>
                <p className="text-foreground-secondary">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              to="/pricing#faq"
              className="inline-flex items-center gap-2 text-deep-purple hover:text-electric-blue font-medium transition-colors duration-300 group"
            >
              <Search className="w-4 h-4" />
              See the Full FAQ Section
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMiniFAQ;