"use client";

import "./globals.css";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
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