import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";

// Import project logos
const projectLogos: Record<string, string> = {
  "AutoMixer": "/agri.jfif",
  "Eko360  Data Science Nigeria": "/eko.png",
  "ConnectedDutchtown Dashboard": "/dtcid.png"
};

// Import company logos
const companyLogos: Record<string, string> = {
  "Neighborhood Innovation Center (Non-profit)": "/nic.png"
};

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

      <div className="max-w-[70%] mx-auto space-y-8">
        {EXPERIENCE.map((job) => (
          <motion.div key={job.company} variants={fadeIn}>
            <Card className="relative overflow-hidden group hover:bg-card/50 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div>
                      {companyLogos[job.company] && (
                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-md">
                          <img 
                            src={companyLogos[job.company]} 
                            alt={`${job.company} logo`} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm">{job.period}</span>
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

                {job.projects && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Notable Projects</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {job.projects.map((project, idx) => (
                        <div key={idx} className="rounded-md bg-card/30 border border-primary/10 overflow-hidden">
                          {/* Project Header with Logo and Title */}
                          {project.name === "ConnectedDutchtown Dashboard" || project.name === "AutoMixer" || project.name === "Eko360  Data Science Nigeria" ? (
                            <div className="relative">
                              <div className="w-full h-40 overflow-hidden">
                                <img 
                                  src={project.name === "ConnectedDutchtown Dashboard" ? "/dms-logo-black.png" : 
                                       project.name === "AutoMixer" ? "/agri.jfif" : 
                                       "/eko.png"} 
                                  alt={`${project.name}`} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="absolute top-2 right-2">
                                {project.link && (
                                  <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 bg-black/50 rounded-full hover:bg-primary/50 transition-colors"
                                    aria-label={`Visit ${project.name} project`}
                                  >
                                    <ExternalLink size={16} className="text-white" />
                                  </a>
                                )}
                              </div>
                              <div className="p-3 border-b border-primary/10 bg-card/50">
                                <p className="font-medium">{project.name}</p>
                                <p className="text-xs text-muted-foreground">{project.description}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between p-3 border-b border-primary/10 bg-card/50">
                              <div className="flex items-center space-x-3">
                                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                                  <img 
                                    src={projectLogos[project.name] || project.logo || ''} 
                                    alt={`${project.name} logo`} 
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div>
                                  <p className="font-medium">{project.name}</p>
                                  <p className="text-xs text-muted-foreground">{project.description}</p>
                                </div>
                              </div>
                              {project.link && (
                                <a 
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 hover:text-primary transition-colors"
                                  aria-label={`Visit ${project.name} project`}
                                >
                                  <ExternalLink size={16} />
                                </a>
                              )}
                            </div>
                          )}
                          
                          {/* Project Responsibilities */}
                          {project.responsibilities && (
                            <div className="p-3">
                              <ul className="space-y-2">
                                {project.responsibilities.map((item, i) => (
                                  <li key={i} className="flex items-start space-x-2">
                                    <span className="text-primary mt-1">▹</span>
                                    <span className="text-muted-foreground text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                              
                              {/* Project Skills */}
                              {project.skills && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {project.skills.map((skill) => (
                                    <Badge
                                      key={skill}
                                      variant="outline"
                                      className="bg-background/50 text-primary font-mono text-xs"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}