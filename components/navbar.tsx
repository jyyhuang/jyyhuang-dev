"use client";

import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  const isActive = (href: string): boolean => pathname === href;

  return (
    <div className="flex justify-between items-center mb-4">
      <p className="font-bold text-xl">Joey Huang</p>

      <div className="flex gap-2">
        <div className={`nav-item ${isActive("/") ? "active" : ""}`}>
          <Link href="/">experience</Link>
        </div>

        <div className={`nav-item ${isActive("/about") ? "active" : ""}`}>
          <Link href="/about">about</Link>
        </div>

        <div className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
          <Link href="/contact">contact</Link>
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
