import express, {type Request, type Response} from "express";
import { AppRoutes } from "./routes/routes.js";

const app = express();
const port = 3000;


app.use(express.json());
app.use(AppRoutes.routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});