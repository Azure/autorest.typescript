import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { TokenCredential } from '@azure/core-auth';

export declare interface ApplicationData {
    /** Application product details. */
    applicationProductDetails?: Array<ApplicationProductDetail>;
    /** Schema for storing measurement reading and unit. */
    avgMaterial?: Measure;
    /** Schema for storing measurement reading and unit. */
    totalMaterial?: Measure;
    /** Schema for storing measurement reading and unit. */
    area?: Measure;
    /** Source of the operation data. */
    source?: string;
    /**
     * Modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ.
     * Note: this will be specified by the source provider itself.
     */
    operationModifiedDateTime?: Date;
    /** Start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    operationStartDateTime?: Date;
    /** End date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    operationEndDateTime?: Date;
    /** Link for attachments. */
    attachmentsLink?: string;
    /** Optional boundary ID of the field for which operation was applied. */
    associatedBoundaryId?: string;
    /** Optional boundary ID of the actual area for which operation was applied inside the specified field. */
    operationBoundaryId?: string;
    /** Farmer ID which belongs to the operation data. */
    farmerId?: string;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

/** Creates or updates an application data resource under a particular farmer. */
export declare interface ApplicationDataCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: ApplicationData;
}

/** Creates or updates an application data resource under a particular farmer. */
export declare interface ApplicationDataCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: ApplicationData;
}

export declare interface ApplicationDataCreateOrUpdateBodyParam {
    /** Application data resource payload to create or update. */
    body?: ApplicationData;
}

/** Creates or updates an application data resource under a particular farmer. */
export declare interface ApplicationDataCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ApplicationDataCreateOrUpdateParameters = ApplicationDataCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified application data resource under a particular farmer. */
export declare interface ApplicationDataDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified application data resource under a particular farmer. */
export declare interface ApplicationDataDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ApplicationDataDeleteParameters = RequestParameters;

export declare interface ApplicationDataGet {
    /** Get a specified application data resource under a particular farmer. */
    get(options?: ApplicationDataGetParameters): Promise<ApplicationDataGet200Response | ApplicationDataGetdefaultResponse>;
    /** Creates or updates an application data resource under a particular farmer. */
    patch(options?: ApplicationDataCreateOrUpdateParameters): Promise<ApplicationDataCreateOrUpdate200Response | ApplicationDataCreateOrUpdate201Response | ApplicationDataCreateOrUpdatedefaultResponse>;
    /** Deletes a specified application data resource under a particular farmer. */
    delete(options?: ApplicationDataDeleteParameters): Promise<ApplicationDataDelete204Response | ApplicationDataDeletedefaultResponse>;
}

/** Get a specified application data resource under a particular farmer. */
export declare interface ApplicationDataGet200Response extends HttpResponse {
    status: "200";
    body: ApplicationData;
}

/** Get a specified application data resource under a particular farmer. */
export declare interface ApplicationDataGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ApplicationDataGetParameters = RequestParameters;

export declare interface ApplicationDataList {
    /** Returns a paginated list of application data resources across all farmers. */
    get(options?: ApplicationDataListParameters): Promise<ApplicationDataList200Response | ApplicationDataListdefaultResponse>;
}

/** Returns a paginated list of application data resources across all farmers. */
export declare interface ApplicationDataList200Response extends HttpResponse {
    status: "200";
    body: ApplicationDataListResponse;
}

export declare interface ApplicationDataListByFarmerId {
    /** Returns a paginated list of application data resources under a particular farm. */
    get(options?: ApplicationDataListByFarmerIdParameters): Promise<ApplicationDataListByFarmerId200Response | ApplicationDataListByFarmerIddefaultResponse>;
}

/** Returns a paginated list of application data resources under a particular farm. */
export declare interface ApplicationDataListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: ApplicationDataListResponse;
}

/** Returns a paginated list of application data resources under a particular farm. */
export declare interface ApplicationDataListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ApplicationDataListByFarmerIdParameters = ApplicationDataListByFarmerIdQueryParam & RequestParameters;

export declare interface ApplicationDataListByFarmerIdQueryParam {
    queryParameters?: ApplicationDataListByFarmerIdQueryParamProperties;
}

export declare interface ApplicationDataListByFarmerIdQueryParamProperties {
    /** Minimum average amount of material applied during the application (inclusive). */
    minAvgMaterial?: number;
    /** Maximum average amount of material applied during the application (inclusive). */
    maxAvgMaterial?: number;
    /** Minimum total amount of material applied during the application (inclusive). */
    minTotalMaterial?: number;
    /** Maximum total amount of material applied during the application (inclusive). */
    maxTotalMaterial?: number;
    /** Sources of the operation data. */
    sources?: Array<string>;
    /** Boundary IDs associated with operation data. */
    associatedBoundaryIds?: Array<string>;
    /** Operation boundary IDs associated with operation data. */
    operationBoundaryIds?: Array<string>;
    /** Minimum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationStartDateTime?: Date;
    /** Maximum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationStartDateTime?: Date;
    /** Minimum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationEndDateTime?: Date;
    /** Maximum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationEndDateTime?: Date;
    /** Minimum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationModifiedDateTime?: Date;
    /** Maximum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationModifiedDateTime?: Date;
    /** Minimum area for which operation was applied (inclusive). */
    minArea?: number;
    /** Maximum area for which operation was applied (inclusive). */
    maxArea?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of application data resources across all farmers. */
export declare interface ApplicationDataListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ApplicationDataListParameters = ApplicationDataListQueryParam & RequestParameters;

export declare interface ApplicationDataListQueryParam {
    queryParameters?: ApplicationDataListQueryParamProperties;
}

export declare interface ApplicationDataListQueryParamProperties {
    /** Minimum average amount of material applied during the application (inclusive). */
    minAvgMaterial?: number;
    /** Maximum average amount of material applied during the application (inclusive). */
    maxAvgMaterial?: number;
    /** Minimum total amount of material applied during the application (inclusive). */
    minTotalMaterial?: number;
    /** Maximum total amount of material applied during the application (inclusive). */
    maxTotalMaterial?: number;
    /** Sources of the operation data. */
    sources?: Array<string>;
    /** Boundary IDs associated with operation data. */
    associatedBoundaryIds?: Array<string>;
    /** Operation boundary IDs associated with operation data. */
    operationBoundaryIds?: Array<string>;
    /** Minimum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationStartDateTime?: Date;
    /** Maximum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationStartDateTime?: Date;
    /** Minimum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationEndDateTime?: Date;
    /** Maximum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationEndDateTime?: Date;
    /** Minimum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationModifiedDateTime?: Date;
    /** Maximum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationModifiedDateTime?: Date;
    /** Minimum area for which operation was applied (inclusive). */
    minArea?: number;
    /** Maximum area for which operation was applied (inclusive). */
    maxArea?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface ApplicationDataListResponse {
    /** List of requested objects. */
    value?: Array<ApplicationData>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

export declare interface ApplicationProductDetail {
    /** Name of the product applied. */
    productName?: string;
    /** A flag indicating whether product is a carrier for a tank mix. */
    isCarrier?: boolean;
    /** Schema for storing measurement reading and unit. */
    avgMaterial?: Measure;
    /** Schema for storing measurement reading and unit. */
    totalMaterial?: Measure;
}

export declare interface Attachment {
    /** Farmer id for this attachment. */
    farmerId?: string;
    /** Associated Resource id for this attachment. */
    resourceId?: string;
    /**
     * Associated Resource type for this attachment
     * i.e. Farmer, Farm, Field, SeasonalField, Boundary, FarmOperationApplicationData, HarvestData, TillageData, PlantingData.
     */
    resourceType?: string;
    /** Original File Name for this attachment. */
    originalFileName?: string;
    /** Unique id. */
    id?: string;
    /** Status of the resource. */
    status?: string;
    /** Date when resource was created. */
    createdDateTime?: Date;
    /** Date when resource was last modified. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of resource. */
    description?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
}

export declare interface AttachmentListResponse {
    /** List of requested objects. */
    value?: Array<Attachment>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Creates or updates an attachment resource under a particular farmer. */
export declare interface AttachmentsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: Attachment;
}

/** Creates or updates an attachment resource under a particular farmer. */
export declare interface AttachmentsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: Attachment;
}

export declare interface AttachmentsCreateOrUpdateBodyParam {
    /**
     * File to be uploaded.
     *
     * Value may contain any sequence of octets
     */
    body?: string;
}

/** Creates or updates an attachment resource under a particular farmer. */
export declare interface AttachmentsCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type AttachmentsCreateOrUpdateParameters = AttachmentsCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified attachment resource under a particular farmer. */
export declare interface AttachmentsDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified attachment resource under a particular farmer. */
export declare interface AttachmentsDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type AttachmentsDeleteParameters = RequestParameters;

export declare interface AttachmentsDownload {
    /** Downloads and returns attachment as response for the given input filePath. */
    get(options?: AttachmentsDownloadParameters): Promise<AttachmentsDownload200Response | AttachmentsDownloaddefaultResponse>;
}

/** Downloads and returns attachment as response for the given input filePath. */
export declare interface AttachmentsDownload200Response extends HttpResponse {
    status: "200";
    body: Record<string, unknown>;
}

/** Downloads and returns attachment as response for the given input filePath. */
export declare interface AttachmentsDownloaddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type AttachmentsDownloadParameters = RequestParameters;

export declare interface AttachmentsGet {
    /** Gets a specified attachment resource under a particular farmer. */
    get(options?: AttachmentsGetParameters): Promise<AttachmentsGet200Response | AttachmentsGetdefaultResponse>;
    /** Creates or updates an attachment resource under a particular farmer. */
    patch(options?: AttachmentsCreateOrUpdateParameters): Promise<AttachmentsCreateOrUpdate200Response | AttachmentsCreateOrUpdate201Response | AttachmentsCreateOrUpdatedefaultResponse>;
    /** Deletes a specified attachment resource under a particular farmer. */
    delete(options?: AttachmentsDeleteParameters): Promise<AttachmentsDelete204Response | AttachmentsDeletedefaultResponse>;
}

/** Gets a specified attachment resource under a particular farmer. */
export declare interface AttachmentsGet200Response extends HttpResponse {
    status: "200";
    body: Attachment;
}

/** Gets a specified attachment resource under a particular farmer. */
export declare interface AttachmentsGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type AttachmentsGetParameters = RequestParameters;

export declare interface AttachmentsListByFarmerId {
    /** Returns a paginated list of attachment resources under a particular farmer. */
    get(options?: AttachmentsListByFarmerIdParameters): Promise<AttachmentsListByFarmerId200Response | AttachmentsListByFarmerIddefaultResponse>;
}

/** Returns a paginated list of attachment resources under a particular farmer. */
export declare interface AttachmentsListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: AttachmentListResponse;
}

/** Returns a paginated list of attachment resources under a particular farmer. */
export declare interface AttachmentsListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type AttachmentsListByFarmerIdParameters = AttachmentsListByFarmerIdQueryParam & RequestParameters;

export declare interface AttachmentsListByFarmerIdQueryParam {
    queryParameters?: AttachmentsListByFarmerIdQueryParamProperties;
}

export declare interface AttachmentsListByFarmerIdQueryParamProperties {
    /** Resource Ids of the resource. */
    resourceIds?: Array<string>;
    /** Resource Types of the resource. */
    resourceTypes?: Array<string>;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

declare function AzureAgriFoodPlatformDataPlaneService(Endpoint: string, credentials: TokenCredential, options?: ClientOptions): AzureAgriFoodPlatformDataPlaneServiceRestClient;
export default AzureAgriFoodPlatformDataPlaneService;

export declare type AzureAgriFoodPlatformDataPlaneServiceRestClient = Client & {
    path: Routes;
};

/** Create a cascade delete job for specified boundary. */
export declare interface BoundariesCreateCascadeDeleteJob202Response extends HttpResponse {
    status: "202";
    body: CascadeDeleteJob;
}

/** Create a cascade delete job for specified boundary. */
export declare interface BoundariesCreateCascadeDeleteJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesCreateCascadeDeleteJobParameters = BoundariesCreateCascadeDeleteJobQueryParam & RequestParameters;

export declare interface BoundariesCreateCascadeDeleteJobQueryParam {
    queryParameters: BoundariesCreateCascadeDeleteJobQueryParamProperties;
}

export declare interface BoundariesCreateCascadeDeleteJobQueryParamProperties {
    /** ID of the associated farmer. */
    farmerId: string;
    /** ID of the boundary to be deleted. */
    boundaryId: string;
}

/** Creates or updates a boundary resource. */
export declare interface BoundariesCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: Boundary;
}

/** Creates or updates a boundary resource. */
export declare interface BoundariesCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: Boundary;
}

export declare interface BoundariesCreateOrUpdateBodyParam {
    /** Boundary resource payload to create or update. */
    body?: Boundary;
}

/** Creates or updates a boundary resource. */
export declare interface BoundariesCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesCreateOrUpdateParameters = BoundariesCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified boundary resource under a particular farmer. */
export declare interface BoundariesDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified boundary resource under a particular farmer. */
export declare interface BoundariesDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesDeleteParameters = RequestParameters;

export declare interface BoundariesGet {
    /** Gets a specified boundary resource under a particular farmer. */
    get(options?: BoundariesGetParameters): Promise<BoundariesGet200Response | BoundariesGetdefaultResponse>;
    /** Creates or updates a boundary resource. */
    patch(options?: BoundariesCreateOrUpdateParameters): Promise<BoundariesCreateOrUpdate200Response | BoundariesCreateOrUpdate201Response | BoundariesCreateOrUpdatedefaultResponse>;
    /** Deletes a specified boundary resource under a particular farmer. */
    delete(options?: BoundariesDeleteParameters): Promise<BoundariesDelete204Response | BoundariesDeletedefaultResponse>;
}

/** Gets a specified boundary resource under a particular farmer. */
export declare interface BoundariesGet200Response extends HttpResponse {
    status: "200";
    body: Boundary;
}

export declare interface BoundariesGetCascadeDeleteJobDetails {
    /** Get cascade delete job for specified boundary. */
    get(options?: BoundariesGetCascadeDeleteJobDetailsParameters): Promise<BoundariesGetCascadeDeleteJobDetails200Response | BoundariesGetCascadeDeleteJobDetailsdefaultResponse>;
    /** Create a cascade delete job for specified boundary. */
    put(options: BoundariesCreateCascadeDeleteJobParameters): Promise<BoundariesCreateCascadeDeleteJob202Response | BoundariesCreateCascadeDeleteJobdefaultResponse>;
}

/** Get cascade delete job for specified boundary. */
export declare interface BoundariesGetCascadeDeleteJobDetails200Response extends HttpResponse {
    status: "200";
    body: CascadeDeleteJob;
}

/** Get cascade delete job for specified boundary. */
export declare interface BoundariesGetCascadeDeleteJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesGetCascadeDeleteJobDetailsParameters = RequestParameters;

