import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";


import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web_Meet by Anirud",
  description: "Video Conferencing Website",
  icons: '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        variables: {
          colorText: '#fff',
          colorBackground: '#1c1f2e',
          colorPrimary: "#0E78F9",
          colorInputText: '#fff',
          colorInputBackground: '#252a41'
        }
      }}>
      <body className={`${inter.className} bg-dark-2`}>{children}
      <Toaster />
      </body>
      </ClerkProvider>
    </html>
  );
}
