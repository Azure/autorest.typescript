import { assert } from "chai";
import { SingleClient } from "./generated/server/path/single/src/index.js";
import { MultipleClient } from "./generated/server/path/multiple/src/index.js";
describe("Single Server Path Client", () => {
  let client: SingleClient;

  beforeEach(() => {
    client = new SingleClient("http://localhost:3000", {
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with no param", async () => {
    try {
      const result = await client.myOp();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

describe("Multiple Server Path Client", () => {
  let client: MultipleClient;

  beforeEach(() => {
    client = new MultipleClient("http://localhost:3000", {
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with no param", async () => {
    try {
      const result = await client.noOperationParams();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with param", async () => {
    try {
      const result = await client.withOperationPathParam("test");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
