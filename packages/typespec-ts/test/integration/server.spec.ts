import { assert } from "chai";
import SingleParamInServerPathClientFactory, {
  SingleParamInServerPathClient
} from "./generated/server/path/single/src/index.js";
import MultipleParamInServerPathClientFactory, {
  MultipleParamInServerPathClient
} from "./generated/server/path/multiple/src/index.js";
describe("SingleParamInServerPath Rest Client", () => {
  let client: SingleParamInServerPathClient;

  beforeEach(() => {
    client = SingleParamInServerPathClientFactory("http://localhost:3000", {
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with no param", async () => {
    try {
      const result = await client.path("/server/path/single/myOp").head();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

describe("MultipleParamInServerPath Rest Client", () => {
  let client: MultipleParamInServerPathClient;

  beforeEach(() => {
    client = MultipleParamInServerPathClientFactory("http://localhost:3000", {
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with no param", async () => {
    try {
      const result = await client.path("/").get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with param", async () => {
    try {
      const result = await client.path("/{keyword}", "test").get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
