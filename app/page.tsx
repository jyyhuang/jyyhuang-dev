export default function Home() {
  return (
    <div>
      <main
        className="
          text-center 
          mx-auto 
          w-[700px] 
          p-4 
          bg-white 
          border-[6px] 
          border-black 
          outline-[4px] 
          outline-black
        "
        style={{
          borderStyle: "ridge",
          borderColor: "#4cd0e7",
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-xl">joey huang</p>

          <div className="flex gap-4">
            <div className="nav-item active">
              <a href="./" className="text-blue-600 underline">
                experience
              </a>
            </div>
            <div className="nav-item">
              <a href="./about" className="text-blue-600 underline">
                about
              </a>
            </div>
            <div className="nav-item">
              <a href="./contact" className="text-blue-600 underline">
                contact
              </a>
            </div>
            <div className="nav-item">
              <a href="./resume" className="text-blue-600 underline">
                resume
              </a>
            </div>
          </div>
        </div>

        <div id="experience" className="content-section"></div>
      </main>
    </div>
  );
}
