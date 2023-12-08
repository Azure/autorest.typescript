import {
  EnumDiscriminatorClient,
  Snake,
  Golden
} from "./generated/models/inheritance/enum-discriminator/src/index.js";
import { assert } from "chai";

describe("EnumDiscriminatorClient Rest Client", () => {
  let client: EnumDiscriminatorClient;

  beforeEach(() => {
    client = new EnumDiscriminatorClient({
      allowInsecureConnection: true
    });
  });

  const validBody: Golden = {
    weight: 10,
    kind: "golden"
  };
  const validFixedEnumBody: Snake = {
    length: 10,
    kind: "cobra",
  };
  it("should get extensible enum", async () => {
    try {
      const result = await client.getExtensibleModel();
      assert.deepEqual(result, validBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put extensible enum", async () => {
    try {
      const result = await client.putExtensibleModel(validBody);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get extensible enum if missing discriminator", async () => {
    try {
      const result = await client.getExtensibleModelMissingDiscriminator();
      assert.deepEqual(result.weight, 10);
      assert.isUndefined(result.kind);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get extensible enum if wrong discriminator", async () => {
    try {
      const result = await client.getExtensibleModelWrongDiscriminator();
      assert.deepEqual(result, { weight: 8, kind: "wrongKind" });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get fixed enum", async () => {
    try {
      const result = await client.getFixedModel();
      assert.deepEqual(result, validFixedEnumBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put fixed enum", async () => {
    try {
      const result = await client.putFixedModel(validFixedEnumBody);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get fixed enum if missing discriminator", async () => {
    try {
      const result = await client.getFixedModelMissingDiscriminator();
      assert.deepEqual(result.length, 10);
      assert.isUndefined(result.kind);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get fixed enum if wrong discriminator", async () => {
    try {
      const result = await client.getFixedModelWrongDiscriminator();
      assert.deepEqual(result, { length: 8, kind: "wrongKind" });
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
