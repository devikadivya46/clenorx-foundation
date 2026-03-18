"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const TEAM = [
  {
    name: "Pavan M Naik",
    designation: "Founder & CEO",
    quote:
      "Passionate about empowering rural communities through financial literacy and sustainable education. Every workshop we run is a step towards a more equitable India.",
    src: "/pavan-naik.jpeg",
    imagePosition: "50% 30%",
    linkedin: "https://www.linkedin.com/in/pavan-m-naik-44b53b143",
  },
  {
    name: "Praveena K",
    designation: "Co-Founder & COO",
    quote:
      "Dedicated to building impactful grassroots programs that create lasting change in Tier 3 communities across Karnataka. Operations that serve people — that is my purpose.",
    src: "/Praveen.png",
    imagePosition: "50% 0%",
    linkedin: "https://www.linkedin.com/in/praveena-k-69073337b/",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
            Leadership
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#1E3A5F] dark:text-white">
            Meet Our Team
          </h2>
          <div className="heading-accent mx-auto mb-4" />
          <p className="text-lg text-slate-500 dark:text-slate-300 max-w-2xl mx-auto">
            Driven by purpose &mdash; committed to transforming financial futures in rural India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TEAM.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] w-full lg:aspect-[16/9]">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: member.imagePosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-bold text-[#1E3A5F] dark:text-slate-100">{member.name}</h3>
                <p className="text-base font-semibold text-orange-500 mt-1">{member.designation}</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-5">{member.quote}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-xl bg-[#1E3A5F] dark:bg-slate-700 hover:bg-[#F59E0B] text-white text-sm font-semibold transition-colors"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
