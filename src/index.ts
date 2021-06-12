import express from "express";

import { usersRoutes } from "./routes/users.routes";
import swaggerUi from 'swagger-ui-express'
import swaggerConfig from './swagger.json'
const app = express();
app.use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use(express.json());

app.use("/users", usersRoutes);

export { app };
