import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MilkyMist Desserts",
  description: "A recipe-first MilkyMist landing page inspired by the provided design reference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
