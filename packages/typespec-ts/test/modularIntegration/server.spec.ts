import { assert } from "chai";
import { SingleClient } from "./generated/server/path/single/src/index.js";
import { MultipleClient } from "./generated/server/path/multiple/src/index.js";
import { NotVersionedClient } from "./generated/server/versions/not-versioned/src/index.js";
import { VersionedClient } from "./generated/server/versions/versioned/src/index.js";
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

describe("NotVersioned Server Version Client", () => {
  let client: NotVersionedClient;

  beforeEach(() => {
    client = new NotVersionedClient("http://localhost:3000", {
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work without apiVersion", async () => {
    try {
      const result = await client.withoutApiVersion();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with param", async () => {
    try {
      const result = await client.withQueryApiVersion("v1.0");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with path param", async () => {
    try {
      const result = await client.withPathApiVersion("v1.0");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

describe("Versioned Server Version Client", () => {
  let client: VersionedClient;

  beforeEach(() => {
    client = new VersionedClient("http://localhost:3000", {
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work without apiVersion", async () => {
    try {
      const result = await client.withoutApiVersion();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with param with default value", async () => {
    try {
      const result = await client.withQueryApiVersion();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with param with explicit value", async () => {
    try {
      const result = await client.withQueryApiVersion({
        apiVersion: "2022-12-01-preview"
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with path param", async () => {
    try {
      const result = await client.withPathApiVersion("2022-12-01-preview");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
