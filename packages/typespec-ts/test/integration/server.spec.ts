import { assert } from "chai";
import SingleParamInServerPathClientFactory, {
  SingleParamInServerPathClient
} from "./generated/server/path/single/src/index.js";
import MultipleParamInServerPathClientFactory, {
  MultipleParamInServerPathClient
} from "./generated/server/path/multiple/src/index.js";
import NotVersionedParamInServerVersionsClientFactory, {
  NotVersionedParamInServerVersionsClient
} from "./generated/server/versions/not-versioned/src/index.js";
import VersionedParamInServerVersionsClientFactory, {
  VersionedParamInServerVersionsClient
} from "./generated/server/versions/versioned/src/index.js";

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

describe(" NotVersionedParamInServerVersions Rest Client", () => {
  let client: NotVersionedParamInServerVersionsClient;

  beforeEach(() => {
    client = NotVersionedParamInServerVersionsClientFactory(
      "http://localhost:3000",
      {
        allowInsecureConnection: true,
        retryOptions: {
          maxRetries: 0
        }
      }
    );
  });

  it("should work with no param", async () => {
    try {
      const result = await client
        .path("/server/versions/not-versioned/without-api-version")
        .head();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with param", async () => {
    try {
      const result = await client
        .path("/server/versions/not-versioned/with-query-api-version")
        .head({ queryParameters: { "api-version": "v1.0" } });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with path param", async () => {
    try {
      const result = await client
        .path(
          "/server/versions/not-versioned/with-path-api-version/{apiVersion}",
          "v1.0"
        )
        .head();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

describe(" VersionedParamInServerVersions Rest Client", () => {
  let client: VersionedParamInServerVersionsClient;

  beforeEach(() => {
    client = VersionedParamInServerVersionsClientFactory(
      "http://localhost:3000",
      {
        allowInsecureConnection: true,
        retryOptions: {
          maxRetries: 0
        }
      }
    );
  });

  it("should work with no param", async () => {
    try {
      const result = await client
        .path("/server/versions/versioned/without-api-version")
        .head();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with param", async () => {
    try {
      const result = await client
        .path("/server/versions/versioned/with-query-api-version")
        .head({ queryParameters: { "api-version": "2022-12-01-preview" } });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with path param", async () => {
    try {
      const result = await client
        .path(
          "/server/versions/versioned/with-path-api-version/{apiVersion}",
          "2022-12-01-preview"
        )
        .head();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
