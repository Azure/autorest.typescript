import {
  bearerTokenAuthenticationPolicyName,
  PipelinePolicy
} from "@azure/core-rest-pipeline";
import {
  createOAuth2,
  invalid,
  OAuth2Context,
  valid
} from "./generated/authentication/oauth2/src/api/index.js";
import { assert } from "chai";
import { customBearerTokenAuthenticationPolicy } from "../util/customBearerTokenTestingPolicy.js";

describe("OAuth2Context in API Layer", () => {
  let context: OAuth2Context;
  let policy: PipelinePolicy;
  const defaultScope = "https://security.microsoft.com/.default";

  beforeEach(() => {
    context = createOAuth2(
      {
        getToken: async () => Promise.resolve(null)
      },
      {
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
    context.pipeline.removePolicy({
      name: bearerTokenAuthenticationPolicyName
    });
    context.pipeline.addPolicy(policy);
  });

  it("should not throw exception if token is valid", async () => {
    try {
      const result = await valid(context);
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should throw exception if the token is invalid", async () => {
    try {
      await invalid(context);
      assert.fail("Expected an exception to be thrown.");
    } catch (err: any) {
      assert.strictEqual(err.error, "invalid-grant");
    }
  });
});
