/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "Permission-Policy",
            value: "camera=();battery=(self);browsing-topics=();geolocation=();microphone=('https://domain.com')"
          }
        ]
      }
    ]
  }
}

export default nextConfig;





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
