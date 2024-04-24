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

    it("should abort initial request", async () => {
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
      abortController.abort();
      try {
        await poller.submitted();
        assert.fail("Should throw an AbortError");
      } catch (err: any) {
        assert.strictEqual(err.message, "The operation was aborted.");
      }
    });

    it("should abort polling request", async () => {
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
      try {
        await poller.submitted();
        abortController.abort();
        await poller.poll();
        assert.fail("Should throw an AbortError");
      } catch (err: any) {
        assert.strictEqual(err.message, "The operation was aborted.");
      }
    });

    it("should abort pollUntilDone request", async () => {
      const abortController = new AbortController();
      const poller = client.createOrReplace("madge", {
        role: "contributor"
      } as any);
      abortController.abort();
      try {
        await poller.pollUntilDone({ abortSignal: abortController.signal });
        assert.fail("Should throw an AbortError");
      } catch (err: any) {
        assert.strictEqual(err.message, "The operation was aborted.");
      }
    });

    it("should abort polling request if both method and polling abort is set", async () => {
      const methodAbort = new AbortController();
      const pollAbort = new AbortController();
      const poller = client.createOrReplace(
        "madge",
        {
          role: "contributor"
        } as any,
        {
          abortSignal: methodAbort.signal
        }
      );

      try {
        pollAbort.abort();
        await poller.pollUntilDone({ abortSignal: pollAbort.signal });
        assert.fail("Should throw an AbortError");
      } catch (err: any) {
        assert.strictEqual(err.message, "The operation was aborted.");
      }
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

    it("poll should catch the initial error", async () => {
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
          "Body provided doesn't match expected body"
        );
      }
    });

    it("pollUntilDone should catch the initial error", async () => {
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
          "Body provided doesn't match expected body"
        );
      }
    });

    it("await should catch initial exception", async () => {
      try {
        await client.createOrReplace("madge", {
          role: "foo"
        } as any);
        assert.fail("Expected an exception");
      } catch (err: any) {
        assert.strictEqual(
          err.message,
          "Body provided doesn't match expected body"
        );
      }
    });
  });

  describe("delete", () => {
    it("should await poller result directly", async () => {
      try {
        const result = await client.delete("madge");
        assert.strictEqual(result, undefined);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it("should count polling counts correctly", async () => {
      try {
        const poller = client.delete("madge");
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
      const poller = client.delete("madge");
      const restoredPoller = await poller.serialize();
      const newPoller = restorePoller(client, restoredPoller, client.delete);
      const result = await newPoller.pollUntilDone();
      assert.strictEqual(result, undefined);
    });
  });

  describe("export", () => {
    it("should await poller result directly", async () => {
      try {
        const result = await client.export("madge", "json");
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
        const poller = client.export("madge", "json");
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
      const poller = client.export("madge", "json");
      const restoredPoller = await poller.serialize();
      const newPoller = restorePoller(client, restoredPoller, client.export);
      const result = await newPoller.pollUntilDone();
      assert.deepEqual(result, {
        name: "madge",
        resourceUri: "/users/madge"
      });
    });
  });
});
