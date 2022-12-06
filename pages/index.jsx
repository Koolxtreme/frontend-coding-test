import PageLayout from "../components/PageLayout";
import ProfileList from "../components/Lists/Profiles/ProfileList";

function HomePage({people}) {
  return (
    <PageLayout title="Home">
      <ProfileList people={people}/>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/people");
  const data = await response.json();
  const people = data.sort((a,b) => a.age - b.age);
  return {
    props: {
      people,
    },
  };
}

export default HomePage;