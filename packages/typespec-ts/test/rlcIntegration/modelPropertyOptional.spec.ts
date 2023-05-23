import TypePropertyOptionalClientFactory, {
  TypePropertyOptionalClient
} from "./generated/models/propertyOptional/src/index.js";
import { assert } from "chai";

describe("ModelsPropertyOptional Rest Client", () => {
  let client: TypePropertyOptionalClient;

  beforeEach(() => {
    client = TypePropertyOptionalClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should get all string", async () => {
    try {
      const result = await client
        .path("/type/property/optional/string/all")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.property, "hello");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get default string", async () => {
    try {
      const result = await client
        .path("/type/property/optional/string/default")
        .get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put all string", async () => {
    try {
      const result = await client
        .path("/type/property/optional/string/all")
        .put({
          body: { property: "hello" }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put default string", async () => {
    try {
      const result = await client
        .path("/type/property/optional/string/default")
        .put({ body: {} });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get all bytes", async () => {
    try {
      const result = await client
        .path("/type/property/optional/bytes/all")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.property, "aGVsbG8sIHdvcmxkIQ==");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get default bytes", async () => {
    try {
      const result = await client
        .path("/type/property/optional/bytes/default")
        .get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put all bytes", async () => {
    try {
      const result = await client
        .path("/type/property/optional/bytes/all")
        .put({
          body: { property: "aGVsbG8sIHdvcmxkIQ==" }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put default bytes", async () => {
    try {
      const result = await client
        .path("/type/property/optional/bytes/default")
        .put({
          body: {}
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get all datetime", async () => {
    try {
      const result = await client
        .path("/type/property/optional/datetime/all")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.property, "2022-08-26T18:38:00Z");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get default datetime", async () => {
    try {
      const result = await client
        .path("/type/property/optional/datetime/default")
        .get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put all datetime", async () => {
    try {
      const result = await client
        .path("/type/property/optional/datetime/all")
        .put({
          body: { property: "2022-08-26T18:38:00Z" }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put default datetime", async () => {
    try {
      const result = await client
        .path("/type/property/optional/datetime/default")
        .put({
          body: {}
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get all duration", async () => {
    try {
      const result = await client
        .path("/type/property/optional/duration/all")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.property, "P123DT22H14M12.011S");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get default duration", async () => {
    try {
      const result = await client
        .path("/type/property/optional/duration/default")
        .get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put all duration", async () => {
    try {
      const result = await client
        .path("/type/property/optional/duration/all")
        .put({
          body: { property: "P123DT22H14M12.011S" }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put default duration", async () => {
    try {
      const result = await client
        .path("/type/property/optional/duration/default")
        .put({
          body: {}
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get all collections bytes", async () => {
    try {
      const result = await client
        .path("/type/property/optional/collections/bytes/all")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.property?.length, 2);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get default collections bytes", async () => {
    try {
      const result = await client
        .path("/type/property/optional/collections/bytes/default")
        .get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put all collections bytes", async () => {
    try {
      const result = await client
        .path("/type/property/optional/collections/bytes/all")
        .put({
          body: { property: ["aGVsbG8sIHdvcmxkIQ==", "aGVsbG8sIHdvcmxkIQ=="] }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put default collections bytes", async () => {
    try {
      const result = await client
        .path("/type/property/optional/collections/bytes/default")
        .put({
          body: {}
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get all collections model", async () => {
    try {
      const result = await client
        .path("/type/property/optional/collections/model/all")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.property?.length, 2);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get default collections model", async () => {
    try {
      const result = await client
        .path("/type/property/optional/collections/model/default")
        .get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put all collections model", async () => {
    try {
      const result = await client
        .path("/type/property/optional/collections/model/all")
        .put({
          body: { property: [{ property: "hello" }, { property: "world" }] }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put default collections model", async () => {
    try {
      const result = await client
        .path("/type/property/optional/collections/model/default")
        .put({
          body: {}
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get models that will return all properties in the model", async () => {
    try {
      const result = await client
        .path("/type/property/optional/requiredAndOptional/all")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.optionalProperty, "hello");
      assert.strictEqual(result.body.requiredProperty, 42);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get models that will return only the required properties", async () => {
    try {
      const result = await client
        .path("/type/property/optional/requiredAndOptional/requiredOnly")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.requiredProperty, 42);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put a body with all properties present", async () => {
    try {
      const result = await client
        .path("/type/property/optional/requiredAndOptional/all")
        .put({
          body: {
            requiredProperty: 42,
            optionalProperty: "hello"
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put a body with only required properties", async () => {
    try {
      const result = await client
        .path("/type/property/optional/requiredAndOptional/requiredOnly")
        .put({
          body: {
            requiredProperty: 42
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
