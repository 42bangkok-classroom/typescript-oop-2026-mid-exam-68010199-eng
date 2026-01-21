 import * as fs from "fs"

function readJson(fileName: string): unknown[] {
  return JSON.parse(fs.readFileSync(fileName, "utf-8"))
}