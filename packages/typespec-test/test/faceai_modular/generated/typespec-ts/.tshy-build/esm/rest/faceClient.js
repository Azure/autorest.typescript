// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";
/**
 * Initialize a new instance of `FaceContext`
 * @param endpointParam - Supported Cognitive Services endpoints (protocol and hostname, for example:
 * https://<resource-name>.cognitiveservices.azure.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpointParam, credentials, options = {}) {
    const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;
    const userAgentInfo = `azsdk-js-ai-face-rest/1.0.0-beta.1`;
    const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
        : `${userAgentInfo}`;
    options = {
        ...options,
        userAgentOptions: {
            userAgentPrefix,
        },
        loggingOptions: {
            logger: options.loggingOptions?.logger ?? logger.info,
        },
        credentials: {
            apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
        },
    };
    const client = getClient(endpointUrl, credentials, options);
    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
    return client;
}
//# sourceMappingURL=faceClient.js.map