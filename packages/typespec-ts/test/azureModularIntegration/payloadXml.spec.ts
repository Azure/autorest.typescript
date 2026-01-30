import { XmlClient } from "./generated/payload/xml/src/index.js";
import { assert } from "chai";

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
});
