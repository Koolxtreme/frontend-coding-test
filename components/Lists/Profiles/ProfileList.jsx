import Link from "next/link";
import ListsContainer from "../ListsContainer";
import ProfileCard from "./ProfileCard";

export default function ProfileList({ people }) {
  return (
    <ListsContainer>
      <div className="grid gap-4 justify-center auto-rows-min md:auto-cols-max w-full h-full rounded-md p-4">
        <div>
          <h2 className="text-center text-xl font-bold">Users List</h2>
        </div>
        <Link href="/profile/new">
          <a>
            <div className="flex justify-center bg-gray-50 hover:bg-gray-200 p-2 gap-4 place-content-center place-items-center border-2 border-blue-300 hover:border-robin-s-egg-blue-400 hover:scale-95 rounded-lg transition hover:shadow-cs">
              <a className="px-4 py-2 bg-green-200 text-3xl rounded-full">
                +
              </a>
            </div>
          </a>
        </Link>
        {people.length === 0 && <p>No hay datos</p>}
        {people.length > 0 &&
          people.map((profileEX) => (
            <ProfileCard
              key={profileEX.id}
              id={profileEX.id}
              name={profileEX.fullName}
              source={profileEX.picture}
              age={profileEX.age}
              occupation={profileEX.occupation}
            />
          ))}
      </div>
    </ListsContainer>
  );
}
