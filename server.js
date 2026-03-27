// follow this tut for node and express
// https://www.youtube.com/watch?v=ha_leEpnT30
import cors from "cors";
import express from "express";
import postRouter from "./routes/posts.js"
import logger from './middleware/logger.js'
import errorHandler from "./middleware/error.js";
const app = express();

app.use(
  cors({
    // this is the allowed ports that can communicate with backedn
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  }),
);


app.use(express.json());

app.use(logger)

app.use('/car',logger,postRouter)

app.use(errorHandler)


app.listen(8000, () => {
  console.log("the server is running at  http://localhost:8000");
});
