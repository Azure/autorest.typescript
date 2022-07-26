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
      const result = await client.path("/serviceDriven/parameters").head();

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

      const result2 = await client
        ./*@version-tolerance:update-only*/ pathUnchecked(
          "/serviceDriven/parameters"
        )
        .post({
          body: "http://example.org/myimage.jpeg",
          contentType: "image/jpeg"
        });

      assert.equal(result2.status, "200");
    });

    it("Query parameters with more optional param", async () => {
      const result = await client.path("/serviceDriven/moreParameters").get();
      assert.equal(result.status, "200");
    });

    it("Add a new delete operation", async () => {
      const result = await client
        ./*@version-tolerance:update-only*/ pathUnchecked(
          "/serviceDriven/parameters"
        )
        .delete();

      assert.equal(result.status, "204");
    });

    it("Add a new operation path", async () => {
      const result = await client
        ./*@version-tolerance:update-only*/ pathUnchecked(
          "/serviceDriven/newPath"
        )
        .get();

      assert.equal(result.status, "200");
    });

    it("Call glass breaker", async () => {
      const result = await client
        .pathUnchecked("/servicedriven/glassbreaker")
        .get();
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
      const result = await client.params.headNoParams();

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

      /** @version-tolerance:update-only-start
        const result2 = await client.params.postParameters({
        body: "http://example.org/myimage.jpeg",
        contentType: "image/jpeg"
      });
      assert.equal(result2.status, "200");
    @version-tolerance:update-only-end **/
    });

    it("Query parameters with more optional param", async () => {
      const result = await client.params.getOptional();
      assert.equal(result.status, "200");
    });

    /** @version-tolerance:update-only-start
    it("Add a new operation", async () => {
      const result = await client.params.deleteParameters();

      assert.equal(result.status, "204");
    });
    @version-tolerance: update-only-end **/

    /** @version-tolerance:update-only-start
    it("Add a new operation path", async () => {
      const result = await client.params.getNewOperation();

      assert.equal(result.status, "200");
    });
    @version-tolerance:update-only-end **/
  });
});
