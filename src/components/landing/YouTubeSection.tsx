import { motion } from "framer-motion";
import { Play, Users, Video, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const YouTubeSection = () => {
  const stats = [
    { icon: Users, label: "Subscribers", value: "3.6K+" },
    { icon: Video, label: "Videos", value: "460+" },
    { icon: Play, label: "Views", value: "Not available" },
  ];

  return (
    <section className="py-12 bg-surface-dark border-y border-gray-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Learn with Our{" "}
              <span className="gradient-text">YouTube Channel</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of GATE aspirants on our YouTube channel for free tutorials, 
              tips and comprehensive preparation strategies. GATE And Tech is a YouTube channel 
              dedicated to technology and engineering topics—ideal for candidates preparing 
              for the GATE exam or anyone interested in cutting‑edge tech.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* YouTube Video Embed */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-surface-dark">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/mRfDHQeZtlo?si=4l2fmGXCabNDwemo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="text-center p-4 bg-surface-light/50 border-gray-3 hover:border-primary/20 transition-colors">
                      <CardContent className="p-0">
                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Channel Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Free GATE Preparation Content
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our channel offers comprehensive tutorials, step‑by‑step solving strategies, 
                  discussions of previous year questions and expert tips to help you crack GATE confidently.
                </p>
              </div>

              {/* Channel Features */}
              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-medium text-foreground">What you'll get</h4>
                <div className="space-y-3">
                  {[
                    "Weekly new video uploads",
                    "Topic‑wise detailed explanations",
                    "Solutions to previous year questions",
                    "Study tips and strategies",
                    "Live doubt‑solving sessions"
                  ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  Subscribe to the channel to stay updated and join a growing community of successful students.
                </p>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
                asChild
              >
                <a
                  href="https://www.youtube.com/@gateandtechofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Subscribe to Channel
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};