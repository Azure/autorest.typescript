import ParametersSpreadClientFactory, {
  SpreadClient
} from "./generated/parameters/spread/src/index.js";
import { assert } from "chai";
describe("HelloClient Rest Client", () => {
  let client: SpreadClient;

  beforeEach(() => {
    client = ParametersSpreadClientFactory({
      endpoint: "http://localhost:3005",
      allowInsecureConnection: true
    });
  });

  it("should spread named model", async () => {
    const result = await client
      .path("/parameters/spread/model/request-body")
      .put({
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should spread model composite request only with body param", async () => {
    const result = await client
      .path("/parameters/spread/model/composite-request-only-with-body")
      .put({
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should spread model composite request without body param", async () => {
    const result = await client
      .path(
        "/parameters/spread/model/composite-request-without-body/{name}",
        "foo"
      )
      .put({ headers: { "test-header": "bar" } });
    assert.strictEqual(result.status, "204");
  });

  it("should spread model composite request", async () => {
    const result = await client
      .path("/parameters/spread/model/composite-request/{name}", "foo")
      .put({
        headers: { "test-header": "bar" },
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should spread model composite request mix", async () => {
    const result = await client
      .path("/parameters/spread/model/composite-request-mix/{name}", "foo")
      .put({
        headers: { "test-header": "bar" },
        body: {
          prop: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should spread alias with only body param", async () => {
    const result = await client
      .path("/parameters/spread/alias/request-body")
      .put({
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should spread alias with mixed params", async () => {
    const result = await client
      .path("/parameters/spread/alias/request-parameter/{id}", "1")
      .put({
        body: {
          name: "foo"
        },
        headers: {
          "x-ms-test-header": "bar"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should spread alias with more than 5 params", async () => {
    const result = await client
      .path("/parameters/spread/alias/multiple-parameters/{id}", "1")
      .put({
        body: {
          requiredString: "foo",
          optionalInt: 1,
          requiredIntList: [1, 2],
          optionalStringList: ["foo", "bar"]
        },
        headers: {
          "x-ms-test-header": "bar"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should spread alias with inner-model-parameter", async () => {
    const result = await client
      .path("/parameters/spread/alias/inner-model-parameter/{id}", "1")
      .post({
        body: { name: "foo" },
        headers: {
          "x-ms-test-header": "bar"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should spread alias with inner-alias-parameter", async () => {
    const result = await client
      .path("/parameters/spread/alias/inner-alias-parameter/{id}", "1")
      .post({
        body: { name: "foo", age: 1 },
        headers: {
          "x-ms-test-header": "bar"
        }
      });
    assert.strictEqual(result.status, "204");
  });
});
