import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import GalleryGrid from "@/components/GalleryGrid";

export default function About() {
  return (
    <div>
      <main
        className="
          mx-auto 
          my-4
          w-[800px] 
          p-6 
          bg-white 
          border-[6px] 
          border-black 
          outline-[4px] 
          outline-black
          rounded-lg
          text-[18px]
        "
        style={{
          borderStyle: "ridge",
          borderColor: "#4BBCD9",
        }}
      >
        <Navbar />

        <div className="font-medium text-xl tracking-tight">
          <div className="black-text-shadow mt-8 text-2xl font-bold text-[#4BBCD9]">
            Hi, im Joey!
          </div>
          <div className="mt-4">
            Currenly a Computer Science major at Temple University with a love
            for computers, programming, and all things internet-esque
            (chronically online lol). Im also an avid Linux ricer who enjoys
            customizing and breaking, then fixing, my setup. Always have new
            things to learn and new skills to gain!
          </div>
          <div className="mt-4">
            Outside of coding, you&apos;ll probably find me watching basketball
            or anime, reading manga, trying new food spots, or gaming :)
          </div>

          <div className="black-text-shadow mt-4 text-[#4BBCD9] mb-4">
            A collection of my favorites:
          </div>

          <GalleryGrid />

          <div className="font-bold text-gray-500 mt-4">
            Connect with me below ↓
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
