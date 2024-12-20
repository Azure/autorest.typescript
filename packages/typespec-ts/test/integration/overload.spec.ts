import { assert } from "chai";
import OverloadTestFactory, {
  OveralodClient
} from "./generated/overload/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("OverloadTest Rest Client", () => {
  let client: OveralodClient;

  beforeEach(() => {
    client = OverloadTestFactory("http://fake-url.com", {
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("client should be created", async () => {
    assert.isNotNull(client);
  });
});
