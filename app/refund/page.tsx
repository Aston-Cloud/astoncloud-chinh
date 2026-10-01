import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Chính sách hoàn tiền - Aston Cloud",
  description: "Điều kiện và quy trình hoàn tiền các gói trả phí của Aston Cloud.",
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
    title: "Phạm vi áp dụng",
    intro:
      "Chính sách này áp dụng cho các gói trả phí (Basic, Pro, Business). Gói Free là miễn phí nên không có hoàn tiền.",
  },
  {
    title: "Nguyên tắc chung",
    intro:
      "Phí đã thanh toán không được hoàn lại, trừ các trường hợp được nêu ở mục 3. Việc không sử dụng hoặc sử dụng ít hơn mức tài nguyên của gói không phải lý do để hoàn tiền.",
  },
  {
    title: "Trường hợp được hoàn tiền",
    items: [
      "Dịch vụ gián đoạn kéo dài do lỗi của Aston Cloud và chúng tôi không khắc phục được trong thời gian hợp lý.",
      "Bạn bị tính phí sai hoặc tính phí trùng.",
      "Bạn đã thanh toán nhưng dịch vụ không được kích hoạt và chúng tôi không thể kích hoạt lại.",
    ],
    note: "Số tiền hoàn có thể tính theo tỷ lệ thời gian dịch vụ không sử dụng được.",
  },
  {
    title: "Trường hợp không được hoàn tiền",
    items: [
      "Tài khoản hoặc server bị khóa, tạm ngưng hoặc xóa do vi phạm Điều khoản sử dụng.",
      "Sự cố do ứng dụng, cấu hình hoặc mã nguồn của bạn.",
      "Gián đoạn do bảo trì đã thông báo, sự kiện bất khả kháng hoặc sự cố ngoài tầm kiểm soát của chúng tôi.",
      "Bạn đổi ý, thay đổi nhu cầu hoặc quên gia hạn/hủy gói.",
      "Bạn xóa server hoặc dữ liệu hoặc mất dữ liệu do không sao lưu.",
    ],
  },
  {
    title: "Cách yêu cầu hoàn tiền",
    items: [
      "Gửi yêu cầu qua kênh hỗ trợ trên website trong vòng [7] ngày kể từ ngày phát sinh vấn đề.",
      "Cung cấp tên tài khoản, mã giao dịch và mô tả vấn đề (kèm hình ảnh nếu có).",
      "Chúng tôi sẽ xem xét và phản hồi trong vòng [3] ngày làm việc.",
    ],
  },
  {
    title: "Thời gian và hình thức hoàn tiền",
    intro:
      "Yêu cầu được chấp nhận sẽ được hoàn trong vòng [7] ngày làm việc, qua chính phương thức bạn đã thanh toán hoặc một hình thức khác do hai bên thống nhất. Chúng tôi cũng có thể đề xuất quy đổi thành thời gian sử dụng bổ sung nếu bạn đồng ý.",
  },
  {
    title: "Thay đổi chính sách",
    intro:
      "Chúng tôi có thể cập nhật chính sách này. Thay đổi không ảnh hưởng đến các giao dịch đã thanh toán trước thời điểm có hiệu lực.",
  },
];

const link =
  "rounded text-pink-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 dark:text-pink-300";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-pink-50 leading-relaxed text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <Navbar variant="policy" />

      <main className="mx-auto max-w-2xl px-5 pb-16 pt-28">
        <h1 className="mb-2 text-3xl font-bold leading-tight sm:text-4xl">
          Chính sách hoàn tiền
        </h1>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          Cập nhật lần cuối: {UPDATED}
        </p>
        <p className="mb-8">
          Chính sách này quy định khi nào và bằng cách nào bạn được hoàn tiền khi dùng dịch vụ
          tại astcloud.ddns.net. Xem thêm{" "}
          <Link href="/terms" className={link}>
            Điều khoản sử dụng
          </Link>
          .
        </p>

        <div className="divide-y divide-pink-100 rounded-xl border border-pink-200 bg-white px-4 shadow-sm sm:px-6 dark:divide-pink-950 dark:border-pink-900 dark:bg-slate-900">
          {sections.map((s, i) => (
            <section key={s.title} aria-labelledby={`r-${i}`} className="py-5">
              <h2 id={`r-${i}`} className="mb-2 text-lg font-semibold">
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