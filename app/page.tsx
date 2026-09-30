"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-pink-400 selection:text-black">
      {/* GLOBAL ANIMATION */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #000;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -6px, 0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.15;
          }

          50% {
            opacity: 0.28;
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.7s ease-out both;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
          will-change: transform;
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }

        .gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .pink-gradient-text {
          background: linear-gradient(135deg, #ff4fa3 0%, #ff8bc8 45%, #ffffff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .pink-gradient-btn {
          background: linear-gradient(135deg, #ff3f9f 0%, #ff76bd 48%, #ffffff 100%);
          color: #160812;
          box-shadow: 0 8px 28px rgba(255, 79, 163, 0.18);
        }

        .pink-gradient-btn:hover {
          background: linear-gradient(135deg, #ff68b4 0%, #ff9bd0 48%, #ffffff 100%);
          box-shadow: 0 12px 34px rgba(255, 79, 163, 0.28);
        }

        .pink-gradient-border {
          border-color: rgba(255, 105, 180, 0.28);
        }

        .card-hover {
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            background-color 220ms ease;
          will-change: transform;
        }

        .card-hover:hover {
          transform: translate3d(0, -5px, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <img
              src="/logoastoncloud1.png"
              alt="Aston Cloud"
              className="w-8 h-8 object-contain"
            />

            <span className="pink-gradient-text">Aston Cloud</span>
          </div>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 text-white/70 text-sm font-medium">
            <Link
              href="/panel"
              className="hover:text-white transition-colors"
            >
              Dashboard
            </Link>

            <Link
              href="#hattang"
              className="hover:text-white transition-colors"
            >
              Hạ Tầng
            </Link>

            <Link
              href="#panel-preview"
              className="hover:text-white transition-colors"
            >
              Panel
            </Link>

            <Link
              href="#nodes"
              className="hover:text-white transition-colors"
            >
              Cấu Hình
            </Link>

            <Link
              href="#about"
              className="hover:text-white transition-colors"
            >
              Về Chúng Tôi
            </Link>

            <Link
              href="#prides"
              className="hover:text-white transition-colors"
            >
              Bảng giá
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Link
              href="/panel"
              className="hidden sm:inline text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Đăng nhập
            </Link>

            <Link
              href="/panel"
              className="pink-gradient-btn font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-[680px] flex items-center bg-black bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl animate-glow pointer-events-none" />

        <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-pink-400/5 blur-3xl animate-glow pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/70 text-sm">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              Aston Cloud
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Thử tạo một
              <br />
              <span className="pink-gradient-text">
                Hosting & VPS dễ dàng!
              </span>
            </h1>

            <p className="mt-6 text-white/70 text-lg">
              Server đặt ở Việt Nam và ở nước ngoài, tốc độ trải nghiệm tối
              đa!
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/panel"
                className="pink-gradient-btn font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-1"
              >
                Tạo server ngay →
              </Link>

              <Link
                href="#nodes"
                className="bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-1"
              >
                Xem toàn bộ cấu hình
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HẠ TẦNG */}
      <section id="hattang" className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="pink-gradient-text font-semibold text-sm">
              HẠ TẦNG
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Hạ tầng cho những dự án của bạn
            </h2>

            <p className="mt-5 text-white/55 text-lg leading-8">
              Từ website, bot, API cho đến những ứng dụng cần máy chủ
              riêng. Aston Cloud hướng đến một trải nghiệm triển khai
              đơn giản và dễ quản lý.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* CARD 1 */}
            <div className="card-hover gpu rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:border-pink-400/30">
              <div className="text-3xl">🌏</div>

              <h3 className="mt-5 text-xl font-bold">
                Nhiều khu vực
              </h3>

              <p className="mt-3 text-white/50 leading-7">
                Lựa chọn vị trí server phù hợp với người dùng và dự án
                của bạn.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="card-hover gpu rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:border-pink-400/30">
              <div className="text-3xl">⚡</div>

              <h3 className="mt-5 text-xl font-bold">
                Hiệu năng ổn định
              </h3>

              <p className="mt-3 text-white/50 leading-7">
                Tài nguyên rõ ràng, phù hợp với nhiều loại ứng dụng
                và workload.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="card-hover gpu rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:border-blue-400/30">
              <div className="text-3xl">🖥️</div>

              <h3 className="mt-5 text-xl font-bold">
                Quản lý dễ dàng
              </h3>

              <p className="mt-3 text-white/50 leading-7">
                Theo dõi và quản lý server của bạn từ một nơi duy nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GIAO DIỆN PANEL */}
      <section
        id="panel-preview"
        className="relative bg-[#050505] text-white py-24 border-y border-white/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* PANEL IMAGE */}
            <div className="relative">
              <div className="absolute -inset-8 bg-pink-400/[0.035] blur-3xl rounded-full pointer-events-none" />

              <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-2 overflow-hidden shadow-2xl">
                <img
                  src="/dashboard.png"
                  alt="Aston Cloud Panel Dashboard"
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.015]"
                />
              </div>
            </div>

            {/* PANEL INFO */}
            <div className="animate-fade-up">
              <p className="pink-gradient-text font-semibold text-sm">
                GIAO DIỆN PANEL
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Quản lý Hosting & VPS dễ dàng
              </h2>

              <p className="mt-5 text-white/55 text-lg leading-8">
                Aston Cloud Panel giúp bạn quản lý server và theo dõi
                thông tin quan trọng từ một giao diện duy nhất.
              </p>

              <div className="mt-8 space-y-4">
                {/* FEATURE 1 */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-pink-400/20">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-pink-400/10 flex items-center justify-center text-xl">
                    🖥️
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Quản lý Server
                    </h3>

                    <p className="mt-1 text-sm text-white/45 leading-6">
                      Xem và quản lý server của bạn từ dashboard.
                    </p>
                  </div>
                </div>

                {/* FEATURE 2 */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-pink-400/20">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-pink-400/10 flex items-center justify-center text-xl">
                    ⚡
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Theo dõi tài nguyên
                    </h3>

                    <p className="mt-1 text-sm text-white/45 leading-6">
                      Theo dõi CPU, RAM, Storage và trạng thái server.
                    </p>
                  </div>
                </div>

                {/* FEATURE 3 */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-pink-400/20">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-pink-400/10 flex items-center justify-center text-xl">
                    📊
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Thông tin trực quan
                    </h3>

                    <p className="mt-1 text-sm text-white/45 leading-6">
                      Các thông tin quan trọng được hiển thị rõ ràng.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/panel"
                className="inline-flex mt-8 pink-gradient-btn font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-1"
              >
                Mở Panel →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CẤU HÌNH */}
      <section
        id="nodes"
        className="relative bg-[#050505] text-white py-24 border-b border-white/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="pink-gradient-text font-semibold text-sm">
              CẤU HÌNH
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Cấu hình linh hoạt
            </h2>

            <p className="mt-5 text-white/55 text-lg leading-8">
              Chọn lượng tài nguyên phù hợp với nhu cầu của bạn và
              nâng cấp khi dự án phát triển.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* STARTER */}
            <div className="card-hover gpu rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <p className="text-white/40 text-sm">STARTER</p>

              <h3 className="mt-2 text-2xl font-bold">
                512 MB
              </h3>

              <div className="mt-7 space-y-4 text-white/50">
                <div className="flex justify-between">
                  <span>CPU</span>
                  <span className="text-white">1 vCPU</span>
                </div>

                <div className="flex justify-between">
                  <span>RAM</span>
                  <span className="text-white">512 MB</span>
                </div>

                <div className="flex justify-between">
                  <span>Storage</span>
                  <span className="text-white">10 GB</span>
                </div>
              </div>
            </div>

            {/* STANDARD */}
            <div className="card-hover gpu rounded-3xl border border-pink-400/25 bg-pink-400/[0.045] p-7">
              <p className="pink-gradient-text text-sm">STANDARD</p>

              <h3 className="mt-2 text-2xl font-bold">
                2 GB
              </h3>

              <div className="mt-7 space-y-4 text-white/50">
                <div className="flex justify-between">
                  <span>CPU</span>
                  <span className="text-white">2 vCPU</span>
                </div>

                <div className="flex justify-between">
                  <span>RAM</span>
                  <span className="text-white">2 GB</span>
                </div>

                <div className="flex justify-between">
                  <span>Storage</span>
                  <span className="text-white">30 GB</span>
                </div>
              </div>
            </div>

            {/* PERFORMANCE */}
            <div className="card-hover gpu rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <p className="text-white/40 text-sm">
                PERFORMANCE
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                4 GB
              </h3>

              <div className="mt-7 space-y-4 text-white/50">
                <div className="flex justify-between">
                  <span>CPU</span>
                  <span className="text-white">4 vCPU</span>
                </div>

                <div className="flex justify-between">
                  <span>RAM</span>
                  <span className="text-white">4 GB</span>
                </div>

                <div className="flex justify-between">
                  <span>Storage</span>
                  <span className="text-white">60 GB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative bg-black text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="pink-gradient-text font-semibold text-sm">
                VỀ CHÚNG TÔI
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Aston Cloud được tạo ra để việc dùng server trở nên
                đơn giản hơn
              </h2>

              <p className="mt-6 text-white/55 text-lg leading-8">
                Không cần phải bắt đầu với một hệ thống phức tạp.
                Bạn có thể lựa chọn cấu hình phù hợp, triển khai server
                và quản lý tài nguyên của mình từ một nơi.
              </p>

              <p className="mt-4 text-white/55 text-lg leading-8">
                Khi dự án phát triển, bạn có thể nâng cấp tài nguyên
                để đáp ứng nhu cầu mới.
              </p>

              <Link
                href="/abouts"
                className="inline-flex mt-8 bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-1"
              >
                Tìm hiểu thêm →
              </Link>
            </div>

            <div className="card-hover gpu rounded-[2rem] bg-white/[0.035] border border-white/10 p-8">
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white/[0.035] p-6">
                  <div className="text-3xl font-bold">
                    24/7
                  </div>

                  <p className="mt-2 text-sm text-white/40">
                    Môi trường server
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.035] p-6">
                  <div className="text-3xl font-bold">
                    API
                  </div>

                  <p className="mt-2 text-sm text-white/40">
                    Tự động hóa
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.035] p-6">
                  <div className="text-3xl font-bold">
                    Cloud
                  </div>

                  <p className="mt-2 text-sm text-white/40">
                    Hạ tầng linh hoạt
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.035] p-6">
                  <div className="text-3xl font-bold">
                    Easy
                  </div>

                  <p className="mt-2 text-sm text-white/40">
                    Dễ quản lý
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BẢNG GIÁ */}
      <section
        id="prides"
        className="relative bg-[#030303] text-white py-24 border-t border-white/[0.05]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="pink-gradient-text font-semibold text-sm">
              BẢNG GIÁ
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Chọn gói phù hợp với bạn
            </h2>

            <p className="mt-5 text-white/50 text-lg">
              Bắt đầu miễn phí và nâng cấp khi bạn cần thêm tài nguyên.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {/* FREE */}
            <div className="card-hover gpu rounded-3xl border border-green-400/20 bg-pink-400/[0.035] p-7">
              <span className="inline-flex rounded-full bg-pink-400/10 pink-gradient-text px-3 py-1 text-xs font-bold">
                FREE
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                Free
              </h3>

              <p className="mt-3 text-white/40 text-sm">
                Dành cho người mới bắt đầu.
              </p>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  0đ
                </span>

                <span className="text-white/40">
                  {" "}
                  / tháng
                </span>
              </div>

              <div className="mt-7 space-y-3 text-sm text-white/55">
                <p>✓ 512 MB RAM</p>
                <p>✓ 1 vCPU</p>
                <p>✓ 10 GB Storage</p>
                <p>✓ 1 Server</p>
                <p>✓ Dashboard</p>
              </div>

              <Link
                href="/panel"
                className="mt-8 block text-center rounded-full pink-gradient-btn py-3 font-semibold transition-all duration-200 hover:-translate-y-1"
              >
                Bắt đầu miễn phí
              </Link>
            </div>

            {/* BASIC */}
            <div className="card-hover gpu rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <h3 className="text-2xl font-bold">
                Basic
              </h3>

              <p className="mt-3 text-white/40 text-sm">
                Cho bot, website và dự án nhỏ.
              </p>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  49Kđ
                </span>

                <span className="text-white/40">
                  {" "}
                  / tháng
                </span>
              </div>

              <div className="mt-7 space-y-3 text-sm text-white/55">
                <p>✓ 1 GB RAM</p>
                <p>✓ 1 vCPU</p>
                <p>✓ 20 GB Storage</p>
                <p>✓ 2 Servers</p>
                <p>✓ Dashboard</p>
              </div>

              <Link
                href="/panel"
                className="mt-8 block text-center rounded-full bg-white/10 hover:bg-white/15 text-white py-3 font-semibold transition-all duration-200 hover:-translate-y-1"
              >
                Chọn Basic
              </Link>
            </div>

            {/* PRO */}
            <div className="card-hover gpu relative rounded-3xl border border-pink-400/25 bg-pink-400/[0.05] text-white p-7">
              <div className="absolute -top-3 left-6">
                <span className="rounded-full pink-gradient-btn px-4 py-1.5 text-xs font-bold">
                  PHỔ BIẾN
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                Pro
              </h3>

              <p className="mt-3 text-white/50 text-sm">
                Cho ứng dụng cần nhiều tài nguyên.
              </p>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  99Kđ
                </span>

                <span className="text-white/50">
                  {" "}
                  / tháng
                </span>
              </div>

              <div className="mt-7 space-y-3 text-sm text-white/60">
                <p>✓ 2 GB RAM</p>
                <p>✓ 2 vCPU</p>
                <p>✓ 40 GB Storage</p>
                <p>✓ 4 Servers</p>
                <p>✓ Dashboard + API</p>
              </div>

              <Link
                href="/panel"
                className="mt-8 block text-center rounded-full pink-gradient-btn py-3 font-semibold transition-all duration-200 hover:-translate-y-1"
              >
                Chọn Pro
              </Link>
            </div>

            {/* BUSINESS */}
            <div className="card-hover gpu rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <h3 className="text-2xl font-bold">
                Business
              </h3>

              <p className="mt-3 text-white/40 text-sm">
                Cho dự án lớn và nhiều server.
              </p>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  199Kđ
                </span>

                <span className="text-white/40">
                  {" "}
                  / tháng
                </span>
              </div>

              <div className="mt-7 space-y-3 text-sm text-white/55">
                <p>✓ 4 GB RAM</p>
                <p>✓ 4 vCPU</p>
                <p>✓ 80 GB Storage</p>
                <p>✓ 8 Servers</p>
                <p>✓ Dashboard + API</p>
              </div>

              <Link
                href="/panel"
                className="mt-8 block text-center rounded-full bg-white/10 hover:bg-white/15 text-white py-3 font-semibold transition-all duration-200 hover:-translate-y-1"
              >
                Chọn Business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-8 py-14 md:px-16 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-pink-400/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold">
                Sẵn sàng tạo server?
              </h2>

              <p className="mt-5 text-white/50 text-lg">
                Bắt đầu với Aston Cloud ngay hôm nay.
              </p>

              <Link
                href="/panel"
                className="inline-flex mt-8 pink-gradient-btn font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-1"
              >
                Tạo server ngay →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-5 gap-10">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-2 font-bold text-lg">
                <img
                  src="/logoastoncloud1.png"
                  alt="Aston Cloud"
                  className="w-8 h-8 object-contain"
                />

                <span className="pink-gradient-text">Aston Cloud</span>
              </div>

              <p className="mt-4 text-white/35 text-sm leading-6">
                Hosting & VPS đơn giản, linh hoạt cho mọi dự án.
              </p>

              <p className="mt-3 text-white/25 text-xs leading-5">
                Aston Cloud sở hữu và vận hành astcloud.ddns.net.
              </p>
            </div>

            {/* PRODUCT */}
            <div>
              <h3 className="font-semibold">
                Sản phẩm
              </h3>

              <div className="mt-4 space-y-3 text-sm text-white/40">
                <Link
                  href="/panel"
                  className="block hover:text-white transition"
                >
                  Dashboard
                </Link>

                <Link
                  href="#nodes"
                  className="block hover:text-white transition"
                >
                  Cấu hình
                </Link>

                <Link
                  href="#prides"
                  className="block hover:text-white transition"
                >
                  Bảng giá
                </Link>
              </div>
            </div>

            {/* ASTON CLOUD */}
            <div>
              <h3 className="font-semibold">
                Aston Cloud
              </h3>

              <div className="mt-4 space-y-3 text-sm text-white/40">
                <Link
                  href="#about"
                  className="block hover:text-white transition"
                >
                  Về chúng tôi
                </Link>

                <Link
                  href="#hattang"
                  className="block hover:text-white transition"
                >
                  Hạ tầng
                </Link>

                <Link
                  href="#panel-preview"
                  className="block hover:text-white transition"
                >
                  Panel
                </Link>
              </div>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="font-semibold">
                Chính sách
              </h3>

              <div className="mt-4 space-y-3 text-sm text-white/40">
                <Link
                  href="/terms"
                  className="block hover:text-white transition"
                >
                  Điều khoản sử dụng
                </Link>

                <Link
                  href="/privacy"
                  className="block hover:text-white transition"
                >
                  Quyền riêng tư
                </Link>

                <Link
                  href="/cookie"
                  className="block hover:text-white transition"
                >
                  Chính sách cookie
                </Link>

                <Link
                  href="/refund"
                  className="block hover:text-white transition"
                >
                  Chính sách hoàn tiền
                </Link>
              </div>
            </div>

            {/* START */}
            <div>
              <h3 className="font-semibold">
                Bắt đầu
              </h3>

              <p className="mt-4 text-sm text-white/40 leading-6">
                Tạo server đầu tiên của bạn và bắt đầu triển khai
                dự án.
              </p>

              <Link
                href="/panel"
                className="inline-flex mt-5 pink-gradient-btn px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                Vào Dashboard
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/25">
            © {new Date().getFullYear()} Aston Cloud. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
