import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-36 mx-auto py-4 px-12">
        <Hero />
        <About />
      </div>
    </main>
  );
}
