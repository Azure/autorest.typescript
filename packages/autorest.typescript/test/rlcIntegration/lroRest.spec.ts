import LRORest, {
  LRORestClient,
  getLongRunningPoller,
  Product,
  isUnexpected
} from "./generated/lroRest/src";
import chai from "chai";
import { assert } from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
import { addCookiePolicies } from "../utils/cookies";
import { isNode } from "@azure/core-util";

function createClient() {
  const client = LRORest({
    allowInsecureConnection: true,
    retryOptions: { retryDelayInMs: 0 }
  });

  addCookiePolicies(client.pipeline);
  return client;
}

describe("LRO Rest Client", () => {
  let client: LRORestClient;

  beforeEach(() => {
    client = createClient();
  });

  describe("BodyPolling Strategy", () => {
    it("should handle initial response with terminal state through an Azure Resource", async () => {
      const initialResponse = await client.path("/lro/put/200/succeeded").put();
      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle initial response with terminal state without provisioning State", async () => {
      const initialResponse = await client
        .path("/lro/put/200/succeeded/nostate")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }

      assert.deepEqual(result.body.id, "100");
      assert.deepEqual(result.body.name, "foo");
    });

    it("should handle initial response creating followed by success through an Azure Resource", async () => {
      const initialResponse = await client
        .path("/lro/put/201/creating/succeeded/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }

      assert.deepEqual(result.body.properties?.provisioningState, "Succeeded");
      assert.deepEqual(result.body.id, "100");
      assert.deepEqual(result.body.name, "foo");
    });

    it("should handle put200Acceptedcanceled200", async () => {
      const initialResponse = await client
        .path("/lro/put/200/accepted/canceled/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const response = await poller.pollUntilDone();
      if (isUnexpected(response)) {
        assert.fail(`Unexpected status code ${response.status}`);
      }
      assert.equal(poller.getOperationState().status, "canceled");
      assert.equal(response.status, "200");
      assert.deepEqual(response.body.properties?.provisioningState, "Canceled");
    });

    it("should handle put200UpdatingSucceeded200", async () => {
      const initialResponse = await client
        .path("/lro/put/200/updating/succeeded/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }

      assert.deepEqual(result.body.properties?.provisioningState, "Succeeded");
      assert.deepEqual(result.body.id, "100");
      assert.deepEqual(result.body.name, "foo");
    });

    it("should handle put201CreatingFailed", async () => {
      const initialResponse = await client
        .path("/lro/put/201/created/failed/200")
        .put();

      try {
        await getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0,
          resolveOnUnsuccessful: false
        });
      } catch (e) {
        assert.equal(e.message, "The long-running operation has failed");
      }
    });
  });

  describe("Location Strategy", () => {
    it("should handle post202Retry200", async () => {
      const initialResponse = await client
        .path("/lro/post/202/retry/200")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
    });

    it("should handle post202NoRetry204", async () => {
      const initialResponse = await client
        .path("/lro/post/202/noretry/204")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "204");
      assert.equal(result.body, undefined);
    });

    it("should handle deleteNoHeaderInRetry", async () => {
      const initialResponse = await client
        .path("/lro/delete/noheader")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "204");
      assert.equal(result.body, undefined);
    });

    it("should handle put202Retry200", async () => {
      const initialResponse = await client.path("/lro/put/202/retry/200").put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
      assert.deepEqual(result.body, { id: "100", name: "foo" });
    });

    it("should handle putNoHeaderInRetry", async () => {
      const initialResponse = await client
        .path("/lro/put/noheader/202/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
    });

    it("should handle putSubResource", async () => {
      const initialResponse = await client
        .path("/lro/putsubresource/202/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
    });

    it("should handle putNonResource", async () => {
      const initialResponse = await client
        .path("/lro/putnonresource/202/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
    });

    it("should handle delete202Retry200", async () => {
      const initialResponse = await client
        .path("/lro/delete/202/retry/200")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
    });

    it("should handle delete202NoRetry204", async () => {
      // await client.lROs.beginDelete202NoRetry204AndWait(LROOptions);
      const initialResponse = await client
        .path("/lro/delete/202/noretry/204")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "204");
      assert.equal(result.body, undefined);
    });

    it("should handle deleteProvisioning202Accepted200Succeeded", async () => {
      const initialResponse = await client
        .path("/lro/delete/provisioning/202/accepted/200/succeeded")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });
      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
    });

    it("should handle deleteProvisioning202DeletingFailed200", async () => {
      const initialResponse = await client
        .path("/lro/delete/provisioning/202/deleting/200/failed")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });
      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.body.properties?.provisioningState, "Failed");
    });

    it("should handle deleteProvisioning202Deletingcanceled200", async () => {
      const initialResponse = await client
        .path("/lro/delete/provisioning/202/deleting/200/canceled")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.equal(result.body.properties?.provisioningState, "Canceled");
    });
  });

  describe("Passthrough strategy", () => {
    it("should handle delete204Succeeded", async () => {
      const initialResponse = await client
        .path("/lro/delete/204/succeeded")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "204");
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
      const initialResponse = await client
        .pathUnchecked("/lro/LROPostDoubleHeadersFinalLocationGet")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
      assert.equal(result.body.id, "100");
      assert.equal(result.body.name, "foo");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGet", async () => {
      // TODO: Final Location via
      const initialResponse = await client
        .pathUnchecked("/lro/LROPostDoubleHeadersFinalAzureHeaderGet")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0,
        resourceLocationConfig: "azure-async-operation"
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
      assert.deepEqual(result.body.status, "succeeded");
    });

    it("should handle post200WithPayload", async () => {
      const initialResponse = await client.path("/lro/post/payload/200").post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
      assert.equal(result.body.id, "1");
      assert.equal(result.body.name, "product");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGetDefault", async () => {
      const initialResponse = await client
        .path("/lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
    });

    it("should handle deleteAsyncRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/deleteasync/retry/succeeded")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "succeeded");
      assert.equal(result.status, "200");
    });

    it("should handle deleteAsyncNoRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/deleteasync/noretry/succeeded")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle deleteAsyncRetrycanceled", async () => {
      const initialResponse = await client
        .path("/lro/deleteasync/retry/canceled")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "canceled");
      assert.equal(result.status, "200");
    });

    it("should handle DeleteAsyncRetryFailed", async () => {
      const initialResponse = await client
        .path("/lro/deleteasync/retry/failed")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(poller.getOperationState().status, "failed");
      assert.equal(result.status, "200");
    });

    it("should handle putAsyncRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/putasync/retry/succeeded")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.equal(result.body.id, "100");
      assert.equal(result.body.name, "foo");
      assert.equal(result.body.properties?.provisioningState, "Succeeded");
    });

    it("should handle put201Succeeded", async () => {
      const initialResponse = await client.path("/lro/put/201/succeeded").put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.equal(result.body.id, "100");
      assert.equal(result.body.name, "foo");
      assert.equal(result.body.properties?.provisioningState, "Succeeded");
    });

    it("should handle post202List", async () => {
      const initialResponse = await client.path("/lro/list").post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      if (result.status === "202") {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.equal(result.status, "200");
      assert.equal(result.body.length, 1);
      assert.equal(result.body[0].id, "100");
      assert.equal(result.body[0].name, "foo");
    });

    it("should handle putAsyncRetryFailed", async () => {
      const initialResponse = await client
        .path("/lro/putasync/retry/failed")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      assert.equal(poller.getOperationState().status, "failed");
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.equal(result.status, "200");
    });

    it("should handle putAsyncNonResource", async () => {
      const initialResponse = await client
        .path("/lro/putnonresourceasync/202/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle putAsyncNoHeaderInRetry", async () => {
      const initialResponse = await client
        .path("/lro/putasync/noheader/201/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle putAsyncNoRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/putasync/noretry/succeeded")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }

      assert.equal(result.body.name, "foo");
      assert.equal(result.body.id, "100");
    });

    it("should handle putAsyncNoRetrycanceled", async () => {
      const initialResponse = await client
        .path("/lro/putasync/noretry/canceled")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
      assert.equal(poller.getOperationState().status, "canceled");
    });

    it("should handle putAsyncSubResource", async () => {
      const initialResponse = await client
        .path("/lro/putsubresourceasync/202/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle deleteAsyncNoHeaderInRetry", async () => {
      const initialResponse = await client
        .path("/lro/deleteasync/noheader/202/204")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle postAsyncNoRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/postasync/noretry/succeeded")
        .post({ body: { ...product } });

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.deepInclude(result.body, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetryFailed", async () => {
      const initialResponse = await client
        .path("/lro/postasync/retry/failed")
        .post({ body: product });

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle postAsyncRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/postasync/retry/succeeded")
        .post({ body: { ...product } });

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }

      assert.deepInclude(result.body, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetrycanceled", async () => {
      const initialResponse = await client
        .path("/lro/postasync/retry/canceled")
        .post({ body: product });

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
      assert.equal(poller.getOperationState().status, "canceled");
    });
  });

  describe("Custom Headers", () => {
    it("should handle putAsyncRetrySucceeded with customheaders ", async () => {
      const initialResponse = await client
        .path("/lro/putasync/retry/succeeded")
        .put({
          headers: {
            "x-ms-client-request-id": "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
          }
        });

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }

      assert.deepInclude(
        result.body.properties?.provisioningState,
        "Succeeded"
      );
      assert.deepInclude(result.body.id, "100");
      assert.deepInclude(result.body.name, "foo");
    });

    it("should handle postAsyncRetrySucceeded with customheaders ", async () => {
      const initialResponse = await client
        .path("/lro/postasync/retry/succeeded")
        .post({
          headers: {
            "x-ms-client-request-id": "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
          }
        });

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }

      assert.equal(result.status, "200");
    });

    it("should handle put201CreatingSucceeded200 with customheaders ", async () => {
      const initialResponse = await client
        .path("/lro/put/201/creating/succeeded/200")
        .put({
          headers: {
            "x-ms-client-request-id": "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
          }
        });

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
      }
      assert.equal(result.body.properties?.provisioningState, "Succeeded");
      assert.equal(result.body.name, "foo");
      assert.equal(result.body.id, "100");
    });

    it("should handle post202Retry200 with customheaders ", async () => {
      const initialResponse = await client
        .path("/lro/post/202/retry/200")
        .post({
          headers: {
            "x-ms-client-request-id": "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
          }
        });

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });
  }).timeout(5000);

  describe("LRO Sad scenarios", () => {
    it("should handle PutNonRetry400 ", async () => {
      //   await client.lrosaDs.beginPutNonRetry400AndWait(LROOptions);
      const initialResponse = await client
        .path("/lro/nonretryerror/put/400")
        .put();
      assert.equal(initialResponse.status, "400");
      assert.isTrue(isUnexpected(initialResponse));
    });

    it("should handle putNonRetry201Creating400 ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/put/201/creating/400")
        .put();
      assert.equal(initialResponse.status, "201");
      assert.isNotTrue(isUnexpected(initialResponse));
      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "400");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should get 400 with putNonRetry201Creating400InvalidJson ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/put/201/creating/400/invalidjson")
        .put();
      assert.equal(initialResponse.status, "201");
      assert.isNotTrue(isUnexpected(initialResponse));
      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "400");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle putAsyncRelativeRetry400 ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/putasync/retry/400")
        .put();
      assert.equal(initialResponse.status, "200");
      assert.isNotTrue(isUnexpected(initialResponse));
      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "400");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle delete202NonRetry400 ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/delete/202/retry/400")
        .delete();

      assert.equal(initialResponse.status, "202");
      assert.isNotTrue(isUnexpected(initialResponse));
      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "400");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle deleteNonRetry400 ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/delete/400")
        .delete();
      assert.equal(initialResponse.status, "400");
      assert.isTrue(isUnexpected(initialResponse));
    });

    it("should handle deleteAsyncRelativeRetry400 ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/deleteasync/retry/400")
        .delete();

      assert.equal(initialResponse.status, "202");
      assert.isNotTrue(isUnexpected(initialResponse));
      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });
      await assert.isRejected(
        poller.pollUntilDone(),
        /Polling was unsuccessful/
      );
      assert.equal(poller.getOperationState().status, "running");
    });

    it("should handle postNonRetry400 ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/post/400")
        .post();

      assert.equal(initialResponse.status, "400");
      assert.isTrue(isUnexpected(initialResponse));
    });

    it("should handle post202NonRetry400 ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/post/202/retry/400")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "400");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle postAsyncRelativeRetry400 ", async () => {
      const initialResponse = await client
        .path("/lro/nonretryerror/postasync/retry/400")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      await assert.isRejected(
        poller.pollUntilDone(),
        /Polling was unsuccessful/
      );
      assert.equal(poller.getOperationState().status, "running");
    });

    it("should handle PutError201NoProvisioningStatePayload ", async () => {
      const initialResponse = await client
        .path("/lro/error/put/201/noprovisioningstatepayload")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "201");
    });

    it("should handle putAsyncRelativeRetryNoStatusPayload ", async () => {
      const initialResponse = await client
        .path("/lro/error/putasync/retry/nostatuspayload")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle putAsyncRelativeRetryNoStatus ", async () => {
      const initialResponse = await client
        .path("/lro/error/putasync/retry/nostatus")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle delete204Succeeded ", async () => {
      const initialResponse = await client
        .path("/lro/error/delete/204/nolocation")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "204");
    });

    it("should handle deleteAsyncRelativeRetryNoStatus ", async () => {
      const initialResponse = await client
        .path("/lro/error/deleteasync/retry/nostatus")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle post202NoLocation ", async () => {
      const initialResponse = await client
        .path("/lro/error/post/202/nolocation")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "202");
    });

    it("should handle postAsyncRelativeRetryNoPayload", async () => {
      const initialResponse = await client
        .path("/lro/error/postasync/retry/nopayload")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle put200InvalidJson", async () => {
      await assert.isRejected(
        client.path("/lro/error/put/200/invalidjson").put(),
        isNode
          ? /SyntaxError: Unexpected end of JSON input" occurred while parsing the response body/
          : /SyntaxError: Expected ',' or '}' after property value in JSON/
      );
    });

    it("should handle putAsyncRelativeRetryInvalidHeader", async () => {
      const initialResponse = await client
        .path("/lro/error/putasync/retry/invalidheader")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "404");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle delete202RetryInvalidHeader ", async () => {
      const initialResponse = await client
        .path("/lro/error/delete/202/retry/invalidheader")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "404");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle deleteAsyncRelativeRetryInvalidHeader ", async () => {
      const initialResponse = await client
        .path("/lro/error/deleteasync/retry/invalidheader")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "404");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle DeleteAsyncRelativeRetryInvalidJsonPolling ", async () => {
      const initialResponse = await client
        .path("/lro/error/deleteasync/retry/invalidjsonpolling")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      await assert.isRejected(
        poller.pollUntilDone(),
        isNode
          ? /"SyntaxError: Unexpected end of JSON input" occurred while parsing the response body - { "status": "Accepted"/
          : /SyntaxError: Expected ',' or '}' after property value in JSON/
      );
    });

    it("should handle post202RetryInvalidHeader ", async () => {
      const initialResponse = await client
        .path("/lro/error/post/202/retry/invalidheader")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "404");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle postAsyncRelativeRetryInvalidHeader ", async () => {
      const initialResponse = await client
        .path("/lro/error/postasync/retry/invalidheader")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "404");
      assert.equal(poller.getOperationState().status, "failed");
    });

    it("should handle postAsyncRelativeRetryInvalidJsonPolling ", async () => {
      const initialResponse = await client
        .path("/lro/error/postasync/retry/invalidjsonpolling")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      await assert.isRejected(
        poller.pollUntilDone(),
        isNode
          ? /"SyntaxError: Unexpected end of JSON input" occurred while parsing the response body - { "status": "Accepted"/
          : /SyntaxError: Expected ',' or '}' after property value in JSON/
      );
    });
  });

  describe("LRORetries", () => {
    it("should retry put201CreatingSucceeded200", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/put/201/creating/succeeded/200")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }

      assert.equal(result.body.properties?.provisioningState, "Succeeded");
      assert.equal(result.body.id, "100");
      assert.equal(result.body.name, "foo");
    });

    it("should retry putAsyncRelativeRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/putasync/retry/succeeded")
        .put();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }
      assert.equal(result.body.properties?.provisioningState, "Succeeded");
      assert.equal(result.body.id, "100");
      assert.equal(result.body.name, "foo");
    });

    it("should retry deleteProvisioning202Accepted200Succeeded", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/delete/provisioning/202/accepted/200/succeeded")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }
      assert.equal(result.body.properties?.provisioningState, "Succeeded");
      assert.equal(result.body.id, "100");
      assert.equal(result.body.name, "foo");
    });

    it("should retry delete202Retry200", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/delete/202/retry/200")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should retry deleteAsyncRelativeRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/deleteasync/retry/succeeded")
        .delete();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should retry post202Retry200", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/post/202/retry/200")
        .post();

      const poller = await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should retry postAsyncRelativeRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/postasync/retry/succeeded")
        .post();

      const poller = await await getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });
  });
});
