import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <motion.section
      id="projects"
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
        Some Things I've Built
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeIn}
          >
            <Card className="h-full bg-background/50 border-2 border-border/50 backdrop-blur-sm hover:bg-card/5 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                  <project.Icon className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold font-mono mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-primary/5 text-primary border-primary/20 font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 text-muted-foreground pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}