/** Gets a specified boundary resource under a particular farmer. */
export declare interface BoundariesGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare interface BoundariesGetOverlap {
    /** Returns overlapping acreage between two boundary Ids. */
    get(options: BoundariesGetOverlapParameters): Promise<BoundariesGetOverlap200Response | BoundariesGetOverlapdefaultResponse>;
}

/** Returns overlapping acreage between two boundary Ids. */
export declare interface BoundariesGetOverlap200Response extends HttpResponse {
    status: "200";
    body: BoundaryOverlapResponse;
}

/** Returns overlapping acreage between two boundary Ids. */
export declare interface BoundariesGetOverlapdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesGetOverlapParameters = BoundariesGetOverlapQueryParam & RequestParameters;

export declare interface BoundariesGetOverlapQueryParam {
    queryParameters: BoundariesGetOverlapQueryParamProperties;
}

export declare interface BoundariesGetOverlapQueryParamProperties {
    /** FarmerId of the other field. */
    otherFarmerId: string;
    /** ID of the other boundary. */
    otherBoundaryId: string;
}

export declare type BoundariesGetParameters = RequestParameters;

export declare interface BoundariesList {
    /** Returns a paginated list of boundary resources across all farmers. */
    get(options?: BoundariesListParameters): Promise<BoundariesList200Response | BoundariesListdefaultResponse>;
    /** Search for boundaries across all farmers by fields and intersecting geometry. */
    post(options?: BoundariesSearchParameters): Promise<BoundariesSearch200Response | BoundariesSearchdefaultResponse>;
}

/** Returns a paginated list of boundary resources across all farmers. */
export declare interface BoundariesList200Response extends HttpResponse {
    status: "200";
    body: BoundaryListResponse;
}

export declare interface BoundariesListByFarmerId {
    /** Returns a paginated list of boundary resources under a particular farmer. */
    get(options?: BoundariesListByFarmerIdParameters): Promise<BoundariesListByFarmerId200Response | BoundariesListByFarmerIddefaultResponse>;
    /** Search for boundaries by fields and intersecting geometry. */
    post(options?: BoundariesSearchByFarmerIdParameters): Promise<BoundariesSearchByFarmerId200Response | BoundariesSearchByFarmerIddefaultResponse>;
}

/** Returns a paginated list of boundary resources under a particular farmer. */
export declare interface BoundariesListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: BoundaryListResponse;
}

/** Returns a paginated list of boundary resources under a particular farmer. */
export declare interface BoundariesListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesListByFarmerIdParameters = BoundariesListByFarmerIdQueryParam & RequestParameters;

export declare interface BoundariesListByFarmerIdQueryParam {
    queryParameters?: BoundariesListByFarmerIdQueryParamProperties;
}

