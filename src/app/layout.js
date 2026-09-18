"use client";

import "./globals.css";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import {Roboto} from 'next/font/google';
// Importing font locally in project
import Sunshine_Topical from 'next/font/local'
import Script from "next/script";

const roboto_font = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '900'],
  variable: '--font-roboto'
})

const shunshine_font = Sunshine_Topical({
  src: './fonts/Sunshine_Tropical.ttf',
  variable: '--font-sunshine'
})

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className={`${roboto_font.variable} ${shunshine_font.variable}`}>
    <html lang="en" className={[roboto_font.variable, shunshine_font.variable].join(" ")}>
      <body>
        {children}
        <Script src={"https://cdn.jsdelivr.net/npm/axios@1.20.0/dist/axios.min.js"}/>
        <ProgressBar
          height="4px"
          color="#107594"
          options={{ showSpinner: true }}
          shallowRouting
        />
      </body>
    </html>
  );
}