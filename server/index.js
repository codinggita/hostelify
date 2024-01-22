import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app=express();
//app.use('/posts',postRoutes);
//app.use(bodyParser.json({limit : "30mb", extended: true}));
//app.use(bodyParser.urlencoded({limit : "30mb", extended: true}));
//app.use(cors());


//Mongoose
// const CONNECTION_URL= 'mongodb+srv://user-123:user123@hostel.wczoxof.mongodb.net/?retryWrites=true&w=majority'
const PORT = 5000;
// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//  .then(()=> app.listen(PORt,()=>console.log('Server running on port: ${PORT}')))
//  .catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify', false);


// Middleware
app.use(express.json());

// Routes
//app.use('/api/resources', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});