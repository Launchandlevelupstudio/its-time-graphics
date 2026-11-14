/* node assets/js/check-gallery.js
   Fails if a showcase photo also appears in Our Work, if an excluded
   near-duplicate is in either list, or if the old static grid (id=wg) is back. */
"use strict";
var fs = require("fs");
var path = require("path");
var g = require("./fleet.js");
g.assertGallery();
if (g.overlap.length) {
  console.error("Overlap:", g.overlap.join(", "));
  process.exit(1);
}
if (g.showcaseCount + g.gridCount !== g.catalogCount) {
  console.error("Count mismatch", g.showcaseCount, g.gridCount, g.catalogCount);
  process.exit(1);
}
var root = path.join(__dirname, "..", "..");
var htmlFiles = [];
function walk(dir) {
  fs.readdirSync(dir, {withFileTypes:true}).forEach(function(ent) {
    if (ent.name === "node_modules" || ent.name === "source-assets") return;
    var p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith(".html")) htmlFiles.push(p);
  });
}
walk(root);
var bad = false;
htmlFiles.forEach(function(file) {
  var text = fs.readFileSync(file, "utf8");
  if (/id=["']wg["']/.test(text)) {
    console.error("Old static grid id=wg is still in " + path.relative(root, file));
    bad = true;
  }
});
var ourWork = fs.readFileSync(path.join(root, "our-work", "index.html"), "utf8");
var staticImgs = ourWork.match(/<img[^>]+src="[^"]+"/g) || [];
staticImgs.forEach(function(tag) {
  if (!/logo\.webp/.test(tag)) {
    console.error("our-work/index.html still has a static gallery image:", tag);
    bad = true;
  }
});
var imgDir = path.join(root, "assets", "img");
var srcs = [];
var js = fs.readFileSync(path.join(__dirname, "fleet.js"), "utf8");
var catalog = js.split("var CATALOG = [")[1].split("];")[0];
catalog.replace(/pic\("([^"]+)"/g, function(_, src) { srcs.push(src); return _; });
srcs.forEach(function(src) {
  if (!fs.existsSync(path.join(imgDir, src))) {
    console.error("Missing file:", src);
    bad = true;
  }
});
if (bad) process.exit(1);
console.log("showcase " + g.showcaseCount + " + grid " + g.gridCount + " = " + g.catalogCount + " unique, overlap 0");
