import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng - Aston Cloud",
  description: "Điều khoản sử dụng dịch vụ Hosting & VPS của Aston Cloud.",
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
    title: "Dịch vụ",
    intro:
      "Aston Cloud cung cấp Hosting và VPS qua Aston Cloud Panel. Tài nguyên (RAM, vCPU, dung lượng, số server) theo gói bạn đăng ký: Free, Basic, Pro hoặc Business. Chúng tôi có thể thay đổi tính năng, cấu hình và gói dịch vụ theo thời gian.",
  },
  {
    title: "Tài khoản",
    items: [
      "Bạn phải cung cấp thông tin chính xác và chỉ dùng một tài khoản; tạo nhiều tài khoản để lách giới hạn gói Free là vi phạm.",
      "Bạn tự chịu trách nhiệm bảo mật mật khẩu, khóa API và mọi hoạt động trên tài khoản.",
    ],
  },
  {
    title: "Gói Free",
    intro:
      "Gói Free được cung cấp miễn phí, không cam kết thời gian hoạt động. Chúng tôi có quyền giới hạn, tạm ngưng hoặc xóa server Free không hoạt động trong thời gian dài, hoặc thay đổi/ngừng gói này.",
  },
  {
    title: "Thanh toán",
    items: [
      "Các gói trả phí thanh toán theo chu kỳ tại bảng giá công bố.",
      "Quá hạn mà chưa thanh toán, server có thể bị tạm ngưng và sau đó bị xóa cùng dữ liệu.",
      "Phí đã thanh toán không được hoàn lại, trừ trường hợp lỗi do Aston Cloud và không thể khắc phục.",
      "Khi đổi giá, chúng tôi sẽ thông báo trước và chỉ áp dụng từ chu kỳ tiếp theo.",
    ],
  },
  {
    title: "Hành vi bị cấm",
    intro: "Bạn không được dùng dịch vụ để:",
    items: [
      "Lưu trữ hoặc phát tán nội dung vi phạm pháp luật, lừa đảo, xâm phạm bản quyền hoặc quyền riêng tư.",
      "Phát tán mã độc, spam, phishing; tấn công DDoS hoặc dò quét lỗ hổng hệ thống khác.",
      "Đào tiền mã hóa, chạy proxy/VPN công cộng hoặc các tác vụ gây quá tải tài nguyên dùng chung.",
      "Bán lại dịch vụ khi chưa được đồng ý, hoặc phá hoại panel, API và hạ tầng của chúng tôi.",
    ],
    note: "Chúng tôi có quyền khóa ngay server có dấu hiệu vi phạm hoặc ảnh hưởng đến hạ tầng chung.",
  },
  {
    title: "Dữ liệu",
    items: [
      "Bạn sở hữu dữ liệu của mình và chịu trách nhiệm về tính hợp pháp của dữ liệu đó.",
      "Chúng tôi chỉ truy cập dữ liệu khi cần để vận hành, bảo mật, khắc phục sự cố hoặc theo yêu cầu hợp pháp của cơ quan có thẩm quyền.",
      "Bạn cần tự sao lưu dữ liệu quan trọng. Khi server bị xóa hoặc dịch vụ chấm dứt, dữ liệu có thể mất vĩnh viễn.",
      "Chúng tôi không bán thông tin cá nhân của bạn và chỉ dùng cho việc vận hành, bảo mật, hỗ trợ và thanh toán.",
    ],
  },
  {
    title: "Bảo mật và DDoS",
    intro:
      "Chúng tôi áp dụng biện pháp chống DDoS và tường lửa ở mức hợp lý, nhưng không bảo đảm ngăn chặn mọi cuộc tấn công. Chúng tôi có thể tạm chặn lưu lượng hoặc IP bị tấn công để bảo vệ hạ tầng. Bạn có trách nhiệm tự bảo mật ứng dụng của mình.",
  },
  {
    title: "Thời gian hoạt động",
    intro:
      "Chúng tôi cố gắng duy trì dịch vụ ổn định nhưng không cam kết thời gian hoạt động cụ thể. Bảo trì hoặc sự cố ngoài tầm kiểm soát có thể gây gián đoạn.",
  },
  {
    title: "Chấm dứt",
    intro:
      "Bạn có thể ngừng sử dụng bất kỳ lúc nào. Chúng tôi có thể tạm ngưng hoặc chấm dứt dịch vụ nếu bạn vi phạm điều khoản, không thanh toán, hoặc theo yêu cầu của cơ quan nhà nước.",
  },
  {
    title: "Giới hạn trách nhiệm",
    intro:
      "Dịch vụ được cung cấp “như hiện có”. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm về thiệt hại gián tiếp, mất dữ liệu hay mất doanh thu. Trách nhiệm bồi thường tối đa (nếu có) không vượt quá số phí bạn đã trả trong [01/03] tháng gần nhất; gói Free không được bồi thường.",
  },
  {
    title: "Thay đổi điều khoản",
    intro:
      "Chúng tôi có thể cập nhật điều khoản này. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực nghĩa là bạn đồng ý với nội dung mới.",
  },
  {
    title: "Luật áp dụng",
    intro: "Điều khoản này chịu sự điều chỉnh của pháp luật Việt Nam.",
  },
];

const link =
  "rounded text-sky-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-sky-300";

export default function TermsPage() {
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
          Điều khoản sử dụng
        </h1>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          Cập nhật lần cuối: {UPDATED}
        </p>
        <p className="mb-8">
          Aston Cloud (“chúng tôi” hoặc “của chúng tôi”) sở hữu và vận hành dịch vụ và website astcloud.ddns.net , panel.astoncloud.pp.ua 
          cùng dịch vụ Hosting &amp; VPS đi kèm. Khi tạo tài khoản hoặc sử dụng dịch vụ, bạn (“Khách hàng”) đồng ý với các điều khoản dưới đây.
        </p>

        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-4 sm:px-6 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {sections.map((s, i) => (
            <section key={s.title} aria-labelledby={`t-${i}`} className="py-5">
              <h2 id={`t-${i}`} className="mb-2 text-lg font-semibold">
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
