import { RequestParameters } from "@azure-rest/core-client";
import { LedgerEntry, LedgerUser } from "./models";

export interface ConfidentialLedgerListCollectionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerListCollectionsQueryParam {
  queryParameters: ConfidentialLedgerListCollectionsQueryParamProperties;
}

export type ConfidentialLedgerListCollectionsParameters =
  ConfidentialLedgerListCollectionsQueryParam & RequestParameters;

export interface ConfidentialLedgerGetEnclaveQuotesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerGetEnclaveQuotesQueryParam {
  queryParameters: ConfidentialLedgerGetEnclaveQuotesQueryParamProperties;
}

export type ConfidentialLedgerGetEnclaveQuotesParameters =
  ConfidentialLedgerGetEnclaveQuotesQueryParam & RequestParameters;

export interface ConfidentialLedgerGetConstitutionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerGetConstitutionQueryParam {
  queryParameters: ConfidentialLedgerGetConstitutionQueryParamProperties;
}

export type ConfidentialLedgerGetConstitutionParameters =
  ConfidentialLedgerGetConstitutionQueryParam & RequestParameters;

export interface ConfidentialLedgerGetConsortiumMembersQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerGetConsortiumMembersQueryParam {
  queryParameters: ConfidentialLedgerGetConsortiumMembersQueryParamProperties;
}

export type ConfidentialLedgerGetConsortiumMembersParameters =
  ConfidentialLedgerGetConsortiumMembersQueryParam & RequestParameters;

export interface ConfidentialLedgerPostLedgerEntryBodyParam {
  body: LedgerEntry;
}

export interface ConfidentialLedgerPostLedgerEntryQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The collection id. */
  collectionId?: string;
}

export interface ConfidentialLedgerPostLedgerEntryQueryParam {
  queryParameters: ConfidentialLedgerPostLedgerEntryQueryParamProperties;
}

export type ConfidentialLedgerPostLedgerEntryParameters =
  ConfidentialLedgerPostLedgerEntryQueryParam &
    ConfidentialLedgerPostLedgerEntryBodyParam &
    RequestParameters;

export interface ConfidentialLedgerGetLedgerEntryQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The collection id. */
  collectionId?: string;
}

export interface ConfidentialLedgerGetLedgerEntryQueryParam {
  queryParameters: ConfidentialLedgerGetLedgerEntryQueryParamProperties;
}

export type ConfidentialLedgerGetLedgerEntryParameters =
  ConfidentialLedgerGetLedgerEntryQueryParam & RequestParameters;

export interface ConfidentialLedgerGetReceiptQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerGetReceiptQueryParam {
  queryParameters: ConfidentialLedgerGetReceiptQueryParamProperties;
}

export type ConfidentialLedgerGetReceiptParameters =
  ConfidentialLedgerGetReceiptQueryParam & RequestParameters;

export interface ConfidentialLedgerGetTransactionStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerGetTransactionStatusQueryParam {
  queryParameters: ConfidentialLedgerGetTransactionStatusQueryParamProperties;
}

export type ConfidentialLedgerGetTransactionStatusParameters =
  ConfidentialLedgerGetTransactionStatusQueryParam & RequestParameters;

export interface ConfidentialLedgerGetCurrentLedgerEntryQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The collection id. */
  collectionId?: string;
}

export interface ConfidentialLedgerGetCurrentLedgerEntryQueryParam {
  queryParameters: ConfidentialLedgerGetCurrentLedgerEntryQueryParamProperties;
}

export type ConfidentialLedgerGetCurrentLedgerEntryParameters =
  ConfidentialLedgerGetCurrentLedgerEntryQueryParam & RequestParameters;

export interface ConfidentialLedgerDeleteUserQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerDeleteUserQueryParam {
  queryParameters: ConfidentialLedgerDeleteUserQueryParamProperties;
}

export type ConfidentialLedgerDeleteUserParameters =
  ConfidentialLedgerDeleteUserQueryParam & RequestParameters;

export interface ConfidentialLedgerGetUserQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerGetUserQueryParam {
  queryParameters: ConfidentialLedgerGetUserQueryParamProperties;
}

export type ConfidentialLedgerGetUserParameters =
  ConfidentialLedgerGetUserQueryParam & RequestParameters;

export interface ConfidentialLedgerCreateOrUpdateUserBodyParam {
  /** Details about a Confidential Ledger user. */
  body: LedgerUser;
}

export interface ConfidentialLedgerCreateOrUpdateUserQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConfidentialLedgerCreateOrUpdateUserQueryParam {
  queryParameters: ConfidentialLedgerCreateOrUpdateUserQueryParamProperties;
}

export interface ConfidentialLedgerCreateOrUpdateUserMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type ConfidentialLedgerCreateOrUpdateUserParameters =
  ConfidentialLedgerCreateOrUpdateUserQueryParam &
    ConfidentialLedgerCreateOrUpdateUserMediaTypesParam &
    ConfidentialLedgerCreateOrUpdateUserBodyParam &
    RequestParameters;
