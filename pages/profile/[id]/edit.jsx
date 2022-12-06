import PageLayout from "../../../components/PageLayout";
import EditionForm from "../../../components/Lists/Profiles/EditionForm";

export default function Edit({ profile }) {
  return (
    <PageLayout title={`Edit ${profile.nickname} Profile`}>
    <section className="flex justify-center">
      <EditionForm profile={profile}/>
    </section>
    </PageLayout>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3001/people/${id}`);
  const profile = await response.json();

  return {
    props: {
      profile,
    },
  };
}