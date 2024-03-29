import {
  StandardClient,
  User
} from "./generated/lro/standard/generated/src/index.js";
import { assert } from "chai";
import { restorePoller } from "./generated/lro/standard/generated/src/restorePollerHelpers.js";
import { OperationState } from "@azure/core-lro";

describe("LROStandardClient Classical Client", () => {
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

    it("serialize and rehydration", async () => {
      const poller = client.createOrReplace("madge", {
        role: "contributor"
      } as any);
      const restoredPoller = await poller.serialize();
      const newPoller = restorePoller(
        client,
        restoredPoller,
        client.createOrReplace
      );
      const result = await newPoller.pollUntilDone();
      assert.strictEqual(result.name, "madge");
      assert.strictEqual(result.role, "contributor");
    });

    it("should get in-the-middle values by onProgress/operationState", async () => {
      const poller = client.createOrReplace("madge", {
        role: "contributor"
      } as any);
      const states: string[] = [];
      const operations: OperationState<User>[] = [];
      poller.onProgress((state) => {
        states.push(state.status);
        operations.push(poller.operationState!);
        assert.strictEqual(state, poller.operationState);
      });
      const res1 = await poller;
      const res2 = poller.result;
      assert.deepEqual(res1, res2);
      assert.strictEqual(operations.length, 2);
      assert.strictEqual(states.length, 2);
      assert.deepEqual(states, ["running", "succeeded"]);
    });

    // Skip this case: https://github.com/Azure/autorest.typescript/issues/2316
    it.skip("should abort signal", async () => {
      const abortController = new AbortController();
      const poller = client.createOrReplace(
        "madge",
        {
          role: "contributor"
        } as any,
        {
          abortSignal: abortController.signal
        }
      );
      await poller.submitted();
      assert.strictEqual(poller.operationState?.status, "running");
      abortController.abort();
      poller.poll();
      assert.strictEqual(poller.operationState?.status, "cancelled");
    });

    it("submitted should catch the initial error", async () => {
      try {
        const poller = client.createOrReplace("madge", {
          role: "foo"
        } as any);
        assert.isNotNull(poller);
        await poller.submitted();
        assert.fail("Expected an exception");
      } catch (err: any) {
        assert.strictEqual(
          err.message,
          "Body provided doesn't match expected body"
        );
      }
    });

    it("poll should catch the inital error", async () => {
      try {
        const poller = client.createOrReplace("madge", {
          role: "foo"
        } as any);
        assert.isNotNull(poller);
        await poller.poll();
        assert.fail("Expected an exception");
      } catch (err: any) {
        assert.strictEqual(
          err.message,
          "The long-running operation has failed"
        );
      }
    });

    it("pollUntilDone should catch the inital error", async () => {
      try {
        const poller = client.createOrReplace("madge", {
          role: "foo"
        } as any);
        assert.isNotNull(poller);
        await poller.pollUntilDone();
        assert.fail("Expected an exception");
      } catch (err: any) {
        assert.strictEqual(
          err.message,
          "The long-running operation has failed"
        );
      }
    });

    it("await should catch inital exception", async () => {
      try {
        await client.createOrReplace("madge", {
          role: "foo"
        } as any);
        assert.fail("Expected an exception");
      } catch (err: any) {
        assert.strictEqual(
          err.message,
          "The long-running operation has failed"
        );
      }
    });
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

    it("serialize and rehydration", async () => {
      const poller = client.deleteOperation("madge");
      const restoredPoller = await poller.serialize();
      const newPoller = restorePoller(
        client,
        restoredPoller,
        client.deleteOperation
      );
      const result = await newPoller.pollUntilDone();
      assert.strictEqual(result, undefined);
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

    it("serialize and rehydration", async () => {
      const poller = client.exportOperation("madge", "json");
      const restoredPoller = await poller.serialize();
      const newPoller = restorePoller(
        client,
        restoredPoller,
        client.exportOperation
      );
      const result = await newPoller.pollUntilDone();
      assert.deepEqual(result, {
        name: "madge",
        resourceUri: "/users/madge"
      });
    });
  });
});
