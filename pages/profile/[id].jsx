import PageLayout from "../../components/PageLayout";
import ProfileInfo from "../../components/Lists/Profiles/ProfileInfo";

export default function Profile({ profile }) {
  return (
    <PageLayout title={`${profile.nickname}'s Profile`}>
      <div className="flex justify-center">
      <ProfileInfo profile={profile} />
      </div>
    </PageLayout>
  );
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
