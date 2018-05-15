import * as path from "path";
import * as webpackMiddleware from "webpack-dev-middleware";
import webpack = require("webpack");
import express = require("express");
const config: webpack.Configuration = require("../webpack.config");

const port = parseInt(process.env.PORT) || 3000;
const app = express();

if (process.argv.indexOf("--no-webpack") === -1) {
    app.use(webpackMiddleware(webpack(config), {
        publicPath: "/"
    }));
}

app.use(express.static(path.join(__dirname, "../")));
app.use(express.static(path.join(__dirname, "../test/resources/")));

app.post("/fileupload", function(req, res) {
    res.status(200);
    req.pipe(res);
});

app.use(require("@microsoft.azure/autorest.testserver/app"));

app.listen(port, function() {
    console.log(`autorest.typescript testserver listening on port ${port}...`);
});
