import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Subscriptions } from "../operationsInterfaces";
import { SubscriptionClientContext } from "../subscriptionClientContext";
import { Location, SubscriptionsListLocationsOptionalParams, Subscription, SubscriptionsListOptionalParams, SubscriptionsGetOptionalParams, SubscriptionsGetResponse } from "../models";
/** Class representing a Subscriptions. */
export declare class SubscriptionsImpl implements Subscriptions {
    private readonly client;
    /**
     * Initialize a new instance of the class Subscriptions class.
     * @param client Reference to the service client
     */
    constructor(client: SubscriptionClientContext);
    /**
     * This operation provides all the locations that are available for resource providers; however, each
     * resource provider may support a subset of this list.
     * @param subscriptionId The ID of the target subscription.
     * @param options The options parameters.
     */
    listLocations(subscriptionId: string, options?: SubscriptionsListLocationsOptionalParams): PagedAsyncIterableIterator<Location>;
    private listLocationsPagingPage;
    private listLocationsPagingAll;
    /**
     * Gets all subscriptions for a tenant.
     * @param options The options parameters.
     */
    list(options?: SubscriptionsListOptionalParams): PagedAsyncIterableIterator<Subscription>;
    private listPagingPage;
    private listPagingAll;
    /**
     * This operation provides all the locations that are available for resource providers; however, each
     * resource provider may support a subset of this list.
     * @param subscriptionId The ID of the target subscription.
     * @param options The options parameters.
     */
    private _listLocations;
    /**
     * Gets details about a specified subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The options parameters.
     */
    get(subscriptionId: string, options?: SubscriptionsGetOptionalParams): Promise<SubscriptionsGetResponse>;
    /**
     * Gets all subscriptions for a tenant.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=subscriptions.d.ts.map