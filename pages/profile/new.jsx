import NewUserForm from "../../components/Lists/Profiles/NewUserForm"
import PageLayout from "../../components/PageLayout"

export default function newUser() {
  return (
    <PageLayout>
        <section className="flex justify-center">
            <NewUserForm />
        </section>
    </PageLayout>
  )
}
