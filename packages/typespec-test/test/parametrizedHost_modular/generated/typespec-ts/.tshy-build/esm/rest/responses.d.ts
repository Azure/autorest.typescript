import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { CollectionOutput } from "./outputModels.js";
/** The request has succeeded. */
export interface ListCollections200Response extends HttpResponse {
    status: "200";
    body: Array<CollectionOutput>;
}
export interface ListCollectionsDefaultHeaders {
    /** String error code indicating what went wrong. */
    "x-ms-error-code"?: string;
}
export interface ListCollectionsDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ListCollectionsDefaultHeaders;
}
//# sourceMappingURL=responses.d.ts.map