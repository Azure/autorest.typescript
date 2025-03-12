// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type { LedgerEntry, LedgerUser } from "./models.js";

export type ListCollectionsParameters = RequestParameters;
export type GetEnclaveQuotesParameters = RequestParameters;
export type GetConstitutionParameters = RequestParameters;
export type GetConsortiumMembersParameters = RequestParameters;
export type ListLedgerEntriesParameters = RequestParameters;

export interface CreateLedgerEntryBodyParam {
  /** Details about a ledger entry. */
  body: LedgerEntry;
}

export type CreateLedgerEntryParameters = CreateLedgerEntryBodyParam &
  RequestParameters;
export type GetLedgerEntryParameters = RequestParameters;
export type GetReceiptParameters = RequestParameters;
export type GetTransactionStatusParameters = RequestParameters;

export interface GetCurrentLedgerEntryQueryParamProperties {
  /** The collection id. */
  collectionId?: string;
}

export interface GetCurrentLedgerEntryQueryParam {
  queryParameters?: GetCurrentLedgerEntryQueryParamProperties;
}

export type GetCurrentLedgerEntryParameters = GetCurrentLedgerEntryQueryParam &
  RequestParameters;
export type DeleteUserParameters = RequestParameters;
export type GetUserParameters = RequestParameters;
/** Details about a Confidential ledger user. */
export type LedgerUserResourceMergeAndPatch = Partial<LedgerUser>;

export interface CreateOrUpdateUserBodyParam {
  /** Details about a Confidential ledger user. */
  body: LedgerUserResourceMergeAndPatch;
}

export interface CreateOrUpdateUserMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateUserParameters = CreateOrUpdateUserMediaTypesParam &
  CreateOrUpdateUserBodyParam &
  RequestParameters;
