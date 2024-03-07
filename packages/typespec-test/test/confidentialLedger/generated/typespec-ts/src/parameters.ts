// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { LedgerEntry, LedgerUser } from "./models";

export interface ListCollectionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ListCollectionsQueryParam {
  queryParameters: ListCollectionsQueryParamProperties;
}

export type ListCollectionsParameters = ListCollectionsQueryParam &
  RequestParameters;

export interface GetEnclaveQuotesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetEnclaveQuotesQueryParam {
  queryParameters: GetEnclaveQuotesQueryParamProperties;
}

export type GetEnclaveQuotesParameters = GetEnclaveQuotesQueryParam &
  RequestParameters;

export interface GetConstitutionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetConstitutionQueryParam {
  queryParameters: GetConstitutionQueryParamProperties;
}

export type GetConstitutionParameters = GetConstitutionQueryParam &
  RequestParameters;

export interface GetConsortiumMembersQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetConsortiumMembersQueryParam {
  queryParameters: GetConsortiumMembersQueryParamProperties;
}

export type GetConsortiumMembersParameters = GetConsortiumMembersQueryParam &
  RequestParameters;

export interface ListLedgerEntriesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ListLedgerEntriesQueryParam {
  queryParameters: ListLedgerEntriesQueryParamProperties;
}

export type ListLedgerEntriesParameters = ListLedgerEntriesQueryParam &
  RequestParameters;

export interface CreateLedgerEntryBodyParam {
  /** The resource instance. */
  body: LedgerEntry;
}

export interface CreateLedgerEntryQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface CreateLedgerEntryQueryParam {
  queryParameters: CreateLedgerEntryQueryParamProperties;
}

export type CreateLedgerEntryParameters = CreateLedgerEntryQueryParam &
  CreateLedgerEntryBodyParam &
  RequestParameters;

export interface GetLedgerEntryQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetLedgerEntryQueryParam {
  queryParameters: GetLedgerEntryQueryParamProperties;
}

export type GetLedgerEntryParameters = GetLedgerEntryQueryParam &
  RequestParameters;

export interface GetReceiptQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetReceiptQueryParam {
  queryParameters: GetReceiptQueryParamProperties;
}

export type GetReceiptParameters = GetReceiptQueryParam & RequestParameters;

export interface GetTransactionStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetTransactionStatusQueryParam {
  queryParameters: GetTransactionStatusQueryParamProperties;
}

export type GetTransactionStatusParameters = GetTransactionStatusQueryParam &
  RequestParameters;

export interface GetCurrentLedgerEntryQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The collection id. */
  collectionId?: string;
}

export interface GetCurrentLedgerEntryQueryParam {
  queryParameters: GetCurrentLedgerEntryQueryParamProperties;
}

export type GetCurrentLedgerEntryParameters = GetCurrentLedgerEntryQueryParam &
  RequestParameters;

export interface DeleteUserQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeleteUserQueryParam {
  queryParameters: DeleteUserQueryParamProperties;
}

export type DeleteUserParameters = DeleteUserQueryParam & RequestParameters;

export interface GetUserQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetUserQueryParam {
  queryParameters: GetUserQueryParamProperties;
}

export type GetUserParameters = GetUserQueryParam & RequestParameters;
/** The resource instance. */
export type LedgerUserResourceMergeAndPatch = Partial<LedgerUser>;

export interface CreateOrUpdateUserBodyParam {
  /** The resource instance. */
  body: LedgerUserResourceMergeAndPatch;
}

export interface CreateOrUpdateUserQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface CreateOrUpdateUserQueryParam {
  queryParameters: CreateOrUpdateUserQueryParamProperties;
}

export interface CreateOrUpdateUserMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateUserParameters = CreateOrUpdateUserQueryParam &
  CreateOrUpdateUserMediaTypesParam &
  CreateOrUpdateUserBodyParam &
  RequestParameters;
