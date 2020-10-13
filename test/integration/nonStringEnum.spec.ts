import { NonStringEnumClient } from "./generated/nonStringEnum/src";
import { assert } from "chai";
describe("Swagger that needs no mapper", () => {
  let client: NonStringEnumClient;
  beforeEach(() => {
    client = new NonStringEnumClient();
  });

  it("should handle float with get", async () => {
    const result = await client.float.get();
    assert.equal(result.body, 429.1);
  });

  it("should handle int with get", async () => {
    const result = await client.int.get();
    assert.equal(result.body, 429);
  });

  // https://github.com/Azure/autorest.typescript/issues/742
  it.skip("should handle float with put", async () => {
    const result = await client.float.put({ input: 200.4 });
    assert.equal(result._response.status, 200);
  });

  // https://github.com/Azure/autorest.typescript/issues/742
  it.skip("should handle int with put", async () => {
    const result = await client.int.put({ input: 200 });
    assert.equal(result._response.status, 200);
  });
});
