import { LROClient } from "./generated/lro/src/lROClient";
import { assert } from "chai";
import { BaseResult } from "./generated/lro/src/lro";
import { Product } from "./generated/lro/src/models";

describe("LRO", () => {
  let client: LROClient;

  beforeEach(() => {
    client = new LROClient();
  });

  describe("BodyPolling Strategy", () => {
    it("should handle initial response with terminal state through an Azure Resource", async () => {
      const poller = await client.lROs.put200Succeeded();
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.equal(result.provisioningState, "Succeeded");
    });

    it("should handle initial response with terminal state without provisioning State", async () => {
      const poller = await client.lROs.put200SucceededNoState();
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle initial response creating followed by success through an Azure Resource", async () => {
      const poller = await client.lROs.put201CreatingSucceeded200();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put200Acceptedcanceled200", async () => {
      const poller = await client.lROs.put200Acceptedcanceled200();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Canceled");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });

    it("should handle put200UpdatingSucceeded204", async () => {
      const poller = await client.lROs.put200UpdatingSucceeded204();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });
  });

  describe.skip("Location Strategy", () => {
    it("should handle put202Retry200", async () => {
      const poller = await client.lROs.put202Retry200();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.deepEqual(result.provisioningState, "Succeeded");
      assert.deepEqual(result.id, "100");
      assert.deepEqual(result.name, "foo");
    });
  });

  describe("putAsync operations", () => {
    it("should handle putAsyncRetrySucceeded", async () => {
      const poller = await client.lROs.putAsyncRetrySucceeded();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
      assert.equal(result.name, "foo");
      assert.equal(
        (result as BaseResult)._lroData?.provisioningState,
        "Succeeded"
      );
    });

    it("should handle putAsyncRetryFailed", async () => {
      const poller = await client.lROs.putAsyncRetryFailed();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result: BaseResult = await poller.pollUntilDone();
      assert.equal(result._lroData?.status, "Failed");
    });

    it("should handle putAsyncNonResource", async () => {
      const poller = await client.lROs.putAsyncNonResource();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      await poller.poll();
      const result = await poller.pollUntilDone();
      assert.equal(result.name, "sku");
      assert.equal(result.id, "100");
    });

    it("should handle putAsyncNoHeaderInRetry", async () => {
      const poller = await client.lROs.putAsyncNoHeaderInRetry();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result: BaseResult = await poller.pollUntilDone();
      assert.equal(result.name, "foo");
      assert.equal(result.id, "100");
      assert.deepEqual(result._lroData?.provisioningState, "Succeeded");
    });

    it("should handle putAsyncNoRetrySucceeded", async () => {
      const poller = await client.lROs.putAsyncNoRetrySucceeded();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.equal(result.name, "foo");
      assert.equal(result.id, "100");
    });

    it("should handle putAsyncNoRetrycanceled", async () => {
      const poller = await client.lROs.putAsyncNoRetrycanceled();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result: BaseResult = await poller.pollUntilDone();
      assert.equal(result._lroData?.status, "Canceled");
    });

    it("should handle putAsyncSubResource", async () => {
      const poller = await client.lROs.putAsyncSubResource();
      // To avoid timing out, override the default delay function
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.equal(result.id, "100");
    });
  });

  describe("postAsync operations", () => {
    let product: Product;
    beforeEach(() => {
      product = {
        location: "West US"
      };
    });
    it("should handle postAsyncNoRetrySucceeded", async () => {
      const poller = await client.lROs.postAsyncNoRetrySucceeded({
        product
      });
      poller.delay = () => Promise.resolve();
      const result = await poller.pollUntilDone();
      assert.deepInclude(result, { id: "100", name: "foo" });
    });
    it("should handle postAsyncRetryFailed", async () => {
      const poller = await client.lROs.postAsyncRetryFailed({
        product
      });
      poller.delay = () => Promise.resolve();
      const result: BaseResult = await poller.pollUntilDone();
      assert.deepEqual(result.status, "Failed");
    });
    it("should handle postAsyncRetrySucceeded", async () => {
      const poller = await client.lROs.postAsyncRetrySucceeded({
        product
      });
      poller.delay = () => Promise.resolve();
      const result: BaseResult = await poller.pollUntilDone();
      assert.deepInclude(result, { id: "100", name: "foo" });
    });
  });
});
