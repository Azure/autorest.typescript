import { assert } from "chai";
import SharedRouteTestClientFactory, {
  SharedRouteClient
} from "./generated/shared-route/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("SharedRouteTest Rest Client", () => {
  let client: SharedRouteClient;

  beforeEach(() => {
    client = SharedRouteTestClientFactory("http://fake-url.com", {
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("client should be created", async () => {
    assert.isNotNull(client);
  });
});
