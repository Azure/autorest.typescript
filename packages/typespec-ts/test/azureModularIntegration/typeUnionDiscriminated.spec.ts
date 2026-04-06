import { assert, describe, it, beforeEach } from "vitest";
import { DiscriminatedClient } from "./generated/type/union/discriminated/src/index.js";

describe("Type Union Discriminated", () => {
  let client: DiscriminatedClient;

  beforeEach(() => {
    client = new DiscriminatedClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
    });
  });

  describe("Envelope Object Default", () => {
    it("should get envelope default (returns cat)", async () => {
      const result = await client.envelope.object.default.get();
      const body = result.body as unknown as { kind: string; value: { name: string; meow: boolean } };
      assert.deepEqual(body.kind, "cat");
      assert.deepEqual(body.value.name, "Whiskers");
      assert.deepEqual(body.value.meow, true);
    });

    it("should put envelope default (cat)", async () => {
      const catEnvelope = { kind: "cat", value: { name: "Whiskers", meow: true } };
      const result = await client.envelope.object.default.put(catEnvelope as any);
      const body = result.body as unknown as { kind: string; value: { name: string } };
      assert.deepEqual(body.kind, "cat");
      assert.deepEqual(body.value.name, "Whiskers");
    });
  });

  describe("Envelope Object CustomProperties", () => {
    it("should get envelope custom properties (returns cat)", async () => {
      const result = await client.envelope.object.customProperties.get();
      const body = result.body as unknown as { petType: string; petData: { name: string } };
      assert.deepEqual(body.petType, "cat");
      assert.deepEqual(body.petData.name, "Whiskers");
    });

    it("should put envelope custom properties (cat)", async () => {
      const catCustom = { petType: "cat", petData: { name: "Whiskers", meow: true } };
      const result = await client.envelope.object.customProperties.put(catCustom as any);
      const body = result.body as unknown as { petType: string; petData: { name: string } };
      assert.deepEqual(body.petType, "cat");
      assert.deepEqual(body.petData.name, "Whiskers");
    });
  });

  describe("NoEnvelope Default", () => {
    it("should get no-envelope default (returns cat)", async () => {
      const result = await client.noEnvelope.default.get();
      const body = result.body as unknown as { kind: string; name: string; meow: boolean };
      assert.deepEqual(body.kind, "cat");
      assert.deepEqual(body.name, "Whiskers");
      assert.deepEqual(body.meow, true);
    });

    it("should put no-envelope default (cat)", async () => {
      const inlineCat = { kind: "cat", name: "Whiskers", meow: true };
      const result = await client.noEnvelope.default.put(inlineCat as any);
      const body = result.body as unknown as { kind: string; name: string };
      assert.deepEqual(body.kind, "cat");
      assert.deepEqual(body.name, "Whiskers");
    });
  });

  describe("NoEnvelope CustomDiscriminator", () => {
    it("should get no-envelope custom discriminator (returns cat)", async () => {
      const result = await client.noEnvelope.customDiscriminator.get();
      const body = result.body as unknown as { type: string; name: string; meow: boolean };
      assert.deepEqual(body.type, "cat");
      assert.deepEqual(body.name, "Whiskers");
      assert.deepEqual(body.meow, true);
    });

    it("should put no-envelope custom discriminator (cat)", async () => {
      const customCat = { type: "cat", name: "Whiskers", meow: true };
      const result = await client.noEnvelope.customDiscriminator.put(customCat as any);
      const body = result.body as unknown as { type: string; name: string };
      assert.deepEqual(body.type, "cat");
      assert.deepEqual(body.name, "Whiskers");
    });
  });
});
