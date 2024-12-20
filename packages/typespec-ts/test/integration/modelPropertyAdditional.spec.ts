import { assert } from "chai";
import AdditionalPropertiesClientFactory, {
  AdditionalPropertiesClient
} from "./generated/type/property/additional-properties/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("ModelsPropertyAdditional Rest Client", () => {
  let client: AdditionalPropertiesClient;

  beforeEach(() => {
    client = AdditionalPropertiesClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should get extends unknown additional properties", async () => {
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
  });

  it("should put extends unknown additional properties", async () => {
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
  });

  it("should get extends unknown derived additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordUnknownDerived")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(
      result.body.name,
      "ExtendsUnknownAdditionalProperties"
    );
    assert.strictEqual(result.body["index"], 314);
    assert.strictEqual(result.body["age"], 2.71875);
    assert.strictEqual(result.body["prop1"], 32);
    assert.strictEqual(result.body["prop2"], true);
    assert.strictEqual(result.body["prop3"], "abc");
  });

  it("should put extends unknown derived additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordUnknownDerived")
      .put({
        body: {
          name: "ExtendsUnknownAdditionalProperties",
          index: 314,
          age: 2.71875,
          prop1: 32,
          prop2: true,
          prop3: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends unknown discriminated additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsUnknownDiscriminated")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "Derived");
    assert.strictEqual(result.body["kind"], "derived");
    assert.strictEqual(result.body["index"], 314);
    assert.strictEqual(result.body["age"], 2.71875);
    assert.strictEqual(result.body["prop1"], 32);
    assert.strictEqual(result.body["prop2"], true);
    assert.strictEqual(result.body["prop3"], "abc");
  });

  it("should put extends unknown discriminated additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsUnknownDiscriminated")
      .put({
        body: {
          kind: "derived",
          name: "Derived",
          index: 314,
          age: 2.71875,
          prop1: 32,
          prop2: true,
          prop3: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get is unknown additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordUnknown")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "IsUnknownAdditionalProperties");
    assert.strictEqual(result.body["prop1"], 32);
    assert.strictEqual(result.body["prop2"], true);
    assert.strictEqual(result.body["prop3"], "abc");
  });

  it("should put is unknown additional properties", async () => {
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
  });

  it("should get is unknown derived additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordUnknownDerived")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "IsUnknownAdditionalProperties");
    assert.strictEqual(result.body["index"], 314);
    assert.strictEqual(result.body["age"], 2.71875);
    assert.strictEqual(result.body["prop1"], 32);
    assert.strictEqual(result.body["prop2"], true);
    assert.strictEqual(result.body["prop3"], "abc");
  });

  it("should put is unknown derived additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordUnknownDerived")
      .put({
        body: {
          name: "IsUnknownAdditionalProperties",
          index: 314,
          age: 2.71875,
          prop1: 32,
          prop2: true,
          prop3: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get is unknown discriminated additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isUnknownDiscriminated")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "Derived");
    assert.strictEqual(result.body["kind"], "derived");
    assert.strictEqual(result.body["index"], 314);
    assert.strictEqual(result.body["age"], 2.71875);
    assert.strictEqual(result.body["prop1"], 32);
    assert.strictEqual(result.body["prop2"], true);
    assert.strictEqual(result.body["prop3"], "abc");
  });

  it("should put is unknown discriminated additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isUnknownDiscriminated")
      .put({
        body: {
          kind: "derived",
          name: "Derived",
          index: 314,
          age: 2.71875,
          prop1: 32,
          prop2: true,
          prop3: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends string additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordString")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "ExtendsStringAdditionalProperties");
    assert.strictEqual(result.body["prop"], "abc");
  });

  it("should put extends string additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordString")
      .put({
        body: {
          name: "ExtendsStringAdditionalProperties",
          prop: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get is string additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordstring")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "IsStringAdditionalProperties");
    assert.strictEqual(result.body["prop"], "abc");
  });

  it("should put is string additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordstring")
      .put({
        body: {
          name: "IsStringAdditionalProperties",
          prop: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordFloat")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.id, 43.125);
    assert.strictEqual(result.body["prop"], 43.125);
  });

  it("should put extends float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordFloat")
      .put({
        body: {
          id: 43.125,
          prop: 43.125
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get is float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordFloat")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.id, 43.125);
    assert.strictEqual(result.body["prop"], 43.125);
  });

  it("should put is float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordFloat")
      .put({
        body: {
          id: 43.125,
          prop: 43.125
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordModel")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body["prop"]?.state, "ok");
  });

  it("should put extends model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordModel")
      .put({
        body: {
          prop: { state: "ok" },
          knownProp: { state: "ok" }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get is model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordModel")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body["prop"]?.state, "ok");
  });

  it("should put is model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordModel")
      .put({
        body: {
          prop: { state: "ok" },
          knownProp: { state: "ok" }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends model array additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordModelArray")
      .get();
    assert.strictEqual(result.status, "200");
    result.body["prop"]?.forEach((item) => {
      assert.strictEqual(item.state, "ok");
    });
  });

  it("should put extends model array additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsRecordModelArray")
      .put({
        body: {
          prop: [{ state: "ok" }, { state: "ok" }],
          knownProp: [{ state: "ok" }, { state: "ok" }]
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get is model array additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordModelArray")
      .get();
    assert.strictEqual(result.status, "200");
    result.body["prop"]?.forEach((item) => {
      assert.strictEqual(item.state, "ok");
    });
  });

  it("should put is model array additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/isRecordModelArray")
      .put({
        body: {
          prop: [{ state: "ok" }, { state: "ok" }],
          knownProp: [{ state: "ok" }, { state: "ok" }]
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record string additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordString")
      .get({
        body: {
          name: "SpreadSpringRecord",
          prop: "abc"
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record string additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordString")
      .put({
        body: {
          name: "SpreadSpringRecord",
          prop: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordFloat")
      .get({
        body: {
          id: 43.125,
          prop: 43.125
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordFloat")
      .put({
        body: {
          id: 43.125,
          prop: 43.125
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordModel")
      .get({
        body: {
          prop: { state: "ok" },
          knownProp: { state: "ok" }
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordModel")
      .put({
        body: {
          prop: { state: "ok" },
          knownProp: { state: "ok" }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record model array additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordModelArray")
      .get({
        body: {
          knownProp: [{ state: "ok" }, { state: "ok" }],
          prop: [{ state: "ok" }, { state: "ok" }]
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record model array additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordModelArray")
      .put({
        body: {
          knownProp: [{ state: "ok" }, { state: "ok" }],
          prop: [{ state: "ok" }, { state: "ok" }]
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread different record string additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadDifferentRecordString")
      .get({
        body: {
          id: 43.125,
          prop: "abc"
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread different record string additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadDifferentRecordString")
      .put({
        body: {
          id: 43.125,
          prop: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread different record float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadDifferentRecordFloat")
      .get({
        body: {
          name: "abc",
          prop: 43.125
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread different record float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadDifferentRecordFloat")
      .put({
        body: {
          name: "abc",
          prop: 43.125
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread different record model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadDifferentRecordModel")
      .get({
        body: {
          knownProp: "abc",
          prop: { state: "ok" }
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread different record model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadDifferentRecordModel")
      .put({
        body: {
          knownProp: "abc",
          prop: { state: "ok" }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread different record model array additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadDifferentRecordModelArray"
      )
      .get({
        body: {
          knownProp: "abc",
          prop: [{ state: "ok" }, { state: "ok" }]
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread different record model array additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadDifferentRecordModelArray"
      )
      .put({
        body: {
          knownProp: "abc",
          prop: [{ state: "ok" }, { state: "ok" }]
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends different spread string additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/extendsDifferentSpreadString"
      )
      .get({
        body: {
          id: 43.125,
          prop: "abc",
          derivedProp: "abc"
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put extends different spread string additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/extendsDifferentSpreadString"
      )
      .put({
        body: {
          id: 43.125,
          prop: "abc",
          derivedProp: "abc"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends different spread float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsDifferentSpreadFloat")
      .get({
        body: {
          name: "abc",
          prop: 43.125,
          derivedProp: 43.125
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put extends different spread float additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsDifferentSpreadFloat")
      .put({
        body: {
          name: "abc",
          prop: 43.125,
          derivedProp: 43.125
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends different spread model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsDifferentSpreadModel")
      .get({
        body: {
          knownProp: "abc",
          prop: { state: "ok" },
          derivedProp: { state: "ok" }
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put extends different spread model additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/extendsDifferentSpreadModel")
      .put({
        body: {
          knownProp: "abc",
          prop: { state: "ok" },
          derivedProp: { state: "ok" }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get extends different spread model array additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/extendsDifferentSpreadModelArray"
      )
      .get({
        body: {
          knownProp: "abc",
          prop: [{ state: "ok" }, { state: "ok" }],
          derivedProp: [{ state: "ok" }, { state: "ok" }]
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put extends different spread model array additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/extendsDifferentSpreadModelArray"
      )
      .put({
        body: {
          knownProp: "abc",
          prop: [{ state: "ok" }, { state: "ok" }],
          derivedProp: [{ state: "ok" }, { state: "ok" }]
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get multiple spread record additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/multipleSpreadRecord")
      .get({
        body: {
          flag: true,
          prop1: "abc",
          prop2: 43.125
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put multiple spread record additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/multipleSpreadRecord")
      .put({
        body: {
          flag: true,
          prop1: "abc",
          prop2: 43.125
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record union additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordUnion")
      .get({
        body: {
          flag: true,
          prop1: "abc",
          prop2: 43.125
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record union additional properties", async () => {
    const result = await client
      .path("/type/property/additionalProperties/spreadRecordUnion")
      .put({
        body: {
          flag: true,
          prop1: "abc",
          prop2: 43.125
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record discriminate union additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadRecordDiscriminatedUnion"
      )
      .get({
        body: {
          name: "abc",
          prop1: {
            kind: "kind0",
            fooProp: "abc"
          },
          prop2: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z",
            end: "2021-01-02T00:00:00Z"
          }
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record discriminate union additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadRecordDiscriminatedUnion"
      )
      .put({
        body: {
          name: "abc",
          prop1: {
            kind: "kind0",
            fooProp: "abc"
          },
          prop2: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z",
            end: "2021-01-02T00:00:00Z"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record nondiscriminate union additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion"
      )
      .get({
        body: {
          name: "abc",
          prop1: {
            kind: "kind0",
            fooProp: "abc"
          },
          prop2: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z",
            end: "2021-01-02T00:00:00Z"
          }
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record nondiscriminate union additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion"
      )
      .put({
        body: {
          name: "abc",
          prop1: {
            kind: "kind0",
            fooProp: "abc"
          },
          prop2: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z",
            end: "2021-01-02T00:00:00Z"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record nondiscriminate union2 additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion2"
      )
      .get({
        body: {
          name: "abc",
          prop1: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z"
          },
          prop2: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z",
            end: "2021-01-02T00:00:00Z"
          }
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record nondiscriminate union2 additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion2"
      )
      .put({
        body: {
          name: "abc",
          prop1: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z"
          },
          prop2: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z",
            end: "2021-01-02T00:00:00Z"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get spread record nondiscriminate union3 additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion3"
      )
      .get({
        body: {
          name: "abc",
          prop1: [
            {
              kind: "kind1",
              start: "2021-01-01T00:00:00Z"
            },
            {
              kind: "kind1",
              start: "2021-01-01T00:00:00Z"
            }
          ],
          prop2: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z",
            end: "2021-01-02T00:00:00Z"
          }
        }
      });
    assert.strictEqual(result.status, "200");
  });

  it("should put spread record nondiscriminate union3 additional properties", async () => {
    const result = await client
      .path(
        "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion3"
      )
      .put({
        body: {
          name: "abc",
          prop1: [
            {
              kind: "kind1",
              start: "2021-01-01T00:00:00Z"
            },
            {
              kind: "kind1",
              start: "2021-01-01T00:00:00Z"
            }
          ],
          prop2: {
            kind: "kind1",
            start: "2021-01-01T00:00:00Z",
            end: "2021-01-02T00:00:00Z"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });
});
