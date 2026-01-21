export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)

  const result = new Set<number>()

  for (const n of set1) {
    if (!set2.has(n)) {
      result.add(n)
    }
  }

  for (const n of set2) {
    if (!set1.has(n)) {
      result.add(n)
    }
  }

  return Array.from(result)
}