import {
  StandardClient,
  User
} from "./generated/azure/core/lro/standard/src/index.js";
import { assert, expect } from "chai";
import { restorePoller } from "./generated/azure/core/lro/standard/src/restorePollerHelpers.js";
import { OperationState } from "@azure/core-lro";

describe("LROStandardClient Classical Client", () => {
  let client: StandardClient;

  beforeEach(() => {
    client = new StandardClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  describe("createOrReplace", () => {
    it("should await poller result directly", async () => {
      const result = await client.createOrReplace("madge", {
        role: "contributor"
      } as any);
      assert.deepEqual(result, { name: "madge", role: "contributor" });
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
        assert.strictEqual(err.name, "AbortError");
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
        assert.strictEqual(err.name, "AbortError");
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
        assert.strictEqual(err.name, "AbortError");
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
        assert.strictEqual(err.name, "AbortError");
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
        expect(err.message).to.match(
          /Body provided doesn't match expected body/i,
          `Expected ${err.message} to match /Body provided doesn't match expected body/i`
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
        expect(err.message).to.match(
          /Body provided doesn't match expected body/i,
          `Expected ${err.message} to match /Body provided doesn't match expected body/i`
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
        expect(err.message).to.match(
          /Body provided doesn't match expected body/i,
          `Expected ${err.message} to match /Body provided doesn't match expected body/i`
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
        expect(err.message).to.match(
          /Body provided doesn't match expected body/i,
          `Expected ${err.message} to match /Body provided doesn't match expected body/i`
        );
      }
    });
  });

  describe("createOrReplace legacy", () => {
    it("should await beginCreateOrReplaceAndWait result directly", async () => {
      const result = await client.beginCreateOrReplaceAndWait("madge", {
        role: "contributor"
      } as any);
      assert.deepEqual(result, { name: "madge", role: "contributor" });
    });

    it("should await beginCreateOrReplaceAndWait result directly", async () => {
      const poller = await client.beginCreateOrReplace("madge", {
        role: "contributor"
      } as any);
      assert.deepEqual(await poller.pollUntilDone(), {
        name: "madge",
        role: "contributor"
      });
    });

    it("should get in-the-middle values by onProgress/operationState", async () => {
      const poller = await client.beginCreateOrReplace("madge", {
        role: "contributor"
      } as any);
      const states: string[] = [];
      const operations: OperationState<User>[] = [];
      poller.onProgress((state) => {
        states.push(state.status);
        operations.push(poller.getOperationState());
        assert.strictEqual(state, poller.getOperationState());
      });
      const res1 = await poller.pollUntilDone();
      const res2 = poller.getResult();
      assert.deepEqual(res1, res2);
      assert.strictEqual(operations.length, 2);
      assert.strictEqual(states.length, 2);
      assert.deepEqual(states, ["running", "succeeded"]);
    });

    it("submitted should catch the initial error", async () => {
      try {
        const poller = await client.beginCreateOrReplace("madge", {
          role: "foo"
        } as any);
        assert.isNotNull(poller);
        assert.fail("Expected an exception");
      } catch (err: any) {
        expect(err.message).to.match(
          /Body provided doesn't match expected body/i,
          `Expected ${err.message} to match /Body provided doesn't match expected body/i`
        );
      }
    });

    it("poll should catch the initial error", async () => {
      try {
        const poller = await client.beginCreateOrReplace("madge", {
          role: "foo"
        } as any);
        assert.isNotNull(poller);
        await poller.poll();
        assert.fail("Expected an exception");
      } catch (err: any) {
        expect(err.message).to.match(
          /Body provided doesn't match expected body/i,
          `Expected ${err.message} to match /Body provided doesn't match expected body/i`
        );
      }
    });

    it("pollUntilDone should catch the initial error", async () => {
      try {
        const poller = await client.beginCreateOrReplace("madge", {
          role: "foo"
        } as any);
        assert.isNotNull(poller);
        await poller.pollUntilDone();
        assert.fail("Expected an exception");
      } catch (err: any) {
        expect(err.message).to.match(
          /Body provided doesn't match expected body/i,
          `Expected ${err.message} to match /Body provided doesn't match expected body/i`
        );
      }
    });

    it("await should catch initial exception", async () => {
      try {
        await client.beginCreateOrReplace("madge", {
          role: "foo"
        } as any);
        assert.fail("Expected an exception");
      } catch (err: any) {
        expect(err.message).to.match(
          /Body provided doesn't match expected body/i,
          `Expected ${err.message} to match /Body provided doesn't match expected body/i`
        );
      }
    });
  });

  describe("delete", () => {
    it("should await poller result directly", async () => {
      const result = await client.delete("madge");
      assert.strictEqual(result, undefined);
    });

    it("should count polling counts correctly", async () => {
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
      const result = await client.export("madge", "json");
      assert.deepEqual(result, {
        name: "madge",
        resourceUri: "/users/madge"
      });
    });

    it("should count polling counts correctly", async () => {
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
