import { assert, describe, it, beforeEach } from "vitest";

import { DiscriminatedClient } from "./generated/type/union/discriminated/src/index.js";

describe("Type Union Discriminated Client", () => {
  let client: DiscriminatedClient;

  beforeEach(() => {
    client = new DiscriminatedClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  describe("Envelope Object Default", () => {
    it("should get envelope object default (cat)", async () => {
      const result = await client.envelope.object.default.get();
      assert.deepEqual(result.body, {
        kind: "cat",
        value: { name: "Whiskers", meow: true }
      });
    });

    it("should put envelope object default", async () => {
      await client.envelope.object.default.put({
        kind: "cat",
        value: { name: "Whiskers", meow: true }
      });
    });
  });

  describe("Envelope Object CustomProperties", () => {
    it("should get envelope object custom properties (cat)", async () => {
      const result = await client.envelope.object.customProperties.get();
      assert.deepEqual(result.body, {
        petType: "cat",
        petData: { name: "Whiskers", meow: true }
      });
    });

    it("should put envelope object custom properties", async () => {
      await client.envelope.object.customProperties.put({
        petType: "cat",
        petData: { name: "Whiskers", meow: true }
      });
    });
  });

  describe("NoEnvelope Default", () => {
    it("should get no-envelope default (cat)", async () => {
      const result = await client.noEnvelope.default.get();
      assert.deepEqual(result.body, {
        kind: "cat",
        name: "Whiskers",
        meow: true
      });
    });

    it("should put no-envelope default", async () => {
      await client.noEnvelope.default.put({
        kind: "cat",
        name: "Whiskers",
        meow: true
      });
    });
  });

  describe("NoEnvelope CustomDiscriminator", () => {
    it("should get no-envelope custom discriminator (cat)", async () => {
      const result = await client.noEnvelope.customDiscriminator.get();
      assert.deepEqual(result.body, {
        type: "cat",
        name: "Whiskers",
        meow: true
      });
    });

    it("should put no-envelope custom discriminator", async () => {
      await client.noEnvelope.customDiscriminator.put({
        type: "cat",
        name: "Whiskers",
        meow: true
      });
    });
  });
});
