/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Card, CardContent } from "@/components/shadcn/card";
import { TabsContent } from "@/components/shadcn/tabs";
import { Download } from 'lucide-react';

export default function Encode() {
  const [encodedImage, setEncodedImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Reference for the canvas
  const [secretMessage, setSecretMessage] = useState<string>('');

  const handleEncode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fileInput = document.getElementById('coverImage') as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const canvas = canvasRef.current;
          if (!canvas) return;

          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          // Resize canvas to match image dimensions
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw image onto the canvas
          ctx.drawImage(img, 0, 0);

          // Overlay the secret message (for demonstration purposes)
          ctx.font = '20px Arial';
          ctx.fillStyle = 'red';
          ctx.fillText(secretMessage, 10, img.height - 30);

          // Get the final encoded image as a Data URL
          const encodedURL = canvas.toDataURL('image/png');
          setEncodedImage(encodedURL);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const downloadImage = () => {}

  return (
    <TabsContent value="encode">
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleEncode} className="space-y-4">
            <div>
              <Label htmlFor="coverImage">Image</Label>
              <Input id="coverImage" type="file" accept="image/*" />
            </div>
            <div>
              <Label htmlFor="secretMessage">Secret Message</Label>
              <Input
                id="secretMessage"
                type="text"
                placeholder="Enter your secret message"
                value={secretMessage}
                onChange={(e) => setSecretMessage(e.target.value)}
              />
            </div>
            <Button type="submit" className='w-full'>Encode</Button>
          </form>
          {encodedImage && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Encoded Image:</h3>
              <img src={encodedImage} alt="Encoded"  className="rounded-lg w-full" />
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
