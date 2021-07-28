import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Features } from "../operationsInterfaces";
import { FeatureClientContext } from "../featureClientContext";
import { FeatureResult, FeaturesListAllOptionalParams, FeaturesListOptionalParams, FeaturesGetOptionalParams, FeaturesGetResponse, FeaturesRegisterOptionalParams, FeaturesRegisterResponse, FeaturesUnregisterOptionalParams, FeaturesUnregisterResponse } from "../models";
/** Class representing a Features. */
export declare class FeaturesImpl implements Features {
    private readonly client;
    /**
     * Initialize a new instance of the class Features class.
     * @param client Reference to the service client
     */
    constructor(client: FeatureClientContext);
    /**
     * Gets all the preview features that are available through AFEC for the subscription.
     * @param options The options parameters.
     */
    listAll(options?: FeaturesListAllOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    private listAllPagingPage;
    private listAllPagingAll;
    /**
     * Gets all the preview features in a provider namespace that are available through AFEC for the
     * subscription.
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param options The options parameters.
     */
    list(resourceProviderNamespace: string, options?: FeaturesListOptionalParams): PagedAsyncIterableIterator<FeatureResult>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets all the preview features that are available through AFEC for the subscription.
     * @param options The options parameters.
     */
    private _listAll;
    /**
     * Gets all the preview features in a provider namespace that are available through AFEC for the
     * subscription.
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param options The options parameters.
     */
    private _list;
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
    /**
     * ListAllNext
     * @param nextLink The nextLink from the previous successful call to the ListAll method.
     * @param options The options parameters.
     */
    private _listAllNext;
    /**
     * ListNext
     * @param resourceProviderNamespace The namespace of the resource provider for getting features.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=features.d.ts.map