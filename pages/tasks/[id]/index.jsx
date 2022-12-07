import PageLayout from "../../../components/PageLayout";
import TaskInfo from "../../../components/Lists/Tasks/TaskInfo";

export default function Task({ task, person }) {
  return (
    <PageLayout>
      <TaskInfo task={task} person={person}/>
    </PageLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3001/tasks/${id}`);
  const task = await response.json();

  const res = await fetch(`http://localhost:3001/people/${task.personId}`);
  const person = await res.json();

  return {
    props: {
      task,
      person,
    },
  };
}
