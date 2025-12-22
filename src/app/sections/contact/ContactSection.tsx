'use client'

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate form container
      gsap.fromTo(
        formRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate header (dots and title) with a slight delay
      gsap.fromTo(
        headerRef.current,
        { 
          opacity: 0,
          y: -20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate form inputs with stagger
      gsap.fromTo(
        inputRefs.current,
        { 
          opacity: 0,
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate button
      gsap.fromTo(
        buttonRef.current,
        { 
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate social icons
      gsap.fromTo(
        socialsRef.current?.children || [],
        { 
          opacity: 0,
          y: 20,
          scale: 0.5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xbladjby", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", name: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-10 px-6 lg:px-60">
      {/* form */}
      <form 
        ref={formRef}
        // onSubmit={handleSubmit}
        className="w-full bg-[#F6F6F6] shadow-lg rounded-xl dark:bg-[#181818] p-4 lg:p-8"
      >
        <header 
          ref={headerRef}
          className="flex items-center border-b pb-4 border-gray-200 dark:border-gray-700"
        >
          <div className="flex gap-2">
            <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-[#F63636]" />
            <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-[#F6C136]" />
            <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-[#68F636]" />
          </div> 

          <h3 className="absolute left-1/2 -translate-x-1/2 text-gray-800 pointer-events-none dark:text-white font-semibold">
            New Message 
          </h3> 
        </header>

        {/* Email */}
        <div className="my-4 flex items-center gap-2">
            <input 
              ref={(el) => { inputRefs.current[0] = el; }}
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="text" 
              placeholder="Enter your email address" 
              className="w-full bg-transparent border-b border-gray-600 dark:border-gray-400 py-2 px-1 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-800 dark:focus:border-white transition-colors" 
            />
        </div>
        {/* Name */}
        <div className="my-4 flex items-center gap-2">
            <input 
              ref={(el) => { inputRefs.current[1] = el; }}
              value={formData.name}
              name="name"
              onChange={handleChange}
              type="text" 
              placeholder="Enter your name" 
              className="w-full bg-transparent border-b border-gray-600 dark:border-gray-400 py-2 px-1 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-800 dark:focus:border-white transition-colors" 
            />
        </div>
        {/* Subject */}
        <div className="my-4 flex items-center gap-2">
            <input 
              ref={(el) => { inputRefs.current[2] = el; }}
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter Subject" 
              className="w-full bg-transparent border-b border-gray-600 dark:border-gray-400 py-2 px-1 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-800 dark:focus:border-white transition-colors" 
            />
        </div>
        <div className="my-4">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              ref={(el) => { inputRefs.current[3] = el; }}
              className="min-h-50 h-auto rounded-lg p-4 text-gray-800 dark:text-white bg-[#f3f3f3] dark:bg-[#0d0d0d] placeholder-gray-500 dark:placeholder-gray-400 w-full" 
              placeholder="Write your message here"
            ></textarea>
        </div>

          {/* Status Message */}
        {submitStatus !== "idle" && (
          <div
            className={`mb-4 p-4 rounded-lg text-center ${
              submitStatus === "success"
                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
            }`}
          >
            {submitStatus === "success" ? (
              <p className="font-medium">✓ Message sent successfully! I'll get back to you soon.</p>
            ) : (
              <p className="font-medium">✗ Failed to send message. Please try again.</p>
            )}
          </div>
        )}

        <div className="flex justify-start lg:justify-end">
            <button 
              disabled={isSubmitting}
              onClick={handleSubmit}
              ref={buttonRef}
              type="button"
              className="w-full lg:w-fit py-2 px-8 text-white bg-black dark:bg-[#333030] hover:bg-[#333030] hover:dark:bg-[#111] transition-all duration-200 cursor-pointer rounded-lg"
            >
              {isSubmitting ? "Sending" : "Send"}
            </button>
        </div>
      </form>
        
        <div 
          ref={socialsRef}
          className="mt-10 flex justify-center items-center text-gray-600 dark:text-gray-200 gap-8"
        >
          <Link href="mailto:uzonnamdi31@gmail.com" target="_blank">
            <IoMail size={21} className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
          </Link>
          <Link href="/">
            <IoLogoLinkedin size={19} className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
          </Link>
          <Link href="https://x.com/Nnamdiuzo2" target="_blank">
            <FaXTwitter size={19} className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
          </Link>
          <Link href="https://github.com/Nnamdi-Uzoigwe" target="_blank">
            <FaGithub size={19} className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/nnam_deee/" target="_blank">
            <FaSquareInstagram size={19} className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
          </Link>
        </div>
    </div>
  );
}