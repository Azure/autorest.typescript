import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

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

export declare class FeatureClientContext extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the FeatureClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: FeatureClientOptionalParams);
}

/** Optional parameters. */
export declare interface FeatureClientListOperationsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperationsNext operation. */
export declare type FeatureClientListOperationsNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface FeatureClientListOperationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listOperations operation. */
export declare type FeatureClientListOperationsResponse = OperationListResult;

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
