/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx'],
  httpAgentOptions: {
    keepAlive: true,
  },
  compress: false,
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'www.nokia.com',
    },
  ],
}

}

export default nextConfig;












// httpAgentOptions: {}





// distDir: 'build' 





// headers: [
//   {
//     key: "X-Content-Type-Options",
//     value: "nosniff"
//   }
// ]






// headers: [
//   {
//     key: "Stict-transport-security",
//     value: "max-age=63072000;includeSubDomains;preload"
//   }
// ]






// headers: [
//   {
//     key: "Permission-Policy",
//     value: "camera=();battery=(self);browsing-topics=();geolocation=();microphone=('https://domain.com')"
//   }
// ]






//   headers: [
//     {
//       key: "Content-Security-Policy",
//       value: "default-src 'self'; script-src 'self'; style-src 'www.google.com'"
//     }
//   ]
// }
















// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,

//   async headers() {
//     return [
//       {
//         source: "/about",
//         headers: [
//           {key: "app-auth-key",
//           value: "1234qwert"}
//         ]
//       }
//     ]
// }
// }

// export default nextConfig;












// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,

//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: [
//           {
//             key: "X-Frame-Options", <other value: SAMEORIGIN>
//             value: "DENY"
//           }
//         ]
//       }
//     ]
//   }
// }

// export default nextConfig;
