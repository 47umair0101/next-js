import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // console.log('I am inside the middleware!')
  // console.log(request.url)
  // return NextResponse.next();

  // if (request.url.includes("about")) {
  //   return NextResponse.redirect(new URL('/', request.url))
  //   return NextResponse.next();
  // }


    return NextResponse.redirect(new URL('/', request.url))

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about',
}