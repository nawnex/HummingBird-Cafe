import React from 'react';
import { Heart, Leaf, Shield, Coffee, Users, Zap } from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-primary-green" />,
      title: 'Quality & Care',
      desc: 'Every dish is crafted with premium ingredients and genuine passion for exceptional food.'
    },
    {
      icon: <Users className="w-6 h-6 text-primary-green" />,
      title: 'Community',
      desc: 'We believe in the power of connection and creating spaces where relationships flourish.'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-green" />,
      title: 'Creativity',
      desc: 'Innovation and imagination are at the heart of everything we do, from menu to atmosphere.'
    },
  ];

  return (
    <div className="space-y-20 font-sans pb-20 text-gray-100">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-4 pt-10">
        <span className="text-[10px] font-bold text-primary-green uppercase tracking-[0.2em] block">About Us</span>
        <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-white leading-tight">
          Where creativity meets <span className="text-primary-green italic font-light">community</span>
        </h1>
        <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto italic">
          "The Hummingbird Cafe is unique in its own little way and proudly so."
        </p>
      </section>

      {/* 2. Story Section */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6 text-gray-300 font-light leading-relaxed">
          <h2 className="text-2xl font-serif text-white font-bold">A Humbling Little Hummingbird Story</h2>
          <p>
            From the moment you walk through our doors, our goal is simple: to create the perfect space for you. Whether you’re craving a quiet corner to unwind, a friendly face to chat with, something sweet, a hearty homemade meal, or a refreshing smoothie, we’re here for it all.
          </p>
          <p>
            Hummingbird was originally created in 2023 with a bold dream. On February 5th 2024, that dream entered a new chapter as we reopened our doors, keeping the original spirit true to its home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-[#191919] p-8 rounded-3xl border border-white/5">
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-white font-bold">Why People Visit</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Our food, snacks, smoothies, friendly service, adaptability, and that unmistakable feeling of belonging. We pride ourselves on our “think outside the box” approach.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-white font-bold">A Hub for Dreamers</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              More than just a café, it’s a hub for dreamers, innovators, writers, artists, and entrepreneurs. Where conversations flow, ideas take shape, and every visit holds potential for connection.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars */}
      <section className="bg-white/5 border border-white/5 p-12 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <div key={i} className="space-y-4">
              <div className="p-4 bg-primary-green/10 border border-primary-green/20 rounded-2xl w-fit">
                {v.icon}
              </div>
              <h4 className="font-serif text-lg font-bold text-white">{v.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Service Ethos */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-serif text-white font-bold">Our Service Promise</h2>
        <p className="text-sm text-gray-300 font-light leading-relaxed">
          At The Hummingbird Cafe, service isn’t just a duty — it’s our passion, our promise, and our purpose. We are intentional in what we do, aiming to resolve, create, and produce experiences that feel genuine. Every interaction is guided by warmth, authenticity, and real care.
        </p>
      </section>

      {/* 5. Team Section */}
      <section className="bg-[#191919] p-10 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-serif text-white font-bold">Our Team</h2>
          <p className="text-sm text-gray-300 font-light leading-relaxed">
            Behind every great cup of coffee and delicious meal is a dedicated team. Our baristas, chefs, and staff are committed to making your experience memorable. We're not just serving food and drinks—we're building relationships and fostering a community where everyone feels at home.
          </p>
        </div>
        <div className="shrink-0">
          <Users className="w-16 h-16 text-primary-green/50" />
        </div>
      </section>

    </div>
  );
}
