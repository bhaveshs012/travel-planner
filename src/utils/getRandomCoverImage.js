export function getRandomCoverImage() {
  const randomIndex = Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3
  return `/assets/tripCoverImages/${randomIndex}.jpg`;
}
