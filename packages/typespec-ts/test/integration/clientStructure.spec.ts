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
describe("BodyOptionalityClient Rest Client", () => {
  let client0: ServiceDefaultClient;
  let client1: ServiceMultiClient;
  let client2: ServiceRenamedClient;
  let client3: ServiceTwoOpGroupClient;
  let clientArray: Client[];

  beforeEach(() => {
    client0 = ServiceDefaultClientFactory("default", {
      allowInsecureConnection: true
    });
    client1 = ServiceMultiClientFactory("multi-client", {
      allowInsecureConnection: true
    });
    client2 = ServiceRenamedClientFactory("renamed-operation", {
      allowInsecureConnection: true
    });
    client3 = ServiceTwoOpGroupClientFactory("two-operation-group", {
      allowInsecureConnection: true
    })
    clientArray.push(...[client0, client1, client2, client3]);
  });

  it("should call operation one correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/one").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation two correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/two").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation three correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/three").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation four correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/four").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation five correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/five").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });

  it("should call operation six correctly", async () => {
    for (const client of clientArray) {
      try {
        const result = await client.path("/six").get();
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }
  });
});
