import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <section className='w-full'>
        <header className="flex items-center justify-between w-full h-12 border-b border-border max-w-7xl mx-auto">
            <nav className="flex items-center justify-between w-full h-full px-4">
                <div className="flex items-center h-full font-mono">
                    <Link href="/" className="font-bold text-primary hover:text-fuchsia-500 transition-colors ease-in duration-300">Pickrypt</Link>
                </div>
                <div className="flex items-center h-full gap-4 text-sm">
                    <Link href="/faq" className=" text-primary hover:underline">FAQ</Link>
                    <Link href="/tutorial" className="text-primary hover:underline">How-To</Link>
                    <Link href="/about" className="text-primary hover:underline">About</Link>
                </div>
            </nav>
        </header>
    </section>
  )
}
