import { assert } from "chai";
import MediaTypesClientFactory, {
  MediaTypesClient
} from "./generated/media-types/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("MediaTypes Rest Client", () => {
  let client: MediaTypesClient;

  beforeEach(() => {
    client = MediaTypesClientFactory("http://fake-url.com", {
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("client should be created", async () => {
    assert.isNotNull(client);
  });
});
