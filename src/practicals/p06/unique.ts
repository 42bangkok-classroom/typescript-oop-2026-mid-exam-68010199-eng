function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)

  return [
    ...arr1.filter(n => !set2.has(n)),
    ...arr2.filter(n => !set1.has(n))
  ]
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];