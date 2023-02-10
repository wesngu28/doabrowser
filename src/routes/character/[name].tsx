import { useParams } from "solid-start";
import characters from "../../../doa3.json";
import { createSignal, For, onMount, Show } from "solid-js";
import server$ from "solid-start/server";
import CharacterBlock from "~/components/CharaterBlock";

interface Post {
  directory: string;
  hash: string;
  height: number;
  id: number;
  image: string;
  change: number;
  owner: string;
  parent_id: number;
  rating: string;
  sample: boolean;
  sample_height: number;
  sample_width: number;
  score?: any;
  tags: string;
  width: number;
}

export default function CharacterPage() {
  const params = useParams();
  let popout: HTMLDivElement | null = null;
  const [absoluter, setAbsoluter] = createSignal("");
  type character = typeof characters[0];
  const [full, setFull] = createSignal([] as Post[]);
  const [posts, setPosts] = createSignal([] as Post[]);
  const [page, setPage] = createSignal(0);
  const [serverpage, setServerpage] = createSignal(0);
  const startIdx = () => page() * 20;
  const endIdx = () => page() * 20 + 20;
  onMount(async () => {
    const imgs = await gatherImages(character.Tag!, 0);
    if (imgs[0]) {
      setFull(imgs);
      setPosts(full().slice(0, 20));
    }
  });
  const postsSlice = () => setPosts(full().slice(startIdx(), endIdx()));
  const gatherImages = server$(async (tag: string, page: number = 0) => {
    const images = await fetch(
      `https://safebooru.org/index.php?page=dapi&s=post&q=index&json=1&tags=${tag}&limit=100&pid=${page}`
    );
    const json = await images.text();
    if (json) return JSON.parse(json);
    else return [{}];
  });
  const character = characters.filter(
    (character) => character.name === params.name.replace("_", " ")
  )[0];
  if (!character) return <div>Character not found</div>;
  return (
    <div class="h-screen w-screen flex flex-col items-center mt-16 text-white">
      <div class="flex flex-col items-center">
        <CharacterBlock character={character} />
        <Show when={posts()}>
          <div class="flex flex-wrap max-w-xs sm:max-w-2xl items-center justify-center">
            <For each={posts()}>
              {(post) => (
                <span class="w-[120px] h-[180px] max-w-[180px] max-h-[180px] relative flex items-center justify-center">
                  <Show when={post.image}>
                    <img
                      onClick={() => {
                        setAbsoluter(
                          `https://safebooru.org//images/${post.directory}/${post.image}?${post.id}`
                        );
                        popout!.classList.toggle("hidden");
                      }}
                      src={`https://safebooru.org/thumbnails/${post.directory}/thumbnail_${post.image
                        .replace(".gif", ".jpg")
                        .replace(".png", ".jpg")
                        .replace(".jpeg", ".jpg")}?${post.id}`}
                    />
                  </Show>
                </span>
              )}
            </For>
          </div>
        </Show>
        <div class="flex justify-between w-full mt-4 p-4">
          <button class="bg-gray-500 p-2 rounded-lg"
            onClick={() => {
              if (page() > 0) {
                setPage(page() - 1);
              }
              setPosts(postsSlice());
            }}
          >Back</button>
          <button class="bg-gray-500 p-2 rounded-lg"
            onClick={async () => {
              if (page() < Math.floor(full().length / 20)) {
                if (page() !== 0 && page() % 4 === 0) {
                  setServerpage(serverpage() + 1);
                  const imgs = await gatherImages(character.Tag, serverpage());
                  setFull(full().concat(imgs));
                }
                setPage(page() + 1);
                setPosts(postsSlice());
              }
            }}
          >Next</button>
        </div>
      </div>
      <div
        role="dialog"
        aria-modal="true"
        onClick={() => {
          setAbsoluter("");
          popout!.classList.toggle("hidden");
        }}
        class="hidden absolute w-screen h-screen bg-[#000000e1]"
        ref={popout!}>
        <img class="inset-0 m-auto absolute max-h-[75vh] opacity-100" src={absoluter()} />
      </div>
    </div>
  );
}
