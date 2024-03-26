// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";
/**
 * Initialize a new instance of `ParametrizedHostContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(credentials, options = {}) {
    const host = options.host ?? "one";
    const subdomain = options.subdomain ?? "two";
    const sufix = options.sufix ?? "three";
    const apiVersion = options.apiVersion ?? "v1";
    const endpointUrl = options.endpoint ??
        options.baseUrl ??
        `${host}.${subdomain}.${sufix}.com/${apiVersion}`;
    const userAgentInfo = `azsdk-js-parametrized-host-rest/1.0.0-beta.1`;
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
                "https://parametrized-host.azure.com/.default",
            ],
        },
    };
    const client = getClient(endpointUrl, credentials, options);
    client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
    return client;
}
//# sourceMappingURL=parametrizedHostClient.js.map