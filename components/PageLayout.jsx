import Head from "next/head";
import Link from "next/link";
import {
  FaHome,
  FaArrowAltCircleLeft,
  FaQuestion,
  FaStudiovinari,
} from "react-icons/fa";

function PageLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>

        {/* hope to have permision for using the favicon */}
        <link
          rel="shortcut icon"
          href="https://www.datasketch.co/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <header className="p-4 flex sticky top-0 bg-white z-10">
        <Link href="/">
          <a className="text-2xl flex">
            Tests
            <span className="text-red-violet">
            App
            </span>
            <FaStudiovinari className="text-red-violet-300"/>
          </a>
        </Link>
      </header>
      <nav className="p-4 sticky top-2 flex justify-end z-20">
        <ul className="flex w-[40vw] justify-evenly text-2xl text-robin-s-egg-blue-700">
          <li>
            <p
              onClick={() => {
                history.back();
              }}
            >
              {
                <FaArrowAltCircleLeft className="cursor-pointer hover:scale-125 hover:text-robin-s-egg-blue-600 transition" />
              }
            </p>
          </li>
          <li>
            <Link href="/">
              {
                <FaHome className="cursor-pointer hover:scale-125 hover:text-robin-s-egg-blue-600 transition" />
              }
            </Link>
          </li>
          <li>
            <Link href="/about">
              <FaQuestion className="cursor-pointer hover:scale-125 hover:text-robin-s-egg-blue-600 transition" />
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default PageLayout;
