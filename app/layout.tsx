import "../styles/base.css";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export const revalidate = 3600; // revalidate at most every hour

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSansJP.className}>
      <body className="mx-auto mt-12 max-w-2xl bg-white px-4 text-black dark:bg-gray-950 dark:text-white sm:mt-32 sm:p-0">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
