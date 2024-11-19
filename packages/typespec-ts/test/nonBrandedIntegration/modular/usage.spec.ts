import { UsageClient } from "./generated/models/usage/src/index.js";
import { assert } from "chai";
import {
  UsageContext,
  createUsage,
  input,
  inputAndOutput,
  output
} from "./generated/models/usage/src/api/index.js";
const EXPECTED_VALUE = "example-value";
describe("UsageContext Classical Client", () => {
  let client: UsageClient;

  beforeEach(() => {
    client = new UsageClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3004"
    });
  });

  it("should input", async () => {
    try {
      const result = await client.input({ requiredProp: EXPECTED_VALUE });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should output", async () => {
    try {
      const result = await client.output();
      assert.isNotNull(result);
      assert.strictEqual(result.requiredProp, EXPECTED_VALUE);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should inputAndOutput", async () => {
    try {
      const result = await client.inputAndOutput({
        requiredProp: EXPECTED_VALUE
      });
      assert.isNotNull(result);
      assert.strictEqual(result.requiredProp, EXPECTED_VALUE);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

describe("UsageContext API Operations", () => {
  let context: UsageContext;

  beforeEach(() => {
    context = createUsage({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3004"
    });
  });

  it("should input", async () => {
    try {
      const result = await input(context, { requiredProp: EXPECTED_VALUE });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should inputAndOutput", async () => {
    try {
      const result = await inputAndOutput(context, {
        requiredProp: EXPECTED_VALUE
      });
      assert.isNotNull(result);
      assert.strictEqual(result.requiredProp, EXPECTED_VALUE);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should output", async () => {
    try {
      const result = await output(context);
      assert.isNotNull(result);
      assert.strictEqual(result.requiredProp, EXPECTED_VALUE);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
