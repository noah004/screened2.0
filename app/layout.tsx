import "./globals.css";
import { Inter } from "next/font/google";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Screened",
  description:
    "A Canadian screening and preventative health website for patients and medical proffesionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
