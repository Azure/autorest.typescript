// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger.js";
/**
 * Initialize a new instance of `BatchRlcServiceClient`
 * @param endpointParam - Batch account endpoint (for example: https://batchaccount.eastus2.batch.azure.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpointParam, credentials, options = {}) {
    const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;
    const userAgentInfo = `azsdk-js-batch-rlc-rest/1.0.0-beta.1`;
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
            scopes: options.credentials?.scopes ?? [
                "https://batch.core.windows.net//.default",
            ],
        },
    };
    const client = getClient(endpointUrl, credentials, options);
    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
    return client;
}
//# sourceMappingURL=batchRlcService.js.map