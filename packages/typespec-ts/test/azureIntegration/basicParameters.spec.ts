import ParametersBasicClientFactory, {
  BasicClient
} from "./generated/parameters/basic/src/index.js";
import { assert } from "chai";
describe("Basic Rest Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = ParametersBasicClientFactory({
      endpoint: "http://localhost:3005",
      allowInsecureConnection: true
    });
  });

  it("basic parameters explicit-body simple", async () => {
    const result = await client
      .path("/parameters/basic/explicit-body/simple")
      .put({
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("basic parameters implicit-body simple", async () => {
    const result = await client
      .path("/parameters/basic/implicit-body/simple")
      .put({
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });
});
