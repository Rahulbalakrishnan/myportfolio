import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img2 from "../assets/portfolio-img1.jpg";
import Img3 from "../assets/portfolio-img2.jpg";

const Work = () => {
  return (
    <section id="work" className="section mt-32 sm:mt-28 ">
      <div className="container mx-auto">
        <div className="flex flex-row items-center lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div >
              <h2 className="  h2 text-3xl leading-tight text-accent ">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-8 ">
                I humbly represents my ongoing journey of growth and learning.
                It's a patchwork of efforts, a canvas where I experiment and
                improve. Each project is a chapter in my learning process, a
                humble testament to my dedication and the steps I've taken along
                this path. I strive to keep evolving, knowing there's always
                more to discover and improve upon.
              </p>
              <a href="https://github.com/Rahulbalakrishnan">
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex flex-row  gap-x-10 object-center cursor-pointer"
          >
            {/* TODO: UPDATE WITH PROJECT LINK */}
            <a href="https://github.com/Rahulbalakrishnan"> 
              {/* image */}
              <div className="hide-xs-sm md:block lg:block xl:block 2xl:block group relative overflow-hidden border-2 w-[300px] h-[365px] border-white/50  rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                  {" "}
                </div>
                {/* img */}
                <img
                  className="group-hover:scale-125  w-[320px] h-[360px] object-cover transition-all duration-500"
                  src={Img2}
                  alt=""
                />
                {/* Pretitle */}
                <div
                  className="absolute -bottom-full left-12 
              lg:group-hover:bottom-40 
              md:group-hover:bottom-40
              transition-all duration-500 z-50"
                >
                  <span className="text-gradient ">Android Development</span>
                </div>
                {/* Title */}
                <div
                  className="absolute -bottom-full left-12 
              lg:group-hover:bottom-32
              md:group-hover:bottom-32
              transition-all duration-700 z-50"
                >
                  <span className="text-2xl text-white">
                    A Food Delivering App
                  </span>
                </div>
              </div>
            </a>
            {/* TODO: UPDATE WITH PROJECT LINK */}
            <a href="https://github.com/Rahulbalakrishnan">
              {/* image */}
              <div className="hide-xs-sm md:block lg:block xl:block 2xl:block group relative overflow-hidden border-2 w-[300px] h-[365px]  border-white/50  rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                  {" "}
                </div>
                {/* img */}
                <img
                  className="group-hover:scale-125 w-[350px] h-[420px] object-cover transition-all duration-500"
                  src={Img3}
                  alt=""
                />

                {/* Pretitle */}
                <div
                  className="absolute -bottom-full left-12 
              lg:group-hover:bottom-40  
              md:group-hover:bottom-40 
              transition-all duration-500 z-50"
                >
                  <span className="text-gradient">Web Development</span>
                </div>
                {/* Title */}
                <div
                  className="absolute -bottom-full left-12 
              lg:group-hover:bottom-32 
              md:group-hover:bottom-32
              transition-all duration-700 z-50"
                >
                  <span className="text-2xl text-white">
                    A Social Media Platform
                  </span>
                </div>
              </div>{" "}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
