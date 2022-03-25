import DPG, { DPGClient } from "../generated/rlc-initial/src";
import { assert } from "chai";

const phase = "initial";

describe(`RLC Version Tolerance ${phase} phase`, async () => {

  let client: DPGClient;
  beforeEach(() => {
    client = DPG({ allowInsecureConnection: true });
  });
  describe("path", () => {
    it("Query parameter required to optional", async () => {
      const result = await client
        .path("/serviceDriven/parameters")
        .get({ queryParameters: { parameter: "foo" } });

      assert.equal(result.status, "200");
    });

    it("Header request with no param to optional", async () => {
      const result = await client
        .path("/serviceDriven/parameters")
        .head();

      assert.equal(result.status, "200");
    });

    it("Query parameters required to optional", async () => {
      const result = await client.path("/serviceDriven/parameters").put({
        queryParameters: {
          requiredParam: "aaa"
        }
      });

      assert.equal(result.status, "200");
    });


    it("Body payload required to optional", async () => {
      const result = await client.path("/serviceDriven/parameters").post({
        body: { url: "http://example.org/myimage.jpeg" },
        contentType: "application/json"
      });

      assert.equal(result.status, "200");
    });

    it("Query parameters with more optional param", async () => {
      const result = await client.path("/serviceDriven/moreParameters").get();
      assert.equal(result.status, "200");
    });

    it("Call glass breaker", async () => {
      const result = await client.pathUnchecked("/servicedriven/glassbreaker").get();
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

    it("Header request with no param to optional", async () => {
      const result = await client.params.headNoParams()

      assert.equal(result.status, "200");
    });

    it("Query parameters required to optional", async () => {
      const result = await client.params.putRequiredOptional({
        queryParameters: {
          requiredParam: "aaa"
        }
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

    it("Query parameters with more optional param", async () => {
      const result = await client.params.getOptional();
      assert.equal(result.status, "200");
    });
  });
});
