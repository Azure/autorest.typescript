import { assert } from "chai";
import SharedRouteTestClientFactory, {
  SharedRouteTestClient
} from "./generated/sharedRoute/src/index.js";
describe("SharedRouteTest Rest Client", () => {
  let client: SharedRouteTestClient;

  beforeEach(() => {
    client = SharedRouteTestClientFactory("http://fake-url.con", {
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
