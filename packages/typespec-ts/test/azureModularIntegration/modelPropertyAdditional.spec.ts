import { assert } from "chai";
import { AdditionalPropertiesClient } from "./generated/type/property/additional-properties/src/index.js";

describe("ModelPropertyAdditional Client", () => {

  let client: AdditionalPropertiesClient;

  beforeEach(() => {
    client = new AdditionalPropertiesClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get extends Different Spread Float value", async () => {
    const result = await client.extendsDifferentSpreadFloat.get();
    assert.deepEqual(result, {
      name: "abc",
      prop: 43.125,
      derivedProp: 43.125
    });
  });
  it("should put extends Different Spread Float value", async () => {
    const result = await client.extendsDifferentSpreadFloat.put({
      name: "abc",
      prop: 43.125,
      derivedProp: 43.125
    });
    assert.equal(result, undefined);
  });
  it("should get extends Different Spread Model value", async () => {
    const result = await client.extendsDifferentSpreadModel.get();
    assert.deepEqual(result, {
      knownProp: "abc",
      prop: { state: "ok" },
      derivedProp: { state: "ok" }
    });
  });
  it("should put extends Different Spread Model value", async () => {
    const result = await client.extendsDifferentSpreadModel.put({
      knownProp: "abc",
      prop: { state: "ok" },
      derivedProp: { state: "ok" }
    });
    assert.equal(result, undefined);
  });
  it("should get extends Different Spread Model Array value", async () => {
    const result = await client.extendsDifferentSpreadModelArray.get();
    assert.deepEqual(result, {
      knownProp: "abc",
      prop: [{ state: "ok" }, { state: "ok" }],
      derivedProp: [{ state: "ok" }, { state: "ok" }]
    });
  });
  it("should put extends Different Spread Model Array value", async () => {
    const result = await client.extendsDifferentSpreadModelArray.put({
      knownProp: "abc",
      prop: [{ state: "ok" }, { state: "ok" }],
      derivedProp: [{ state: "ok" }, { state: "ok" }]
    });
    assert.equal(result, undefined);
  });
  it("should get extends Different Spread String value", async () => {
    const result = await client.extendsDifferentSpreadString.get();
    assert.deepEqual(result, {
      id: 43.125,
      prop: "abc",
      derivedProp: "abc"
    });
  });
  it("should put extends Different Spread String value", async () => {
    const result = await client.extendsDifferentSpreadString.put({
      id: 43.125,
      prop: "abc",
      derivedProp: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get extends Float value", async () => {
    const result = await client.extendsFloat.get();
    assert.deepEqual(result, {
      id: 43.125,
      prop: 43.125
    });
  });
  it("should put extends Float value", async () => {
    const result = await client.extendsFloat.put({
      id: 43.125,
      prop: 43.125
    });
    assert.equal(result, undefined);
  });
  it("should get extends Model value", async () => {
    const result = await client.extendsModel.get();
    assert.deepEqual(result, {
      knownProp: { state: "ok" },
      prop: { state: "ok" }
    });
  });
  it("should put extends Model value", async () => {
    const result = await client.extendsModel.put({
      knownProp: { state: "ok" },
      prop: { state: "ok" }
    });
    assert.equal(result, undefined);
  });
  it("should get extends Model Array value", async () => {
    const result = await client.extendsModelArray.get();
    assert.deepEqual(result, {
      knownProp: [{ state: "ok" }, { state: "ok" }],
      prop: [{ state: "ok" }, { state: "ok" }]
    });
  });
  it("should put extends Model Array value", async () => {
    const result = await client.extendsModelArray.put({
      knownProp: [{ state: "ok" }, { state: "ok" }],
      prop: [{ state: "ok" }, { state: "ok" }]
    });
    assert.equal(result, undefined);
  });
  it("should get extends String value", async () => {
    const result = await client.extendsString.get();
    assert.deepEqual(result, {
      name: "ExtendsStringAdditionalProperties",
      prop: "abc"
    });
  });
  it("should put extends String value", async () => {
    const result = await client.extendsString.put({
      name: "ExtendsStringAdditionalProperties",
      prop: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get extends Unknown value", async () => {
    const result = await client.extendsUnknown.get();
    assert.deepEqual(result, {
      name: "ExtendsUnknownAdditionalProperties",
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
  });
  it("should put extends Unknown value", async () => {
    const result = await client.extendsUnknown.put({
      name: "ExtendsUnknownAdditionalProperties",
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get extends Unknown Derived value", async () => {
    const result = await client.extendsUnknownDerived.get();
    assert.deepEqual(result, {
      name: "ExtendsUnknownAdditionalProperties",
      index: 314,
      age: 2.71875,
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
  });
  it("should put extends Unknown Derived value", async () => {
    const result = await client.extendsUnknownDerived.put({
      name: "ExtendsUnknownAdditionalProperties",
      index: 314,
      age: 2.71875,
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get extends Unknown Discriminated value", async () => {
    const result = await client.extendsUnknownDiscriminated.get();
    assert.deepEqual(result, {
      kind: "derived",
      name: "Derived",
      index: 314,
      age: 2.71875,
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
  });
  it("should put extends Unknown Discriminated value", async () => {
    const result = await client.extendsUnknownDiscriminated.put({
      kind: "derived",
      name: "Derived",
      index: 314,
      age: 2.71875,
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get is Float value", async () => {
    const result = await client.isFloat.get();
    assert.deepEqual(result, {
      id: 43.125,
      prop: 43.125
    });
  });
  it("should put is Float value", async () => {
    const result = await client.isFloat.put({
      id: 43.125,
      prop: 43.125
    });
    assert.equal(result, undefined);
  });
  it("should get is Model value", async () => {
    const result = await client.isModel.get();
    assert.deepEqual(result, {
      knownProp: { state: "ok" },
      prop: { state: "ok" }
    });
  });
  it("should put is Model value", async () => {
    const result = await client.isModel.put({
      knownProp: { state: "ok" },
      prop: { state: "ok" }
    });
    assert.equal(result, undefined);
  });
  it("should get is Model Array value", async () => {
    const result = await client.isModelArray.get();
    assert.deepEqual(result, {
      knownProp: [{ state: "ok" }, { state: "ok" }],
      prop: [{ state: "ok" }, { state: "ok" }]
    });
  });
  it("should put is Model Array value", async () => {
    const result = await client.isModelArray.put({
      knownProp: [{ state: "ok" }, { state: "ok" }],
      prop: [{ state: "ok" }, { state: "ok" }]
    });
    assert.equal(result, undefined);
  });
  it("should get is String value", async () => {
    const result = await client.isString.get();
    assert.deepEqual(result, {
      name: "IsStringAdditionalProperties",
      prop: "abc"
    });
  });
  it("should put is String value", async () => {
    const result = await client.isString.put({
      name: "IsStringAdditionalProperties",
      prop: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get is Unknown value", async () => {
    const result = await client.isUnknown.get();
    assert.deepEqual(result, {
      name: "IsUnknownAdditionalProperties",
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
  });
  it("should put isUnknown value", async () => {
    const result = await client.isUnknown.put({
      name: "IsUnknownAdditionalProperties",
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get is Unknown Derived value", async () => {
    const result = await client.isUnknownDerived.get();
    assert.deepEqual(result, {
      name: "IsUnknownAdditionalProperties",
      index: 314,
      age: 2.71875,
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
  });
  it("should put is Unknown Derived value", async () => {
    const result = await client.isUnknownDerived.put({
      name: "IsUnknownAdditionalProperties",
      index: 314,
      age: 2.71875,
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get is Unknown Discriminated value", async () => {
    const result = await client.isUnknownDiscriminated.get();
    assert.deepEqual(result, {
      kind: "derived",
      name: "Derived",
      index: 314,
      age: 2.71875,
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
  });
  it("should put is Unknown Discriminated value", async () => {
    const result = await client.isUnknownDiscriminated.put({
      kind: "derived",
      name: "Derived",
      index: 314,
      age: 2.71875,
      prop1: 32,
      prop2: true,
      prop3: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get multiple Spread value", async () => {
    const result = await client.multipleSpread.get();
    assert.deepEqual(result, {
      flag: true,
      prop1: "abc",
      prop2: 43.125
    });
  });
  it("should put multiple Spread value", async () => {
    const result = await client.multipleSpread.put({
      flag: true,
      prop1: "abc",
      prop2: 43.125
    });
    assert.equal(result, undefined);
  });
  it("should get spread Different Float value", async () => {
    const result = await client.spreadDifferentFloat.get();
    assert.deepEqual(result, {
      name: "abc",
      prop: 43.125
    });
  });
  it("should put spread Different Float value", async () => {
    const result = await client.spreadDifferentFloat.put({
      name: "abc",
      prop: 43.125
    });
    assert.equal(result, undefined);
  });
  it("should get spread Different Model value", async () => {
    const result = await client.spreadDifferentModel.get();
    assert.deepEqual(result, {
      knownProp: "abc",
      prop: { state: "ok" }
    });
  });
  it("should put spread Different Model value", async () => {
    const result = await client.spreadDifferentModel.put({
      knownProp: "abc",
      prop: { state: "ok" }
    });
    assert.equal(result, undefined);
  });
  it("should get spread Different Model Array value", async () => {
    const result = await client.spreadDifferentModelArray.get();
    assert.deepEqual(result, {
      knownProp: "abc",
      prop: [{ state: "ok" }, { state: "ok" }]
    });
  });
  it("should put spread Different Model Array value", async () => {
    const result = await client.spreadDifferentModelArray.put({
      knownProp: "abc",
      prop: [{ state: "ok" }, { state: "ok" }]
    });
    assert.equal(result, undefined);
  });
  it("should get spread Different String value", async () => {
    const result = await client.spreadDifferentString.get();
    assert.deepEqual(result, {
      id: 43.125,
      prop: "abc"
    });
  });
  it("should put spread Different String value", async () => {
    const result = await client.spreadDifferentString.put({
      id: 43.125,
      prop: "abc"
    });
    assert.equal(result, undefined);
  });
  it("should get spread Float value", async () => {
    const result = await client.spreadFloat.get();
    assert.deepEqual(result, {
      id: 43.125,
      prop: 43.125
    });
  });
  it("should put spread Float value", async () => {
    const result = await client.spreadFloat.put({
      id: 43.125,
      prop: 43.125
    });
    assert.equal(result, undefined);
  });
  it("should get spread Model value", async () => {
    const result = await client.spreadModel.get();
    assert.deepEqual(result, {
      knownProp: { state: "ok" },
      prop: { state: "ok" }
    });
  });
  it("should put spread Model value", async () => {
    const result = await client.spreadModel.put({
      knownProp: { state: "ok" },
      prop: { state: "ok" }
    });
    assert.equal(result, undefined);
  });
  it("should get spread Model Array value", async () => {
    const result = await client.spreadModelArray.get();
    assert.deepEqual(result, {
      knownProp: [{ state: "ok" }, { state: "ok" }],
      prop: [{ state: "ok" }, { state: "ok" }]
    });
  });
  it("should put spread Model Array value", async () => {
    const result = await client.spreadModelArray.put({
      knownProp: [{ state: "ok" }, { state: "ok" }],
      prop: [{ state: "ok" }, { state: "ok" }]
    });
    assert.equal(result, undefined);
  });
  it("should get spread Record Discriminated Union value", async () => {
    const result = await client.spreadRecordDiscriminatedUnion.get();
    assert.deepEqual(result, {
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
    });
  });
  it("should put spread Record Discriminated Union value", async () => {
    const result = await client.spreadRecordDiscriminatedUnion.put({
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
    });
    assert.equal(result, undefined);
  });
  it("should get spread Record NonDiscriminated Union value", async () => {
    const result = await client.spreadRecordNonDiscriminatedUnion.get();
    assert.deepEqual(result, {
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
    });
  });
  it("should put spread Record NonDiscriminated Union value", async () => {
    const result = await client.spreadRecordNonDiscriminatedUnion.put({
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
    });
    assert.equal(result, undefined);
  });
  it("should get spread Record NonDiscriminated Union2 value", async () => {
    const result = await client.spreadRecordNonDiscriminatedUnion2.get();
    assert.deepEqual(result, {
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
    });
  });
  it("should put spread Record NonDiscriminated Union2 value", async () => {
    const result = await client.spreadRecordNonDiscriminatedUnion2.put({
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
    });
    assert.equal(result, undefined);
  });
  it("should get spread Record NonDiscriminated Union3 value", async () => {
    const result = await client.spreadRecordNonDiscriminatedUnion3.get();
    assert.deepEqual(result, {
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
    });
  });
  it("should put spread Record NonDiscriminated Union3 value", async () => {
    const result = await client.spreadRecordNonDiscriminatedUnion3.put({
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
    });
    assert.equal(result, undefined);
  });
  it("should get spread Record Union value", async () => {
    const result = await client.spreadRecordUnion.get();
    assert.deepEqual(result, {
      flag: true,
      prop1: "abc",
      prop2: 43.125
    });
  });
  it("should put spread Record Union value", async () => {
    const result = await client.spreadRecordUnion.put({
      flag: true,
      prop1: "abc",
      prop2: 43.125
    });
    assert.equal(result, undefined);
  });
  it("should get spread String value", async () => {
    const result = await client.spreadString.get();
    assert.deepEqual(result, {
      name: "SpreadSpringRecord",
      prop: "abc"
    });
  });
  it("should put spread String value", async () => {
    const result = await client.spreadString.put({
      name: "SpreadSpringRecord",
      prop: "abc"
    });
    assert.equal(result, undefined);
  });
});
