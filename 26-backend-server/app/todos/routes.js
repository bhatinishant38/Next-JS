import { writeFile } from 'fs/promises'

await writeFile("hello.txt" , " Hi , How are you? ")

console.log(" Written to the file. ")