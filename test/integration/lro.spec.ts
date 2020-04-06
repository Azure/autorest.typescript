import { LROClient } from "./generated/lro/src/lROClient";
import { assert } from "chai";

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
});
