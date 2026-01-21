const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  return comment
    .split(" ")
    .map(word => word[0])
    .join("")
}