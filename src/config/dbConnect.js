import mongoose from "mongoose";

async function conectaNaDataBase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);


    return mongoose.connection //metodo interno do mongoose
}


export default conectaNaDataBase;