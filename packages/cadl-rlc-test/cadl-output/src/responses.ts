import { HttpResponse } from "@azure-rest/core-client";
import { CollectionArrayOutput, ErrorResponseOutput } from "./outputModels";

/** The request has succeeded. */
export interface ConfidentialLedgerListCollections200Response
  extends HttpResponse {
  status: "200";
  body: CollectionArrayOutput;
}

export interface ConfidentialLedgerListCollectionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerGetEnclaveQuotes200Response
  extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerGetEnclaveQuotesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerGetConstitution200Response
  extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerGetConstitutionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerGetConsortiumMembers200Response
  extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerGetConsortiumMembersDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerPostLedgerEntry200Response
  extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerPostLedgerEntryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerGetLedgerEntry200Response
  extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerGetLedgerEntryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerGetReceipt200Response extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerGetReceiptDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerGetTransactionStatus200Response
  extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerGetTransactionStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerGetCurrentLedgerEntry200Response
  extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerGetCurrentLedgerEntryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ConfidentialLedgerDeleteUser204Response extends HttpResponse {
  status: "204";
}

export interface ConfidentialLedgerDeleteUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerGetUser200Response extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerGetUserDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ConfidentialLedgerCreateOrUpdateUser200Response
  extends HttpResponse {
  status: "200";
}

export interface ConfidentialLedgerCreateOrUpdateUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
