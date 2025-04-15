import * as coreClient from "@azure/core-client";

export interface StorageError {
  message?: string;
}

/** Key information */
export interface KeyInfo {
  /** The date-time the key is active in ISO 8601 UTC time */
  start: string;
  /** The date-time the key expires in ISO 8601 UTC time */
  expiry: string;
}

/** A user delegation key */
export interface UserDelegationKey {
  /** The Azure Active Directory object ID in GUID format. */
  signedOid: string;
  /** The Azure Active Directory tenant ID in GUID format */
  signedTid: string;
  /** The date-time the key is active */
  signedStart: Date;
  /** The date-time the key expires */
  signedExpiry: Date;
  /** Abbreviation of the Azure Storage service that accepts the key */
  signedService: string;
  /** The service version that created the key */
  signedVersion: string;
  /** The key as a base64 string */
  value: string;
}

export interface DataLakeStorageError {
  /** The service error response object. */
  dataLakeStorageErrorDetails?: DataLakeStorageErrorError;
}

/** The service error response object. */
export interface DataLakeStorageErrorError {
  /** The service error code. */
  code?: string;
  /** The service error message. */
  message?: string;
}

/** An Access policy */
export interface AccessPolicy {
  /** the date-time the policy is active */
  start?: Date;
  /** the date-time the policy expires */
  expiry?: Date;
  /** the permissions for the acl policy */
  permission?: string;
}

/** An Azure Storage blob */
export interface BlobItemInternal {
  name: string;
  deleted: boolean;
  snapshot: string;
  versionId?: string;
  isCurrentVersion?: boolean;
  /** Properties of a blob */
  properties: BlobPropertiesInternal;
  metadata?: BlobMetadata;
  /** Blob tags */
  blobTags?: BlobTags;
  /** Dictionary of <string> */
  objectReplicationMetadata?: { [propertyName: string]: string };
}

/** Properties of a blob */
export interface BlobPropertiesInternal {
  creationTime?: Date;
  lastModified: Date;
  etag: string;
  /** Size in bytes */
  contentLength?: number;
  contentType?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  contentMD5?: Uint8Array;
  contentDisposition?: string;
  cacheControl?: string;
  blobSequenceNumber?: number;
  blobType?: BlobType;
  leaseStatus?: LeaseStatusType;
  leaseState?: LeaseStateType;
  leaseDuration?: LeaseDurationType;
  copyId?: string;
  copyStatus?: CopyStatusType;
  copySource?: string;
  copyProgress?: string;
  copyCompletionTime?: Date;
  copyStatusDescription?: string;
  serverEncrypted?: boolean;
  incrementalCopy?: boolean;
  destinationSnapshot?: string;
  deletedTime?: Date;
  remainingRetentionDays?: number;
  accessTier?: AccessTier;
  accessTierInferred?: boolean;
  archiveStatus?: ArchiveStatus;
  customerProvidedKeySha256?: string;
  /** The name of the encryption scope under which the blob is encrypted. */
  encryptionScope?: string;
  accessTierChangeTime?: Date;
  tagCount?: number;
  expiresOn?: Date;
  isSealed?: boolean;
  /** If an object is in rehydrate pending state then this header is returned with priority of rehydrate. Valid values are High and Standard. */
  rehydratePriority?: RehydratePriority;
  lastAccessedOn?: Date;
}

export interface BlobMetadata {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  encrypted?: string;
}

/** Blob tags */
export interface BlobTags {
  blobTagSet: BlobTag[];
}

export interface BlobTag {
  key: string;
  value: string;
}

/** An enumeration of blobs */
export interface ListBlobsFlatSegmentResponse {
  serviceEndpoint: string;
  containerName: string;
  prefix?: string;
  marker?: string;
  maxResults?: number;
  segment: BlobFlatListSegment;
  nextMarker?: string;
}

export interface BlobFlatListSegment {
  blobItems: BlobItemInternal[];
}

/** An enumeration of blobs */
export interface ListBlobsHierarchySegmentResponse {
  serviceEndpoint: string;
  containerName: string;
  prefix?: string;
  marker?: string;
  maxResults?: number;
  delimiter?: string;
  segment: BlobHierarchyListSegment;
  nextMarker?: string;
}

export interface BlobHierarchyListSegment {
  blobPrefixes?: BlobPrefix[];
  blobItems: BlobItemInternal[];
}

export interface BlobPrefix {
  name: string;
}

/** Represents a single block in a block blob.  It describes the block's ID and size. */
export interface Block {
  /** The base64 encoded block ID. */
  name: string;
  /** The block size in bytes. */
  size: number;
}

export interface BlockList {
  committedBlocks?: Block[];
  uncommittedBlocks?: Block[];
}

export interface BlockLookupList {
  committed?: string[];
  uncommitted?: string[];
  latest?: string[];
}

/** An Azure Storage container */
export interface ContainerItem {
  name: string;
  deleted?: boolean;
  version?: string;
  /** Properties of a container */
  properties: ContainerProperties;
  /** Dictionary of <string> */
  metadata?: { [propertyName: string]: string };
}

/** Properties of a container */
export interface ContainerProperties {
  lastModified: Date;
  etag: string;
  leaseStatus?: LeaseStatusType;
  leaseState?: LeaseStateType;
  leaseDuration?: LeaseDurationType;
  publicAccess?: PublicAccessType;
  hasImmutabilityPolicy?: boolean;
  hasLegalHold?: boolean;
  defaultEncryptionScope?: string;
  preventEncryptionScopeOverride?: boolean;
  deletedTime?: Date;
  remainingRetentionDays?: number;
}

