import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { content } from "../data/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col items-center">
          <div className="w-full max-w-3xl px-6 py-12 md:py-20">
            {children}
            <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-secondary">
              <p>© {new Date().getFullYear()} {content.hero.name}</p>
              <p className="mt-2 text-[10px] opacity-40 uppercase tracking-widest">
                Node 23 • Next 16 • Tailwind 4
              </p>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
