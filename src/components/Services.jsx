import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const services = [
  {
    name: "Android Development",
    description:
      "Android development is my passion, a playground where creativity meets functionality. It's the thrill of bringing ideas to life, the joy of solving puzzles with code, and the satisfaction of making a real impact on users' lives. I absolutely love every moment of it.",
  },
  {
    name: " Web Development",
    description:
      " Being a NextJs Full stack Developer is my engine of innovation, crafting dynamic worlds of code. I've birthed couple of vibrant social media platforms, where users connect and converse in digital realms I've sculpted.",
  },
  {
    name: "UI/UX Design",
    description:
      " UI/UX design is my Fabric for weaving creativity into user experiences, painting with intuitive interactions and visually stunning interfaces. This page you're on right now is a living testament to that humble artistry! ",
  },

  {
    name: "Machine Learning",
    description:
      "Machine learning is my techno-poetry, It's a realm of discovery, a voyage through virtual neurons, where patterns reveal tales and predictions shape destinies. I hope that one day, my journey in this vast expanse will elevate me to a pinnacle of excellence, where innovation thrives and my AI dreams flourish.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bottom-0 bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mt-20 mb-5 "> What I Do.</h2>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 lg:h-[120px]  mb-[30px] flex md:h-[175px] sm:h-[250px] "
                    key={index}
                  >
                    <div className="">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
