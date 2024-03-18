// Licensed under the MIT license.
import { getClient } from "@typespec/ts-http-runtime";
/**
 * Initialize a new instance of `OpenAIContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(credentials, options = {}) {
    const endpointUrl = options.endpoint ?? options.baseUrl ?? `https://api.openai.com/v1`;
    const userAgentInfo = `azsdk-js-openai-non-branded-rest/1.0.0-beta.1`;
    const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
        : `${userAgentInfo}`;
    options = {
        ...options,
        userAgentOptions: {
            userAgentPrefix,
        },
    };
    const client = getClient(endpointUrl, options);
    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
    client.pipeline.addPolicy({
        name: "customKeyCredentialPolicy",
        async sendRequest(request, next) {
            request.headers.set("Authorization", "bearer " + credentials.key);
            return next(request);
        },
    });
    return client;
}
//# sourceMappingURL=openAIClient.js.map