import { AccessToken, GetTokenOptions } from "@azure/core-auth";
import {
  AuthorizeRequestOptions,
  BearerTokenAuthenticationPolicyOptions,
  PipelinePolicy,
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";

/**
 * This is a customized policy used in testing
 * In this policy we will set the bearer token header in request
 * @param options Detailed options
 * @returns A customized bearer auth policy
 */
export function customBearerTokenAuthenticationPolicy(
  options: BearerTokenAuthenticationPolicyOptions
): PipelinePolicy {
  const { credential, scopes, challengeCallbacks } = options;
  const callbacks = {
    authorizeRequest:
      challengeCallbacks?.authorizeRequest ?? defaultAuthorizeRequest,
    // keep all other properties
    ...challengeCallbacks
  };

  const getAccessToken = credential
    ? (): Promise<AccessToken | null> => credential.getToken(scopes)
    : () => Promise.resolve(null);

  return {
    name: "customBearerTokenAuthPolicy",
    async sendRequest(
      request: PipelineRequest,
      next: SendRequest
    ): Promise<PipelineResponse> {
      await callbacks.authorizeRequest({
        scopes: Array.isArray(scopes) ? scopes : [scopes],
        request,
        getAccessToken
      });

      let response: PipelineResponse;
      let error: Error | undefined;
      try {
        response = await next(request);
      } catch (err: any) {
        error = err;
        response = err.response;
      }

      if (error) {
        throw error;
      } else {
        return response;
      }
    }
  };
}

/**
 * Default authorize request handler
 */
async function defaultAuthorizeRequest(
  options: AuthorizeRequestOptions
): Promise<void> {
  const { scopes, getAccessToken, request } = options;
  const getTokenOptions: GetTokenOptions = {
    abortSignal: request.abortSignal,
    tracingOptions: request.tracingOptions
  };
  const accessToken = await getAccessToken(scopes, getTokenOptions);

  if (accessToken) {
    options.request.headers.set("Authorization", `Bearer ${accessToken.token}`);
  }
}
