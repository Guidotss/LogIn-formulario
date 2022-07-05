import express from 'express'; 
import morgan from 'morgan'; 
import path from 'path'; 
import session from 'express-session'; 
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv'; 
import routesClientes from './routers/clientes';
import routesProductos from './routers/productos';
import configDB from './dataBase/config'

dotenv.config(); 



const app = express();

const staticPath = path.join(__dirname,'../public');

app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use(morgan('dev')); 
app.use(express.static(staticPath));
app.use(session({
    store: MongoStore.create({
        mongoUrl:configDB.mongoDB.URL,
        mongoOptions:configDB.mongoDB.options,
        ttl: 600
    }),
    secret:'secret',    
    resave:false,
    saveUninitialized:false
})); 


app.use('/',routesClientes); 
app.use('/productos',routesProductos);

const PORT = process.env.PORT || 3000; 

const server = app.listen(PORT,() => {
    console.log(`Server on port ${server.address().port}`);
}); 
