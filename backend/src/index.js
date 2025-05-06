import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRoute)

app.listen(PORT, () => {
  console.log('Server is running on port' + PORT);
}); 