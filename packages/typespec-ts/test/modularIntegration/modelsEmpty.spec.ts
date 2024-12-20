import { EmptyClient } from "./generated/type/model/empty/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
const body = {};
describe("Empty Client", () => {
  let client: EmptyClient;

  beforeEach(() => {
    client = new EmptyClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should put empty value", async () => {
    const result = await client.putEmpty(body);
    assert.isUndefined(result);
  });

  it("should get empty value", async () => {
    const result = await client.getEmpty();
    assert.isNotNull(result);
    assert.strictEqual(JSON.stringify(result), JSON.stringify(body));
  });

  it("should post round trip empty value", async () => {
    const result = await client.postRoundTripEmpty(body);
    assert.isNotNull(result);
    assert.strictEqual(JSON.stringify(result), JSON.stringify(body));
  });
});
