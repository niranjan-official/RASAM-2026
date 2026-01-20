"use client";

import type React from "react";
import Image from "next/image";

import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    Menu,
    X,
    MapPinned,
    Mail,
    Globe,
} from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import Loading from "@/components/loading";

const events = [
    {
        title: "Group Dance",
        poster: "/images/posters/Group Dance.jpg",
        url: "https://prvdnc.com/syncstorm",
    },
    {
        title: "Mr & Ms Rasam",
        poster: "/images/posters/Mr Rasam.jpg",
        url: "https://prvdnc.com/crownquest",
    },

    {
        title: "Best Dancer",
        poster: "/images/posters/Best Dancer.jpg",
        url: "https://prvdnc.com/solosurge",
    },
    {
        title: "Best Singer",
        poster: "/images/posters/Best Singer.jpg",
        url: "https://prvdnc.com/tunetitan",
    },
    {
        title: "Body Show",
        poster: "/images/posters/Body Show.jpg",
        url: "http://prvdnc.com/musclehustle",
    },
    {
        title: "Band Competition",
        poster: "/images/posters/Band Competition.jpg",
        url: "https://prvdnc.com/rbpbattle",
    },
    {
        title: "Reels Competition",
        poster: "/images/posters/Reels Competition.jpg",
        url: "https://prvdnc.com/clipclash",
    },
    {
        title: "Fashion Show",
        poster: "/images/posters/Fashion Show.jpg",
        url: "http://prvdnc.com/trendparade",
    },

];

const galleryItems = [
    { id: 1, year: "Season 7" },
    { id: 2, year: "Season 7" },
    { id: 3, year: "Season 6" },
    { id: 4, year: "Season 6" },
    { id: 5, year: "Season 5" },
    { id: 6, year: "Season 5" },
    { id: 7, year: "Season 4" },
    { id: 8, year: "Season 4" },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Events", href: "#events" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    // Scroll detection with direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled past threshold
            setIsScrolled(currentScrollY > 10);

            // Show header when at top or scrolling up, hide when scrolling down
            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled
                ? "backdrop-blur-xl bg-white/5 border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    >
                    </motion.div>
                    <Image
                        src="/images/rasam-font.png"
                        alt="RASAM"
                        width={120}
                        height={30}
                        className="h-5 md:h-6 w-auto"
                        priority
                    />
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-16">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index + 0.3 }}
                            onClick={() => scrollToSection(item.href)}
                            className="text-red-50 hover:text-red-300 tracking-widest transition-colors uppercase font-light duration-200 relative group"
                            style={{ fontFamily: 'var(--font-ekster-thin)' }}
                        >
                            {item.name}
                            <motion.div
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-400 group-hover:w-full transition-all duration-300"
                                initial={false}
                                whileHover={{ width: "100%" }}
                            />
                        </motion.button>
                    ))}
                </nav>

                {/* Join Us Button */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="hidden md:flex items-center"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold uppercase text-sm tracking-wide overflow-hidden group"
                    >
                        <span className="relative z-10">Join Us</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </motion.a>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-pink-50 hover:text-red-300 transition-colors"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
            >
                <div className="mx-4 my-4 p-4 rounded-2xl bg-gradient-to-b from-red-950/40 to-black/60 backdrop-blur-xl border border-red-500/20 shadow-2xl shadow-red-900/20">
                    <div className="space-y-1">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 8, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left px-5 py-3 text-pink-50/90 hover:text-white rounded-xl transition-all duration-300 font-medium tracking-wide relative group"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 group-hover:bg-red-400 transition-colors" />
                                    {item.name}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                            </motion.button>
                        ))}
                    </div>

                    {/* Decorative Divider */}
                    <div className="flex items-center gap-2 my-4 px-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                        <div className="w-1 h-1 rounded-full bg-red-500/50" />
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                    </div>

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection("#contact")}
                        className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-xl font-bold tracking-wide uppercase text-sm transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
                    >
                        <Sparkles className="w-4 h-4" />
                        Join Us
                    </motion.button>
                </div>
            </motion.div>
        </motion.header>
    );
}

