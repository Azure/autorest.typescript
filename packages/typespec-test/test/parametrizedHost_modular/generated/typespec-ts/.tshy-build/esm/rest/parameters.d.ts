import { RequestParameters } from "@azure-rest/core-client";
export interface ListCollectionsQueryParamProperties {
    /** The API version to use for this operation. */
    "api-version": string;
}
export interface ListCollectionsQueryParam {
    queryParameters: ListCollectionsQueryParamProperties;
}
export type ListCollectionsParameters = ListCollectionsQueryParam & RequestParameters;
//# sourceMappingURL=parameters.d.ts.map