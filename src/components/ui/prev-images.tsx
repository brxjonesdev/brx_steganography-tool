import React from 'react'
import { Card, CardContent } from '../shadcn/card'
import Image from 'next/image'

export default function PrevImages() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(0)].map((_, index) => (
      <Card key={index}>
        <CardContent className="p-2">
          <Image
            src={`/placeholder.svg?height=150&width=150&text=Image ${index + 1}`}
            alt={`Previous Image ${index + 1}`}
            width={150}
            height={150}
            className="rounded-lg"
          />
        </CardContent>
      </Card>
    ))}
  </div>
  )
}
