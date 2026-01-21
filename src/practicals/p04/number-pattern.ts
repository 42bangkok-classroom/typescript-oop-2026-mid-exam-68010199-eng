export function numberPattern(n: number): void {
  if (typeof n !== "number" || n <= 0) return

  for (let i = 1; i <= n; i++) {
    let line = ""
    line += " ".repeat(n - i)

    for (let j = i; j >= 1; j--) {
      line += j.toString()
    }

    console.log(line)
  }
}