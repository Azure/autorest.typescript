// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { HttpInfrastructureRestClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `HttpInfrastructureRestClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {},
): HttpInfrastructureRestClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-http-infrastructure-rest/1.0.0-preview1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
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
  };

  const client = getClient(baseUrl, options) as HttpInfrastructureRestClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return {
    ...client,
    httpFailure: {
      getEmptyError: (options) => {
        return client.path("/http/failure/emptybody/error").get(options);
      },
      getNoModelError: (options) => {
        return client.path("/http/failure/nomodel/error").get(options);
      },
      getNoModelEmpty: (options) => {
        return client.path("/http/failure/nomodel/empty").get(options);
      },
    },
    httpSuccess: {
      head200: (options) => {
        return client.path("/http/success/200").head(options);
      },
      get200: (options) => {
        return client.path("/http/success/200").get(options);
      },
      options200: (options) => {
        return client.path("/http/success/200").options(options);
      },
      put200: (options) => {
        return client.path("/http/success/200").put(options);
      },
      patch200: (options) => {
        return client.path("/http/success/200").patch(options);
      },
      post200: (options) => {
        return client.path("/http/success/200").post(options);
      },
      delete200: (options) => {
        return client.path("/http/success/200").delete(options);
      },
      put201: (options) => {
        return client.path("/http/success/201").put(options);
      },
      post201: (options) => {
        return client.path("/http/success/201").post(options);
      },
      put202: (options) => {
        return client.path("/http/success/202").put(options);
      },
      patch202: (options) => {
        return client.path("/http/success/202").patch(options);
      },
      post202: (options) => {
        return client.path("/http/success/202").post(options);
      },
      delete202: (options) => {
        return client.path("/http/success/202").delete(options);
      },
      head204: (options) => {
        return client.path("/http/success/204").head(options);
      },
      put204: (options) => {
        return client.path("/http/success/204").put(options);
      },
      patch204: (options) => {
        return client.path("/http/success/204").patch(options);
      },
      post204: (options) => {
        return client.path("/http/success/204").post(options);
      },
      delete204: (options) => {
        return client.path("/http/success/204").delete(options);
      },
      head404: (options) => {
        return client.path("/http/success/404").head(options);
      },
    },
    httpRedirects: {
      head300: (options) => {
        return client.path("/http/redirect/300").head(options);
      },
      get300: (options) => {
        return client.path("/http/redirect/300").get(options);
      },
      head301: (options) => {
        return client.path("/http/redirect/301").head(options);
      },
      get301: (options) => {
        return client.path("/http/redirect/301").get(options);
      },
      put301: (options) => {
        return client.path("/http/redirect/301").put(options);
      },
      head302: (options) => {
        return client.path("/http/redirect/302").head(options);
      },
      get302: (options) => {
        return client.path("/http/redirect/302").get(options);
      },
      patch302: (options) => {
        return client.path("/http/redirect/302").patch(options);
      },
      post303: (options) => {
        return client.path("/http/redirect/303").post(options);
      },
      head307: (options) => {
        return client.path("/http/redirect/307").head(options);
      },
      get307: (options) => {
        return client.path("/http/redirect/307").get(options);
      },
      options307: (options) => {
        return client.path("/http/redirect/307").options(options);
      },
      put307: (options) => {
        return client.path("/http/redirect/307").put(options);
      },
      patch307: (options) => {
        return client.path("/http/redirect/307").patch(options);
      },
      post307: (options) => {
        return client.path("/http/redirect/307").post(options);
      },
      delete307: (options) => {
        return client.path("/http/redirect/307").delete(options);
      },
    },
    httpClientFailure: {
      head400: (options) => {
        return client.path("/http/failure/client/400").head(options);
      },
      get400: (options) => {
        return client.path("/http/failure/client/400").get(options);
      },
      options400: (options) => {
        return client.path("/http/failure/client/400").options(options);
      },
      put400: (options) => {
        return client.path("/http/failure/client/400").put(options);
      },
      patch400: (options) => {
        return client.path("/http/failure/client/400").patch(options);
      },
      post400: (options) => {
        return client.path("/http/failure/client/400").post(options);
      },
      delete400: (options) => {
        return client.path("/http/failure/client/400").delete(options);
      },
      head401: (options) => {
        return client.path("/http/failure/client/401").head(options);
      },
      get402: (options) => {
        return client.path("/http/failure/client/402").get(options);
      },
      options403: (options) => {
        return client.path("/http/failure/client/403").options(options);
      },
      get403: (options) => {
        return client.path("/http/failure/client/403").get(options);
      },
      put404: (options) => {
        return client.path("/http/failure/client/404").put(options);
      },
      patch405: (options) => {
        return client.path("/http/failure/client/405").patch(options);
      },
      post406: (options) => {
        return client.path("/http/failure/client/406").post(options);
      },
      delete407: (options) => {
        return client.path("/http/failure/client/407").delete(options);
      },
      put409: (options) => {
        return client.path("/http/failure/client/409").put(options);
      },
      head410: (options) => {
        return client.path("/http/failure/client/410").head(options);
      },
      get411: (options) => {
        return client.path("/http/failure/client/411").get(options);
      },
      options412: (options) => {
        return client.path("/http/failure/client/412").options(options);
      },
      get412: (options) => {
        return client.path("/http/failure/client/412").get(options);
      },
      put413: (options) => {
        return client.path("/http/failure/client/413").put(options);
      },
      patch414: (options) => {
        return client.path("/http/failure/client/414").patch(options);
      },
      post415: (options) => {
        return client.path("/http/failure/client/415").post(options);
      },
      get416: (options) => {
        return client.path("/http/failure/client/416").get(options);
      },
      delete417: (options) => {
        return client.path("/http/failure/client/417").delete(options);
      },
      head429: (options) => {
        return client.path("/http/failure/client/429").head(options);
      },
    },
    httpServerFailure: {
      head501: (options) => {
        return client.path("/http/failure/server/501").head(options);
      },
      get501: (options) => {
        return client.path("/http/failure/server/501").get(options);
      },
      post505: (options) => {
        return client.path("/http/failure/server/505").post(options);
      },
      delete505: (options) => {
        return client.path("/http/failure/server/505").delete(options);
      },
    },
    httpRetry: {
      head408: (options) => {
        return client.path("/http/retry/408").head(options);
      },
      put500: (options) => {
        return client.path("/http/retry/500").put(options);
      },
      patch500: (options) => {
        return client.path("/http/retry/500").patch(options);
      },
      get502: (options) => {
        return client.path("/http/retry/502").get(options);
      },
      options502: (options) => {
        return client.path("/http/retry/502").options(options);
      },
      post503: (options) => {
        return client.path("/http/retry/503").post(options);
      },
      delete503: (options) => {
        return client.path("/http/retry/503").delete(options);
      },
      put504: (options) => {
        return client.path("/http/retry/504").put(options);
      },
      patch504: (options) => {
        return client.path("/http/retry/504").patch(options);
      },
    },
    multipleResponses: {
      get200Model204NoModelDefaultError200Valid: (options) => {
        return client
          .path(
            "/http/payloads/200/A/204/none/default/Error/response/200/valid",
          )
          .get(options);
      },
      get200Model204NoModelDefaultError204Valid: (options) => {
        return client
          .path("/http/payloads/200/A/204/none/default/Error/response/204/none")
          .get(options);
      },
      get200Model204NoModelDefaultError201Invalid: (options) => {
        return client
          .path(
            "/http/payloads/200/A/204/none/default/Error/response/201/valid",
          )
          .get(options);
      },
      get200Model204NoModelDefaultError202None: (options) => {
        return client
          .path("/http/payloads/200/A/204/none/default/Error/response/202/none")
          .get(options);
      },
      get200Model204NoModelDefaultError400Valid: (options) => {
        return client
          .path(
            "/http/payloads/200/A/204/none/default/Error/response/400/valid",
          )
          .get(options);
      },
      get200Model201ModelDefaultError200Valid: (options) => {
        return client
          .path("/http/payloads/200/A/201/B/default/Error/response/200/valid")
          .get(options);
      },
      get200Model201ModelDefaultError201Valid: (options) => {
        return client
          .path("/http/payloads/200/A/201/B/default/Error/response/201/valid")
          .get(options);
      },
      get200Model201ModelDefaultError400Valid: (options) => {
        return client
          .path("/http/payloads/200/A/201/B/default/Error/response/400/valid")
          .get(options);
      },
      get200ModelA201ModelC404ModelDDefaultError200Valid: (options) => {
        return client
          .path(
            "/http/payloads/200/A/201/C/404/D/default/Error/response/200/valid",
          )
          .get(options);
      },
      get200ModelA201ModelC404ModelDDefaultError201Valid: (options) => {
        return client
          .path(
            "/http/payloads/200/A/201/C/404/D/default/Error/response/201/valid",
          )
          .get(options);
      },
      get200ModelA201ModelC404ModelDDefaultError404Valid: (options) => {
        return client
          .path(
            "/http/payloads/200/A/201/C/404/D/default/Error/response/404/valid",
          )
          .get(options);
      },
      get200ModelA201ModelC404ModelDDefaultError400Valid: (options) => {
        return client
          .path(
            "/http/payloads/200/A/201/C/404/D/default/Error/response/400/valid",
          )
          .get(options);
      },
      get202None204NoneDefaultError202None: (options) => {
        return client
          .path(
            "/http/payloads/202/none/204/none/default/Error/response/202/none",
          )
          .get(options);
      },
      get202None204NoneDefaultError204None: (options) => {
        return client
          .path(
            "/http/payloads/202/none/204/none/default/Error/response/204/none",
          )
          .get(options);
      },
      get202None204NoneDefaultError400Valid: (options) => {
        return client
          .path(
            "/http/payloads/202/none/204/none/default/Error/response/400/valid",
          )
          .get(options);
      },
      get202None204NoneDefaultNone202Invalid: (options) => {
        return client
          .path(
            "/http/payloads/202/none/204/none/default/none/response/202/invalid",
          )
          .get(options);
      },
      get202None204NoneDefaultNone204None: (options) => {
        return client
          .path(
            "/http/payloads/202/none/204/none/default/none/response/204/none",
          )
          .get(options);
      },
      get202None204NoneDefaultNone400None: (options) => {
        return client
          .path(
            "/http/payloads/202/none/204/none/default/none/response/400/none",
          )
          .get(options);
      },
      get202None204NoneDefaultNone400Invalid: (options) => {
        return client
          .path(
            "/http/payloads/202/none/204/none/default/none/response/400/invalid",
          )
          .get(options);
      },
      getDefaultModelA200Valid: (options) => {
        return client
          .path("/http/payloads/default/A/response/200/valid")
          .get(options);
      },
      getDefaultModelA200None: (options) => {
        return client
          .path("/http/payloads/default/A/response/200/none")
          .get(options);
      },
      getDefaultModelA400Valid: (options) => {
        return client
          .path("/http/payloads/default/A/response/400/valid")
          .get(options);
      },
      getDefaultModelA400None: (options) => {
        return client
          .path("/http/payloads/default/A/response/400/none")
          .get(options);
      },
      getDefaultNone200Invalid: (options) => {
        return client
          .path("/http/payloads/default/none/response/200/invalid")
          .get(options);
      },
      getDefaultNone200None: (options) => {
        return client
          .path("/http/payloads/default/none/response/200/none")
          .get(options);
      },
      getDefaultNone400Invalid: (options) => {
        return client
          .path("/http/payloads/default/none/response/400/invalid")
          .get(options);
      },
      getDefaultNone400None: (options) => {
        return client
          .path("/http/payloads/default/none/response/400/none")
          .get(options);
      },
      get200ModelA200None: (options) => {
        return client
          .path("/http/payloads/200/A/response/200/none")
          .get(options);
      },
      get200ModelA200Valid: (options) => {
        return client
          .path("/http/payloads/200/A/response/200/valid")
          .get(options);
      },
      get200ModelA200Invalid: (options) => {
        return client
          .path("/http/payloads/200/A/response/200/invalid")
          .get(options);
      },
      get200ModelA400None: (options) => {
        return client
          .path("/http/payloads/200/A/response/400/none")
          .get(options);
      },
      get200ModelA400Valid: (options) => {
        return client
          .path("/http/payloads/200/A/response/400/valid")
          .get(options);
      },
      get200ModelA400Invalid: (options) => {
        return client
          .path("/http/payloads/200/A/response/400/invalid")
          .get(options);
      },
      get200ModelA202Valid: (options) => {
        return client
          .path("/http/payloads/200/A/response/202/valid")
          .get(options);
      },
    },
  };
}
