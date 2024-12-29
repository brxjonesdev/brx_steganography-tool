"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/shadcn/tabs"
import Encode from "./encode"
import Decode from "./decode"

export default function Steganography() {    
  return (
    <Tabs defaultValue="encode" className="mb-6 w-full">
        <TabsList>
          <TabsTrigger value="encode">Encode</TabsTrigger>
          <TabsTrigger value="decode">Decode</TabsTrigger>
        </TabsList>
        <Encode/>
        <Decode/>
      </Tabs>
  )
}
