import NotDiscriminatedClientFactory, {
  NotDiscriminatedClient,
  Siamese
} from "./generated/type/model/inheritance/not-discriminated/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("NotDiscriminatedClient Rest Client", () => {
  let client: NotDiscriminatedClient;

  beforeEach(() => {
    client = NotDiscriminatedClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  const validBody: Siamese = { name: "abc", age: 32, smart: true };
  it("should get valid", async () => {
    const result = await client
      .path("/type/model/inheritance/not-discriminated/valid")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validBody);
  });

  it("should put valid", async () => {
    const result = await client
      .path("/type/model/inheritance/not-discriminated/valid")
      .put({ body: validBody });
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validBody);
  });

  it("should post valid", async () => {
    const result = await client
      .path("/type/model/inheritance/not-discriminated/valid")
      .post({ body: validBody });
    assert.strictEqual(result.status, "204");
  });
});
