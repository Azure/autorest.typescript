import { describe, it, beforeEach, assert } from "vitest";

import { ResiliencyServiceDrivenClient } from "./generated/resiliency/srv-driven-main/src/index.js";
import {
  createDefaultHttpClient,
  createPipelineRequest
} from "@azure/core-rest-pipeline";
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
});

describe("Service Driven breakTheGlass", () => {
  it("should break the glass by calling new operation from old client path", async () => {
    // breakTheGlass: use raw HTTP to call an operation that exists in the v2 service
    // but was not part of the v1 client API contract (client:v1/service:v2/api-version:v2)
    const httpClient = createDefaultHttpClient();
    const request = createPipelineRequest({
      url: "http://localhost:3002/resiliency/service-driven/client:v1/service:v2/api-version:v2/add-operation",
      method: "DELETE",
      allowInsecureConnection: true
    });
    const response = await httpClient.sendRequest(request);
    assert.strictEqual(response.status, 204);
  });
});
