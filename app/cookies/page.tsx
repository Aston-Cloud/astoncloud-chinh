import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chính sách cookie - Aston Cloud",
  description: "Cách Aston Cloud sử dụng cookie trên website và panel.",
};

const UPDATED = "[29/9/2026]";

type Section = {
  title: string;
  intro?: string;
  items?: string[];
  note?: string;
};

const sections: Section[] = [
  {
    title: "Cookie là gì",
    intro:
      "Cookie là tệp nhỏ được lưu trên trình duyệt của bạn khi truy cập website. Chúng giúp website ghi nhớ trạng thái đăng nhập và một số thiết lập của bạn.",
  },
  {
    title: "Chúng tôi dùng cookie để làm gì",
    items: [
      "Giữ phiên đăng nhập vào Aston Cloud Panel.",
      "Bảo mật tài khoản và ngăn chặn truy cập trái phép hoặc lạm dụng.",
      "Ghi nhớ một số thiết lập cơ bản để panel hoạt động ổn định.",
    ],
    note: "Chúng tôi không dùng cookie quảng cáo và không bán dữ liệu cookie cho bên thứ ba.",
  },
  {
    title: "Cookie của bên thứ ba",
    intro:
      "Nếu bạn dùng cổng thanh toán hoặc các dịch vụ bên ngoài khi sử dụng Aston Cloud, các dịch vụ đó có thể đặt cookie riêng theo chính sách của họ. Chúng tôi không kiểm soát các cookie này.",
  },
  {
    title: "Quản lý cookie",
    intro:
      "Bạn có thể xóa hoặc chặn cookie trong phần cài đặt của trình duyệt. Nếu chặn cookie cần thiết, bạn có thể không đăng nhập hoặc không dùng được một số tính năng của panel.",
  },
  {
    title: "Thay đổi chính sách",
    intro:
      "Chúng tôi có thể cập nhật chính sách này khi thay đổi cách dùng cookie. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực nghĩa là bạn đồng ý với nội dung mới.",
  },
];

const link =
  "rounded text-sky-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-sky-300";

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-slate-50 leading-relaxed text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <nav
        aria-label="Điều hướng"
        className="mx-auto flex max-w-2xl items-center justify-between px-5 pt-6"
      >
        <Link
          href="/"
          className="rounded font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          🌤️ Aston Cloud
        </Link>
        <Link href="/" className={`text-sm ${link}`}>
          ← Về trang chủ
        </Link>
      </nav>

      <main className="mx-auto max-w-2xl px-5 pb-16 pt-10">
        <h1 className="mb-2 text-3xl font-bold leading-tight sm:text-4xl">
          Chính sách cookie
        </h1>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          Cập nhật lần cuối: {UPDATED}
        </p>
        <p className="mb-8">
          Chính sách này giải thích cách astcloud.ddns.net sử dụng cookie. Xem thêm{" "}
          <Link href="/privacy" className={link}>
            Chính sách quyền riêng tư
          </Link>
          .
        </p>

        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-4 sm:px-6 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {sections.map((s, i) => (
            <section key={s.title} aria-labelledby={`c-${i}`} className="py-5">
              <h2 id={`c-${i}`} className="mb-2 text-lg font-semibold">
                {i + 1}. {s.title}
              </h2>
              {s.intro && <p className="mb-2">{s.intro}</p>}
              {s.items && (
                <ul className="mb-2 list-disc space-y-1.5 pl-5">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {s.note && <p className="font-semibold">{s.note}</p>}
            </section>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          © 2026 Aston Cloud. All rights reserved.
        </p>
      </main>
    </div>
  );
}