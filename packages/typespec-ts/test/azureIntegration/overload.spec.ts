import { assert } from "chai";
import OverloadTestFactory, {
  OveralodClient
} from "./generated/overload/src/index.js";
describe("OverloadTest Rest Client", () => {
  let client: OveralodClient;

  beforeEach(() => {
    client = OverloadTestFactory("http://fake-url.com", {
      endpoint: "http://localhost:3005",
      allowInsecureConnection: true
    });
  });

  it("client should be created", async () => {
    assert.isNotNull(client);
  });
});
