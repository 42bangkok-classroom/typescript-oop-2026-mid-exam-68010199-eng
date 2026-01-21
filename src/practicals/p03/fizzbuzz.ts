export function fizzbuzz(input?: string): void {
  const n = Number(input)

  if (!input || isNaN(n) || n <= 0) {
    return
  }

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}