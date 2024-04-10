import NotDiscriminatedClientFactory, {
  NotDiscriminatedClient,
  Siamese
} from "./generated/models/inheritance-not-discriminated/src/index.js";
import { assert } from "chai";

describe("NotDiscriminatedClient Rest Client", () => {
  let client: NotDiscriminatedClient;

  beforeEach(() => {
    client = NotDiscriminatedClientFactory({
      allowInsecureConnection: true
    });
  });

  const validBody: Siamese = { name: "abc", age: 32, smart: true };
  it("should get valid", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/not-discriminated/valid")
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, validBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put valid", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/not-discriminated/valid")
        .put({ body: validBody });
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, validBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post valid", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/not-discriminated/valid")
        .post({ body: validBody });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
