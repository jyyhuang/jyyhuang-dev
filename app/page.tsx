import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
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

        <div className="mt-6 space-y-7">
          <div>
            <h2 className="text-xl font-black tracking-tight mb-2 text-[#4BBCD9]">
              WORK
            </h2>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="font-medium">
                  Software Engineer Intern at{" "}
                  <a
                    href="https://www.8by8.us/"
                    className="text-[#4BBCD9] hover:underline"
                  >
                    8by8
                  </a>
                </div>

                <p className="text-gray-600">Mar 2024 – Jun 2024</p>
              </div>

              <p className="italic text-gray-600">next.js, typescript</p>

              <ul>
                <li>
                  Worked with a small team to migrate React and JavaScript
                  components to Next.js and TypeScript. Streamlined account
                  creation and voter registration with secure authentication.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight mb-2 text-[#4BBCD9]">
              PROJECTS
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">ezclips</p>
                  <a
                    className="text-[#4BBCD9] font-medium hover:underline"
                    href="https://github.com/jyyhuang/ezclips"
                  >
                    github
                  </a>
                </div>
                <p className="italic text-gray-600">
                  react, node.js, express.js
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">gympal</p>
                  <a
                    className="text-[#4BBCD9] font-medium hover:underline"
                    href="https://github.com/jyyhuang/GymPal"
                  >
                    github
                  </a>
                </div>
                <p className="italic text-gray-600">
                  react native, node.js, mongodb, express.js
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">samplehub</p>
                  <a
                    className="text-[#4BBCD9] font-medium hover:underline"
                    href="#"
                  >
                    github
                  </a>
                </div>
                <p className="italic text-gray-600">
                  react, node.js, express.js, postgres, firebase
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">joybot</p>
                  <a
                    className="text-[#4BBCD9] font-medium hover:underline"
                    href="https://github.com/jyyhuang/JoyBot"
                  >
                    github
                  </a>
                </div>
                <p className="italic text-gray-600">python</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="pt-10 flex flex-row gap-4">
          <a href="https://github.com/jyyhuang">
            <Image src="/github.svg" alt="github" width={32} height={32} />
          </a>

          <a href="https://www.linkedin.com/in/joeyhuang3/">
            <Image src="/linkedin.svg" alt="linkedin" width={32} height={32} />
          </a>
        </ul>
      </main>
    </div>
  );
}
