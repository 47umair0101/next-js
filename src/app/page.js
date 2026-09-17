'use client'

import Menu from '@/components/Menu'
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {
  const router = useRouter();
  const Goto = () => {
    router.push('/about?name=nexjs&version=16');
  }

  const Replace = () => {
    router.replace('/profile')
  }

  const Refresh = () => {
    router.refresh();
  }

  const Back = () => {
    router.back()
  }

  const Forward = () => {
    router.forward()
    // window.history.forward();
  }

  return (
    <div>
      <Menu />
      <h1>This is Home Page</h1>
      <button onClick={Goto}>Goto About</button>
      <button onClick={Replace}>Replace</button>
      <button onClick={Refresh}>Refresh</button>
      <button onClick={Back}>Back</button>
      <button onClick={Forward}>Forward</button>
    </div>
  )
}

export default page