import express from 'express';
import dotenv from 'dotenv';
import userRoute from './route/user.route.js';//so far so good I think
import authRoute from './route/admin.route.js';
import adminRoute from './route/admin.route.js';
import songRoute from './route/song.route.js';
import albumRoute from './route/album.route.js';
import statsRoute from './route/stat.route.js';  
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/songs", songRoute);
app.use("/api/albums", albumRoute);
app.use("/api/stats", statsRoute);

app.listen(PORT, () => {
  console.log('Server is running on port' + PORT);
  connectDB();
});