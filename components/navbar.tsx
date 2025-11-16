import "./navbar.css";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-4">
      <p className="font-bold text-xl">Joey Huang</p>

      <div className="flex gap-2">
        <div className="nav-item active">
          <a href="/">experience</a>
        </div>

        <div className="nav-item">
          <a href="/about">about</a>
        </div>

        <div className="nav-item">
          <a href="/contact">contact</a>
        </div>

        <div className="nav-item">
          <a
            href="/Joey_Huang_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
}
