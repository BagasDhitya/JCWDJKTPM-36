import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--montserrat'
})

export const metadata: Metadata = {
  title: "MyCoffe - Coffe Shop",
  description: "Discover the finest artisanal coffe blends and delicious pastries in our cozy coffe shop.",
  keywords: ['coffee', 'coffee shop', 'espresso', 'cappuccino', 'latte', 'artisan coffe']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
