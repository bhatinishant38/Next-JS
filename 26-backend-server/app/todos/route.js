import { readFile } from 'fs'
import { writeFile } from 'fs/promises'

// await writeFile("hello.txt" , " Hi , How are you? ")
const fileContents = await readFile("hello.txt" , "utf-8")

console.log(fileContents)

console.log(" Written to the file. ")