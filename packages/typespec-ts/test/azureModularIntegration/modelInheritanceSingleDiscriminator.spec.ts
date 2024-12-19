import {
  Eagle,
  SingleDiscriminatorClient,
  Sparrow
} from "./generated/type/model/inheritance/single-discriminator/src/index.js";
import { assert } from "chai";

describe("SingleDiscriminatorClient Rest Client", () => {
  let client: SingleDiscriminatorClient;

  beforeEach(() => {
    client = new SingleDiscriminatorClient({
      endpoint: "http://localhost:3006",
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
    const result = await client.getModel();
    assert.deepEqual(result, validBody);
  });

  it("should put model with single discriminator", async () => {
    const result = await client.putModel(validBody);
    assert.isUndefined(result);
  });

  it("should get recursive model with single discriminator", async () => {
    const result = await client.getRecursiveModel();
    assert.deepEqual(result, validRecursiveBody);
  });

  it("should put recursive model with single discriminator", async () => {
    const result = await client.putRecursiveModel(validRecursiveBody);
    assert.isUndefined(result);
  });

  it("should get if missing discriminator", async () => {
    const result = await client.getMissingDiscriminator();
    assert.deepEqual(result.wingspan, 1);
    assert.isUndefined(result.kind);
  });

  it("should get if wrong discriminator", async () => {
    const result = await client.getWrongDiscriminator();
    assert.deepEqual(result, { wingspan: 1, kind: "wrongKind" });
  });

  it("should get legacy model", async () => {
    const result = await client.getLegacyModel();
    assert.deepEqual(result, { size: 20, kind: "t-rex" });
  });
});
