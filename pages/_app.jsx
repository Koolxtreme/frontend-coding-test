import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <div className="text-pickled-bluewood font-mono">
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
