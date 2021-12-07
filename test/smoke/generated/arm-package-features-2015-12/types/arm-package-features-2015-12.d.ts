import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

export declare class FeatureClient extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
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
    listOperations(options?: ListOperationsOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsPagingPage;
    private listOperationsPagingAll;
    /**
     * ListOperationsNext
     * @param nextLink The nextLink from the previous successful call to the ListOperations method.
     * @param options The options parameters.
     */
    listOperationsNext(nextLink: string, options?: ListOperationsNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextPagingPage;
    private listOperationsNextPagingAll;
    /**
     * ListOperationsNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNext method.
     * @param options The options parameters.
     */
    listOperationsNextNext(nextLink: string, options?: ListOperationsNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextPagingPage;
    private listOperationsNextNextPagingAll;
    /**
     * ListOperationsNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNext method.
     * @param options The options parameters.
     */
    listOperationsNextNextNext(nextLink: string, options?: ListOperationsNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextPagingPage;
    private listOperationsNextNextNextPagingAll;
    /**
     * ListOperationsNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listOperationsNextNextNextNext(nextLink: string, options?: ListOperationsNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextNextPagingPage;
    private listOperationsNextNextNextNextPagingAll;
    /**
     * ListOperationsNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listOperationsNextNextNextNextNext(nextLink: string, options?: ListOperationsNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextNextNextPagingPage;
    private listOperationsNextNextNextNextNextPagingAll;
    /**
     * ListOperationsNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listOperationsNextNextNextNextNextNext(nextLink: string, options?: ListOperationsNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextNextNextNextPagingPage;
    private listOperationsNextNextNextNextNextNextPagingAll;
    /**
     * ListOperationsNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listOperationsNextNextNextNextNextNextNext(nextLink: string, options?: ListOperationsNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    private listOperationsNextNextNextNextNextNextNextPagingPage;
    private listOperationsNextNextNextNextNextNextNextPagingAll;
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
    /**
     * ListOperationsNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNext;
    /**
     * ListOperationsNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNext;
    /**
     * ListOperationsNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNext;
    /**
     * ListOperationsNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListOperationsNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNextNext;
    /**
     * ListOperationsNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNextNextNext;
    /**
     * ListOperationsNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNextNextNextNext;
    /**
     * ListOperationsNextNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListOperationsNextNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    private _listOperationsNextNextNextNextNextNextNextNext;
    features: Features;
}

/** Optional parameters. */
export declare interface FeatureClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** List of previewed features. */
export declare interface FeatureOperationsListResult {
    /** The array of features. */
    value?: FeatureResult[];
    /** The URL to use for getting the next set of results. */
    nextLink?: string;
}

/** Information about feature. */
export declare interface FeatureProperties {
    /** The registration state of the feature for the subscription. */
    state?: string;
}

/** Previewed feature information. */
export declare interface FeatureResult {
    /** The name of the feature. */
    name?: string;
    /** Properties of the previewed feature. */
    properties?: FeatureProperties;
    /** The resource ID of the feature. */
    id?: string;
    /** The resource type of the feature. */
    type?: string;
}

/** Interface representing a Features. */
export declare interface Features {
    /**
     * Gets all the preview features that are available through AFEC for the subscription.
     * @param options The options parameters.
     */
    listAll(options?: FeaturesListAllOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * Gets all the preview features in a provider namespace that are available through AFEC for the
     * subscription.
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param options The options parameters.
     */
    list(resourceProviderNamespace: string, options?: FeaturesListOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListAllNext
     * @param nextLink The nextLink from the previous successful call to the ListAll method.
     * @param options The options parameters.
     */
    listAllNext(nextLink: string, options?: FeaturesListAllNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListNext
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    listNext(resourceProviderNamespace: string, nextLink: string, options?: FeaturesListNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListAllNextNext
     * @param nextLink The nextLink from the previous successful call to the ListAllNext method.
     * @param options The options parameters.
     */
    listAllNextNext(nextLink: string, options?: FeaturesListAllNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListNextNext
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param nextLink The nextLink from the previous successful call to the ListNext method.
     * @param options The options parameters.
     */
    listNextNext(resourceProviderNamespace: string, nextLink: string, options?: FeaturesListNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListAllNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListAllNextNext method.
     * @param options The options parameters.
     */
    listAllNextNextNext(nextLink: string, options?: FeaturesListAllNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListNextNextNext
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param nextLink The nextLink from the previous successful call to the ListNextNext method.
     * @param options The options parameters.
     */
    listNextNextNext(resourceProviderNamespace: string, nextLink: string, options?: FeaturesListNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListAllNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListAllNextNextNext method.
     * @param options The options parameters.
     */
    listAllNextNextNextNext(nextLink: string, options?: FeaturesListAllNextNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListNextNextNextNext
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNext method.
     * @param options The options parameters.
     */
    listNextNextNextNext(resourceProviderNamespace: string, nextLink: string, options?: FeaturesListNextNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListAllNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListAllNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listAllNextNextNextNextNext(nextLink: string, options?: FeaturesListAllNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListNextNextNextNextNext
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNext method.
     * @param options The options parameters.
     */
    listNextNextNextNextNext(resourceProviderNamespace: string, nextLink: string, options?: FeaturesListNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListAllNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListAllNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listAllNextNextNextNextNextNext(nextLink: string, options?: FeaturesListAllNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListNextNextNextNextNextNext
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listNextNextNextNextNextNext(resourceProviderNamespace: string, nextLink: string, options?: FeaturesListNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListAllNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListAllNextNextNextNextNextNext method.
     * @param options The options parameters.
     */
    listAllNextNextNextNextNextNextNext(nextLink: string, options?: FeaturesListAllNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * ListNextNextNextNextNextNextNext
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listNextNextNextNextNextNextNext(resourceProviderNamespace: string, nextLink: string, options?: FeaturesListNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    /**
     * Gets the preview feature with the specified name.
     * @param resourceProviderNamespace The resource provider namespace for the feature.
     * @param featureName The name of the feature to get.
     * @param options The options parameters.
     */
    get(resourceProviderNamespace: string, featureName: string, options?: FeaturesGetOptionalParams): Promise<FeaturesGetResponse>;
    /**
     * Registers the preview feature for the subscription.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param featureName The name of the feature to register.
     * @param options The options parameters.
     */
    register(resourceProviderNamespace: string, featureName: string, options?: FeaturesRegisterOptionalParams): Promise<FeaturesRegisterResponse>;
    /**
     * Unregisters the preview feature for the subscription.
     * @param resourceProviderNamespace The namespace of the resource provider.
     * @param featureName The name of the feature to unregister.
     * @param options The options parameters.
     */
    unregister(resourceProviderNamespace: string, featureName: string, options?: FeaturesUnregisterOptionalParams): Promise<FeaturesUnregisterResponse>;
}

/** Optional parameters. */
export declare interface FeaturesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type FeaturesGetResponse = FeatureResult;

/** Optional parameters. */
export declare interface FeaturesListAllNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNextNextNextNextNextNextNextNext operation. */
export declare type FeaturesListAllNextNextNextNextNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListAllNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNextNextNextNextNextNextNext operation. */
export declare type FeaturesListAllNextNextNextNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListAllNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNextNextNextNextNextNext operation. */
export declare type FeaturesListAllNextNextNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListAllNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNextNextNextNextNext operation. */
export declare type FeaturesListAllNextNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListAllNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNextNextNextNext operation. */
export declare type FeaturesListAllNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListAllNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNextNextNext operation. */
export declare type FeaturesListAllNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListAllNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNextNext operation. */
export declare type FeaturesListAllNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type FeaturesListAllNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type FeaturesListAllResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNextNextNext operation. */
export declare type FeaturesListNextNextNextNextNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNextNext operation. */
export declare type FeaturesListNextNextNextNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNext operation. */
export declare type FeaturesListNextNextNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNext operation. */
export declare type FeaturesListNextNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNext operation. */
export declare type FeaturesListNextNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNext operation. */
export declare type FeaturesListNextNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNext operation. */
export declare type FeaturesListNextNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type FeaturesListNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type FeaturesListResponse = FeatureOperationsListResult;

/** Optional parameters. */
export declare interface FeaturesRegisterOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the register operation. */
export declare type FeaturesRegisterResponse = FeatureResult;

/** Optional parameters. */
export declare interface FeaturesUnregisterOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the unregister operation. */
export declare type FeaturesUnregisterResponse = FeatureResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNextNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNextNext operation. */
export declare type ListOperationsNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNextNext operation. */
export declare type ListOperationsNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNextNext operation. */
export declare type ListOperationsNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNext operation. */
export declare type ListOperationsNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface ListOperationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperations operation. */
export declare type ListOperationsResponse = OperationListResult;

/** Microsoft.Features operation */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

/** The object that represents the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft.Features */
    provider?: string;
    /** Resource on which the operation is performed: Profile, endpoint, etc. */
    resource?: string;
    /** Operation type: Read, write, delete, etc. */
    operation?: string;
}

/** Result of the request to list Microsoft.Features operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Microsoft.Features operations. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

export { }
