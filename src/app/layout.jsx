import "./globals.css";
import { Mukta } from "next/font/google";

const mukta_init = Mukta({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mukta",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mukta_init.variable} grid place-items-center h-screen bg-[#7d993a]`}
      >
        {children}
      </body>
    </html>
  );
}
