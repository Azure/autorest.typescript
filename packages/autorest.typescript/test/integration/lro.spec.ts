import { LROClient, Product } from "./generated/lro/src";
import { assert } from "chai";
import { PipelinePolicy } from "@azure/core-rest-pipeline";
import {
  FullOperationResponse,
  OperationOptions,
  ServiceClientOptions
} from "@azure/core-client";

import {
  check200,
  check201,
  check202,
  check204
} from "../utils/responseStatusChecker";
import { addCookiePolicies } from "../utils/cookies";

const clientOptions: ServiceClientOptions = {
  allowInsecureConnection: true
};

let lastResponse: FullOperationResponse | undefined;
function onResponse(response: FullOperationResponse) {
  lastResponse = response;
}

const LROOptions = {
  updateIntervalInMs: 0,
  onResponse: onResponse
};

describe("LROs", () => {
  let client: LROClient;

  beforeEach(() => {
    client = new LROClient(clientOptions);
    addCookiePolicies(client.pipeline);
  });

  describe("Pipeline validation", () => {
    it("should execute custom pipeline when passed in a factory array", async () => {
      let calledCustomPolicy = false;
      const customPolicy: PipelinePolicy = {
        name: "customPolicy",
        sendRequest: (req, next) => {
          calledCustomPolicy = true;
          return next(req);
        }
      };
      client = new LROClient(clientOptions);
      client.pipeline.addPolicy(customPolicy);
      const poller = await client.lROs.beginPut200Succeeded({
        ...LROOptions,
        requestOptions: {},
        onResponse: rawResponse => {
          // Verify that the operation works as expected
          // since the custom pipeline was passed as an array
          // and deserialize was not included in the array the result
          // will be in _response.parsedBody
          if (rawResponse.bodyAsText) {
            assert.equal(
              JSON.parse(rawResponse.bodyAsText).properties.provisioningState,
              "Succeeded"
            );
          } else {
            assert.fail("No bodyAsText in raw response");
          }

          // Verify that a default policy was executed
          assert.isDefined(
            rawResponse.request.headers.has("x-ms-client-request-id")
          );
        }
      });
      const result = await poller.pollUntilDone();

      // Verify that a custom policy was executed
      assert.isTrue(calledCustomPolicy);
    });

    it("should execute custom pipeline when passed in as a function", async () => {
      let calledCustomPolicy = false;
      // Prevents caching redirects
      const customPolicy: PipelinePolicy = {
        name: "customPolicy",
        sendRequest: (req, next) => {
          calledCustomPolicy = true;
          return next(req);
        }
      };

      client = new LROClient(clientOptions);
      client.pipeline.addPolicy(customPolicy);

      const poller = await client.lROs.beginPut200Succeeded({
        ...LROOptions,
        onResponse: rawResponse => {
          // Verify that a default policy was executed
          assert.isDefined(
            rawResponse.request.headers.has("x-ms-client-request-id")
          );
        }
      });
      const result = await poller.pollUntilDone();

      // Verify that the operation works as expected
      assert.equal(result.provisioningState, "Succeeded");

      // Verify that a custom policy was executed
      assert.isTrue(calledCustomPolicy);
    });
  });

  describe("serialized state", () => {
    let state: any, serializedState: string;
    it("should handle serializing the state", async () => {
      const poller = await client.lROs.beginPut200Succeeded(LROOptions);
      if (!poller.isDone()) {
        poller.onProgress(currentState => {
          if (state === undefined && serializedState === undefined) {
            state = currentState;
            serializedState = JSON.stringify({ state: currentState });
            assert.equal(serializedState, poller.toString());
          }
        });
      }
      await poller.pollUntilDone();
      if (state) {
        assert.ok(state.initialRawResponse);
      }
    });
  });

  describe("BodyPolling Strategy", () => {
    it("should handle initial response with terminal state through an Azure Resource", async () => {
      const result = await client.lROs.beginPut200SucceededAndWait(LROOptions);
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle initial response with terminal state without provisioning State", async () => {
      const result = await client.lROs.beginPut200SucceededNoStateAndWait(
        LROOptions
      );
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle initial response creating followed by success through an Azure Resource", async () => {
      const result = await client.lROs.beginPut201CreatingSucceeded200AndWait(
        LROOptions
      );
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put200Acceptedcanceled200", async () => {
      try {
        await client.lROs.beginPut200Acceptedcanceled200AndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: canceled."
        );
      }
    });

    it("should handle put200UpdatingSucceeded204", async () => {
      const result = await client.lROs.beginPut200UpdatingSucceeded204AndWait(
        LROOptions
      );
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put201CreatingFailed200", async () => {
      try {
        await client.lROs.beginPut201CreatingFailed200AndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: failed."
        );
      }
    });
  });

  describe("Location Strategy", () => {
    it("should handle post202Retry200", async () => {
      await client.lROs.beginPost202Retry200AndWait(LROOptions);
      check200(lastResponse);
    });

    it("should handle post202NoRetry204", async () => {
      try {
        await client.lROs.beginPost202NoRetry204AndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "Received unexpected HTTP status code 204 while polling. This may indicate a server issue."
        );
      }
    });

    it("should handle deleteNoHeaderInRetry", async () => {
      try {
        await client.lROs.beginDeleteNoHeaderInRetryAndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "Received unexpected HTTP status code 204 while polling. This may indicate a server issue."
        );
      }
    });

    it("should handle put202Retry200", async () => {
      await client.lROs.beginPut202Retry200AndWait(LROOptions);
      check200(lastResponse);
    });

    it("should handle putNoHeaderInRetry", async () => {
      const result = await client.lROs.beginPutNoHeaderInRetryAndWait(
        LROOptions
      );
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle putSubResource", async () => {
      const result = await client.lROs.beginPutSubResourceAndWait(LROOptions);
      assert.equal(result.id, "100");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle putNonResource", async () => {
      const result = await client.lROs.beginPutNonResourceAndWait(LROOptions);
      assert.equal(result.id, "100");
      assert.equal(result.name, "sku");
    });

    it("should handle delete202Retry200", async () => {
      await client.lROs.beginDelete202Retry200AndWait(LROOptions);
      check200(lastResponse);
    });

    it("should handle delete202NoRetry204", async () => {
      try {
        await client.lROs.beginDelete202NoRetry204AndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "Received unexpected HTTP status code 204 while polling. This may indicate a server issue."
        );
      }
    });

    it("should handle deleteProvisioning202Accepted200Succeeded", async () => {
      await client.lROs.beginDeleteProvisioning202Accepted200Succeeded(
        LROOptions
      );
      check200(lastResponse);
    });

    it("should handle deleteProvisioning202DeletingFailed200", async () => {
      const result = await client.lROs.beginDeleteProvisioning202DeletingFailed200AndWait(
        LROOptions
      );
      assert.equal(result.provisioningState, "Failed");
    });

    it("should handle deleteProvisioning202Deletingcanceled200", async () => {
      const result = await client.lROs.beginDeleteProvisioning202Deletingcanceled200AndWait(
        LROOptions
      );
      assert.equal(result.provisioningState, "Canceled");
    });
  });

  describe("Passthrough strategy", () => {
    it("should handle delete204Succeeded", async () => {
      await client.lROs.beginDelete204SucceededAndWait(LROOptions);
      check204(lastResponse);
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
      const result = await client.lROs.beginPostDoubleHeadersFinalLocationGetAndWait(
        LROOptions
      );
      check200(lastResponse);
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGet", async () => {
      const result = await client.lROs.beginPostDoubleHeadersFinalAzureHeaderGetAndWait(
        LROOptions
      );
      check200(lastResponse);
      assert.equal(result.id, "100");
    });

    it("should handle post200WithPayload", async () => {
      const result = await client.lROs.beginPost200WithPayloadAndWait(
        LROOptions
      );
      assert.equal(result.id, "1");
      assert.equal(result.name, "product");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGetDefault", async () => {
      const result = await client.lROs.beginPostDoubleHeadersFinalAzureHeaderGetDefaultAndWait(
        LROOptions
      );
      check200(lastResponse);
      assert.equal(result.id, "100");
    });

    it("should handle deleteAsyncRetrySucceeded", async () => {
      await client.lROs.beginDeleteAsyncRetrySucceededAndWait(LROOptions);
      check200(lastResponse);
    });

    it("should handle deleteAsyncNoRetrySucceeded", async () => {
      await client.lROs.beginDeleteAsyncNoRetrySucceededAndWait(LROOptions);
      check200(lastResponse);
    });

    it("should handle deleteAsyncRetrycanceled", async () => {
      try {
        await client.lROs.beginDeleteAsyncRetrycanceledAndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: canceled."
        );
      }
    });

    it("should handle DeleteAsyncRetryFailed", async () => {
      try {
        await client.lROs.beginDeleteAsyncRetryFailedAndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: failed."
        );
      }
    });

    it("should handle putAsyncRetrySucceeded", async () => {
      const result = await client.lROs.beginPutAsyncRetrySucceededAndWait(
        LROOptions
      );
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle put201Succeeded", async () => {
      const result = await client.lROs.beginPut201SucceededAndWait({
        ...LROOptions,
        product: {}
      });
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle post202List", async () => {
      const result = await client.lROs.beginPost202ListAndWait(LROOptions);
      assert.equal(result[0].id, "100");
      assert.equal(result[0].name, "foo");
    });

    it("should handle putAsyncRetryFailed", async () => {
      try {
        await client.lROs.beginPutAsyncRetryFailedAndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: failed."
        );
      }
    });

    it("should handle putAsyncNonResource", async () => {
      const result = await client.lROs.beginPutAsyncNonResourceAndWait(
        LROOptions
      );
      assert.equal(result.name, "sku");
      assert.equal(result.id, "100");
    });

    it("should handle putAsyncNoHeaderInRetry", async () => {
      const result = await client.lROs.beginPutAsyncNoHeaderInRetryAndWait(
        LROOptions
      );
      assert.equal(result.name, "foo");
      assert.equal(result.id, "100");
      console.log(JSON.stringify(result));
      assert.deepEqual(result.provisioningState, "Succeeded");
    });

    it("should handle putAsyncNoRetrySucceeded", async () => {
      const result = await client.lROs.beginPutAsyncNoRetrySucceededAndWait(
        LROOptions
      );
      assert.equal(result.name, "foo");
      assert.equal(result.id, "100");
    });

    it("should handle putAsyncNoRetrycanceled", async () => {
      try {
        await client.lROs.beginPutAsyncNoRetrycanceledAndWait(LROOptions);
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: canceled."
        );
      }
    });

    it("should handle putAsyncSubResource", async () => {
      const result = await client.lROs.beginPutAsyncSubResourceAndWait(
        LROOptions
      );
      assert.equal(result.id, "100");
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle deleteAsyncNoHeaderInRetry", async () => {
      await client.lROs.beginDeleteAsyncNoHeaderInRetryAndWait(LROOptions);
      check200(lastResponse);
    });

    it("should handle postAsyncNoRetrySucceeded", async () => {
      const result = await client.lROs.beginPostAsyncNoRetrySucceededAndWait({
        ...LROOptions,
        product
      });
      assert.deepInclude(result, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetryFailed", async () => {
      try {
        await client.lROs.beginPostAsyncRetryFailedAndWait({
          ...LROOptions,
          product
        });
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: failed."
        );
      }
    });

    it("should handle postAsyncRetrySucceeded", async () => {
      const result = await client.lROs.beginPostAsyncRetrySucceededAndWait({
        ...LROOptions,
        product
      });
      assert.deepInclude(result, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetrycanceled", async () => {
      try {
        await client.lROs.beginPostAsyncRetrycanceledAndWait({
          ...LROOptions,
          product
        });
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: canceled."
        );
      }
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
    client = new LROClient(clientOptions);
    addCookiePolicies(client.pipeline);
  });

  it("should handle putAsyncRetrySucceeded with customheaders ", async () => {
    const result = await client.lROsCustomHeader.beginPutAsyncRetrySucceededAndWait(
      options
    );
    assert.deepInclude(result.provisioningState, "Succeeded");
    assert.deepInclude(result.id, "100");
    assert.deepInclude(result.name, "foo");
  });

  it("should handle postAsyncRetrySucceeded with customheaders ", async () => {
    await client.lROsCustomHeader.beginPostAsyncRetrySucceededAndWait(options);
    check200(lastResponse);
  });

  it("should handle put201CreatingSucceeded200 with customheaders ", async () => {
    const result = await client.lROsCustomHeader.beginPut201CreatingSucceeded200AndWait(
      options
    );
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.name, "foo");
    assert.equal(result.id, "100");
  });

  it("should handle post202Retry200 with customheaders ", async () => {
    await client.lROsCustomHeader.beginPost202Retry200AndWait(options);
    check200(lastResponse);
  });
}).timeout(5000);

