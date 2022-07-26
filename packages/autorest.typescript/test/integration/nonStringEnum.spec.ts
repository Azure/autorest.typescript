import { NonStringEnumClient } from "./generated/nonStringEnum/src";
import { assert } from "chai";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("Swagger that needs no mapper", () => {
  let client: NonStringEnumClient;
  beforeEach(() => {
    client = new NonStringEnumClient({ allowInsecureConnection: true });
  });

  it("should handle float with get", async () => {
    const result = await client.float.get();
    assert.equal(result.body, 429.1);
  });

  it("should handle int with get", async () => {
    const result = await client.int.get();
    assert.equal(result.body, 429);
  });

  it("should handle float with put", async () => {
    await client.float.put({
      ...responseStatusChecker,
      input: 200.4
    });
  });

  it("should handle int with put", async () => {
    await client.int.put({
      ...responseStatusChecker,
      input: 200
    });
  });
});
