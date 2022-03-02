// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { BodyComplexRestClientLike } from "./clientDefinitions";

export default function BodyComplexRestClient(
  options: ClientOptions = {}
): BodyComplexRestClientLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "2016-02-29";

  const userAgentInfo = `azsdk-js-body-complex-rest/1.0.0-preview1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(baseUrl, options) as BodyComplexRestClientLike;

  return client;
}