describe("LRO Sad scenarios", () => {
  let client: LROClient;

  beforeEach(() => {
    const pipelineOptions: ServiceClientOptions = {
      ...clientOptions,
      retryOptions: {
        retryDelayInMs: 0
      }
    };
    client = new LROClient(pipelineOptions);
    addCookiePolicies(client.pipeline);
  });

  it("should handle PutNonRetry400 ", async () => {
    try {
      await client.lrosaDs.beginPutNonRetry400AndWait(LROOptions);
      throw new Error("Expected to throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle putNonRetry201Creating400 ", async () => {
    try {
      await client.lrosaDs.beginPutNonRetry201Creating400AndWait(LROOptions);
      throw new Error("Expected to throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should throw with putNonRetry201Creating400InvalidJson ", async () => {
    try {
      await client.lrosaDs.beginPutNonRetry201Creating400InvalidJsonAndWait(
        LROOptions
      );
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle putAsyncRelativeRetry400 ", async () => {
    try {
      await client.lrosaDs.beginPutAsyncRelativeRetry400AndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle delete202NonRetry400 ", async () => {
    try {
      await client.lrosaDs.beginDelete202NonRetry400AndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle deleteNonRetry400 ", async () => {
    try {
      await client.lrosaDs.beginDeleteNonRetry400AndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle deleteAsyncRelativeRetry400 ", async () => {
    try {
      await client.lrosaDs.beginDeleteAsyncRelativeRetry400AndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle postNonRetry400 ", async () => {
    try {
      await client.lrosaDs.beginPostNonRetry400AndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle post202NonRetry400 ", async () => {
    try {
      await client.lrosaDs.beginPost202NonRetry400AndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle postAsyncRelativeRetry400 ", async () => {
    try {
      await client.lrosaDs.beginPostAsyncRelativeRetry400AndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 400);
    }
  });

  it("should handle PutError201NoProvisioningStatePayload ", async () => {
    await client.lrosaDs.beginPutError201NoProvisioningStatePayloadAndWait(
      LROOptions
    );
    check201(lastResponse);
  });

  it("should handle putAsyncRelativeRetryNoStatusPayload ", async () => {
    await client.lrosaDs.beginPutAsyncRelativeRetryNoStatusPayloadAndWait(
      // Test server doesn't return a provisioningState so success is assumed as
      // expected in this scenario
      LROOptions
    );
    check200(lastResponse);
  });

  it("should handle putAsyncRelativeRetryNoStatus ", async () => {
    await client.lrosaDs.beginPutAsyncRelativeRetryNoStatusAndWait(LROOptions);
    check200(lastResponse);
  });

  it("should handle delete204Succeeded ", async () => {
    await client.lrosaDs.beginDelete204SucceededAndWait(LROOptions);
    check204(lastResponse);
  });

  it("should handle deleteAsyncRelativeRetryNoStatus ", async () => {
    await client.lrosaDs.beginDeleteAsyncRelativeRetryNoStatusAndWait(
      LROOptions
    );
    check200(lastResponse);
  });

  it("should handle post202NoLocation ", async () => {
    await client.lrosaDs.beginPost202NoLocationAndWait(LROOptions);
    check202(lastResponse);
  });

  it("should handle postAsyncRelativeRetryNoPayload ", async () => {
    await client.lrosaDs.beginPostAsyncRelativeRetryNoPayloadAndWait(
      LROOptions
    );
    check200(lastResponse);
  });

  it("should handle put200InvalidJson ", async () => {
    try {
      await client.lrosaDs.beginPut200InvalidJsonAndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle putAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      await client.lrosaDs.beginPutAsyncRelativeRetryInvalidHeaderAndWait(
        LROOptions
      );
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle putAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      await client.lrosaDs.beginPutAsyncRelativeRetryInvalidJsonPollingAndWait(
        LROOptions
      );
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle delete202RetryInvalidHeader ", async () => {
    try {
      await client.lrosaDs.beginDelete202RetryInvalidHeaderAndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle deleteAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      await client.lrosaDs.beginDeleteAsyncRelativeRetryInvalidHeaderAndWait(
        LROOptions
      );
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle DeleteAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      await client.lrosaDs.beginDeleteAsyncRelativeRetryInvalidJsonPollingAndWait(
        LROOptions
      );
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });

  it("should handle post202RetryInvalidHeader ", async () => {
    try {
      await client.lrosaDs.beginPost202RetryInvalidHeaderAndWait(LROOptions);
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle postAsyncRelativeRetryInvalidHeader ", async () => {
    try {
      await client.lrosaDs.beginPostAsyncRelativeRetryInvalidHeaderAndWait(
        LROOptions
      );
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.statusCode, 404);
    }
  });

  it("should handle postAsyncRelativeRetryInvalidJsonPolling ", async () => {
    try {
      await client.lrosaDs.beginPostAsyncRelativeRetryInvalidJsonPollingAndWait(
        LROOptions
      );
      assert.fail("Scenario should throw");
    } catch (error) {
      assert.equal(error.code, "PARSE_ERROR");
    }
  });
});

describe("LRORetries", () => {
  let client: LROClient;

  beforeEach(() => {
    const pipelineOptions: ServiceClientOptions = {
      ...clientOptions,
      retryOptions: {
        retryDelayInMs: 0
      }
    };
    client = new LROClient(pipelineOptions);
    addCookiePolicies(client.pipeline);
  });

  it("should retry put201CreatingSucceeded200", async () => {
    const result = await client.lRORetrys.beginPut201CreatingSucceeded200AndWait(
      LROOptions
    );
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry putAsyncRelativeRetrySucceeded", async () => {
    const result = await client.lRORetrys.beginPutAsyncRelativeRetrySucceededAndWait(
      LROOptions
    );
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry deleteProvisioning202Accepted200Succeeded", async () => {
    const result = await client.lRORetrys.beginDeleteProvisioning202Accepted200SucceededAndWait(
      LROOptions
    );
    assert.equal(result.provisioningState, "Succeeded");
    assert.equal(result.id, "100");
    assert.equal(result.name, "foo");
  });

  it("should retry delete202Retry200", async () => {
    await client.lRORetrys.beginDelete202Retry200AndWait(LROOptions);
    check200(lastResponse);
  });

  it("should retry deleteAsyncRelativeRetrySucceeded", async () => {
    await client.lRORetrys.beginDeleteAsyncRelativeRetrySucceededAndWait(
      LROOptions
    );
    check200(lastResponse);
  });

  it("should retry post202Retry200", async () => {
    await client.lRORetrys.beginPost202Retry200AndWait(LROOptions);
    check200(lastResponse);
  });

  it("should retry postAsyncRelativeRetrySucceeded", async () => {
    await client.lRORetrys.beginPostAsyncRelativeRetrySucceededAndWait(
      LROOptions
    );
    check200(lastResponse);
  });
});
