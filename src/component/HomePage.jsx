import React, { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

function Homepage() {
  const images = ["/photo_2025-08-11_16-17-00.jpg"];
  const downloadLink = "https://apps.apple.com/ng/app/woomeout/id6473001317";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedStories, setExpandedStories] = useState({});
  const [longTextExpanded, setLongTextExpanded] = useState(false);

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
      text: "If you can’t meet in person yet, you can send a video call invite directly in the app.",
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

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % heroItems.length);
    }, 6000); // Increased interval to accommodate sequential animations
    return () => clearInterval(id);
  }, [heroItems.length]);

  const stories = [
    {
      img: "/photo_2025-08-11_16-17-00.jpg",
      title: "Instant Dates",
      text: `Every request is a date request, you either accept and meet or move on.`,
    },
    {
      img: "/photo_2025-08-11_16-17-01 (2).jpg",
      title: "Weekly event",
      text: `From beach hangouts to karaoke nights, woomeout brings users together in fun, safe environments.`,
    },
    {
      img: "/photo_2025-08-11_16-17-01 (3).jpg",
      title: "Video and virtual dates",
      text: `If you can't meet in person yet, you can send a video call invite directly in the app.`,
    },
    {
      img: "/photo_2025-08-11_16-17-01.jpg",
      title: "Community meetup section",
      text: `A space where users can join upcoming hangouts, post outfits and get noticed by potential dates.`,
    },
    {
      img: "/photo_2025-08-11_16-17-02 (2).jpg",
      title: "Get gifted",
      text: `You can also make money from the app by receiving gifts from users.`,
    },
  ];

  const longParagraphs = [
    `Single people, listen up: If you're looking for love, want to start dating, or just keep it casual, you need to be on woome. With over 55 billion matches made, it's the place to be to meet your next best match. Let's be real, the dating landscape looks very different today, as most people are meeting online. With woome, the world's most popular free dating app, you have millions of other single people at your fingertips and they're all ready to meet someone like you. Whether you're straight or in the LGBTQIA community, woome's here to bring you all the sparks.`,
    `There really is something for everyone on woome. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? woome U's got you covered. woome isn't your average dating site — it's the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.`,
  ];

  const toggleStory = (i) => {
    setExpandedStories((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  // Animation variants for title
  const titleVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.8, ease: "easeIn" } },
  };

  // Animation variants for text
  const textVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.8, ease: "easeIn" } },
  };

  return (
    <div className="bg-black text-white">
      {/* ===== HERO / SLIDER ===== */}
      <header className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* NAV */}
        <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 text-white">
          <div className="flex items-center gap-6">
            <img src="/logo.webp" alt="logo" className="h-10 object-contain" />
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
            <button className="text-lg font-bold">Language</button>
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
          {/* Sliding Title and Subtext */}
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
                  className="text-5xl font-extrabold drop-shadow-lg"
                >
                  {heroItems[currentIndex].title}
                </motion.h1>
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-xl font-bold max-w-2xl px-4 mt-4"
                >
                  {heroItems[currentIndex].text}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <a
            href={downloadLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 to-orange-400 shadow-lg"
          >
            Create account
          </a>
        </div>
      </header>

      {/* ===== STORIES SECTION ===== */}
      <section className="bg-[#0b0b0b] text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {stories.map((s, idx) => {
            const isExpanded = !!expandedStories[idx];
            const preview =
              s.text.length > 120 ? s.text.slice(0, 120).trim() + "..." : s.text;
            return (
              <article key={idx} className="bg-transparent">
                <img
                  src={s.img}
                  alt={s.title}
                  className="mb-4 w-full h-60 object-cover rounded-sm"
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
          {/* Top grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
            <div>
              <h4 className="font-bold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Consumer Health Data Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                <li><a href="#" className="hover:underline">Intellectual Property</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Careers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Careers Portal</a></li>
                <li><a href="#" className="hover:underline">Tech Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Social</h4>
              <div className="flex space-x-4 text-xl">
                <a href="#"><FaInstagram /></a>
                <a href="#"><SiTiktok /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaFacebookF /></a>
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-bold text-white mb-3">FAQ</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Destinations</a></li>
                <li><a href="#" className="hover:underline">Press Room</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Promo Code</a></li>
              </ul>
            </div>
          </div>

          {/* Get the app */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 gap-4">
            <h4 className="font-bold text-white">Get the app!</h4>
            <div className="flex items-center gap-4">
              <img src="/appstore.png" alt="App Store" className="h-10" />
              <img src="/googleplay.png" alt="Google Play" className="h-10" />
            </div>
          </div>

          {/* Long description */}
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

          {/* Bottom links */}
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