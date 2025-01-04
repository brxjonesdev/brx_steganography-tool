import React, { useState } from 'react'
import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import { Card, CardContent } from "@/components/shadcn/card"
import {TabsContent} from "@/components/shadcn/tabs"
import { decodeDataUrl, decodeMessage } from '@/lib/steganography'


export default function Decode() {
    const [decoding, setDecoding] = useState<{
        encodedImage: string | null;
        decodedMessage: string;
        isDecoding: boolean;
        status: string | null;
        isMessageDecoded: boolean;
    }>({
        encodedImage: null,
        decodedMessage: '',
        isDecoding: false,
        status: null,
        isMessageDecoded: false
    })
    const handleDecode = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const imageInput = document.getElementById('encodedImage') as HTMLInputElement
        
        if (imageInput.files && imageInput.files[0]) {
            const encodedImage = imageInput.files[0]
            if (!encodedImage.type.startsWith('image/')) {
                setDecoding({...decoding, status: 'Please upload an image file.'})
                return
            }
            const reader = new FileReader()
            reader.onload = async () => {
                const dataURL = reader.result as string
                const binaryData = decodeDataUrl(dataURL)
                console.log(binaryData);
                const decodedMessage = await decodeMessage(binaryData)
                setDecoding({
                    ...decoding,
                    decodedMessage: decodedMessage,
                    status: 'Decoding complete.'
                })
            }
            reader.readAsDataURL(encodedImage)
        }




        
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
            <p className="p-3 bg-muted rounded-lg">{decoding.decodedMessage}</p>
        </div>
        {decoding.status && (<div>
          <p>Status: {decoding.status}</p>
        </div>)}
        
      </CardContent>
    </Card>
  </TabsContent>
  )
}
