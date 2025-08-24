import NavBar from "@/components/NavBar";
import RaceCard from "@/components/RaceCard";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Races() {
    return (
        <>
            <NavBar />
            <main className="text-white p-4 w-full flex flex-col items-center">
                <div className="flex flex-col items-center justify-center mt-20 w-full">
                    <div className="mt-4 ml-90 w-full flex justify-start">
                        <h2 className="text-2xl font-semibold text-left">UPCOMING RACE</h2>
                    </div>
                    <div className="flex flex-col items-center gap-4 mt-4 w-full">
                        <RaceCard race="Monaco" />
                        <div className="mt-4 ml-90 w-full flex justify-start">
                         <h2 className="text-2xl font-semibold text-left">NEXT RACES</h2>
                        </div>
                        <RaceCard race="Monaco" />
                        <RaceCard race="Monaco" />
                        <RaceCard race="Monaco" />
                        {/* Add more <RaceCard /> components here, they will stack vertically and stay centered */}
                    </div>
                </div>
            </main>
        </>
    );
}