import { spawn } from "node:child_process";

process.env.WRANGLER_LOG_PATH ??= ".wrangler/wrangler.log";

const command = process.argv[2];
const allowedCommands = new Set(["dev", "build", "start"]);

if (!allowedCommands.has(command)) {
  throw new Error("Use: node scripts/run-vinext.mjs <dev|build|start>");
}

const child = spawn(
  process.execPath,
  ["./node_modules/vinext/dist/cli.js", command],
  {
    env: process.env,
    stdio: "inherit",
  },
);

child.on("error", (error) => {
  throw error;
});

child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
