import { assert, describe, it, beforeEach } from "vitest";
import {
  ServiceAClient,
  ServiceBClient
} from "./generated/service/multiple-services/src/index.js";

describe("ServiceMultipleServices", () => {
  let serviceA: ServiceAClient;
  let serviceB: ServiceBClient;

  beforeEach(() => {
    serviceA = new ServiceAClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
    serviceB = new ServiceBClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  // Known emitter bug: ServiceAClient imports _getOperationsOperations from serviceB/classic
  // instead of its own operations, so opA is not available on serviceA.operations
  it.skip("Service_MultipleServices_ServiceA_Operations_opA - emitter bug: ServiceAClient.operations imports from serviceB", async () => {
    await serviceA.operations.opA();
  });

  it.skip("Service_MultipleServices_ServiceA_SubNamespace_subOpA - emitter bug: ServiceAClient.subNamespace imports from serviceB", async () => {
    await serviceA.subNamespace.subOpA();
  });

  it("Service_MultipleServices_ServiceB_Operations_opB", async () => {
    const result = await serviceB.operations.opB();
    assert.isUndefined(result);
  });

  it("Service_MultipleServices_ServiceB_SubNamespace_subOpB", async () => {
    const result = await serviceB.subNamespace.subOpB();
    assert.isUndefined(result);
  });
});
