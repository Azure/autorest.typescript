import { ProjectedNameClient } from "./generated/projection/generated/src/index.js";
import { assert } from "chai";

describe("Projected Name Client", () => {
  let client: ProjectedNameClient;

  beforeEach(() => {
    client = new ProjectedNameClient({
      allowInsecureConnection: true
    });
  });

  it("should use json property", async () => {
    try {
      const result = await client.property.json({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should use client property", async () => {
    try {
      const result = await client.property.client({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should use language property", async () => {
    try {
      const result = await client.property.language({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should use json and client property", async () => {
    try {
      const result = await client.property.jsonAndClient({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("client operation", async () => {
    try {
      const result = await client.operation();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("client parameter", async () => {
    try {
      const result = await client.parameter("true");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
