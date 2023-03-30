import { A } from "@solidjs/router";
import { For } from "solid-js";
import characters from "../../doa3.json";

export type Character = typeof characters[0];

export function CharacterGrid() {
  return (
    <div class="grid grid-cols-3 max-w-md p-4 h-3/4 gap-4">
      <For each={characters} fallback={<div>Loading...</div>}>
        {(character) => (
          <A href={`/character/${character.name.replace(' ', '_')}`}>
            <img
            class="max-h-[100px] m-auto"
            src={`/img/${character.imgLink}`}
            />
          </A>
        )}
      </For>
    </div>
  );
}
