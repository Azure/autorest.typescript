import { RenamedOperationClient } from "./generated/client/structure/renamed-operation/src/index.js";
import { assert } from "chai";
describe("Client Structure Renamed-Operation Rest Client", () => {
  let client: RenamedOperationClient;

  beforeEach(() => {
    client = new RenamedOperationClient(
      "http://localhost:3004",
      "renamed-operation",
      {
        allowInsecureConnection: true
      }
    );
  });

  it("should call operation one correctly", async () => {
    const result = await client.renamedOne();
    assert.strictEqual(result, undefined);
  });

  it("should call operation two correctly", async () => {
    const result = await client.group.renamedTwo();
    assert.strictEqual(result, undefined);
  });

  it("should call operation three correctly", async () => {
    const result = await client.renamedThree();
    assert.strictEqual(result, undefined);
  });

  it("should call operation four correctly", async () => {
    const result = await client.group.renamedFour();
    assert.strictEqual(result, undefined);
  });

  it("should call operation five correctly", async () => {
    const result = await client.renamedFive();
    assert.strictEqual(result, undefined);
  });

  it("should call operation six correctly", async () => {
    const result = await client.group.renamedSix();
    assert.strictEqual(result, undefined);
  });
});
