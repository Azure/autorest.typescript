// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsListParameters,
  CodeSigningAccountsGetParameters,
  CodeSigningAccountsCreateParameters,
  CodeSigningAccountsUpdateParameters,
  CodeSigningAccountsDeleteParameters,
  CodeSigningAccountsListByResourceGroupParameters,
  CodeSigningAccountsListBySubscriptionParameters,
  CodeSigningAccountsCheckNameAvailabilityParameters,
  CertificateProfilesGetParameters,
  CertificateProfilesCreateParameters,
  CertificateProfilesDeleteParameters,
  CertificateProfilesListByCodeSigningAccountParameters,
  CertificateProfilesRevokeCertificateParameters,
} from "./parameters.js";
import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  CodeSigningAccountsGet200Response,
  CodeSigningAccountsGetDefaultResponse,
  CodeSigningAccountsCreate200Response,
  CodeSigningAccountsCreate201Response,
  CodeSigningAccountsCreateDefaultResponse,
  CodeSigningAccountsUpdate200Response,
  CodeSigningAccountsUpdate202Response,
  CodeSigningAccountsUpdateDefaultResponse,
  CodeSigningAccountsDeleteOperation202Response,
  CodeSigningAccountsDeleteOperation204Response,
  CodeSigningAccountsDeleteOperationDefaultResponse,
  CodeSigningAccountsListByResourceGroup200Response,
  CodeSigningAccountsListByResourceGroupDefaultResponse,
  CodeSigningAccountsListBySubscription200Response,
  CodeSigningAccountsListBySubscriptionDefaultResponse,
  CodeSigningAccountsCheckNameAvailability200Response,
  CodeSigningAccountsCheckNameAvailabilityDefaultResponse,
  CertificateProfilesGet200Response,
  CertificateProfilesGetDefaultResponse,
  CertificateProfilesCreate200Response,
  CertificateProfilesCreate201Response,
  CertificateProfilesCreateDefaultResponse,
  CertificateProfilesDeleteOperation202Response,
  CertificateProfilesDeleteOperation204Response,
  CertificateProfilesDeleteOperationDefaultResponse,
  CertificateProfilesListByCodeSigningAccount200Response,
  CertificateProfilesListByCodeSigningAccountDefaultResponse,
  CertificateProfilesRevokeCertificate204Response,
  CertificateProfilesRevokeCertificateDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface OperationsList {
  /** List the operations for the provider */
  get(
    options?: OperationsListParameters,
  ): StreamableMethod<
    OperationsList200Response | OperationsListDefaultResponse
  >;
}

export interface CodeSigningAccountsGet {
  /** Get a trusted Signing Account. */
  get(
    options?: CodeSigningAccountsGetParameters,
  ): StreamableMethod<
    CodeSigningAccountsGet200Response | CodeSigningAccountsGetDefaultResponse
  >;
  /** Create a trusted Signing Account. */
  put(
    options: CodeSigningAccountsCreateParameters,
  ): StreamableMethod<
    | CodeSigningAccountsCreate200Response
    | CodeSigningAccountsCreate201Response
    | CodeSigningAccountsCreateDefaultResponse
  >;
  /** Update a trusted signing account. */
  patch(
    options: CodeSigningAccountsUpdateParameters,
  ): StreamableMethod<
    | CodeSigningAccountsUpdate200Response
    | CodeSigningAccountsUpdate202Response
    | CodeSigningAccountsUpdateDefaultResponse
  >;
  /** Delete a trusted signing account. */
  delete(
    options?: CodeSigningAccountsDeleteParameters,
  ): StreamableMethod<
    | CodeSigningAccountsDeleteOperation202Response
    | CodeSigningAccountsDeleteOperation204Response
    | CodeSigningAccountsDeleteOperationDefaultResponse
  >;
}

export interface CodeSigningAccountsListByResourceGroup {
  /** Lists trusted signing accounts within a resource group. */
  get(
    options?: CodeSigningAccountsListByResourceGroupParameters,
  ): StreamableMethod<
    | CodeSigningAccountsListByResourceGroup200Response
    | CodeSigningAccountsListByResourceGroupDefaultResponse
  >;
}