/** delimited text configuration */
export interface DelimitedTextConfiguration {
  /** column separator */
  columnSeparator: string;
  /** field quote */
  fieldQuote: string;
  /** record separator */
  recordSeparator: string;
  /** escape char */
  escapeChar: string;
  /** has headers */
  headersPresent: boolean;
}

/** json text configuration */
export interface JsonTextConfiguration {
  /** record separator */
  recordSeparator: string;
}

/** arrow configuration */
export interface ArrowConfiguration {
  schema: ArrowField[];
}

/** field of an arrow schema */
export interface ArrowField {
  type: string;
  name?: string;
  precision?: number;
  scale?: number;
}

/** An enumeration of containers */
export interface ListContainersSegmentResponse {
  serviceEndpoint: string;
  prefix?: string;
  marker?: string;
  maxResults?: number;
  containerItems: ContainerItem[];
  nextMarker?: string;
}

/** CORS is an HTTP feature that enables a web application running under one domain to access resources in another domain. Web browsers implement a security restriction known as same-origin policy that prevents a web page from calling APIs in a different domain; CORS provides a secure way to allow one domain (the origin domain) to call APIs in another domain */
export interface CorsRule {
  /** The origin domains that are permitted to make a request against the storage service via CORS. The origin domain is the domain from which the request originates. Note that the origin must be an exact case-sensitive match with the origin that the user age sends to the service. You can also use the wildcard character '*' to allow all origin domains to make requests via CORS. */
  allowedOrigins: string;
  /** The methods (HTTP request verbs) that the origin domain may use for a CORS request. (comma separated) */
  allowedMethods: string;
  /** the request headers that the origin domain may specify on the CORS request. */
  allowedHeaders: string;
  /** The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer */
  exposedHeaders: string;
  /** The maximum amount time that a browser should cache the preflight OPTIONS request. */
  maxAgeInSeconds: number;
}

/** Blob info from a Filter Blobs API call */
export interface FilterBlobItem {
  name: string;
  containerName: string;
  /** Blob tags */
  tags?: BlobTags;
}

/** The result of a Filter Blobs API call */
export interface FilterBlobSegment {
  serviceEndpoint: string;
  where: string;
  blobs: FilterBlobItem[];
  nextMarker?: string;
}

/** Geo-Replication information for the Secondary Storage Service */
export interface GeoReplication {
  /** The status of the secondary location */
  status: GeoReplicationStatusType;
  /** A GMT date/time value, to the second. All primary writes preceding this value are guaranteed to be available for read operations at the secondary. Primary writes after this point in time may or may not be available for reads. */
  lastSyncTime: Date;
}

/** Azure Analytics Logging settings. */
export interface Logging {
  /** The version of Storage Analytics to configure. */
  version: string;
  /** Indicates whether all delete requests should be logged. */
  delete: boolean;
  /** Indicates whether all read requests should be logged. */
  read: boolean;
  /** Indicates whether all write requests should be logged. */
  write: boolean;
  /** the retention policy which determines how long the associated data should persist */
  retentionPolicy: RetentionPolicy;
}

/** the retention policy which determines how long the associated data should persist */
export interface RetentionPolicy {
  /** Indicates whether a retention policy is enabled for the storage service */
  enabled: boolean;
  /** Indicates the number of days that metrics or logging or soft-deleted data should be retained. All data older than this value will be deleted */
  days?: number;
  /** Indicates whether permanent delete is allowed on this storage account. */
  allowPermanentDelete?: boolean;
}

/** a summary of request statistics grouped by API in hour or minute aggregates for blobs */
export interface Metrics {
  /** The version of Storage Analytics to configure. */
  version?: string;
  /** Indicates whether metrics are enabled for the Blob service. */
  enabled: boolean;
  /** Indicates whether metrics should generate summary statistics for called API operations. */
  includeAPIs?: boolean;
  /** the retention policy which determines how long the associated data should persist */
  retentionPolicy?: RetentionPolicy;
}

/** the list of pages */
export interface PageList {
  pageRange?: PageRange[];
  clearRange?: ClearRange[];
}

export interface PageRange {
  start: number;
  end: number;
}

export interface ClearRange {
  start: number;
  end: number;
}

/** the quick query body */
export interface QueryRequest {
  /** the query type */
  queryType: "SQL";
  /** a query statement */
  expression: string;
  inputSerialization?: QuerySerialization;
  outputSerialization?: QuerySerialization;
}

export interface QuerySerialization {
  format: QueryFormat;
}

export interface QueryFormat {
  /** The quick query format type. */
  type?: QueryFormatType;
  /** delimited text configuration */
  delimitedTextConfiguration?: DelimitedTextConfiguration;
  /** json text configuration */
  jsonTextConfiguration?: JsonTextConfiguration;
  /** arrow configuration */
  arrowConfiguration?: ArrowConfiguration;
}

/** signed identifier */
export interface SignedIdentifier {
  /** a unique id */
  id: string;
  /** An Access policy */
  accessPolicy: AccessPolicy;
}

/** The properties that enable an account to host a static website */
export interface StaticWebsite {
  /** Indicates whether this account is hosting a static website */
  enabled: boolean;
  /** The default name of the index page under each directory */
  indexDocument?: string;
  /** The absolute path of the custom 404 page */
  errorDocument404Path?: string;
  /** Absolute path of the default index page */
  defaultIndexDocumentPath?: string;
}

