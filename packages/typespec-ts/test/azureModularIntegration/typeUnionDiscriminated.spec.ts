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
      assert.deepEqual((result.body as any).kind, "cat");
      assert.deepEqual((result.body as any).value.name, "Whiskers");
      assert.deepEqual((result.body as any).value.meow, true);
    });

    it("should put envelope default (cat)", async () => {
      const result = await client.envelope.object.default.put({
        kind: "cat",
        value: { name: "Whiskers", meow: true },
      } as any);
      assert.deepEqual((result.body as any).kind, "cat");
      assert.deepEqual((result.body as any).value.name, "Whiskers");
    });
  });

  describe("Envelope Object CustomProperties", () => {
    it("should get envelope custom properties (returns cat)", async () => {
      const result = await client.envelope.object.customProperties.get();
      assert.deepEqual((result.body as any).petType, "cat");
      assert.deepEqual((result.body as any).petData.name, "Whiskers");
    });

    it("should put envelope custom properties (cat)", async () => {
      const result = await client.envelope.object.customProperties.put({
        petType: "cat",
        petData: { name: "Whiskers", meow: true },
      } as any);
      assert.deepEqual((result.body as any).petType, "cat");
      assert.deepEqual((result.body as any).petData.name, "Whiskers");
    });
  });

  describe("NoEnvelope Default", () => {
    it("should get no-envelope default (returns cat)", async () => {
      const result = await client.noEnvelope.default.get();
      assert.deepEqual((result.body as any).kind, "cat");
      assert.deepEqual((result.body as any).name, "Whiskers");
      assert.deepEqual((result.body as any).meow, true);
    });

    it("should put no-envelope default (cat)", async () => {
      const result = await client.noEnvelope.default.put({
        kind: "cat",
        name: "Whiskers",
        meow: true,
      } as any);
      assert.deepEqual((result.body as any).kind, "cat");
      assert.deepEqual((result.body as any).name, "Whiskers");
    });
  });

  describe("NoEnvelope CustomDiscriminator", () => {
    it("should get no-envelope custom discriminator (returns cat)", async () => {
      const result = await client.noEnvelope.customDiscriminator.get();
      assert.deepEqual((result.body as any).type, "cat");
      assert.deepEqual((result.body as any).name, "Whiskers");
      assert.deepEqual((result.body as any).meow, true);
    });

    it("should put no-envelope custom discriminator (cat)", async () => {
      const result = await client.noEnvelope.customDiscriminator.put({
        type: "cat",
        name: "Whiskers",
        meow: true,
      } as any);
      assert.deepEqual((result.body as any).type, "cat");
      assert.deepEqual((result.body as any).name, "Whiskers");
    });
  });
});
