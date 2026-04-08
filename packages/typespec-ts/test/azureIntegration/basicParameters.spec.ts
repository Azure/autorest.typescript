import { describe, it, beforeEach, assert } from "vitest";

import ParametersBasicClientFactory, {
  BasicClient
} from "./generated/parameters/basic/src/index.js";
describe("Basic Rest Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = ParametersBasicClientFactory({ allowInsecureConnection: true });
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
