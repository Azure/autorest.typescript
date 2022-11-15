import { ConfidentialLedgerListCollectionsParameters } from "./parameters";
import {
  ConfidentialLedgerListCollections200Response,
  ConfidentialLedgerListCollectionsDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListCollections {
  /** Collection ids are user-created collections of ledger entries */
  get(
    options?: ConfidentialLedgerListCollectionsParameters
  ): StreamableMethod<
    | ConfidentialLedgerListCollections200Response
    | ConfidentialLedgerListCollectionsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/app/collections' has methods for the following verbs: get */
  (path: "/app/collections"): ListCollections;
}

export type ParametrizedHostClient = Client & {
  path: Routes;
};
