import { TwoOperationGroupClient } from "./generated/client/structure/two-operation-group/src/index.js";
import { assert } from "chai";
describe("Client Structure Two-Operation-Group Rest Client", () => {
  let client: TwoOperationGroupClient;

  beforeEach(() => {
    client = new TwoOperationGroupClient(
      "http://localhost:3006",
      "two-operation-group",
      {
        allowInsecureConnection: true
      }
    );
  });

  it("should call operation one correctly", async () => {
    const result = await client.group1.one();
    assert.strictEqual(result, undefined);
  });

  it("should call operation two correctly", async () => {
    const result = await client.group2.two();
    assert.strictEqual(result, undefined);
  });

  it("should call operation three correctly", async () => {
    const result = await client.group1.three();
    assert.strictEqual(result, undefined);
  });

  it("should call operation four correctly", async () => {
    const result = await client.group1.four();
    assert.strictEqual(result, undefined);
  });

  it("should call operation five correctly", async () => {
    const result = await client.group2.five();
    assert.strictEqual(result, undefined);
  });

  it("should call operation six correctly", async () => {
    const result = await client.group2.six();
    assert.strictEqual(result, undefined);
  });
});
