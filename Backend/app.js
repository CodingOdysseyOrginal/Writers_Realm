import express from "express"; 
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// temp server to test make sure eveythuing is hocked up 
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

export default app;