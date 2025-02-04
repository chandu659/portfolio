import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold mb-8 font-mono text-primary"
      >
        Where I've Worked
      </motion.h2>

      <div className="space-y-8">
        {EXPERIENCE.map((job) => (
          <motion.div key={job.company} variants={fadeIn}>
            <Card className="relative overflow-hidden group hover:bg-card/50 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-mono">{job.title}</h3>
                    <p className="text-primary font-mono">{job.company}</p>
                  </div>
                  <p className="text-muted-foreground font-mono mt-2 md:mt-0">
                    {job.period}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-background/50 text-primary font-mono text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}