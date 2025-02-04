import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card } from "@/components/ui/card";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Express",
  "PostgreSQL",
  "Tailwind CSS",
];

export default function About() {
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold mb-8 font-mono"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={fadeIn} className="space-y-4">
          <p className="text-muted-foreground">
            Hello! I'm a passionate software engineer with a keen interest in building exceptional digital experiences. My journey in web development started back in 2018 when I decided to try creating custom WordPress themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p className="text-muted-foreground">
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="p-6 bg-card/50 backdrop-blur">
            <h3 className="text-xl font-mono mb-4">Technologies I work with:</h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary">▹</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
