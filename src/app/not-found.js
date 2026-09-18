'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export default async function NotFound() {
  const pathname = usePathname()
  return (
    <div>
      <h1 className='font-bold text-xl'>Not Found</h1>
      <p>The page {pathname} you are requesting was not found!</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}