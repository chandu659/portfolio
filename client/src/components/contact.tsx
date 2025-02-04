import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20"
    >
      <motion.div
        variants={fadeIn}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 font-mono">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you!
        </p>

        <Card className="mb-8">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          size="lg"
          asChild
          className="font-mono"
        >
          <a href="mailto:your.email@example.com">Say Hello</a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
