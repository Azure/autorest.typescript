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

describe("Service Driven break the glass", () => {
  it("should break the glass (v1 client calling v2 service operation)", async () => {
    const { createPipelineRequest } = await import("@azure/core-rest-pipeline");
    const { ResiliencyServiceDrivenClient } = await import(
      "./generated/resiliency/srv-driven-old/src/index.js"
    );
    const oldClient = new ResiliencyServiceDrivenClient(
      "http://localhost:3002",
      "v2",
      {
        allowInsecureConnection: true,
        apiVersion: "v2",
      }
    );
    const request = createPipelineRequest({
      url: "http://localhost:3002/resiliency/service-driven/client:v1/service:v2/api-version:v2/add-operation",
      method: "DELETE",
    });
    const response = await oldClient.pipeline.sendRequest(request);
    assert.strictEqual(response.status, 204);
  });
});
