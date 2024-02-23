import { assert } from "chai";
import ClientEncodedNameClientFactory, {
  ClientEncodedNameClient
} from "./generated/projection/client-encoded-name/src/index.js";
describe("ClientEncodedNameClient Rest Client", () => {
  let client: ClientEncodedNameClient;

  beforeEach(() => {
    client = ClientEncodedNameClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with property json", async () => {
    try {
      const result = await client
        .path("/projection/client-name-and-encoded-name/property/json")
        .post({
          body: { wireName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property client", async () => {
    try {
      const result = await client
        .path("/projection/client-name-and-encoded-name/property/client")
        .post({
          body: { defaultName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property language", async () => {
    try {
      const result = await client
        .path("/projection/client-name-and-encoded-name/property/language")
        .post({
          body: { defaultName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property jsonAndClient", async () => {
    try {
      const result = await client
        .path(
          "/projection/client-name-and-encoded-name/property/json-and-client"
        )
        .post({
          body: { wireName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with operation", async () => {
    try {
      const result = await client
        .path("/projection/client-name-and-encoded-name/operation")
        .post();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with parameter", async () => {
    try {
      const result = await client
        .path("/projection/client-name-and-encoded-name/parameter")
        .post({
          queryParameters: { defaultName: "true" }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with header", async () => {
    try {
      const result = await client
        .path("/projection/client-name-and-encoded-name/header")
        .post({
          headers: { "default-name": "true" }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with model client", async () => {
    try {
      const result = await client
        .path("/projection/client-name-and-encoded-name/model/client")
        .post({
          body: { defaultName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with model language", async () => {
    try {
      const result = await client
        .path("/projection/client-name-and-encoded-name/model/language")
        .post({
          body: { defaultName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
