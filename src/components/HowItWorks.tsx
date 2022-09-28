import React from 'react'
import Image from "next/future/image"

const HowItWorks = () => {
  return (
    <div id="howitworks" className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className="w-full max-w-[1240px] m-auto md:grid grid-cols-3 gap-2">
        <div className='col-span-2'>
          <p className='text-xl tracking-widest uppercase text-red'>How does it work?</p>
          <h2 className='py-4 text-lego'>Was Wir machen</h2>
          <p className='py-2 text-gray-600'>blalabbb</p>
          <br></br>
          <p className='py-2 text-gray-600'>blalabbb</p>
        </div>
        <div className='w-full h-auto m-auto justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image src="/handy.png" alt="/" width="250" height="50" />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks