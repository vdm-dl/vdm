import express from "express";
import path from "path";
import cors from "cors";
import downloadRoute from "./routes/download";

console.log("server module loaded");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "../../ui/public")));
app.use("/download", downloadRoute);

app.listen(PORT, () => {
  console.log(`Vdm is running at http://localhost:${PORT}`);
});
