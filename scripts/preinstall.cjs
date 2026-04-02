const fs = require("fs");
const path = require("path");

const root = __dirname ? path.resolve(__dirname, "..") : process.cwd();

for (const lockfile of ["package-lock.json", "yarn.lock"]) {
  const filePath = path.join(root, lockfile);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

const userAgent = process.env.npm_config_user_agent || "";

if (!userAgent.startsWith("pnpm/")) {
  console.error("Use pnpm instead");
  process.exit(1);
}
