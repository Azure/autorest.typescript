import { describe, it, beforeEach, assert } from "vitest";

import { ResiliencyServiceDrivenClient } from "./generated/resiliency/srv-driven-main/src/index.js";
describe("Service Driven new Client v1", () => {
  let client: ResiliencyServiceDrivenClient;

  beforeEach(() => {
    client = new ResiliencyServiceDrivenClient("http://localhost:3002", "v2", {
      allowInsecureConnection: true,
      apiVersion: "v1"
    });
  });

  it("should work with none parameter", async () => {
    const result = await client.fromNone({
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with one optional parameter", async () => {
    const result = await client.fromOneOptional({
      parameter: "optional",
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with one required parameter", async () => {
    const result = await client.fromOneRequired("required", {
      newParameter: "new"
    });
    assert.isUndefined(result);
  });
});
describe("Service Driven new Client v2", () => {
  let client: ResiliencyServiceDrivenClient;

  beforeEach(() => {
    client = new ResiliencyServiceDrivenClient("http://localhost:3002", "v2", {
      allowInsecureConnection: true,
      apiVersion: "v2"
    });
  });

  it("should work with none parameter", async () => {
    const result = await client.fromNone({
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with one optional parameter", async () => {
    const result = await client.fromOneOptional({
      parameter: "optional",
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with one required parameter", async () => {
    const result = await client.fromOneRequired("required", {
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with add operation", async () => {
    const result = await client.addOperation();
    assert.isUndefined(result);
  });

  it("should breakTheGlass - old client v1 calling v2 operation", async () => {
    // The breakTheGlass scenario tests that a v1 client can call a v2 service operation
    // by making a direct HTTP request to the v2 endpoint using client:v1 path segment
    const url =
      "http://localhost:3002/resiliency/service-driven/client:v1/service:v2/api-version:v2/add-operation";
    const response = await fetch(url, { method: "DELETE" });
    assert.strictEqual(response.status, 204);
  });
});
