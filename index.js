import express from "express";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import dbCon from './app/config/dbConnection.js'
import swaggerDocument from './swagger.json' with { type: 'json' };
import router from "./app/router/index.js";


const app=express();

dotenv.config();

// db connection
dbCon()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router calling
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);

// server listening
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})