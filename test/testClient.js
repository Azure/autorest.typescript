const http = require("http");

exports.ping = function(expect) {
  const options = {
    host: "localhost",
    port: 3000,
    path: `bool/${expect}`,
    json: true,
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    }
  };
  return new Promise((resolve, reject) => {
    http.get(options, response => {
      let data = "";
      response.on("data", chunk => {
        data += chunk;
      });

      response.on("end", () => {
        resolve(/true/i.test(data));
      });

      response.on("error", error => {
        console.error(`Error while fetching ${error}`);
        reject(error);
      });
    });
  });
};
