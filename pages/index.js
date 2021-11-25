import MetaHead from "../components/MetaHead";

export default function Home() {
  return (
    <>
      <MetaHead />

      <main
        className="h-screen w-screen bg-no-repeat bg-fill bg-center"
        style={{ backgroundImage: `url('/img/${"10n.jpg"}')` }}
      ></main>
    </>
  );
}
