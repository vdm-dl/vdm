#!/usr/bin/env node

import { exec } from "child_process";
import path from "path";
import open from "open";

console.log("startin vdm");

exec(`ts-node ${serverPath}`, (err, stdout, stderr) => {
  if (err) console.error(err);
  console.log(stdout);
  console.error(stderr);
});

open("http://localhost:3000");
