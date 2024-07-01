// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** Model of an access-token linked to an account. */
export interface AccessTokenOutput {
  /** The access-token id. */
  readonly id: string;
  /** The access-token name. */
  name: string;
  /** The access-token value in JWT format. */
  readonly jwtToken?: string;
  /** The access-token createdAt utcDateTime. */
  readonly createdAt: string;
  /** The access-token expiryAt utcDateTime. */
  expiryAt: string;
  /** The access-token state - Active | Expired. */
  readonly state: AccessTokenStateOutput;
}

/** An account is a parent resource for most of the other service resources. It's directly mapped to an ARM resource and helps to create a link between control-plane and data-plane resources. */
export interface AccountOutput {
  /** The account id. */
  readonly id: string;
  /** The ARM fully-qualified resource id for the account. */
  readonly resourceId: string;
  /** The account name. */
  readonly name: string;
  /** The state of account - Active | Inactive */
  readonly state: AccountStateOutput;
  /** The ARM-based subscription id for the account. */
  readonly subscriptionId: string;
  /** The ARM-based subscription state - Registered | Unregistered | Warned | Suspended | Deleted */
  readonly subscriptionState: SubscriptionStateOutput;
  /** The Azure tenant id of the account. */
  readonly tenantId: string;
  /** The account resource ARM location, for eg. eastus, southeastasia. */
  readonly location: string;
  /** This property sets the connection region for Playwright client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created. */
  readonly regionalAffinity?: EnablementStatusOutput;
  /** When enabled, Playwright client workers can connect to cloud-hosted browsers. This can increase the number of parallel workers for a test run, significantly minimizing test completion durations. */
  readonly scalableExecution?: EnablementStatusOutput;
  /** When enabled, this feature allows the workspace to upload and display test results, including artifacts like traces and screenshots, in the Playwright portal. This enables faster and more efficient troubleshooting. */
  readonly reporting?: EnablementStatusOutput;
}

/** Alias for AccessTokenStateOutput */
export type AccessTokenStateOutput = string;
/** Paged collection of AccessToken items */
export type PagedAccessTokenOutput = Paged<AccessTokenOutput>;
/** Alias for AccountStateOutput */
export type AccountStateOutput = string;
/** Alias for SubscriptionStateOutput */
export type SubscriptionStateOutput = string;
/** Alias for EnablementStatusOutput */
export type EnablementStatusOutput = string;
