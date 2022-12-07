import TaskEdition from "../../../components/Lists/Tasks/TaskEdition";
import PageLayout from "../../../components/PageLayout";

export default function edit({ task }) {
  return (
    <PageLayout>
      <section className="flex justify-center">
        <TaskEdition task={task} />
      </section>
    </PageLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3001/tasks/${id}`);
  const task = await response.json();

  return {
    props: {
      task,
    },
  };
}
