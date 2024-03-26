import { RequestParameters } from "@azure-rest/core-client";
import { AssetUpdateData, DataConnectionData, DiscoGroupData, AssetChainRequest, ReportAssetSnapshotRequest, ReportAssetSummaryRequest, ReportAssetSnapshotExportRequest, SavedFilterData } from "./models.js";
export interface ListAssetResourceQueryParamProperties {
    /** Filter the result list using the given expression. */
    filter?: string;
    /** A list of expressions that specify the order of the returned resources. */
    orderby?: string;
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
    /** Specify this value instead of 'skip' to use cursor-based searching. Initial value is '*' and subsequent values are returned in the response. */
    mark?: string;
    /**
     * Specify the response type. The possible values are: ID, STANDARD, FULL, REDUCED
     *
     * Possible values: "id", "standard", "full", "reduced"
     */
    responseType?: string;
    responseIncludes?: string[];
    recentOnly?: boolean;
}
export interface ListAssetResourceQueryParam {
    queryParameters?: ListAssetResourceQueryParamProperties;
}
export type ListAssetResourceParameters = ListAssetResourceQueryParam & RequestParameters;
export interface UpdateAssetsBodyParam {
    body?: AssetUpdateData;
}
export interface UpdateAssetsQueryParamProperties {
    /** An expression on the resource type that selects the resources to be returned. */
    filter: string;
}
export interface UpdateAssetsQueryParam {
    queryParameters: UpdateAssetsQueryParamProperties;
}
export type UpdateAssetsParameters = UpdateAssetsQueryParam & UpdateAssetsBodyParam & RequestParameters;
export type GetAssetResourceParameters = RequestParameters;
export type DismissAssetChainParameters = RequestParameters;
export interface GetAssetsExportQueryParamProperties {
    /** Filter the result list using the given expression. */
    filter?: string;
    /** A list of expressions that specify the order of the returned resources. */
    orderby?: string;
    fileName?: string;
    columns?: string[];
}
export interface GetAssetsExportQueryParam {
    queryParameters?: GetAssetsExportQueryParamProperties;
}
export type GetAssetsExportParameters = GetAssetsExportQueryParam & RequestParameters;
export interface GetObservationsQueryParamProperties {
    /** Filter the result list using the given expression. */
    filter?: string;
    /** A list of expressions that specify the order of the returned resources. */
    orderby?: string;
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
}
export interface GetObservationsQueryParam {
    queryParameters?: GetObservationsQueryParamProperties;
}
export type GetObservationsParameters = GetObservationsQueryParam & RequestParameters;
export interface GetDeltaDetailsQueryParamProperties {
    /** Possible values: "added", "removed" */
    deltaDetailType?: string;
    daysPrior?: number;
    /** Possible values: "page", "resource", "mailServer", "nameServer", "host", "domain", "ipAddress", "ipBlock", "as", "contact", "sslCert" */
    kind?: string;
    /** expected format to be: yyyy-MM-dd */
    date?: string;
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
}
export interface GetDeltaDetailsQueryParam {
    queryParameters?: GetDeltaDetailsQueryParamProperties;
}
export type GetDeltaDetailsParameters = GetDeltaDetailsQueryParam & RequestParameters;
export interface GetDeltaSummaryQueryParamProperties {
    daysPrior?: number;
    /** expected format to be: yyyy-MM-dd */
    date?: string;
}
export interface GetDeltaSummaryQueryParam {
    queryParameters?: GetDeltaSummaryQueryParamProperties;
}
export type GetDeltaSummaryParameters = GetDeltaSummaryQueryParam & RequestParameters;
export interface ListDataConnectionQueryParamProperties {
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
}
export interface ListDataConnectionQueryParam {
    queryParameters?: ListDataConnectionQueryParamProperties;
}
export type ListDataConnectionParameters = ListDataConnectionQueryParam & RequestParameters;
export interface ValidateDataConnectionBodyParam {
    body?: DataConnectionData;
}
export type ValidateDataConnectionParameters = ValidateDataConnectionBodyParam & RequestParameters;
export type GetDataConnectionParameters = RequestParameters;
export interface CreateOrReplaceDataConnectionBodyParam {
    body?: DataConnectionData;
}
export type CreateOrReplaceDataConnectionParameters = CreateOrReplaceDataConnectionBodyParam & RequestParameters;
export type DeleteDataConnectionParameters = RequestParameters;
export interface ListDiscoGroupQueryParamProperties {
    /** Filter the result list using the given expression. */
    filter?: string;
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
}
export interface ListDiscoGroupQueryParam {
    queryParameters?: ListDiscoGroupQueryParamProperties;
}
export type ListDiscoGroupParameters = ListDiscoGroupQueryParam & RequestParameters;
export interface ValidateDiscoGroupBodyParam {
    body?: DiscoGroupData;
}
export type ValidateDiscoGroupParameters = ValidateDiscoGroupBodyParam & RequestParameters;
export type GetDiscoGroupParameters = RequestParameters;
export interface CreateOrReplaceDiscoGroupBodyParam {
    body?: DiscoGroupData;
}
export type CreateOrReplaceDiscoGroupParameters = CreateOrReplaceDiscoGroupBodyParam & RequestParameters;
export type RunDiscoGroupParameters = RequestParameters;
export interface ListRunsQueryParamProperties {
    /** Filter the result list using the given expression. */
    filter?: string;
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
}
export interface ListRunsQueryParam {
    queryParameters?: ListRunsQueryParamProperties;
}
export type ListRunsParameters = ListRunsQueryParam & RequestParameters;
export interface GetAssetChainSummaryBodyParam {
    body?: AssetChainRequest;
}
export type GetAssetChainSummaryParameters = GetAssetChainSummaryBodyParam & RequestParameters;
export interface DismissSeedChainBodyParam {
    body?: AssetChainRequest;
}
export type DismissSeedChainParameters = DismissSeedChainBodyParam & RequestParameters;
export interface ListDiscoTemplateQueryParamProperties {
    /** Filter the result list using the given expression. */
    filter?: string;
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
}
export interface ListDiscoTemplateQueryParam {
    queryParameters?: ListDiscoTemplateQueryParamProperties;
}
export type ListDiscoTemplateParameters = ListDiscoTemplateQueryParam & RequestParameters;
export type GetDiscoTemplateParameters = RequestParameters;
export type GetBillableParameters = RequestParameters;
export interface GetSnapshotBodyParam {
    body?: ReportAssetSnapshotRequest;
}
export type GetSnapshotParameters = GetSnapshotBodyParam & RequestParameters;
export interface GetSummaryBodyParam {
    body?: ReportAssetSummaryRequest;
}
export type GetSummaryParameters = GetSummaryBodyParam & RequestParameters;
export interface GetSnapshotExportBodyParam {
    body?: ReportAssetSnapshotExportRequest;
}
export type GetSnapshotExportParameters = GetSnapshotExportBodyParam & RequestParameters;
export interface ListSavedFilterQueryParamProperties {
    /** Filter the result list using the given expression. */
    filter?: string;
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
}
export interface ListSavedFilterQueryParam {
    queryParameters?: ListSavedFilterQueryParamProperties;
}
export type ListSavedFilterParameters = ListSavedFilterQueryParam & RequestParameters;
export type GetSavedFilterParameters = RequestParameters;
export interface CreateOrReplaceSavedFilterBodyParam {
    body?: SavedFilterData;
}
export type CreateOrReplaceSavedFilterParameters = CreateOrReplaceSavedFilterBodyParam & RequestParameters;
export type DeleteSavedFilterParameters = RequestParameters;
export interface ListTaskQueryParamProperties {
    /** Filter the result list using the given expression. */
    filter?: string;
    /** A list of expressions that specify the order of the returned resources. */
    orderby?: string;
    /** The number of result items to skip. */
    skip?: number;
    /** The maximum number of result items per page. */
    maxpagesize?: number;
}
export interface ListTaskQueryParam {
    queryParameters?: ListTaskQueryParamProperties;
}
export type ListTaskParameters = ListTaskQueryParam & RequestParameters;
export type GetTaskParameters = RequestParameters;
export type CancelTaskParameters = RequestParameters;
export type RunTaskParameters = RequestParameters;
export type DownloadTaskParameters = RequestParameters;
export type GetCisaCvesParameters = RequestParameters;
export type GetCisaCveParameters = RequestParameters;
//# sourceMappingURL=parameters.d.ts.map