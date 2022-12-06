import Image from "next/image";
import Link from "next/link";
import { BsGenderMale, BsGenderFemale, BsFillPencilFill } from "react-icons/bs";

function ProfileInfo({ profile }) {
  return (
    <section className="relative mt-8 p-8 border-2 rounded-lg shadow-lg">
      <Link href={`/profile/${profile.id}/edit`}>
        <a>
          <span className="absolute top-0 right-0 p-4 bg-yellow-200 rounded-full text-lg">
            <BsFillPencilFill />
          </span>
        </a>
      </Link>
      <div className="text-center mb-8">
        <Image
          width={200}
          height={200}
          src={profile.picture}
          alt={`${profile.fullName}'s photograph`}
          className="rounded-full"
          placeholder="blur"
          blurDataURL={profile.picture}
        />
        <>
          <h3>{profile.fullName}</h3>
        </>
        <>
          <p>
            Also known as{" "}
            <span className="font-extrabold text-red-violet text-lg">
              {profile.nickname}
            </span>
          </p>
        </>
      </div>
      <div>
        <h2 className="text-center text-lg font-extrabold">Attributes</h2>
        <div className="flex justify-evenly">
          <p>Level:</p>
          <p>{profile.age}</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Special Skill:</p>
          <p className="text-robin-s-egg-blue-700">{profile.occupation}</p>
        </div>
        <div className="flex justify-center p-2 text-2xl">
          {profile.gender === "Male" ? (
            <BsGenderMale className="text-robin-s-egg-blue" />
          ) : (
            <BsGenderFemale className="text-red-violet-300" />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
