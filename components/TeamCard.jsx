import Link from "next/link";
import { useRef } from "react";

export default function TeamCard({ bgColor, logo, alt, direct }) {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // reinicia
      audioRef.current.play();
    }
  };

  return (
    <div
      className="h-12 flex items-center justify-center 
                 transition-transform duration-200 hover:scale-110 cursor-pointer"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={playSound}
    >
      <Link href={direct}>
        <img src={logo} style={{ maxWidth: "100px", maxHeight: "100px" }} alt={alt} />
      </Link>
      <audio ref={audioRef} src="/hover.mp3" preload="auto"></audio>
    </div>
  );
}