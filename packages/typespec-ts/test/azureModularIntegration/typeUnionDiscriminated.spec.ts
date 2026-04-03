import { assert, describe, it, beforeEach } from "vitest";
import { DiscriminatedClient } from "./generated/type/union/discriminated/src/index.js";

describe("Type Union Discriminated Client", () => {
  let client: DiscriminatedClient;

  const catData = { name: "Whiskers", meow: true };
  const dogData = { name: "Rex", bark: false };

  const envelopeCatBody = { kind: "cat", value: catData };
  const customNamesCatBody = { petType: "cat", petData: catData };
  const inlineCatBody = { kind: "cat", name: "Whiskers", meow: true };
  const inlineCustomCatBody = { type: "cat", name: "Whiskers", meow: true };

  beforeEach(() => {
    client = new DiscriminatedClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get Envelope_Object_Default", async () => {
    const result = await client.envelope.object.default.get();
    assert.deepEqual(result.body, envelopeCatBody);
  });

  it("should put Envelope_Object_Default", async () => {
    const result = await client.envelope.object.default.put(envelopeCatBody);
    assert.deepEqual(result.body, envelopeCatBody);
  });

  it("should get Envelope_Object_CustomProperties", async () => {
    const result = await client.envelope.object.customProperties.get();
    assert.deepEqual(result.body, customNamesCatBody);
  });

  it("should put Envelope_Object_CustomProperties", async () => {
    const result =
      await client.envelope.object.customProperties.put(customNamesCatBody);
    assert.deepEqual(result.body, customNamesCatBody);
  });

  it("should get NoEnvelope_Default", async () => {
    const result = await client.noEnvelope.default.get();
    assert.deepEqual(result.body, inlineCatBody);
  });

  it("should put NoEnvelope_Default", async () => {
    const result = await client.noEnvelope.default.put(inlineCatBody);
    assert.deepEqual(result.body, inlineCatBody);
  });

  it("should get NoEnvelope_CustomDiscriminator", async () => {
    const result = await client.noEnvelope.customDiscriminator.get();
    assert.deepEqual(result.body, inlineCustomCatBody);
  });

  it("should put NoEnvelope_CustomDiscriminator", async () => {
    const result =
      await client.noEnvelope.customDiscriminator.put(inlineCustomCatBody);
    assert.deepEqual(result.body, inlineCustomCatBody);
  });
});
