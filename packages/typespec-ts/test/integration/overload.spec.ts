import { assert } from "chai";
import OverloadTestFactory, {
  OveralodClient
} from "./generated/overload/src/index.js";
describe("OverloadTest Rest Client", () => {
  let client: OveralodClient;

  beforeEach(() => {
    client = OverloadTestFactory("http://fake-url.com", {
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
