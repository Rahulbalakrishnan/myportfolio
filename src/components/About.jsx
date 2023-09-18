import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion, useVelocity } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className=" flex  flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 text-xl mb-4">
              I am a student with no professional experience seeking to elevate
              my development, designing and machine learning skills.
            </h3>
            <p className="mb-6 ">
              I embody the duality of a Full-Stack Web and Android Development
              while having a keen eye for UI/UX design, seamlessly bridging the
              realms of coding and creativity.Beyond this, I am captivated by
              the wonders of machine learning, a realm that fuels my curiosity
              and sparks innovation.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={990} end={1000} duration={5} />
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Hours of
                  <br />
                  Courses
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={5} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={6} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of Exploratory Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
