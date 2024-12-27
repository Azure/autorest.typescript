// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  CollectionOutput,
  PagedLedgerEntriesOutput,
  LedgerEntryOutput,
  TransactionReceiptOutput,
  TransactionStatusOutput,
  LedgerUserOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface ListCollections200Response extends HttpResponse {
  status: "200";
  body: Array<CollectionOutput>;
}

export interface ListCollectionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListCollectionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListCollectionsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetEnclaveQuotes200Response extends HttpResponse {
  status: "200";
}

export interface GetEnclaveQuotesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetEnclaveQuotesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetEnclaveQuotesDefaultHeaders;
}

/** The request has succeeded. */
export interface GetConstitution200Response extends HttpResponse {
  status: "200";
}

export interface GetConstitutionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetConstitutionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetConstitutionDefaultHeaders;
}

/** The request has succeeded. */
export interface GetConsortiumMembers200Response extends HttpResponse {
  status: "200";
}

export interface GetConsortiumMembersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetConsortiumMembersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetConsortiumMembersDefaultHeaders;
}

/** The request has succeeded. */
export interface ListLedgerEntries200Response extends HttpResponse {
  status: "200";
  body: PagedLedgerEntriesOutput;
}

export interface ListLedgerEntriesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListLedgerEntriesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListLedgerEntriesDefaultHeaders;
}

export interface CreateLedgerEntry201Headers {
  location: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateLedgerEntry201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & CreateLedgerEntry201Headers;
}

export interface CreateLedgerEntryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateLedgerEntryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateLedgerEntryDefaultHeaders;
}

/** The request has succeeded. */
export interface GetLedgerEntry200Response extends HttpResponse {
  status: "200";
  body: LedgerEntryOutput;
}

export interface GetLedgerEntryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetLedgerEntryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetLedgerEntryDefaultHeaders;
}

/** The request has succeeded. */
export interface GetReceipt200Response extends HttpResponse {
  status: "200";
  body: TransactionReceiptOutput;
}

export interface GetReceiptDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetReceiptDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetReceiptDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTransactionStatus200Response extends HttpResponse {
  status: "200";
  body: TransactionStatusOutput;
}

export interface GetTransactionStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTransactionStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTransactionStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface GetCurrentLedgerEntry200Response extends HttpResponse {
  status: "200";
  body: LedgerEntryOutput;
}

export interface GetCurrentLedgerEntryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetCurrentLedgerEntryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCurrentLedgerEntryDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteUser204Response extends HttpResponse {
  status: "204";
}

export interface DeleteUserDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteUserDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteUserDefaultHeaders;
}

/** The request has succeeded. */
export interface GetUser200Response extends HttpResponse {
  status: "200";
  body: LedgerUserOutput;
}

export interface GetUserDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetUserDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetUserDefaultHeaders;
}

/** The request has succeeded. */
export interface CreateOrUpdateUser200Response extends HttpResponse {
  status: "200";
  body: LedgerUserOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdateUser201Response extends HttpResponse {
  status: "201";
  body: LedgerUserOutput;
}

export interface CreateOrUpdateUserDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrUpdateUserDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrUpdateUserDefaultHeaders;
}