function HeroSection() {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-10 px-4"
            style={{
                background: "linear-gradient(to bottom, #69001A, #E00047, #69001A)",
            }}
        >
            {/* Animated split text - RASAM from left, 2026 from right */}
            <div className="absolute -mt-44 md:-mt-8 text-[18vw] md:text-[12vw] lg:text-[180px] hero-text-blend tracking-wider select-none pointer-events-none flex gap-4">
                <motion.span
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    style={{ fontFamily: 'var(--font-rothefight)' }}
                >
                    RASAM
                </motion.span>
                <span className="hidden md:block">&nbsp;</span>
                <motion.span
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    style={{ fontFamily: 'var(--font-rothefight)' }}
                >
                    2026
                </motion.span>
            </div>

            {/* Logo with launch animation */}
            <motion.div
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                initial={{ scale: 0, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 1.4,
                    scale: { type: "spring", stiffness: 100 }
                }}
            >
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/wellness-d79f2.appspot.com/o/Group%20179.png?alt=media&token=0cc49b8e-5e26-4e2e-a180-48945eabc9fb"
                    alt="RASAM Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                />
            </motion.div>

            {/* Mobile-only description with fade-in */}
            <motion.div
                className="md:hidden max-w-md px-6 text-center z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
            >
                <p className="text-white text-sm leading-relaxed font-light mb-4">
                    Providence College&apos;s premier cultural extravaganza celebrating creativity, talent, and artistic expression
                </p>
            </motion.div>

            {/* CTA Buttons with staggered animation */}
            <motion.div
                className="flex flex-col sm:flex-row gap-4 z-10 w-full max-w-lg px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
            >
                <motion.button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex-1 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-2xl overflow-hidden shadow-lg shadow-red-900/20"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-rose-500 to-red-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase">
                        Our Story
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                </motion.button>
                <motion.button
                    onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex-1 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-2xl overflow-hidden shadow-lg transition-colors duration-300"
                >
                    <motion.div
                        className="absolute inset-0 bg-white/5"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase text-red-100 group-hover:text-white transition-colors">
                        Feel the Fest
                        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                </motion.button>
            </motion.div>
        </div>
    );
}

