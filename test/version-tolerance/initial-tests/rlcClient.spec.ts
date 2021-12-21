import RLCClient, { LLCClientRestClient } from "../generated/llc-initial/src";
import { assert } from "chai";

const phase = "initial";

describe(`RLC Version Tolerance ${phase} phase`, async () => {
  let client: LLCClientRestClient;
  beforeEach(() => {
    client = RLCClient({ allowInsecureConnection: true });
  });
  describe("path", () => {
    it("Query parameter required to optional", async () => {
      const result = await client
        .path("/servicedriven/parameters")
        .get({ queryParameters: { parameter: "foo" } });

      assert.equal(result.status, "200");
    });

    it("Body payload required to optional", async () => {
      const result = await client.path("/servicedriven/parameters").post({
        body: { url: "http://example.org/myimage.jpeg" },
        contentType: "application/json"
      });

      assert.equal(result.status, "200");
    });
  });

  describe("shortcut", () => {
    it("Query parameter required to optional", async () => {
      const result = await client.params.getRequired({
        queryParameters: { parameter: "foo" }
      });
      assert.equal(result.status, "200");
    });

    it("Body payload required to optional", async () => {
      const result = await client.params.postParameters({
        body: { url: "http://example.org/myimage.jpeg" },
        contentType: "application/json"
      });

      assert.equal(result.status, "200");
    });
  });
});
