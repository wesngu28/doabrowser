// import { parse } from "node-html-parser";
// import { createWriteStream, readFileSync, writeFileSync } from "fs";
// import { Readable } from "stream";
// import { finished } from "stream/promises";
// import { ReadableStream } from 'stream/web';
// import characters from './characters.json' assert { type: "json" };

// async function writeInitialJsonState() {
//   const npcFetch = await fetch(
//     "https://deadoralive.fandom.com/wiki/Category:Non-playable_characters"
//   );
//   const npcText = await npcFetch.text();
//   const npcParseable = parse(npcText);
//   const npcList = npcParseable.querySelectorAll(".category-page__member-link");
//   const npcs = npcList.map((npc) => npc.getAttribute("href"));

//   const playableFetch = await fetch(
//     "https://deadoralive.fandom.com/wiki/Category:Characters"
//   );
//   const playableText = await playableFetch.text();
//   const playerParseable = parse(playableText);
//   const playerList = playerParseable.querySelectorAll(
//     ".category-page__member-link"
//   );
//   const playable = playerList
//     .map((play) => play.getAttribute("href"))
//     .filter((play) => !npcs.includes(play))
//     .filter((play) => !play!.includes("Category:"));

//   const characters = [];
//   for (let i = 0; i < playable.length; i++) {
//     const raw = await fetch(`https://deadoralive.fandom.com${playable[i]}`);
//     const text = await raw.text();
//     const roots = parse(text);
//     let img = roots.querySelector(".pi-image-thumbnail");
//     let src = ''
//     if (img) src = (img).getAttribute("src")!;
//     else continue;
//     const title = roots.querySelector("h2.pi-item")!.text;
//     const stream = createWriteStream(`img/${title}.png`);
//     const { body } = await fetch(src);
//     const bodyStream = Readable.fromWeb(body as ReadableStream<any>);
//     await finished(bodyStream.pipe(stream));

//     const table = roots.querySelectorAll("div.pi-item");
//     if (!table) continue;
//     const charObject: Record<string, string> = { imgLink: `${title}.png`, name: title };
//     table.forEach((tabular) => {
//       const label = tabular.querySelector("h3");
//       const value = tabular.querySelector("div");
//       charObject[label!.text] = value!.text.replace(/\[.*?\]/g, "").replace('()', "");
//     });

//     characters.push(charObject);
//   }
//   writeFileSync("characters.json", JSON.stringify(characters));
// }

// async function parseJsonForUsefulKeys() {
//   const purged: Array<{[k: string]: any}> = []
//   let usefulkeys = ["imgLink", "name", "First appearance", "Current occupation(s)",
//   "Nationality", "Height", "Weight", "Hobbies", "Favorite foods and drinks"]
//   characters.forEach(character => {
//     const cleanedChar = Object.fromEntries(Object.entries(character).filter(([key]) => usefulkeys.includes(key)))
//     purged.push(cleanedChar)
//   });
//   writeFileSync("cleaned-characters.json", JSON.stringify(purged));
// }

// // writeInitialJsonState()
// parseJsonForUsefulKeys()