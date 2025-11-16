import Navbar from "@/components/navbar";

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
        In Progress
      </main>
    </div>
  );
}
