import Footer from "@/components/footer";
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
            <h2 className="black-text-shadow text-xl font-bold tracking-tight mb-2 text-[#4BBCD9]">
              WORK
            </h2>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="font-bold">
                  Software Engineer Intern at{" "}
                  <a
                    href="https://www.8by8.us/"
                    className="text-[#4BBCD9] hover:underline"
                  >
                    8by8
                  </a>
                </div>

                <p className="font-medium text-gray-500">Mar 2024 – Jun 2024</p>
              </div>
              <ul className="font-medium">
                <li>
                  Contributed to the migration of core features to Next.js +
                  TypeScript, enhancing SEO and developer workflow. Also
                  improved user authentication REST APIs and strengthened
                  reliability with automated Jest test coverage in CI/CD.
                </li>
              </ul>

              <p className="font-medium italic text-gray-500">
                Next.js, Typescript
              </p>
            </div>
          </div>

          <div>
            <h2 className="black-text-shadow text-xl font-bold tracking-tight mb-2 text-[#4BBCD9]">
              PROJECTS
            </h2>

            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold">samplehub</p>

                <div>
                  <a
                    className="text-[#4BBCD9] font-bold hover:underline mr-3"
                    href="https://samplehub.jyyhuang.com/"
                  >
                    live
                  </a>
                  <a
                    className="text-[#4BBCD9] font-bold hover:underline"
                    href="https://github.com/cis3296f25/samplehub"
                  >
                    github
                  </a>
                </div>
              </div>

              <p className="font-medium italic text-gray-500">
                react, node.js, express.js, postgres, google cloud platform
              </p>
            </div>

            <div>
              <div className="mt-3 flex justify-between items-center">
                <p className="font-bold">sensofocus</p>
                <a
                  className="text-[#4BBCD9] font-bold hover:underline"
                  href="https://github.com/jyyhuang/sensofocus"
                >
                  github
                </a>
              </div>
              <p className="font-medium italic text-gray-500">java, kotlin</p>
            </div>

            <div>
              <div className="mt-3 flex justify-between items-center">
                <p className="font-bold">ezclips</p>
                <a
                  className="text-[#4BBCD9] font-bold hover:underline"
                  href="https://github.com/jyyhuang/ezclips"
                >
                  github
                </a>
              </div>
              <p className="font-medium italic text-gray-500">
                react, node.js, express.js
              </p>
            </div>

            <div>
              <div className="mt-3 flex justify-between items-center">
                <p className="font-bold">gympal</p>
                <a
                  className="text-[#4BBCD9] font-bold hover:underline"
                  href="https://github.com/jyyhuang/GymPal"
                >
                  github
                </a>
              </div>
              <p className="font-medium italic text-gray-500">
                react native, node.js, mongodb, express.js
              </p>
            </div>

            <div>
              <div className="mt-3 flex justify-between items-center">
                <p className="font-bold">joybot</p>
                <a
                  className="text-[#4BBCD9] font-bold hover:underline"
                  href="https://github.com/jyyhuang/JoyBot"
                >
                  github
                </a>
              </div>
              <p className="font-medium italic text-gray-500">python</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
