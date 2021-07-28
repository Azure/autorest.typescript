import * as coreAuth from "@azure/core-auth";
import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Features } from "./operationsInterfaces";
import { FeatureClientContext } from "./featureClientContext";
import { FeatureClientOptionalParams, Operation, FeatureClientListOperationsOptionalParams } from "./models";
export declare class FeatureClient extends FeatureClientContext {
    /**
     * Initializes a new instance of the FeatureClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: FeatureClientOptionalParams);
    /**
     * Lists all of the available Microsoft.Features REST API operations.
     * @param options The options parameters.
     */
    listOperations(options?: FeatureClientListOperationsOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsPagingPage;
    private listOperationsPagingAll;
    /**
     * Lists all of the available Microsoft.Features REST API operations.
     * @param options The options parameters.
     */
    private _listOperations;
    /**
     * ListOperationsNext
     * @param nextLink The nextLink from the previous successful call to the ListOperations method.
     * @param options The options parameters.
     */
    private _listOperationsNext;
    features: Features;
}
//# sourceMappingURL=featureClient.d.ts.map