import { assert } from "chai";
import ClientLocationClientFactory, {
  ClientLocationClient
} from "./generated/azure/client-generator-core/client-location/src/index.js";

describe("Azure Client Generator Core Client Location", () => {
  let client: ClientLocationClient;

  beforeEach(() => {
    client = ClientLocationClientFactory({
      allowInsecureConnection: true
    });
  });

  describe("Move to Existing Sub Client", () => {
    it("should get user", async () => {
      const response = await client
        .path("/azure/client-generator-core/client-location/user")
        .get();

      assert.strictEqual(response.status, "204");
    });

    it("should delete user", async () => {
      const response = await client
        .path("/azure/client-generator-core/client-location/user")
        .delete();

      assert.strictEqual(response.status, "204");
    });

    it("should get admin info", async () => {
      const response = await client
        .path("/azure/client-generator-core/client-location/admin")
        .get();

      assert.strictEqual(response.status, "204");
    });
  });

  describe("Move to New Sub Client", () => {
    it("should list products", async () => {
      const response = await client
        .path("/azure/client-generator-core/client-location/products")
        .get();

      assert.strictEqual(response.status, "204");
    });

    it("should archive product", async () => {
      const response = await client
        .path("/azure/client-generator-core/client-location/products/archive")
        .post();

      assert.strictEqual(response.status, "204");
    });
  });

  describe("Move to Root Client", () => {
    it("should get resource", async () => {
      const response = await client
        .path("/azure/client-generator-core/client-location/resource")
        .get();

      assert.strictEqual(response.status, "204");
    });

    it("should get health status", async () => {
      const response = await client
        .path("/azure/client-generator-core/client-location/health")
        .get();

      assert.strictEqual(response.status, "204");
    });
  });
});
