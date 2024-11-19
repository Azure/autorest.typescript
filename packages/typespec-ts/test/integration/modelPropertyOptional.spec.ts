import TypePropertyOptionalClientFactory, {
  OptionalClient
} from "./generated/type/property/optionality/src/index.js";
import { assert } from "chai";

describe("ModelsPropertyOptional Rest Client", () => {
  let client: OptionalClient;

  beforeEach(() => {
    client = TypePropertyOptionalClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should get all string", async () => {
    const result = await client
      .path("/type/property/optional/string/all")
      .get();

    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, "hello");
  });

  it("should get default string", async () => {
    const result = await client
      .path("/type/property/optional/string/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all string", async () => {
    const result = await client
      .path("/type/property/optional/string/all")
      .put({
        body: { property: "hello" }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default string", async () => {
    const result = await client
      .path("/type/property/optional/string/default")
      .put({ body: {} });
    assert.strictEqual(result.status, "204");
  });

  it("should get all bytes", async () => {
    const result = await client
      .path("/type/property/optional/bytes/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, "aGVsbG8sIHdvcmxkIQ==");
  });

  it("should get default bytes", async () => {
    const result = await client
      .path("/type/property/optional/bytes/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all bytes", async () => {
    const result = await client
      .path("/type/property/optional/bytes/all")
      .put({
        body: { property: "aGVsbG8sIHdvcmxkIQ==" }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default bytes", async () => {
    const result = await client
      .path("/type/property/optional/bytes/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all datetime", async () => {
    const result = await client
      .path("/type/property/optional/datetime/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, "2022-08-26T18:38:00Z");
  });

  it("should get default datetime", async () => {
    const result = await client
      .path("/type/property/optional/datetime/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all datetime", async () => {
    const result = await client
      .path("/type/property/optional/datetime/all")
      .put({
        body: { property: "2022-08-26T18:38:00Z" }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default datetime", async () => {
    const result = await client
      .path("/type/property/optional/datetime/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all duration", async () => {
    const result = await client
      .path("/type/property/optional/duration/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, "P123DT22H14M12.011S");
  });

  it("should get default duration", async () => {
    const result = await client
      .path("/type/property/optional/duration/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all duration", async () => {
    const result = await client
      .path("/type/property/optional/duration/all")
      .put({
        body: { property: "P123DT22H14M12.011S" }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default duration", async () => {
    const result = await client
      .path("/type/property/optional/duration/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all plainDate", async () => {
    const result = await client
      .path("/type/property/optional/plainDate/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, "2022-12-12");
  });

  it("should get default plainDate", async () => {
    const result = await client
      .path("/type/property/optional/plainDate/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all plainDate", async () => {
    const result = await client
      .path("/type/property/optional/plainDate/all")
      .put({
        body: { property: "2022-12-12" }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default plainDate", async () => {
    const result = await client
      .path("/type/property/optional/plainDate/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all plainTime", async () => {
    const result = await client
      .path("/type/property/optional/plainTime/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, "13:06:12");
  });

  it("should get default plainTime", async () => {
    const result = await client
      .path("/type/property/optional/plainTime/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all plainTime", async () => {
    const result = await client
      .path("/type/property/optional/plainTime/all")
      .put({
        body: { property: "13:06:12" }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default plainTime", async () => {
    const result = await client
      .path("/type/property/optional/plainTime/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all collections bytes", async () => {
    const result = await client
      .path("/type/property/optional/collections/bytes/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property?.length, 2);
  });

  it("should get default collections bytes", async () => {
    const result = await client
      .path("/type/property/optional/collections/bytes/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all collections bytes", async () => {
    const result = await client
      .path("/type/property/optional/collections/bytes/all")
      .put({
        body: { property: ["aGVsbG8sIHdvcmxkIQ==", "aGVsbG8sIHdvcmxkIQ=="] }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default collections bytes", async () => {
    const result = await client
      .path("/type/property/optional/collections/bytes/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all collections model", async () => {
    const result = await client
      .path("/type/property/optional/collections/model/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property?.length, 2);
  });

  it("should get default collections model", async () => {
    const result = await client
      .path("/type/property/optional/collections/model/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all collections model", async () => {
    const result = await client
      .path("/type/property/optional/collections/model/all")
      .put({
        body: { property: [{ property: "hello" }, { property: "world" }] }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default collections model", async () => {
    const result = await client
      .path("/type/property/optional/collections/model/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all string literal", async () => {
    const result = await client
      .path("/type/property/optional/string/literal/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, "hello");
  });

  it("should get default string literal", async () => {
    const result = await client
      .path("/type/property/optional/string/literal/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all string literal", async () => {
    const result = await client
      .path("/type/property/optional/string/literal/all")
      .put({
        body: { property: "hello" }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default string literal", async () => {
    const result = await client
      .path("/type/property/optional/string/literal/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all int literal", async () => {
    const result = await client
      .path("/type/property/optional/int/literal/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, 1);
  });

  it("should get default int literal", async () => {
    const result = await client
      .path("/type/property/optional/int/literal/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all int literal", async () => {
    const result = await client
      .path("/type/property/optional/int/literal/all")
      .put({
        body: { property: 1 }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default int literal", async () => {
    const result = await client
      .path("/type/property/optional/int/literal/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all float literal", async () => {
    const result = await client
      .path("/type/property/optional/float/literal/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, 1.25);
  });

  it("should get default float literal", async () => {
    const result = await client
      .path("/type/property/optional/float/literal/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all float literal", async () => {
    const result = await client
      .path("/type/property/optional/float/literal/all")
      .put({
        body: { property: 1.25 }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default float literal", async () => {
    const result = await client
      .path("/type/property/optional/float/literal/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all boolean literal", async () => {
    const result = await client
      .path("/type/property/optional/boolean/literal/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, true);
  });

  it("should get default boolean literal", async () => {
    const result = await client
      .path("/type/property/optional/boolean/literal/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all boolean literal", async () => {
    const result = await client
      .path("/type/property/optional/boolean/literal/all")
      .put({
        body: { property: true }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default boolean literal", async () => {
    const result = await client
      .path("/type/property/optional/boolean/literal/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all union string literal", async () => {
    const result = await client
      .path("/type/property/optional/union/string/literal/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, "world");
  });

  it("should get default union string literal", async () => {
    const result = await client
      .path("/type/property/optional/union/string/literal/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all union string literal", async () => {
    const result = await client
      .path("/type/property/optional/union/string/literal/all")
      .put({
        body: { property: "world" }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default union string literal", async () => {
    const result = await client
      .path("/type/property/optional/union/string/literal/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all union int literal", async () => {
    const result = await client
      .path("/type/property/optional/union/int/literal/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, 2);
  });

  it("should get default union int literal", async () => {
    const result = await client
      .path("/type/property/optional/union/int/literal/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all union int literal", async () => {
    const result = await client
      .path("/type/property/optional/union/int/literal/all")
      .put({
        body: { property: 2 }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default union int literal", async () => {
    const result = await client
      .path("/type/property/optional/union/int/literal/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get all union float literal", async () => {
    const result = await client
      .path("/type/property/optional/union/float/literal/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.property, 2.375);
  });

  it("should get default union float literal", async () => {
    const result = await client
      .path("/type/property/optional/union/float/literal/default")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, {});
  });

  it("should put all union float literal", async () => {
    const result = await client
      .path("/type/property/optional/union/float/literal/all")
      .put({
        body: { property: 2.375 }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put default union float literal", async () => {
    const result = await client
      .path("/type/property/optional/union/float/literal/default")
      .put({
        body: {}
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get models that will return all properties in the model", async () => {
    const result = await client
      .path("/type/property/optional/requiredAndOptional/all")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.optionalProperty, "hello");
    assert.strictEqual(result.body.requiredProperty, 42);
  });

  it("should get models that will return only the required properties", async () => {
    const result = await client
      .path("/type/property/optional/requiredAndOptional/requiredOnly")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.requiredProperty, 42);
  });

  it("should put a body with all properties present", async () => {
    const result = await client
      .path("/type/property/optional/requiredAndOptional/all")
      .put({
        body: {
          requiredProperty: 42,
          optionalProperty: "hello"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put a body with only required properties", async () => {
    const result = await client
      .path("/type/property/optional/requiredAndOptional/requiredOnly")
      .put({
        body: {
          requiredProperty: 42
        }
      });
    assert.strictEqual(result.status, "204");
  });
});