export interface CodeSigningAccountsListBySubscription {
  /** Lists trusted signing accounts within a subscription. */
  get(
    options?: CodeSigningAccountsListBySubscriptionParameters,
  ): StreamableMethod<
    | CodeSigningAccountsListBySubscription200Response
    | CodeSigningAccountsListBySubscriptionDefaultResponse
  >;
}

export interface CodeSigningAccountsCheckNameAvailability {
  /** Checks that the trusted signing account name is valid and is not already in use. */
  post(
    options: CodeSigningAccountsCheckNameAvailabilityParameters,
  ): StreamableMethod<
    | CodeSigningAccountsCheckNameAvailability200Response
    | CodeSigningAccountsCheckNameAvailabilityDefaultResponse
  >;
}

export interface CertificateProfilesGet {
  /** Get details of a certificate profile. */
  get(
    options?: CertificateProfilesGetParameters,
  ): StreamableMethod<
    CertificateProfilesGet200Response | CertificateProfilesGetDefaultResponse
  >;
  /** Create a certificate profile. */
  put(
    options: CertificateProfilesCreateParameters,
  ): StreamableMethod<
    | CertificateProfilesCreate200Response
    | CertificateProfilesCreate201Response
    | CertificateProfilesCreateDefaultResponse
  >;
  /** Delete a certificate profile. */
  delete(
    options?: CertificateProfilesDeleteParameters,
  ): StreamableMethod<
    | CertificateProfilesDeleteOperation202Response
    | CertificateProfilesDeleteOperation204Response
    | CertificateProfilesDeleteOperationDefaultResponse
  >;
}

export interface CertificateProfilesListByCodeSigningAccount {
  /** List certificate profiles under a trusted signing account. */
  get(
    options?: CertificateProfilesListByCodeSigningAccountParameters,
  ): StreamableMethod<
    | CertificateProfilesListByCodeSigningAccount200Response
    | CertificateProfilesListByCodeSigningAccountDefaultResponse
  >;
}

export interface CertificateProfilesRevokeCertificate {
  /** Revoke a certificate under a certificate profile. */
  post(
    options: CertificateProfilesRevokeCertificateParameters,
  ): StreamableMethod<
    | CertificateProfilesRevokeCertificate204Response
    | CertificateProfilesRevokeCertificateDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Microsoft.CodeSigning/operations' has methods for the following verbs: get */
  (path: "/providers/Microsoft.CodeSigning/operations"): OperationsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.CodeSigning/codeSigningAccounts/\{accountName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
    subscriptionId: string,
    resourceGroupName: string,
    accountName: string,
  ): CodeSigningAccountsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.CodeSigning/codeSigningAccounts' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts",
    subscriptionId: string,
    resourceGroupName: string,
  ): CodeSigningAccountsListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.CodeSigning/codeSigningAccounts' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/codeSigningAccounts",
    subscriptionId: string,
  ): CodeSigningAccountsListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.CodeSigning/checkNameAvailability' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/checkNameAvailability",
    subscriptionId: string,
  ): CodeSigningAccountsCheckNameAvailability;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.CodeSigning/codeSigningAccounts/\{accountName\}/certificateProfiles/\{profileName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}",
    subscriptionId: string,
    resourceGroupName: string,
    accountName: string,
    profileName: string,
  ): CertificateProfilesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.CodeSigning/codeSigningAccounts/\{accountName\}/certificateProfiles' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles",
    subscriptionId: string,
    resourceGroupName: string,
    accountName: string,
  ): CertificateProfilesListByCodeSigningAccount;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.CodeSigning/codeSigningAccounts/\{accountName\}/certificateProfiles/\{profileName\}/revokeCertificate' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}/revokeCertificate",
    subscriptionId: string,
    resourceGroupName: string,
    accountName: string,
    profileName: string,
  ): CertificateProfilesRevokeCertificate;
}

export type CodeSigningClient = Client & {
  path: Routes;
};
