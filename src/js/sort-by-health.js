export default function sortByHealth(characters) {
  const sortedCharacters = characters.sort((a, b) => b.health - a.health);
  return sortedCharacters;
}
