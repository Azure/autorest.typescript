import {
  ClientAClient,
  ClientBClient
} from "./generated/client/structure/multi-client/src/index.js";
import { assert } from "chai";
describe("Client Structure Multi-Client Rest Client", () => {
  let clientA: ClientAClient;
  let clientB: ClientBClient;

  beforeEach(() => {
    clientA = new ClientAClient("http://localhost:3002", "multi-client", {
      allowInsecureConnection: true
    });
    clientB = new ClientBClient("http://localhost:3002", "multi-client", {
      allowInsecureConnection: true
    });
  });

  it("should call operation one correctly", async () => {
    try {
      const result = await clientA.renamedOne();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation two correctly", async () => {
    try {
      const result = await clientB.renamedTwo();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation three correctly", async () => {
    try {
      const result = await clientA.renamedThree();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation four correctly", async () => {
    try {
      const result = await clientB.renamedFour();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation five correctly", async () => {
    try {
      const result = await clientA.renamedFive();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation six correctly", async () => {
    try {
      const result = await clientB.renamedSix();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
