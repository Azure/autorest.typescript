import { LROClient, Product } from "./generated/lro/src";
import { assert } from "chai";
import {
  InternalPipelineOptions,
  OperationOptions,
  RequestPolicyFactory
} from "@azure/core-http";
import { LROSYM } from "./generated/lro/src/lro/models";

describe("LROs", () => {
  let client: LROClient;

  beforeEach(() => {
    client = new LROClient();
  });

  describe("Pipeline validation", () => {
    it("should execute custom pipeline when passed in a factory array", async () => {
      let calledCustomPolicy = false;
      const customPolicy: RequestPolicyFactory = {
        create: next => ({
          sendRequest: req => {
            calledCustomPolicy = true;
            return next.sendRequest(req);
          }
        })
      };
      client = new LROClient({ requestPolicyFactories: [customPolicy] });
      const poller = await client.lROs.put200Succeeded({ requestOptions: {} });
      const result = await poller.pollUntilDone();

      // Verify that the operation works as expected
      // since the custom pipeline was passed as an array
      // and deserialize was not included in the array the result
      // will be in _response.parsedBody
      assert.equal(
        JSON.parse(result._response.bodyAsText).properties.provisioningState,
        "Succeeded"
      );

      // Verify that a custom policy was executed
      assert.isTrue(calledCustomPolicy);

      // Verify that a default policy was executed
      assert.isDefined(
        result._response.request.headers.contains("x-ms-client-request-id")
      );
    });

    it("should execute custom pipeline when passed in as a function", async () => {
      let calledCustomPolicy = false;
      // Prevents caching redirects
      const customPolicy: RequestPolicyFactory = {
        create: next => ({
          sendRequest: req => {
            calledCustomPolicy = true;
            return next.sendRequest(req);
          }
        })
      };

      client = new LROClient({
        requestPolicyFactories: defaultFactories => {
          return [...defaultFactories, customPolicy];
        }
      });

      const poller = await client.lROs.put200Succeeded();
      const result = await poller.pollUntilDone();

      // Verify that the operation works as expected
      assert.equal(result.provisioningState, "Succeeded");

      // Verify that a custom policy was executed
      assert.isTrue(calledCustomPolicy);

      // Verify that a default policy was executed
      assert.isDefined(
        result._response.request.headers.contains("x-ms-client-request-id")
      );
    });
  });

  describe("BodyPolling Strategy", () => {
    it("should handle initial response with terminal state through an Azure Resource", async () => {
      const poller = await client.lROs.put200Succeeded();
      const result = await poller.pollUntilDone();
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle initial response with terminal state without provisioning State", async () => {
      const poller = await client.lROs.put200SucceededNoState();
      const result = await poller.pollUntilDone();
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle initial response creating followed by success through an Azure Resource", async () => {
      const poller = await client.lROs.put201CreatingSucceeded200();

      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put200Acceptedcanceled200", async () => {
      const poller = await client.lROs.put200Acceptedcanceled200();

      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Canceled");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put200UpdatingSucceeded204", async () => {
      const poller = await client.lROs.put200UpdatingSucceeded204();

      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put201CreatingFailed200", async () => {
      const poller = await client.lROs.put201CreatingFailed200();
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Failed");
    });
  });

  describe("Location Strategy", () => {
    it("should handle post202Retry200", async () => {
      const poller = await client.lROs.post202Retry200();
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle post202NoRetry204", async () => {
      const poller = await client.lROs.post202NoRetry204();
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 204);
    });

    it("should handle deleteNoHeaderInRetry", async () => {
      const poller = await client.lROs.deleteNoHeaderInRetry();

      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 204);
    });

    it("should handle put202Retry200", async () => {
      const poller = await client.lROs.put202Retry200();

      const result = await poller.pollUntilDone();
      assert.deepEqual(result._response.status, 200);
    });

    it("should handle putNoHeaderInRetry", async () => {
      const poller = await client.lROs.putNoHeaderInRetry();
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle putSubResource", async () => {
      const poller = await client.lROs.putSubResource();
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle putNonResource", async () => {
      const poller = await client.lROs.putNonResource();

      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "sku");
    });

    it("should handle delete202Retry200", async () => {
      const poller = await client.lROs.delete202Retry200();

      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle delete202NoRetry204", async () => {
      const poller = await client.lROs.delete202NoRetry204();

      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 204);
    });

    it("should handle deleteProvisioning202Accepted200Succeeded", async () => {
      const poller = await client.lROs.deleteProvisioning202Accepted200Succeeded();

      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle deleteProvisioning202DeletingFailed200", async () => {
      const poller = await client.lROs.deleteProvisioning202DeletingFailed200();

      const result = await poller.pollUntilDone();
      assert.equal(result.provisioningState, "Failed");
    });

    it("should handle deleteProvisioning202Deletingcanceled200", async () => {
      const poller = await client.lROs.deleteProvisioning202Deletingcanceled200();

      const result = await poller.pollUntilDone();
      assert.equal(result.provisioningState, "Canceled");
    });
  });

  describe("Passthrough strategy", () => {
    it("should handle delete204Succeeded", async () => {
      const poller = await client.lROs.delete204Succeeded();

      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 204);
    });
  });

  describe("Azure Async Operation Strategy", () => {
    let product: Product;
    beforeEach(() => {
      product = {
        location: "West US"
      };
    });

    it("should handle postDoubleHeadersFinalLocationGet", async () => {
      const poller = await client.lROs.postDoubleHeadersFinalLocationGet();
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGet", async () => {
      const poller = await client.lROs.postDoubleHeadersFinalAzureHeaderGet();
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
      assert.equal(result.id, "100");
    });

    it("should handle post200WithPayload", async () => {
      const poller = await client.lROs.post200WithPayload();
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "1");
      assert.equal(result.name, "product");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGetDefault", async () => {
      const poller = await client.lROs.postDoubleHeadersFinalAzureHeaderGetDefault();
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
      assert.equal(result.id, "100");
    });

    it("should handle deleteAsyncRetrySucceeded", async () => {
      const poller = await client.lROs.deleteAsyncRetrySucceeded();

      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle deleteAsyncNoRetrySucceeded", async () => {
      const poller = await client.lROs.deleteAsyncNoRetrySucceeded();

      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle deleteAsyncRetrycanceled", async () => {
      const poller = await client.lROs.deleteAsyncRetrycanceled();

      const result = await poller.pollUntilDone();
      assert.equal(result._response[LROSYM].status, "Canceled");
    });

    it("should handle DeleteAsyncRetryFailed", async () => {
      const poller = await client.lROs.deleteAsyncRetryFailed();

      const result = await poller.pollUntilDone();
      assert.equal(result._response[LROSYM].status, "Failed");
    });

    it("should handle putAsyncRetrySucceeded", async () => {
      const poller = await client.lROs.putAsyncRetrySucceeded();

      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle put201Succeeded", async () => {
      const poller = await client.lROs.put201Succeeded({ product: {} });

      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle post202List", async () => {
      const poller = await client.lROs.post202List();

      const result = await poller.pollUntilDone();
      assert.equal(result[0].id, "100");
      assert.equal(result[0].name, "foo");
    });

    it("should handle putAsyncRetryFailed", async () => {
      const poller = await client.lROs.putAsyncRetryFailed();

      const result = await poller.pollUntilDone();
      assert.equal(result._response[LROSYM].status, "Failed");
    });

    it("should handle putAsyncNonResource", async () => {
      const poller = await client.lROs.putAsyncNonResource();

      await poller.poll();
      const result = await poller.pollUntilDone();
      assert.equal(result.name, "sku");
      assert.equal(result.id, "100");
    });

    it("should handle putAsyncNoHeaderInRetry", async () => {
      const poller = await client.lROs.putAsyncNoHeaderInRetry();

      const result = await poller.pollUntilDone();
      assert.equal(result.name, "foo");
      assert.equal(result.id, "100");
      assert.deepEqual(result.provisioningState, "Succeeded");
    });

    it("should handle putAsyncNoRetrySucceeded", async () => {
      const poller = await client.lROs.putAsyncNoRetrySucceeded();

      const result = await poller.pollUntilDone();
      assert.equal(result.name, "foo");
      assert.equal(result.id, "100");
    });

    it("should handle putAsyncNoRetrycanceled", async () => {
      const poller = await client.lROs.putAsyncNoRetrycanceled();

      const result = await poller.pollUntilDone();
      assert.equal(result._response[LROSYM].status, "Canceled");
    });

    it("should handle putAsyncSubResource", async () => {
      const poller = await client.lROs.putAsyncSubResource();

      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle deleteAsyncNoHeaderInRetry", async () => {
      const poller = await client.lROs.deleteAsyncNoHeaderInRetry();

      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle postAsyncNoRetrySucceeded", async () => {
      const poller = await client.lROs.postAsyncNoRetrySucceeded({
        product
      });
      const result = await poller.pollUntilDone();
      assert.deepInclude(result, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetryFailed", async () => {
      const poller = await client.lROs.postAsyncRetryFailed({
        product
      });
      const result = await poller.pollUntilDone();
      assert.deepEqual(result._response[LROSYM].status, "Failed");
    });

    it("should handle postAsyncRetrySucceeded", async () => {
      const poller = await client.lROs.postAsyncRetrySucceeded({
        product
      });
      const result = await poller.pollUntilDone();
      assert.deepInclude(result, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetrycanceled", async () => {
      const poller = await client.lROs.postAsyncRetrycanceled({
        product
      });
      const result = await poller.pollUntilDone();
      assert.deepInclude(result._response[LROSYM].status, "Canceled");
    });
  });
});

