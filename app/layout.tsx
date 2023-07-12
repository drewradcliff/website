import "../styles/base.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSansJP.className}>
      <body className="mx-auto mt-32 max-w-2xl bg-white text-black dark:bg-gray-950 dark:text-white">
        {children}
      </body>
    </html>
  );
}
