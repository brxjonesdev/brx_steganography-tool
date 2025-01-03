"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/shadcn/tabs"
import Encode from "./encode"
import Decode from "./decode"

export default function Steganography() {    
  return (
    <Tabs defaultValue="encode" className="mb-6 w-full max-w-3xl">
        <TabsList className="w-full">
          <TabsTrigger value="encode" className="w-full">Encode</TabsTrigger>
          <TabsTrigger value="decode" className="w-full">Decode</TabsTrigger>
        </TabsList>
        <Encode/>
        <Decode/>
      </Tabs>
  )
}