describe("Custom Headers", () => {
  let client: LROClient;
  let options: OperationOptions;

  beforeEach(() => {
    options = {
      requestOptions: {
        customHeaders: {
          "x-ms-client-request-id": "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
        }
      }
    };
    client = new LROClient();
  });

  it("should handle putAsyncRetrySucceeded with customheaders ", async () => {
    const poller = await client.lROsCustomHeader.putAsyncRetrySucceeded(
      options
    );
    const result = await poller.pollUntilDone();
    assert.deepInclude(result.provisioningState, "Succeeded");
    assert.deepInclude(result.id, "100");
    assert.deepInclude(result.name, "foo");
  });

  it("should handle postAsyncRetrySucceeded with customheaders ", async () => {
    const poller = await client.lROsCustomHeader.postAsyncRetrySucceeded(
      options
    );
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should handle put201CreatingSucceeded200 with customheaders ", async () => {
    const poller = await client.lROsCustomHeader.put201CreatingSucceeded200(
      options
    );
    const result = await poller.pollUntilDone();
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.name, "foo");
    assert.equal(result.id, "100");
  });

  it("should handle post202Retry200 with customheaders ", async () => {
    const poller = await client.lROsCustomHeader.post202Retry200(options);
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });
});

describe("LRO Sad scenarios", () => {
  let client: LROClient;

  beforeEach(() => {
    const pipelineOptions: InternalPipelineOptions = {
      retryOptions: {
        retryDelayInMs: 0
      }
    };
    client = new LROClient(pipelineOptions);
  });

  it("should handle PutNonRetry400 ", async () => {
    try {
      const poller = await client.lrosaDs.putNonRetry400();
      const result = await poller.pollUntilDone();
      throw new Error("Expected to thorw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle putNonRetry201Creating400 ", async () => {
    try {
      const poller = await client.lrosaDs.putNonRetry201Creating400();
      const result = await poller.pollUntilDone();
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should throw with putNonRetry201Creating400InvalidJson ", async () => {
    const poller = await client.lrosaDs.putNonRetry201Creating400InvalidJson();
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle putAsyncRelativeRetry400 ", async () => {
    const poller = await client.lrosaDs.putAsyncRelativeRetry400();
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle delete202NonRetry400 ", async () => {
    const poller = await client.lrosaDs.delete202NonRetry400();
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle deleteNonRetry400 ", async () => {
    try {
      const poller = await client.lrosaDs.deleteNonRetry400();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle deleteAsyncRelativeRetry400 ", async () => {
    const poller = await client.lrosaDs.deleteAsyncRelativeRetry400();

    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle postNonRetry400 ", async () => {
    try {
      const poller = await client.lrosaDs.postNonRetry400();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle post202NonRetry400 ", async () => {
    const poller = await client.lrosaDs.post202NonRetry400();
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle postAsyncRelativeRetry400 ", async () => {
    const poller = await client.lrosaDs.postAsyncRelativeRetry400();
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle PutError201NoProvisioningStatePayload ", async () => {
    const poller = await client.lrosaDs.putError201NoProvisioningStatePayload();
    const result = await poller.pollUntilDone();
    // Test server doesn't return a provisioningState so success is assumed as
    // expected in this scenario
    assert.equal(result._response.status, 201);
  });

  it("should handle putAsyncRelativeRetryNoStatusPayload ", async () => {
    const poller = await client.lrosaDs.putAsyncRelativeRetryNoStatusPayload();
    const result = await poller.pollUntilDone();
    // Test server doesn't return a provisioningState so success is assumed as
    // expected in this scenario
    assert.equal(result._response.status, 200);
  });

  it("should handle putAsyncRelativeRetryNoStatus ", async () => {
    const poller = await client.lrosaDs.putAsyncRelativeRetryNoStatus();
    const result = await poller.pollUntilDone();
    // Test server doesn't return a provisioningState so success is assumed as
    // expected in this scenario
    assert.equal(result._response.status, 200);
  });

  it("should handle delete204Succeeded ", async () => {
    const poller = await client.lrosaDs.delete204Succeeded();
    const result = await poller.pollUntilDone();
    // since no location or asyncoperation headers were returned
    // just pass through
    assert.equal(result._response.status, 204);
  });

  it("should handle deleteAsyncRelativeRetryNoStatus ", async () => {
    const poller = await client.lrosaDs.deleteAsyncRelativeRetryNoStatus();
    const result = await poller.pollUntilDone();
    // Test server doesn't return a status so success is assumed as
    // expected in this scenario
    assert.equal(result._response.status, 200);
  });

  it("should handle post202NoLocation ", async () => {
    const poller = await client.lrosaDs.post202NoLocation();
    const result = await poller.pollUntilDone();
    // since no location or asyncoperation headers were returned
    // just pass through
    assert.equal(result._response.status, 202);
  });

  it("should handle postAsyncRelativeRetryNoPayload ", async () => {
    const poller = await client.lrosaDs.postAsyncRelativeRetryNoPayload();
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should handle put200InvalidJson ", async () => {
    try {
      const poller = await client.lrosaDs.put200InvalidJson();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle putAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.putAsyncRelativeRetryInvalidHeader();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle putAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      const poller = await client.lrosaDs.putAsyncRelativeRetryInvalidJsonPolling();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle delete202RetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.delete202RetryInvalidHeader();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle deleteAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.deleteAsyncRelativeRetryInvalidHeader();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle DeleteAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      const poller = await client.lrosaDs.deleteAsyncRelativeRetryInvalidJsonPolling();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle post202RetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.post202RetryInvalidHeader();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle postAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.postAsyncRelativeRetryInvalidHeader();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle postAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      const poller = await client.lrosaDs.postAsyncRelativeRetryInvalidJsonPolling();
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });
});

describe("LRORetries", () => {
  let client: LROClient;

  beforeEach(() => {
    const pipelineOptions: InternalPipelineOptions = {
      retryOptions: {
        retryDelayInMs: 0
      }
    };
    client = new LROClient(pipelineOptions);
  });

  it("should retry put201CreatingSucceeded200", async () => {
    const poller = await client.lRORetrys.put201CreatingSucceeded200();
    const result = await poller.pollUntilDone();
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry putAsyncRelativeRetrySucceeded", async () => {
    const poller = await client.lRORetrys.putAsyncRelativeRetrySucceeded();
    const result = await poller.pollUntilDone();
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry deleteProvisioning202Accepted200Succeeded", async () => {
    const poller = await client.lRORetrys.deleteProvisioning202Accepted200Succeeded();
    const result = await poller.pollUntilDone();
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry delete202Retry200", async () => {
    const poller = await client.lRORetrys.delete202Retry200();
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should retry deleteAsyncRelativeRetrySucceeded", async () => {
    const poller = await client.lRORetrys.deleteAsyncRelativeRetrySucceeded();
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should retry post202Retry200", async () => {
    const poller = await client.lRORetrys.post202Retry200();
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should retry postAsyncRelativeRetrySucceeded", async () => {
    const poller = await client.lRORetrys.postAsyncRelativeRetrySucceeded();
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });
});
