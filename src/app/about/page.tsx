import { Separator } from '@/components/shadcn/separator'
import React from 'react'

export default function About() {
  return (
    <section className='px-4 py-8 flex-1 max-w-6xl mx-auto space-y-4 flex flex-col'>
    <h3 className="text-2xl font-semibold mb-4">About Pickrypt</h3>
    <Separator />
    <div className='mt-4 text-md flex flex-col gap-4'>
        <p className="">
            Pickrypt is an innovative steganography tool that empowers you to securely hide text messages within images. 
            With Pickrypt, you can send hidden messages discreetly, ensuring that only those with the right access can reveal them.
        </p>
        <p className="">
            Whether you&apos;re sharing sensitive information or simply experimenting with the art of steganography, Pickrypt provides an easy-to-use platform for encoding and decoding messages. 
            The images can be shared freely, and anyone with the image and the app can extract the hidden message, making it perfect for secure communication.
        </p>
    </div>
    <div className='border-t border-gray-200 pt-4'>
      <p>
        This tool was made by <a href='https://portfolio.braxtonjones.dev/' className='hover:text-cyan-400 underline'>brxjonesdev</a>
      </p>
    </div>
</section>

  )
}
