import { assert } from "chai";
import { MoveMethodParameterToClient } from "./generated/azure/client-generator-core/client-location/move-method-parameter-to-client/src/index.js";
import { MoveToExistingSubClient } from "./generated/azure/client-generator-core/client-location/move-to-existing-sub-client/src/index.js";
import { MoveToNewSubClient } from "./generated/azure/client-generator-core/client-location/move-to-new-sub-client/src/index.js";
import { MoveToRootClient } from "./generated/azure/client-generator-core/client-location/move-to-root-client/src/index.js";

describe("Azure ClientGeneratorCore Client Location", () => {
  let client1: MoveMethodParameterToClient;
  let client2: MoveToExistingSubClient;
  let client3: MoveToNewSubClient;
  let client4: MoveToRootClient;

  beforeEach(() => {
    client1 = new MoveMethodParameterToClient("testaccount", {
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
    client2 = new MoveToExistingSubClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
    client3 = new MoveToNewSubClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
    client4 = new MoveToRootClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  describe("Move method Parameter to Client", () => {
    it("should get user via userOperations", async () => {
      const result = await client1.blobOperations.getBlob(
        "testcontainer",
        "testblob.txt"
      );
      assert.strictEqual(result.id, "blob-001");
      assert.strictEqual(result.name, "testblob.txt");
      assert.strictEqual(result.path, "/testcontainer/testblob.txt");
    });
  });
  describe("Move to Existing Sub Client", () => {
    it("should get user via userOperations", async () => {
      await client2.userOperations.getUser();
    });

    it("should delete user via adminOperations", async () => {
      await client2.adminOperations.deleteUser();
    });

    it("should get admin info via adminOperations", async () => {
      await client2.adminOperations.getAdminInfo();
    });
  });

  describe("Move to New Sub Client", () => {
    it("should list products via productOperations", async () => {
      await client3.productOperations.listProducts();
    });

    it("should archive product via archiveOperations", async () => {
      await client3.archiveOperations.archiveProduct();
    });
  });

  describe("Move to Root Client", () => {
    it("should get resource via resourceOperations", async () => {
      await client4.resourceOperations.getResource();
    });

    it("should get health status on root client", async () => {
      await client4.getHealthStatus();
    });
  });
});
