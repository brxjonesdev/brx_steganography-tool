import PrevImages from "@/components/ui/prev-images";
import Steganography from "@/components/ui/steganography";

export default function Home() {

  return (
    <div className="container mx-auto p-4 flex-1 min-w-full flex flex-col items-center">
    <Steganography/>
    {/* <h2 className="text-xl font-semibold mb-4">Previous Images</h2>
    <PrevImages/>  */}
    </div>
  )
}

