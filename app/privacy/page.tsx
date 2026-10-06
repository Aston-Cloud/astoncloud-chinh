import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Chính sách quyền riêng tư - Aston Cloud",
  description: "Cách Aston Cloud thu thập, sử dụng và bảo vệ thông tin của bạn.",
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
    title: "Thông tin chúng tôi thu thập",
    items: [
      "Thông tin tài khoản: tên tài khoản, email và mật khẩu.",
      "Thông tin sử dụng: server bạn tạo, mức dùng CPU/RAM/dung lượng, địa chỉ IP, thời gian và nhật ký truy cập panel/API.",
      "Thông tin thanh toán: lịch sử giao dịch và mã giao dịch của các gói trả phí. Chúng tôi không lưu số thẻ hay mật khẩu ngân hàng của bạn.",
      "Thông tin bạn gửi khi liên hệ hỗ trợ.",
    ],
  },
  {
    title: "Mục đích sử dụng",
    items: [
      "Tạo và quản lý tài khoản, cung cấp và vận hành dịch vụ.",
      "Xử lý thanh toán và gia hạn.",
      "Bảo mật hệ thống, phát hiện gian lận, spam, tấn công và hành vi vi phạm.",
      "Hỗ trợ khách hàng và gửi thông báo quan trọng (bảo trì, thay đổi điều khoản, hết hạn).",
      "Cải thiện chất lượng dịch vụ.",
    ],
    note: "Chúng tôi không bán thông tin cá nhân của bạn.",
  },
  {
    title: "Dữ liệu trên server của bạn",
    intro:
      "Nội dung bạn lưu trên server (tệp, cơ sở dữ liệu, mã nguồn) thuộc về bạn. Chúng tôi chỉ truy cập khi cần để vận hành, bảo mật, khắc phục sự cố hoặc theo yêu cầu hợp pháp của cơ quan có thẩm quyền. Nếu dữ liệu đó chứa thông tin cá nhân của người khác, bạn chịu trách nhiệm bảo đảm có căn cứ hợp pháp để xử lý.",
  },
  {
    title: "Chia sẻ thông tin",
    intro: "Chúng tôi chỉ chia sẻ thông tin khi cần thiết, trong các trường hợp:",
    items: [
      "Với đơn vị thanh toán và nhà cung cấp hạ tầng giúp chúng tôi vận hành dịch vụ.",
      "Khi cơ quan nhà nước có thẩm quyền yêu cầu theo quy định pháp luật.",
      "Để bảo vệ quyền lợi, an toàn của Aston Cloud, khách hàng và hệ thống.",
    ],
  },
  {
    title: "Máy chủ ở nước ngoài",
    intro:
      "Một số máy chủ và nhà cung cấp hạ tầng đặt ngoài Việt Nam. Khi bạn chọn vị trí máy chủ ở nước ngoài, dữ liệu của bạn sẽ được lưu và xử lý tại đó.",
  },
  {
    title: "Cookie",
    intro:
      "Xem thêm thông tin này tại Chính Sách Cookie!",
  },
  {
    title: "Lưu trữ và xóa",
    intro:
      "Chúng tôi giữ thông tin trong thời gian bạn dùng dịch vụ và thêm một thời gian hợp lý sau đó để đáp ứng yêu cầu pháp lý, kế toán và giải quyết tranh chấp. Khi xóa tài khoản, dữ liệu trên server sẽ bị xóa theo Điều khoản sử dụng và có thể không khôi phục được.",
  },
  {
    title: "Bảo mật",
    intro:
      "Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý hợp lý để bảo vệ thông tin. Tuy nhiên, không hệ thống nào an toàn tuyệt đối. Bạn nên dùng mật khẩu mạnh, không chia sẻ mật khẩu hoặc khóa API, và báo ngay cho chúng tôi nếu nghi ngờ tài khoản bị truy cập trái phép.",
  },
  {
    title: "Quyền của bạn",
    intro:
      "Theo pháp luật Việt Nam về bảo vệ dữ liệu cá nhân, bạn có quyền yêu cầu xem, chỉnh sửa, xóa thông tin cá nhân, rút lại sự đồng ý hoặc phản đối việc xử lý dữ liệu. Hãy gửi yêu cầu qua kênh hỗ trợ trên website; chúng tôi sẽ phản hồi trong thời gian hợp lý và có thể cần xác minh danh tính bạn trước.",
  },
  {
    title: "Người dùng chưa đủ 18 tuổi",
    intro:
      "Dịch vụ không dành cho người dưới 18 tuổi nếu không có sự đồng ý của người đại diện hợp pháp. Nếu phát hiện đã thu thập thông tin của trẻ em mà chưa có sự đồng ý phù hợp, chúng tôi sẽ xóa thông tin đó.",
  },
  {
    title: "Thay đổi chính sách",
    intro:
      "Chúng tôi có thể cập nhật chính sách này. Thay đổi quan trọng sẽ được thông báo trên website hoặc qua email. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực nghĩa là bạn đồng ý với nội dung mới.",
  },
];

const link =
  "rounded text-amber-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 dark:text-amber-300";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-amber-50 leading-relaxed text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <Navbar variant="policy" />

      <main className="mx-auto max-w-2xl px-5 pb-16 pt-28">
        <h1 className="mb-2 text-3xl font-bold leading-tight sm:text-4xl">
          Chính sách quyền riêng tư
        </h1>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          Cập nhật lần cuối: {UPDATED}
        </p>
        <p className="mb-8">
         Aston Cloud (“chúng tôi” hoặc “của chúng tôi”) sở hữu và vận hành dịch vụ và website astcloud.ddns.net , panel.astoncloud.pp.ua 
         cùng dịch vụ Hosting &amp; VPS đi kèm. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn. Xem thêm{" "}
          <Link href="/terms" className={link}>
            Điều khoản sử dụng
          </Link>
          .
        </p>

        <div className="divide-y divide-amber-100 rounded-xl border border-amber-200 bg-white px-4 shadow-sm sm:px-6 dark:divide-amber-950 dark:border-amber-900 dark:bg-slate-900">
          {sections.map((s, i) => (
            <section key={s.title} aria-labelledby={`p-${i}`} className="py-5">
              <h2 id={`p-${i}`} className="mb-2 text-lg font-semibold">
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