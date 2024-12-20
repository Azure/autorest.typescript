import RecursiveClientFactory, {
  Extension,
  RecursiveClient
} from "./generated/type/model/inheritance/recursive/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
const body: Extension = {
  level: 0,
  extension: [
    {
      level: 1,
      extension: [
        {
          level: 2
        }
      ]
    },
    {
      level: 1
    }
  ]
};
describe("Recursive Client", () => {
  let client: RecursiveClient;

  beforeEach(() => {
    client = RecursiveClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("Inheritance Recursive put test", async () => {
    const result = await client
      .path("/type/model/inheritance/recursive")
      .put({ body });
    assert.equal(result.status, "204");
  });

  it("Inheritance Recursive get test", async () => {
    const result = await client
      .path("/type/model/inheritance/recursive")
      .get();
    assert.equal(result.status, "200");
  });
});
