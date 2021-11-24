import MetaHead from "../components/MetaHead";

export default function Home() {
  return (
    <>
      <MetaHead />

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Weather App</h1>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <p>Powered by remeek &trade;</p>
        </footer>
      </div>
    </>
  );
}
