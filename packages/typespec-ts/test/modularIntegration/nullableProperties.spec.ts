import { assert } from "chai";
import {
  CollectionsModelProperty,
  NullableClient
} from "./generated/type/property/nullable/src/index.js";
import { stringToUint8Array } from "@azure/core-util";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("NullableProperties Modular Client", () => {
  let client: NullableClient;

  beforeEach(() => {
    client = new NullableClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should handle nullable bytes", async () => {
    const nonNull = {
      requiredProperty: "foo",
      nullableProperty: stringToUint8Array("aGVsbG8sIHdvcmxkIQ==", "base64")
    };
    const nullProperty = { requiredProperty: "foo", nullableProperty: null };
    const result = await client.bytes.getNull();
    assert.deepEqual(result, nullProperty);

    const result2 = await client.bytes.getNonNull();
    assert.deepEqual(result2, nonNull);

    await client.bytes.patchNull(nullProperty);
    await client.bytes.patchNonNull(nonNull);
  });

  it("should handle collection bytes", async () => {
    const nonNull = {
      requiredProperty: "foo",
      nullableProperty: [
        stringToUint8Array("aGVsbG8sIHdvcmxkIQ==", "base64"),
        stringToUint8Array("aGVsbG8sIHdvcmxkIQ==", "base64")
      ]
    };
    const nullProperty = { requiredProperty: "foo", nullableProperty: null };
    const result = await client.collectionsByte.getNull();
    assert.deepEqual(result, nullProperty);

    const result2 = await client.collectionsByte.getNonNull();
    assert.deepEqual(result2, nonNull);

    await client.collectionsByte.patchNull(nullProperty);
    await client.collectionsByte.patchNonNull(nonNull);
  });

  it("should handle collection model", async () => {
    const nonNull: CollectionsModelProperty = {
      requiredProperty: "foo",
      nullableProperty: [{ property: "hello" }, { property: "world" }]
    };
    const nullProperty = { requiredProperty: "foo", nullableProperty: null };
    const result = await client.collectionsModel.getNull();
    assert.deepEqual(result, nullProperty);

    const result2 = await client.collectionsModel.getNonNull();
    assert.deepEqual(result2, nonNull);

    await client.collectionsModel.patchNull(nullProperty);
    await client.collectionsModel.patchNonNull(nonNull);
  });
  it("should handle collection string", async () => {
    const nonNull = {
      requiredProperty: "foo",
      nullableProperty: ["hello", "world"]
    };
    const nullProperty = { requiredProperty: "foo", nullableProperty: null };
    const result = await client.collectionsString.getNull();
    assert.deepEqual(result, nullProperty);

    const result2 = await client.collectionsString.getNonNull();
    assert.deepEqual(result2, nonNull);

    await client.collectionsString.patchNull(nullProperty);
    await client.collectionsString.patchNonNull(nonNull);
  });
  it("should handle nullable datetime", async () => {
    const nonNull = {
      requiredProperty: "foo",
      nullableProperty: new Date("2022-08-26T18:38:00.000Z")
    };
    const nullProperty = { requiredProperty: "foo", nullableProperty: null };
    const result = await client.datetime.getNull();
    assert.deepEqual(result, nullProperty);

    const result2 = await client.datetime.getNonNull();
    assert.deepEqual(result2, nonNull);

    await client.datetime.patchNull(nullProperty);
    await client.datetime.patchNonNull(nonNull);
  });

  it("should handle nullable duration", async () => {
    const nonNull = {
      requiredProperty: "foo",
      nullableProperty: "P123DT22H14M12.011S"
    };
    const nullProperty = { requiredProperty: "foo", nullableProperty: null };
    const result = await client.duration.getNull();
    assert.deepEqual(result, nullProperty);

    const result2 = await client.duration.getNonNull();
    assert.deepEqual(result2, nonNull);

    client.duration.patchNull(nullProperty);
    client.duration.patchNonNull(nonNull);
  });

  it("should handle nullable string", async () => {
    const nonNull = { requiredProperty: "foo", nullableProperty: "hello" };
    const nullProperty = { requiredProperty: "foo", nullableProperty: null };
    const result = await client.string.getNull();
    assert.deepEqual(result, nullProperty);

    const result2 = await client.string.getNonNull();
    assert.deepEqual(result2, nonNull);

    await client.string.patchNull(nullProperty);
    await client.string.patchNonNull(nonNull);
  });
});
