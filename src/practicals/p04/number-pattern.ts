export default function numberPattern(input?: string): void {
  const n = Number(input)
  if (!Number.isInteger(n) || n <= 0) return

  for (let i = 1; i <= n; i++) {
    let line = " ".repeat(n - i)
    for (let j = i; j >= 1; j--) {
      line += j
    }
    console.log(line)
  }
}