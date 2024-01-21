import React from "react";


import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex flex-col text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text"
            >
              RAHUL <span>B.Nair</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I'm a</span>
              <TypeAnimation
                sequence={[
                  "Android Engineer",
                  2000,
                  "Full Stack Engineer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "ML Enthusiast",
                  2000,
                  "Poetic writer😄",
                  3000,
                ]}
                speed={50}
                className="text-accent "
                wrapper="spam"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              <span className="text-xl font-semibold">
                Judge this book by it's cover. <br />
              </span>
              In the vast digital landscape where creativity dances with logic,
              I have found my truest passion - a fervor for crafting captivating
              experiences through Web and Android development. It's a symphony,
              where every line of code is a note, every algorithm is a melody, and
              every design an expression of artistry.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-4 mx-auto lg:mx-0"
            >
              {/* TODO: UPDATE THIS LINK AFTER RESUME UPDATION */}
              <a href="https://drive.google.com/file/d/12LcLjarg9bX0zuPZTlna6q7ng-Q37mtx/view" className="btn btn-lg -z-1 flex items-center justify-center">Resume</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default Banner;
