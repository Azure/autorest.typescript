import { assert } from "chai";
import MoveMethodParameterToClientClientFactory, {
  MoveMethodParameterToClientClient
} from "./generated/azure/client-generator-core/client-location/move-method-parameter-to-client/src/index.js";

import MoveToExistingSubClientClientFactory, {
  MoveToExistingSubClientClient
} from "./generated/azure/client-generator-core/client-location/move-to-existing-sub-client/src/index.js";

import MoveToNewSubClientClientFactory, {
  MoveToNewSubClientClient
} from "./generated/azure/client-generator-core/client-location/move-to-new-sub-client/src/index.js";

import MoveToRootClientClientFactory, {
  MoveToRootClientClient
} from "./generated/azure/client-generator-core/client-location/move-to-root-client/src/index.js";

describe("Azure Client Generator Core Client Location", () => {
  let client1: MoveMethodParameterToClientClient;
  let client2: MoveToExistingSubClientClient;
  let client3: MoveToNewSubClientClient;
  let client4: MoveToRootClientClient;

  beforeEach(() => {
    client1 = MoveMethodParameterToClientClientFactory({
      allowInsecureConnection: true
    });
    client2 = MoveToExistingSubClientClientFactory({
      allowInsecureConnection: true
    });
    client3 = MoveToNewSubClientClientFactory({
      allowInsecureConnection: true
    });
    client4 = MoveToRootClientClientFactory({
      allowInsecureConnection: true
    });
  });
  describe.skip("Move method Parameter to Client", () => {
    it("should move method Parameter to Client", async () => {
      const response = await client1
        .path(
          "/azure/client-generator-core/client-location/move-method-parameter-to-client/blob"
        )
        .get({
          queryParameters: {
            storageAccount: "testaccount",
            container: "testcontainer",
            blob: "testblob.txt"
          }
        });
      console.log(response);
      assert.strictEqual(response.status, "200");
      assert.strictEqual(response.body.id, "blob-001");
      assert.strictEqual(response.body.name, "testblob.txt");
      assert.strictEqual(response.body.path, "/testcontainer/testblob.txt");
    });
  });

  describe("Move to Existing Sub Client", () => {
    it("should get user", async () => {
      const response = await client2
        .path(
          "/azure/client-generator-core/client-location/move-to-existing-sub-client/user"
        )
        .get();

      assert.strictEqual(response.status, "204");
    });

    it("should delete user", async () => {
      const response = await client2
        .path(
          "/azure/client-generator-core/client-location/move-to-existing-sub-client/user"
        )
        .delete();

      assert.strictEqual(response.status, "204");
    });

    it("should get admin info", async () => {
      const response = await client2
        .path(
          "/azure/client-generator-core/client-location/move-to-existing-sub-client/admin"
        )
        .get();

      assert.strictEqual(response.status, "204");
    });
  });

  describe("Move to New Sub Client", () => {
    it("should list products", async () => {
      const response = await client3
        .path(
          "/azure/client-generator-core/client-location/move-to-new-sub-client/products"
        )
        .get();

      assert.strictEqual(response.status, "204");
    });

    it("should archive product", async () => {
      const response = await client3
        .path(
          "/azure/client-generator-core/client-location/move-to-new-sub-client/products/archive"
        )
        .post();

      assert.strictEqual(response.status, "204");
    });
  });

  describe("Move to Root Client", () => {
    it("should get resource", async () => {
      const response = await client4
        .path(
          "/azure/client-generator-core/client-location/move-to-root-client/resource"
        )
        .get();

      assert.strictEqual(response.status, "204");
    });

    it("should get health status", async () => {
      const response = await client4
        .path(
          "/azure/client-generator-core/client-location/move-to-root-client/health"
        )
        .get();

      assert.strictEqual(response.status, "204");
    });
  });
});
