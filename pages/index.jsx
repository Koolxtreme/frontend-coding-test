import PageLayout from "../components/PageLayout";
import ProfileList from "../components/Lists/Profiles/ProfileList";
import TasksLists from "../components/Lists/Tasks/TasksList";
import { useState } from "react";

function HomePage({ people, tasks }) {
  const [section, setSection] = useState(true);

  return (
    <PageLayout title="Home">
      <section>
        <div className="flex justify-center py-6">
          {section ? <a className="py-2 px-6 bg-robin-s-egg-blue-800 text-white rounded-lg hover:bg-robin-s-egg-blue-700 cursor-pointer transition" onClick={()=>setSection(!section)}>See tasks</a>
          :<a className="py-2 px-6 bg-red-violet text-white rounded-lg hover:bg-red-violet-400 cursor-pointer transition" onClick={()=>setSection(!section)}>See Users</a>}
        </div>
        <div>
          {section ? (
            <ProfileList people={people} />
          ) : (
            <TasksLists tasks={tasks} addition={true} />
          )}
        </div>
      </section>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/people");
  const data = await response.json();
  const people = data.sort((a, b) => a.age - b.age);

  const res = await fetch("http://localhost:3001/tasks");
  const tasks = await res.json();
  return {
    props: {
      people,
      tasks,
    },
  };
}

export default HomePage;
