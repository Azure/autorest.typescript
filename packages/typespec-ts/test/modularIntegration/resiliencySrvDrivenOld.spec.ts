import { assert } from "chai";
import { ServiceDrivenClient } from "./generated/resiliency/srv-driven-old/generated/src/index.js";
describe("Service Driven old Client v1", () => {
  let client: ServiceDrivenClient;

  beforeEach(() => {
    client = new ServiceDrivenClient("http://localhost:3002", "v1", {
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
  let client: ServiceDrivenClient;

  beforeEach(() => {
    client = new ServiceDrivenClient("http://localhost:3002", "v2", {
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
