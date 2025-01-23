import { UsageClient } from "./generated/type/model/usage/src/index.js";
import { assert } from "chai";
import {
  UsageContext,
  createUsage,
  input,
  inputAndOutput,
  output
} from "./generated/type/model/usage/src/api/index.js";
const EXPECTED_VALUE = "example-value";
describe("UsageContext Classical Client", () => {
  let client: UsageClient;

  beforeEach(() => {
    client = new UsageClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should input", async () => {
    const result = await client.input({ requiredProp: EXPECTED_VALUE });
    assert.isUndefined(result);
  });

  it("should output", async () => {
    const result = await client.output();
    assert.isNotNull(result);
    assert.strictEqual(result.requiredProp, EXPECTED_VALUE);
  });

  it("should inputAndOutput", async () => {
    const result = await client.inputAndOutput({
      requiredProp: EXPECTED_VALUE
    });
    assert.isNotNull(result);
    assert.strictEqual(result.requiredProp, EXPECTED_VALUE);
  });
});

describe("UsageContext API Operations", () => {
  let context: UsageContext;

  beforeEach(() => {
    context = createUsage({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should input", async () => {
    const result = await input(context, { requiredProp: EXPECTED_VALUE });
    assert.isUndefined(result);
  });

  it("should inputAndOutput", async () => {
    const result = await inputAndOutput(context, {
      requiredProp: EXPECTED_VALUE
    });
    assert.isNotNull(result);
    assert.strictEqual(result.requiredProp, EXPECTED_VALUE);
  });

  it("should output", async () => {
    const result = await output(context);
    assert.isNotNull(result);
    assert.strictEqual(result.requiredProp, EXPECTED_VALUE);
  });
});
