import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invitation Card - Bedel",
  description: "Beautiful newspaper-style graduation invitation with vintage aesthetic",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
