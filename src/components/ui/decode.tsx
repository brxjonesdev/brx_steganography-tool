import React, { useState } from 'react'
import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import { Card, CardContent } from "@/components/shadcn/card"
import {TabsContent} from "@/components/shadcn/tabs"


export default function Decode() {
    const [decodedMessage, setDecodedMessage] = useState<string | null>(null)
    const handleDecode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Placeholder for decoding logic
        setDecodedMessage("This is a decoded secret message.")
      }
  return (
    <TabsContent value="decode">
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleDecode} className="space-y-4">
          <div>
            <Label htmlFor="encodedImage">Encoded Image</Label>
            <Input id="encodedImage" type="file" accept="image/*" />
          </div>
          <Button type="submit" className='w-full'>Decode</Button>
        </form>
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Decoded Message:</h3>
            <p className="p-3 bg-muted rounded-lg">{decodedMessage}</p>
        </div>
      </CardContent>
    </Card>
  </TabsContent>
  )
}
