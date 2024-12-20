import {
  bearerTokenAuthenticationPolicyName,
  PipelinePolicy
} from "@azure/core-rest-pipeline";
import {
  createUnion,
  UnionContext,
  validKey,
  validToken
} from "./generated/authentication/union/src/api/index.js";
import { UnionClient } from "./generated/authentication/union/src/index.js";
import { assert } from "chai";
import { customBearerTokenAuthenticationPolicy } from "../util/customBearerTokenTestingPolicy.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("UnionContext in API Layer", () => {
  let context: UnionContext;
  let policy: PipelinePolicy;
  const defaultScope = "https://security.microsoft.com/.default";

  function prepareToken() {
    context = createUnion(
      {
        getToken: async () => Promise.resolve(null)
      },
      {
        allowInsecureConnection: true,
        endpoint: `http://localhost:${port}`
      }
    );

    policy = customBearerTokenAuthenticationPolicy({
      scopes: defaultScope,
      credential: {
        getToken: async () => {
          return {
            token: defaultScope,
            expiresOnTimestamp: Date.now()
          };
        }
      }
    });
    context.pipeline.removePolicy({
      name: bearerTokenAuthenticationPolicyName
    });
    context.pipeline.addPolicy(policy);
  }

  function prepareKey() {
    context = createUnion(
      {
        key: "valid-key"
      },
      { allowInsecureConnection: true, endpoint: `http://localhost:${port}` }
    );
  }

  it("should not throw exception if apiKey is valid", async () => {
    prepareKey();
    const result = await validKey(context);
    assert.strictEqual(result, undefined);
  });

  it("should throw exception if the token is valid", async () => {
    prepareToken();
    const result = await validToken(context);
    assert.strictEqual(result, undefined);
  });
});

describe("UnionClient in classical client", () => {
  let client: UnionClient;
  let policy: PipelinePolicy;
  const defaultScope = "https://security.microsoft.com/.default";

  function prepareToken() {
    client = new UnionClient(
      {
        getToken: async () => Promise.resolve(null)
      },
      {
        allowInsecureConnection: true,
        endpoint: `http://localhost:${port}`
      }
    );

    policy = customBearerTokenAuthenticationPolicy({
      scopes: defaultScope,
      credential: {
        getToken: async () => {
          return {
            token: defaultScope,
            expiresOnTimestamp: Date.now()
          };
        }
      }
    });
    client.pipeline.removePolicy({
      name: bearerTokenAuthenticationPolicyName
    });
    client.pipeline.addPolicy(policy);
  }

  function prepareKey() {
    client = new UnionClient(
      {
        key: "valid-key"
      },
      { allowInsecureConnection: true, endpoint: `http://localhost:${port}` }
    );
  }

  it("should not throw exception if apiKey is valid", async () => {
    prepareKey();
    const result = await client.validKey();
    assert.strictEqual(result, undefined);
  });

  it("should throw exception if the token is valid", async () => {
    prepareToken();
    const result = await client.validToken();
    assert.strictEqual(result, undefined);
  });
});
