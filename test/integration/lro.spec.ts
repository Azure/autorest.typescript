import { LROClient, Product } from "./generated/lro/src";
import { assert } from "chai";
import {
  HttpOperationResponse,
  InternalPipelineOptions,
  OperationOptions,
  RequestPolicyFactory
} from "@azure/core-http";

function getLROStatusFromBody(result: HttpOperationResponse): string {
  const { status } = result.parsedBody || {};
  return status;
}

const LROOptions = {
  updateIntervalInMs: 0
};

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
      const poller = await client.lROs.beginPut200Succeeded({
        ...LROOptions,
        requestOptions: {}
      });
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

      const poller = await client.lROs.beginPut200Succeeded(LROOptions);
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

  describe("serialized state", () => {
    let state: any, serializedState: string;
    it.only("should handle serializing the state", async () => {
      const poller = await client.lROs.beginPut200Succeeded(LROOptions);
      poller.onProgress(currentState => {
        if (state === undefined && serializedState === undefined) {
          state = currentState;
          serializedState = JSON.stringify({ state: currentState });
          assert.equal(serializedState, poller.toString());
        }
      });
      await poller.pollUntilDone();
      assert.ok(state.initialRawResponse);
    });
  });

  describe("BodyPolling Strategy", () => {
    it("should handle initial response with terminal state through an Azure Resource", async () => {
      const poller = await client.lROs.beginPut200Succeeded(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle initial response with terminal state without provisioning State", async () => {
      const poller = await client.lROs.beginPut200SucceededNoState(LROOptions);
      const result = await poller.pollUntilDone();
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle initial response creating followed by success through an Azure Resource", async () => {
      const poller = await client.lROs.beginPut201CreatingSucceeded200(
        LROOptions
      );

      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put200Acceptedcanceled200", async () => {
      const poller = await client.lROs.beginPut200Acceptedcanceled200(
        LROOptions
      );

      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Canceled");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put200UpdatingSucceeded204", async () => {
      const poller = await client.lROs.beginPut200UpdatingSucceeded204(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put201CreatingFailed200", async () => {
      const poller = await client.lROs.beginPut201CreatingFailed200(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Failed");
    });
  });

  describe("Location Strategy", () => {
    it("should handle post202Retry200", async () => {
      const poller = await client.lROs.beginPost202Retry200(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle post202NoRetry204", async () => {
      const poller = await client.lROs.beginPost202NoRetry204(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 204);
    });

    it("should handle deleteNoHeaderInRetry", async () => {
      const poller = await client.lROs.beginDeleteNoHeaderInRetry(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 204);
    });

    it("should handle put202Retry200", async () => {
      const poller = await client.lROs.beginPut202Retry200(LROOptions);
      const result = await poller.pollUntilDone();
      assert.deepEqual(result._response.status, 200);
    });

    it("should handle putNoHeaderInRetry", async () => {
      const poller = await client.lROs.beginPutNoHeaderInRetry(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle putSubResource", async () => {
      const poller = await client.lROs.beginPutSubResource(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle putNonResource", async () => {
      const poller = await client.lROs.beginPutNonResource(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "sku");
    });

    it("should handle delete202Retry200", async () => {
      const poller = await client.lROs.beginDelete202Retry200(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle delete202NoRetry204", async () => {
      const poller = await client.lROs.beginDelete202NoRetry204(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 204);
    });

    it("should handle deleteProvisioning202Accepted200Succeeded", async () => {
      const poller = await client.lROs.beginDeleteProvisioning202Accepted200Succeeded(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle deleteProvisioning202DeletingFailed200", async () => {
      const poller = await client.lROs.beginDeleteProvisioning202DeletingFailed200(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result.provisioningState, "Failed");
    });

    it("should handle deleteProvisioning202Deletingcanceled200", async () => {
      const poller = await client.lROs.beginDeleteProvisioning202Deletingcanceled200(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result.provisioningState, "Canceled");
    });
  });

  describe("Passthrough strategy", () => {
    it("should handle delete204Succeeded", async () => {
      const poller = await client.lROs.beginDelete204Succeeded(LROOptions);
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
      const poller = await client.lROs.beginPostDoubleHeadersFinalLocationGet(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGet", async () => {
      const poller = await client.lROs.beginPostDoubleHeadersFinalAzureHeaderGet(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
      assert.equal(result.id, "100");
    });

    it("should handle post200WithPayload", async () => {
      const poller = await client.lROs.beginPost200WithPayload(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "1");
      assert.equal(result.name, "product");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGetDefault", async () => {
      const poller = await client.lROs.beginPostDoubleHeadersFinalAzureHeaderGetDefault(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
      assert.equal(result.id, "100");
    });

    it("should handle deleteAsyncRetrySucceeded", async () => {
      const poller = await client.lROs.beginDeleteAsyncRetrySucceeded(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle deleteAsyncNoRetrySucceeded", async () => {
      const poller = await client.lROs.beginDeleteAsyncNoRetrySucceeded(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle deleteAsyncRetrycanceled", async () => {
      const poller = await client.lROs.beginDeleteAsyncRetrycanceled(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(getLROStatusFromBody(result._response), "Canceled");
    });

    it("should handle DeleteAsyncRetryFailed", async () => {
      const poller = await client.lROs.beginDeleteAsyncRetryFailed(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(getLROStatusFromBody(result._response), "Failed");
    });

    it("should handle putAsyncRetrySucceeded", async () => {
      const poller = await client.lROs.beginPutAsyncRetrySucceeded(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle put201Succeeded", async () => {
      const poller = await client.lROs.beginPut201Succeeded({
        ...LROOptions,
        product: {}
      });
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle post202List", async () => {
      const poller = await client.lROs.beginPost202List(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result[0].id, "100");
      assert.equal(result[0].name, "foo");
    });

    it("should handle putAsyncRetryFailed", async () => {
      const poller = await client.lROs.beginPutAsyncRetryFailed(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(getLROStatusFromBody(result._response), "Failed");
    });

    it("should handle putAsyncNonResource", async () => {
      const poller = await client.lROs.beginPutAsyncNonResource(LROOptions);
      await poller.poll();
      const result = await poller.pollUntilDone();
      assert.equal(result.name, "sku");
      assert.equal(result.id, "100");
    });

    it("should handle putAsyncNoHeaderInRetry", async () => {
      const poller = await client.lROs.beginPutAsyncNoHeaderInRetry(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.name, "foo");
      assert.equal(result.id, "100");
      assert.deepEqual(result.provisioningState, "Succeeded");
    });

    it("should handle putAsyncNoRetrySucceeded", async () => {
      const poller = await client.lROs.beginPutAsyncNoRetrySucceeded(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result.name, "foo");
      assert.equal(result.id, "100");
    });

    it("should handle putAsyncNoRetrycanceled", async () => {
      const poller = await client.lROs.beginPutAsyncNoRetrycanceled(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(getLROStatusFromBody(result._response), "Canceled");
    });

    it("should handle putAsyncSubResource", async () => {
      const poller = await client.lROs.beginPutAsyncSubResource(LROOptions);
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle deleteAsyncNoHeaderInRetry", async () => {
      const poller = await client.lROs.beginDeleteAsyncNoHeaderInRetry(
        LROOptions
      );
      const result = await poller.pollUntilDone();
      assert.equal(result._response.status, 200);
    });

    it("should handle postAsyncNoRetrySucceeded", async () => {
      const poller = await client.lROs.beginPostAsyncNoRetrySucceeded({
        ...LROOptions,
        product
      });
      const result = await poller.pollUntilDone();
      assert.deepInclude(result, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetryFailed", async () => {
      const poller = await client.lROs.beginPostAsyncRetryFailed({
        ...LROOptions,
        product
      });
      const result = await poller.pollUntilDone();
      assert.deepEqual(getLROStatusFromBody(result._response), "Failed");
    });

    it("should handle postAsyncRetrySucceeded", async () => {
      const poller = await client.lROs.beginPostAsyncRetrySucceeded({
        ...LROOptions,
        product
      });
      const result = await poller.pollUntilDone();
      assert.deepInclude(result, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetrycanceled", async () => {
      const poller = await client.lROs.beginPostAsyncRetrycanceled({
        ...LROOptions,
        product
      });
      const result = await poller.pollUntilDone();
      assert.deepInclude(getLROStatusFromBody(result._response), "Canceled");
    });
  });
});

describe("Custom Headers", () => {
  let client: LROClient;
  let options: OperationOptions;

  beforeEach(() => {
    options = {
      ...LROOptions,
      requestOptions: {
        customHeaders: {
          "x-ms-client-request-id": "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
        }
      }
    };
    client = new LROClient();
  });

  it("should handle putAsyncRetrySucceeded with customheaders ", async () => {
    const poller = await client.lROsCustomHeader.beginPutAsyncRetrySucceeded(
      options
    );
    const result = await poller.pollUntilDone();
    assert.deepInclude(result.provisioningState, "Succeeded");
    assert.deepInclude(result.id, "100");
    assert.deepInclude(result.name, "foo");
  });

  it("should handle postAsyncRetrySucceeded with customheaders ", async () => {
    const poller = await client.lROsCustomHeader.beginPostAsyncRetrySucceeded(
      options
    );
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should handle put201CreatingSucceeded200 with customheaders ", async () => {
    const poller = await client.lROsCustomHeader.beginPut201CreatingSucceeded200(
      options
    );
    const result = await poller.pollUntilDone();
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.name, "foo");
    assert.equal(result.id, "100");
  });

  it("should handle post202Retry200 with customheaders ", async () => {
    const poller = await client.lROsCustomHeader.beginPost202Retry200(options);
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
      const poller = await client.lrosaDs.beginPutNonRetry400(LROOptions);
      await poller.pollUntilDone();
      throw new Error("Expected to throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle putNonRetry201Creating400 ", async () => {
    try {
      const poller = await client.lrosaDs.beginPutNonRetry201Creating400(
        LROOptions
      );
      await poller.pollUntilDone();
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should throw with putNonRetry201Creating400InvalidJson ", async () => {
    const poller = await client.lrosaDs.beginPutNonRetry201Creating400InvalidJson(
      LROOptions
    );
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle putAsyncRelativeRetry400 ", async () => {
    const poller = await client.lrosaDs.beginPutAsyncRelativeRetry400(
      LROOptions
    );
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle delete202NonRetry400 ", async () => {
    const poller = await client.lrosaDs.beginDelete202NonRetry400(LROOptions);
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle deleteNonRetry400 ", async () => {
    try {
      const poller = await client.lrosaDs.beginDeleteNonRetry400(LROOptions);
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle deleteAsyncRelativeRetry400 ", async () => {
    const poller = await client.lrosaDs.beginDeleteAsyncRelativeRetry400(
      LROOptions
    );

    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle postNonRetry400 ", async () => {
    try {
      const poller = await client.lrosaDs.beginPostNonRetry400(LROOptions);
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle post202NonRetry400 ", async () => {
    const poller = await client.lrosaDs.beginPost202NonRetry400(LROOptions);
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle postAsyncRelativeRetry400 ", async () => {
    const poller = await client.lrosaDs.beginPostAsyncRelativeRetry400(
      LROOptions
    );
    try {
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle PutError201NoProvisioningStatePayload ", async () => {
    const poller = await client.lrosaDs.beginPutError201NoProvisioningStatePayload(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    // Test server doesn't return a provisioningState so success is assumed as
    // expected in this scenario
    assert.equal(result._response.status, 201);
  });

  it("should handle putAsyncRelativeRetryNoStatusPayload ", async () => {
    const poller = await client.lrosaDs.beginPutAsyncRelativeRetryNoStatusPayload(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    // Test server doesn't return a provisioningState so success is assumed as
    // expected in this scenario
    assert.equal(result._response.status, 200);
  });

  it("should handle putAsyncRelativeRetryNoStatus ", async () => {
    const poller = await client.lrosaDs.beginPutAsyncRelativeRetryNoStatus(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    // Test server doesn't return a provisioningState so success is assumed as
    // expected in this scenario
    assert.equal(result._response.status, 200);
  });

  it("should handle delete204Succeeded ", async () => {
    const poller = await client.lrosaDs.beginDelete204Succeeded(LROOptions);
    const result = await poller.pollUntilDone();
    // since no location or asyncoperation headers were returned
    // just pass through
    assert.equal(result._response.status, 204);
  });

  it("should handle deleteAsyncRelativeRetryNoStatus ", async () => {
    const poller = await client.lrosaDs.beginDeleteAsyncRelativeRetryNoStatus(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    // Test server doesn't return a status so success is assumed as
    // expected in this scenario
    assert.equal(result._response.status, 200);
  });

  it("should handle post202NoLocation ", async () => {
    const poller = await client.lrosaDs.beginPost202NoLocation(LROOptions);
    const result = await poller.pollUntilDone();
    // since no location or asyncoperation headers were returned
    // just pass through
    assert.equal(result._response.status, 202);
  });

  it("should handle postAsyncRelativeRetryNoPayload ", async () => {
    const poller = await client.lrosaDs.beginPostAsyncRelativeRetryNoPayload(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should handle put200InvalidJson ", async () => {
    try {
      const poller = await client.lrosaDs.beginPut200InvalidJson(LROOptions);
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle putAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.beginPutAsyncRelativeRetryInvalidHeader(
        LROOptions
      );
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle putAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      const poller = await client.lrosaDs.beginPutAsyncRelativeRetryInvalidJsonPolling(
        LROOptions
      );
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle delete202RetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.beginDelete202RetryInvalidHeader(
        LROOptions
      );
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle deleteAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.beginDeleteAsyncRelativeRetryInvalidHeader(
        LROOptions
      );
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle DeleteAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      const poller = await client.lrosaDs.beginDeleteAsyncRelativeRetryInvalidJsonPolling(
        LROOptions
      );
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle post202RetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.beginPost202RetryInvalidHeader(
        LROOptions
      );
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle postAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      const poller = await client.lrosaDs.beginPostAsyncRelativeRetryInvalidHeader(
        LROOptions
      );
      await poller.pollUntilDone();
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle postAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      const poller = await client.lrosaDs.beginPostAsyncRelativeRetryInvalidJsonPolling(
        LROOptions
      );
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
    const poller = await client.lRORetrys.beginPut201CreatingSucceeded200(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry putAsyncRelativeRetrySucceeded", async () => {
    const poller = await client.lRORetrys.beginPutAsyncRelativeRetrySucceeded(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry deleteProvisioning202Accepted200Succeeded", async () => {
    const poller = await client.lRORetrys.beginDeleteProvisioning202Accepted200Succeeded(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry delete202Retry200", async () => {
    const poller = await client.lRORetrys.beginDelete202Retry200(LROOptions);
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should retry deleteAsyncRelativeRetrySucceeded", async () => {
    const poller = await client.lRORetrys.beginDeleteAsyncRelativeRetrySucceeded(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should retry post202Retry200", async () => {
    const poller = await client.lRORetrys.beginPost202Retry200(LROOptions);
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });

  it("should retry postAsyncRelativeRetrySucceeded", async () => {
    const poller = await client.lRORetrys.beginPostAsyncRelativeRetrySucceeded(
      LROOptions
    );
    const result = await poller.pollUntilDone();
    assert.equal(result._response.status, 200);
  });
});
