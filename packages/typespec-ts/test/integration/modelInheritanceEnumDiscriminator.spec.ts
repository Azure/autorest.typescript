import EnumDiscriminatorClientFactory, {
  EnumDiscriminatorClient,
  Golden,
  Snake
} from "./generated/type/model/inheritance/enum-discriminator/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("EnumDiscriminatorClient Rest Client", () => {
  let client: EnumDiscriminatorClient;

  beforeEach(() => {
    client = EnumDiscriminatorClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  const validBody: Golden = {
    weight: 10,
    kind: "golden"
  };
  const validFixedEnumBody: Snake = {
    length: 10,
    kind: "cobra"
  };
  it("should get extensible enum", async () => {
    const result = await client
      .path("/type/model/inheritance/enum-discriminator/extensible-enum")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validBody);
  });

  it("should put extensible enum", async () => {
    const result = await client
      .path("/type/model/inheritance/enum-discriminator/extensible-enum")
      .put({ body: validBody });
    assert.strictEqual(result.status, "204");
  });

  it("should get extensible enum if missing discriminator", async () => {
    const result = await client
      .path(
        "/type/model/inheritance/enum-discriminator/extensible-enum/missingdiscriminator"
      )
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, { weight: 10 } as any);
  });

  it("should get extensible enum if wrong discriminator", async () => {
    const result = await client
      .path(
        "/type/model/inheritance/enum-discriminator/extensible-enum/wrongdiscriminator"
      )
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, { weight: 8, kind: "wrongKind" });
  });

  it("should get fixed enum", async () => {
    const result = await client
      .path("/type/model/inheritance/enum-discriminator/fixed-enum")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validFixedEnumBody);
  });

  it("should put fixed enum", async () => {
    const result = await client
      .path("/type/model/inheritance/enum-discriminator/fixed-enum")
      .put({ body: validFixedEnumBody });
    assert.strictEqual(result.status, "204");
  });

  it("should get fixed enum if missing discriminator", async () => {
    const result = await client
      .path(
        "/type/model/inheritance/enum-discriminator/fixed-enum/missingdiscriminator"
      )
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, { length: 10 } as any);
  });

  it("should get fixed enum if wrong discriminator", async () => {
    const result = await client
      .path(
        "/type/model/inheritance/enum-discriminator/fixed-enum/wrongdiscriminator"
      )
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, { length: 8, kind: "wrongKind" });
  });
});
