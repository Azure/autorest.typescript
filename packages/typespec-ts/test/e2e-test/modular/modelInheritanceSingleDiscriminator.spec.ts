import {
  Eagle,
  SingleDiscriminatorClient,
  Sparrow
} from "./generated/models/inheritance/single-discriminator/src/index.js";
import { assert } from "chai";

describe("SingleDiscriminatorClient Rest Client", () => {
  let client: SingleDiscriminatorClient;

  beforeEach(() => {
    client = new SingleDiscriminatorClient({
      allowInsecureConnection: true
    });
  });

  const validBody: Sparrow = {
    wingspan: 1,
    kind: "sparrow"
  };
  const validRecursiveBody: Eagle = {
    wingspan: 5,
    kind: "eagle",
    partner: {
      wingspan: 2,
      kind: "goose"
    },
    friends: [
      {
        wingspan: 2,
        kind: "seagull"
      }
    ],
    hate: {
      key3: {
        wingspan: 1,
        kind: "sparrow"
      }
    }
  };
  it("should get model with single discriminator", async () => {
    try {
      const result = await client.getModel();
      assert.deepEqual(result, validBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put model with single discriminator", async () => {
    try {
      const result = await client.putModel(validBody);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get recursive model with single discriminator", async () => {
    try {
      const result = await client.getRecursiveModel();
      assert.deepEqual(result, validRecursiveBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put recursive model with single discriminator", async () => {
    try {
      const result = await client.putRecursiveModel(validRecursiveBody);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get if missing discriminator", async () => {
    try {
      const result = await client.getMissingDiscriminator();
      assert.deepEqual(result.wingspan, 1);
      assert.isUndefined(result.kind);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get if wrong discriminator", async () => {
    try {
      const result = await client.getWrongDiscriminator();
      assert.deepEqual(result, { wingspan: 1, kind: "wrongKind" });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get legacy model", async () => {
    try {
      const result = await client.getLegacyModel();
      assert.deepEqual(result, { size: 20, kind: "t-rex" });
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
