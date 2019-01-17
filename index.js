global.__basedir = __dirname;

if (process.env.NODE_ENV === "production") {
  require("./dist/server/index.js");
} else {
  require("./server/index.js");
}
