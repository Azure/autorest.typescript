import { assert } from "chai";
import MediaTypesClientFactory, {
  MediaTypesClient
} from "./generated/media-types/src/index.js";
describe("MediaTypes Rest Client", () => {
  let client: MediaTypesClient;

  beforeEach(() => {
    client = MediaTypesClientFactory("http://fake-url.com", {
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("client should be created", async () => {
    assert.isNotNull(client);
  });
});
