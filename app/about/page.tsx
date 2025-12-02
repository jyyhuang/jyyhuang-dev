import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

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

        <div className="font-bold text-xl">
          <div className="flex justify-center">
            <Image
              src="/miku_pic.jpg"
              alt="miku-pic"
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
            />
          </div>

          <div>Hi, I&apos;m Joey!</div>
          <div className="mt-4">
            Currenly a Computer Science major at Temple University with 4 years
            of programming experience. I love buildings new things and tinkering
            with my computer. I&apos;m always exploring new technologies to
            learn and level up my programming skills.
          </div>
          <div className="mt-4">
            Outside of coding, I enjoy watching basketball and anime, reading
            manga, shopping for clothes, trying new foods, and playing video
            games!
          </div>

          <div className="mt-4">Connect with me below!</div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
