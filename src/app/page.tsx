"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link"; // Import Link for navigation
import { BackgroundGradient } from "@/components/ui/background-gradient";

const HomePage = () => {
  return (
    <MainLayout>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Discover the Cosmos <br /> and Illuminate Your Knowledge
        </motion.h1>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mt-6 flex justify-center"
        >
          <Link href="/search">
            <BackgroundGradient>
              <button className=" text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                Get Started
              </button>
            </BackgroundGradient>
          </Link>
        </motion.div>
      </LampContainer>
    </MainLayout>
  );
};

export default HomePage;
