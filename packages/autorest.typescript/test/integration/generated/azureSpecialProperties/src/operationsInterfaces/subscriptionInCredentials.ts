// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SubscriptionInCredentialsPostMethodGlobalValidOptionalParams,
  SubscriptionInCredentialsPostMethodGlobalNullOptionalParams,
  SubscriptionInCredentialsPostMethodGlobalNotProvidedValidOptionalParams,
  SubscriptionInCredentialsPostPathGlobalValidOptionalParams,
  SubscriptionInCredentialsPostSwaggerGlobalValidOptionalParams,
} from "../models";

/** Interface representing a SubscriptionInCredentials. */
export interface SubscriptionInCredentials {
  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param options The options parameters.
   */
  postMethodGlobalValid(
    options?: SubscriptionInCredentialsPostMethodGlobalValidOptionalParams,
  ): Promise<void>;
  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to null,
   * and client-side validation should prevent you from making this call
   * @param options The options parameters.
   */
  postMethodGlobalNull(
    options?: SubscriptionInCredentialsPostMethodGlobalNullOptionalParams,
  ): Promise<void>;
  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param options The options parameters.
   */
  postMethodGlobalNotProvidedValid(
    options?: SubscriptionInCredentialsPostMethodGlobalNotProvidedValidOptionalParams,
  ): Promise<void>;
  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param options The options parameters.
   */
  postPathGlobalValid(
    options?: SubscriptionInCredentialsPostPathGlobalValidOptionalParams,
  ): Promise<void>;
  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param options The options parameters.
   */
  postSwaggerGlobalValid(
    options?: SubscriptionInCredentialsPostSwaggerGlobalValidOptionalParams,
  ): Promise<void>;
}
