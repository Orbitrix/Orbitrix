"use client";

import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { FcIdea } from "react-icons/fc";
import { FiTarget } from "react-icons/fi";

const words = ["cosmic journey", "astral flight", "galactic adventure"];

const AboutPage = () => {
  const [text, setText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1),
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <>
      <Header theme="light" />

      {/* 1st Section */}
      <section className="bg-gray-50 pt-30 lg:pt-40">
        <h1 className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl">
          About Us
        </h1>
        <ChevronDown className="mx-auto" />

        {/* grid */}
        <div className="mt-6 md:mt-10 px-6 md:grid md:grid-cols-2 lg:w-[90%] min-[1250px]:w-[80%] mx-auto">
          <div className="relative w-67.5 sm:w-112.5 md:w-87.5 lg:w-100 xl:w-125">
            <img
              src="/satellite.jpg"
              className="h-full object-center object-cover"
            />

            <h1 className="absolute font-outfit py-3 px-4 w-60 max-[330px]:text-sm text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white bg-black -right-10 bottom-0">
              Explore mankind's final frontier
            </h1>
          </div>

          <div className="max-md:mt-8">
            <h1 className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
              Embark on a life changing journey with us
            </h1>

            <p className="font-jsl text-gray-600 mt-4 md:mt-4 sm:w-[90%]">
              Orbitrix is an advanced innovation agency based in Nigeria, built
              on the belief that science and technology from Africa can operate
              in entirely new dimensions and compete on a global scale.
            </p>

            <p className="font-jsl text-gray-600 mt-4 md:mt-4 sm:w-[90%]">
              We embrace technology as a force for transformation; one that
              improves lives, simplifies systems, and enhances safety. At
              Orbitrix, innovation goes beyond ideas; it is about turning bold
              concepts into functional, real-world solutions.
            </p>

            <p className="font-jsl text-gray-600 mt-4 md:mt-4 sm:w-[90%]">
              Our aim is to showcase the brilliant side of Nigeria by proving
              that cutting-edge science, engineering, and creativity can
              originate here and impact the world. Through research, design, and
              development, we are shaping technologies that respond to modern
              challenges while pointing toward the future.
            </p>

            <div className="flex-start gap-6 mt-6 font-outfit text-lg sm:text-xl">
              <span className="text-stone-600">01.</span>
              <p>Photography and images</p>
            </div>

            <hr className="text-stone-300 mt-3" />

            <div className="flex-start gap-6 mt-2 font-outfit text-lg sm:text-xl">
              <span className="text-stone-600">02.</span>
              <p>Educational materials</p>
            </div>

            <button className="font-outfit text-white py-3 md:py-4 px-10 cursor-pointer hover:bg-stone-600 active:bg-stone-600 mt-6 md:mt-8 rounded-full bg-stone-500">
              Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* 2nd section  */}
      <section className="bg-gray-50 pt-30 lg:pt-40 grid gap-8 grid-cols-1 sm:px-10 md:grid-cols-2 px-6 md:px-20 xl:px-30">
        <div className="bg-white p-8 rounded-lg border border-gray-100">
          <FcIdea size={40} className="animate-blink-slow" />
          <h1 className="font-jsans text-2xl md:text-3xl lg:text-4xl mt-4">
            Our Vision
          </h1>
          <p className="mt-4 font-jsl text-gray-600 max-sm:text-sm leading-6.5">
            To become a global leader in applied AI, Robotics, and connected
            systems by building practical, trustworthy solutions that shape the
            future of industries and redefine how technology is experienced
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-100">
          <FiTarget size={38} color="blue" className="animate-blink-slow" />
          <h1 className="font-jsans text-2xl md:text-3xl lg:text-4xl mt-4">
            Our Mission
          </h1>
          <p className="mt-4 font-jsl text-gray-600 max-sm:text-sm leading-6.5">
            To design and deploy intelligent, secure and interconnected
            technologies that help businesses solve real-world problems, scale
            efficiently, and operate with confidence in a rapidly evolving
            digital landscape
          </p>
        </div>
      </section>

      {/* 3rd Section */}
      <section className="bg-gray-50 pt-20 sm:pt-30">
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

      {/* 4th Section */}
      <section className="bg-gray-50 pt-10 sm:pt-20">
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6 md:px-10 xl:px-25">
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
        </div>
      </section>

      {/* our team section */}
      <section className="bg-gray-50 pt-20 sm:pt-30 pb-20">
        <h1 className="text-center font-jsans text-2xl md:text-3xl xl:text-4xl">
          Meet the
          <span className="text-stone-400"> team</span>
        </h1>

        {/* ROW 1: 1 Member (CEO) */}
        <div className="mt-16 w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
          <div className="h-45 w-45 rounded-full overflow-hidden mx-auto">
            <img
              src="/samuel_ogunmilua.jpg"
              className="h-full w-full object-cover object-[0%_5%]"
            />
          </div>
          <h1 className="font-jsans text-xl text-center mt-4">
            Samuel Ogunmilua
          </h1>
          <p className="font-jsl text-center text-gray-600 mt-2">
            CEO & Founder
          </p>
        </div>

        {/* Pyramid Container for Rows 2, 3, and 4 */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto mt-15 px-6">
          {/* ROW 2: 2 Members (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-md sm:max-w-xl mx-auto w-full">
            <div className="flex flex-col items-center">
              <div className="h-30 sm:h-40 w-30 sm:w-40 rounded-full overflow-hidden">
                <img
                  src="/ademola-oladeinde.jpeg"
                  className="h-full w-full object-cover object-[0%_1%]"
                />
              </div>
              <h1 className="font-jsans text-lg md:text-xl text-center mt-4">
                Oladeinde Adedamola
              </h1>
              <p className="font-jsl max-sm:text-sm text-center text-gray-600 mt-2">
                PM & Cybersecurity Engineer
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-30 sm:h-40 w-30 sm:w-40 rounded-full overflow-hidden">
                <img
                  src="/ambibola_favour.jpg"
                  className="h-full w-full object-cover object-[10%_40%]"
                />
              </div>
              <h1 className="font-jsans text-lg md:text-xl text-center mt-4">
                Abimbola Favour
              </h1>
              <p className="font-jsl max-sm:text-sm text-center text-gray-600 mt-2">
                Mechanical Engineer
              </p>
            </div>
          </div>

          {/* ROW 3: 3 Members */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="h-30 sm:h-40 w-30 sm:w-40 rounded-full overflow-hidden">
                <img
                  src="/habeeb_amoo.jpg"
                  className="h-full w-full object-cover object-[0%_25%]"
                />
              </div>
              <h1 className="font-jsans text-lg md:text-xl text-center mt-4">
                Habeeb Amoo
              </h1>
              <p className="font-jsl max-sm:text-sm text-center text-gray-600 mt-2">
                Software Engineer
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-30 sm:h-40 w-30 sm:w-40 rounded-full overflow-hidden">
                <img
                  src="/somefun_dolapo.jpg"
                  className="h-full w-full object-cover object-[0%_1%]"
                />
              </div>
              <h1 className="font-jsans text-lg md:text-xl text-center mt-4">
                Somefun Dolapo
              </h1>
              <p className="font-jsl max-sm:text-sm text-center text-gray-600 mt-2">
                Creative Studio Manager
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-30 sm:h-40 w-30 sm:w-40 rounded-full overflow-hidden">
                <img
                  src="/israel_victor.jpg"
                  className="h-full w-full object-cover object-[0%_0%]"
                />
              </div>
              <h1 className="font-jsans text-lg md:text-xl text-center mt-4">
                Israel Victor
              </h1>
              <p className="font-jsl max-sm:text-sm text-center text-gray-600 mt-2">
                Aerospace Engineer
              </p>
            </div>
          </div>

          {/* ROW 4: 3 Members */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col items-center">
              <div className="h-30 sm:h-40 w-30 sm:w-40 rounded-full overflow-hidden">
                <img
                  src="/enoch_ayomide.jpg"
                  className="h-full w-full object-cover object-[0%_0%]"
                />
              </div>
              <h1 className="font-jsans text-lg md:text-xl text-center mt-4">
                Enoch Ayomide
              </h1>
              <p className="font-jsl max-sm:text-sm text-center text-gray-600 mt-2">
                Electrical Engineer
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-30 sm:h-40 w-30 sm:w-40 rounded-full overflow-hidden">
                <img
                  src="/udeh-emmanuel.jpeg"
                  className="h-full w-full object-cover object-[0%_0%]"
                />
              </div>
              <h1 className="font-jsans text-lg md:text-xl text-center mt-4">
                Udeh Emmanuel
              </h1>
              <p className="font-jsl max-sm:text-sm text-center text-gray-600 mt-2">
                Robotics & AI Engineer
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-30 sm:h-40 w-30 sm:w-40 rounded-full overflow-hidden">
                <img
                  src="/anderson_precious.png"
                  className="h-full w-full object-cover object-[0%_0%]"
                />
              </div>
              <h1 className="font-jsans text-lg md:text-xl text-center mt-4">
                Anderson Precious
              </h1>
              <p className="font-jsl max-sm:text-sm text-center text-gray-600 mt-2">
                Junior legal associate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel section */}
      <Carousel />

      <Footer />
    </>
  );
};

export default AboutPage;
