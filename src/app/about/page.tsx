import { Separator } from '@/components/shadcn/separator'
import React from 'react'

export default function About() {
  return (
    <section className='px-4 py-8 flex-1 '>
        <h3 className="text-2xl font-semibold mb-4">About Pickrypt</h3>
        <Separator/>
        <div className='mt-4 text-md flex flex-col gap-4'>
            <p className="">
                Pickrypt is a steganography tool that allows you to hide text messages inside images. 
                The images can be shared with anyone, and the message can be extracted by anyone who has the image.
            </p>
            <p className="">
            </p>
        </div>
       
    </section>
  )
}
