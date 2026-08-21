"use client";

import { ghostVariants, slideLeft, slideRight, slideUpBlur } from "@/animations/contents";
import { heroText } from "@/animations/hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionWrapper from "@/components/MotionWrapper";
import VideoModal from "@/components/VideoModal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const text = "INNOVATE. AUTOMATE. ELEVATE.";

const page = () => {
  const [videoModalActive, setVideoModalActive] = useState<boolean>(false)
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1))
        setIndex(index + 1)

        if (index === text.length) {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        setDisplayedText(text.slice(0, index - 1))
        setIndex(index - 1)

        if (index === 0) {
          setIsDeleting(false)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [index, isDeleting])

  return (
    <main className="bg-black overflow-x-hidden">
      <Header theme="dark" />
      {videoModalActive && <VideoModal setVideoModalActive={setVideoModalActive} />}

      {/* HERO SECTION */}
      <section className="relative lg:mt-0 max-md:pt-75 max-md:bg-black">
        <img src="/hero.jpeg" className="w-full lg:object-cover" />

        <div className="hero-section-overlay">
          <MotionWrapper variants={heroText}>
            <p className="max-[330px]:text-[12px] text-sm md:text-lg font-outfit mb-2 lg:mb-4">
              <span>{displayedText}</span>
              <span className="ml-1 animate-blink text-lg lg:text-2xl">|</span>
            </p>
          </MotionWrapper>

          <MotionWrapper variants={heroText}>
            <h1 className="lg:mt-0 max-[330px]:text-3xl text-4xl md:text-5xl lg:text-8xl flex-start">
              <span>WE</span>

              <img src="/astro.png" className="animate-jump max-[400px]:h-10 h-15 md:h-18 lg:h-25" />

              <span>BUILD</span>
            </h1>
          </MotionWrapper>   

          <MotionWrapper variants={heroText}>
            <h1 className="mt-4 max-[330px]:text-3xl text-4xl md:text-5xl lg:text-8xl">
              WHAT'S
              <span className="sm:hidden cl
              ml-3">NEXT</span>
            </h1>
          </MotionWrapper>

          <MotionWrapper variants={heroText}>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-8xl max-sm:hidden">
              NEXT
            </h1>
          </MotionWrapper>
        </div>
      </section>


      {/* video section 1 */}
      <section className="md:mt-40">
        {/* mobile */}
        <div className="md:hidden relative">
          <video autoPlay muted loop className="w-full max-[330px]:h-230 h-200">
            <source src="/robot-potriat.mp4" />
          </video>

          <div 
            className="absolute top-0 bottom-0 left-0 right-0 bg-linear-to-b from-transparent from-0% via-black/30 via-30% to-black to-100%"
          >
            <div className="absolute bottom-0 left-6">
              <h1 className="text-white text-3xl font-jsans font-bold">
                WHERE INNOVATION MEETS REALITY
              </h1>

              <p className="font-jsl mt-4 text-sm text-white w-[80%]">
                From city streets to the edge of the atmosphere, Orbitrix technologies are built for real-world performance. Designed for endurance, precision, and adaptability, our systems turn ambitious ideas into deployed solutions — proving that the future of engineering is already in motion.
              </p>

              <button className="ghost-btn flex-center gap-3 mt-6">
                <Link href="/about">
                  About Us
                </Link>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* desktop */}
        <div className="max-md:hidden relative mb-10">
          <video autoPlay muted loop className="w-full">
            <source src="/robot.mp4" />
          </video>

          <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-to-br from-transparent from-0% via-black/90 via-60% to-black to-100%">
            <div className="absolute bottom-10 lg:bottom-20 right-20 text-right w-150">
              <h1 className="text-white text-4xl font-jsans font-bold xl:text-5xl leading-14">
                WHERE INNOVATION MEETS REALITY
              </h1>

              <div className="flex-end">
                <p className="font-jsl mt-5 text-white w-[80%] xl:w-[85%]">
                  From city streets to the edge of the atmosphere, Orbitrix technologies are built for real-world performance. Designed for endurance, precision, and adaptability, our systems turn ambitious ideas into deployed solutions — proving that the future of engineering is already in motion.
                </p>
              </div>

              <div className="flex-end">
                <button className="ghost-btn flex-center gap-3 mt-6">
                  <Link href="/about">
                    About Us
                  </Link>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SPACE SECTION */}
      <section
        className="bg-black max-lg:pt-20 px-6"
      >
        {/* mobile */}
        <div 
          className="sm:hidden"
        >
          <div className="relative p-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideRight}
            >
              <img src="/guillermo.jpg" className="absolute h-75 w-87.5 right-0" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideLeft}
            >
              <img src="/history.jpg" className="absolute top-37.5 left-0 h-100" />
            </motion.div>
          </div>

          <motion.p
            initial="hidden"
            whileInView="show"
            variants={slideUpBlur} 
            className="text-gray-300 text-[15px] w-[80%] leading-6.25 font-jsl max-sm:mt-140"
          >
            Orbitrix is a forward-thinking technology agency specializing in artificial intelligence, robotics, and IoT. We help businesses evolve by designing smart, connected systems that automate processes, improve efficiency, and unlock new possibilities.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            variants={slideUpBlur} 
            className="text-gray-300 text-[15px] w-[80%] leading-6.25 font-jsl mt-4"
          >
            Driven by innovation and built for impact, we turn complex technology into practical solutions that move businesses forward.
          </motion.p>
        </div>

        {/* desktop */}
        <motion.div 
          className="max-sm:hidden grid grid-cols-2 gap-6 md:w-[80%] mx-auto"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideRight}
            className="flex-center"
          >
            <img src="/guillermo.jpg" className="w-full lg:w-125" />
          </motion.div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideLeft}
            >
              <img src="/history.jpg" className="md:h-125" />
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="show"
              variants={slideUpBlur} 
              className="text-gray-300 text-[15px] lg:w-[60%] md:w-[80%] leading-6.25 font-jsl max-sm:mt-160 mt-6"
            >
              Orbitrix is a forward-thinking technology agency specializing in artificial intelligence, robotics, and IoT. We help businesses evolve by designing smart, connected systems that automate processes, improve efficiency, and unlock new possibilities.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              variants={slideUpBlur} 
              className="text-gray-300 text-[15px] lg:w-[60%] md:w-[80%] leading-6.25 font-jsl mt-4"
            >
              Driven by innovation and built for impact, we turn complex technology into practical solutions that move businesses forward.
            </motion.p>
          </div>
        </motion.div>
      </section>


      {/* video section 2 */}
      <section className="md:mt-40">
        {/* mobile */}
        <div className="md:hidden relative">
          <video autoPlay muted loop className="w-full h-200">
            <source src="/rocket-potriat.mp4" />
          </video>

          <div 
            className="absolute top-0 bottom-0 left-0 right-0 bg-linear-to-b from-transparent from-0% via-black/30 via-30% to-black to-100%"
          >
            <div className="absolute bottom-0 left-6">
              <h1 className="text-white max-[330px]:text-2xl text-3xl font-jsans font-bold">
                REVOLUTIONALIZING HUMAN CAPABILITIES
              </h1>

              <p className="font-jsl mt-2 max-[300px]:text-[12px] text-sm text-white w-[80%]">
                At Orbitrix, we don’t just build technology — we engineer solutions that expand what’s possible. Our focus areas are driven by innovation, guided by science, and grounded in real-world applications. From robotics to space exploration, we’re shaping the next era of intelligent systems.
              </p>

              <button className="ghost-btn flex-center gap-3 mt-6">
                <Link href="/about">
                  About Us
                </Link>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* medium screens */}
        <div className="max-md:hidden lg:hidden relative mb-10">
          <video autoPlay muted loop className="w-full">
            <source src="/rocket.mp4" />
          </video>

          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60">
            <div className="absolute left-20 top-20">
              <h1 className="text-white text-4xl font-jsans font-bold xl:text-5xl w-[70%] leading-14">
                REVOLUTIONALIZING HUMAN CAPABILITIES
              </h1>

              <p className="font-jsl mt-5 text-white w-[50%]">
                At Orbitrix, we don’t just build technology — we engineer solutions that expand what’s possible. Our focus areas are driven by innovation, guided by science, and grounded in real-world applications. From robotics to space exploration, we’re shaping the next era of intelligent systems.
              </p>

              <button className="ghost-btn flex-center gap-3 mt-6">
                <Link href="/about">
                  About Us
                </Link>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* desktop */}
        <div className="max-lg:hidden lg:w-220 xl:w-250 mx-auto">
          <h1 className="text-white text-4xl font-jsans font-bold xl:text-5xl w-[70%] leading-14">
            REVOLUTIONALIZING HUMAN CAPABILITIES
          </h1>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <p className="font-jsl mt-5 text-white w-[80%]">
                At Orbitrix, we don’t just build technology — we engineer solutions that expand what’s possible. Our focus areas are driven by innovation, guided by science, and grounded in real-world applications. From robotics to space exploration, we’re shaping the next era of intelligent systems.
              </p>

              <button className="ghost-btn flex-center gap-3 mt-6">
                <Link href="/about">
                  About Us
                </Link>
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="flex-center">
              <video autoPlay muted loop className="w-full">
                <source src="/rocket.mp4" />
              </video>
            </div>
          </div>

        </div>
      </section>


      {/* MARQUEE SECTION */}
      <section 
        className="pt-30 bg-black"
      >
        <div className="relative">
          <div
            onClick={() => setVideoModalActive(true)} 
            className="absolute font-jsans top-0 left-0 bottom-0 right-0 flex-center"
          >
            <div className="h-18 w-18 md:h-22 md:w-22 cursor-pointer border-2 flex-center rounded-full border-white text-white">
              Play
            </div>
          </div>

          <img 
            src="/space-man.png" 
            className="max-sm:h-60 max-sm:object-center max-sm:object-cover" 
          />
        </div>

        <div className="marquee">
          <h1 className="marquee-content font-outfit text-5xl lg:text-8xl md:text-7xl mt-6 text-white"
          >
            HUMANOID, MILITARY DRONES, NEUROSCIENCE & NEURO-TECHNOLOGY
          </h1>
        </div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideRight} 
        className="px-6 md:px-10 xl:px-20 pt-30 text-white"
      >
        <p className="font-outfit text-gray-300 font-bold text-[13px] lg:text-md">OUR CORE CAPABILITIES</p>

        <h1 className="font-outfit text-2xl md:text-4xl lg:text-5xl md:w-[60%] mt-2">
          Building the future, one solution at a time
        </h1>
      </motion.div>

  
      <section
        className="px-6 pt-12 lg:pt-16 bg-black text-white pb-30"
      >
        {/* mobile */}
        <div className="sm:hidden">
          <div className="relative p-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideRight}
            >
              <img src="/rocket.jpg" className="absolute h-75 w-87.5 right-[-2.5]" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideLeft}
            >
              <img src="/astro.jpg" className="absolute top-37.5 left-0 h-100" />
            </motion.div>
          </div>

          <motion.p
            initial="hidden"
            whileInView="show"
            variants={slideUpBlur} 
            className="text-[15px] w-[80%] leading-6.25 font-jsl max-sm:mt-140"
          >
            Robotics dogs walking in Lagos. Drones flying for 80+ hours on solar power. Hand-crafted robots solving industrial challenges. Logistics drones delivering over traffic in 18 minutes. Every Orbitrix milestone proves aerospace innovation is happening now.
          </motion.p>
        </div>

        {/* desktop */}
        <div className="max-sm:hidden grid grid-cols-2 gap-6 md:w-[80%] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideRight}
            className="flex-center"
          >
            <img src="/rocket.jpg" className="w-full lg:w-125" />
          </motion.div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideLeft}
            >
              <img src="/astro.jpg" className="md:h-125" />
            </motion.div>

            <p className="text-[15px] lg:w-[80%] md:w-[80%] leading-6.25 font-jsl max-sm:mt-160 mt-6">
              Robotics dogs walking in Lagos. Drones flying for 80+ hours on solar power. Hand-crafted robots solving industrial challenges. Logistics drones delivering over traffic in 18 minutes. Every Orbitrix milestone proves aerospace innovation is happening now.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <section className="comps-img-section">
        <motion.div 
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="/somaku.png" className="max-[330px]:h-12 h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="/space-com.png" className="max-[330px]:h-12 h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="/space.png" className=" max-[330px]:h-12 h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="/axiom.png" className="max-[330px]:h-12 h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="/esa.png" className="max-[330px]:h-12 h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ghostVariants} 
          className="flex-center relative"
        >
          <img src="/nasa.png" className="max-[330px]:h-12 h-18" />

          <div className="comp-section-box"></div>
        </motion.div>
      </section>


      {/* FOOTER */}
      <Footer />
    </main>
  )
}

export default page