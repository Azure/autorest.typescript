import { describe, it, beforeEach, assert } from "vitest";

import { ResiliencyServiceDrivenClient } from "./generated/resiliency/srv-driven-old/src/index.js";
describe("Service Driven old Client v1", () => {
  let client: ResiliencyServiceDrivenClient;

  beforeEach(() => {
    client = new ResiliencyServiceDrivenClient("http://localhost:3002", "v1", {
      allowInsecureConnection: true,
      apiVersion: "v1"
    });
  });

  it("should work with none parameter", async () => {
    const result = await client.fromNone();
    assert.isUndefined(result);
  });

  it("should work with one optional parameter", async () => {
    const result = await client.fromOneOptional({
      parameter: "optional"
    });
    assert.isUndefined(result);
  });

  it("should work with one required parameter", async () => {
    const result = await client.fromOneRequired("required");
    assert.isUndefined(result);
  });
});
describe("Service Driven old Client v2", () => {
  let client: ResiliencyServiceDrivenClient;

  beforeEach(() => {
    client = new ResiliencyServiceDrivenClient("http://localhost:3002", "v2", {
      allowInsecureConnection: true,
      apiVersion: "v1"
    });
  });

  it("should work with none parameter", async () => {
    const result = await client.fromNone();
    assert.isUndefined(result);
  });

  it("should work with one optional parameter", async () => {
    const result = await client.fromOneOptional({
      parameter: "optional"
    });
    assert.isUndefined(result);
  });

  it("should work with one required parameter", async () => {
    const result = await client.fromOneRequired("required");
    assert.isUndefined(result);
  });
});

// Skipped: breakTheGlass requires the v1 (old) client to call the add-operation endpoint
// (client:v1/service:v2/api-version:v2). The old client doesn't expose addOperation(),
// so this scenario cannot be exercised via the generated SDK surface.
describe("Service Driven breakTheGlass", () => {
  it.skip("should break the glass to call add-operation using v1 client", async () => {
    // Would need: old client with serviceDeploymentVersion="v2", apiVersion="v2",
    // calling add-operation (DELETE) via the pipeline directly.
  });
});
