declare const process: any

const input = process.argv[2]
const score = Number(input)

if (input === undefined || isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid input")
} else if (score < 50) {
  console.log("Grade F")
} else if (score < 60) {
  console.log("Grade D")
} else if (score < 70) {
  console.log("Grade C")
} else if (score < 80) {
  console.log("Grade B")
} else {
  console.log("Grade A")
}