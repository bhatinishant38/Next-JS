import mongoose from "mongoose"

const DB_URI = 'mongodb://root:bhati@ac-ioskdyj-shard-00-00.vbj5pd7.mongodb.net:27017,ac-ioskdyj-shard-00-01.vbj5pd7.mongodb.net:27017,ac-ioskdyj-shard-00-02.vbj5pd7.mongodb.net:27017/todo-next?ssl=true&replicaSet=atlas-7v719i-shard-0&authSource=admin&appName=Cluster1'

export const connectDB = async ()=>{
    try {

        if(mongoose.connection.readyState === '1'){
            console.log("already connected")
            return 
        }
        await mongoose.connect(DB_URI)
        console.log("Database connected")  
    } catch (error) {
        console.log(error)
         console.log("Database connected")
         process.exit(1)        
    }
}
