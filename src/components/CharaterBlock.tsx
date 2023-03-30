import { Character } from "./CharacterGrid"

interface Props {
  character: Character
}

export default function CharacterBlock({character}: Props) {
  return(
    <div class="m-auto items-center p-8 relative">
      <a class="fill-white p-4 absolute left-0 top-0 top-auto hover:cursor-pointer" href={'/'}>
      <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
      </a>
      <h2 class="text-center mb-4 font-bold text-4xl">{character.name} {character.Nationality}</h2>
      <div class="flex flex-col sm:flex-row items-center">
        <img class="m-auto max-h-[350px] object-fill" src={`../../img/${character.imgLink}`} />
        <div class="w-64 sm:ml-16">
          <div class="w-full flex justify-between">{character.Height}</div>
          <div class="w-full flex justify-between">{character.Weight}</div>
          <div class="w-full flex justify-between">{character["Current occupation(s)"]}</div>
          <div class="w-full flex justify-between">Likes {character.Hobbies}</div>
          <div class="w-full flex justify-between">Loves {character["Favorite foods and drinks"]}</div>
        </div>
      </div>
  </div>
  )
}