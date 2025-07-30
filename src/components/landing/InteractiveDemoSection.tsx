import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import demoImage from "@/assets/demo-interface.jpg";

const sampleQuestions = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correct: 1
  },
  {
    id: 2,
    question: "Which data structure uses LIFO principle?",
    options: ["Queue", "Stack", "Array", "Tree"],
    correct: 1
  },
  {
    id: 3,
    question: "What does SQL stand for?",
    options: ["Simple Query Language", "Structured Query Language", "System Query Language", "Standard Query Language"],
    correct: 1
  }
];

export const InteractiveDemoSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setTimeout(() => {
      setShowResult(true);
      setTimeout(() => {
        if (currentQuestion < sampleQuestions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setSelectedAnswer(null);
          setShowResult(false);
          setTimer(30);
        }
      }, 2000);
    }, 500);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try 5 real exam questions right here →
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the authentic exam simulation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-surface-dark border-gray-3 glow-border">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {sampleQuestions.length}
                  </span>
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono">{timer}s</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6">
                  {sampleQuestions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {sampleQuestions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                        selectedAnswer === index
                          ? showResult
                            ? index === sampleQuestions[currentQuestion].correct
                              ? "bg-success/20 border-success text-success"
                              : "bg-error/20 border-error text-error"
                            : "bg-primary/20 border-primary"
                          : showResult && index === sampleQuestions[currentQuestion].correct
                            ? "bg-success/20 border-success text-success"
                            : "border-gray-3 hover:border-primary/50 hover:bg-surface-dark-2"
                      }`}
                      disabled={showResult}
                      whileHover={{ scale: showResult ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                        {showResult && index === sampleQuestions[currentQuestion].correct && (
                          <CheckCircle className="w-5 h-5 ml-auto" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {currentQuestion === sampleQuestions.length - 1 && showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center"
                  >
                    <h4 className="text-lg font-semibold mb-2">Like what you see?</h4>
                    <p className="text-muted-foreground mb-4">Sign up free in 30 seconds.</p>
                    <Button className="bg-primary hover:bg-primary-dark">
                      Get Started Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                )}
              </Card>
            </motion.div>

            {/* Demo Preview Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glow-border rounded-2xl overflow-hidden">
                <img
                  src={demoImage}
                  alt="Interactive demo interface showing question layout and timer"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              <motion.div
                className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Live Demo
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};