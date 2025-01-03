import { Separator } from '@/components/shadcn/separator'
import React from 'react'

export default function Tutorial() {
  return (
    <section className='px-4 py-8 flex-1 max-w-6xl mx-auto space-y-4'>
    <h3 className="text-2xl font-semibold mb-4">How to Use Pickrypt</h3>
    <Separator />
    <div className='mt-4 text-md flex flex-col gap-4'>
        <p>
            Using Pickrypt is simple and straightforward. Just follow these easy steps to start hiding or revealing your secret messages:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Upload an Image:</strong> Choose an image file where you want to hide your message. Supported formats include JPEG and PNG.</li>
            <li><strong>Enter Your Message:</strong> Type the text message you want to hide inside the image.</li>
            <li><strong>Encode the Message:</strong> Click on the &quot;Encode&quot; button to hide your message inside the image. The app will securely embed the text without affecting the image’s appearance.</li>
            <li><strong>Share the Image:</strong> Once encoded, you can share the image with anyone you want to send the secret message to. Only those with the right tool can extract it.</li>
            <li><strong>Decode the Message:</strong> To reveal the hidden message, simply upload the encoded image into the app, and the message will be decrypted and displayed.</li>
        </ol>
        <p>
            That’s it! It’s that easy to send and receive hidden messages securely with Pickrypt.
        </p>
    </div>
</section>

  )
}
