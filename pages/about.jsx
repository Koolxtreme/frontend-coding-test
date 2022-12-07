import PageLayout from "../components/PageLayout";

function About() {
  return (
    <PageLayout title="About">
      <section className="flex flex-col items-center my-4 p-4">
        <div className="border-2 p-2 rounded-lg shadow-lg">
          <h1 className="text-xl text-center font-bold mb-4">
            Welcome to my solution
          </h1>
          <div className="grid gap-4">
            <p>
              Hope you enjoy while review this page, I&apos;ve tried to give a
              good UX providing a minimalist design though following the
              <a
                href="https://www.datasketch.co/"
                target="_blank"
                rel="noreferrer"
  className="text-blue-400 hover:text-blue-600"
              > datasketch.co</a> idea.
            </p>
            <p>
              The layout and the navigation where designed thinking on mobile
              first methodology for providing a full responsive website but there are a couple interactions that you can appreciate better on desktop.
            </p>
            <p>Thank you for your attention.</p>

            <p>
              <a
                href="https://github.com/Koolxtreme"
                target="_blank"
                rel="noreferrer"
  className="text-blue-400 hover:text-blue-600"
              >
                @Koolxtreme
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default About;
