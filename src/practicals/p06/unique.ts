export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const countMap = new Map<number, number>()

  for (const n of [...arr1, ...arr2]) {
    countMap.set(n, (countMap.get(n) ?? 0) + 1)
  }

  return Array.from(countMap.entries())
    .filter(([_, count]) => count === 1)
    .map(([num]) => num)
}