import React from 'react'
import Image from 'next/image'
import pic from '../../../public/images/demo.jpg'
import Menu from '@/components/Menu'

export default function page() {
  return (
    <div>
      <Menu />
      <h1 className='global-text my-text'>This is Profile Page</h1>

      <h1 className='my-local-text'>This is Profile Page</h1>

      {/* <img style={{width: 400}} src='images/demo.jpg' /> */}
      <Image src={pic} alt='demo image' width={400} />
      <Image src="https://www.nokia.com/sites/default/files/2025-11/dcn_rack_with_lights_still_ret3-1.jpg" 
      alt='this is desc of image' width={400} height={400}
      layout='responsive'
     />
    </div>
  )
}
