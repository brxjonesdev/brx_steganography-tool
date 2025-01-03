import Steganography from "@/components/ui/steganography";

export default function Home() {

  return (
    <div className="container mx-auto p-4 flex-1 min-w-full flex flex-col items-center space-y-4">
    <div className=" max-w-3xl space-y-3 ">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Pickrypt</h2>
        <p className="">
            Pickrypt allows you to securely hide your text messages inside images using steganography techniques. 
            Whether you&lsquo;re sending private information or just exploring the world of secure communication, our simple tool helps you keep your messages safe and hidden in plain sight.
        </p>
        <p className="">
            Upload an image, encode your secret message, and share it with anyone you want — no one will know what’s hidden unless they have the right tool to decode it.
        </p>
        <p>
          This project is a demo of using Web Assembly with Rust in a React application. 
          Learn about combining these technologies to create fast and efficient web applications here in this blog post.
          <a href="" className="text-cyan-400 hover:underline ml-1">Read more</a>
        </p>
    </div>
    <Steganography />
</div>

  )
}