export declare interface BoundariesListByFarmerIdQueryParamProperties {
    /** Is the boundary primary. */
    isPrimary?: boolean;
    /** Type of the parent it belongs to. */
    parentType?: string;
    /** Parent Ids of the resource. */
    parentIds?: Array<string>;
    /** Minimum acreage of the boundary (inclusive). */
    minAcreage?: number;
    /** Maximum acreage of the boundary (inclusive). */
    maxAcreage?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of boundary resources across all farmers. */
export declare interface BoundariesListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesListParameters = BoundariesListQueryParam & RequestParameters;

export declare interface BoundariesListQueryParam {
    queryParameters?: BoundariesListQueryParamProperties;
}

export declare interface BoundariesListQueryParamProperties {
    /** Is the boundary primary. */
    isPrimary?: boolean;
    /** Type of the parent it belongs to. */
    parentType?: string;
    /** Parent Ids of the resource. */
    parentIds?: Array<string>;
    /** Minimum acreage of the boundary (inclusive). */
    minAcreage?: number;
    /** Maximum acreage of the boundary (inclusive). */
    maxAcreage?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Search for boundaries across all farmers by fields and intersecting geometry. */
export declare interface BoundariesSearch200Response extends HttpResponse {
    status: "200";
    body: BoundaryListResponse;
}

export declare interface BoundariesSearchBodyParam {
    /** Query filters. */
    body?: SearchBoundaryQuery;
}

/** Search for boundaries by fields and intersecting geometry. */
export declare interface BoundariesSearchByFarmerId200Response extends HttpResponse {
    status: "200";
    body: BoundaryListResponse;
}

export declare interface BoundariesSearchByFarmerIdBodyParam {
    /** Query filters. */
    body?: SearchBoundaryQuery;
}

/** Search for boundaries by fields and intersecting geometry. */
export declare interface BoundariesSearchByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesSearchByFarmerIdParameters = BoundariesSearchByFarmerIdBodyParam & RequestParameters;

/** Search for boundaries across all farmers by fields and intersecting geometry. */
export declare interface BoundariesSearchdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type BoundariesSearchParameters = BoundariesSearchBodyParam & RequestParameters;

export declare interface Boundary {
    /** Farmer ID. */
    farmerId?: string;
    /** ID of the parent(field or seasonalField) it belongs to. */
    parentId?: string;
    /** GeoJSON abstract class. */
    geometry?: GeoJsonObject;
    /** Is the boundary primary. */
    isPrimary?: boolean;
    /** Boundary area in acres. */
    acreage?: number;
    /** Type of the parent it belongs to. */
    parentType?: string;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface BoundaryListResponse {
    /** List of requested objects. */
    value?: Array<Boundary>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

export declare interface BoundaryOverlapResponse {
    /** Acreage of Main boundary. */
    boundaryAcreage?: number;
    /** Acreage of other boundary. */
    otherBoundaryAcreage?: number;
    /** Acreage of intersecting boundary. */
    intersectingAcreage?: number;
}

export declare interface CascadeDeleteJob {
    /** Farmer ID. */
    farmerId: string;
    /** The id of the resource. */
    resourceId: string;
    /** The type of the resource. */
    resourceType: string;
    /** Unique job id. */
    id?: string;
    /**
     * Status of the job.
     * Possible values: 'Waiting', 'Running', 'Succeeded', 'Failed', 'Cancelled'.
     */
    status?: string;
    /** Duration of the job in seconds. */
    durationInSeconds?: number;
    /** Status message to capture more details of the job. */
    message?: string;
    /** Job created at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Job was last acted upon at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    lastActionDateTime?: Date;
    /** Job start time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startTime?: Date;
    /** Job end time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface Crop {
    /** Crop phenotype. */
    phenotype?: string;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface CropListResponse {
    /** List of requested objects. */
    value?: Array<Crop>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Creates or updates a crop resource. */
export declare interface CropsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: Crop;
}

/** Creates or updates a crop resource. */
export declare interface CropsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: Crop;
}

export declare interface CropsCreateOrUpdateBodyParam {
    /** Crop resource payload to create or update. */
    body?: Crop;
}

/** Creates or updates a crop resource. */
export declare interface CropsCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropsCreateOrUpdateParameters = CropsCreateOrUpdateBodyParam & RequestParameters;

/** Deletes Crop for given crop id. */
export declare interface CropsDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes Crop for given crop id. */
export declare interface CropsDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropsDeleteParameters = RequestParameters;

export declare interface CropsGet {
    /** Gets a specified crop resource. */
    get(options?: CropsGetParameters): Promise<CropsGet200Response | CropsGetdefaultResponse>;
    /** Creates or updates a crop resource. */
    patch(options?: CropsCreateOrUpdateParameters): Promise<CropsCreateOrUpdate200Response | CropsCreateOrUpdate201Response | CropsCreateOrUpdatedefaultResponse>;
    /** Deletes Crop for given crop id. */
    delete(options?: CropsDeleteParameters): Promise<CropsDelete204Response | CropsDeletedefaultResponse>;
}

/** Gets a specified crop resource. */
export declare interface CropsGet200Response extends HttpResponse {
    status: "200";
    body: Crop;
}

/** Gets a specified crop resource. */
export declare interface CropsGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropsGetParameters = RequestParameters;

export declare interface CropsList {
    /** Returns a paginated list of crop resources. */
    get(options?: CropsListParameters): Promise<CropsList200Response | CropsListdefaultResponse>;
}

/** Returns a paginated list of crop resources. */
export declare interface CropsList200Response extends HttpResponse {
    status: "200";
    body: CropListResponse;
}

/** Returns a paginated list of crop resources. */
export declare interface CropsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropsListParameters = CropsListQueryParam & RequestParameters;

export declare interface CropsListQueryParam {
    queryParameters?: CropsListQueryParamProperties;
}

export declare interface CropsListQueryParamProperties {
    /** Crop phenotypes of the resource. */
    phenotypes?: Array<string>;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Creates or updates a crop variety resource. */
export declare interface CropVarietiesCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: CropVariety;
}

/** Creates or updates a crop variety resource. */
export declare interface CropVarietiesCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: CropVariety;
}

export declare interface CropVarietiesCreateOrUpdateBodyParam {
    /** Crop variety resource payload to create or update. */
    body?: CropVariety;
}

/** Creates or updates a crop variety resource. */
export declare interface CropVarietiesCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropVarietiesCreateOrUpdateParameters = CropVarietiesCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified crop variety resource under a particular crop. */
export declare interface CropVarietiesDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified crop variety resource under a particular crop. */
export declare interface CropVarietiesDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropVarietiesDeleteParameters = RequestParameters;

export declare interface CropVarietiesGet {
    /** Gets a specified crop variety resource under a particular crop. */
    get(options?: CropVarietiesGetParameters): Promise<CropVarietiesGet200Response | CropVarietiesGetdefaultResponse>;
    /** Creates or updates a crop variety resource. */
    patch(options?: CropVarietiesCreateOrUpdateParameters): Promise<CropVarietiesCreateOrUpdate200Response | CropVarietiesCreateOrUpdate201Response | CropVarietiesCreateOrUpdatedefaultResponse>;
    /** Deletes a specified crop variety resource under a particular crop. */
    delete(options?: CropVarietiesDeleteParameters): Promise<CropVarietiesDelete204Response | CropVarietiesDeletedefaultResponse>;
}

/** Gets a specified crop variety resource under a particular crop. */
export declare interface CropVarietiesGet200Response extends HttpResponse {
    status: "200";
    body: CropVariety;
}

/** Gets a specified crop variety resource under a particular crop. */
export declare interface CropVarietiesGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropVarietiesGetParameters = RequestParameters;

export declare interface CropVarietiesList {
    /** Returns a paginated list of crop variety resources across all crops. */
    get(options?: CropVarietiesListParameters): Promise<CropVarietiesList200Response | CropVarietiesListdefaultResponse>;
}

/** Returns a paginated list of crop variety resources across all crops. */
export declare interface CropVarietiesList200Response extends HttpResponse {
    status: "200";
    body: CropVarietyListResponse;
}

export declare interface CropVarietiesListByCropId {
    /** Returns a paginated list of crop variety resources under a particular crop. */
    get(options?: CropVarietiesListByCropIdParameters): Promise<CropVarietiesListByCropId200Response | CropVarietiesListByCropIddefaultResponse>;
}

/** Returns a paginated list of crop variety resources under a particular crop. */
export declare interface CropVarietiesListByCropId200Response extends HttpResponse {
    status: "200";
    body: CropVarietyListResponse;
}

/** Returns a paginated list of crop variety resources under a particular crop. */
export declare interface CropVarietiesListByCropIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropVarietiesListByCropIdParameters = CropVarietiesListByCropIdQueryParam & RequestParameters;

export declare interface CropVarietiesListByCropIdQueryParam {
    queryParameters?: CropVarietiesListByCropIdQueryParamProperties;
}

export declare interface CropVarietiesListByCropIdQueryParamProperties {
    /** CropIds of the resource. */
    cropIds?: Array<string>;
    /** Brands of the resource. */
    brands?: Array<string>;
    /** Products of the resource. */
    products?: Array<string>;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of crop variety resources across all crops. */
export declare interface CropVarietiesListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type CropVarietiesListParameters = CropVarietiesListQueryParam & RequestParameters;

export declare interface CropVarietiesListQueryParam {
    queryParameters?: CropVarietiesListQueryParamProperties;
}

export declare interface CropVarietiesListQueryParamProperties {
    /** CropIds of the resource. */
    cropIds?: Array<string>;
    /** Brands of the resource. */
    brands?: Array<string>;
    /** Products of the resource. */
    products?: Array<string>;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface CropVariety {
    /** ID of the crop it belongs to. */
    cropId?: string;
    /** CropVariety Brand. */
    brand?: string;
    /** CropVariety product. */
    product?: string;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface CropVarietyListResponse {
    /** List of requested objects. */
    value?: Array<CropVariety>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

export declare interface ErrorModel {
    /** Server-defined set of error codes. */
    code?: string;
    /** Human-readable representation of the error. */
    message?: string;
    /** Target of the error. */
    target?: string;
    /** Array of details about specific errors that led to this reported error. */
    details?: Array<ErrorModel>;
    /**
     * Inner error containing list of errors.
     * <see href="https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#innererror--object">InnerError reference document</see>.
     */
    innererror?: InnerError;
}

export declare interface ErrorResponse {
    /** An error from the Azure AgPlatform service. */
    error?: ErrorModel;
    /** Unique trace ID. */
    traceId?: string;
}

export declare interface Farm {
    /** Farmer ID. */
    farmerId?: string;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface Farmer {
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface FarmerListResponse {
    /** List of requested objects. */
    value?: Array<Farmer>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Create a cascade delete job for specified farmer. */
export declare interface FarmersCreateCascadeDeleteJob202Response extends HttpResponse {
    status: "202";
    body: CascadeDeleteJob;
}

/** Create a cascade delete job for specified farmer. */
export declare interface FarmersCreateCascadeDeleteJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmersCreateCascadeDeleteJobParameters = FarmersCreateCascadeDeleteJobQueryParam & RequestParameters;

export declare interface FarmersCreateCascadeDeleteJobQueryParam {
    queryParameters: FarmersCreateCascadeDeleteJobQueryParamProperties;
}

export declare interface FarmersCreateCascadeDeleteJobQueryParamProperties {
    /** ID of the farmer to be deleted. */
    farmerId: string;
}

/** Creates or updates a farmer resource. */
export declare interface FarmersCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: Farmer;
}

/** Creates or updates a farmer resource. */
export declare interface FarmersCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: Farmer;
}

export declare interface FarmersCreateOrUpdateBodyParam {
    /** Farmer resource payload to create or update. */
    body?: Farmer;
}

/** Creates or updates a farmer resource. */
export declare interface FarmersCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmersCreateOrUpdateParameters = FarmersCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified farmer resource. */
export declare interface FarmersDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified farmer resource. */
export declare interface FarmersDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmersDeleteParameters = RequestParameters;

export declare interface FarmersGet {
    /** Gets a specified farmer resource. */
    get(options?: FarmersGetParameters): Promise<FarmersGet200Response | FarmersGetdefaultResponse>;
    /** Creates or updates a farmer resource. */
    patch(options?: FarmersCreateOrUpdateParameters): Promise<FarmersCreateOrUpdate200Response | FarmersCreateOrUpdate201Response | FarmersCreateOrUpdatedefaultResponse>;
    /** Deletes a specified farmer resource. */
    delete(options?: FarmersDeleteParameters): Promise<FarmersDelete204Response | FarmersDeletedefaultResponse>;
}

/** Gets a specified farmer resource. */
export declare interface FarmersGet200Response extends HttpResponse {
    status: "200";
    body: Farmer;
}

export declare interface FarmersGetCascadeDeleteJobDetails {
    /** Get a cascade delete job for specified farmer. */
    get(options?: FarmersGetCascadeDeleteJobDetailsParameters): Promise<FarmersGetCascadeDeleteJobDetails200Response | FarmersGetCascadeDeleteJobDetailsdefaultResponse>;
    /** Create a cascade delete job for specified farmer. */
    put(options: FarmersCreateCascadeDeleteJobParameters): Promise<FarmersCreateCascadeDeleteJob202Response | FarmersCreateCascadeDeleteJobdefaultResponse>;
}

/** Get a cascade delete job for specified farmer. */
export declare interface FarmersGetCascadeDeleteJobDetails200Response extends HttpResponse {
    status: "200";
    body: CascadeDeleteJob;
}

/** Get a cascade delete job for specified farmer. */
export declare interface FarmersGetCascadeDeleteJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmersGetCascadeDeleteJobDetailsParameters = RequestParameters;

/** Gets a specified farmer resource. */
export declare interface FarmersGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmersGetParameters = RequestParameters;

export declare interface FarmersList {
    /** Returns a paginated list of farmer resources. */
    get(options?: FarmersListParameters): Promise<FarmersList200Response | FarmersListdefaultResponse>;
}

/** Returns a paginated list of farmer resources. */
export declare interface FarmersList200Response extends HttpResponse {
    status: "200";
    body: FarmerListResponse;
}

/** Returns a paginated list of farmer resources. */
export declare interface FarmersListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmersListParameters = FarmersListQueryParam & RequestParameters;

export declare interface FarmersListQueryParam {
    queryParameters?: FarmersListQueryParamProperties;
}

export declare interface FarmersListQueryParamProperties {
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface FarmListResponse {
    /** List of requested objects. */
    value?: Array<Farm>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

export declare interface FarmOperationDataIngestionJob {
    /** Farmer ID. */
    farmerId: string;
    /** Authentication provider ID. */
    authProviderId: string;
    /** List of operation types for which data needs to be downloaded. Available values: AllOperations, Application, Planting, Harvest, Tillage. */
    operations?: Array<string>;
    /** Start Year (Minimum = 2000, Maximum = CurrentYear). */
    startYear: number;
    /** Unique job id. */
    id?: string;
    /**
     * Status of the job.
     * Possible values: 'Waiting', 'Running', 'Succeeded', 'Failed', 'Cancelled'.
     */
    status?: string;
    /** Duration of the job in seconds. */
    durationInSeconds?: number;
    /** Status message to capture more details of the job. */
    message?: string;
    /** Job created at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Job was last acted upon at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    lastActionDateTime?: Date;
    /** Job start time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startTime?: Date;
    /** Job end time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface FarmOperationsCreateDataIngestionJob {
    /** Create a farm operation data ingestion job. */
    put(options?: FarmOperationsCreateDataIngestionJobParameters): Promise<FarmOperationsCreateDataIngestionJob202Response | FarmOperationsCreateDataIngestionJobdefaultResponse>;
    /** Get a farm operation data ingestion job. */
    get(options?: FarmOperationsGetDataIngestionJobDetailsParameters): Promise<FarmOperationsGetDataIngestionJobDetails200Response | FarmOperationsGetDataIngestionJobDetailsdefaultResponse>;
}

/** Create a farm operation data ingestion job. */
export declare interface FarmOperationsCreateDataIngestionJob202Response extends HttpResponse {
    status: "202";
    body: FarmOperationDataIngestionJob;
}

export declare interface FarmOperationsCreateDataIngestionJobBodyParam {
    /** Job parameters supplied by user. */
    body?: FarmOperationDataIngestionJob;
}

/** Create a farm operation data ingestion job. */
export declare interface FarmOperationsCreateDataIngestionJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmOperationsCreateDataIngestionJobParameters = FarmOperationsCreateDataIngestionJobBodyParam & RequestParameters;

/** Get a farm operation data ingestion job. */
export declare interface FarmOperationsGetDataIngestionJobDetails200Response extends HttpResponse {
    status: "200";
    body: FarmOperationDataIngestionJob;
}

/** Get a farm operation data ingestion job. */
export declare interface FarmOperationsGetDataIngestionJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmOperationsGetDataIngestionJobDetailsParameters = RequestParameters;

/** Create a cascade delete job for specified farm. */
export declare interface FarmsCreateCascadeDeleteJob202Response extends HttpResponse {
    status: "202";
    body: CascadeDeleteJob;
}

/** Create a cascade delete job for specified farm. */
export declare interface FarmsCreateCascadeDeleteJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmsCreateCascadeDeleteJobParameters = FarmsCreateCascadeDeleteJobQueryParam & RequestParameters;

export declare interface FarmsCreateCascadeDeleteJobQueryParam {
    queryParameters: FarmsCreateCascadeDeleteJobQueryParamProperties;
}

export declare interface FarmsCreateCascadeDeleteJobQueryParamProperties {
    /** ID of the associated farmer. */
    farmerId: string;
    /** ID of the farm to be deleted. */
    farmId: string;
}

/** Creates or updates a farm resource under a particular farmer. */
export declare interface FarmsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: Farm;
}

/** Creates or updates a farm resource under a particular farmer. */
export declare interface FarmsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: Farm;
}

export declare interface FarmsCreateOrUpdateBodyParam {
    /** Farm resource payload to create or update. */
    body?: Farm;
}

/** Creates or updates a farm resource under a particular farmer. */
export declare interface FarmsCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmsCreateOrUpdateParameters = FarmsCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified farm resource under a particular farmer. */
export declare interface FarmsDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified farm resource under a particular farmer. */
export declare interface FarmsDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmsDeleteParameters = RequestParameters;

export declare interface FarmsGet {
    /** Gets a specified farm resource under a particular farmer. */
    get(options?: FarmsGetParameters): Promise<FarmsGet200Response | FarmsGetdefaultResponse>;
    /** Creates or updates a farm resource under a particular farmer. */
    patch(options?: FarmsCreateOrUpdateParameters): Promise<FarmsCreateOrUpdate200Response | FarmsCreateOrUpdate201Response | FarmsCreateOrUpdatedefaultResponse>;
    /** Deletes a specified farm resource under a particular farmer. */
    delete(options?: FarmsDeleteParameters): Promise<FarmsDelete204Response | FarmsDeletedefaultResponse>;
}

/** Gets a specified farm resource under a particular farmer. */
export declare interface FarmsGet200Response extends HttpResponse {
    status: "200";
    body: Farm;
}

export declare interface FarmsGetCascadeDeleteJobDetails {
    /** Get a cascade delete job for specified farm. */
    get(options?: FarmsGetCascadeDeleteJobDetailsParameters): Promise<FarmsGetCascadeDeleteJobDetails200Response | FarmsGetCascadeDeleteJobDetailsdefaultResponse>;
    /** Create a cascade delete job for specified farm. */
    put(options: FarmsCreateCascadeDeleteJobParameters): Promise<FarmsCreateCascadeDeleteJob202Response | FarmsCreateCascadeDeleteJobdefaultResponse>;
}

/** Get a cascade delete job for specified farm. */
export declare interface FarmsGetCascadeDeleteJobDetails200Response extends HttpResponse {
    status: "200";
    body: CascadeDeleteJob;
}

/** Get a cascade delete job for specified farm. */
export declare interface FarmsGetCascadeDeleteJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmsGetCascadeDeleteJobDetailsParameters = RequestParameters;

/** Gets a specified farm resource under a particular farmer. */
export declare interface FarmsGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmsGetParameters = RequestParameters;

export declare interface FarmsList {
    /** Returns a paginated list of farm resources across all farmers. */
    get(options?: FarmsListParameters): Promise<FarmsList200Response | FarmsListdefaultResponse>;
}

/** Returns a paginated list of farm resources across all farmers. */
export declare interface FarmsList200Response extends HttpResponse {
    status: "200";
    body: FarmListResponse;
}

export declare interface FarmsListByFarmerId {
    /** Returns a paginated list of farm resources under a particular farmer. */
    get(options?: FarmsListByFarmerIdParameters): Promise<FarmsListByFarmerId200Response | FarmsListByFarmerIddefaultResponse>;
}

/** Returns a paginated list of farm resources under a particular farmer. */
export declare interface FarmsListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: FarmListResponse;
}

/** Returns a paginated list of farm resources under a particular farmer. */
export declare interface FarmsListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmsListByFarmerIdParameters = FarmsListByFarmerIdQueryParam & RequestParameters;

export declare interface FarmsListByFarmerIdQueryParam {
    queryParameters?: FarmsListByFarmerIdQueryParamProperties;
}

export declare interface FarmsListByFarmerIdQueryParamProperties {
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of farm resources across all farmers. */
export declare interface FarmsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FarmsListParameters = FarmsListQueryParam & RequestParameters;

export declare interface FarmsListQueryParam {
    queryParameters?: FarmsListQueryParamProperties;
}

export declare interface FarmsListQueryParamProperties {
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface Field {
    /** ID of the associated Farm. */
    farmId?: string;
    /** Farmer ID. */
    farmerId?: string;
    /** Primary boundary id. */
    primaryBoundaryId?: string;
    /** Boundary Ids. */
    boundaryIds?: Array<string>;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface FieldListResponse {
    /** List of requested objects. */
    value?: Array<Field>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Create a cascade delete job for specified field. */
export declare interface FieldsCreateCascadeDeleteJob202Response extends HttpResponse {
    status: "202";
    body: CascadeDeleteJob;
}

/** Create a cascade delete job for specified field. */
export declare interface FieldsCreateCascadeDeleteJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FieldsCreateCascadeDeleteJobParameters = FieldsCreateCascadeDeleteJobQueryParam & RequestParameters;

export declare interface FieldsCreateCascadeDeleteJobQueryParam {
    queryParameters: FieldsCreateCascadeDeleteJobQueryParamProperties;
}

export declare interface FieldsCreateCascadeDeleteJobQueryParamProperties {
    /** ID of the associated farmer. */
    farmerId: string;
    /** ID of the field to be deleted. */
    fieldId: string;
}

/** Creates or Updates a field resource under a particular farmer. */
export declare interface FieldsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: Field;
}

/** Creates or Updates a field resource under a particular farmer. */
export declare interface FieldsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: Field;
}

export declare interface FieldsCreateOrUpdateBodyParam {
    /** Field resource payload to create or update. */
    body?: Field;
}

/** Creates or Updates a field resource under a particular farmer. */
export declare interface FieldsCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FieldsCreateOrUpdateParameters = FieldsCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified field resource under a particular farmer. */
export declare interface FieldsDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified field resource under a particular farmer. */
export declare interface FieldsDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FieldsDeleteParameters = RequestParameters;

export declare interface FieldsGet {
    /** Gets a specified field resource under a particular farmer. */
    get(options?: FieldsGetParameters): Promise<FieldsGet200Response | FieldsGetdefaultResponse>;
    /** Creates or Updates a field resource under a particular farmer. */
    patch(options?: FieldsCreateOrUpdateParameters): Promise<FieldsCreateOrUpdate200Response | FieldsCreateOrUpdate201Response | FieldsCreateOrUpdatedefaultResponse>;
    /** Deletes a specified field resource under a particular farmer. */
    delete(options?: FieldsDeleteParameters): Promise<FieldsDelete204Response | FieldsDeletedefaultResponse>;
}

/** Gets a specified field resource under a particular farmer. */
export declare interface FieldsGet200Response extends HttpResponse {
    status: "200";
    body: Field;
}

export declare interface FieldsGetCascadeDeleteJobDetails {
    /** Get a cascade delete job for specified field. */
    get(options?: FieldsGetCascadeDeleteJobDetailsParameters): Promise<FieldsGetCascadeDeleteJobDetails200Response | FieldsGetCascadeDeleteJobDetailsdefaultResponse>;
    /** Create a cascade delete job for specified field. */
    put(options: FieldsCreateCascadeDeleteJobParameters): Promise<FieldsCreateCascadeDeleteJob202Response | FieldsCreateCascadeDeleteJobdefaultResponse>;
}

/** Get a cascade delete job for specified field. */
export declare interface FieldsGetCascadeDeleteJobDetails200Response extends HttpResponse {
    status: "200";
    body: CascadeDeleteJob;
}

/** Get a cascade delete job for specified field. */
export declare interface FieldsGetCascadeDeleteJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FieldsGetCascadeDeleteJobDetailsParameters = RequestParameters;

/** Gets a specified field resource under a particular farmer. */
export declare interface FieldsGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FieldsGetParameters = RequestParameters;

export declare interface FieldsList {
    /** Returns a paginated list of field resources across all farmers. */
    get(options?: FieldsListParameters): Promise<FieldsList200Response | FieldsListdefaultResponse>;
}

/** Returns a paginated list of field resources across all farmers. */
export declare interface FieldsList200Response extends HttpResponse {
    status: "200";
    body: FieldListResponse;
}

export declare interface FieldsListByFarmerId {
    /** Returns a paginated list of field resources under a particular farmer. */
    get(options?: FieldsListByFarmerIdParameters): Promise<FieldsListByFarmerId200Response | FieldsListByFarmerIddefaultResponse>;
}

/** Returns a paginated list of field resources under a particular farmer. */
export declare interface FieldsListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: FieldListResponse;
}

/** Returns a paginated list of field resources under a particular farmer. */
export declare interface FieldsListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FieldsListByFarmerIdParameters = FieldsListByFarmerIdQueryParam & RequestParameters;

export declare interface FieldsListByFarmerIdQueryParam {
    queryParameters?: FieldsListByFarmerIdQueryParamProperties;
}

export declare interface FieldsListByFarmerIdQueryParamProperties {
    /** Farm Ids of the resource. */
    farmIds?: Array<string>;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of field resources across all farmers. */
export declare interface FieldsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type FieldsListParameters = FieldsListQueryParam & RequestParameters;

export declare interface FieldsListQueryParam {
    queryParameters?: FieldsListQueryParamProperties;
}

export declare interface FieldsListQueryParamProperties {
    /** Farm Ids of the resource. */
    farmIds?: Array<string>;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare type GeoJsonObject = MultiPolygon | Point | Polygon;

export declare interface GeoJsonObjectBase {
    type: "MultiPolygon" | "Point" | "Polygon";
}

/**
 * Helper type to extract the type of an array
 */
export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

/**
 * The type of a custom function that defines how to get a page and a link to the next one if any.
 */
export declare type GetPage<TPage> = (pageLink: string, maxPageSize?: number) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

export declare interface HarvestData {
    /** Schema for storing measurement reading and unit. */
    totalYield?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgYield?: Measure;
    /** Schema for storing measurement reading and unit. */
    totalWetMass?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgWetMass?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgMoisture?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgSpeed?: Measure;
    /** Harvest product details. */
    harvestProductDetails?: Array<HarvestProductDetail>;
    /** Schema for storing measurement reading and unit. */
    area?: Measure;
    /** Source of the operation data. */
    source?: string;
    /**
     * Modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ.
     * Note: this will be specified by the source provider itself.
     */
    operationModifiedDateTime?: Date;
    /** Start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    operationStartDateTime?: Date;
    /** End date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    operationEndDateTime?: Date;
    /** Link for attachments. */
    attachmentsLink?: string;
    /** Optional boundary ID of the field for which operation was applied. */
    associatedBoundaryId?: string;
    /** Optional boundary ID of the actual area for which operation was applied inside the specified field. */
    operationBoundaryId?: string;
    /** Farmer ID which belongs to the operation data. */
    farmerId?: string;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

/** Creates or updates harvest data resource under a particular farmer. */
export declare interface HarvestDataCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: HarvestData;
}

/** Creates or updates harvest data resource under a particular farmer. */
export declare interface HarvestDataCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: HarvestData;
}

export declare interface HarvestDataCreateOrUpdateBodyParam {
    /** Harvest data resource payload to create or update. */
    body?: HarvestData;
}

/** Creates or updates harvest data resource under a particular farmer. */
export declare interface HarvestDataCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type HarvestDataCreateOrUpdateParameters = HarvestDataCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified harvest data resource under a particular farmer. */
export declare interface HarvestDataDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified harvest data resource under a particular farmer. */
export declare interface HarvestDataDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type HarvestDataDeleteParameters = RequestParameters;

export declare interface HarvestDataGet {
    /** Get a specified harvest data resource under a particular farmer. */
    get(options?: HarvestDataGetParameters): Promise<HarvestDataGet200Response | HarvestDataGetdefaultResponse>;
    /** Creates or updates harvest data resource under a particular farmer. */
    patch(options?: HarvestDataCreateOrUpdateParameters): Promise<HarvestDataCreateOrUpdate200Response | HarvestDataCreateOrUpdate201Response | HarvestDataCreateOrUpdatedefaultResponse>;
    /** Deletes a specified harvest data resource under a particular farmer. */
    delete(options?: HarvestDataDeleteParameters): Promise<HarvestDataDelete204Response | HarvestDataDeletedefaultResponse>;
}

/** Get a specified harvest data resource under a particular farmer. */
export declare interface HarvestDataGet200Response extends HttpResponse {
    status: "200";
    body: HarvestData;
}

/** Get a specified harvest data resource under a particular farmer. */
export declare interface HarvestDataGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type HarvestDataGetParameters = RequestParameters;

export declare interface HarvestDataList {
    /** Returns a paginated list of harvest data resources across all farmers. */
    get(options?: HarvestDataListParameters): Promise<HarvestDataList200Response | HarvestDataListdefaultResponse>;
}

/** Returns a paginated list of harvest data resources across all farmers. */
export declare interface HarvestDataList200Response extends HttpResponse {
    status: "200";
    body: HarvestDataListResponse;
}

export declare interface HarvestDataListByFarmerId {
    /** Returns a paginated list of harvest data resources under a particular farm. */
    get(options?: HarvestDataListByFarmerIdParameters): Promise<HarvestDataListByFarmerId200Response | HarvestDataListByFarmerIddefaultResponse>;
}

/** Returns a paginated list of harvest data resources under a particular farm. */
export declare interface HarvestDataListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: HarvestDataListResponse;
}

/** Returns a paginated list of harvest data resources under a particular farm. */
export declare interface HarvestDataListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type HarvestDataListByFarmerIdParameters = HarvestDataListByFarmerIdQueryParam & RequestParameters;

export declare interface HarvestDataListByFarmerIdQueryParam {
    queryParameters?: HarvestDataListByFarmerIdQueryParamProperties;
}

export declare interface HarvestDataListByFarmerIdQueryParamProperties {
    /** Minimum Yield value(inclusive). */
    minTotalYield?: number;
    /** Maximum Yield value (inclusive). */
    maxTotalYield?: number;
    /** Minimum AvgYield value(inclusive). */
    minAvgYield?: number;
    /** Maximum AvgYield value (inclusive). */
    maxAvgYield?: number;
    /** Minimum Total WetMass value(inclusive). */
    minTotalWetMass?: number;
    /** Maximum Total WetMass value (inclusive). */
    maxTotalWetMass?: number;
    /** Minimum AvgWetMass value(inclusive). */
    minAvgWetMass?: number;
    /** Maximum AvgWetMass value (inclusive). */
    maxAvgWetMass?: number;
    /** Minimum AvgMoisture value(inclusive). */
    minAvgMoisture?: number;
    /** Maximum AvgMoisture value (inclusive). */
    maxAvgMoisture?: number;
    /** Minimum AvgSpeed value(inclusive). */
    minAvgSpeed?: number;
    /** Maximum AvgSpeed value (inclusive). */
    maxAvgSpeed?: number;
    /** Sources of the operation data. */
    sources?: Array<string>;
    /** Boundary IDs associated with operation data. */
    associatedBoundaryIds?: Array<string>;
    /** Operation boundary IDs associated with operation data. */
    operationBoundaryIds?: Array<string>;
    /** Minimum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationStartDateTime?: Date;
    /** Maximum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationStartDateTime?: Date;
    /** Minimum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationEndDateTime?: Date;
    /** Maximum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationEndDateTime?: Date;
    /** Minimum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationModifiedDateTime?: Date;
    /** Maximum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationModifiedDateTime?: Date;
    /** Minimum area for which operation was applied (inclusive). */
    minArea?: number;
    /** Maximum area for which operation was applied (inclusive). */
    maxArea?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of harvest data resources across all farmers. */
export declare interface HarvestDataListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type HarvestDataListParameters = HarvestDataListQueryParam & RequestParameters;

export declare interface HarvestDataListQueryParam {
    queryParameters?: HarvestDataListQueryParamProperties;
}

export declare interface HarvestDataListQueryParamProperties {
    /** Minimum Yield value(inclusive). */
    minTotalYield?: number;
    /** Maximum Yield value (inclusive). */
    maxTotalYield?: number;
    /** Minimum AvgYield value(inclusive). */
    minAvgYield?: number;
    /** Maximum AvgYield value (inclusive). */
    maxAvgYield?: number;
    /** Minimum Total WetMass value(inclusive). */
    minTotalWetMass?: number;
    /** Maximum Total WetMass value (inclusive). */
    maxTotalWetMass?: number;
    /** Minimum AvgWetMass value(inclusive). */
    minAvgWetMass?: number;
    /** Maximum AvgWetMass value (inclusive). */
    maxAvgWetMass?: number;
    /** Minimum AvgMoisture value(inclusive). */
    minAvgMoisture?: number;
    /** Maximum AvgMoisture value (inclusive). */
    maxAvgMoisture?: number;
    /** Minimum AvgSpeed value(inclusive). */
    minAvgSpeed?: number;
    /** Maximum AvgSpeed value (inclusive). */
    maxAvgSpeed?: number;
    /** Sources of the operation data. */
    sources?: Array<string>;
    /** Boundary IDs associated with operation data. */
    associatedBoundaryIds?: Array<string>;
    /** Operation boundary IDs associated with operation data. */
    operationBoundaryIds?: Array<string>;
    /** Minimum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationStartDateTime?: Date;
    /** Maximum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationStartDateTime?: Date;
    /** Minimum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationEndDateTime?: Date;
    /** Maximum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationEndDateTime?: Date;
    /** Minimum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationModifiedDateTime?: Date;
    /** Maximum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationModifiedDateTime?: Date;
    /** Minimum area for which operation was applied (inclusive). */
    minArea?: number;
    /** Maximum area for which operation was applied (inclusive). */
    maxArea?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface HarvestDataListResponse {
    /** List of requested objects. */
    value?: Array<HarvestData>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

export declare interface HarvestProductDetail {
    /** Name of the product. */
    productName?: string;
    /** Schema for storing measurement reading and unit. */
    area?: Measure;
    /** Schema for storing measurement reading and unit. */
    totalYield?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgYield?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgMoisture?: Measure;
    /** Schema for storing measurement reading and unit. */
    totalWetMass?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgWetMass?: Measure;
}

export declare interface ImageFile {
    /** Link of the image file. */
    fileLink?: string;
    /** Name of the image file. */
    name: string;
    /** Supported image formats for scene resource. */
    imageFormat?: "TIF";
    /** Resolution of image file in meters. */
    resolution?: number;
}

export declare interface ImageProcessingCreateRasterizeJob {
    /** Create a ImageProcessing Rasterize job. */
    put(options?: ImageProcessingCreateRasterizeJobParameters): Promise<ImageProcessingCreateRasterizeJob202Response | ImageProcessingCreateRasterizeJobdefaultResponse>;
    /** Get ImageProcessing Rasterize job's details. */
    get(options?: ImageProcessingGetRasterizeJobParameters): Promise<ImageProcessingGetRasterizeJob200Response>;
}

/** Create a ImageProcessing Rasterize job. */
export declare interface ImageProcessingCreateRasterizeJob202Response extends HttpResponse {
    status: "202";
    body: ImageProcessingRasterizeJob;
}

export declare interface ImageProcessingCreateRasterizeJobBodyParam {
    /** Job parameters supplied by user. */
    body?: ImageProcessingRasterizeJob;
}

/** Create a ImageProcessing Rasterize job. */
export declare interface ImageProcessingCreateRasterizeJobdefaultResponse extends HttpResponse {
    status: "500";
    body: Record<string, unknown>;
}

export declare type ImageProcessingCreateRasterizeJobParameters = ImageProcessingCreateRasterizeJobBodyParam & RequestParameters;

/** Get ImageProcessing Rasterize job's details. */
export declare interface ImageProcessingGetRasterizeJob200Response extends HttpResponse {
    status: "200";
    body: ImageProcessingRasterizeJob;
}

export declare type ImageProcessingGetRasterizeJobParameters = RequestParameters;

export declare interface ImageProcessingRasterizeJob {
    /** Farmer ID. */
    farmerId: string;
    /** Shapefile attachment ID. */
    shapefileAttachmentId: string;
    /** List of shapefile column names to create raster attachments. */
    shapefileColumnNames: Array<string>;
    /** Unique job id. */
    id?: string;
    /**
     * Status of the job.
     * Possible values: 'Waiting', 'Running', 'Succeeded', 'Failed', 'Cancelled'.
     */
    status?: string;
    /** Duration of the job in seconds. */
    durationInSeconds?: number;
    /** Status message to capture more details of the job. */
    message?: string;
    /** Job created at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Job was last acted upon at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    lastActionDateTime?: Date;
    /** Job start time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startTime?: Date;
    /** Job end time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface InnerError extends Record<string, unknown> {
    /**
     * Specific error code than was provided by the
     * containing error.
     */
    code?: string;
    /**
     * Inner error containing list of errors.
     * <see href="https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#innererror--object">InnerError reference document</see>.
     */
    innererror?: InnerError;
}

declare interface Location_2 {
    /** Latitude of the location. */
    latitude: number;
    /** Longitude of the location. */
    longitude: number;
}
export { Location_2 as Location }

export declare interface Measure {
    /** Data unit. */
    unit?: string;
    /** Data value. */
    value?: number;
}

export declare interface MultiPolygon extends GeoJsonObjectBase, MultiPolygonCoordinates {
    type: "MultiPolygon";
}

export declare interface MultiPolygonCoordinates {
    /**
     * Gets or sets Coordinates of GeoJSON Object.
     * It must be an array of polygons, each polygon contains list of linear rings.
     * For Polygons with more than one of these rings, the first MUST be the exterior ring,
     * and any others MUST be interior rings.
     */
    coordinates: Array<Array<Array<Array<number>>>>;
}

export declare interface OAuthConnectRequest {
    /** ID of the farmer. */
    farmerId: string;
    /** ID of the OAuthProvider. */
    oAuthProviderId: string;
    /** Link to redirect the user to, at the end of the oauth flow. */
    userRedirectLink: string;
    /** State to provide back when redirecting the user, at the end of the oauth flow. */
    userRedirectState?: string;
}

export declare interface OAuthProvider {
    /** OAuth App ID for given OAuth Provider. */
    appId?: string;
    /**
     * OAuth App secret for given Provider.
     * Note: Won't be sent in response.
     */
    appSecret?: string;
    /**
     * OAuth Api key for given Provider.
     * Note: currently Applicable to Climate provider. Won't be sent in response.
     */
    apiKey?: string;
    /**
     * An optional flag to determine if the App is ready to be used for Production scenarios in the provider side or not. (Default value: false)
     * Note: Currently applicable for JohnDeere.
     */
    isProductionApp?: boolean;
    /** Unique OAuth provider ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface OAuthProviderListResponse {
    /** List of requested objects. */
    value?: Array<OAuthProvider>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Creates or updates an oauthProvider resource. */
export declare interface OAuthProvidersCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: OAuthProvider;
}

/** Creates or updates an oauthProvider resource. */
export declare interface OAuthProvidersCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: OAuthProvider;
}

export declare interface OAuthProvidersCreateOrUpdateBodyParam {
    /** OauthProvider resource payload to create or update. */
    body?: OAuthProvider;
}

/** Creates or updates an oauthProvider resource. */
export declare interface OAuthProvidersCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type OAuthProvidersCreateOrUpdateParameters = OAuthProvidersCreateOrUpdateBodyParam & RequestParameters;

/** Deletes an specified oauthProvider resource. */
export declare interface OAuthProvidersDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes an specified oauthProvider resource. */
export declare interface OAuthProvidersDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type OAuthProvidersDeleteParameters = RequestParameters;

export declare interface OAuthProvidersGet {
    /** Get a specified oauthProvider resource. */
    get(options?: OAuthProvidersGetParameters): Promise<OAuthProvidersGet200Response | OAuthProvidersGetdefaultResponse>;
    /** Creates or updates an oauthProvider resource. */
    patch(options?: OAuthProvidersCreateOrUpdateParameters): Promise<OAuthProvidersCreateOrUpdate200Response | OAuthProvidersCreateOrUpdate201Response | OAuthProvidersCreateOrUpdatedefaultResponse>;
    /** Deletes an specified oauthProvider resource. */
    delete(options?: OAuthProvidersDeleteParameters): Promise<OAuthProvidersDelete204Response | OAuthProvidersDeletedefaultResponse>;
}

/** Get a specified oauthProvider resource. */
export declare interface OAuthProvidersGet200Response extends HttpResponse {
    status: "200";
    body: OAuthProvider;
}

/** Get a specified oauthProvider resource. */
export declare interface OAuthProvidersGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type OAuthProvidersGetParameters = RequestParameters;

export declare interface OAuthProvidersList {
    /** Returns a paginated list of oauthProvider resources. */
    get(options?: OAuthProvidersListParameters): Promise<OAuthProvidersList200Response | OAuthProvidersListdefaultResponse>;
}

/** Returns a paginated list of oauthProvider resources. */
export declare interface OAuthProvidersList200Response extends HttpResponse {
    status: "200";
    body: OAuthProviderListResponse;
}

/** Returns a paginated list of oauthProvider resources. */
export declare interface OAuthProvidersListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type OAuthProvidersListParameters = OAuthProvidersListQueryParam & RequestParameters;

export declare interface OAuthProvidersListQueryParam {
    queryParameters?: OAuthProvidersListQueryParamProperties;
}

export declare interface OAuthProvidersListQueryParamProperties {
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface OAuthToken {
    /** Farmer ID for this OAuth config. */
    farmerId: string;
    /** ID of the OAuth provider resource containing app information. */
    authProviderId: string;
    /** An optional flag indicating whether the token is a valid or expired (Default value: true). */
    isValid?: boolean;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
}

export declare interface OAuthTokenListResponse {
    /** List of requested objects. */
    value?: Array<OAuthToken>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Create a cascade delete job for OAuth tokens. */
export declare interface OAuthTokensCreateCascadeDeleteJob202Response extends HttpResponse {
    status: "202";
    body: CascadeDeleteJob;
}

/** Create a cascade delete job for OAuth tokens. */
export declare interface OAuthTokensCreateCascadeDeleteJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type OAuthTokensCreateCascadeDeleteJobParameters = OAuthTokensCreateCascadeDeleteJobQueryParam & RequestParameters;

export declare interface OAuthTokensCreateCascadeDeleteJobQueryParam {
    queryParameters: OAuthTokensCreateCascadeDeleteJobQueryParamProperties;
}

export declare interface OAuthTokensCreateCascadeDeleteJobQueryParamProperties {
    /** ID of the farmer. */
    farmerId: string;
    /** ID of the OAuthProvider. */
    oauthProviderId: string;
}

export declare interface OAuthTokensGetCascadeDeleteJobDetails {
    /** Get cascade delete job details for OAuth tokens for specified job ID. */
    get(options?: OAuthTokensGetCascadeDeleteJobDetailsParameters): Promise<OAuthTokensGetCascadeDeleteJobDetails200Response | OAuthTokensGetCascadeDeleteJobDetailsdefaultResponse>;
    /** Create a cascade delete job for OAuth tokens. */
    put(options: OAuthTokensCreateCascadeDeleteJobParameters): Promise<OAuthTokensCreateCascadeDeleteJob202Response | OAuthTokensCreateCascadeDeleteJobdefaultResponse>;
}

/** Get cascade delete job details for OAuth tokens for specified job ID. */
export declare interface OAuthTokensGetCascadeDeleteJobDetails200Response extends HttpResponse {
    status: "200";
    body: CascadeDeleteJob;
}

/** Get cascade delete job details for OAuth tokens for specified job ID. */
export declare interface OAuthTokensGetCascadeDeleteJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type OAuthTokensGetCascadeDeleteJobDetailsParameters = RequestParameters;

export declare interface OAuthTokensGetOAuthConnectionLink {
    /** Returns Connection link needed in the OAuth flow. */
    post(options?: OAuthTokensGetOAuthConnectionLinkParameters): Promise<OAuthTokensGetOAuthConnectionLink200Response | OAuthTokensGetOAuthConnectionLinkdefaultResponse>;
}

/** Returns Connection link needed in the OAuth flow. */
export declare interface OAuthTokensGetOAuthConnectionLink200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare interface OAuthTokensGetOAuthConnectionLinkBodyParam {
    /** OAuth Connect Request. */
    body?: OAuthConnectRequest;
}

/** Returns Connection link needed in the OAuth flow. */
export declare interface OAuthTokensGetOAuthConnectionLinkdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type OAuthTokensGetOAuthConnectionLinkParameters = OAuthTokensGetOAuthConnectionLinkBodyParam & RequestParameters;

export declare interface OAuthTokensList {
    /** Returns a list of OAuthToken documents. */
    get(options?: OAuthTokensListParameters): Promise<OAuthTokensList200Response | OAuthTokensListdefaultResponse>;
}

/** Returns a list of OAuthToken documents. */
export declare interface OAuthTokensList200Response extends HttpResponse {
    status: "200";
    body: OAuthTokenListResponse;
}

/** Returns a list of OAuthToken documents. */
export declare interface OAuthTokensListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type OAuthTokensListParameters = OAuthTokensListQueryParam & RequestParameters;

export declare interface OAuthTokensListQueryParam {
    queryParameters?: OAuthTokensListQueryParamProperties;
}

export declare interface OAuthTokensListQueryParamProperties {
    /** Name of AuthProvider. */
    authProviderIds?: Array<string>;
    /** List of farmers. */
    farmerIds?: Array<string>;
    /** If the token object is valid. */
    isValid?: boolean;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/**
 * Helper to paginate results from an initial response that follows the specification of Autorest `x-ms-pageable` extension
 * @param client - Client to use for sending the next page requests
 * @param initialResponse - Initial response containing the nextLink and current page of elements
 * @param customGetPage - Optional - Function to define how to extract the page and next link to be used to paginate the results
 * @returns - PagedAsyncIterableIterator to iterate the elements
 */
export declare function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

/**
 * Helper type to infer the Type of the paged elements from the response type
 * This type is generated based on the swagger information for x-ms-pageable
 * specifically on the itemName property which indicates the property of the response
 * where the page items are found. The default value is `value`.
 * This type will allow us to provide strongly typed Iterator based on the response we get as second parameter
 */
export declare type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

/**
 * Options for the paging helper
 */
export declare interface PagingOptions<TResponse> {
    /**
     * Custom function to extract pagination details for crating the PagedAsyncIterableIterator
     */
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

export declare interface Paths1LxjoxzFarmersFarmeridAttachmentsAttachmentidPatchRequestbodyContentMultipartFormDataSchema {
    /**
     * File to be uploaded.
     *
     * Value may contain any sequence of octets
     */
    file?: string;
    /** Farmer id for this attachment. */
    FarmerId?: string;
    /** Associated Resource id for this attachment. */
    ResourceId?: string;
    /**
     * Associated Resource type for this attachment
     * i.e. Farmer, Farm, Field, SeasonalField, Boundary, FarmOperationApplicationData, HarvestData, TillageData, PlantingData.
     */
    ResourceType?: string;
    /** Original File Name for this attachment. */
    OriginalFileName?: string;
    /** Unique id. */
    Id?: string;
    /** Status of the resource. */
    Status?: string;
    /** Date when resource was created. */
    CreatedDateTime?: string;
    /** Date when resource was last modified. */
    ModifiedDateTime?: string;
    /** Name to identify resource. */
    Name?: string;
    /** Textual description of resource. */
    Description?: string;
    /** The ETag value to implement optimistic concurrency. */
    ETag?: string;
}

export declare interface PlantingData {
    /** Schema for storing measurement reading and unit. */
    avgPlantingRate?: Measure;
    /** Schema for storing measurement reading and unit. */
    totalMaterial?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgMaterial?: Measure;
    /** Planting product details. */
    plantingProductDetails?: Array<PlantingProductDetail>;
    /** Schema for storing measurement reading and unit. */
    area?: Measure;
    /** Source of the operation data. */
    source?: string;
    /**
     * Modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ.
     * Note: this will be specified by the source provider itself.
     */
    operationModifiedDateTime?: Date;
    /** Start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    operationStartDateTime?: Date;
    /** End date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    operationEndDateTime?: Date;
    /** Link for attachments. */
    attachmentsLink?: string;
    /** Optional boundary ID of the field for which operation was applied. */
    associatedBoundaryId?: string;
    /** Optional boundary ID of the actual area for which operation was applied inside the specified field. */
    operationBoundaryId?: string;
    /** Farmer ID which belongs to the operation data. */
    farmerId?: string;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

/** Creates or updates an planting data resource under a particular farmer. */
export declare interface PlantingDataCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: PlantingData;
}

/** Creates or updates an planting data resource under a particular farmer. */
export declare interface PlantingDataCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: PlantingData;
}

export declare interface PlantingDataCreateOrUpdateBodyParam {
    /** Planting data resource payload to create or update. */
    body?: PlantingData;
}

/** Creates or updates an planting data resource under a particular farmer. */
export declare interface PlantingDataCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type PlantingDataCreateOrUpdateParameters = PlantingDataCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified planting data resource under a particular farmer. */
export declare interface PlantingDataDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified planting data resource under a particular farmer. */
export declare interface PlantingDataDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type PlantingDataDeleteParameters = RequestParameters;

export declare interface PlantingDataGet {
    /** Get a specified planting data resource under a particular farmer. */
    get(options?: PlantingDataGetParameters): Promise<PlantingDataGet200Response | PlantingDataGetdefaultResponse>;
    /** Creates or updates an planting data resource under a particular farmer. */
    patch(options?: PlantingDataCreateOrUpdateParameters): Promise<PlantingDataCreateOrUpdate200Response | PlantingDataCreateOrUpdate201Response | PlantingDataCreateOrUpdatedefaultResponse>;
    /** Deletes a specified planting data resource under a particular farmer. */
    delete(options?: PlantingDataDeleteParameters): Promise<PlantingDataDelete204Response | PlantingDataDeletedefaultResponse>;
}

/** Get a specified planting data resource under a particular farmer. */
export declare interface PlantingDataGet200Response extends HttpResponse {
    status: "200";
    body: PlantingData;
}

/** Get a specified planting data resource under a particular farmer. */
export declare interface PlantingDataGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type PlantingDataGetParameters = RequestParameters;

export declare interface PlantingDataList {
    /** Returns a paginated list of planting data resources across all farmers. */
    get(options?: PlantingDataListParameters): Promise<PlantingDataList200Response | PlantingDataListdefaultResponse>;
}

/** Returns a paginated list of planting data resources across all farmers. */
export declare interface PlantingDataList200Response extends HttpResponse {
    status: "200";
    body: PlantingDataListResponse;
}

export declare interface PlantingDataListByFarmerId {
    /** Returns a paginated list of planting data resources under a particular farm. */
    get(options?: PlantingDataListByFarmerIdParameters): Promise<PlantingDataListByFarmerId200Response | PlantingDataListByFarmerIddefaultResponse>;
}

/** Returns a paginated list of planting data resources under a particular farm. */
export declare interface PlantingDataListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: PlantingDataListResponse;
}

/** Returns a paginated list of planting data resources under a particular farm. */
export declare interface PlantingDataListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type PlantingDataListByFarmerIdParameters = PlantingDataListByFarmerIdQueryParam & RequestParameters;

export declare interface PlantingDataListByFarmerIdQueryParam {
    queryParameters?: PlantingDataListByFarmerIdQueryParamProperties;
}

export declare interface PlantingDataListByFarmerIdQueryParamProperties {
    /** Minimum AvgPlantingRate value(inclusive). */
    minAvgPlantingRate?: number;
    /** Maximum AvgPlantingRate value (inclusive). */
    maxAvgPlantingRate?: number;
    /** Minimum TotalMaterial value(inclusive). */
    minTotalMaterial?: number;
    /** Maximum TotalMaterial value (inclusive). */
    maxTotalMaterial?: number;
    /** Minimum AvgMaterial value(inclusive). */
    minAvgMaterial?: number;
    /** Maximum AvgMaterial value (inclusive). */
    maxAvgMaterial?: number;
    /** Sources of the operation data. */
    sources?: Array<string>;
    /** Boundary IDs associated with operation data. */
    associatedBoundaryIds?: Array<string>;
    /** Operation boundary IDs associated with operation data. */
    operationBoundaryIds?: Array<string>;
    /** Minimum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationStartDateTime?: Date;
    /** Maximum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationStartDateTime?: Date;
    /** Minimum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationEndDateTime?: Date;
    /** Maximum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationEndDateTime?: Date;
    /** Minimum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationModifiedDateTime?: Date;
    /** Maximum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationModifiedDateTime?: Date;
    /** Minimum area for which operation was applied (inclusive). */
    minArea?: number;
    /** Maximum area for which operation was applied (inclusive). */
    maxArea?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of planting data resources across all farmers. */
export declare interface PlantingDataListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type PlantingDataListParameters = PlantingDataListQueryParam & RequestParameters;

export declare interface PlantingDataListQueryParam {
    queryParameters?: PlantingDataListQueryParamProperties;
}

export declare interface PlantingDataListQueryParamProperties {
    /** Minimum AvgPlantingRate value(inclusive). */
    minAvgPlantingRate?: number;
    /** Maximum AvgPlantingRate value (inclusive). */
    maxAvgPlantingRate?: number;
    /** Minimum TotalMaterial value(inclusive). */
    minTotalMaterial?: number;
    /** Maximum TotalMaterial value (inclusive). */
    maxTotalMaterial?: number;
    /** Minimum AvgMaterial value(inclusive). */
    minAvgMaterial?: number;
    /** Maximum AvgMaterial value (inclusive). */
    maxAvgMaterial?: number;
    /** Sources of the operation data. */
    sources?: Array<string>;
    /** Boundary IDs associated with operation data. */
    associatedBoundaryIds?: Array<string>;
    /** Operation boundary IDs associated with operation data. */
    operationBoundaryIds?: Array<string>;
    /** Minimum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationStartDateTime?: Date;
    /** Maximum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationStartDateTime?: Date;
    /** Minimum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationEndDateTime?: Date;
    /** Maximum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationEndDateTime?: Date;
    /** Minimum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationModifiedDateTime?: Date;
    /** Maximum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationModifiedDateTime?: Date;
    /** Minimum area for which operation was applied (inclusive). */
    minArea?: number;
    /** Maximum area for which operation was applied (inclusive). */
    maxArea?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface PlantingDataListResponse {
    /** List of requested objects. */
    value?: Array<PlantingData>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

export declare interface PlantingProductDetail {
    /** Name of the product. */
    productName?: string;
    /** Schema for storing measurement reading and unit. */
    area?: Measure;
    /** Schema for storing measurement reading and unit. */
    totalMaterial?: Measure;
    /** Schema for storing measurement reading and unit. */
    avgMaterial?: Measure;
}

export declare interface Point extends GeoJsonObjectBase, PointCoordinates {
    type: "Point";
}

export declare interface PointCoordinates {
    /**
     * Gets or sets the coordinate of this point.
     * It must be an array of 2 or 3 elements for a 2D or 3D system.
     */
    coordinates: Array<number>;
}

export declare interface Polygon extends GeoJsonObjectBase, PolygonCoordinates {
    type: "Polygon";
}

export declare interface PolygonCoordinates {
    /**
     * Gets or sets type of the GeoJSON Object.
     * It must be an array of linear ring coordinate arrays.
     * For Polygons with more than one of these rings, the first MUST be the exterior ring,
     * and any others MUST be interior rings.
     */
    coordinates: Array<Array<Array<number>>>;
}

export declare interface Routes {
    /** Resource for '/farmers/\{farmerId\}/application-data' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/application-data", farmerId: string): ApplicationDataListByFarmerId;
    /** Resource for '/application-data' has methods for the following verbs: get */
    (path: "/application-data"): ApplicationDataList;
    /** Resource for '/farmers/\{farmerId\}/application-data/\{applicationDataId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/application-data/{applicationDataId}", farmerId: string, applicationDataId: string): ApplicationDataGet;
    /** Resource for '/farmers/\{farmerId\}/attachments' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/attachments", farmerId: string): AttachmentsListByFarmerId;
    /** Resource for '/farmers/\{farmerId\}/attachments/\{attachmentId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/attachments/{attachmentId}", farmerId: string, attachmentId: string): AttachmentsGet;
    /** Resource for '/farmers/\{farmerId\}/attachments/\{attachmentId\}/file' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/attachments/{attachmentId}/file", farmerId: string, attachmentId: string): AttachmentsDownload;
    /** Resource for '/farmers/\{farmerId\}/boundaries' has methods for the following verbs: get, post */
    (path: "/farmers/{farmerId}/boundaries", farmerId: string): BoundariesListByFarmerId;
    /** Resource for '/boundaries' has methods for the following verbs: get, post */
    (path: "/boundaries"): BoundariesList;
    /** Resource for '/boundaries/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
    (path: "/boundaries/cascade-delete/{jobId}", jobId: string): BoundariesGetCascadeDeleteJobDetails;
    /** Resource for '/farmers/\{farmerId\}/boundaries/\{boundaryId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/boundaries/{boundaryId}", farmerId: string, boundaryId: string): BoundariesGet;
    /** Resource for '/farmers/\{farmerId\}/boundaries/\{boundaryId\}/overlap' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/boundaries/{boundaryId}/overlap", farmerId: string, boundaryId: string): BoundariesGetOverlap;
    /** Resource for '/crops' has methods for the following verbs: get */
    (path: "/crops"): CropsList;
    /** Resource for '/crops/\{cropId\}' has methods for the following verbs: get, patch, delete */
    (path: "/crops/{cropId}", cropId: string): CropsGet;
    /** Resource for '/crops/\{cropId\}/crop-varieties' has methods for the following verbs: get */
    (path: "/crops/{cropId}/crop-varieties", cropId: string): CropVarietiesListByCropId;
    /** Resource for '/crop-varieties' has methods for the following verbs: get */
    (path: "/crop-varieties"): CropVarietiesList;
    /** Resource for '/crops/\{cropId\}/crop-varieties/\{cropVarietyId\}' has methods for the following verbs: get, patch, delete */
    (path: "/crops/{cropId}/crop-varieties/{cropVarietyId}", cropId: string, cropVarietyId: string): CropVarietiesGet;
    /** Resource for '/farmers' has methods for the following verbs: get */
    (path: "/farmers"): FarmersList;
    /** Resource for '/farmers/\{farmerId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}", farmerId: string): FarmersGet;
    /** Resource for '/farmers/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
    (path: "/farmers/cascade-delete/{jobId}", jobId: string): FarmersGetCascadeDeleteJobDetails;
    /** Resource for '/farm-operations/ingest-data/\{jobId\}' has methods for the following verbs: put, get */
    (path: "/farm-operations/ingest-data/{jobId}", jobId: string): FarmOperationsCreateDataIngestionJob;
    /** Resource for '/farmers/\{farmerId\}/farms' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/farms", farmerId: string): FarmsListByFarmerId;
    /** Resource for '/farms' has methods for the following verbs: get */
    (path: "/farms"): FarmsList;
    /** Resource for '/farmers/\{farmerId\}/farms/\{farmId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/farms/{farmId}", farmerId: string, farmId: string): FarmsGet;
    /** Resource for '/farms/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
    (path: "/farms/cascade-delete/{jobId}", jobId: string): FarmsGetCascadeDeleteJobDetails;
    /** Resource for '/farmers/\{farmerId\}/fields' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/fields", farmerId: string): FieldsListByFarmerId;
    /** Resource for '/fields' has methods for the following verbs: get */
    (path: "/fields"): FieldsList;
    /** Resource for '/farmers/\{farmerId\}/fields/\{fieldId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/fields/{fieldId}", farmerId: string, fieldId: string): FieldsGet;
    /** Resource for '/fields/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
    (path: "/fields/cascade-delete/{jobId}", jobId: string): FieldsGetCascadeDeleteJobDetails;
    /** Resource for '/farmers/\{farmerId\}/harvest-data' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/harvest-data", farmerId: string): HarvestDataListByFarmerId;
    /** Resource for '/harvest-data' has methods for the following verbs: get */
    (path: "/harvest-data"): HarvestDataList;
    /** Resource for '/farmers/\{farmerId\}/harvest-data/\{harvestDataId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/harvest-data/{harvestDataId}", farmerId: string, harvestDataId: string): HarvestDataGet;
    /** Resource for '/image-processing/rasterize/\{jobId\}' has methods for the following verbs: put, get */
    (path: "/image-processing/rasterize/{jobId}", jobId: string): ImageProcessingCreateRasterizeJob;
    /** Resource for '/oauth/providers' has methods for the following verbs: get */
    (path: "/oauth/providers"): OAuthProvidersList;
    /** Resource for '/oauth/providers/\{oauthProviderId\}' has methods for the following verbs: get, patch, delete */
    (path: "/oauth/providers/{oauthProviderId}", oauthProviderId: string): OAuthProvidersGet;
    /** Resource for '/oauth/tokens' has methods for the following verbs: get */
    (path: "/oauth/tokens"): OAuthTokensList;
    /** Resource for '/oauth/tokens/:connect' has methods for the following verbs: post */
    (path: "/oauth/tokens/:connect"): OAuthTokensGetOAuthConnectionLink;
    /** Resource for '/oauth/tokens/remove/\{jobId\}' has methods for the following verbs: get, put */
    (path: "/oauth/tokens/remove/{jobId}", jobId: string): OAuthTokensGetCascadeDeleteJobDetails;
    /** Resource for '/farmers/\{farmerId\}/planting-data' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/planting-data", farmerId: string): PlantingDataListByFarmerId;
    /** Resource for '/planting-data' has methods for the following verbs: get */
    (path: "/planting-data"): PlantingDataList;
    /** Resource for '/farmers/\{farmerId\}/planting-data/\{plantingDataId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/planting-data/{plantingDataId}", farmerId: string, plantingDataId: string): PlantingDataGet;
    /** Resource for '/scenes' has methods for the following verbs: get */
    (path: "/scenes"): ScenesList;
    /** Resource for '/scenes/satellite/ingest-data/\{jobId\}' has methods for the following verbs: put, get */
    (path: "/scenes/satellite/ingest-data/{jobId}", jobId: string): ScenesCreateSatelliteDataIngestionJob;
    /** Resource for '/scenes/downloadFiles' has methods for the following verbs: get */
    (path: "/scenes/downloadFiles"): ScenesDownload;
    /** Resource for '/farmers/\{farmerId\}/seasonal-fields' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/seasonal-fields", farmerId: string): SeasonalFieldsListByFarmerId;
    /** Resource for '/seasonal-fields' has methods for the following verbs: get */
    (path: "/seasonal-fields"): SeasonalFieldsList;
    /** Resource for '/farmers/\{farmerId\}/seasonal-fields/\{seasonalFieldId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/seasonal-fields/{seasonalFieldId}", farmerId: string, seasonalFieldId: string): SeasonalFieldsGet;
    /** Resource for '/seasonal-fields/cascade-delete/\{jobId\}' has methods for the following verbs: get, put */
    (path: "/seasonal-fields/cascade-delete/{jobId}", jobId: string): SeasonalFieldsGetCascadeDeleteJobDetails;
    /** Resource for '/seasons' has methods for the following verbs: get */
    (path: "/seasons"): SeasonsList;
    /** Resource for '/seasons/\{seasonId\}' has methods for the following verbs: get, patch, delete */
    (path: "/seasons/{seasonId}", seasonId: string): SeasonsGet;
    /** Resource for '/farmers/\{farmerId\}/tillage-data' has methods for the following verbs: get */
    (path: "/farmers/{farmerId}/tillage-data", farmerId: string): TillageDataListByFarmerId;
    /** Resource for '/tillage-data' has methods for the following verbs: get */
    (path: "/tillage-data"): TillageDataList;
    /** Resource for '/farmers/\{farmerId\}/tillage-data/\{tillageDataId\}' has methods for the following verbs: get, patch, delete */
    (path: "/farmers/{farmerId}/tillage-data/{tillageDataId}", farmerId: string, tillageDataId: string): TillageDataGet;
    /** Resource for '/weather' has methods for the following verbs: get */
    (path: "/weather"): WeatherList;
    /** Resource for '/weather/ingest-data/\{jobId\}' has methods for the following verbs: get, put */
    (path: "/weather/ingest-data/{jobId}", jobId: string): WeatherGetDataIngestionJobDetails;
    /** Resource for '/weather/delete-data/\{jobId\}' has methods for the following verbs: get, put */
    (path: "/weather/delete-data/{jobId}", jobId: string): WeatherGetDataDeleteJobDetails;
}

export declare interface SatelliteData {
    /** List of ImageNames. */
    imageNames?: Array<string>;
    /** List of ImageFormats. Available value: TIF. */
    imageFormats?: Array<string>;
    /** List of ImageResolutions in meters. Available values: 10, 20, 60. */
    imageResolutions?: Array<number>;
}

export declare interface SatelliteDataIngestionJob {
    /** Farmer ID. */
    farmerId: string;
    /** The id of the boundary object for which satellite data is being fetched. */
    boundaryId: string;
    /** Start Date. */
    startDateTime: Date;
    /** End Date. */
    endDateTime: Date;
    /** Provider of satellite data. */
    provider?: "Microsoft";
    /** Source of satellite data. */
    source?: "Sentinel_2_L2A";
    /** Data Model for SatelliteIngestionJobRequest. */
    data?: SatelliteData;
    /** Unique job id. */
    id?: string;
    /**
     * Status of the job.
     * Possible values: 'Waiting', 'Running', 'Succeeded', 'Failed', 'Cancelled'.
     */
    status?: string;
    /** Duration of the job in seconds. */
    durationInSeconds?: number;
    /** Status message to capture more details of the job. */
    message?: string;
    /** Job created at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Job was last acted upon at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    lastActionDateTime?: Date;
    /** Job start time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startTime?: Date;
    /** Job end time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface Scene {
    /** Date-time of the scene, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    sceneDateTime?: Date;
    /** Data provider of the scene. */
    provider?: string;
    /** Data source of the scene. */
    source?: string;
    /** Collection of image files. */
    imageFiles?: Array<ImageFile>;
    /** Supported image formats for scene resource. */
    imageFormat?: "TIF";
    /** Cloud cover percentage of the scene. */
    cloudCoverPercentage?: number;
    /** Dark pixel percentage of the scene. */
    darkPixelPercentage?: number;
    /** Median of NDVI of the scene. */
    ndviMedianValue?: number;
    /** Boundary ID which belongs to the scene. */
    boundaryId?: string;
    /** Farmer ID which belongs to the scene. */
    farmerId?: string;
    /** Unique scene resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
}

export declare interface SceneListResponse {
    /** List of requested objects. */
    value?: Array<Scene>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

export declare interface ScenesCreateSatelliteDataIngestionJob {
    /** Create a satellite data ingestion job. */
    put(options?: ScenesCreateSatelliteDataIngestionJobParameters): Promise<ScenesCreateSatelliteDataIngestionJob202Response | ScenesCreateSatelliteDataIngestionJobdefaultResponse>;
    /** Get a satellite data ingestion job. */
    get(options?: ScenesGetSatelliteDataIngestionJobDetailsParameters): Promise<ScenesGetSatelliteDataIngestionJobDetails200Response | ScenesGetSatelliteDataIngestionJobDetailsdefaultResponse>;
}

/** Create a satellite data ingestion job. */
export declare interface ScenesCreateSatelliteDataIngestionJob202Response extends HttpResponse {
    status: "202";
    body: SatelliteDataIngestionJob;
}

export declare interface ScenesCreateSatelliteDataIngestionJobBodyParam {
    /** Job parameters supplied by user. */
    body?: SatelliteDataIngestionJob;
}

/** Create a satellite data ingestion job. */
export declare interface ScenesCreateSatelliteDataIngestionJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ScenesCreateSatelliteDataIngestionJobParameters = ScenesCreateSatelliteDataIngestionJobBodyParam & RequestParameters;

export declare interface ScenesDownload {
    /** Downloads and returns file stream as response for the given input filePath. */
    get(options: ScenesDownloadParameters): Promise<ScenesDownload200Response | ScenesDownloaddefaultResponse>;
}

/** Downloads and returns file stream as response for the given input filePath. */
export declare interface ScenesDownload200Response extends HttpResponse {
    status: "200";
    body: Record<string, unknown>;
}

/** Downloads and returns file stream as response for the given input filePath. */
export declare interface ScenesDownloaddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ScenesDownloadParameters = ScenesDownloadQueryParam & RequestParameters;

export declare interface ScenesDownloadQueryParam {
    queryParameters: ScenesDownloadQueryParamProperties;
}

export declare interface ScenesDownloadQueryParamProperties {
    /** cloud storage path of scene file. */
    filePath: string;
}

/** Get a satellite data ingestion job. */
export declare interface ScenesGetSatelliteDataIngestionJobDetails200Response extends HttpResponse {
    status: "200";
    body: SatelliteDataIngestionJob;
}

/** Get a satellite data ingestion job. */
export declare interface ScenesGetSatelliteDataIngestionJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ScenesGetSatelliteDataIngestionJobDetailsParameters = RequestParameters;

export declare interface ScenesList {
    /** Returns a paginated list of scene resources. */
    get(options: ScenesListParameters): Promise<ScenesList200Response | ScenesListdefaultResponse>;
}

/** Returns a paginated list of scene resources. */
export declare interface ScenesList200Response extends HttpResponse {
    status: "200";
    body: SceneListResponse;
}

/** Returns a paginated list of scene resources. */
export declare interface ScenesListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type ScenesListParameters = ScenesListQueryParam & RequestParameters;

export declare interface ScenesListQueryParam {
    queryParameters: ScenesListQueryParamProperties;
}

export declare interface ScenesListQueryParamProperties {
    /** Provider name of scene data. */
    provider: string;
    /** FarmerId. */
    farmerId: string;
    /** BoundaryId. */
    boundaryId: string;
    /** Source name of scene data, default value Sentinel_2_L2A (Sentinel 2 L2A). */
    source?: string;
    /** Scene start UTC datetime (inclusive), sample format: yyyy-MM-ddThh:mm:ssZ. */
    startDateTime?: Date;
    /** Scene end UTC datetime (inclusive), sample format: yyyy-MM-dThh:mm:ssZ. */
    endDateTime?: Date;
    /** Filter scenes with cloud coverage percentage less than max value. Range [0 to 100.0]. */
    maxCloudCoveragePercentage?: number;
    /** Filter scenes with dark pixel coverage percentage less than max value. Range [0 to 100.0]. */
    maxDarkPixelCoveragePercentage?: number;
    /** List of image names to be filtered. */
    imageNames?: Array<string>;
    /** List of image resolutions in meters to be filtered. */
    imageResolutions?: Array<number>;
    /** List of image formats to be filtered. */
    imageFormats?: Array<string>;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface SearchBoundaryQuery {
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
    /** Is the boundary primary. */
    isPrimary?: boolean;
    /** Type of the parent it belongs to. */
    parentType?: string;
    /** Parent Ids of the resource. */
    parentIds?: Array<string>;
    /** Minimum acreage of the boundary (inclusive). */
    minAcreage?: number;
    /** Maximum acreage of the boundary (inclusive). */
    maxAcreage?: number;
    /** GeoJSON abstract class. */
    intersectsWithGeometry?: GeoJsonObject;
}

export declare interface Season {
    /** Season start datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startDateTime?: Date;
    /** Season end datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endDateTime?: Date;
    /** Season year. */
    year?: number;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface SeasonalField {
    /** Farmer ID. */
    farmerId?: string;
    /** Primary boundary id. */
    primaryBoundaryId?: string;
    /** Boundary Ids. */
    boundaryIds?: Array<string>;
    /** ID of the associated Farm. */
    farmId?: string;
    /** ID of the associated Field. */
    fieldId?: string;
    /** ID of the season it belongs to. */
    seasonId?: string;
    /** CropVariety ids. */
    cropVarietyIds?: Array<string>;
    /** ID of the crop it belongs to. */
    cropId?: string;
    /** Average yield value of the seasonal field. */
    avgYieldValue?: number;
    /** Unit of the average yield value attribute. */
    avgYieldUnit?: string;
    /** Average seed population value of the seasonal field. */
    avgSeedPopulationValue?: number;
    /** Unit of average seed population value attribute. */
    avgSeedPopulationUnit?: string;
    /** Planting datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    plantingDateTime?: Date;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface SeasonalFieldListResponse {
    /** List of requested objects. */
    value?: Array<SeasonalField>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Create a cascade delete job for specified seasonal field. */
export declare interface SeasonalFieldsCreateCascadeDeleteJob202Response extends HttpResponse {
    status: "202";
    body: CascadeDeleteJob;
}

/** Create a cascade delete job for specified seasonal field. */
export declare interface SeasonalFieldsCreateCascadeDeleteJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonalFieldsCreateCascadeDeleteJobParameters = SeasonalFieldsCreateCascadeDeleteJobQueryParam & RequestParameters;

export declare interface SeasonalFieldsCreateCascadeDeleteJobQueryParam {
    queryParameters: SeasonalFieldsCreateCascadeDeleteJobQueryParamProperties;
}

export declare interface SeasonalFieldsCreateCascadeDeleteJobQueryParamProperties {
    /** ID of the associated farmer. */
    farmerId: string;
    /** ID of the seasonalField to be deleted. */
    seasonalFieldId: string;
}

/** Creates or Updates a seasonal field resource under a particular farmer. */
export declare interface SeasonalFieldsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: SeasonalField;
}

/** Creates or Updates a seasonal field resource under a particular farmer. */
export declare interface SeasonalFieldsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: SeasonalField;
}

export declare interface SeasonalFieldsCreateOrUpdateBodyParam {
    /** Seasonal field resource payload to create or update. */
    body?: SeasonalField;
}

/** Creates or Updates a seasonal field resource under a particular farmer. */
export declare interface SeasonalFieldsCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonalFieldsCreateOrUpdateParameters = SeasonalFieldsCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified seasonal-field resource under a particular farmer. */
export declare interface SeasonalFieldsDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified seasonal-field resource under a particular farmer. */
export declare interface SeasonalFieldsDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonalFieldsDeleteParameters = RequestParameters;

export declare interface SeasonalFieldsGet {
    /** Gets a specified seasonal field resource under a particular farmer. */
    get(options?: SeasonalFieldsGetParameters): Promise<SeasonalFieldsGet200Response | SeasonalFieldsGetdefaultResponse>;
    /** Creates or Updates a seasonal field resource under a particular farmer. */
    patch(options?: SeasonalFieldsCreateOrUpdateParameters): Promise<SeasonalFieldsCreateOrUpdate200Response | SeasonalFieldsCreateOrUpdate201Response | SeasonalFieldsCreateOrUpdatedefaultResponse>;
    /** Deletes a specified seasonal-field resource under a particular farmer. */
    delete(options?: SeasonalFieldsDeleteParameters): Promise<SeasonalFieldsDelete204Response | SeasonalFieldsDeletedefaultResponse>;
}

/** Gets a specified seasonal field resource under a particular farmer. */
export declare interface SeasonalFieldsGet200Response extends HttpResponse {
    status: "200";
    body: SeasonalField;
}

export declare interface SeasonalFieldsGetCascadeDeleteJobDetails {
    /** Get cascade delete job for specified seasonal field. */
    get(options?: SeasonalFieldsGetCascadeDeleteJobDetailsParameters): Promise<SeasonalFieldsGetCascadeDeleteJobDetails200Response | SeasonalFieldsGetCascadeDeleteJobDetailsdefaultResponse>;
    /** Create a cascade delete job for specified seasonal field. */
    put(options: SeasonalFieldsCreateCascadeDeleteJobParameters): Promise<SeasonalFieldsCreateCascadeDeleteJob202Response | SeasonalFieldsCreateCascadeDeleteJobdefaultResponse>;
}

/** Get cascade delete job for specified seasonal field. */
export declare interface SeasonalFieldsGetCascadeDeleteJobDetails200Response extends HttpResponse {
    status: "200";
    body: CascadeDeleteJob;
}

/** Get cascade delete job for specified seasonal field. */
export declare interface SeasonalFieldsGetCascadeDeleteJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonalFieldsGetCascadeDeleteJobDetailsParameters = RequestParameters;

/** Gets a specified seasonal field resource under a particular farmer. */
export declare interface SeasonalFieldsGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonalFieldsGetParameters = RequestParameters;

export declare interface SeasonalFieldsList {
    /** Returns a paginated list of seasonal field resources across all farmers. */
    get(options?: SeasonalFieldsListParameters): Promise<SeasonalFieldsList200Response | SeasonalFieldsListdefaultResponse>;
}

/** Returns a paginated list of seasonal field resources across all farmers. */
export declare interface SeasonalFieldsList200Response extends HttpResponse {
    status: "200";
    body: SeasonalFieldListResponse;
}

export declare interface SeasonalFieldsListByFarmerId {
    /** Returns a paginated list of seasonal field resources under a particular farmer. */
    get(options?: SeasonalFieldsListByFarmerIdParameters): Promise<SeasonalFieldsListByFarmerId200Response | SeasonalFieldsListByFarmerIddefaultResponse>;
}

/** Returns a paginated list of seasonal field resources under a particular farmer. */
export declare interface SeasonalFieldsListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: SeasonalFieldListResponse;
}

/** Returns a paginated list of seasonal field resources under a particular farmer. */
export declare interface SeasonalFieldsListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonalFieldsListByFarmerIdParameters = SeasonalFieldsListByFarmerIdQueryParam & RequestParameters;

export declare interface SeasonalFieldsListByFarmerIdQueryParam {
    queryParameters?: SeasonalFieldsListByFarmerIdQueryParamProperties;
}

export declare interface SeasonalFieldsListByFarmerIdQueryParamProperties {
    /** Farm Ids of the resource. */
    farmIds?: Array<string>;
    /** Field Ids of the resource. */
    fieldIds?: Array<string>;
    /** Season Ids of the resource. */
    seasonIds?: Array<string>;
    /** CropVarietyIds of the resource. */
    cropVarietyIds?: Array<string>;
    /** Ids of the crop it belongs to. */
    cropIds?: Array<string>;
    /** Minimum average yield value of the seasonal field(inclusive). */
    minAvgYieldValue?: number;
    /** Maximum average yield value of the seasonal field(inclusive). */
    maxAvgYieldValue?: number;
    /** Unit of the average yield value attribute. */
    avgYieldUnit?: string;
    /** Minimum average seed population value of the seasonal field(inclusive). */
    minAvgSeedPopulationValue?: number;
    /** Maximum average seed population value of the seasonal field(inclusive). */
    maxAvgSeedPopulationValue?: number;
    /** Unit of average seed population value attribute. */
    avgSeedPopulationUnit?: string;
    /** Minimum planting datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    minPlantingDateTime?: Date;
    /** Maximum planting datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    maxPlantingDateTime?: Date;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of seasonal field resources across all farmers. */
export declare interface SeasonalFieldsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonalFieldsListParameters = SeasonalFieldsListQueryParam & RequestParameters;

export declare interface SeasonalFieldsListQueryParam {
    queryParameters?: SeasonalFieldsListQueryParamProperties;
}

export declare interface SeasonalFieldsListQueryParamProperties {
    /** Farm Ids of the resource. */
    farmIds?: Array<string>;
    /** Field Ids of the resource. */
    fieldIds?: Array<string>;
    /** Season Ids of the resource. */
    seasonIds?: Array<string>;
    /** CropVarietyIds of the resource. */
    cropVarietyIds?: Array<string>;
    /** Ids of the crop it belongs to. */
    cropIds?: Array<string>;
    /** Minimum average yield value of the seasonal field(inclusive). */
    minAvgYieldValue?: number;
    /** Maximum average yield value of the seasonal field(inclusive). */
    maxAvgYieldValue?: number;
    /** Unit of the average yield value attribute. */
    avgYieldUnit?: string;
    /** Minimum average seed population value of the seasonal field(inclusive). */
    minAvgSeedPopulationValue?: number;
    /** Maximum average seed population value of the seasonal field(inclusive). */
    maxAvgSeedPopulationValue?: number;
    /** Unit of average seed population value attribute. */
    avgSeedPopulationUnit?: string;
    /** Minimum planting datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    minPlantingDateTime?: Date;
    /** Maximum planting datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    maxPlantingDateTime?: Date;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface SeasonListResponse {
    /** List of requested objects. */
    value?: Array<Season>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Creates or updates a season resource. */
export declare interface SeasonsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: Season;
}

/** Creates or updates a season resource. */
export declare interface SeasonsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: Season;
}

export declare interface SeasonsCreateOrUpdateBodyParam {
    /** Season resource payload to create or update. */
    body?: Season;
}

/** Creates or updates a season resource. */
export declare interface SeasonsCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonsCreateOrUpdateParameters = SeasonsCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified season resource. */
export declare interface SeasonsDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified season resource. */
export declare interface SeasonsDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonsDeleteParameters = RequestParameters;

export declare interface SeasonsGet {
    /** Gets a specified season resource. */
    get(options?: SeasonsGetParameters): Promise<SeasonsGet200Response | SeasonsGetdefaultResponse>;
    /** Creates or updates a season resource. */
    patch(options?: SeasonsCreateOrUpdateParameters): Promise<SeasonsCreateOrUpdate200Response | SeasonsCreateOrUpdate201Response | SeasonsCreateOrUpdatedefaultResponse>;
    /** Deletes a specified season resource. */
    delete(options?: SeasonsDeleteParameters): Promise<SeasonsDelete204Response | SeasonsDeletedefaultResponse>;
}

/** Gets a specified season resource. */
export declare interface SeasonsGet200Response extends HttpResponse {
    status: "200";
    body: Season;
}

/** Gets a specified season resource. */
export declare interface SeasonsGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonsGetParameters = RequestParameters;

export declare interface SeasonsList {
    /** Returns a paginated list of season resources. */
    get(options?: SeasonsListParameters): Promise<SeasonsList200Response | SeasonsListdefaultResponse>;
}

/** Returns a paginated list of season resources. */
export declare interface SeasonsList200Response extends HttpResponse {
    status: "200";
    body: SeasonListResponse;
}

/** Returns a paginated list of season resources. */
export declare interface SeasonsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type SeasonsListParameters = SeasonsListQueryParam & RequestParameters;

export declare interface SeasonsListQueryParam {
    queryParameters?: SeasonsListQueryParamProperties;
}

export declare interface SeasonsListQueryParamProperties {
    /** Minimum season start datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    minStartDateTime?: Date;
    /** Maximum season start datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    maxStartDateTime?: Date;
    /** Minimum season end datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    minEndDateTime?: Date;
    /** Maximum season end datetime, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    maxEndDateTime?: Date;
    /** Years of the resource. */
    years?: Array<number>;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface TillageData {
    /** Schema for storing measurement reading and unit. */
    tillageDepth?: Measure;
    /** Schema for storing measurement reading and unit. */
    tillagePressure?: Measure;
    /** Schema for storing measurement reading and unit. */
    area?: Measure;
    /** Source of the operation data. */
    source?: string;
    /**
     * Modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ.
     * Note: this will be specified by the source provider itself.
     */
    operationModifiedDateTime?: Date;
    /** Start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    operationStartDateTime?: Date;
    /** End date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    operationEndDateTime?: Date;
    /** Link for attachments. */
    attachmentsLink?: string;
    /** Optional boundary ID of the field for which operation was applied. */
    associatedBoundaryId?: string;
    /** Optional boundary ID of the actual area for which operation was applied inside the specified field. */
    operationBoundaryId?: string;
    /** Farmer ID which belongs to the operation data. */
    farmerId?: string;
    /** Unique resource ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Status of the resource. */
    status?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

/** Creates or updates an tillage data resource under a particular farmer. */
export declare interface TillageDataCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: TillageData;
}

/** Creates or updates an tillage data resource under a particular farmer. */
export declare interface TillageDataCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: TillageData;
}

export declare interface TillageDataCreateOrUpdateBodyParam {
    /** Tillage data resource payload to create or update. */
    body?: TillageData;
}

/** Creates or updates an tillage data resource under a particular farmer. */
export declare interface TillageDataCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type TillageDataCreateOrUpdateParameters = TillageDataCreateOrUpdateBodyParam & RequestParameters;

/** Deletes a specified tillage data resource under a particular farmer. */
export declare interface TillageDataDelete204Response extends HttpResponse {
    status: "204";
    body: Record<string, unknown>;
}

/** Deletes a specified tillage data resource under a particular farmer. */
export declare interface TillageDataDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type TillageDataDeleteParameters = RequestParameters;

export declare interface TillageDataGet {
    /** Get a specified tillage data resource under a particular farmer. */
    get(options?: TillageDataGetParameters): Promise<TillageDataGet200Response | TillageDataGetdefaultResponse>;
    /** Creates or updates an tillage data resource under a particular farmer. */
    patch(options?: TillageDataCreateOrUpdateParameters): Promise<TillageDataCreateOrUpdate200Response | TillageDataCreateOrUpdate201Response | TillageDataCreateOrUpdatedefaultResponse>;
    /** Deletes a specified tillage data resource under a particular farmer. */
    delete(options?: TillageDataDeleteParameters): Promise<TillageDataDelete204Response | TillageDataDeletedefaultResponse>;
}

/** Get a specified tillage data resource under a particular farmer. */
export declare interface TillageDataGet200Response extends HttpResponse {
    status: "200";
    body: TillageData;
}

/** Get a specified tillage data resource under a particular farmer. */
export declare interface TillageDataGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type TillageDataGetParameters = RequestParameters;

export declare interface TillageDataList {
    /** Returns a paginated list of tillage data resources across all farmers. */
    get(options?: TillageDataListParameters): Promise<TillageDataList200Response | TillageDataListdefaultResponse>;
}

/** Returns a paginated list of tillage data resources across all farmers. */
export declare interface TillageDataList200Response extends HttpResponse {
    status: "200";
    body: TillageDataListResponse;
}

export declare interface TillageDataListByFarmerId {
    /** Returns a paginated list of tillage data resources under a particular farm. */
    get(options?: TillageDataListByFarmerIdParameters): Promise<TillageDataListByFarmerId200Response | TillageDataListByFarmerIddefaultResponse>;
}

/** Returns a paginated list of tillage data resources under a particular farm. */
export declare interface TillageDataListByFarmerId200Response extends HttpResponse {
    status: "200";
    body: TillageDataListResponse;
}

/** Returns a paginated list of tillage data resources under a particular farm. */
export declare interface TillageDataListByFarmerIddefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type TillageDataListByFarmerIdParameters = TillageDataListByFarmerIdQueryParam & RequestParameters;

export declare interface TillageDataListByFarmerIdQueryParam {
    queryParameters?: TillageDataListByFarmerIdQueryParamProperties;
}

export declare interface TillageDataListByFarmerIdQueryParamProperties {
    /** Minimum measured tillage depth (inclusive). */
    minTillageDepth?: number;
    /** Maximum measured tillage depth (inclusive). */
    maxTillageDepth?: number;
    /** Minimum pressure applied by a tillage implement (inclusive). */
    minTillagePressure?: number;
    /** Maximum pressure applied by a tillage implement (inclusive). */
    maxTillagePressure?: number;
    /** Sources of the operation data. */
    sources?: Array<string>;
    /** Boundary IDs associated with operation data. */
    associatedBoundaryIds?: Array<string>;
    /** Operation boundary IDs associated with operation data. */
    operationBoundaryIds?: Array<string>;
    /** Minimum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationStartDateTime?: Date;
    /** Maximum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationStartDateTime?: Date;
    /** Minimum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationEndDateTime?: Date;
    /** Maximum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationEndDateTime?: Date;
    /** Minimum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationModifiedDateTime?: Date;
    /** Maximum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationModifiedDateTime?: Date;
    /** Minimum area for which operation was applied (inclusive). */
    minArea?: number;
    /** Maximum area for which operation was applied (inclusive). */
    maxArea?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

/** Returns a paginated list of tillage data resources across all farmers. */
export declare interface TillageDataListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type TillageDataListParameters = TillageDataListQueryParam & RequestParameters;

export declare interface TillageDataListQueryParam {
    queryParameters?: TillageDataListQueryParamProperties;
}

export declare interface TillageDataListQueryParamProperties {
    /** Minimum measured tillage depth (inclusive). */
    minTillageDepth?: number;
    /** Maximum measured tillage depth (inclusive). */
    maxTillageDepth?: number;
    /** Minimum pressure applied by a tillage implement (inclusive). */
    minTillagePressure?: number;
    /** Maximum pressure applied by a tillage implement (inclusive). */
    maxTillagePressure?: number;
    /** Sources of the operation data. */
    sources?: Array<string>;
    /** Boundary IDs associated with operation data. */
    associatedBoundaryIds?: Array<string>;
    /** Operation boundary IDs associated with operation data. */
    operationBoundaryIds?: Array<string>;
    /** Minimum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationStartDateTime?: Date;
    /** Maximum start date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationStartDateTime?: Date;
    /** Minimum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationEndDateTime?: Date;
    /** Maximum end date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationEndDateTime?: Date;
    /** Minimum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    minOperationModifiedDateTime?: Date;
    /** Maximum modified date-time of the operation data, sample format: yyyy-MM-ddTHH:mm:ssZ (inclusive). */
    maxOperationModifiedDateTime?: Date;
    /** Minimum area for which operation was applied (inclusive). */
    minArea?: number;
    /** Maximum area for which operation was applied (inclusive). */
    maxArea?: number;
    /** Ids of the resource. */
    ids?: Array<string>;
    /** Names of the resource. */
    names?: Array<string>;
    /**
     * Filters on key-value pairs within the Properties object.
     * eg. "{testKey} eq {testValue}".
     */
    propertyFilters?: Array<string>;
    /** Statuses of the resource. */
    statuses?: Array<string>;
    /** Minimum creation date of resource (inclusive). */
    minCreatedDateTime?: Date;
    /** Maximum creation date of resource (inclusive). */
    maxCreatedDateTime?: Date;
    /** Minimum last modified date of resource (inclusive). */
    minLastModifiedDateTime?: Date;
    /** Maximum last modified date of resource (inclusive). */
    maxLastModifiedDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export declare interface TillageDataListResponse {
    /** List of requested objects. */
    value?: Array<TillageData>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

/** Create a weather data delete job. */
export declare interface WeatherCreateDataDeleteJob202Response extends HttpResponse {
    status: "202";
    body: WeatherDataDeleteJob;
}

export declare interface WeatherCreateDataDeleteJobBodyParam {
    /** Job parameters supplied by user. */
    body?: WeatherDataDeleteJob;
}

/** Create a weather data delete job. */
export declare interface WeatherCreateDataDeleteJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type WeatherCreateDataDeleteJobParameters = WeatherCreateDataDeleteJobBodyParam & RequestParameters;

/** Create a weather data ingestion job. */
export declare interface WeatherCreateDataIngestionJob202Response extends HttpResponse {
    status: "202";
    body: WeatherDataIngestionJob;
}

export declare interface WeatherCreateDataIngestionJobBodyParam {
    /** Job parameters supplied by user. */
    body?: WeatherDataIngestionJob;
}

/** Create a weather data ingestion job. */
export declare interface WeatherCreateDataIngestionJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type WeatherCreateDataIngestionJobParameters = WeatherCreateDataIngestionJobBodyParam & RequestParameters;

export declare interface WeatherData {
    /** Farmer ID. */
    farmerId: string;
    /** Boundary ID. */
    boundaryId: string;
    /** ID of the weather extension. */
    extensionId: string;
    /** Location model class. */
    location: Location_2;
    /** Date-time of the weather data, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    dateTime: Date;
    /** Unit System like US/SI etc. */
    unitSystemCode?: string;
    /** Version of the weather data extension. */
    extensionVersion: string;
    /** Type of weather data (forecast/historical). */
    weatherDataType: string;
    /** Granularity of weather data (daily/hourly). */
    granularity: string;
    /** Schema for storing measurement reading and unit. */
    cloudCover?: Measure;
    /** Schema for storing measurement reading and unit. */
    dewPoint?: Measure;
    /** Schema for storing measurement reading and unit. */
    growingDegreeDay?: Measure;
    /** Schema for storing measurement reading and unit. */
    precipitation?: Measure;
    /** Schema for storing measurement reading and unit. */
    pressure?: Measure;
    /** Schema for storing measurement reading and unit. */
    relativeHumidity?: Measure;
    /** Schema for storing measurement reading and unit. */
    soilMoisture?: Measure;
    /** Schema for storing measurement reading and unit. */
    soilTemperature?: Measure;
    /** Schema for storing measurement reading and unit. */
    temperature?: Measure;
    /** Schema for storing measurement reading and unit. */
    visibility?: Measure;
    /** Schema for storing measurement reading and unit. */
    wetBulbTemperature?: Measure;
    /** Schema for storing measurement reading and unit. */
    windChill?: Measure;
    /** Schema for storing measurement reading and unit. */
    windDirection?: Measure;
    /** Schema for storing measurement reading and unit. */
    windGust?: Measure;
    /** Schema for storing measurement reading and unit. */
    windSpeed?: Measure;
    /** Weather data ID. */
    id?: string;
    /** The ETag value to implement optimistic concurrency. */
    eTag?: string;
    /** Date-time when resource was created, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Date-time when resource was last modified, sample format: yyyy-MM-ddTHH:mm:ssZ. */
    modifiedDateTime?: Date;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface WeatherDataDeleteJob {
    /** ID of the extension to be used for the providerInput. eg. DTN.ClearAg. */
    extensionId: string;
    /** The id of the farmer object for which weather data is being fetched. */
    farmerId: string;
    /** The id of the boundary object for which weather data is being fetched. */
    boundaryId: string;
    /** Type of weather data. Possible values include: 'forecast' , 'historical'. */
    weatherDataType?: string;
    /** Granularity of weather data. Possible values include: 'daily' , 'hourly'. */
    granularity?: string;
    /** Weather data start UTC date-time (inclusive), sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startDateTime?: Date;
    /** Weather data end UTC date-time (inclusive), sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endDateTime?: Date;
    /** Unique job id. */
    id?: string;
    /**
     * Status of the job.
     * Possible values: 'Waiting', 'Running', 'Succeeded', 'Failed', 'Cancelled'.
     */
    status?: string;
    /** Duration of the job in seconds. */
    durationInSeconds?: number;
    /** Status message to capture more details of the job. */
    message?: string;
    /** Job created at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Job was last acted upon at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    lastActionDateTime?: Date;
    /** Job start time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startTime?: Date;
    /** Job end time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface WeatherDataIngestionJob {
    /** The id of the boundary object for which weather data is being fetched. */
    boundaryId: string;
    /** The id of the farmer object for which weather data is being fetched. */
    farmerId: string;
    /** ID of the extension to be used for the providerInput. eg. DTN.ClearAg. */
    extensionId: string;
    /** Extension api name to which request is to be made. */
    extensionApiName: string;
    /** Extension api input dictionary which would be used to feed request query/body/parameter information. */
    extensionApiInput: Record<string, Record<string, unknown>>;
    /** App id of the weather data provider. */
    extensionDataProviderAppId?: string;
    /** Api key of the weather data provider. */
    extensionDataProviderApiKey?: string;
    /** Unique job id. */
    id?: string;
    /**
     * Status of the job.
     * Possible values: 'Waiting', 'Running', 'Succeeded', 'Failed', 'Cancelled'.
     */
    status?: string;
    /** Duration of the job in seconds. */
    durationInSeconds?: number;
    /** Status message to capture more details of the job. */
    message?: string;
    /** Job created at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    createdDateTime?: Date;
    /** Job was last acted upon at dateTime. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    lastActionDateTime?: Date;
    /** Job start time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startTime?: Date;
    /** Job end time when available. Sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endTime?: Date;
    /** Name to identify resource. */
    name?: string;
    /** Textual description of the resource. */
    description?: string;
    /**
     * A collection of key value pairs that belongs to the resource.
     * Each pair must not have a key greater than 50 characters
     * and must not have a value greater than 150 characters.
     * Note: A maximum of 25 key value pairs can be provided for a resource and only string and numeral values are supported.
     */
    properties?: Record<string, Record<string, unknown>>;
}

export declare interface WeatherDataListResponse {
    /** List of requested objects. */
    value?: Array<WeatherData>;
    /** Token used in retrieving the next page. If null, there are no additional pages. */
    $skipToken?: string;
    /** Continuation link (absolute URI) to the next page of results in the list. */
    nextLink?: string;
}

export declare interface WeatherGetDataDeleteJobDetails {
    /** Get weather data delete job. */
    get(options?: WeatherGetDataDeleteJobDetailsParameters): Promise<WeatherGetDataDeleteJobDetails200Response | WeatherGetDataDeleteJobDetailsdefaultResponse>;
    /** Create a weather data delete job. */
    put(options?: WeatherCreateDataDeleteJobParameters): Promise<WeatherCreateDataDeleteJob202Response | WeatherCreateDataDeleteJobdefaultResponse>;
}

/** Get weather data delete job. */
export declare interface WeatherGetDataDeleteJobDetails200Response extends HttpResponse {
    status: "200";
    body: WeatherDataDeleteJob;
}

/** Get weather data delete job. */
export declare interface WeatherGetDataDeleteJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type WeatherGetDataDeleteJobDetailsParameters = RequestParameters;

export declare interface WeatherGetDataIngestionJobDetails {
    /** Get weather ingestion job. */
    get(options?: WeatherGetDataIngestionJobDetailsParameters): Promise<WeatherGetDataIngestionJobDetails200Response | WeatherGetDataIngestionJobDetailsdefaultResponse>;
    /** Create a weather data ingestion job. */
    put(options?: WeatherCreateDataIngestionJobParameters): Promise<WeatherCreateDataIngestionJob202Response | WeatherCreateDataIngestionJobdefaultResponse>;
}

/** Get weather ingestion job. */
export declare interface WeatherGetDataIngestionJobDetails200Response extends HttpResponse {
    status: "200";
    body: WeatherDataIngestionJob;
}

/** Get weather ingestion job. */
export declare interface WeatherGetDataIngestionJobDetailsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type WeatherGetDataIngestionJobDetailsParameters = RequestParameters;

export declare interface WeatherList {
    /** Returns a paginated list of weather data. */
    get(options: WeatherListParameters): Promise<WeatherList200Response | WeatherListdefaultResponse>;
}

/** Returns a paginated list of weather data. */
export declare interface WeatherList200Response extends HttpResponse {
    status: "200";
    body: WeatherDataListResponse;
}

/** Returns a paginated list of weather data. */
export declare interface WeatherListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorResponse;
}

export declare type WeatherListParameters = WeatherListQueryParam & RequestParameters;

export declare interface WeatherListQueryParam {
    queryParameters: WeatherListQueryParamProperties;
}

export declare interface WeatherListQueryParamProperties {
    /** Farmer ID. */
    farmerId: string;
    /** Boundary ID. */
    boundaryId: string;
    /** ID of the weather extension. */
    extensionId: string;
    /** Type of weather data (forecast/historical). */
    weatherDataType: string;
    /** Granularity of weather data (daily/hourly). */
    granularity: string;
    /** Weather data start UTC date-time (inclusive), sample format: yyyy-MM-ddTHH:mm:ssZ. */
    startDateTime?: Date;
    /** Weather data end UTC date-time (inclusive), sample format: yyyy-MM-ddTHH:mm:ssZ. */
    endDateTime?: Date;
    /**
     * Maximum number of items needed (inclusive).
     * Minimum = 10, Maximum = 1000, Default value = 50.
     */
    $maxPageSize?: number;
    /** Skip token for getting next set of results. */
    $skipToken?: string;
}

export { }
