import {
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
    client = new NotDiscriminatedClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  const validBody: Siamese = { name: "abc", age: 32, smart: true };
  it("should get valid", async () => {
    const result = await client.getValid();
    assert.deepEqual(result, validBody);
  });

  it("should put valid", async () => {
    const result = await client.putValid(validBody);
    assert.deepEqual(result, validBody);
  });

  it("should post valid", async () => {
    const result = await client.postValid(validBody);
    assert.isUndefined(result);
  });
});
