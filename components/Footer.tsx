"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  const pathname = usePathname();
  
  const isActive = (href: string) => pathname === href;

  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <img
        src="/space-selfie.png"
        className="object-center object-cover max-md:h-80 sm:h-90 md:h-80 lg:h-90"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70 pt-15">
        <h1 className="text-white font-outfit text-2xl md:text-4xl md:pl-10 lg:pl-20 max-md:text-center">
          Your journey starts here!
        </h1>
        <p className="font-outfit text-2xl md:text-4xl md:pl-10 lg:pl-20 text-gray-400 max-md:text-center mt-1">
          Let's talk!
        </p>

        {/* links */}
        <div className="md:flex-between md:px-10 lg:px-20">
          {/* navs */}
          <div className="flex justify-center gap-3 mt-4 sm:mt-6 items-start">
            <div className={isActive("/") ? "footer-nav-active" : "footer-nav"}>
              <Link href="/">Home</Link>
            </div>

            <div
              className={isActive("/blog") ? "footer-nav-active" : "footer-nav"}
            >
              <Link href="/blog">Blog</Link>
            </div>

            <div
              className={isActive("/shop") ? "footer-nav-active" : "footer-nav"}
            >
              <Link href="/">Shop</Link>
            </div>

            <div
              className={
                isActive("/careers") ? "footer-nav-active" : "footer-nav"
              }
            >
              <Link href="/careers">Careers</Link>
            </div>

            <div
              className={
                isActive("/contact") ? "footer-nav-active" : "footer-nav"
              }
            >
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* socials */}
          <div className="flex-center gap-2 mt-4 sm:mt-6">
            <div className="text-white h-10 w-10 border border-gray-600 rounded-full flex-center">
              <ImFacebook size={14} />
            </div>

            <div className="text-white h-10 w-10 border border-gray-600 rounded-full flex-center">
              <a href="https://x.com/Orbitrix_">
                <FaXTwitter size={14} />
              </a>
            </div>

            <div className="text-white h-10 w-10 border border-gray-600 rounded-full flex-center">
              <a href="https://www.linkedin.com/company/orbitrixng">
                <FaLinkedin size={16} />
              </a>
            </div>

            <div className="text-white h-10 w-10 border border-gray-600 rounded-full flex-center">
              <a href="https://www.instagram.com/orbitrix__">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 lg:px-20 mt-8 lg:mt-16">
          <hr className="text-gray-600" />
        </div>

        <p className="text-sm font-jsl text-gray-400 max-md:text-center md:pl-10 lg:pl-20 mt-4 mf:mt-6">
          Orbitrix &copy; {year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer