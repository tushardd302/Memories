import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

//Routes 
import postsRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

// Middlewares 


app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

app.use('/user' , userRoutes);
app.use('/posts' , postsRoutes);

// Mongose DB
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://memories:memories@cluster0.55llx.mongodb.net/", {useNewUrlParser : true , useUnifiedTopology : true})
    .then( () => app.listen(PORT , () => console.log(` Server Runnging on port :  ${PORT}`)))
    .catch( (err) => console.log(err.message));


