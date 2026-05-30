import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Shivani Thali | Marketing Analytics & Growth Specialist",
  description: "Portfolio for Shivani Thali, a marketing analytics and growth specialist focused on digital strategy, SEO, campaign analytics, and B2B growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
