import { assert } from "chai";
import SharedRouteTestClientFactory, {
  SharedRouteClient
} from "./generated/shared-route/src/index.js";
describe("SharedRouteTest Rest Client", () => {
  let client: SharedRouteClient;

  beforeEach(() => {
    client = SharedRouteTestClientFactory("http://fake-url.com", {
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
