import { assert } from "chai";
import {
  bearerTokenAuthenticationPolicyName,
  PipelinePolicy
} from "@azure/core-rest-pipeline";
import { customBearerTokenAuthenticationPolicy } from "../util/customBearerTokenTestingPolicy.js";
import AuthUnionClientFactory, {
  AuthUnionClient
} from "./generated/authentication/union/src/index.js";

describe("AuthUnionClient Rest Client", () => {
  let client: AuthUnionClient;
  let policy: PipelinePolicy;
  const defaultScope = "https://security.microsoft.com/.default";

  function prepareToken() {
    client = AuthUnionClientFactory(
      {
        getToken: async () => Promise.resolve(null)
      },
      { allowInsecureConnection: true }
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
    client = AuthUnionClientFactory(
      {
        key: "valid-key"
      },
      { allowInsecureConnection: true }
    );
  }

  it("should return 204 when the token is valid", async () => {
    prepareToken();
    try {
      const result = await client
        .path("/authentication/union/validtoken")
        .get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should return 204 when the key is valid", async () => {
    prepareKey();
    try {
      const result = await client.path("/authentication/union/validkey").get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
