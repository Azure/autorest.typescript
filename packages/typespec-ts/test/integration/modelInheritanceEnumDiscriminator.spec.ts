import EnumDiscriminatorClientFactory, {
  EnumDiscriminatorClient,
  Golden,
  Snake
} from "./generated/models/inheritance-enum-discriminator/src/index.js";
import { assert } from "chai";

describe("EnumDiscriminatorClient Rest Client", () => {
  let client: EnumDiscriminatorClient;

  beforeEach(() => {
    client = EnumDiscriminatorClientFactory({
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
      const result = await client
        .path("/type/model/inheritance/enum-discriminator/extensible-enum")
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, validBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put extensible enum", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/enum-discriminator/extensible-enum")
        .put({ body: validBody });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get extensible enum if missing discriminator", async () => {
    try {
      const result = await client
        .path(
          "/type/model/inheritance/enum-discriminator/extensible-enum/missingdiscriminator"
        )
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, { weight: 10 } as any);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get extensible enum if wrong discriminator", async () => {
    try {
      const result = await client
        .path(
          "/type/model/inheritance/enum-discriminator/extensible-enum/wrongdiscriminator"
        )
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, { weight: 8, kind: "wrongKind" });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get fixed enum", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/enum-discriminator/fixed-enum")
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, validFixedEnumBody);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put fixed enum", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/enum-discriminator/fixed-enum")
        .put({ body: validFixedEnumBody });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get fixed enum if missing discriminator", async () => {
    try {
      const result = await client
        .path(
          "/type/model/inheritance/enum-discriminator/fixed-enum/missingdiscriminator"
        )
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, { length: 10 } as any);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get fixed enum if wrong discriminator", async () => {
    try {
      const result = await client
        .path(
          "/type/model/inheritance/enum-discriminator/fixed-enum/wrongdiscriminator"
        )
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, { length: 8, kind: "wrongKind" });
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
