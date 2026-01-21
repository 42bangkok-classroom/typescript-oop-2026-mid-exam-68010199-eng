export interface Person {
  firstName?: string
  lastName?: string
  age?: number
}

export function sortPersons(persons: Person[]): Person[] {
  return persons
    .filter(
      p =>
        typeof p.firstName === "string" &&
        p.firstName.trim() !== "" &&
        typeof p.lastName === "string" &&
        p.lastName.trim() !== "" &&
        typeof p.age === "number" &&
        p.age >= 0 &&
        p.age <= 120
    )
    .sort((a, b) => {
      if (a.firstName! < b.firstName!) return -1
      if (a.firstName! > b.firstName!) return 1
      if (a.lastName! < b.lastName!) return -1
      if (a.lastName! > b.lastName!) return 1
      return a.age! - b.age!
    })
}