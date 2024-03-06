import { Client } from "@azure-rest/core-client";
import ServiceDefaultClientFactory, {
  ServiceClient as ServiceDefaultClient
} from "./generated/client/structure/default/src/index.js";
import ServiceMultiClientFactory, {
  ServiceClient as ServiceMultiClient
} from "./generated/client/structure/multi-client/src/index.js";
import ServiceRenamedClientFactory, {
  ServiceClient as ServiceRenamedClient
} from "./generated/client/structure/renamed-operation/src/index.js";
import ServiceTwoOpGroupClientFactory, {
  ServiceClient as ServiceTwoOpGroupClient
} from "./generated/client/structure/two-operation-group/src/index.js";
import { assert } from "chai";
describe("ClientStructureClient Rest Client", () => {
  let client0: ServiceDefaultClient;
  let client1: ServiceMultiClient;
  let client2: ServiceRenamedClient;
  let client3: ServiceTwoOpGroupClient;
  let clientArray: Client[];

  beforeEach(() => {
    client0 = ServiceDefaultClientFactory("http://localhost:3000", "default", {
      allowInsecureConnection: true
    });
    client1 = ServiceMultiClientFactory(
      "http://localhost:3000",
      "multi-client",
      {
        allowInsecureConnection: true
      }
    );
    client2 = ServiceRenamedClientFactory(
      "http://localhost:3000",
      "renamed-operation",
      {
        allowInsecureConnection: true
      }
    );
    client3 = ServiceTwoOpGroupClientFactory(
      "http://localhost:3000",
      "two-operation-group",
      {
        allowInsecureConnection: true
      }
    );
    clientArray = new Array(...[client0, client1, client2, client3]);
  });

  it("should call operation one correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/one").post();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation two correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/two").post();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation three correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/three").post();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation four correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/four").post();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation five correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/five").post();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation six correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/six").post();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation seven correctly", async () => {
      try {
        const result = await client0.path("/seven").post();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
  });

  it("should call operation eight correctly", async () => {
    try {
      const result = await client0.path("/eight").post();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation nine correctly", async () => {
    try {
      const result = await client0.path("/nine").post();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
