import Image from "next/image";
import { StaticImageData } from "next/image";

interface GalleryItemProps {
  src: StaticImageData;
  alt: string;
  title: string;
}

export default function GalleryItem({ src, alt, title }: GalleryItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="object-coverr w-full h-full"
        />
      </div>
      <p className="mt-3 text-base text-gray-500 max-w-[200px] font-bold">
        {title}
      </p>
    </div>
  );
}
