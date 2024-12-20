import {
  EnumDiscriminatorClient,
  Snake,
  Golden
} from "./generated/type/model/inheritance/enum-discriminator/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("EnumDiscriminatorClient Rest Client", () => {
  let client: EnumDiscriminatorClient;

  beforeEach(() => {
    client = new EnumDiscriminatorClient({
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
    const result = await client.getExtensibleModel();
    assert.deepEqual(result, validBody);
  });

  it("should put extensible enum", async () => {
    const result = await client.putExtensibleModel(validBody);
    assert.isUndefined(result);
  });

  it("should get extensible enum if missing discriminator", async () => {
    const result = await client.getExtensibleModelMissingDiscriminator();
    assert.deepEqual(result.weight, 10);
    assert.isUndefined(result.kind);
  });

  it("should get extensible enum if wrong discriminator", async () => {
    const result = await client.getExtensibleModelWrongDiscriminator();
    assert.deepEqual(result, { weight: 8, kind: "wrongKind" });
  });

  it("should get fixed enum", async () => {
    const result = await client.getFixedModel();
    assert.deepEqual(result, validFixedEnumBody);
  });

  it("should put fixed enum", async () => {
    const result = await client.putFixedModel(validFixedEnumBody);
    assert.isUndefined(result);
  });

  it("should get fixed enum if missing discriminator", async () => {
    const result = await client.getFixedModelMissingDiscriminator();
    assert.deepEqual(result.length, 10);
    assert.isUndefined(result.kind);
  });

  it("should get fixed enum if wrong discriminator", async () => {
    const result = await client.getFixedModelWrongDiscriminator();
    assert.deepEqual(result, { length: 8, kind: "wrongKind" });
  });
});
