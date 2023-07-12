import "../styles/base.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-2xl mx-auto mt-32 bg-white text-black dark:text-white dark:bg-gray-950">
        {children}
      </body>
    </html>
  );
}
