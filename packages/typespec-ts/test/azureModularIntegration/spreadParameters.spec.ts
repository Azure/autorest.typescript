import { SpreadClient } from "./generated/parameters/spread/src/index.js";
import { assert } from "chai";
describe("SpreadClient Client", () => {
  let client: SpreadClient;

  beforeEach(() => {
    client = new SpreadClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  it("should spread named model", async () => {
    const result = await client.model.spreadAsRequestBody("foo");
    assert.isUndefined(result);
  });

  it("should spread alias with only body param", async () => {
    const result = await client.alias.spreadAsRequestBody("foo");
    assert.isUndefined(result);
  });

  it("should spread model composite request only with body", async () => {
    const result = await client.model.spreadCompositeRequestOnlyWithBody({
      name: "foo"
    });
    assert.isUndefined(result);
  });

  it("should spread model composite request without body", async () => {
    const result = await client.model.spreadCompositeRequestWithoutBody(
      "foo",
      "bar"
    );
    assert.isUndefined(result);
  });

  it("should spread model composite request ", async () => {
    const result = await client.model.spreadCompositeRequest("foo", "bar", {
      name: "foo"
    });
    assert.isUndefined(result);
  });

  it("should spread model composite request mix", async () => {
    const result = await client.model.spreadCompositeRequestMix(
      "foo",
      "bar",
      "foo"
    );
    assert.isUndefined(result);
  });

  it("should spread alias with mixed params", async () => {
    const result = await client.alias.spreadAsRequestParameter(
      "1",
      "bar",
      "foo"
    );
    assert.isUndefined(result);
  });

  it("should spread alias with multiple-parameters", async () => {
    const result = await client.alias.spreadWithMultipleParameters(
      "1",
      "bar",
      "foo",
      [1, 2],
      { optionalInt: 1, optionalStringList: ["foo", "bar"] }
    );
    assert.isUndefined(result);
  });

  it("should spread alias with inner-model-parameter", async () => {
    const result = await client.alias.spreadParameterWithInnerModel(
      "1",
      "foo",
      "bar",
    );
    assert.isUndefined(result);
  });

  it("should spread alias with inner-alias-parameter", async () => {
    const result = await client.alias.spreadParameterWithInnerAlias(
      "1",
      "foo",
      1,
      "bar"
    );
    assert.isUndefined(result);
  });
});
