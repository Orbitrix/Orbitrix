"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { ChevronDown, Send } from "lucide-react";
import {
  MotionConfig,
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CAREERS_EMAIL = "orbitrixng@gmail.com";
const typeWords = ["robotics", "aerospace", "AI systems", "smart drones"];

/* ---------- Data ---------- */
const valueProps = [
  {
    title: "Deep-Tech Innovation",
    text: "Work on real-world frontier technology and indigenous solutions.",
  },
  {
    title: "Autonomy & Ownership",
    text: "Early-stage means direct ownership. Your decisions shape the product.",
  },
  {
    title: "Rapid Growth Curve",
    text: "A high-velocity environment where initiative and willingness to learn are rewarded.",
  },
];

const roles = [
  {
    title: "Marketing & Growth",
    team: "Growth",
    mode: "Remote",
    text: "Shape how Orbitrix reaches customers, partners and talent.",
  },
  {
    title: "Accounting & Finance",
    team: "Operations",
    mode: "Remote",
    text: "Keep the books, budgets and financial planning of a fast-growing company in order.",
  },
  {
    title: "Human Resources",
    team: "Operations",
    mode: "Remote",
    text: "Build the people practices and culture of an early-stage team.",
  },
  {
    title: "Video Editing & Visual Storytelling",
    team: "Creative",
    mode: "Remote",
    text: "Turn robots, drones and rockets into stories people remember.",
  },
  {
    title: "Data Protection & Privacy",
    team: "Compliance",
    mode: "Remote",
    text: "Make sure we handle data responsibly and meet regulatory standards.",
  },
  {
    title: "Social Media Management",
    team: "Creative",
    mode: "Remote",
    text: "Run our voice and community across X, LinkedIn and Instagram.",
  },
];

const values = [
  "Practical skills and foundational competence",
  "Clear communication and collaboration",
  "Initiative and rapid learning",
  "Creative problem-solving and detail orientation",
  "Genuine enthusiasm for tech and innovation",
  "Comfort in a fast-paced startup setting",
];

const mailtoFor = (role: string) => {
  const subject = encodeURIComponent(`Application: ${role} – [Your Name]`);
  const body = encodeURIComponent(
    "Hi Orbitrix team,\n\nWhy this role:\n\nA past project / proof of work:\n\nPortfolio / links:\n",
  );
  return `mailto:${CAREERS_EMAIL}?subject=${subject}&body=${body}`;
};

/* ---------- Animation helpers ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const slideIn: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const inView = { once: true, amount: 0.2 } as const;

const SectionHead = ({ label, title }: { label: string; title: string }) => (
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={inView}
  >
    <motion.p
      variants={fadeUp}
      className="font-outfit text-gray-700 font-bold text-[13px] lg:text-md"
    >
      {label}
    </motion.p>
    <motion.h2
      variants={fadeUp}
      className="font-outfit text-2xl md:text-4xl lg:text-5xl mt-3"
    >
      {title}
    </motion.h2>
  </motion.div>
);

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [visible, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

// Typewriter effect (same idea as the About page)
const useTypewriter = (words: string[]) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
        if (!isDeleting && text === current)
          setTimeout(() => setIsDeleting(true), 800);
        if (isDeleting && text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 50 : 120,
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
};

/* ---------- Page ---------- */
const CareersPage = () => {
  const typed = useTypewriter(typeWords);
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const scrollToRoles = () =>
    document.getElementById("roles")?.scrollIntoView({ behavior: "smooth" });

  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-gray-50 pt-30 lg:pt-40 overflow-x-hidden">
        <Header theme="light" />

        {/* Page title */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl"
          >
            Careers
          </motion.h1>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-fit mx-auto"
          >
            <ChevronDown />
          </motion.div>
        </div>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 pt-10 px-6 md:px-10 xl:px-20 mb-24 md:mb-32">
          <motion.div variants={stagger} initial="hidden" animate="show">
            
            <motion.h2
              variants={fadeUp}
              className="font-outfit text-2xl md:text-4xl lg:text-5xl mt-3"
            >
              Join Us as We Build What’s Next
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-jsl text-gray-500 mt-4 text-[15px] md:text-[16px]"
            >
              Orbitrix is expanding. We’re looking for talented, driven people
              who want to contribute, learn, and grow with an early-stage
              deep-tech company, and make a real impact from day one.
            </motion.p>
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToRoles}
              className="flex-center gap-3 font-jsl text-sm text-white py-3 px-6 bg-stone-500 hover:bg-stone-600 cursor-pointer rounded-full mt-8"
            >
              <span>Explore Roles</span>
              <ChevronDown size={18} />
            </motion.button>
          </motion.div>

          {/* Detail from About: image with a black caption block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] md:aspect-square w-full overflow-hidden rounded-3xl"
            >
              <Image
                src="/satellite.jpg"
                alt="Orbitrix satellite"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <h3 className="absolute font-outfit py-3 px-4 w-56 text-lg md:text-xl lg:text-2xl text-white bg-black -left-2 md:-left-6 bottom-6 rounded-r-lg">
              Where innovation meets reality
            </h3>
          </motion.div>
        </section>

        {/* Banner with parallax, typewriter + counters */}
        <section className="px-6 md:px-10 xl:px-20 mb-24 md:mb-32">
          <div
            ref={bannerRef}
            className="relative overflow-hidden rounded-3xl h-[440px] md:h-[500px]"
          >
            <motion.div
              style={{ y: parallaxY }}
              className="absolute inset-x-0 -top-[15%] h-[130%]"
            >
              <Image
                src="/rocket.jpg"
                alt="Orbitrix rocket"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 text-white">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                className="font-outfit text-2xl md:text-4xl max-w-2xl"
              >
                Help us build the future of{" "}
                <span className="border-b-2 pb-1">{typed}</span>
                <span className="ml-1 animate-blink">|</span>
              </motion.p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                className="flex gap-10 md:gap-16 mt-8"
              >
                <motion.div variants={fadeUp}>
                  <p className="font-outfit text-4xl md:text-6xl">
                    <Counter to={80} suffix="+" />
                  </p>
                  <p className="font-jsl text-sm text-gray-200">
                    hours of solar-powered drone flight
                  </p>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <p className="font-outfit text-4xl md:text-6xl">
                    <Counter to={18} />
                  </p>
                  <p className="font-jsl text-sm text-gray-200">
                    minute logistics drone deliveries
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Orbitrix */}
        <section className="px-6 md:px-10 xl:px-20 mb-24 md:mb-32">
          <SectionHead
            label="WHY ORBITRIX"
            title="The reality of working here"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-10"
          >
            {valueProps.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="border-t border-gray-200 pt-5"
              >
                <p className="font-outfit text-stone-500 text-sm">0{i + 1}</p>
                <h3 className="font-outfit text-xl md:text-2xl mt-1">
                  {item.title}
                </h3>
                <p className="font-jsl text-gray-500 mt-2 text-[15px] md:text-[16px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Open Roles */}
        <section
          id="roles"
          className="px-6 md:px-10 xl:px-20 mb-24 md:mb-32 scroll-mt-32"
        >
          <SectionHead label="OPEN ROLES" title="Where you could fit" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
          >
            {roles.map((role) => (
              <motion.div
                key={role.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col bg-white border border-gray-200 hover:shadow-lg rounded-2xl p-7"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="font-jsl text-xs text-gray-700 bg-gray-50 border border-gray-200 rounded-full px-3 py-0.5">
                    {role.team}
                  </span>
                  <span className="font-jsl text-xs text-gray-700 bg-gray-50 border border-gray-200 rounded-full px-3 py-0.5">
                    {role.mode}
                  </span>
                </div>
                <h3 className="font-outfit text-xl md:text-2xl mt-4">
                  {role.title}
                </h3>
                <p className="font-jsl text-gray-500 mt-2 mb-6 text-[15px]">
                  {role.text}
                </p>
                <a
                  href={mailtoFor(role.title)}
                  className="mt-auto self-start font-jsl text-sm text-stone-600 border border-stone-500 hover:bg-stone-500 hover:text-white py-2.5 px-5 rounded-full transition-colors"
                >
                  Apply via Email
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* What We Value: numbered list detail from About */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-10 xl:px-20 mb-24 md:mb-32">
          <div>
            <SectionHead
              label="WHAT WE VALUE"
              title="The people we’re looking for"
            />
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="mt-8"
            >
              {values.map((value, i) => (
                <motion.li
                  key={value}
                  variants={slideIn}
                  className="flex-start gap-6 font-outfit text-lg sm:text-xl py-3 border-b border-stone-300"
                >
                  <span className="text-stone-600">0{i + 1}.</span>
                  <p>{value}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
          >
            <Image
              src="/history.jpg"
              alt="Orbitrix at work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* Application Guidelines */}
        <section className="px-6 md:px-10 xl:px-20 mb-30">
          <SectionHead label="HOW TO APPLY" title="Show us what you can do" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white border border-gray-200 rounded-2xl p-6 md:p-10 mt-10"
          >
            <div className="md:col-span-3">
              <p className="font-jsl text-gray-500 text-[15px] md:text-[16px]">
                A traditional resume is optional. Portfolios, project
                breakdowns, or well-written cover notes are equally valued.
              </p>
              <h3 className="font-outfit text-xl mt-8">Format checklist</h3>
              <ol className="font-jsl text-gray-500 text-[15px] md:text-[16px] list-decimal pl-5 mt-3 space-y-2">
                <li>
                  Email subject:{" "}
                  <code className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 text-gray-700 text-sm break-words">
                    Application: [Role Name] – [Your Name]
                  </code>
                </li>
                <li>
                  A brief introduction: why this role, and a past project or
                  proof of work
                </li>
                <li>Links to past work or portfolio, or your attached CV</li>
              </ol>
              <motion.a
                href={mailtoFor("[Role Name]")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 font-jsl text-sm text-white py-3 px-6 bg-stone-500 hover:bg-stone-600 cursor-pointer rounded-full mt-8"
              >
                <Send size={18} />
                <span>Email your application</span>
              </motion.a>
            </div>

            <div className="relative md:col-span-2 min-h-[240px] overflow-hidden rounded-2xl">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/space-selfie.png"
                  alt="Astronaut selfie in space"
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </MotionConfig>
  );
};

export default CareersPage;
