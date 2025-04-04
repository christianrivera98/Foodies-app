"use client";
import { useState } from "react";

export default function HoverToolTip({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  const [itsVisible, setItsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <>
      <a
        className="text-persimmon hover:text-barn-red hover:duration-300"
        href={`mailto:${email}`}
        onMouseEnter={() => setItsVisible(true)}
        onMouseLeave={() => setItsVisible(false)}
        onMouseMove={(e) => setCoords({ x: e.clientX + 10, y: e.clientY + 10 })}
      >
        {name}
      </a>

      {itsVisible && (
        <div
          className="absolute w-auto p-2 rounded-full text-[14px] font-medium bg-papaya-whip text-black"
          style={{ top: coords.y, left: coords.x }}
        >
          <p>Would you like to send an email?</p>
        </div>
      )}
    </>
  );
}
