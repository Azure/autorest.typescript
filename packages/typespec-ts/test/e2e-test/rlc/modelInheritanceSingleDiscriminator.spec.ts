import SingleDiscriminatorClientFactory, {
  Eagle,
  SingleDiscriminatorClient,
  Sparrow
} from "./generated/models/inheritance-single-discriminator/src/index.js";
import { assert } from "chai";

describe("SingleDiscriminatorClient Rest Client", () => {
  let client: SingleDiscriminatorClient;

  beforeEach(() => {
    client = SingleDiscriminatorClientFactory({
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
      const result = await client
        .path("/type/model/inheritance/single-discriminator/model")
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, validBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put model with single discriminator", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/single-discriminator/model")
        .put({ body: validBody });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get recursive model with single discriminator", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/single-discriminator/recursivemodel")
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, validRecursiveBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put recursive model with single discriminator", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/single-discriminator/recursivemodel")
        .put({ body: validRecursiveBody });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get if missing discriminator", async () => {
    try {
      const result = await client
        .path(
          "/type/model/inheritance/single-discriminator/missingdiscriminator"
        )
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, { wingspan: 1 } as any);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get if wrong discriminator", async () => {
    try {
      const result = await client
        .path(
          "/type/model/inheritance/single-discriminator/wrongdiscriminator"
        )
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, { wingspan: 1, kind: "wrongKind" } as any);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get legacy model", async () => {
    try {
      const result = await client
        .path(
          "/type/model/inheritance/single-discriminator/legacy-model"
        )
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, { size: 20, kind: "t-rex" });
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
