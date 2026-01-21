export function grading(input?: string): void {
  const score = Number(input)

  if (!input || isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid input")
    return
  }

  if (score < 50) {
    console.log("Grade is F")
  } else if (score < 60) {
    console.log("Grade is D")
  } else if (score < 70) {
    console.log("Grade is C")
  } else if (score < 80) {
    console.log("Grade is B")
  } else {
    console.log("Grade is A")
  }
}