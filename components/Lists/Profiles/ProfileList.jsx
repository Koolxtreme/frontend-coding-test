import ListsContainer from "../ListsContainer";
import ProfileCard from "./ProfileCard";

export default function ProfileList({ people }) {
  return (
    <ListsContainer>
      <div className="grid gap-4 justify-center auto-rows-min md:auto-cols-max w-full h-full rounded-md p-4">
        {people.length === 0 && <p>No hay datos</p>}
        {people.length > 0 && people.map((profileEX) => (
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