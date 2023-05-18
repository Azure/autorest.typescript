import { assert } from "chai";
import OverloadTestFactory, {
  OverloadTestClient
} from "./generated/overload/src/index.js";
describe("OverloadTest Rest Client", () => {
  let client: OverloadTestClient;

  beforeEach(() => {
    client = OverloadTestFactory("http://fake-url.con", {
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
