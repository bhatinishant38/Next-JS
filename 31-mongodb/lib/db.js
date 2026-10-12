import mongoose from "mongoose"

const DB_URI = 'mongodb://root:bhati@ac-ioskdyj-shard-00-00.vbj5pd7.mongodb.net:27017,ac-ioskdyj-shard-00-01.vbj5pd7.mongodb.net:27017,ac-ioskdyj-shard-00-02.vbj5pd7.mongodb.net:27017/todo-next?ssl=true&replicaSet=atlas-7v719i-shard-0&authSource=admin&appName=Cluster1'

await mongoose.connect(DB_URI)
console.log('Database connected')

mongoose.model('todo',{})

export const db = mongoose.connection.db
