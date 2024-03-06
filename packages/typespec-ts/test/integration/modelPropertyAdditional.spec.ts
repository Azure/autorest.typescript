import { assert } from "chai";
import AdditionalPropertiesClientFactory, {
  AdditionalPropertiesClient
} from "./generated/models/propertyAdditional/src/index.js";
describe("ClientRequestIdClient", () => {
  let client: AdditionalPropertiesClient;

  beforeEach(() => {
    client = AdditionalPropertiesClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get extends unknown additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordUnknown")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(
        result.body.name,
        "ExtendsUnknownAdditionalProperties"
      );
      assert.strictEqual(result.body["prop1"], 32);
      assert.strictEqual(result.body["prop2"], true);
      assert.strictEqual(result.body["prop3"], "abc");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put extends unknown additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordUnknown")
        .put({
          body: {
            name: "ExtendsUnknownAdditionalProperties",
            prop1: 32,
            prop2: true,
            prop3: "abc"
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get is unknown additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordUnknown")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "IsUnknownAdditionalProperties");
      assert.strictEqual(result.body["prop1"], 32);
      assert.strictEqual(result.body["prop2"], true);
      assert.strictEqual(result.body["prop3"], "abc");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put is unknown additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordUnknown")
        .put({
          body: {
            name: "IsUnknownAdditionalProperties",
            prop1: 32,
            prop2: true,
            prop3: "abc"
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get extends string additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordString")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "ExtendsStringAdditionalProperties");
      assert.strictEqual(result.body["prop"], "abc");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put extends string additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordString")
        .put({
          body: {
            name: "ExtendsStringAdditionalProperties",
            prop: "abc"
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get is string additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordstring")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "IsStringAdditionalProperties");
      assert.strictEqual(result.body["prop"], "abc");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put is string additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordstring")
        .put({
          body: {
            name: "IsStringAdditionalProperties",
            prop: "abc"
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get extends float additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordFloat")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.id, 43.125);
      assert.strictEqual(result.body["prop"], 43.125);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put extends float additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordFloat")
        .put({
          body: {
            id: 43.125,
            prop: 43.125
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get is float additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordFloat")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.id, 43.125);
      assert.strictEqual(result.body["prop"], 43.125);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put is float additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordFloat")
        .put({
          body: {
            id: 43.125,
            prop: 43.125
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get extends model additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordModel")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body["prop"]?.state, "ok");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put extends model additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordModel")
        .put({
          body: {
            prop: { state: "ok" }
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get is model additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordModel")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body["prop"]?.state, "ok");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put is model additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordModel")
        .put({
          body: {
            prop: { state: "ok" }
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get extends model array additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordModelArray")
        .get();
      assert.strictEqual(result.status, "200");
      result.body["prop"]?.forEach((item) => {
        assert.strictEqual(item.state, "ok");
      });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put extends model array additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/extendsRecordModelArray")
        .put({
          body: {
            prop: [{ state: "ok" }, { state: "ok" }]
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get is model array additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordModelArray")
        .get();
      assert.strictEqual(result.status, "200");
      result.body["prop"]?.forEach((item) => {
        assert.strictEqual(item.state, "ok");
      });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put is model array additional properties", async () => {
    try {
      const result = await client
        .path("/type/property/additionalProperties/isRecordModelArray")
        .put({
          body: {
            prop: [{ state: "ok" }, { state: "ok" }]
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
