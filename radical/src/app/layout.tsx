import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futuraPTMedium = localFont({
  src: "./fonts/FuturaPTMedium.otf",
});

export const metadata: Metadata = {
  title: "Radical",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${futuraPTMedium.className} bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
