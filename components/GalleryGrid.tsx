import GalleryItem from "./GalleryItem";
import miku_img from "../public/miku_icon.jpg";
import zoro_img from "../public/zoro.jpg";
import bleach_img from "../public/bleach.jpg";
import jojo_img from "../public/jojo.jpg";
import persona_img from "../public/persona.jpg";
import league_img from "../public/league.jpg";

export default function GalleryGrid() {
  const items = [
    { src: zoro_img, alt: "one piece", title: "one piece" },
    { src: miku_img, alt: "miku image", title: "miku" },
    { src: jojo_img, alt: "jojo image", title: "jojo's" },
    { src: bleach_img, alt: "bleach image", title: "bleach" },
    { src: persona_img, alt: "persona image", title: "persona" },
    { src: league_img, alt: "league image", title: "league of legends" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
      {items.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </div>
  );
}
