import TaskCard from "./TaskCard";
import ListsContainer from "../ListsContainer";
import Link from "next/link";

export default function TasksList({ tasks, addition = false }) {
  return (
    <ListsContainer>
      <div className="flex flex-col p-6 justify-center">
        <div>
          <h2 className="text-center text-xl font-bold">Task List</h2>
        </div>
        <div className="mt-6 border-2 shadow-lg rounded-lg p-4 grid gap-4">
          {addition ? (
            <Link href="/tasks/new">
              <a>
                <div className="flex justify-center bg-gray-50 hover:bg-gray-200 p-2 gap-4 place-content-center place-items-center border-2 border-blue-300 hover:border-robin-s-egg-blue-400 hover:scale-95 rounded-lg transition hover:shadow-cs">
                  <a className="px-4 py-2 bg-green-200 text-3xl rounded-full">
                    +
                  </a>
                </div>
              </a>
            </Link>
          ) : (
            <></>
          )}
          {tasks.length === 0 && <p>No hay tareas asignadas</p>}
          {tasks.length > 0 &&
            tasks.map((task) => <TaskCard key={task.id} task={task} />)}
        </div>
      </div>
    </ListsContainer>
  );
}
