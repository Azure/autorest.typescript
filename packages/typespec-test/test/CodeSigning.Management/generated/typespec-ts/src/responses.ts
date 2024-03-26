// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  PagedOperationOutput,
  ErrorResponseOutput,
  CodeSigningAccountOutput,
  CodeSigningAccountListResultOutput,
  CheckNameAvailabilityResultOutput,
  CertificateProfileOutput,
  CertificateProfileListResultOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface OperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedOperationOutput;
}

export interface OperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CodeSigningAccountsGet200Response extends HttpResponse {
  status: "200";
  body: CodeSigningAccountOutput;
}

export interface CodeSigningAccountsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'CodeSigningAccount' update operation succeeded */
export interface CodeSigningAccountsCreate200Response extends HttpResponse {
  status: "200";
  body: CodeSigningAccountOutput;
}

export interface CodeSigningAccountsCreate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'CodeSigningAccount' create operation succeeded */
export interface CodeSigningAccountsCreate201Response extends HttpResponse {
  status: "201";
  body: CodeSigningAccountOutput;
  headers: RawHttpHeaders & CodeSigningAccountsCreate201Headers;
}

export interface CodeSigningAccountsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running create operation */
export interface CodeSigningAccountsCreateLogicalResponse extends HttpResponse {
  status: "200";
  body: CodeSigningAccountOutput;
}

/** Azure operation completed successfully. */
export interface CodeSigningAccountsUpdate200Response extends HttpResponse {
  status: "200";
  body: CodeSigningAccountOutput;
}

export interface CodeSigningAccountsUpdate202Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
}

/** Resource update request accepted. */
export interface CodeSigningAccountsUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CodeSigningAccountsUpdate202Headers;
}

export interface CodeSigningAccountsUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface CodeSigningAccountsUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: CodeSigningAccountOutput;
}

export interface CodeSigningAccountsDeleteOperation202Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
}

/** Resource deletion accepted. */
export interface CodeSigningAccountsDeleteOperation202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CodeSigningAccountsDeleteOperation202Headers;
}

/** Resource does not exist. */
export interface CodeSigningAccountsDeleteOperation204Response
  extends HttpResponse {
  status: "204";
}

export interface CodeSigningAccountsDeleteOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface CodeSigningAccountsDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface CodeSigningAccountsListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: CodeSigningAccountListResultOutput;
}

export interface CodeSigningAccountsListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CodeSigningAccountsListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: CodeSigningAccountListResultOutput;
}

export interface CodeSigningAccountsListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CodeSigningAccountsCheckNameAvailability200Response
  extends HttpResponse {
  status: "200";
  body: CheckNameAvailabilityResultOutput;
}

export interface CodeSigningAccountsCheckNameAvailabilityDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CertificateProfilesGet200Response extends HttpResponse {
  status: "200";
  body: CertificateProfileOutput;
}

export interface CertificateProfilesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'CertificateProfile' update operation succeeded */
export interface CertificateProfilesCreate200Response extends HttpResponse {
  status: "200";
  body: CertificateProfileOutput;
}

export interface CertificateProfilesCreate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'CertificateProfile' create operation succeeded */
export interface CertificateProfilesCreate201Response extends HttpResponse {
  status: "201";
  body: CertificateProfileOutput;
  headers: RawHttpHeaders & CertificateProfilesCreate201Headers;
}

export interface CertificateProfilesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running create operation */
export interface CertificateProfilesCreateLogicalResponse extends HttpResponse {
  status: "200";
  body: CertificateProfileOutput;
}

export interface CertificateProfilesDeleteOperation202Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
}

/** Resource deletion accepted. */
export interface CertificateProfilesDeleteOperation202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CertificateProfilesDeleteOperation202Headers;
}

/** Resource does not exist. */
export interface CertificateProfilesDeleteOperation204Response
  extends HttpResponse {
  status: "204";
}

export interface CertificateProfilesDeleteOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface CertificateProfilesDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface CertificateProfilesListByCodeSigningAccount200Response
  extends HttpResponse {
  status: "200";
  body: CertificateProfileListResultOutput;
}

export interface CertificateProfilesListByCodeSigningAccountDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Action completed successfully. */
export interface CertificateProfilesRevokeCertificate204Response
  extends HttpResponse {
  status: "204";
}

export interface CertificateProfilesRevokeCertificateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
