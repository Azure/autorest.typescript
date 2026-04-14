import { describe, it, beforeEach, assert } from "vitest";

import { XmlClient } from "./generated/payload/xml/src/index.js";

describe("Payload XML Client", () => {
  let client: XmlClient;

  beforeEach(() => {
    client = new XmlClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  describe("SimpleModel", () => {
    const expected = { name: "foo", age: 123 };

    it("should get simple model", async () => {
      const result = await client.simpleModelValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put simple model", async () => {
      await client.simpleModelValue.put(expected);
    });
  });

  describe("ModelWithSimpleArrays", () => {
    const expected = {
      colors: ["red", "green", "blue"],
      counts: [1, 2]
    };

    it("should get model with simple arrays", async () => {
      const result = await client.modelWithSimpleArraysValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with simple arrays", async () => {
      await client.modelWithSimpleArraysValue.put(expected);
    });
  });

  describe("ModelWithArrayOfModel", () => {
    const expected = {
      items: [
        { name: "foo", age: 123 },
        { name: "bar", age: 456 }
      ]
    };

    it("should get model with array of model", async () => {
      const result = await client.modelWithArrayOfModelValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with array of model", async () => {
      await client.modelWithArrayOfModelValue.put(expected);
    });
  });

  describe("ModelWithOptionalField", () => {
    const expected = { item: "widget" };

    it("should get model with optional field", async () => {
      const result = await client.modelWithOptionalFieldValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with optional field", async () => {
      await client.modelWithOptionalFieldValue.put(expected);
    });
  });

  describe("ModelWithAttributes", () => {
    const expected = {
      id1: 123,
      id2: "foo",
      enabled: true
    };

    it("should get model with attributes", async () => {
      const result = await client.modelWithAttributesValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with attributes", async () => {
      await client.modelWithAttributesValue.put(expected);
    });
  });

  describe("ModelWithUnwrappedArray", () => {
    const expected = {
      colors: ["red", "green", "blue"],
      counts: [1, 2]
    };

    it("should get model with unwrapped array", async () => {
      const result = await client.modelWithUnwrappedArrayValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with unwrapped array", async () => {
      await client.modelWithUnwrappedArrayValue.put(expected);
    });
  });

  describe("ModelWithRenamedArrays", () => {
    const expected = {
      colors: ["red", "green", "blue"],
      counts: [1, 2]
    };

    it("should get model with renamed arrays", async () => {
      const result = await client.modelWithRenamedArraysValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with renamed arrays", async () => {
      await client.modelWithRenamedArraysValue.put(expected);
    });
  });

  describe("ModelWithRenamedFields", () => {
    const expected = {
      inputData: { name: "foo", age: 123 },
      outputData: { name: "bar", age: 456 }
    };

    it("should get model with renamed fields", async () => {
      const result = await client.modelWithRenamedFieldsValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with renamed fields", async () => {
      await client.modelWithRenamedFieldsValue.put(expected);
    });
  });

  describe("ModelWithEmptyArray", () => {
    const expected = { items: [] };

    it("should get model with empty array", async () => {
      const result = await client.modelWithEmptyArrayValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with empty array", async () => {
      await client.modelWithEmptyArrayValue.put(expected);
    });
  });

  describe("ModelWithText", () => {
    const expected = {
      language: "foo",
      content: "\n  This is some text.\n"
    };

    it("should get model with text", async () => {
      const result = await client.modelWithTextValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with text", async () => {
      await client.modelWithTextValue.put(expected);
    });
  });

  describe("ModelWithDictionary", () => {
    const expected = {
      metadata: {
        Color: "blue",
        Count: "123",
        Enabled: "false"
      }
    };

    it("should get model with dictionary", async () => {
      const result = await client.modelWithDictionaryValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with dictionary", async () => {
      await client.modelWithDictionaryValue.put(expected);
    });
  });

  describe("ModelWithEncodedNames", () => {
    const expected = {
      modelData: { name: "foo", age: 123 },
      colors: ["red", "green", "blue"]
    };

    it("should get model with encoded names", async () => {
      const result = await client.modelWithEncodedNamesValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with encoded names", async () => {
      await client.modelWithEncodedNamesValue.put(expected);
    });
  });

  describe("ModelWithDatetimeValue", () => {
    it("should get model with datetime value", async () => {
      const result = await client.modelWithDatetimeValue.get();
      assert.strictEqual(
        result.rfc3339.toISOString(),
        "2022-08-26T18:38:00.000Z"
      );
      // rfc7231: "Fri, 26 Aug 2022 14:38:00 GMT" = 2022-08-26T14:38:00.000Z UTC
      assert.strictEqual(
        result.rfc7231.toUTCString(),
        "Fri, 26 Aug 2022 14:38:00 GMT"
      );
    });

    it("should put model with datetime value", async () => {
      await client.modelWithDatetimeValue.put({
        rfc3339: new Date("2022-08-26T18:38:00.000Z"),
        rfc7231: new Date("Fri, 26 Aug 2022 14:38:00 GMT")
      });
    });
  });

  describe("ModelWithEnumValue", () => {
    it("should get model with enum value", async () => {
      const result = await client.modelWithEnumValue.get();
      assert.strictEqual(result.status, "success");
    });

    it("should put model with enum value", async () => {
      await client.modelWithEnumValue.put({ status: "success" });
    });
  });

  describe("XmlErrorValue", () => {
    it("should get xml error value (expects 400 error)", async () => {
      try {
        await client.xmlErrorValue.get();
        assert.fail("Should have thrown an error");
      } catch (error: any) {
        assert.strictEqual(error.statusCode, 400);
      }
    });
  });

  describe("ModelWithRenamedProperty", () => {
    const expected = { title: "foo", author: "bar" };

    it("should get model with renamed property", async () => {
      const result = await client.modelWithRenamedPropertyValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with renamed property", async () => {
      await client.modelWithRenamedPropertyValue.put(expected);
    });
  });

  describe("ModelWithNestedModel", () => {
    const expected = { nested: { name: "foo", age: 123 } };

    it("should get model with nested model", async () => {
      const result = await client.modelWithNestedModelValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with nested model", async () => {
      await client.modelWithNestedModelValue.put(expected);
    });
  });

  describe("ModelWithRenamedNestedModel", () => {
    const expected = { author: { name: "foo" } };

    it("should get model with renamed nested model", async () => {
      const result = await client.modelWithRenamedNestedModelValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with renamed nested model", async () => {
      await client.modelWithRenamedNestedModelValue.put(expected);
    });
  });

  describe("ModelWithWrappedPrimitiveCustomItemNames", () => {
    const expected = { tags: ["fiction", "classic"] };

    it("should get model with wrapped primitive custom item names", async () => {
      const result =
        await client.modelWithWrappedPrimitiveCustomItemNamesValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with wrapped primitive custom item names", async () => {
      await client.modelWithWrappedPrimitiveCustomItemNamesValue.put(expected);
    });
  });

  describe("ModelWithUnwrappedModelArray", () => {
    const expected = {
      items: [
        { name: "foo", age: 123 },
        { name: "bar", age: 456 }
      ]
    };

    it("should get model with unwrapped model array", async () => {
      const result = await client.modelWithUnwrappedModelArrayValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with unwrapped model array", async () => {
      await client.modelWithUnwrappedModelArrayValue.put(expected);
    });
  });

  describe("ModelWithRenamedWrappedModelArray", () => {
    const expected = {
      items: [
        { name: "foo", age: 123 },
        { name: "bar", age: 456 }
      ]
    };

    it("should get model with renamed wrapped model array", async () => {
      const result = await client.modelWithRenamedWrappedModelArrayValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with renamed wrapped model array", async () => {
      await client.modelWithRenamedWrappedModelArrayValue.put(expected);
    });
  });

  describe("ModelWithRenamedUnwrappedModelArray", () => {
    const expected = {
      items: [
        { name: "foo", age: 123 },
        { name: "bar", age: 456 }
      ]
    };

    it("should get model with renamed unwrapped model array", async () => {
      const result =
        await client.modelWithRenamedUnwrappedModelArrayValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with renamed unwrapped model array", async () => {
      await client.modelWithRenamedUnwrappedModelArrayValue.put(expected);
    });
  });

  describe("ModelWithRenamedWrappedAndItemModelArray", () => {
    const expected = {
      books: [{ title: "The Great Gatsby" }, { title: "Les Miserables" }]
    };

    it("should get model with renamed wrapped and item model array", async () => {
      const result =
        await client.modelWithRenamedWrappedAndItemModelArrayValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with renamed wrapped and item model array", async () => {
      await client.modelWithRenamedWrappedAndItemModelArrayValue.put(expected);
    });
  });

  describe("ModelWithRenamedAttribute", () => {
    const expected = {
      id: 123,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald"
    };

    it("should get model with renamed attribute", async () => {
      const result = await client.modelWithRenamedAttributeValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with renamed attribute", async () => {
      await client.modelWithRenamedAttributeValue.put(expected);
    });
  });

  describe("ModelWithNamespace", () => {
    const expected = { id: 123, title: "The Great Gatsby" };

    it("should get model with namespace", async () => {
      const result = await client.modelWithNamespaceValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with namespace", async () => {
      await client.modelWithNamespaceValue.put(expected);
    });
  });

  describe("ModelWithNamespaceOnProperties", () => {
    const expected = {
      id: 123,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald"
    };

    it("should get model with namespace on properties", async () => {
      const result = await client.modelWithNamespaceOnPropertiesValue.get();
      assert.deepEqual(result, expected);
    });

    it("should put model with namespace on properties", async () => {
      await client.modelWithNamespaceOnPropertiesValue.put(expected);
    });
  });
});
