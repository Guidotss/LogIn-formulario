import dotenv from 'dotenv'; 
dotenv.config(); 


export default{
    mongoDB:{
        URL:`mongodb+srv://guido:${process.env.DB_PASSWORD}@cluster0.wtvdvhi.mongodb.net/session?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology:true
        }
    }
}