/** Storage Service Properties. */
export interface StorageServiceProperties {
  /** Azure Analytics Logging settings. */
  logging?: Logging;
  /** a summary of request statistics grouped by API in hour or minute aggregates for blobs */
  hourMetrics?: Metrics;
  /** a summary of request statistics grouped by API in hour or minute aggregates for blobs */
  minuteMetrics?: Metrics;
  /** The set of CORS rules. */
  cors?: CorsRule[];
  /** The default version to use for requests to the Blob service if an incoming request's version is not specified. Possible values include version 2008-10-27 and all more recent versions */
  defaultServiceVersion?: string;
  /** the retention policy which determines how long the associated data should persist */
  deleteRetentionPolicy?: RetentionPolicy;
  /** The properties that enable an account to host a static website */
  staticWebsite?: StaticWebsite;
}

/** Stats for the storage service. */
export interface StorageServiceStats {
  /** Geo-Replication information for the Secondary Storage Service */
  geoReplication?: GeoReplication;
}

/** Defines headers for PageBlob_uploadPages operation. */
export interface PageBlobUploadPagesHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  eTag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** The current sequence number for the page blob. */
  blobSequenceNumber?: number;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the pages. This header is only returned when the pages were encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for PageBlob_uploadPages operation. */
export interface PageBlobUploadPagesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_stageBlock operation. */
export interface BlockBlobStageBlockHeaders {
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  contentMD5?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the block. This header is only returned when the block was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for BlockBlob_stageBlock operation. */
export interface BlockBlobStageBlockExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_upload operation. */
export interface BlockBlobUploadHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  eTag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for BlockBlob_upload operation. */
export interface BlockBlobUploadExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for BlockBlob_putBlobFromUrl operation. */
export interface BlockBlobPutBlobFromUrlHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  eTag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** A DateTime value returned by the service that uniquely identifies the blob. The value of this header indicates the blob version, and may be used in subsequent requests to access this version of the blob. */
  versionId?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the blob. This header is only returned when the blob was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for BlockBlob_putBlobFromUrl operation. */
export interface BlockBlobPutBlobFromUrlExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for AppendBlob_appendBlock operation. */
export interface AppendBlobAppendBlockHeaders {
  /** The ETag contains a value that you can use to perform operations conditionally. If the request version is 2011-08-18 or newer, the ETag value will be in quotes. */
  eTag?: string;
  /** Returns the date and time the container was last modified. Any operation that modifies the blob, including an update of the blob's metadata or properties, changes the last-modified time of the blob. */
  lastModified?: Date;
  /** If the blob has an MD5 hash and this operation is to read the full blob, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** This header is returned so that the client can check for message content integrity. The value of this header is computed by the Blob service; it is not necessarily the same value specified in the request headers. */
  xMsContentCrc64?: Uint8Array;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the Blob service used to execute the request. This header is returned for requests made against version 2009-09-19 and above. */
  version?: string;
  /** UTC date/time value generated by the service that indicates the time at which the response was initiated */
  date?: Date;
  /** This response header is returned only for append operations. It returns the offset at which the block was committed, in bytes. */
  blobAppendOffset?: string;
  /** The number of committed blocks present in the blob. This header is returned only for append blobs. */
  blobCommittedBlockCount?: number;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** The SHA-256 hash of the encryption key used to encrypt the block. This header is only returned when the block was encrypted with a customer-provided key. */
  encryptionKeySha256?: string;
  /** Returns the name of the encryption scope used to encrypt the blob contents and application metadata.  Note that the absence of this header implies use of the default account encryption scope. */
  encryptionScope?: string;
}

/** Defines headers for AppendBlob_appendBlock operation. */
export interface AppendBlobAppendBlockExceptionHeaders {
  errorCode?: string;
}

/** Parameter group */
export interface LeaseAccessConditions {
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  leaseId?: string;
}

/** Parameter group */
export interface CpkInfo {
  /** Optional. Specifies the encryption key to use to encrypt the data provided in the request. If not specified, encryption is performed with the root account encryption key.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionKey?: string;
  /** The SHA-256 hash of the provided encryption key. Must be provided if the x-ms-encryption-key header is provided. */
  encryptionKeySha256?: string;
  /** The algorithm used to produce the encryption key hash. Currently, the only accepted value is "AES256". Must be provided if the x-ms-encryption-key header is provided. */
  encryptionAlgorithm?: "AES256";
}

/** Parameter group */
export interface CpkScopeInfo {
  /** Optional. Version 2019-07-07 and later.  Specifies the name of the encryption scope to use to encrypt the data provided in the request. If not specified, encryption is performed with the default account encryption scope.  For more information, see Encryption at Rest for Azure Storage Services. */
  encryptionScope?: string;
}

/** Parameter group */
export interface SequenceNumberAccessConditions {
  /** Specify this header value to operate only on a blob if it has a sequence number less than or equal to the specified. */
  ifSequenceNumberLessThanOrEqualTo?: number;
  /** Specify this header value to operate only on a blob if it has a sequence number less than the specified. */
  ifSequenceNumberLessThan?: number;
  /** Specify this header value to operate only on a blob if it has the specified sequence number. */
  ifSequenceNumberEqualTo?: number;
}

/** Parameter group */
export interface ModifiedAccessConditions {
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  ifModifiedSince?: Date;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  ifUnmodifiedSince?: Date;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  ifMatch?: string;
  /** Specify an ETag value to operate only on blobs without a matching value. */
  ifNoneMatch?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  ifTags?: string;
}

/** Parameter group */
export interface BlobHttpHeaders {
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  blobContentType?: string;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  blobContentEncoding?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  blobContentLanguage?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  blobContentMD5?: Uint8Array;
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  blobCacheControl?: string;
  /** Optional. Sets the blob's Content-Disposition header. */
  blobContentDisposition?: string;
}

/** Parameter group */
export interface SourceModifiedAccessConditions {
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  sourceIfModifiedSince?: Date;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  sourceIfUnmodifiedSince?: Date;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  sourceIfMatch?: string;
  /** Specify an ETag value to operate only on blobs without a matching value. */
  sourceIfNoneMatch?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  sourceIfTags?: string;
}

/** Parameter group */
export interface AppendPositionAccessConditions {
  /** Optional conditional header. The max length in bytes permitted for the append blob. If the Append Block operation would cause the blob to exceed that limit or if the blob size is already greater than the value specified in this header, the request will fail with MaxBlobSizeConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  maxSize?: number;
  /** Optional conditional header, used only for the Append Block operation. A number indicating the byte offset to compare. Append Block will succeed only if the append position is equal to this number. If it is not, the request will fail with the AppendPositionConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  appendPosition?: number;
}

/** Known values of {@link AccessTier} that the service accepts. */
export enum KnownAccessTier {
  /** P4 */
  P4 = "P4",
  /** P6 */
  P6 = "P6",
  /** P10 */
  P10 = "P10",
  /** P15 */
  P15 = "P15",
  /** P20 */
  P20 = "P20",
  /** P30 */
  P30 = "P30",
  /** P40 */
  P40 = "P40",
  /** P50 */
  P50 = "P50",
  /** P60 */
  P60 = "P60",
  /** P70 */
  P70 = "P70",
  /** P80 */
  P80 = "P80",
  /** Hot */
  Hot = "Hot",
  /** Cool */
  Cool = "Cool",
  /** Archive */
  Archive = "Archive",
}

/**
 * Defines values for AccessTier. \
 * {@link KnownAccessTier} can be used interchangeably with AccessTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P4** \
 * **P6** \
 * **P10** \
 * **P15** \
 * **P20** \
 * **P30** \
 * **P40** \
 * **P50** \
 * **P60** \
 * **P70** \
 * **P80** \
 * **Hot** \
 * **Cool** \
 * **Archive**
 */
export type AccessTier = string;

/** Known values of {@link ArchiveStatus} that the service accepts. */
export enum KnownArchiveStatus {
  /** RehydratePendingToHot */
  RehydratePendingToHot = "rehydrate-pending-to-hot",
  /** RehydratePendingToCool */
  RehydratePendingToCool = "rehydrate-pending-to-cool",
}

/**
 * Defines values for ArchiveStatus. \
 * {@link KnownArchiveStatus} can be used interchangeably with ArchiveStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **rehydrate-pending-to-hot** \
 * **rehydrate-pending-to-cool**
 */
export type ArchiveStatus = string;

/** Known values of {@link RehydratePriority} that the service accepts. */
export enum KnownRehydratePriority {
  /** High */
  High = "High",
  /** Standard */
  Standard = "Standard",
}

/**
 * Defines values for RehydratePriority. \
 * {@link KnownRehydratePriority} can be used interchangeably with RehydratePriority,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **High** \
 * **Standard**
 */
export type RehydratePriority = string;

/** Known values of {@link PublicAccessType} that the service accepts. */
export enum KnownPublicAccessType {
  /** Container */
  Container = "container",
  /** Blob */
  Blob = "blob",
}

/**
 * Defines values for PublicAccessType. \
 * {@link KnownPublicAccessType} can be used interchangeably with PublicAccessType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **container** \
 * **blob**
 */
export type PublicAccessType = string;

/** Known values of {@link GeoReplicationStatusType} that the service accepts. */
export enum KnownGeoReplicationStatusType {
  /** Live */
  Live = "live",
  /** Bootstrap */
  Bootstrap = "bootstrap",
  /** Unavailable */
  Unavailable = "unavailable",
}

/**
 * Defines values for GeoReplicationStatusType. \
 * {@link KnownGeoReplicationStatusType} can be used interchangeably with GeoReplicationStatusType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **live** \
 * **bootstrap** \
 * **unavailable**
 */
export type GeoReplicationStatusType = string;

/** Known values of {@link StorageErrorCode} that the service accepts. */
export enum KnownStorageErrorCode {
  /** AccountAlreadyExists */
  AccountAlreadyExists = "AccountAlreadyExists",
  /** AccountBeingCreated */
  AccountBeingCreated = "AccountBeingCreated",
  /** AccountIsDisabled */
  AccountIsDisabled = "AccountIsDisabled",
  /** AuthenticationFailed */
  AuthenticationFailed = "AuthenticationFailed",
  /** AuthorizationFailure */
  AuthorizationFailure = "AuthorizationFailure",
  /** ConditionHeadersNotSupported */
  ConditionHeadersNotSupported = "ConditionHeadersNotSupported",
  /** ConditionNotMet */
  ConditionNotMet = "ConditionNotMet",
  /** EmptyMetadataKey */
  EmptyMetadataKey = "EmptyMetadataKey",
  /** InsufficientAccountPermissions */
  InsufficientAccountPermissions = "InsufficientAccountPermissions",
  /** InternalError */
  InternalError = "InternalError",
  /** InvalidAuthenticationInfo */
  InvalidAuthenticationInfo = "InvalidAuthenticationInfo",
  /** InvalidHeaderValue */
  InvalidHeaderValue = "InvalidHeaderValue",
  /** InvalidHttpVerb */
  InvalidHttpVerb = "InvalidHttpVerb",
  /** InvalidInput */
  InvalidInput = "InvalidInput",
  /** InvalidMd5 */
  InvalidMd5 = "InvalidMd5",
  /** InvalidMetadata */
  InvalidMetadata = "InvalidMetadata",
  /** InvalidQueryParameterValue */
  InvalidQueryParameterValue = "InvalidQueryParameterValue",
  /** InvalidRange */
  InvalidRange = "InvalidRange",
  /** InvalidResourceName */
  InvalidResourceName = "InvalidResourceName",
  /** InvalidUri */
  InvalidUri = "InvalidUri",
  /** InvalidXmlDocument */
  InvalidXmlDocument = "InvalidXmlDocument",
  /** InvalidXmlNodeValue */
  InvalidXmlNodeValue = "InvalidXmlNodeValue",
  /** Md5Mismatch */
  Md5Mismatch = "Md5Mismatch",
  /** MetadataTooLarge */
  MetadataTooLarge = "MetadataTooLarge",
  /** MissingContentLengthHeader */
  MissingContentLengthHeader = "MissingContentLengthHeader",
  /** MissingRequiredQueryParameter */
  MissingRequiredQueryParameter = "MissingRequiredQueryParameter",
  /** MissingRequiredHeader */
  MissingRequiredHeader = "MissingRequiredHeader",
  /** MissingRequiredXmlNode */
  MissingRequiredXmlNode = "MissingRequiredXmlNode",
  /** MultipleConditionHeadersNotSupported */
  MultipleConditionHeadersNotSupported = "MultipleConditionHeadersNotSupported",
  /** OperationTimedOut */
  OperationTimedOut = "OperationTimedOut",
  /** OutOfRangeInput */
  OutOfRangeInput = "OutOfRangeInput",
  /** OutOfRangeQueryParameterValue */
  OutOfRangeQueryParameterValue = "OutOfRangeQueryParameterValue",
  /** RequestBodyTooLarge */
  RequestBodyTooLarge = "RequestBodyTooLarge",
  /** ResourceTypeMismatch */
  ResourceTypeMismatch = "ResourceTypeMismatch",
  /** RequestUrlFailedToParse */
  RequestUrlFailedToParse = "RequestUrlFailedToParse",
  /** ResourceAlreadyExists */
  ResourceAlreadyExists = "ResourceAlreadyExists",
  /** ResourceNotFound */
  ResourceNotFound = "ResourceNotFound",
  /** ServerBusy */
  ServerBusy = "ServerBusy",
  /** UnsupportedHeader */
  UnsupportedHeader = "UnsupportedHeader",
  /** UnsupportedXmlNode */
  UnsupportedXmlNode = "UnsupportedXmlNode",
  /** UnsupportedQueryParameter */
  UnsupportedQueryParameter = "UnsupportedQueryParameter",
  /** UnsupportedHttpVerb */
  UnsupportedHttpVerb = "UnsupportedHttpVerb",
  /** AppendPositionConditionNotMet */
  AppendPositionConditionNotMet = "AppendPositionConditionNotMet",
  /** BlobAlreadyExists */
  BlobAlreadyExists = "BlobAlreadyExists",
  /** BlobImmutableDueToPolicy */
  BlobImmutableDueToPolicy = "BlobImmutableDueToPolicy",
  /** BlobNotFound */
  BlobNotFound = "BlobNotFound",
  /** BlobOverwritten */
  BlobOverwritten = "BlobOverwritten",
  /** BlobTierInadequateForContentLength */
  BlobTierInadequateForContentLength = "BlobTierInadequateForContentLength",
  /** BlockCountExceedsLimit */
  BlockCountExceedsLimit = "BlockCountExceedsLimit",
  /** BlockListTooLong */
  BlockListTooLong = "BlockListTooLong",
  /** CannotChangeToLowerTier */
  CannotChangeToLowerTier = "CannotChangeToLowerTier",
  /** CannotVerifyCopySource */
  CannotVerifyCopySource = "CannotVerifyCopySource",
  /** ContainerAlreadyExists */
  ContainerAlreadyExists = "ContainerAlreadyExists",
  /** ContainerBeingDeleted */
  ContainerBeingDeleted = "ContainerBeingDeleted",
  /** ContainerDisabled */
  ContainerDisabled = "ContainerDisabled",
  /** ContainerNotFound */
  ContainerNotFound = "ContainerNotFound",
  /** ContentLengthLargerThanTierLimit */
  ContentLengthLargerThanTierLimit = "ContentLengthLargerThanTierLimit",
  /** CopyAcrossAccountsNotSupported */
  CopyAcrossAccountsNotSupported = "CopyAcrossAccountsNotSupported",
  /** CopyIdMismatch */
  CopyIdMismatch = "CopyIdMismatch",
  /** FeatureVersionMismatch */
  FeatureVersionMismatch = "FeatureVersionMismatch",
  /** IncrementalCopyBlobMismatch */
  IncrementalCopyBlobMismatch = "IncrementalCopyBlobMismatch",
  /** IncrementalCopyOfEralierVersionSnapshotNotAllowed */
  IncrementalCopyOfEralierVersionSnapshotNotAllowed = "IncrementalCopyOfEralierVersionSnapshotNotAllowed",
  /** IncrementalCopySourceMustBeSnapshot */
  IncrementalCopySourceMustBeSnapshot = "IncrementalCopySourceMustBeSnapshot",
  /** InfiniteLeaseDurationRequired */
  InfiniteLeaseDurationRequired = "InfiniteLeaseDurationRequired",
  /** InvalidBlobOrBlock */
  InvalidBlobOrBlock = "InvalidBlobOrBlock",
  /** InvalidBlobTier */
  InvalidBlobTier = "InvalidBlobTier",
  /** InvalidBlobType */
  InvalidBlobType = "InvalidBlobType",
  /** InvalidBlockId */
  InvalidBlockId = "InvalidBlockId",
  /** InvalidBlockList */
  InvalidBlockList = "InvalidBlockList",
  /** InvalidOperation */
  InvalidOperation = "InvalidOperation",
  /** InvalidPageRange */
  InvalidPageRange = "InvalidPageRange",
  /** InvalidSourceBlobType */
  InvalidSourceBlobType = "InvalidSourceBlobType",
  /** InvalidSourceBlobUrl */
  InvalidSourceBlobUrl = "InvalidSourceBlobUrl",
  /** InvalidVersionForPageBlobOperation */
  InvalidVersionForPageBlobOperation = "InvalidVersionForPageBlobOperation",
  /** LeaseAlreadyPresent */
  LeaseAlreadyPresent = "LeaseAlreadyPresent",
  /** LeaseAlreadyBroken */
  LeaseAlreadyBroken = "LeaseAlreadyBroken",
  /** LeaseIdMismatchWithBlobOperation */
  LeaseIdMismatchWithBlobOperation = "LeaseIdMismatchWithBlobOperation",
  /** LeaseIdMismatchWithContainerOperation */
  LeaseIdMismatchWithContainerOperation = "LeaseIdMismatchWithContainerOperation",
  /** LeaseIdMismatchWithLeaseOperation */
  LeaseIdMismatchWithLeaseOperation = "LeaseIdMismatchWithLeaseOperation",
  /** LeaseIdMissing */
  LeaseIdMissing = "LeaseIdMissing",
  /** LeaseIsBreakingAndCannotBeAcquired */
  LeaseIsBreakingAndCannotBeAcquired = "LeaseIsBreakingAndCannotBeAcquired",
  /** LeaseIsBreakingAndCannotBeChanged */
  LeaseIsBreakingAndCannotBeChanged = "LeaseIsBreakingAndCannotBeChanged",
  /** LeaseIsBrokenAndCannotBeRenewed */
  LeaseIsBrokenAndCannotBeRenewed = "LeaseIsBrokenAndCannotBeRenewed",
  /** LeaseLost */
  LeaseLost = "LeaseLost",
  /** LeaseNotPresentWithBlobOperation */
  LeaseNotPresentWithBlobOperation = "LeaseNotPresentWithBlobOperation",
  /** LeaseNotPresentWithContainerOperation */
  LeaseNotPresentWithContainerOperation = "LeaseNotPresentWithContainerOperation",
  /** LeaseNotPresentWithLeaseOperation */
  LeaseNotPresentWithLeaseOperation = "LeaseNotPresentWithLeaseOperation",
  /** MaxBlobSizeConditionNotMet */
  MaxBlobSizeConditionNotMet = "MaxBlobSizeConditionNotMet",
  /** NoAuthenticationInformation */
  NoAuthenticationInformation = "NoAuthenticationInformation",
  /** NoPendingCopyOperation */
  NoPendingCopyOperation = "NoPendingCopyOperation",
  /** OperationNotAllowedOnIncrementalCopyBlob */
  OperationNotAllowedOnIncrementalCopyBlob = "OperationNotAllowedOnIncrementalCopyBlob",
  /** PendingCopyOperation */
  PendingCopyOperation = "PendingCopyOperation",
  /** PreviousSnapshotCannotBeNewer */
  PreviousSnapshotCannotBeNewer = "PreviousSnapshotCannotBeNewer",
  /** PreviousSnapshotNotFound */
  PreviousSnapshotNotFound = "PreviousSnapshotNotFound",
  /** PreviousSnapshotOperationNotSupported */
  PreviousSnapshotOperationNotSupported = "PreviousSnapshotOperationNotSupported",
  /** SequenceNumberConditionNotMet */
  SequenceNumberConditionNotMet = "SequenceNumberConditionNotMet",
  /** SequenceNumberIncrementTooLarge */
  SequenceNumberIncrementTooLarge = "SequenceNumberIncrementTooLarge",
  /** SnapshotCountExceeded */
  SnapshotCountExceeded = "SnapshotCountExceeded",
  /** SnaphotOperationRateExceeded */
  SnaphotOperationRateExceeded = "SnaphotOperationRateExceeded",
  /** SnapshotsPresent */
  SnapshotsPresent = "SnapshotsPresent",
  /** SourceConditionNotMet */
  SourceConditionNotMet = "SourceConditionNotMet",
  /** SystemInUse */
  SystemInUse = "SystemInUse",
  /** TargetConditionNotMet */
  TargetConditionNotMet = "TargetConditionNotMet",
  /** UnauthorizedBlobOverwrite */
  UnauthorizedBlobOverwrite = "UnauthorizedBlobOverwrite",
  /** BlobBeingRehydrated */
  BlobBeingRehydrated = "BlobBeingRehydrated",
  /** BlobArchived */
  BlobArchived = "BlobArchived",
  /** BlobNotArchived */
  BlobNotArchived = "BlobNotArchived",
  /** AuthorizationSourceIPMismatch */
  AuthorizationSourceIPMismatch = "AuthorizationSourceIPMismatch",
  /** AuthorizationProtocolMismatch */
  AuthorizationProtocolMismatch = "AuthorizationProtocolMismatch",
  /** AuthorizationPermissionMismatch */
  AuthorizationPermissionMismatch = "AuthorizationPermissionMismatch",
  /** AuthorizationServiceMismatch */
  AuthorizationServiceMismatch = "AuthorizationServiceMismatch",
  /** AuthorizationResourceTypeMismatch */
  AuthorizationResourceTypeMismatch = "AuthorizationResourceTypeMismatch",
}

/**
 * Defines values for StorageErrorCode. \
 * {@link KnownStorageErrorCode} can be used interchangeably with StorageErrorCode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AccountAlreadyExists** \
 * **AccountBeingCreated** \
 * **AccountIsDisabled** \
 * **AuthenticationFailed** \
 * **AuthorizationFailure** \
 * **ConditionHeadersNotSupported** \
 * **ConditionNotMet** \
 * **EmptyMetadataKey** \
 * **InsufficientAccountPermissions** \
 * **InternalError** \
 * **InvalidAuthenticationInfo** \
 * **InvalidHeaderValue** \
 * **InvalidHttpVerb** \
 * **InvalidInput** \
 * **InvalidMd5** \
 * **InvalidMetadata** \
 * **InvalidQueryParameterValue** \
 * **InvalidRange** \
 * **InvalidResourceName** \
 * **InvalidUri** \
 * **InvalidXmlDocument** \
 * **InvalidXmlNodeValue** \
 * **Md5Mismatch** \
 * **MetadataTooLarge** \
 * **MissingContentLengthHeader** \
 * **MissingRequiredQueryParameter** \
 * **MissingRequiredHeader** \
 * **MissingRequiredXmlNode** \
 * **MultipleConditionHeadersNotSupported** \
 * **OperationTimedOut** \
 * **OutOfRangeInput** \
 * **OutOfRangeQueryParameterValue** \
 * **RequestBodyTooLarge** \
 * **ResourceTypeMismatch** \
 * **RequestUrlFailedToParse** \
 * **ResourceAlreadyExists** \
 * **ResourceNotFound** \
 * **ServerBusy** \
 * **UnsupportedHeader** \
 * **UnsupportedXmlNode** \
 * **UnsupportedQueryParameter** \
 * **UnsupportedHttpVerb** \
 * **AppendPositionConditionNotMet** \
 * **BlobAlreadyExists** \
 * **BlobImmutableDueToPolicy** \
 * **BlobNotFound** \
 * **BlobOverwritten** \
 * **BlobTierInadequateForContentLength** \
 * **BlockCountExceedsLimit** \
 * **BlockListTooLong** \
 * **CannotChangeToLowerTier** \
 * **CannotVerifyCopySource** \
 * **ContainerAlreadyExists** \
 * **ContainerBeingDeleted** \
 * **ContainerDisabled** \
 * **ContainerNotFound** \
 * **ContentLengthLargerThanTierLimit** \
 * **CopyAcrossAccountsNotSupported** \
 * **CopyIdMismatch** \
 * **FeatureVersionMismatch** \
 * **IncrementalCopyBlobMismatch** \
 * **IncrementalCopyOfEralierVersionSnapshotNotAllowed** \
 * **IncrementalCopySourceMustBeSnapshot** \
 * **InfiniteLeaseDurationRequired** \
 * **InvalidBlobOrBlock** \
 * **InvalidBlobTier** \
 * **InvalidBlobType** \
 * **InvalidBlockId** \
 * **InvalidBlockList** \
 * **InvalidOperation** \
 * **InvalidPageRange** \
 * **InvalidSourceBlobType** \
 * **InvalidSourceBlobUrl** \
 * **InvalidVersionForPageBlobOperation** \
 * **LeaseAlreadyPresent** \
 * **LeaseAlreadyBroken** \
 * **LeaseIdMismatchWithBlobOperation** \
 * **LeaseIdMismatchWithContainerOperation** \
 * **LeaseIdMismatchWithLeaseOperation** \
 * **LeaseIdMissing** \
 * **LeaseIsBreakingAndCannotBeAcquired** \
 * **LeaseIsBreakingAndCannotBeChanged** \
 * **LeaseIsBrokenAndCannotBeRenewed** \
 * **LeaseLost** \
 * **LeaseNotPresentWithBlobOperation** \
 * **LeaseNotPresentWithContainerOperation** \
 * **LeaseNotPresentWithLeaseOperation** \
 * **MaxBlobSizeConditionNotMet** \
 * **NoAuthenticationInformation** \
 * **NoPendingCopyOperation** \
 * **OperationNotAllowedOnIncrementalCopyBlob** \
 * **PendingCopyOperation** \
 * **PreviousSnapshotCannotBeNewer** \
 * **PreviousSnapshotNotFound** \
 * **PreviousSnapshotOperationNotSupported** \
 * **SequenceNumberConditionNotMet** \
 * **SequenceNumberIncrementTooLarge** \
 * **SnapshotCountExceeded** \
 * **SnaphotOperationRateExceeded** \
 * **SnapshotsPresent** \
 * **SourceConditionNotMet** \
 * **SystemInUse** \
 * **TargetConditionNotMet** \
 * **UnauthorizedBlobOverwrite** \
 * **BlobBeingRehydrated** \
 * **BlobArchived** \
 * **BlobNotArchived** \
 * **AuthorizationSourceIPMismatch** \
 * **AuthorizationProtocolMismatch** \
 * **AuthorizationPermissionMismatch** \
 * **AuthorizationServiceMismatch** \
 * **AuthorizationResourceTypeMismatch**
 */
export type StorageErrorCode = string;

/** Known values of {@link PremiumPageBlobAccessTier} that the service accepts. */
export enum KnownPremiumPageBlobAccessTier {
  /** P4 */
  P4 = "P4",
  /** P6 */
  P6 = "P6",
  /** P10 */
  P10 = "P10",
  /** P15 */
  P15 = "P15",
  /** P20 */
  P20 = "P20",
  /** P30 */
  P30 = "P30",
  /** P40 */
  P40 = "P40",
  /** P50 */
  P50 = "P50",
  /** P60 */
  P60 = "P60",
  /** P70 */
  P70 = "P70",
  /** P80 */
  P80 = "P80",
}

/**
 * Defines values for PremiumPageBlobAccessTier. \
 * {@link KnownPremiumPageBlobAccessTier} can be used interchangeably with PremiumPageBlobAccessTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **P4** \
 * **P6** \
 * **P10** \
 * **P15** \
 * **P20** \
 * **P30** \
 * **P40** \
 * **P50** \
 * **P60** \
 * **P70** \
 * **P80**
 */
export type PremiumPageBlobAccessTier = string;

/** Known values of {@link BlobExpiryOptions} that the service accepts. */
export enum KnownBlobExpiryOptions {
  /** NeverExpire */
  NeverExpire = "NeverExpire",
  /** RelativeToCreation */
  RelativeToCreation = "RelativeToCreation",
  /** RelativeToNow */
  RelativeToNow = "RelativeToNow",
  /** Absolute */
  Absolute = "Absolute",
}

/**
 * Defines values for BlobExpiryOptions. \
 * {@link KnownBlobExpiryOptions} can be used interchangeably with BlobExpiryOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NeverExpire** \
 * **RelativeToCreation** \
 * **RelativeToNow** \
 * **Absolute**
 */
export type BlobExpiryOptions = string;
/** Defines values for BlobType. */
export type BlobType = "BlockBlob" | "PageBlob" | "AppendBlob";
/** Defines values for LeaseStatusType. */
export type LeaseStatusType = "locked" | "unlocked";
/** Defines values for LeaseStateType. */
export type LeaseStateType =
  | "available"
  | "leased"
  | "expired"
  | "breaking"
  | "broken";
/** Defines values for LeaseDurationType. */
export type LeaseDurationType = "infinite" | "fixed";
/** Defines values for CopyStatusType. */
export type CopyStatusType = "pending" | "success" | "aborted" | "failed";
/** Defines values for QueryFormatType. */
export type QueryFormatType = "delimited" | "json" | "arrow";
/** Defines values for ListBlobsIncludeItem. */
export type ListBlobsIncludeItem =
  | "copy"
  | "deleted"
  | "metadata"
  | "snapshots"
  | "uncommittedblobs"
  | "versions"
  | "tags";
/** Defines values for ListContainersIncludeType. */
export type ListContainersIncludeType = "metadata" | "deleted";
/** Defines values for BlockListType. */
export type BlockListType = "committed" | "uncommitted" | "all";
/** Defines values for DeleteSnapshotsOptionType. */
export type DeleteSnapshotsOptionType = "include" | "only";
/** Defines values for PathRenameMode. */
export type PathRenameMode = "legacy" | "posix";
/** Defines values for SequenceNumberActionType. */
export type SequenceNumberActionType = "max" | "update" | "increment";

/** Optional parameters. */
export interface PageBlobUploadPagesOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  cpkScopeInfo?: CpkScopeInfo;
  /** Parameter group */
  sequenceNumberAccessConditions?: SequenceNumberAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  transactionalContentCrc64?: Uint8Array;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Return only the bytes of the blob in the specified range. */
  range?: string;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the uploadPages operation. */
export type PageBlobUploadPagesResponse = PageBlobUploadPagesHeaders;

/** Optional parameters. */
export interface BlockBlobStageBlockOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  cpkScopeInfo?: CpkScopeInfo;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  transactionalContentCrc64?: Uint8Array;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the stageBlock operation. */
export type BlockBlobStageBlockResponse = BlockBlobStageBlockHeaders;

/** Optional parameters. */
export interface BlockBlobUploadOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  cpkScopeInfo?: CpkScopeInfo;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  blobHttpHeaders?: BlobHttpHeaders;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Indicates the tier to be set on the blob. */
  tier?: AccessTier;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
}

/** Contains response data for the upload operation. */
export type BlockBlobUploadResponse = BlockBlobUploadHeaders;

/** Optional parameters. */
export interface BlockBlobPutBlobFromUrlOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  cpkScopeInfo?: CpkScopeInfo;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  blobHttpHeaders?: BlobHttpHeaders;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** Optional. Specifies a user-defined name-value pair associated with the blob. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file. Note that beginning with version 2009-09-19, metadata names must adhere to the naming rules for C# identifiers. See Naming and Referencing Containers, Blobs, and Metadata for more information. */
  metadata?: { [propertyName: string]: string };
  /** Optional. Indicates the tier to be set on the blob. */
  tier?: AccessTier;
  /** Optional.  Used to set blob tags in various blob operations. */
  blobTagsString?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  sourceContentMD5?: Uint8Array;
  /** Optional, default is true.  Indicates if properties from the source blob should be copied. */
  copySourceBlobProperties?: boolean;
}

/** Contains response data for the putBlobFromUrl operation. */
export type BlockBlobPutBlobFromUrlResponse = BlockBlobPutBlobFromUrlHeaders;

/** Optional parameters. */
export interface AppendBlobAppendBlockOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  cpkInfo?: CpkInfo;
  /** Parameter group */
  cpkScopeInfo?: CpkScopeInfo;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  appendPositionAccessConditions?: AppendPositionAccessConditions;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  transactionalContentMD5?: Uint8Array;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  transactionalContentCrc64?: Uint8Array;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
}

/** Contains response data for the appendBlock operation. */
export type AppendBlobAppendBlockResponse = AppendBlobAppendBlockHeaders;

/** Optional parameters. */
export interface StorageBlobClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Specifies the version of the operation to use for this request. */
  version?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
