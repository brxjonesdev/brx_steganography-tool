/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Card, CardContent } from "@/components/shadcn/card";
import { TabsContent } from "@/components/shadcn/tabs";
import { Download } from 'lucide-react';

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
      const reader = new FileReader();

      reader.onload = () => {
        // Decode the image data

        // Pass the image data to the Rust/Wasm module

        // The encoded image data will be returned from the Rust/Wasm module

        // Get that encoded image data and set it to the canvas and state.

        // Encoded image should be displayed on the canvas and the state.
        // Also, the download button should be enabled.
      }

      reader.readAsDataURL(unencodedImage);  
  } 
}

  

  const downloadImage = () => {
    // download the encoded image
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
              <Button className='mt-4 w-full' onClick={downloadImage}><Download/> Download Image</Button>
            </div>
          )}
          {/* Hidden canvas for encoding logic */}
          <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
