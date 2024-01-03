import { StandardClient } from "./generated/lro/standard/generated/src/index.js";
import { assert } from "chai";
import { restorePoller } from "./generated/lro/standard/generated/src/restorePollerHelpers.js";
import { deleteOperation } from "./generated/azure/core/src/api/operations.js";

describe.only("LROStandardClient Classical Client", () => {
  let client: StandardClient;

  beforeEach(() => {
    client = new StandardClient({
      allowInsecureConnection: true
    });
  });

  describe("createOrReplace", () => {
    it("should await poller result directly", async () => {
      try {
        const result = await client.createOrReplace("madge", {
          role: "contributor"
        } as any);
        assert.deepEqual(result, { name: "madge", role: "contributor" });
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should count polling counts correctly", async () => {
      try {
        const poller = client.createOrReplace("madge", {
          role: "contributor"
        } as any);
        let pollingCounts = 0;
        const expectedStates = ["running", "succeeded"];
        const actualStates: string[] = [];
        while (!poller.isDone) {
          pollingCounts++;
          await poller.poll();
          actualStates.push(poller.operationState?.status!);
        }
        assert.deepEqual(actualStates, expectedStates);
        assert.strictEqual(pollingCounts, 2);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should not override readonly attributes for operationState/result/isDone", async () => {
      try {
        const poller = client.createOrReplace("madge", {
          role: "contributor"
        } as any);
        (poller as any).operationState = { status: "foo" };
      } catch (err: any) {
        assert.strictEqual(
          err.message,
          "Cannot set property operationState of #<Object> which has only a getter"
        );
      }
    });

    it("serialize and rehydration", async () => {});

    it("onProgress callback", async () => {});

    it("abort signal", async () => {});

    it("exception handling", async () => {});
  });

  describe("delete", () => {
    it("should await poller result directly", async () => {
      try {
        const result = await client.deleteOperation("madge");
        assert.strictEqual(result, undefined);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should count polling counts correctly", async () => {
      try {
        const poller = client.deleteOperation("madge");
        let pollingCounts = 0;
        const expectedStates = ["running", "succeeded"];
        const actualStates: string[] = [];
        while (!poller.isDone) {
          pollingCounts++;
          await poller.poll();
          actualStates.push(poller.operationState?.status!);
        }
        assert.deepEqual(actualStates, expectedStates);
        assert.strictEqual(pollingCounts, 2);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it.only("serialize and rehydration", async () => {
      const poller = client.deleteOperation("madge");
      const restoredPoller = await poller.serialize();
      console.log(restoredPoller);
      setTimeout(async () => {
        const newPoller = restorePoller(
          client,
          restoredPoller,
          client.createOrReplace
        );
        const result = await newPoller.pollUntilDone();
        console.log(result);
      }, 10000);
    });
  });

  describe("export", () => {
    it("should await poller result directly", async () => {
      try {
        const result = await client.exportOperation("madge", "json");
        assert.deepEqual(result, {
          name: "madge",
          resourceUri: "/users/madge"
        });
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should count polling counts correctly", async () => {
      try {
        const poller = client.exportOperation("madge", "json");
        let pollingCounts = 0;
        const expectedStates = ["running", "succeeded"];
        const actualStates: string[] = [];
        while (!poller.isDone) {
          pollingCounts++;
          await poller.poll();
          actualStates.push(poller.operationState?.status!);
        }
        assert.deepEqual(actualStates, expectedStates);
        assert.strictEqual(pollingCounts, 2);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
