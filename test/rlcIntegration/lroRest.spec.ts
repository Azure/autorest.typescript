import LRORest, {
  LRORestClient,
  getLongRunningPoller,
  Product,
  isUnexpected
} from "./generated/lroRest/src";
import { assert } from "chai";
import { addCookiePolicies } from "../utils/cookies";

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
      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle initial response with terminal state without provisioning State", async () => {
      const initialResponse = await client
        .path("/lro/put/200/succeeded/nostate")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
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

      const poller = getLongRunningPoller(client, initialResponse, {
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
      try {
        const initialResponse = await client
          .path("/lro/put/200/accepted/canceled/200")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: canceled."
        );
      }
    });

    it("should handle put200UpdatingSucceeded200", async () => {
      const initialResponse = await client
        .path("/lro/put/200/updating/succeeded/200")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
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

    it("should handle put201CreatingFailed", async () => {
      try {
        const initialResponse = await client
          .path("/lro/put/201/created/failed/200")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
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
      const initialResponse = await client
        .path("/lro/post/202/retry/200")
        .post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle post202NoRetry204", async () => {
      try {
        const initialResponse = await client
          .path("/lro/post/202/noretry/204")
          .post();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
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
        const initialResponse = await client
          .path("/lro/delete/noheader")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "Received unexpected HTTP status code 204 while polling. This may indicate a server issue."
        );
      }
    });

    it("should handle put202Retry200", async () => {
      const initialResponse = await client.path("/lro/put/202/retry/200").put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
      assert.deepEqual(result.body, { id: "100", name: "foo" });
    });

    it("should handle putNoHeaderInRetry", async () => {
      const initialResponse = await client
        .path("/lro/put/noheader/202/200")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle putSubResource", async () => {
      const initialResponse = await client
        .path("/lro/putsubresource/202/200")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle putNonResource", async () => {
      const initialResponse = await client
        .path("/lro/putnonresource/202/200")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle delete202Retry200", async () => {
      const initialResponse = await client
        .path("/lro/delete/202/retry/200")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle delete202NoRetry204", async () => {
      try {
        // await client.lROs.beginDelete202NoRetry204AndWait(LROOptions);
        const initialResponse = await client
          .path("/lro/delete/202/noretry/204")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "Received unexpected HTTP status code 204 while polling. This may indicate a server issue."
        );
      }
    });

    it("should handle deleteProvisioning202Accepted200Succeeded", async () => {
      const initialResponse = await client
        .path("/lro/delete/provisioning/202/accepted/200/succeeded")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle deleteProvisioning202DeletingFailed200", async () => {
      const initialResponse = await client
        .path("/lro/delete/provisioning/202/deleting/200/failed")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }
      assert.equal(result.body.properties?.provisioningState, "Failed");
    });

    it("should handle deleteProvisioning202Deletingcanceled200", async () => {
      const initialResponse = await client
        .path("/lro/delete/provisioning/202/deleting/200/canceled")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }
      assert.equal(result.body.properties?.provisioningState, "Canceled");
    });
  });

  describe("Passthrough strategy", () => {
    it("should handle delete204Succeeded", async () => {
      const initialResponse = await client
        .path("/lro/delete/204/succeeded")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
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
      //   const result = await client.lROs.beginPostDoubleHeadersFinalLocationGetAndWait(
      //     LROOptions
      //   );
      const initialResponse = await client
        .path("/lro/LROPostDoubleHeadersFinalLocationGet")
        .post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGet", async () => {
      // TODO: Final Location via
      const initialResponse = await client
        .path("/lro/LROPostDoubleHeadersFinalAzureHeaderGet")
        .post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0,
        lroResourceLocationConfig: "azure-async-operation"
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle post200WithPayload", async () => {
      const initialResponse = await client.path("/lro/post/payload/200").post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }
      assert.equal(result.body.id, "1");
      assert.equal(result.body.name, "product");
    });

    it("should handle postDoubleHeadersFinalAzureHeaderGetDefault", async () => {
      const initialResponse = await client
        .path("/lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault")
        .post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle deleteAsyncRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/deleteasync/retry/succeeded")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle deleteAsyncNoRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/deleteasync/noretry/succeeded")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle deleteAsyncRetrycanceled", async () => {
      try {
        const initialResponse = await client
          .path("/lro/deleteasync/retry/canceled")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
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
        const initialResponse = await client
          .path("/lro/deleteasync/retry/failed")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: failed."
        );
      }
    });

    it("should handle putAsyncRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/putasync/retry/succeeded")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }
      assert.equal(result.body.id, "100");
      assert.equal(result.body.name, "foo");
      assert.equal(result.body.properties?.provisioningState, "Succeeded");
    });

    it("should handle put201Succeeded", async () => {
      const initialResponse = await client.path("/lro/put/201/succeeded").put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }
      assert.equal(result.body.id, "100");
      assert.equal(result.body.name, "foo");
      assert.equal(result.body.properties?.provisioningState, "Succeeded");
    });

    it("should handle post202List", async () => {
      const initialResponse = await client.path("/lro/list").post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }

      if (result.status === "202") {
        assert.fail(`Unexpected 202 status code`);
      }

      assert.equal(result.body[0].id, "100");
      assert.equal(result.body[0].name, "foo");
    });

    it("should handle putAsyncRetryFailed", async () => {
      try {
        const initialResponse = await client
          .path("/lro/putasync/retry/failed")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: failed."
        );
      }
    });

    it("should handle putAsyncNonResource", async () => {
      const initialResponse = await client
        .path("/lro/putnonresourceasync/202/200")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle putAsyncNoHeaderInRetry", async () => {
      const initialResponse = await client
        .path("/lro/putasync/noheader/201/200")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle putAsyncNoRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/putasync/noretry/succeeded")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }

      assert.equal(result.body.name, "foo");
      assert.equal(result.body.id, "100");
    });

    it("should handle putAsyncNoRetrycanceled", async () => {
      try {
        const initialResponse = await client
          .path("/lro/putasync/noretry/canceled")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: canceled."
        );
      }
    });

    it("should handle putAsyncSubResource", async () => {
      const initialResponse = await client
        .path("/lro/putsubresourceasync/202/200")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle deleteAsyncNoHeaderInRetry", async () => {
      const initialResponse = await client
        .path("/lro/deleteasync/noheader/202/204")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle postAsyncNoRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/postasync/noretry/succeeded")
        .post({ body: { ...product } });

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }
      assert.deepInclude(result.body, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetryFailed", async () => {
      try {
        const initialResponse = await client
          .path("/lro/postasync/retry/failed")
          .post({ body: product });

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: failed."
        );
      }
    });

    it("should handle postAsyncRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/postasync/retry/succeeded")
        .post({ body: { ...product } });

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
      }

      assert.deepInclude(result.body, { id: "100", name: "foo" });
    });

    it("should handle postAsyncRetrycanceled", async () => {
      try {
        const initialResponse = await client
          .path("/lro/postasync/retry/canceled")
          .post({ body: product });

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (e) {
        assert.equal(
          e.message,
          "The long running operation has failed. The provisioning state: canceled."
        );
      }
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

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
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

      const poller = getLongRunningPoller(client, initialResponse, {
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

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw new Error(error);
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

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });
  }).timeout(5000);

  describe("LRO Sad scenarios", () => {
    it("should handle PutNonRetry400 ", async () => {
      try {
        //   await client.lrosaDs.beginPutNonRetry400AndWait(LROOptions);
        const initialResponse = await client
          .path("/lro/nonretryerror/put/400")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("should have thrown instead");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should handle putNonRetry201Creating400 ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/put/201/creating/400")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        throw new Error("Expected to throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should get 400 with putNonRetry201Creating400InvalidJson ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/put/201/creating/400/invalidjson")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should handle putAsyncRelativeRetry400 ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/putasync/retry/400")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should handle delete202NonRetry400 ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/delete/202/retry/400")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should handle deleteNonRetry400 ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/delete/400")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    // Re-enable when fix from PR#17573 is released
    it.skip("should handle deleteAsyncRelativeRetry400 ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/deleteasync/retry/400")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should handle postNonRetry400 ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/post/400")
          .post();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should handle post202NonRetry400 ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/post/202/retry/400")
          .post();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    // Re-enable when fix from PR#17573 is released
    it.skip("should handle postAsyncRelativeRetry400 ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/nonretryerror/postasync/retry/400")
          .post();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should handle PutError201NoProvisioningStatePayload ", async () => {
      const initialResponse = await client
        .path("/lro/error/put/201/noprovisioningstatepayload")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "201");
    });

    it("should handle putAsyncRelativeRetryNoStatusPayload ", async () => {
      const initialResponse = await client
        .path("/lro/error/putasync/retry/nostatuspayload")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle putAsyncRelativeRetryNoStatus ", async () => {
      const initialResponse = await client
        .path("/lro/error/putasync/retry/nostatus")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle delete204Succeeded ", async () => {
      const initialResponse = await client
        .path("/lro/error/delete/204/nolocation")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "204");
    });

    it("should handle deleteAsyncRelativeRetryNoStatus ", async () => {
      const initialResponse = await client
        .path("/lro/error/deleteasync/retry/nostatus")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle post202NoLocation ", async () => {
      const initialResponse = await client
        .path("/lro/error/post/202/nolocation")
        .post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "202");
    });

    it("should handle postAsyncRelativeRetryNoPayload", async () => {
      const initialResponse = await client
        .path("/lro/error/postasync/retry/nopayload")
        .post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should handle put200InvalidJson", async () => {
      try {
        const initialResponse = await client
          .path("/lro/error/put/200/invalidjson")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
      } catch (error) {
        assert.equal(error.code, "PARSE_ERROR");
      }
    });

    it("should handle putAsyncRelativeRetryInvalidHeader", async () => {
      try {
        const initialResponse = await client
          .path("/lro/error/putasync/retry/invalidheader")
          .put();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 404);
      }
    });

    it("should handle delete202RetryInvalidHeader ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/error/delete/202/retry/invalidheader")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 404);
      }
    });

    it("should handle deleteAsyncRelativeRetryInvalidHeader ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/error/deleteasync/retry/invalidheader")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 404);
      }
    });

    it("should handle DeleteAsyncRelativeRetryInvalidJsonPolling ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/error/deleteasync/retry/invalidjsonpolling")
          .delete();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
      } catch (error) {
        assert.equal(error.code, "PARSE_ERROR");
      }
    });

    it("should handle post202RetryInvalidHeader ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/error/post/202/retry/invalidheader")
          .post();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 404);
      }
    });

    it("should handle postAsyncRelativeRetryInvalidHeader ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/error/postasync/retry/invalidheader")
          .post();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
        assert.fail("Scenario should throw");
      } catch (error) {
        assert.equal(error.statusCode, 404);
      }
    });

    it("should handle postAsyncRelativeRetryInvalidJsonPolling ", async () => {
      try {
        const initialResponse = await client
          .path("/lro/error/postasync/retry/invalidjsonpolling")
          .post();

        const poller = getLongRunningPoller(client, initialResponse, {
          intervalInMs: 0
        });

        await poller.pollUntilDone();
      } catch (error) {
        assert.equal(error.code, "PARSE_ERROR");
      }
    });
  });

  describe("LRORetries", () => {
    it("should retry put201CreatingSucceeded200", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/put/201/creating/succeeded/200")
        .put();

      const poller = getLongRunningPoller(client, initialResponse, {
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

      const poller = getLongRunningPoller(client, initialResponse, {
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

      const poller = getLongRunningPoller(client, initialResponse, {
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

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should retry deleteAsyncRelativeRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/deleteasync/retry/succeeded")
        .delete();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should retry post202Retry200", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/post/202/retry/200")
        .post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });

    it("should retry postAsyncRelativeRetrySucceeded", async () => {
      const initialResponse = await client
        .path("/lro/retryerror/postasync/retry/succeeded")
        .post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });
  });
});
