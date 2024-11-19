import {
  FirstClient,
  SecondClient
} from "./generated/client/structure/client-operation-group/src/index.js";
import { assert } from "chai";
describe("Client Structure Operation Group Rest Client", () => {
  let client1: FirstClient;
  let client2: SecondClient;

  beforeEach(() => {
    client1 = new FirstClient("http://localhost:3002", "default", {
      allowInsecureConnection: true
    });
    client2 = new SecondClient("http://localhost:3002", "default", {
      allowInsecureConnection: true
    });
  });

  it("should call operation one correctly", async () => {
    const result = await client1.one();
    assert.strictEqual(result, undefined);
  });

  it("should call operation two correctly", async () => {
    const result = await client1.group3.two();
    assert.strictEqual(result, undefined);
  });

  it("should call operation three correctly", async () => {
    const result = await client1.group3.three();
    assert.strictEqual(result, undefined);
  });

  it("should call operation four correctly", async () => {
    const result = await client1.group4.four();
    assert.strictEqual(result, undefined);
  });

  it("should call operation five correctly", async () => {
    const result = await client2.five();
    assert.strictEqual(result, undefined);
  });

  it("should call operation six correctly", async () => {
    const result = await client2.group5.six();
    assert.strictEqual(result, undefined);
  });
});
