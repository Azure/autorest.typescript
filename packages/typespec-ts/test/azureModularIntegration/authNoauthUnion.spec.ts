import { describe, it, assert, beforeEach } from "vitest";
import {
  bearerTokenAuthenticationPolicyName,
  PipelinePolicy
} from "@azure/core-rest-pipeline";
import { UnionClient } from "./generated/authentication/noauth/union/src/index.js";
import { customBearerTokenAuthenticationPolicy } from "../util/customBearerTokenTestingPolicy.js";

describe("AuthNoauthUnion", () => {
  let client: UnionClient;
  let policy: PipelinePolicy;
  const defaultScope = "https://security.microsoft.com/.default";

  function prepareToken() {
    client = new UnionClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002",
      retryOptions: { maxRetries: 0 }
    });

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
    client.pipeline.removePolicy({ name: bearerTokenAuthenticationPolicyName });
    client.pipeline.addPolicy(policy);
  }

  beforeEach(() => {
    client = new UnionClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002",
      retryOptions: { maxRetries: 0 }
    });
  });

  it("Authentication_Noauth_Union_validNoAuth", async () => {
    const result = await client.validNoAuth();
    assert.isUndefined(result);
  });

  it("Authentication_Noauth_Union_validToken", async () => {
    prepareToken();
    const result = await client.validToken();
    assert.isUndefined(result);
  });
});
