import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen flex items-center pt-20"
    >
      <div className="space-y-6">
        <motion.p
          variants={fadeIn}
          className="text-primary font-mono text-lg"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          variants={slideIn}
          className="text-4xl sm:text-6xl font-bold"
        >
          <TypeAnimation
            sequence={[
              "Ranga ChandraMohan Reddy Chilkala.",
              1000,
              "Software Developer.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-muted-foreground max-w-xl text-lg sm:text-xl"
        >
          I craft exceptional digital experiences that live at the intersection of design and technology. Currently focused on building accessible, human-centered products.
        </motion.p>

        <motion.div variants={fadeIn}>
          <a
            href="#projects"
            className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors rounded-md font-mono"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
