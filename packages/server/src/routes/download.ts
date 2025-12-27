import { Router } from "express";
import path from "path";
import fs from "fs";
import got from "got";

const router = Router();

router.get("/", async (req, res) => {
  const url = req.query.url as string;
  if (!url) {
    return res.status(400).send("Missing url parameter");
  }

  const filename = path.basename(url.split("?")[0]);
  const filePath = path.join(__dirname, "../../../downloads", filename);
  const fileStream = fs.createWriteStream(filePath);

  try {
    got.stream(url).pipe(fileStream);
    fileStream.on("finish", () => res.download(filePath));
  } catch (error) {
    res.status(500).send("Error downloading file");
  }
});

export default router;
