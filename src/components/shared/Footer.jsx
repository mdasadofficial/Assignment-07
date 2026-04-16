"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A3A32] py-16 px-6 text-center font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Brand Name */}
        <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
          KeenKeeper
        </h2>

        {/* Tagline */}
        <p className="text-gray-300 text-sm md:text-base mb-10 opacity-90 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mb-12">
          <h3 className="text-white font-semibold mb-6">Social Links</h3>
          <div className="flex justify-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <span className="text-black text-xs font-bold">IG</span>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <span className="text-black text-xs font-bold">FB</span>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <span className="text-black text-xs font-bold">X</span>
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
