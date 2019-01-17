const Bundler = require("parcel-bundler");
const path = require("path");
const { execSync } = require("child_process");

const serverBundler = new Bundler(
  [path.join(__dirname, "../server/index.js")],
  {
    outDir: "./dist/server",
    watch: process.env.PARCEL_WATCH == 1,
    target: "node",
    detailedReport: true
  }
);

serverBundler.on("buildEnd", () => {
  execSync("node index.js");
});

serverBundler.bundle();
