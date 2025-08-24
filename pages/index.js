import Image from "next/image";
import TeamCard from "@/components/TeamCard";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useRef } from "react";
import MiniTable from "@/components/MiniTable";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Add a ref to the audio element

  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <NavBar className="fixed top-0 left-0 w-full z-50" />
      <div
        className={`${geistSans.className} ${geistMono.className} flex w-full min-h-screen font-[family-name:var(--font-geist-sans)] pt-16`}
      >
        {/* Aside (left) */}
        <aside className="w-72 bg-neutral-800 flex flex-col items-center fixed top-19 left-0 h-[calc(100vh-4rem)] z-40">
          <nav className="flex flex-col w-full">
            <TeamCard bgColor="#ae0306ff" logo="/FerrariLogo.png" alt="Ferrari Logo" direct="/ferrari" />
            <TeamCard bgColor="#ff5100ff" logo="/McLaren-Logo.png" alt="McLaren Logo" direct="/mclaren" />
            <TeamCard bgColor="#6df5a6ff" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/2560px-Mercedes_AMG_Petronas_F1_Logo.svg.png" alt="Mercedes Logo" direct="/mercedes" />
            <TeamCard bgColor="#02055aff" logo="https://vectorseek.com/wp-content/uploads/2023/08/Red-Bull-Racing-F1-Logo-Vector.svg-.png" alt="Red Bull Logo" direct="/redbull" />
            <TeamCard bgColor="#c7c9feff" logo="/Williams_racing_logo_alt.png" alt="Williams Logo" direct="/williams" />
            <TeamCard bgColor="#0180c0ff" logo="/Alpine.png" alt="Alpine Logo" direct="/alpine" />
            <TeamCard bgColor="#2f7642ff" logo="/astonMartin.png" alt="Aston Martin Logo" direct="/astonmartin" />
            <TeamCard bgColor="#1100ffff" logo="/RacingBulls.png" alt="Racing Bulls Logo" direct="/racingbulls" />
            <TeamCard bgColor="#59ff00ff" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/2023_Stake_F1_Team_Kick_Sauber_logo.png/250px-2023_Stake_F1_Team_Kick_Sauber_logo.png" alt="Sauber Logo" direct="/sauber" />
            <TeamCard bgColor="#ffffffff" logo="https://cdn.worldvectorlogo.com/logos/haas-f1-team-logo.svg" alt="Haas Logo" direct="/haas" />
          </nav>
        </aside>
        {/* Main (right) */}
        <div className="flex flex-col min-h-screen ml-72 flex-1">
          <main className="p-10">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Welcome to the F1 World</h1>
                <p className="mt-4 mb-4">Explore pilots, teams, stats, races and much more.</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handlePlayAudio}
                >
                  Race Off
                </button>
                <audio ref={audioRef} src="/f1-start-sound.mp3" preload="auto"></audio>
              </div>
              <div>
                <img src="https://www.pngplay.com/wp-content/uploads/13/F1-Ferrari-PNG-Free-File-Download.png" alt="F1 Car" className="w-full h-auto" />
              </div>
            </div>
            <div className="mt-10 p-5 w-full bg-red-500 rounded-lg">
              <div className="mr-0"></div>
              <h1 className="text-3xl font-bold">Upcoming race</h1>
              <div className="mt-2 flex flex-row gap-4">
                <div className="mr-4">
                  <img className="mt-2 w-20 h-20 rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqusDn-nou3dPPYtBtRh3dUQdSfKhctsxJQ&s" alt="Upcoming Race" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold">Country</h2>
                    <p className="text-lg">Circuit Name</p>
                </div>
                <div className="flex flex-col justify-center ml-auto text-right pr-5">
                  <h1 style={{ fontSize: "3rem" }}>3d 08h 12m</h1>
                </div>
              </div>
            </div>
            <div className="mt-10 w-full">
              <h1 className="text-3xl font-bold">Leaderboard</h1>
              <div className="mt-5 flex flex-row items-center justify-evenly">
                <div className="mt-4">
                  <MiniTable
                    firstcolumn_name="Driver"
                    secondcolumn_name="Points"
                    firstrow_name="Driver 1"
                    secondrow_name="Driver 2"
                    thirdrow_name="Driver 3"
                    firstrow_value={100}
                    secondrow_value={80}
                    thirdrow_value={60}
                  />
                </div>
                <div className="mt-4">
                  <MiniTable
                    firstcolumn_name="Team"
                    secondcolumn_name="Points"
                    firstrow_name="Team 1"
                    secondrow_name="Team 2"
                    thirdrow_name="Team 3"
                    firstrow_value={180}
                    secondrow_value={140}
                    thirdrow_value={90}
                  />
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
                onClick={handlePlayAudio}
              >
                Ver tabla completa
              </button>
            </div>
            <h1 className="mt-10 mb-5 text-3xl font-bold">News</h1>
            <div className="flex flex-row mt-0 w-full justify-center gap-10">
            
              <div className="flex flex-row p-5 w-full bg-red-500 rounded-lg">
                <img src="https://via.placeholder.com/150" alt="News" className="w-full h-auto rounded-lg" />
                <div>
                  <h2 className="text-xl font-semibold">News Title</h2>
                  <p className="text-sm">Short description of the news article.</p>
                </div>
              </div>
              <div className="flex flex-row p-5 w-full bg-red-500 rounded-lg">
                <img src="https://via.placeholder.com/150" alt="News" className="w-full h-auto rounded-lg" />
                <div>
                  <h2 className="text-xl font-semibold">News Title</h2>
                  <p className="text-sm">Short description of the news article.</p>
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>&copy; {new Date().getFullYear()} F1 Web App. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
      
    </>
  );
}
