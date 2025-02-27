import "../styles/base.css";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
      <body className="mx-auto h-full max-w-2xl px-4 pt-16 sm:pt-32">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
