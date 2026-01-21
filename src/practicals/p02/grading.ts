export default function grading(input: string): string {
  const score = Number(input)

  if (input === undefined || isNaN(score) || score < 0 || score > 100) {
    return "Invalid input"
  } else if (score < 50) {
    return "Grade F"
  } else if (score < 60) {
    return "Grade D"
  } else if (score < 70) {
    return "Grade C"
  } else if (score < 80) {
    return "Grade B"
  } else {
    return "Grade A"
  }
}