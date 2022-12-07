import NewTaskForm from "../../components/Lists/Tasks/NewTaskForm";
import PageLayOut from "../../components/PageLayout";

export default function CreateTask() {
  return (
    <PageLayOut>
      <section className="flex justify-center">
        <NewTaskForm />
      </section>
    </PageLayOut>
  );
}
