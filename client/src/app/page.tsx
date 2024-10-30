'use client';

import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { BackgroundGradient } from '../components/ui/background-gradient';
import { ShootingStars } from '../components/ui/shooting-stars';
import { StarsBackground } from '../components/ui/stars-background';

const HomePage = () => {
  const renderHeading = () => (
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut'
      }}
      className="relative z-10 text-3xl md:text-7xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white"
    >
      Discover the Cosmos <br /> and Illuminate Your Knowledge
    </motion.h1>
  );

  const renderGetStartedButton = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5,
        duration: 0.6,
        ease: 'easeInOut'
      }}
      className="mt-6 flex justify-center"
    >
      <Link href="/search">
        <BackgroundGradient>
          <button className="text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            Get Started
          </button>
        </BackgroundGradient>
      </Link>
    </motion.div>
  );

  return (
    <MainLayout>
      <div className="relative h-screen overflow-hidden">
        <ShootingStars />
        <StarsBackground />
        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          {renderHeading()}
          {renderGetStartedButton()}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
