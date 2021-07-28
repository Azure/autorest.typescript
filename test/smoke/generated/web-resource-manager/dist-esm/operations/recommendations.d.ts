import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Recommendations } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { Recommendation, RecommendationsListOptionalParams, RecommendationsListHistoryForHostingEnvironmentOptionalParams, RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams, RecommendationsListHistoryForWebAppOptionalParams, RecommendationsListRecommendedRulesForWebAppOptionalParams, RecommendationsResetAllFiltersOptionalParams, RecommendationsDisableRecommendationForSubscriptionOptionalParams, RecommendationsDisableAllForHostingEnvironmentOptionalParams, RecommendationsResetAllFiltersForHostingEnvironmentOptionalParams, RecommendationsGetRuleDetailsByHostingEnvironmentOptionalParams, RecommendationsGetRuleDetailsByHostingEnvironmentResponse, RecommendationsDisableRecommendationForHostingEnvironmentOptionalParams, RecommendationsDisableAllForWebAppOptionalParams, RecommendationsResetAllFiltersForWebAppOptionalParams, RecommendationsGetRuleDetailsByWebAppOptionalParams, RecommendationsGetRuleDetailsByWebAppResponse, RecommendationsDisableRecommendationForSiteOptionalParams } from "../models";
/** Class representing a Recommendations. */
export declare class RecommendationsImpl implements Recommendations {
    private readonly client;
    /**
     * Initialize a new instance of the class Recommendations class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for List all recommendations for a subscription.
     * @param options The options parameters.
     */
    list(options?: RecommendationsListOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Description for Get past recommendations for an app, optionally specified by the time range.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the hosting environment.
     * @param options The options parameters.
     */
    listHistoryForHostingEnvironment(resourceGroupName: string, hostingEnvironmentName: string, options?: RecommendationsListHistoryForHostingEnvironmentOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    private listHistoryForHostingEnvironmentPagingPage;
    private listHistoryForHostingEnvironmentPagingAll;
    /**
     * Description for Get all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the app.
     * @param options The options parameters.
     */
    listRecommendedRulesForHostingEnvironment(resourceGroupName: string, hostingEnvironmentName: string, options?: RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    private listRecommendedRulesForHostingEnvironmentPagingPage;
    private listRecommendedRulesForHostingEnvironmentPagingAll;
    /**
     * Description for Get past recommendations for an app, optionally specified by the time range.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    listHistoryForWebApp(resourceGroupName: string, siteName: string, options?: RecommendationsListHistoryForWebAppOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    private listHistoryForWebAppPagingPage;
    private listHistoryForWebAppPagingAll;
    /**
     * Description for Get all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    listRecommendedRulesForWebApp(resourceGroupName: string, siteName: string, options?: RecommendationsListRecommendedRulesForWebAppOptionalParams): PagedAsyncIterableIterator<Recommendation>;
    private listRecommendedRulesForWebAppPagingPage;
    private listRecommendedRulesForWebAppPagingAll;
    /**
     * Description for List all recommendations for a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Description for Reset all recommendation opt-out settings for a subscription.
     * @param options The options parameters.
     */
    resetAllFilters(options?: RecommendationsResetAllFiltersOptionalParams): Promise<void>;
    /**
     * Description for Disables the specified rule so it will not apply to a subscription in the future.
     * @param name Rule name
     * @param options The options parameters.
     */
    disableRecommendationForSubscription(name: string, options?: RecommendationsDisableRecommendationForSubscriptionOptionalParams): Promise<void>;
    /**
     * Description for Get past recommendations for an app, optionally specified by the time range.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the hosting environment.
     * @param options The options parameters.
     */
    private _listHistoryForHostingEnvironment;
    /**
     * Description for Get all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the app.
     * @param options The options parameters.
     */
    private _listRecommendedRulesForHostingEnvironment;
    /**
     * Description for Disable all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param environmentName Name of the app.
     * @param hostingEnvironmentName
     * @param options The options parameters.
     */
    disableAllForHostingEnvironment(resourceGroupName: string, environmentName: string, hostingEnvironmentName: string, options?: RecommendationsDisableAllForHostingEnvironmentOptionalParams): Promise<void>;
    /**
     * Description for Reset all recommendation opt-out settings for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param environmentName Name of the app.
     * @param hostingEnvironmentName
     * @param options The options parameters.
     */
    resetAllFiltersForHostingEnvironment(resourceGroupName: string, environmentName: string, hostingEnvironmentName: string, options?: RecommendationsResetAllFiltersForHostingEnvironmentOptionalParams): Promise<void>;
    /**
     * Description for Get a recommendation rule for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the hosting environment.
     * @param name Name of the recommendation.
     * @param options The options parameters.
     */
    getRuleDetailsByHostingEnvironment(resourceGroupName: string, hostingEnvironmentName: string, name: string, options?: RecommendationsGetRuleDetailsByHostingEnvironmentOptionalParams): Promise<RecommendationsGetRuleDetailsByHostingEnvironmentResponse>;
    /**
     * Description for Disables the specific rule for a web site permanently.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param environmentName Site name
     * @param name Rule name
     * @param hostingEnvironmentName
     * @param options The options parameters.
     */
    disableRecommendationForHostingEnvironment(resourceGroupName: string, environmentName: string, name: string, hostingEnvironmentName: string, options?: RecommendationsDisableRecommendationForHostingEnvironmentOptionalParams): Promise<void>;
    /**
     * Description for Get past recommendations for an app, optionally specified by the time range.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    private _listHistoryForWebApp;
    /**
     * Description for Get all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    private _listRecommendedRulesForWebApp;
    /**
     * Description for Disable all recommendations for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    disableAllForWebApp(resourceGroupName: string, siteName: string, options?: RecommendationsDisableAllForWebAppOptionalParams): Promise<void>;
    /**
     * Description for Reset all recommendation opt-out settings for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param options The options parameters.
     */
    resetAllFiltersForWebApp(resourceGroupName: string, siteName: string, options?: RecommendationsResetAllFiltersForWebAppOptionalParams): Promise<void>;
    /**
     * Description for Get a recommendation rule for an app.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param name Name of the recommendation.
     * @param options The options parameters.
     */
    getRuleDetailsByWebApp(resourceGroupName: string, siteName: string, name: string, options?: RecommendationsGetRuleDetailsByWebAppOptionalParams): Promise<RecommendationsGetRuleDetailsByWebAppResponse>;
    /**
     * Description for Disables the specific rule for a web site permanently.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site name
     * @param name Rule name
     * @param options The options parameters.
     */
    disableRecommendationForSite(resourceGroupName: string, siteName: string, name: string, options?: RecommendationsDisableRecommendationForSiteOptionalParams): Promise<void>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListHistoryForHostingEnvironmentNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the hosting environment.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListHistoryForHostingEnvironment method.
     * @param options The options parameters.
     */
    private _listHistoryForHostingEnvironmentNext;
    /**
     * ListRecommendedRulesForHostingEnvironmentNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param hostingEnvironmentName Name of the app.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListRecommendedRulesForHostingEnvironment method.
     * @param options The options parameters.
     */
    private _listRecommendedRulesForHostingEnvironmentNext;
    /**
     * ListHistoryForWebAppNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param nextLink The nextLink from the previous successful call to the ListHistoryForWebApp method.
     * @param options The options parameters.
     */
    private _listHistoryForWebAppNext;
    /**
     * ListRecommendedRulesForWebAppNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Name of the app.
     * @param nextLink The nextLink from the previous successful call to the ListRecommendedRulesForWebApp
     *                 method.
     * @param options The options parameters.
     */
    private _listRecommendedRulesForWebAppNext;
}
//# sourceMappingURL=recommendations.d.ts.map