function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Countdown state
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateCountdown = () => {
            const eventDate = new Date('2026-02-13T00:00:00').getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance > 0) {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            } else {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateCountdown();
        const interval = setInterval(calculateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={ref}
            id="about"
            className="relative py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-[#69001A] to-[#0A0101] overflow-hidden"
        >


            <div className="relative max-w-7xl mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-sm font-bold text-red-300 uppercase tracking-[0.2em] mb-8 bg-white/5 inline-block px-4 py-2 rounded-full border border-red-500/20 backdrop-blur-sm">
                        About RASAM
                    </h2>

                    <div className="space-y-8 text-rose-50 text-base sm:text-xl md:text-2xl lg:text-4xl leading-relaxed font-light max-w-6xl mx-auto">
                        <p>
                            <span className="text-white">RASAM</span>, an
                            esteemed{" "}
                            <span className="text-red-200">
                                annual extravaganza
                            </span>{" "}
                            in its{" "}
                            <span className="text-red-200">
                                seventh spectacular season
                            </span>
                            , unites students, professionals, and enthusiasts
                            across myriad domains. Igniting the stage with ingenuity, fueling{" "}
                            <span className="text-red-300">
                                innovation
                            </span>, and
                            reveling in the essence of{" "}
                            <span className="text-red-300">
                                creativity
                            </span>. This beacon of artistic expression promises a captivating
                            voyage through an enchanting world of imagination.
                        </p>
                    </div>

                    <div className="mt-6 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto select-none">
                        {/* Date Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="group relative p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-red-500/40 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-rose-500/0 group-hover:from-red-500/5 group-hover:to-rose-500/5 transition-all duration-500 rounded-2xl" />
                            <div className="relative z-10">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-red-400/60 text-[10px] font-bold uppercase tracking-[0.25em]">Date</span>
                                    <div className="h-px flex-1 ml-3 bg-gradient-to-r from-red-500/30 to-transparent" />
                                </div>
                                <div className="text-center mb-3">
                                    <div className="text-white font-bold text-xl mb-1 bg-gradient-to-r from-white via-white to-red-100 bg-clip-text group-hover:text-transparent transition-all duration-500" style={{ fontFamily: 'var(--font-ekster)' }}>
                                        Feb 13-14, 2026
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-red-400/40" />
                                    <div className="text-red-200/70 text-[10px] uppercase tracking-[0.2em] font-medium">Save the Date</div>
                                    <div className="w-1 h-1 rounded-full bg-red-400/40" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>

                        {/* Countdown Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="group relative p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-red-500/40 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-rose-500/5 transition-all duration-500 rounded-2xl" />
                            <div className="relative z-10">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-red-400/60 text-[10px] font-bold uppercase tracking-[0.25em]">
                                        {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? 'Edition' : 'Countdown'}
                                    </span>
                                    <div className="h-px flex-1 ml-3 bg-gradient-to-r from-red-500/30 to-transparent" />
                                </div>
                                <div className="text-center mb-3">
                                    {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? (
                                        <div className="text-white font-bold text-xl mb-1 bg-gradient-to-r from-white via-white to-red-100 bg-clip-text text-transparent transition-all duration-500" style={{ fontFamily: 'var(--font-ekster)' }}>
                                            Season 7
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-4 gap-2 text-white font-semibold" style={{ fontFamily: 'var(--font-ekster)' }}>
                                            <div className="flex flex-col">
                                                <span className="text-2xl bg-gradient-to-r from-white via-white to-red-100 bg-clip-text text-transparent transition-all duration-500">{String(countdown.days).padStart(2, '0')}</span>
                                                <span className="text-[8px] text-red-200/50 uppercase mt-1">Days</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-2xl bg-gradient-to-r from-white via-white to-red-100 bg-clip-text text-transparent transition-all duration-500">{String(countdown.hours).padStart(2, '0')}</span>
                                                <span className="text-[8px] text-red-200/50 uppercase mt-1">Hrs</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-2xl bg-gradient-to-r from-white via-white to-red-100 bg-clip-text text-transparent transition-all duration-500">{String(countdown.minutes).padStart(2, '0')}</span>
                                                <span className="text-[8px] text-red-200/50 uppercase mt-1">Min</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-2xl bg-gradient-to-r from-white via-white to-red-100 bg-clip-text text-transparent transition-all duration-500">{String(countdown.seconds).padStart(2, '0')}</span>
                                                <span className="text-[8px] text-red-200/50 uppercase mt-1">Sec</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-red-400/40" />
                                    <div className="text-red-200/70 text-[10px] uppercase tracking-[0.2em] font-medium">
                                        {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? 'Event Live!' : 'Time Remaining'}
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-red-400/40" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-100 transition-opacity duration-500" />
                        </motion.div>

                        {/* Venue Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="group relative p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-red-500/40 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-rose-500/0 group-hover:from-red-500/5 group-hover:to-rose-500/5 transition-all duration-500 rounded-2xl" />
                            <div className="relative z-10">
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="text-red-400/60 text-[10px] font-bold uppercase tracking-[0.25em]">Venue</span>
                                    <div className="h-px flex-1 ml-3 bg-gradient-to-r from-red-500/30 to-transparent" />
                                </div>
                                <div className="text-center mb-1">
                                    <div className="flex flex-col items-center justify-center w-full">
                                        <div className="text-white font-bold text-lg leading-none bg-gradient-to-r mt-3 from-white via-white to-red-100 bg-clip-text group-hover:text-transparent transition-all duration-500" style={{ fontFamily: 'var(--font-ekster)' }}>
                                            Providence College
                                        </div>
                                        <div className="text-red-200/70 text-[9px] uppercase tracking-[0.25em] font-medium mt-1">
                                            of Engineering
                                        </div>
                                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-500/30 to-transparent my-1.5" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <div className="w-1 h-1 rounded-full bg-red-400/40" />
                                    <div className="text-red-200/70 text-[10px] uppercase tracking-[0.2em] font-medium">Chengannur</div>
                                    <div className="w-1 h-1 rounded-full bg-red-400/40" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function EventsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4.5);
    const [isMobile, setIsMobile] = useState(false);

    // Duplicate events for infinite scroll
    const duplicatedEvents = [...events, ...events, ...events];
    const totalCards = duplicatedEvents.length;

    // Update cards per view based on screen size
    useEffect(() => {
        const updateCardsPerView = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);

            if (mobile) {
                setCardsPerView(1.2); // Mobile: show 1 full card + small preview
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2.5); // Tablet: show 2+ cards
            } else {
                setCardsPerView(4.5); // Desktop: show 4+ cards
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = useCallback(() => {
        if (isMobile) {
            // Mobile: simple increment, will restart at end
            setCurrentIndex((prev) => {
                if (prev >= events.length - 1) {
                    return 0; // Restart from beginning
                }
                return prev + 1;
            });
        } else {
            // Desktop/Tablet: seamless infinite scroll
            setCurrentIndex((prev) => prev + 1);
        }
    }, [isMobile]);

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [handleNext]);

    // Reset position when reaching boundaries for seamless loop (desktop/tablet only)
    useEffect(() => {
        if (!isMobile) {
            if (currentIndex >= events.length * 2) {
                setTimeout(() => {
                    setCurrentIndex(events.length);
                }, 500);
            } else if (currentIndex <= 0) {
                setTimeout(() => {
                    setCurrentIndex(events.length);
                }, 500);
            }
        }
    }, [currentIndex, isMobile]);

    return (
        <section
            ref={ref}
            id="events"
            className="relative pt-12 pb-16 md:pt-16 md:pb-32 bg-[#0A0101] overflow-hidden"
        >
            <div className="relative z-10 w-full">
                {/* Header - Constrained Container */}
                <div className="max-w-7xl mx-auto px-4 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* Decorative top line */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/50" />
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: 'var(--font-ekster)' }}>
                            Signature Events of{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
                                Rasam
                            </span>
                        </h2>

                        <p className="text-red-200/60 text-xs md:text-sm uppercase tracking-[0.3em] font-light">
                            Celebrate • Compete • Create
                        </p>
                    </motion.div>
                </div>

                {/* Carousel Container - Full Width */}
                <div className="relative w-full">
                    {/* Navigation Arrows - Overlayed */}
                    <div className="absolute inset-y-0 left-0 z-20 flex items-center px-4 pointer-events-none">
                        <button
                            onClick={handlePrev}
                            className="pointer-events-auto w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 hover:border-red-500/40 transition-all duration-300 flex items-center justify-center group"
                        >
                            <ArrowRight className="w-5 h-5 text-white rotate-180 group-hover:text-red-400 transition-colors" />
                        </button>
                    </div>

                    <div className="absolute inset-y-0 right-0 z-20 flex items-center px-4 pointer-events-none">
                        <button
                            onClick={handleNext}
                            className="pointer-events-auto w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 hover:border-red-500/40 transition-all duration-300 flex items-center justify-center group"
                        >
                            <ArrowRight className="w-5 h-5 text-white group-hover:text-red-400 transition-colors" />
                        </button>
                    </div>

                    {/* Carousel Track */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-3 sm:gap-4 md:gap-6"
                            animate={{
                                x: `-${currentIndex * (100 / (cardsPerView))}vw`
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{
                                paddingLeft: isMobile ? '16px' : '0px',
                                paddingRight: isMobile ? '16px' : '0px'
                            }}
                        >
                            {duplicatedEvents.map((event, index) => (
                                <motion.a
                                    key={index}
                                    href={event.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 20 }
                                    }
                                    transition={{ duration: 0.6, delay: (index % events.length) * 0.1 }}
                                    className="group relative aspect-[3/4]  overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/40 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-red-900/30 block flex-shrink-0"
                                    style={{
                                        width: isMobile
                                            ? `calc((${100 / cardsPerView}vw - 32px) - ${(3 * (cardsPerView - 1)) / cardsPerView}px)`
                                            : `calc(${100 / cardsPerView}vw - ${((cardsPerView === 2.5 ? 4 : 6) * (cardsPerView - 1)) / cardsPerView}px)`
                                    }}
                                >
                                    <Image
                                        src={event.poster}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority={index < 4}
                                    />

                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {events.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(events.length + index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === (currentIndex % events.length)
                                    ? 'w-8 bg-red-500'
                                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function GallerySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(2); // Start in middle
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const galleryImages = [
        { src: "/images/gallery/1.jpg", alt: "Season 7 Highlights" },
        { src: "/images/gallery/2.jpg", alt: "Season 6" },
        { src: "/images/gallery/3.jpg", alt: "Season 5" },
        { src: "/images/gallery/4.jpg", alt: "Season 4" },
        { src: "/images/gallery/5.jpg", alt: "Season 3" },
    ];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const getCardStyle = (index: number) => {
        // Calculate minimal distance in a circular array
        const total = galleryImages.length;
        let dist = (index - activeIndex + total) % total;

        // Convert to signed distance for positioning (-2, -1, 0, 1, 2)
        if (dist > total / 2) dist -= total;

        const isCenter = dist === 0;
        const absDist = Math.abs(dist);

        // Visibility check - only show center and 2 on each side (1 on mobile)
        if (isMobile) {
            if (absDist > 1) return { zIndex: 0, opacity: 0, scale: 0, x: "0%" };
        } else {
            if (absDist > 2) return { zIndex: 0, opacity: 0, scale: 0, x: "0%" };
        }

        if (isMobile) {
            return {
                zIndex: 50 - absDist * 10,
                scale: isCenter ? 1 : 0.85,
                opacity: isCenter ? 1 : 1 - (absDist * 0.3), // More blur/fade on mobile
                filter: isCenter ? "blur(0px) brightness(1)" : `blur(4px) brightness(0.6)`,
                x: `${dist * 75}%`, // Tighter spacing for mobile
                rotateY: dist * 2, // Less rotation on mobile
            };
        }

        return {
            zIndex: 50 - absDist * 10,
            scale: isCenter ? 1 : 1 - (absDist * 0.15),
            opacity: isCenter ? 1 : 1 - (absDist * 0.2),
            filter: isCenter ? "blur(0px) brightness(1)" : `blur(${absDist * 4}px) brightness(${1 - absDist * 0.3})`,
            x: `${dist * 50}%`, // 50% spacing creates overlapping stack effect
            rotateY: dist * 5, // Subtle 3D rotation
        };
    };

    return (
        <section ref={ref} id="gallery" className="relative pt-10 md:pb-32 px-4 bg-[#0A0101] overflow-hidden min-h-[600px] md:min-h-[800px] flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8 }}
                    className="mb-10 text-center relative z-20"
                >
                    {/* Decorative top line */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/50" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: 'var(--font-ekster)' }}>
                        Memories that{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
                            Celebrate
                        </span>
                    </h2>

                    <p className="text-red-200/60 text-xs md:text-sm uppercase tracking-[0.3em] font-light">
                        Moments of Beauty
                    </p>
                </motion.div>

                {/* 3D Carousel Container */}
                <div className="relative h-[350px] md:h-[500px] flex items-center justify-center perspective-1000">
                    <div className="relative w-full max-w-[800px] h-[350px] md:h-[500px] flex items-center justify-center">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {galleryImages.map((image, index) => {
                                const style = getCardStyle(index);

                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute top-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${isMobile ? 'w-[75%] aspect-[3/4]' : 'w-full md:w-[60%] aspect-square'}`}
                                        initial={style}
                                        animate={style}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.32, 0.72, 0, 1]
                                        }}
                                        style={{
                                            transformStyle: "preserve-3d",
                                            left: isMobile ? "12.5%" : "20%", // Center alignment base
                                        }}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 800px"
                                            priority={index === activeIndex}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between items-center px-4 md:px-12 pointer-events-none z-50">
                        <button
                            onClick={handlePrev}
                            className="pointer-events-auto w-12 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-red-500/50 hover:bg-black/60 transition-all duration-300 flex items-center justify-center group shadow-xl"
                        >
                            <ArrowRight className="w-6 h-6 text-white rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="pointer-events-auto w-12 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-red-500/50 hover:bg-black/60 transition-all duration-300 flex items-center justify-center group shadow-xl"
                        >
                            <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    return (
        <section
            ref={ref}
            className="pt-12 pb-16 md:pt-16 md:pb-32 px-4 bg-gradient-to-b from-[#0A0101] to-[#69001A]"
        >
            <div className="max-w-7xl mx-auto mb-8 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Decorative top line */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/50" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: 'var(--font-ekster)' }}>
                        Connect With{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
                            Rasam
                        </span>
                    </h2>

                    <p className="text-red-200/60 text-xs md:text-sm uppercase tracking-[0.3em] font-light mb-4 md:mb-8">
                        Join the Celebration
                    </p>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Email Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] transition-all duration-300 backdrop-blur-sm"
                >
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-ekster)' }}>Email Us</h3>
                    <div className="flex flex-col items-center gap-1">
                        <a href="mailto:rasam.social@providence.edu.in" className="text-pink-50/80 text-sm hover:text-red-300 transition-colors">rasam.social@providence.edu.in</a>
                        <a href="mailto:marketing@providence.edu.in" className="text-pink-50/80 text-sm hover:text-red-300 transition-colors">marketing@providence.edu.in</a>
                    </div>
                </motion.div>

                {/* Location Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] transition-all duration-300 backdrop-blur-sm"
                >
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <MapPinned className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-ekster)' }}>Visit Us</h3>
                    <p className="text-pink-50/80 text-sm text-center mb-4">Providence College of Engineering<br />Chengannur, Kerala</p>
                    <a
                        href="https://maps.app.goo.gl/gnpNXVozMNdfRgoW7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-widest text-red-400 hover:text-red-300 border-b border-red-500/30 pb-0.5"
                    >
                        View on Map
                    </a>
                </motion.div>

                {/* Socials Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] transition-all duration-300 backdrop-blur-sm"
                >
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-pink-50 mb-4" style={{ fontFamily: 'var(--font-ekster)' }}>Follow Us</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com/providencece"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 text-pink-50 hover:text-red-400 transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/school/providencece/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 text-pink-50 hover:text-red-400 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 6.132-4.947 6.132 0v8.306h5v-10.239c0-8.972-10.457-8.761-11.164-4.234v-1.833z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/theprovidencecollege/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 text-pink-50 hover:text-red-400 transition-all duration-300"
                            aria-label="Facebook"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a
                            href="https://providence.edu.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 text-pink-50 hover:text-red-400 transition-all duration-300"
                            aria-label="Website"
                        >
                            <Globe className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-[#0A0101] py-12 md:py-20 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <h3
                                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400"
                                style={{ fontFamily: 'var(--font-ekster)' }}
                            >
                                Rasam
                            </h3>
                            <span className="text-xs uppercase tracking-[0.5em] text-red-500/50 font-light mt-1">
                                Season 7
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Step into a world where art meets passion.
                            The premier celebration of human connection and creative excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-6 font-light">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            {['About', 'Events', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-slate-400 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-xs font-light uppercase tracking-[0.3em] text-red-400 mb-6">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Instagram', url: 'https://instagram.com/providencece' },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/school/providencece/posts/?feedView=all' },
                                { name: 'Facebook', url: 'https://www.facebook.com/theprovidencecollege/' },
                                { name: 'Official Website', url: 'https://providence.edu.in' }
                            ].map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xs font-light uppercase tracking-[0.3em] text-red-400 mb-6">
                            Drop a line
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:rasam.social@providence.edu.in"
                                    className="text-slate-400 text-sm hover:text-white transition-colors duration-300 break-all"
                                >
                                    rasam.social@providence.edu.in
                                </a>
                            </li>
                            <li className="text-slate-500 text-sm italic">
                                More updates soon...
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs tracking-wider">
                        © 2026 RASAM SEASON 7. PROVIDENCE COLLEGE OF ENGINEERING.
                    </p>
                    <div className="flex gap-6 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
                        <span className="hover:text-red-400 transition-colors pointer-events-none">Privacy Policy</span>
                        <span className="hover:text-red-400 transition-colors pointer-events-none">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main className="bg-[#0E0E0E] text-white overflow-x-hidden">
            <Header />
            <section id="home">
                <HeroSection />
            </section>
            <section id="about">
                <AboutSection />
            </section>
            <EventsSection />
            <section id="gallery">
                <GallerySection />
            </section>
            <section id="contact">
                <ContactSection />
            </section>
            <Footer />
        </main>
    );
}
