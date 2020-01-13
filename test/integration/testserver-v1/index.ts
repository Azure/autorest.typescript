import * as path from "path";
import * as express from "express";

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "../")));
app.use(express.static(path.join(__dirname, "../test/resources/")));

app.post("/fileupload", function(req, res) {
  res.status(200);
  req.pipe(res);
});

app.use(require("@microsoft.azure/autorest.testserver/legacy/app"));

app.listen(port, function() {
  console.log(`autorest.typescript testserver listening on port ${port}...`);
});
