import Link from "next/link";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";

function TaskCard({ task }) {
  const [completion, setCompletion] = useState(task.completed);

  const changeTaskState = () => {
    setCompletion(!completion);
    const newData = JSON.stringify({ ...task, completed: !completion });
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    });
  };

  return (
    <div className="p-2 border-2">
      <div>
        <div>
          <h3 className="text-center">{task.title}</h3>
          <p className="my-2">{task.description}</p>
        </div>
        <div className="flex justify-evenly items-center">
          {completion ? (
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

          <Link href={`/tasks/${task.id}`}>
            <a className="p-2 text-robin-s-egg-blue-700 hover:text-robin-s-egg-blue-600 hover:scale-125 transition">
              <BiLinkExternal />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
