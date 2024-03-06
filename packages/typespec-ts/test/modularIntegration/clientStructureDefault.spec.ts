import { ServiceClient } from "./generated/client/structure/default/src/index.js";
import { assert } from "chai";
describe("Client Structure Default Rest Client", () => {
  let client: ServiceClient;

  beforeEach(() => {
    client = new ServiceClient("http://localhost:3000", "default", {
      allowInsecureConnection: true
    });
  });

  it("should call operation one correctly", async () => {
    try {
      const result = await client.one();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation two correctly", async () => {
    try {
      const result = await client.two();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation three correctly", async () => {
    try {
      const result = await client.foo.three();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation four correctly", async () => {
    try {
      const result = await client.foo.four();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation five correctly", async () => {
    try {
      const result = await client.bar.five();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation six correctly", async () => {
    try {
      const result = await client.bar.six();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation seven correctly", async () => {
    try {
      const result = await client.baz.foo.seven();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation eight correctly", async () => {
    try {
      const result = await client.qux.eight();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should call operation nine correctly", async () => {
    try {
      const result = await client.qux.bar.nine();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
