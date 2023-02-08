import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import path from "path";

/*import { setupSwagger } from "./docs/swagger";
*/
import { errorHandler } from "./middlewares/errorHandler";

import { clockInRoutes, userRoutes } from "./routes";


dotenv.config();



const app = express();

//setupSwagger(app);

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
    return res.json({
        timestamp: new Date(),
    });
});


// app.use(rateLimiter);
app.use("/users", userRoutes);
app.use("/clockins", clockInRoutes);

app.use(errorHandler);

export { app };
