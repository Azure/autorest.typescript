import Outh2ClientFactory, {
  AuthOauth2Client
} from "./generated/authentication/oauth2/src/index.js";
import { assert } from "chai";
import {
  bearerTokenAuthenticationPolicyName,
  PipelinePolicy
} from "@azure/core-rest-pipeline";
import { customBearerTokenAuthenticationPolicy } from "../util/customBearerTokenTestingPolicy.js";

describe("AuthOauth2Client Rest Client", () => {
  let client: AuthOauth2Client;
  let policy: PipelinePolicy;
  const defaultScope = "https://security.microsoft.com/.default";

  beforeEach(() => {
    client = Outh2ClientFactory(
      {
        getToken: async () => Promise.resolve(null)
      },
      {
        endpoint: "http://localhost:3005",
        allowInsecureConnection: true
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
  });

  it("should return 204 when the token is valid", async () => {
    const result = await client.path("/authentication/oauth2/valid").get();
    assert.strictEqual(result.status, "204");

  });

  it("should return 403 when the token is invalid", async () => {
    client.pipeline.removePolicy({
      name: bearerTokenAuthenticationPolicyName
    });
    const result = await client.path("/authentication/oauth2/invalid").get();
    assert.strictEqual(result.status, "403");
    if (result.status === "403") {
      assert.strictEqual(result.body.error, "invalid-grant");
    }
  });
});
