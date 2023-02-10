import { CharacterGrid } from "~/components/CharacterGrid";
import About from "~/components/About";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 h-screen">
      <div class="flex lg:flex-row flex-col items-center h-screen max-w-7xl m-auto">
        <About />
        <CharacterGrid />
      </div>
    </main>
  );
}