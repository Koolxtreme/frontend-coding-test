import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";

function TaskInfo({ task, person }) {
  const [completed, setCompletion] = useState(task.completed);

  const changeTaskState = () => {
    setCompletion(!completed);
    const newData = JSON.stringify({ ...task, completed: !completed });
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    });
  };
  return (
    <section className="flex justify-center p-6">
      <div className="relative p-6 border-2 shadow-lg rounded-lg">
        <Link href={`/tasks/${task.id}/edit`}>
          <a>
            <span className="absolute top-0 right-0 p-4 bg-yellow-200 hover:bg-yellow-300 hover:scale-90 rounded-full text-lg transition">
              <BsFillPencilFill />
            </span>
          </a>
        </Link>
        <div>
          <h3 className="text-center font-extrabold">{task.title}</h3>
        </div>
        <div className="my-4">
          <p>{task.description}</p>
        </div>
        <div className="flex justify-center">
          {completed ? (
            <a
              className="p-2 bg-green-300 hover:bg-green-500 rounded-lg text-white cursor-pointer transition"
              onClick={changeTaskState}
            >
              Completed
            </a>
          ) : (
            <a
              className="p-2 bg-red-300 hover:bg-red-500 rounded-lg text-white cursor-pointer transition"
              onClick={changeTaskState}
            >
              Pending...
            </a>
          )}
        </div>
        <div className="my-6 grid grid-rows-2 grid-cols-2 place-items-center">
          <p>Started</p>
          <p>Completed</p>
          <p>{task.startDate}</p>
          <p>{task.endDate != null ? task.endDate : "Pending..."}</p>
        </div>
        <div className="text-center">
          <p>Person on charge</p>
          <p>
            <Link href={`/profile/${person.id}`}>
              <a className="text-robin-s-egg-blue-600">{`@${person.nickname}`}</a>
            </Link>
          </p>
          <Image
            src={person.picture}
            height={90}
            width={90}
            alt={`${person.fullName}'s photograph`}
            className="rounded-full"
            placeholder="blur"
            blurDataURL={person.picture}
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default TaskInfo;
