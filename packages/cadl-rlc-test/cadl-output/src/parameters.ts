import { RequestParameters } from "@azure-rest/core-client";
import { LedgerEntry, LedgerUser } from "./models";

export interface ConfidentialLedgerListCollectionsQueryParamProperties {
  apiVersion: string;
}

export interface ConfidentialLedgerListCollectionsQueryParam {
  queryParameters: ConfidentialLedgerListCollectionsQueryParamProperties;
}

export type ConfidentialLedgerListCollectionsParameters =
  ConfidentialLedgerListCollectionsQueryParam & RequestParameters;

export interface ConfidentialLedgerGetEnclaveQuotesQueryParamProperties {
  apiVersion: string;
}

export interface ConfidentialLedgerGetEnclaveQuotesQueryParam {
  queryParameters: ConfidentialLedgerGetEnclaveQuotesQueryParamProperties;
}

export type ConfidentialLedgerGetEnclaveQuotesParameters =
  ConfidentialLedgerGetEnclaveQuotesQueryParam & RequestParameters;

export interface ConfidentialLedgerGetConstitutionQueryParamProperties {
  apiVersion: string;
}

export interface ConfidentialLedgerGetConstitutionQueryParam {
  queryParameters: ConfidentialLedgerGetConstitutionQueryParamProperties;
}

export type ConfidentialLedgerGetConstitutionParameters =
  ConfidentialLedgerGetConstitutionQueryParam & RequestParameters;

export interface ConfidentialLedgerGetConsortiumMembersQueryParamProperties {
  apiVersion: string;
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
  apiVersion: string;
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
  apiVersion: string;
  collectionId?: string;
}

export interface ConfidentialLedgerGetLedgerEntryQueryParam {
  queryParameters: ConfidentialLedgerGetLedgerEntryQueryParamProperties;
}

export type ConfidentialLedgerGetLedgerEntryParameters =
  ConfidentialLedgerGetLedgerEntryQueryParam & RequestParameters;

export interface ConfidentialLedgerGetReceiptQueryParamProperties {
  apiVersion: string;
}

export interface ConfidentialLedgerGetReceiptQueryParam {
  queryParameters: ConfidentialLedgerGetReceiptQueryParamProperties;
}

export type ConfidentialLedgerGetReceiptParameters =
  ConfidentialLedgerGetReceiptQueryParam & RequestParameters;

export interface ConfidentialLedgerGetTransactionStatusQueryParamProperties {
  apiVersion: string;
}

export interface ConfidentialLedgerGetTransactionStatusQueryParam {
  queryParameters: ConfidentialLedgerGetTransactionStatusQueryParamProperties;
}

export type ConfidentialLedgerGetTransactionStatusParameters =
  ConfidentialLedgerGetTransactionStatusQueryParam & RequestParameters;

export interface ConfidentialLedgerGetCurrentLedgerEntryQueryParamProperties {
  apiVersion: string;
  collectionId?: string;
}

export interface ConfidentialLedgerGetCurrentLedgerEntryQueryParam {
  queryParameters: ConfidentialLedgerGetCurrentLedgerEntryQueryParamProperties;
}

export type ConfidentialLedgerGetCurrentLedgerEntryParameters =
  ConfidentialLedgerGetCurrentLedgerEntryQueryParam & RequestParameters;

export interface ConfidentialLedgerDeleteUserQueryParamProperties {
  apiVersion: string;
}

export interface ConfidentialLedgerDeleteUserQueryParam {
  queryParameters: ConfidentialLedgerDeleteUserQueryParamProperties;
}

export type ConfidentialLedgerDeleteUserParameters =
  ConfidentialLedgerDeleteUserQueryParam & RequestParameters;

export interface ConfidentialLedgerGetUserQueryParamProperties {
  apiVersion: string;
}

export interface ConfidentialLedgerGetUserQueryParam {
  queryParameters: ConfidentialLedgerGetUserQueryParamProperties;
}

export type ConfidentialLedgerGetUserParameters =
  ConfidentialLedgerGetUserQueryParam & RequestParameters;

export interface ConfidentialLedgerCreateOrUpdateUserBodyParam {
  body: LedgerUser;
}

export interface ConfidentialLedgerCreateOrUpdateUserQueryParamProperties {
  apiVersion: string;
}

export interface ConfidentialLedgerCreateOrUpdateUserQueryParam {
  queryParameters: ConfidentialLedgerCreateOrUpdateUserQueryParamProperties;
}

export interface ConfidentialLedgerCreateOrUpdateUserMediaTypesParam {
  contentType: string;
}

export type ConfidentialLedgerCreateOrUpdateUserParameters =
  ConfidentialLedgerCreateOrUpdateUserQueryParam &
    ConfidentialLedgerCreateOrUpdateUserMediaTypesParam &
    ConfidentialLedgerCreateOrUpdateUserBodyParam &
    RequestParameters;
