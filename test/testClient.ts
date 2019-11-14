import { get } from "http";

export const ping = (expect: boolean): Promise<boolean> => {
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
    get(options, response => {
      let data = "";
      response.on("data", (chunk: Buffer) => {
        data += chunk;
      });

      response.on("end", () => {
        resolve(/true/i.test(data));
      });

      response.on("error", (error: Error) => {
        console.error(`Error while fetching ${error}`);
        reject(error);
      });
    });
  });
};
