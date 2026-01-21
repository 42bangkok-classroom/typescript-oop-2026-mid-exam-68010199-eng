interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

function sortPersons(persons: Person[]): Person[] {
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


const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];
