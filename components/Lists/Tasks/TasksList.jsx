import TaskCard from "./TaskCard";

export default function TasksList({ tasks }) {
  return (
    <div className="flex flex-col p-6 justify-center">
      <div>
        <h2 className="text-center text-xl font-bold">Task List</h2>
      </div>
      <div className="mt-6 border-2 shadow-lg rounded-lg p-4 grid gap-4">
      {tasks.length === 0 && <p>No hay datos</p>}
        {tasks.length > 0 && tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
    </div>
    </div>
  )
}
