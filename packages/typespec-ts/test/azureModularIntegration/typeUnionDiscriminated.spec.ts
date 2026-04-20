import { assert, describe, it, beforeEach } from "vitest";
import { DiscriminatedClient } from "./generated/type/union/discriminated/src/index.js";

describe("TypeUnionDiscriminated", () => {
  let client: DiscriminatedClient;

  beforeEach(() => {
    client = new DiscriminatedClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  it("Type_Union_Discriminated_Envelope_Object_Default_get", async () => {
    const result = await client.envelope.object.default.get();
    assert.ok(result.body);
  });

  it("Type_Union_Discriminated_Envelope_Object_Default_put", async () => {
    const result = await client.envelope.object.default.put({
      name: "Whiskers",
      meow: true
    });
    assert.ok(result.body);
  });

  it("Type_Union_Discriminated_Envelope_Object_CustomProperties_get", async () => {
    const result = await client.envelope.object.customProperties.get();
    assert.ok(result.body);
  });

  it("Type_Union_Discriminated_Envelope_Object_CustomProperties_put", async () => {
    const result = await client.envelope.object.customProperties.put({
      name: "Whiskers",
      meow: true
    });
    assert.ok(result.body);
  });

  it("Type_Union_Discriminated_NoEnvelope_Default_get", async () => {
    const result = await client.noEnvelope.default.get();
    assert.ok(result.body);
  });

  it("Type_Union_Discriminated_NoEnvelope_Default_put", async () => {
    const result = await client.noEnvelope.default.put({
      name: "Whiskers",
      meow: true
    });
    assert.ok(result.body);
  });

  it("Type_Union_Discriminated_NoEnvelope_CustomDiscriminator_get", async () => {
    const result = await client.noEnvelope.customDiscriminator.get();
    assert.ok(result.body);
  });

  it("Type_Union_Discriminated_NoEnvelope_CustomDiscriminator_put", async () => {
    const result = await client.noEnvelope.customDiscriminator.put({
      name: "Whiskers",
      meow: true
    });
    assert.ok(result.body);
  });
});
