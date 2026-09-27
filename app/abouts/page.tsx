"use client";

import Link from "next/link";

const founder = {
  name: "Hoàng Huy",
  username: "@neotwis",
  role: "Founder & Developer",
  avatar: "https://neotwis.is-a.dev/avatar2.jpeg",
  status: "Online",
  note: "😪 Bị ốm rùi.",
};

const members = [
  {
    name: "Thái An",
    username: "@37ysm",
    role: "Owners & Developer",
    avatar: "https://cdn.discordapp.com/avatars/1197915568414654557/7a16ad890ef7e04cb52cfcb13ec93cc3.webp?size=1536",
    status: "Online",
    note: "Đang phát triển và định hướng Aston Cloud.",
  },
  {
    name: "Đức Tài",
    username: "@minhkhongbaophi",
    role: "Quản Lý",
    avatar: "https://cdn.discordapp.com/avatars/1515508458022240268/0b4440c79ba9db9136cbabdc0022c52f.webp?size=1536",
    status: "Online",
    note: "Quản lý và vận hành hệ thống.",
  },
  {
    name: "Support",
    username: "@support",
    role: "Supporter",
    avatar: "https://neotwis.is-a.dev/feed.png",
    status: "Away",
    note: "Hỗ trợ người dùng khi cần thiết.",
  },
];

function getStatusColor(status: string) {
  if (status === "Online") return "bg-green-500";
  if (status === "Away") return "bg-yellow-400";
  if (status === "Do Not Disturb") return "bg-red-500";
  return "bg-neutral-400";
}

function Status({
  status,
  dark = false,
}: {
  status: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        dark ? "text-white/60" : "text-neutral-500"
      }`}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full ${getStatusColor(status)}`}
      />

      <span>{status}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f5] text-neutral-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg"
          >
            <span>🌤️</span>
            <span>Aston Cloud</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
            <Link
              href="/"
              className="hover:text-neutral-900 transition"
            >
              Trang chủ
            </Link>

            <Link
              href="/about"
              className="text-neutral-900"
            >
              Về chúng tôi
            </Link>

            <Link
              href="/panel"
              className="hover:text-neutral-900 transition"
            >
              Dashboard
            </Link>
          </div>

          <Link
            href="/panel"
            className="rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 text-sm font-semibold transition"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/70 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
          <div className="max-w-3xl">
            <p className="text-yellow-600 font-bold text-sm tracking-wider">
              ASTON CLOUD
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Về chúng tôi
            </h1>

            <p className="mt-6 text-lg md:text-xl text-neutral-500 leading-8">
              Những người đứng phía sau Aston Cloud và đang cùng nhau
              xây dựng một nền tảng Hosting & VPS đơn giản, dễ sử dụng.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="overflow-hidden rounded-[2rem] bg-neutral-900 text-white shadow-2xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* AVATAR */}
            <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400/30 via-neutral-900 to-neutral-950">
              <div className="absolute w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="relative">
                <img
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-8 ring-white/10"
                />

                <span
                  className={`absolute bottom-5 right-5 w-7 h-7 rounded-full border-4 border-neutral-900 ${getStatusColor(
                    founder.status
                  )}`}
                />
              </div>
            </div>

            {/* INFO */}
            <div className="p-8 md:p-14 flex flex-col justify-center">
              <span className="w-fit rounded-full bg-yellow-400/10 text-yellow-400 px-4 py-1.5 text-xs font-bold">
                FOUNDER
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-bold">
                {founder.name}
              </h2>

              <p className="mt-2 text-white/40">
                {founder.username}
              </p>

              <p className="mt-7 text-xl font-semibold text-white/80">
                {founder.role}
              </p>

              <p className="mt-5 max-w-xl text-white/50 leading-7">
                {founder.note}
              </p>

              <div className="mt-7">
                <Status
                  status={founder.status}
                  dark
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white border-y border-neutral-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-yellow-600 font-bold text-sm tracking-wider">
              OUR TEAM
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Thành viên
            </h2>

            <p className="mt-5 text-neutral-500 text-lg leading-8">
              Đội ngũ tham gia phát triển, quản lý và hỗ trợ Aston Cloud.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {members.map((member) => (
              <div
                key={member.username}
                className="group rounded-3xl border border-neutral-200 bg-white p-6 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                {/* MEMBER HEADER */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />

                    <span
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(
                        member.status
                      )}`}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-lg truncate">
                      {member.name}
                    </h3>

                    <p className="text-sm text-neutral-400 truncate">
                      {member.username}
                    </p>
                  </div>
                </div>

                {/* ROLE */}
                <div className="mt-6">
                  <p className="font-semibold">
                    {member.role}
                  </p>

                  <div className="mt-3">
                    <Status status={member.status} />
                  </div>
                </div>

                {/* NOTE */}
                <div className="mt-6 rounded-2xl bg-neutral-50 border border-neutral-100 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Ghi chú
                  </p>

                  <p className="mt-2 text-sm text-neutral-600 leading-6">
                    {member.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM STATUS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] bg-neutral-900 text-white p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <p className="text-white/40 text-sm">
                  TEAM
                </p>

                <p className="mt-2 text-4xl font-bold">
                  {members.length}
                </p>

                <p className="mt-2 text-white/40">
                  Thành viên
                </p>
              </div>

              <div>
                <p className="text-white/40 text-sm">
                  ONLINE
                </p>

                <p className="mt-2 text-4xl font-bold">
                  {
                    members.filter(
                      (member) => member.status === "Online"
                    ).length
                  }
                </p>

                <p className="mt-2 text-white/40">
                  Đang hoạt động
                </p>
              </div>

              <div>
                <p className="text-white/40 text-sm">
                  ASTON CLOUD
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-500" />

                  <span className="text-xl font-semibold">
                    Operational
                  </span>
                </div>

                <p className="mt-2 text-white/40">
                  Đội ngũ đang hoạt động
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-lg"
              >
                <span>🌤️</span>
                <span>Aston Cloud</span>
              </Link>

              <p className="mt-4 max-w-sm text-sm text-white/40 leading-6">
                Hosting & VPS đơn giản, linh hoạt cho các dự án của bạn.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Điều hướng
              </h3>

              <div className="mt-4 space-y-3 text-sm text-white/40">
                <Link
                  href="/"
                  className="block hover:text-white transition"
                >
                  Trang chủ
                </Link>

                <Link
                  href="/about"
                  className="block hover:text-white transition"
                >
                  Về chúng tôi
                </Link>

                <Link
                  href="/panel"
                  className="block hover:text-white transition"
                >
                  Dashboard
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Bắt đầu
              </h3>

              <p className="mt-4 text-sm text-white/40 leading-6">
                Tạo và quản lý server của bạn từ Dashboard.
              </p>

              <Link
                href="/panel"
                className="inline-flex mt-5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-neutral-900 px-5 py-2.5 text-sm font-semibold transition"
              >
                Vào Dashboard
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/30">
            © {new Date().getFullYear()} Aston Cloud. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
