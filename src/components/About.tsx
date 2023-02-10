export default function About() {
  return (
    <div class="text-center flex flex-1 flex-col items-center p-4">
      <h1 class="text-5xl sm:text-6xl text-sky-400 font-thin uppercase">DOA3Browser</h1>
      <p class="mt-4 text-white max-w-sm sm:max-w-md text-left p-4">
        View quick information about the roster from Dead or Alive 3, as well as
        view the latest images aggregated from Safebooru, an image hosting
        service.
      </p>
      <div class="max-w-xs sm:max-w-sm mt-4 p-4 bg-white rounded-lg shadow flex flex-col justify-center">
        <div class="flex items-center">
          <img
            alt="Solid logo"
            src="https://www.solidjs.com/assets/logo-123b04bc.svg"
            width="139"
            height="130"
          />
          <p class="mt-4 text-2xl font-semibold text-gray-900">
            Made to learn{" "}
            <a
              href="https://start.solidjs.com/getting-started/what-is-solidstart"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline font-bold"
            >
              Solid Start
            </a>
          </p>
        </div>
        <p class="mt-4 text-left">Solid Start is SolidJS's metaframework, similar to Next.js for React and SvelteKit for Svelte.
        Using it allows you to take advantage of SolidJS's fine-grained reactivity model, as well as native support for
        RPC, and many other cool features.</p>
      </div>
    </div>
  );
}
