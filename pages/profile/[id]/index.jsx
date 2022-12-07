import PageLayout from "../../../components/PageLayout";
import ProfileInfo from "../../../components/Lists/Profiles/ProfileInfo";
import TasksList from "../../../components/Lists/Tasks/TasksList";

export default function Profile({ profile, tasks }) {
  return (
    <PageLayout title={`${profile.nickname}'s Profile`}>
      <div>
        <div className="flex justify-center">
          <ProfileInfo profile={profile} />
        </div>
        <div className="flex justify-center mt-8">
          <TasksList tasks={tasks}/>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3001/people/${id}`);
  const profile = await response.json();

  const res = await fetch(`http://localhost:3001/tasks`);
  const fulltasks = await res.json();
  const tasks = await fulltasks.filter(task=> task.personId == id);

  return {
    props: {
      profile,
      tasks,
    },
  };
}