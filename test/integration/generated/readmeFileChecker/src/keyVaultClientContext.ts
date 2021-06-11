import * as coreClient from "@azure/core-client";
import { ApiVersion72Preview, KeyVaultClientOptionalParams } from "./models";

/** @internal */
export class KeyVaultClientContext extends coreClient.ServiceClient {
  apiVersion: ApiVersion72Preview;

  /**
   * Initializes a new instance of the KeyVaultClientContext class.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    apiVersion: ApiVersion72Preview,
    options?: KeyVaultClientOptionalParams
  ) {
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: KeyVaultClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} @azure/keyvault-secrets/1.0.0-preview1`
        : `@azure/keyvault-secrets/1.0.0-preview1`;
    options.userAgentOptions = {
      userAgentPrefix: userAgentPrefix
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "{vaultBaseUrl}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.apiVersion = apiVersion;
  }
}
