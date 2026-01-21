export function numberPattern(n: number): string {
  let result = ""
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j.toString()
    }
    if (i < n) result += "\n"
  }
  return result
}