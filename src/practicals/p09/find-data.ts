function findData(fileName: string, key: string, value: string | number): void {
  let data: any[] = []

  if (fileName === "products.json") {
    data = products.json
  } else if (fileName === "users.json") {
    data = users.json
  }

  const result = data.filter(item => item[key] === value)
  console.log(result)
}
