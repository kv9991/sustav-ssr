const Bundler = require("parcel-bundler");
const path = require("path");
// const { execSync } = require("child_process");

const clientBundle = new Bundler(
  [path.join(__dirname, "../client/index.html")],
  {
    outDir: "./dist/client",
    watch: process.env.PARCEL_WATCH == 1,
    target: "browser",
    publicUrl: "/static",
    detailedReport: true
  }
);

clientBundle.bundle();
