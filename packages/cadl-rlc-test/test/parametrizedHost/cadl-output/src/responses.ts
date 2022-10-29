import { HttpResponse } from "@azure-rest/core-client";
import { CollectionOutput, ErrorResponseOutput } from "./outputModels";

/** The request has succeeded. */
export interface ConfidentialLedgerListCollections200Response
  extends HttpResponse {
  status: "200";
  body: Array<CollectionOutput>;
}

export interface ConfidentialLedgerListCollectionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
