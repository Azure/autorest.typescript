import { Collection } from "../../models/models.js";
import { ListCollections200Response, ListCollectionsDefaultResponse, ParametrizedHostContext as Client } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { ConfidentialLedgerListCollectionsOptions } from "../../models/options.js";
export declare function _listCollectionsSend(context: Client, apiVersion: string, options?: ConfidentialLedgerListCollectionsOptions): StreamableMethod<ListCollections200Response | ListCollectionsDefaultResponse>;
export declare function _listCollectionsDeserialize(result: ListCollections200Response | ListCollectionsDefaultResponse): Promise<Collection[]>;
/** Collection ids are user-created collections of ledger entries */
export declare function listCollections(context: Client, apiVersion: string, options?: ConfidentialLedgerListCollectionsOptions): Promise<Collection[]>;
//# sourceMappingURL=index.d.ts.map