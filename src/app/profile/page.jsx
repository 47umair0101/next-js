import React from 'react'
import Image from 'next/image'
import pic from '../../../public/images/demo.jpg'
import Menu from '@/components/Menu'

export default function page() {
  return (
    <div>
      <Menu />
      <h1 className='global-text'>This is Profile Page</h1>
      {/* <img style={{width: 400}} src='images/demo.jpg' /> */}
      <Image src={pic} alt='demo image' width={400} />
    </div>
  )
}
