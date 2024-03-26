import { ParametrizedHostContext } from "../../api/ParametrizedHostContext.js";
import { Collection } from "../../models/models.js";
import { ConfidentialLedgerListCollectionsOptions } from "../../models/options.js";
export interface ConfidentialLedgerOperations {
    listCollections: (apiVersion: string, options?: ConfidentialLedgerListCollectionsOptions) => Promise<Collection[]>;
}
export declare function getConfidentialLedger(context: ParametrizedHostContext): {
    listCollections: (apiVersion: string, options?: ConfidentialLedgerListCollectionsOptions) => Promise<Collection[]>;
};
export declare function getConfidentialLedgerOperations(context: ParametrizedHostContext): ConfidentialLedgerOperations;
//# sourceMappingURL=index.d.ts.map