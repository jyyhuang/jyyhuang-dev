import Image from "next/image";
export default function Footer() {
  return (
    <ul className="pt-10 flex flex-row gap-4">
      <a href="https://github.com/jyyhuang">
        <Image src="/github.svg" alt="github" width={32} height={32} />
      </a>

      <a href="https://www.linkedin.com/in/joeyhuang3/">
        <Image src="/linkedin.svg" alt="linkedin" width={32} height={32} />
      </a>
    </ul>
  );
}
