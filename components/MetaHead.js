import Head from "next/head";

export default function MetaHead() {
  return (
    <>
      <Head>
        <title>The Weather Today</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Tansi Jones" />
        <meta
          name="description"
          content="Weather App that displays weather data of different cities in real time"
        />
      </Head>
    </>
  );
}
