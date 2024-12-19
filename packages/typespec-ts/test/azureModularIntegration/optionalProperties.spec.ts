import { assert } from "chai";
import { OptionalClient } from "./generated/type/property/optionality/src/index.js";
import { stringToUint8Array } from "@azure/core-util";

describe("OptionalProperties Modular Client", () => {
  let client: OptionalClient;

  beforeEach(() => {
    client = new OptionalClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should handle optional boolean literal", async () => {
    const result = await client.booleanLiteral.getAll();
    assert.isTrue(result.property);
    const result2 = await client.booleanLiteral.getDefault();
    assert.equal(result2.property, undefined);
    await client.booleanLiteral.putAll({ property: true });
    await client.booleanLiteral.putDefault({});
  });

  it("should handle optional bytes", async () => {
    const result = await client.bytes.getAll();
    assert.deepEqual(
      result.property,
      stringToUint8Array("aGVsbG8sIHdvcmxkIQ==", "base64")
    );
    const result2 = await client.bytes.getDefault();
    assert.equal(result2.property, undefined);

    await client.bytes.putAll({
      property: stringToUint8Array("aGVsbG8sIHdvcmxkIQ==", "base64")
    });

    await client.bytes.putDefault({});
  });

  it("should handle optional collections bytes", async () => {
    const testValue = [
      stringToUint8Array("aGVsbG8sIHdvcmxkIQ==", "base64"),
      stringToUint8Array("aGVsbG8sIHdvcmxkIQ==", "base64")
    ];
    const result = await client.collectionsByte.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.collectionsByte.getDefault();
    assert.equal(result2.property, undefined);
    await client.collectionsByte.putAll({ property: testValue });
    await client.collectionsByte.putDefault({});
  });

  it("should handle optional collections model", async () => {
    const testValue = [{ property: "hello" }, { property: "world" }];
    const result = await client.collectionsModel.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.collectionsModel.getDefault();
    assert.equal(result2.property, undefined);
    await client.collectionsModel.putAll({ property: testValue });
    await client.collectionsModel.putDefault({});
  });

  it("should handle optional datetime", async () => {
    const testValue = new Date("2022-08-26T18:38:00Z");
    const result = await client.datetime.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.datetime.getDefault();
    assert.equal(result2.property, undefined);
    await client.datetime.putAll({ property: testValue });
    await client.datetime.putDefault({});
  });

  it("should handle optional duration", async () => {
    const testValue = "P123DT22H14M12.011S";
    const result = await client.duration.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.duration.getDefault();
    assert.equal(result2.property, undefined);
    await client.duration.putAll({ property: testValue });
    await client.duration.putDefault({});
  });

  it("should handle optional plainDate", async () => {
    const testValue = "2022-12-12";
    const result = await client.plainDate.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.plainDate.getDefault();
    assert.equal(result2.property, undefined);
    const result3 = await client.plainDate.putAll({ property: testValue });
    assert.isUndefined(result3);
    await client.plainDate.putDefault({});
  });

  it("should handle optional plainTime", async () => {
    const testValue = "13:06:12";
    const result = await client.plainTime.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.plainTime.getDefault();
    assert.equal(result2.property, undefined);
    const result3 = await client.plainTime.putAll({
      property: testValue
    });
    assert.isUndefined(result3);
    await client.plainTime.putDefault({});
  });

  it("should handle optional float", async () => {
    const testValue = 1.25;
    const result = await client.floatLiteral.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.floatLiteral.getDefault();
    assert.equal(result2.property, undefined);
    await client.floatLiteral.putAll({ property: testValue });
    await client.floatLiteral.putDefault({});
  });

  it("should handle optional int", async () => {
    const testValue = 1;
    const result = await client.intLiteral.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.intLiteral.getDefault();
    assert.equal(result2.property, undefined);
    await client.intLiteral.putAll({ property: testValue });
    await client.intLiteral.putDefault({});
  });

  it("should handle required and optional", async () => {
    const allBody = {
      optionalProperty: "hello",
      requiredProperty: 42
    };
    const requiredOnlyBody = {
      requiredProperty: 42,
      optionalProperty: undefined
    };

    const result = await client.requiredAndOptional.getAll();
    assert.deepEqual(result, allBody);
    const result2 = await client.requiredAndOptional.getRequiredOnly();
    assert.deepEqual(result2, requiredOnlyBody);
    await client.requiredAndOptional.putAll(allBody);
    await client.requiredAndOptional.putRequiredOnly(requiredOnlyBody);
  });

  it("should handle optional string", async () => {
    const testValue = "hello";
    const result = await client.string.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.string.getDefault();
    assert.equal(result2.property, undefined);
    await client.string.putAll({ property: testValue });
    await client.string.putDefault({});
  });

  it("should handle optional string literal", async () => {
    const testValue = "hello";
    const result = await client.stringLiteral.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.stringLiteral.getDefault();
    assert.equal(result2.property, undefined);
    await client.stringLiteral.putAll({ property: testValue });
    await client.stringLiteral.putDefault({});
  });

  it("should handle optional union float literal", async () => {
    const testValue = 2.375;
    const result = await client.unionFloatLiteral.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.unionFloatLiteral.getDefault();
    assert.equal(result2.property, undefined);
    await client.unionFloatLiteral.putAll({ property: testValue });
    await client.unionFloatLiteral.putDefault({});
  });

  it("should handle optional union int literal", async () => {
    const testValue = 2;
    const result = await client.unionIntLiteral.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.unionIntLiteral.getDefault();
    assert.equal(result2.property, undefined);
    await client.unionIntLiteral.putAll({ property: testValue });
    await client.unionIntLiteral.putDefault({});
  });

  it("should handle optional union string literal", async () => {
    const testValue = "world";
    const result = await client.unionStringLiteral.getAll();
    assert.deepEqual(result.property, testValue);
    const result2 = await client.unionStringLiteral.getDefault();
    assert.equal(result2.property, undefined);
    await client.unionStringLiteral.putAll({ property: testValue });
    await client.unionStringLiteral.putDefault({});
  });
});
