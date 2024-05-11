import './globals.css'

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ToDo List",
  description: "A Tool to list all tasks you plan to do in the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
