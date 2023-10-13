import {
  NotDiscriminatedClient,
  Siamese
} from "./generated/models/inheritance/not-discriminated/src/index.js";
import { assert } from "chai";

describe("NotDiscriminatedClient Rest Client", () => {
  let client: NotDiscriminatedClient;

  beforeEach(() => {
    client = new NotDiscriminatedClient({
      allowInsecureConnection: true
    });
  });

  const validBody: Siamese = { name: "abc", age: 32, smart: true };
  it("should get valid", async () => {
    try {
      const result = await client.getValid();
      assert.deepEqual(result, validBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put valid", async () => {
    try {
      const result = await client.putValid(validBody);
      assert.deepEqual(result, validBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post valid", async () => {
    try {
      const result = await client.postValid(validBody);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
