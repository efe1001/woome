import React, { useEffect, useState, useRef } from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebookF, FaArrowDown } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

function Homepage() {
  const backgroundImages = [
    "/photo_2025-08-12_16-10-22.jpg",
    "/photo_2025-08-12_16-10-23 (2).jpg",
    "/photo_2025-08-12_16-10-23.jpg"
  ];
  const downloadLink = "https://apps.apple.com/ng/app/woomeout/id6473001317";
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedStories, setExpandedStories] = useState({});
  const [longTextExpanded, setLongTextExpanded] = useState(false);
  const videoRefs = useRef([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const storiesRef = useRef(null); // Ref for stories section

  // Hero items to slide one after another
  const heroItems = [
    {
      title: "Instant Dates",
      text: "Every request is a date request, you either accept and meet or move on.",
    },
    {
      title: "Weekly event",
      text: "From beach hangouts to karaoke nights, woomeout brings users together in fun, safe environments.",
    },
    {
      title: "Video and virtual dates",
      text: "If you can't meet in person yet, you can send a video call invite directly in the app.",
    },
    {
      title: "Community meetup section",
      text: "A space where users can join upcoming hangouts, post outfits and get noticed by potential dates.",
    },
    {
      title: "Get gifted",
      text: "You can also make money from the app by receiving gifts from users.",
    },
  ];

  // Background image and hero text cycling effect with strict 5-second intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % Math.max(backgroundImages.length, heroItems.length)
        );
        setIsTransitioning(false);
      }, 1000);
      
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length, heroItems.length]);

  const stories = [
    {
      video: "/video_2025-08-12_15-13-26.mp4",
      title: "Instant Dates",
      text: `Every request is a date request, you either accept and meet or move on.`,
    },
    {
      video: "/video_2025-08-12_15-13-42.mp4",
      title: "Weekly event",
      text: `From beach hangouts to karaoke nights, woomeout brings users together in fun, safe environments.`,
    },
    {
      video: "/video_2025-08-12_15-13-52.mp4",
      title: "Video and virtual dates",
      text: `If you can't meet in person yet, you can send a video call invite directly in the app.`,
    },
    {
      video: "/video_2025-08-12_15-14-02.mp4",
      title: "Community meetup section",
      text: `A space where users can join upcoming hangouts, post outfits and get noticed by potential dates.`,
    },
    {
      video: "/video_2025-08-12_15-14-12.mp4",
      title: "Get gifted",
      text: `You can also make money from the app by receiving gifts from users.`,
    },
  ];

  const longParagraphs = [
    `Woomeout is Nigeria’s intentional dating app that takes you from “Hi” to “Let’s meet” without endless chatting. 💌
Discover people near you, send instant date requests, or hop on a video call.
Join weekly hangouts like beach days, karaoke nights, and game meetups — all designed to help you meet real people, make real connections, and create unforgettable moments. ❤️`,
   // `There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U's got you covered. Tinder isn't your average dating site — it's the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.`,
  ];

  const toggleStory = (i) => {
    setExpandedStories((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const titleVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        when: "beforeChildren" 
      } 
    },
    exit: { 
      x: "-100%", 
      opacity: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeIn",
        when: "afterChildren" 
      } 
    },
  };

  const textVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        delay: 0.3 
      } 
    },
    exit: { 
      x: "-100%", 
      opacity: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeIn" 
      } 
    },
  };

  const handleImageError = (e) => {
    console.warn(`Image failed to load: ${e.target.src}`);
    e.target.src = "/placeholder.png";
  };

  // Function to scroll to stories section
  const scrollToStories = () => {
    storiesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white">
      {/* ===== HERO / SLIDER ===== */}
      <header className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {backgroundImages.map((src, i) => (
              currentIndex % backgroundImages.length === i && (
                <motion.img
                  key={src}
                  src={src}
                  alt={`Background ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  onError={handleImageError}
                />
              )
            ))}
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* NAV */}
        <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 text-white">
          <div className="flex items-center gap-6">
            <img
              src="/Woome logo Gradient.png"
              alt="Woomeout Logo"
              className="h-16 w-auto max-w-[200px] object-contain brightness-125 contrast-100"
              onError={handleImageError}
              onLoad={() => console.log("Logo loaded successfully")}
            />
            <ul className="hidden md:flex gap-6">
              <li>
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-lg font-bold"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={downloadLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black rounded-full px-4 py-1 text-lg font-bold"
            >
              Log in
            </a>
          </div>
        </nav>

        {/* HERO text */}
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6">
          <div className="mt-12 flex flex-col items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex flex-col items-center"
              >
                <motion.h1
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-7xl font-extrabold drop-shadow-lg"
                >
                  {heroItems[currentIndex % heroItems.length].title}
                </motion.h1>
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-xl font-normal max-w-2xl px-4 mt-4 leading-relaxed"
                >
                  {heroItems[currentIndex % heroItems.length].text}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex items-center gap-4">
              <a href={downloadLink} target="_blank" rel="noreferrer">
                <img
                  src="https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo.png"
                  alt="Download on the App Store"
                  className="h-12 w-auto max-w-[200px] object-contain brightness-125 contrast-100"
                  onError={handleImageError}
                />
              </a>
              <a href={downloadLink} target="_blank" rel="noreferrer">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/12/Google-Play-icon-logo.png"
                  alt="Get it on Google Play"
                  className="h-12 w-auto max-w-[200px] object-contain brightness-125 contrast-100"
                  onError={handleImageError}
                />
              </a>
            </div>
            <p className="mt-2 text-sm font-normal">Click to install</p>
          </div>
          <motion.div
            className="mt-4 cursor-pointer"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            onClick={scrollToStories}
          >
            <FaArrowDown className="text-3xl text-white" />
          </motion.div>
        </div>
      </header>

      {/* ===== STORIES SECTION ===== */}
      <section ref={storiesRef} className="bg-[#0b0b0b] text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {stories.map((s, idx) => {
            const isExpanded = !!expandedStories[idx];
            const preview =
              s.text.length > 120 ? s.text.slice(0, 120).trim() + "..." : s.text;
            return (
              <article key={idx} className="bg-transparent">
                <video 
                  ref={el => videoRefs.current[idx] = el}
                  src={s.video}
                  className="mb-4 w-full h-60 object-cover rounded-sm brightness-100"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-sm mt-2 leading-relaxed">
                  {isExpanded ? s.text : preview}
                </p>
                {s.text.length > 120 && (
                  <button
                    onClick={() => toggleStory(idx)}
                    className="text-pink-500 mt-2 inline-block font-medium"
                  >
                    {isExpanded ? "Show less" : "Continue reading →"}
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#111] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 gap-8 border-b border-gray-700 pb-8">
            <div className="mx-auto">
              <h4 className="font-bold text-white mb-3 text-center">Social</h4>
              <div className="flex space-x-4 text-xl justify-center">
                <a href="https://www.instagram.com/woomeout?igsh=MW4wY2Q1M2xhZDgzcw=="><FaInstagram /></a>
                <a href="https://www.tiktok.com/@woomeout?_t=ZS-8yopAsQcTOJ&_r=1"><SiTiktok /></a>
                <a href="https://x.com/woomeout"><FaTwitter /></a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 gap-4">
            <h4 className="font-bold text-white">Get the app!</h4>
            <div className="flex items-center gap-4">
              <a href={downloadLink} target="_blank" rel="noreferrer">
                <img
                  src="https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo.png"
                  alt="Download on the App Store"
                  className="h-12 w-auto max-w-[200px] object-contain brightness-125 contrast-100"
                  onError={handleImageError}
                />
              </a>
              <a href={downloadLink} target="_blank" rel="noreferrer">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/12/Google-Play-icon-logo.png"
                  alt="Get it on Google Play"
                  className="h-12 w-auto max-w-[200px] object-contain brightness-125 contrast-100"
                  onError={handleImageError}
                />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="prose max-w-none prose-invert text-gray-300">
              {longTextExpanded ? (
                <>
                  <p>{longParagraphs[0]}</p>
                  <p>{longParagraphs[1]}</p>
                  <button
                    onClick={() => setLongTextExpanded(false)}
                    className="text-pink-500 mt-2"
                  >
                    Show less
                  </button>
                </>
              ) : (
                <>
                  <p>
                    {longParagraphs[0].slice(0, 300).trim()}
                    {longParagraphs[0].length > 300 && "..."}
                  </p>
                  <button
                    onClick={() => setLongTextExpanded(true)}
                    className="text-pink-500 mt-2"
                  >
                    Read more
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-xs gap-4">
            <div className="space-x-3 text-center md:text-left">
              <a href="#" className="hover:underline">FAQ</a> /
              <a href="#" className="hover:underline"> Safety Tips</a> /
              <a href="#" className="hover:underline"> Terms</a> /
              <a href="#" className="hover:underline"> Cookie Policy</a> /
              <a href="#" className="hover:underline"> Privacy Settings</a>
            </div>
            <div className="text-center md:text-right">
              © 2025 Woome LLC, All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;