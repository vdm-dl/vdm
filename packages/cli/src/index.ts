#!/usr/bin/env node

import { exec, spawn } from "child_process";
import path from "path";
import open from "open";

console.log("starting vdm CLI");

const serverPath = path.resolve(
  __dirname,
  "..",
  "..",
  "server",
  "src",
  "index.ts"
);

console.log(`server path: ${serverPath}`);

const server = spawn("pnpm", ["--filter", "@vdm/server", "run", "dev"], {
  stdio: "inherit",
  shell: true,
});

server.on("error", (err) => console.error("Failed to spawn server:", err));

server.on("close", (code) =>
  console.log(`Server process exited with code ${code}`)
);

setTimeout(() => {
  open("http://localhost:3000").catch((err) =>
    console.error("Failed to open browser:", err)
  );
}, 2000);

process.on("unhandledRejection", (r) => {
  console.error("Unhandled Rejection:", r);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
