"use client";

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ArrowRight, ChevronDown, MoveDownRight, ShipWheel } from "lucide-react"
import { useEffect, useState } from "react";

const words = ["cosmic journey", "astral flight", "galactic adenture"]

const ServicePage = () => {
  const [step, setStep] = useState<number>(0)
  const [text, setText] = useState<string>("")
  const [wordIndex, setWordIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 50 : 150;``

    const timeout = setTimeout(() => {
      setText((prev) => 
        isDeleting 
          ? currentWord.slice(0, prev.length - 1) 
          : currentWord.slice(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 800)
      };

      if (isDeleting && text === "") {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed)

    return () => clearTimeout(timeout)  
  }, [text, isDeleting, wordIndex])

  return (
    <main className="bg-gray-50 pt-30 lg:pt-40">
      <Header theme="light" />

      <div>
        <h1 className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl">
          Our Services
        </h1>
        <ChevronDown className="mx-auto" />
      </div>

      <div className="px-6 md:px-10 xl:px-20 mt-6">
        <p className="font-outfit text-gray-700 font-bold text-[13px] lg:text-md">
          OUR CORE CAPABILITIES
        </p>

        <h1 className="font-outfit text-2xl md:text-4xl lg:text-5xl md:w-[60%] mt-2">
          Where advanced tech meets real-world impact
        </h1>
      </div>

      <section className="flex-center mt-15">
        <video autoPlay muted loop>
          <source src="/drone.mp4" className="w-full" />
        </video>
      </section>

      {/*
      <section className="px-6 mt-12 lg:mt-16">
        
        <div className="sm:hidden">
          <div className="relative p-2">
            <img src="/rocket.jpg" className="absolute h-[300px] w-[350px] right-[-10px]" />
            <img src="/astro.jpg" className="absolute top-37.5 left-0 h-100" />
          </div>

          <p className="text-[15px] w-[80%] leading-6.25 font-jsl max-sm:mt-140">
            At Orbitrix, we don’t just build technology — we engineer solutions that expand what’s possible. Our focus areas are driven by innovation, guided by science, and grounded in real-world applications. From robotics to space exploration, we’re shaping the next era of intelligent systems.
          </p>
        </div>

        
        <div className="max-sm:hidden grid grid-cols-2 gap-6 md:w-[80%] mx-auto">
          <div className="flex-center">
            <img src="/rocket.jpg" className="w-full lg:w-125" />
          </div>

          <div>
            <img src="/astro.jpg" className="md:h-125" />

            <p className="text-[15px] lg:w-[80%] md:w-[80%] leading-6.25 font-jsl max-sm:mt-160 mt-6">
              At Orbitrix, we don’t just build technology — we engineer solutions that expand what’s possible. Our focus areas are driven by innovation, guided by science, and grounded in real-world applications. From robotics to space exploration, we’re shaping the next era of intelligent systems.
            </p>
          </div>
        </div>
      </section>*/}

      <section className="bg-gray-50 pt-10 sm:pt-20 mt-4">
        <p className="font-jsl text-center text-[14px] font-bold">
          WHAT WE OFFER
        </p>

        <h1 className="mt-2 md:mt-4 lg:mt-6 text-center font-jsans w-[85%] sm:w-[90%] mx-auto text-2xl sm:text-3xl md:text-4xl lg:font-bold xl:text-5xl">
          <span>
            Adventure beyond the stars, adrenaline that defies gravity – welcome
            to our
          </span>
          <span className="border-b-2 pb-1 ml-2">{text}</span>
          <span className="ml-1 animate-blink">|</span>
        </h1>
      </section>

      <section className="bg-gray-50 pt-10 sm:pt-20 pb-20">
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-6 md:px-10 xl:px-25">
          <div className="px-6 py-10 bg-white border border-stone-300">
            <img src="/drone-icon.png" className="h-20 lg:h-20 mx-auto" />

            <h1 className="font-jsans text-xl lg:text-2xl text-center mt-6">
              Logistics Drone
            </h1>

            <p className="mt-2 text-[15px] font-jsl text-center text-gray-500">
              Smart aerial delivery systems designed to move goods faster,
              safer, and beyond the limitatins of rad traffic.
            </p>

            <ArrowRight className="mt-4 mx-auto" />
          </div>

          <div className="px-6 py-10 bg-white border border-stone-300">
            <img src="/dog-icon.png" className="h-20 lg:h-20 mx-auto" />

            <h1 className="font-jsans text-xl lg:text-2xl text-center mt-6">
              Robotics Dogs
            </h1>

            <p className="mt-2 text-[15px] font-jsl text-center text-gray-500">
              Intelligent robotic companions built to assist with tasks, support
              operations, and explore human - robot interactions.
            </p>

            <ArrowRight className="mt-4 mx-auto" />
          </div>

          <div className="px-6 py-10 bg-white border border-stone-300">
            <img src="/robot-icon.png" className="h-19 lg:h-20 mx-auto" />

            <h1 className="font-jsans text-xl lg:text-2xl text-center mt-6">
              Humanoid Robots
            </h1>

            <p className="mt-2 text-[15px] font-jsl text-center text-gray-500">
              Advanced robotic systems developed to study automation,
              assistance, and future human - machine collaboration
            </p>

            <ArrowRight className="mt-4 mx-auto" />
          </div>

          <div className="px-6 py-10 bg-white border border-stone-300">
            <img
              src="/somaku-service-icon.png"
              alt="Somaku Logo"
              className="h-19 lg:h-20 mx-auto"
            />

            <h1 className="font-jsans text-xl lg:text-2xl text-center mt-6">
              Somaku AI
            </h1>

            <p className="mt-2 text-[15px] font-jsl text-center text-gray-500">
              An intelligent conversational model designed to communicate
              fluently across indigenous languages, local dialects, and native
              cultural contexts.
            </p>

            <ArrowRight className="mt-4 mx-auto" />
          </div>
        </div>
      </section>

      <section>
        <div className="marquee">
          <div className="marquee-content2 font-outfit text-5xl lg:text-9xl md:text-7xl mt-6">
            <span>
              <ShipWheel className="animate-spin" />
            </span>
            <span>NEUROSCIENCE</span>
            <span>
              <ShipWheel className="animate-spin" />
            </span>
            <span>NEURO-TECHNOLOGY</span>
            <span>
              <ShipWheel className="animate-spin" />
            </span>
            <span>SPACE EXPLORATION</span>
            <span>
              <ShipWheel className="animate-spin" />
            </span>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-content2-reverse font-outfit text-5xl md:text-7xl lg:text-9xl mt-3">
            <span>
              <ShipWheel className="animate-spin" />
            </span>
            <span>SPACE EXPLORATION</span>
            <span>
              <ShipWheel className="animate-spin" />
            </span>
            <span>DRONES</span>
            <span>
              <ShipWheel className="animate-spin" />
            </span>
            <span>ROBOTICS</span>
            <span>
              <ShipWheel className="animate-spin" />
            </span>
          </div>
        </div>
      </section>

      <section className="my-25 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="px-10">
          <img src="/turbines.png" className="w-full" />
        </div>

        <div>
          <div className="px-6 mt-6">
            <p className="font-outfit text-gray-700 font-bold text-[13px] lg:text-md">
              QUESTIONS & ANSWERS
            </p>

            <h1 className="font-outfit text-2xl md:text-4xl lg:text-5xl mt-2">
              What you need to know about our tours
            </h1>
          </div>

          {/* accordion */}
          <div className="px-8">
            {/* 1 */}
            <div
              onClick={() => setStep(step === 1 ? 0 : 1)}
              className="mt-8 border-b border-t py-4 border-gray-300 cursor-pointer"
            >
              <div className="text-lg font-outfit flex-between">
                <h1>What’s a zero-gravity flight?</h1>
                {step == 1 ? <MoveDownRight /> : <ArrowRight />}
              </div>

              <p
                className={`${step == 1 ? "" : "hidden"} font-jsl mt-4 text-sm text-gray-500 duration-500`}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>

            {/* 2 */}
            <div
              onClick={() => setStep(step === 2 ? 0 : 2)}
              className="border-b py-4 border-gray-300 cursor-pointer"
            >
              <div className="text-lg font-outfit flex-between">
                <h1>Are there any restrictions for space tours?</h1>
                {step == 2 ? <MoveDownRight /> : <ArrowRight />}
              </div>

              <p
                className={`${step == 2 ? "" : "hidden"} font-jsl mt-4 text-sm text-gray-500 duration-500`}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>

            {/* 3 */}
            <div
              onClick={() => setStep(step === 3 ? 0 : 3)}
              className="border-b py-4 border-gray-300 cursor-pointer"
            >
              <div className="text-lg font-outfit flex-between">
                <h1>What’s the cancellation policy?</h1>
                {step == 3 ? <MoveDownRight /> : <ArrowRight />}
              </div>

              <p
                className={`${step == 3 ? "" : "hidden"} font-jsl mt-4 text-sm text-gray-500 duration-500`}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ServicePage