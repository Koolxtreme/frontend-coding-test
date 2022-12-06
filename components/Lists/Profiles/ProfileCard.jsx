import Link from "next/link";
import Image from "next/image";

function ProfileCard({ id, name, source, age, occupation }) {
  return (
    <>
      <Link href={`profile/${id}`}>
        <a>
        <div className="grid grid-cols-3 bg-gray-50 hover:bg-gray-200 p-2 gap-4 place-content-center place-items-center border-2 border-blue-300 hover:border-robin-s-egg-blue-400 hover:scale-95 rounded-lg transition hover:shadow-cs">
          <div>
            {/* <picture>
              <source srcSet={source} />
              <img src={source} alt={name} className="rounded-full h-20 w-20 md:h-36 md:w-36"/>
            </picture> */}
            <Image src={source} height={90} width={90} alt={`${name}'s photograph`} className="rounded-full"
            placeholder="blur" blurDataURL={source}></Image>
          </div>
          <div className="col-span-2 flex flex-col items-start w-full">
            <h2 className="text-xl">{name}</h2>
            <h2>Age: {age}</h2>
            <h2>Occupation: {occupation}</h2>
          </div>
        </div>
        </a>
      </Link>
    </>
  );
}

export default ProfileCard;
