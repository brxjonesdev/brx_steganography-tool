import { Separator } from '@/components/shadcn/separator'
import React from 'react'

export default function FAQ() {
  return (
    <section className='px-4 py-8 flex-1 max-w-6xl mx-auto space-y-4'>
    <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
    <Separator />

    <div className="space-y-6">
        <div className="faq-item">
            <h4 className="text-xl font-medium">What is steganography?</h4>
            <p className="text-base text-gray-600">Steganography is the practice of concealing messages or information within other non-suspicious data, such as images or audio files. It’s often used for secure communication.</p>
        </div>

        <div className="faq-item">
            <h4 className="text-xl font-medium">How does this app work?</h4>
            <p className="text-base text-gray-600">Our app allows you to embed hidden messages within images or other files, providing a layer of security by making the hidden data invisible to the untrained eye.</p>
        </div>

        <div className="faq-item">
            <h4 className="text-xl font-medium">Is it safe to use?</h4>
            <p className="text-base text-gray-600">Yes! The app uses strong encryption techniques to ensure that your hidden data is protected. However, we recommend using it responsibly and ensuring your secret messages are not exposed to unauthorized individuals.
              Images are also not stored on our servers, so your data remains private and secure.
            </p>
        </div>

        <div className="faq-item">
            <h4 className="text-xl font-medium">Can I retrieve the hidden message later?</h4>
            <p className="text-base text-gray-600">Yes! As long as you have the correct file and decoding key (if necessary), you can retrieve the hidden message anytime.</p>
        </div>

        <div className="faq-item">
            <h4 className="text-xl font-medium">What file types can I use?</h4>
            <p className="text-base text-gray-600">Currently, our app supports embedding hidden messages within images, with more formats coming soon!</p>
        </div>
    </div>
</section>

  )
}
