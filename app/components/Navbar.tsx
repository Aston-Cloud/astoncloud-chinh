"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavbarProps = {
  variant?: "default" | "policy";
};

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        variant === "policy"
          ? scrolled
            ? "bg-amber-100/95 backdrop-blur-md border-b border-amber-200 shadow-sm"
            : "bg-amber-50/95 backdrop-blur-md border-b border-amber-100"
          : scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className={`flex items-center gap-2 font-bold text-lg ${
            variant === "policy" ? "text-slate-900" : "text-white"
          }`}
        >
          <img
            src="/logoastbl.png"
            alt="Aston Cloud"
            className="w-8 h-8 object-contain"
          />

          <span className="pink-gradient-text">Aston Cloud</span>
        </Link>

        {/* MENU */}
        <div
          className={`hidden md:flex items-center gap-8 text-sm font-medium ${
            variant === "policy" ? "text-slate-700" : "text-white/70"
          }`}
        >
          <Link
            href="#hattang"
            className={`transition-colors ${variant === "policy" ? "hover:text-amber-700" : "hover:text-amber-300"}`}
          >
            Hạ Tầng
          </Link>

          <Link
            href="#panel-preview"
            className={`transition-colors ${variant === "policy" ? "hover:text-amber-700" : "hover:text-amber-300"}`}
          >
            Panel
          </Link>

          <Link
            href="#nodes"
            className={`transition-colors ${variant === "policy" ? "hover:text-amber-700" : "hover:text-amber-300"}`}
          >
            Cấu Hình
          </Link>

          <Link
            href="#about"
            className={`transition-colors ${variant === "policy" ? "hover:text-amber-700" : "hover:text-amber-300"}`}
          >
            Về Chúng Tôi
          </Link>

          <Link
            href="#prides"
            className={`transition-colors ${variant === "policy" ? "hover:text-amber-700" : "hover:text-amber-300"}`}
          >
            Bảng giá
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Link
            href="/panel"
            className={`hidden sm:inline text-sm font-medium transition-colors ${
              variant === "policy"
                ? "text-slate-700 hover:text-amber-700"
                : "text-white/70 hover:text-amber-300"
            }`}
          >
            Đăng nhập
          </Link>

          <Link
            href="/panel/registers"
            className="pink-gradient-btn font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </nav>
  );
}