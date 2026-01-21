export function shortenComment(comment: string): string {
  return comment
    .split(" ")
    .filter(word => word.length >= 5 && word.length <= 10)
    .join(" ");
}