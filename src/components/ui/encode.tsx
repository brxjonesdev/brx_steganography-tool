/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Card, CardContent } from "@/components/shadcn/card";
import { TabsContent } from "@/components/shadcn/tabs";
import { Download } from 'lucide-react';
import { decodeDataUrl, encodeMessage } from '@/lib/steganography';


export default function Encode() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Reference for the canvas
  const [encoding, setEncoding] = useState<{
    rawImage: string | null;
    secretMessage: string;
    isEncoding: boolean;
    status: string | null;
    isImageEncoded: boolean;
    encodedImage?: string;
  }>({
    rawImage: null,
    secretMessage: '',
    isEncoding: false,
    status: null,
    isImageEncoded: false,
    encodedImage: '',
  });

  

  


  const handleRawImageEncoding =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imageInput = document.getElementById('coverImage') as HTMLInputElement;

    if (imageInput.files && imageInput.files[0]) {
      const unencodedImage = imageInput.files[0];
      if (!unencodedImage.type.startsWith('image/')) {
        setEncoding({ ...encoding, status: 'Please upload an image file.' });
        return;
      }
      const reader = new FileReader();

      reader.onload = async () => {
        if (reader.result) {
          const dataUrl = reader.result as string;
          const binaryData = decodeDataUrl(dataUrl);
          console.log(binaryData);
          const encodedImage = await encodeMessage(binaryData, encoding.secretMessage);
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            const image = new Image();
            image.src = URL.createObjectURL(new Blob([encodedImage]));
            image.onload = () => {
              if (canvasRef.current) {
                canvasRef.current.width = image.width;
                canvasRef.current.height = image.height;
                ctx?.drawImage(image, 0, 0);
                const encodedImageUrl = canvasRef.current.toDataURL();
                setEncoding({ ...encoding, isImageEncoded: true, encodedImage: encodedImageUrl });
              }
            };
          }
        setEncoding({ ...encoding, isEncoding: false, status: "Encoding Complete", });
          
        }
      }
      reader.readAsDataURL(unencodedImage);  
  } 
}

  

function downloadImage(imageUrl: string | undefined) {
  const link = document.createElement('a');
  if (!imageUrl) return;
  link.href = imageUrl;
  link.download = 'encodedimage.jpg'; 
  link.click();
}

  return (
    <TabsContent value="encode">
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleRawImageEncoding} className="space-y-4">
            <div>
              <Label htmlFor="coverImage">Image</Label>
              <Input id="coverImage" type="file" accept="image/*" className='text-sm' />
            </div>
            <div>
              <Label htmlFor="secretMessage">Secret Message</Label>
              <Input
                id="secretMessage"
                type="text"
                placeholder="Enter your secret message"
                className='text-sm'
                value={encoding.secretMessage}
                onChange={(e) => setEncoding({ ...encoding, secretMessage: e.target.value })}
              />
            </div>
            <Button type="submit" className='w-full'>Encode</Button>
          </form>
          {encoding.isImageEncoded && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Encoded Image:</h3>
              <img src={encoding.encodedImage} alt="Encoded"  className="rounded-lg w-full" />
              <Button className='mt-4 w-full' onClick={() => downloadImage(encoding.encodedImage)}><Download/> Download Image</Button>
            </div>
          )}
            {encoding.status && (<div>
          <p>Status: {encoding.status}</p>
        </div>)}
          {/* Hidden canvas for encoding logic */}
          <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
