import Head from "next/head";

export default function MetaHead() {
  return (
    <>
      <Head>
        <title>the weather today</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Tansi Jones" />
        <meta
          name="description"
          content="Weather App that displays weather data of different cities in real time"
        />
      </Head>
    </>
  );
}
