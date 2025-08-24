// components/RaceCard.js
import Image from "next/image";
import { useState } from "react";

const raceData = {
  Monaco: {
    country: "Monaco",
    circuit: "Circuit de Monaco",
    background: "/race-backgrounds/monaco.png",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/2560px-Flag_of_Monaco.svg.png",
    trackOutline: "/tracks/monaco-outline.png",
    date: "30 AUG",
    day: "SUN",
    competitions: {
      F1: ["Qualifying", "Sprint", "Race"],
      F2: ["Qualifying", "Race"],
      F3: ["Qualifying", "Race"],
    },
  },
};

export default function RaceCard({ race }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[900px]">
      {/* Race Card */}
      <div
        className="relative flex items-center bg-black overflow-hidden rounded-2xl shadow-lg h-[120px] p-2 cursor-pointer hover:bg-neutral-900 transition"
        onClick={() => setOpen(!open)}
      >
        {/* Inner container with background */}
        <div className="relative flex items-center w-full h-full rounded-xl overflow-hidden">
          {/* Background image */}
          <Image
            src={raceData[race].background}
            alt={`${race} Background`}
            fill
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          {/* Foreground content */}
          <div className="relative flex items-center w-full h-full z-10">
            {/* Left side - Flag and Text */}
            <div className="flex items-center gap-4 p-4">
              <img
                src={raceData[race].flag}
                alt={`${race} Flag`}
                width={60}
                height={40}
                className="rounded"
              />
              <div className="flex flex-col text-white leading-tight">
                <span className="font-extrabold text-xl">{raceData[race].circuit}</span>
                <span className="text-sm opacity-80">{raceData[race].country}</span>
              </div>
            </div>

            {/* Middle - Track outline */}
            <div className="relative flex-1 h-full mr-5">
              <Image
                src={raceData[race].trackOutline}
                alt="Track Outline"
                width={100}
                height={100}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>

            {/* Right side - Date */}
            <div className="flex flex-col justify-center items-center mr-2 px-5 py-4 bg-gray-800 text-white text-center rounded-lg">
              <span className="text-lg font-extrabold">{raceData[race].date}</span>
              <span className="text-2xl font-extrabold text-red-600">{raceData[race].day}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Content (collapsible below the card) */}
      {open && (
        <div className="grid grid-cols-4 gap-4 bg-neutral-950 text-white p-6 mt-2 rounded-xl shadow-lg">
          {/* Competition 1 */}
          <div>
            <h3 className="text-lg font-semibold border-b border-red-600 mb-2 pb-1">F1</h3>
            <ul className="space-y-1 text-sm opacity-90">
              <li>Qualifying</li>
              <li>Sprint</li>
              <li>Race</li>
            </ul>
          </div>

          {/* Competition 2 */}
          <div>
            <h3 className="text-lg font-semibold border-b border-red-600 mb-2 pb-1">F2</h3>
            <ul className="space-y-1 text-sm opacity-90">
              <li>Qualifying</li>
              <li>Race</li>
            </ul>
          </div>

          {/* Competition 3 */}
          <div>
            <h3 className="text-lg font-semibold border-b border-red-600 mb-2 pb-1">F3</h3>
            <ul className="space-y-1 text-sm opacity-90">
              <li>Qualifying</li>
              <li>Race</li>
            </ul>
          </div>

          {/* Final Column - Date & Info */}
          <div className="flex flex-col items-end justify-center">
            <span className="text-xl font-bold">Final</span>
            <span className="text-red-500 text-lg">Sun 30 AUG</span>
          </div>
        </div>
      )}
    </div>
  );
}
