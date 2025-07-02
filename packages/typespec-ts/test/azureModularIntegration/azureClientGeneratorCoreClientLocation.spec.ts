import { ClientLocationClient } from "./generated/azure/client-generator-core/client-location/src/index.js";

describe("Azure ClientGeneratorCore Client Location", () => {
  let client: ClientLocationClient;

  beforeEach(() => {
    client = new ClientLocationClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  describe("Move to Existing Sub Client", () => {
    it("should get user via userOperations", async () => {
      await client.moveToExistingSubClient.userOperations.getUser();
    });

    it("should delete user via adminOperations", async () => {
      await client.moveToExistingSubClient.adminOperations.deleteUser();
    });

    it("should get admin info via adminOperations", async () => {
      await client.moveToExistingSubClient.adminOperations.getAdminInfo();
    });
  });

  describe("Move to New Sub Client", () => {
    it("should list products via productOperations", async () => {
      await client.moveToNewSubClient.productOperations.listProducts();
    });

    it("should archive product via archiveOperations", async () => {
      await client.archiveOperations.archiveProduct();
    });
  });

  describe("Move to Root Client", () => {
    it("should get resource via resourceOperations", async () => {
      await client.moveToRootClient.resourceOperations.getResource();
    });

    it("should get health status on root client", async () => {
      await client.getHealthStatus();
    });
  });
});
