// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * TypeScript Code Model — The contract between adapter and renderer.
 *
 * This module defines the complete intermediate representation (IR) for a
 * TypeScript client library. It is:
 *
 * - Pure data: no methods, no side effects, no imports from TCGC or ts-morph
 * - Serializable: can be JSON.stringify'd for snapshot testing
 * - Complete: contains everything the renderer needs — no back-references to TCGC
 *
 * Pattern: same role as Go's `codemodel.go/` and Rust's `codemodel/`.
 */

// ─── Code Model Root ──────────────────────────────────────────────────

/** Root of the TypeScript code model. Everything needed to generate a complete client library. */
export interface TSCodeModel {
  /** Package-level metadata and generation settings. */
  settings: TSGenerationSettings;

  /** Generated SDK package metadata. */
  packageInfo: TSPackageInfo;

  /** All top-level clients in the package. May contain nested children. */
  clients: TSClient[];

  /** All named model/interface types to emit. */
  models: TSModel[];

  /** All named enum types to emit. */
  enums: TSEnum[];

  /** All named union types to emit. */
  unions: TSUnion[];

  /** Serialization helpers needed (JSON, XML, etc.) */
  serializers: TSSerializerGroup[];

  /** Static helper files to copy into the output. */
  helpers: TSHelperFile[];

  /** Paging metadata for paged operations. */
  pagingInfo: TSPagingConfig;

  /** Polling metadata for long-running operations. */
  pollingInfo: TSPollingConfig;
}

// ─── Generation Settings ──────────────────────────────────────────────

/** Resolved emitter configuration. Not raw options — normalized and validated. */
export interface TSGenerationSettings {
  /** Package name (e.g., "@azure/storage-blob") */
  packageName: string;
  /** Package version (e.g., "1.0.0") */
  packageVersion: string;
  /** Package description. */
  packageDescription?: string;
  /** Azure-flavored or unbranded */
  flavor: "azure" | "unbranded";
  /** Whether this is an ARM management-plane SDK */
  isArm: boolean;
  /** Source output directory */
  outputDir: string;
  /** Whether to emit credential support */
  addCredentials: boolean;
  /** OAuth scopes for credential */
  credentialScopes: string[];
  /** Whether multi-client generation is enabled */
  isMultiClient: boolean;
  /** Whether hierarchical client pattern is used */
  hierarchyClient: boolean;
}

/** Credential configuration for Azure or API-key authenticated clients. */
export interface TSCredentialInfo {
  /** Constructor parameter name. */
  paramName: string;
  /** TypeScript type expression for the credential parameter. */
  type: string;
  /** OAuth scopes, when token credentials are supported. */
  scopes: string[];
  /** API-key header name, when key credentials are supported. */
  apiKeyHeaderName?: string;
}

// ─── Package Info ─────────────────────────────────────────────────────

/** Generated SDK package.json and README metadata. */
export interface TSPackageInfo {
  /** Package name (e.g., "@azure/storage-blob") */
  name: string;
  /** Package version (e.g., "1.0.0") */
  version: string;
  /** Package description. */
  description?: string;
  /** Human-readable service/client name used in metadata docs. */
  serviceName: string;
  /** Primary client class name. */
  clientName: string;
  /** Package subpath exports backed by emitted source files. */
  exports: TSPackageExport[];
}

/** A package subpath export. */
export interface TSPackageExport {
  /** Package export path (e.g., "." or "./models") */
  subpath: string;
  /** Source TypeScript entry point (e.g., "./src/index.ts") */
  source: string;
}

// ─── Client ───────────────────────────────────────────────────────────

/** A client in the generated SDK. Drives both context factory and classical class emission. */
export interface TSClient {
  /** Client class name (e.g., "BlobClient") */
  name: string;
  /** Documentation lines */
  docs: string[];
  /** Client initialization parameters */
  parameters: TSParameter[];
  /** Endpoint configuration */
  endpoint: TSEndpoint;
  /** API version info (if versioned) */
  apiVersion?: TSApiVersion;
  /** Credential configuration, when authentication is required. */
  credential?: TSCredentialInfo;
  /** Operation groups on this client */
  operationGroups: TSOperationGroup[];
  /** Direct methods (ungrouped operations) */
  methods: TSOperation[];
  /** Sub-clients (hierarchical client pattern) */
  children: TSClient[];
}

/** Endpoint configuration for a client. */
export interface TSEndpoint {
  /** URL template (e.g., "{endpoint}/v1") */
  urlTemplate: string;
  /** Whether the endpoint is parameterized */
  isParameterized: boolean;
  /** Template parameters */
  templateParams: TSParameter[];
}

/** API version configuration. */
export interface TSApiVersion {
  /** Parameter name */
  paramName: string;
  /** Default value */
  defaultValue?: string;
  /** Whether version is embedded in endpoint template */
  isInEndpoint: boolean;
}

/** Operation-level query parameter backed by the client apiVersion option. */
export interface TSApiVersionQuery {
  /** Serialized query name, e.g. api-version. */
  serializedName: string;
  /** Percent-encoded URI-template variable name. */
  encodedName: string;
  /** Default API version. */
  defaultValue: string;
}

// ─── Operations ───────────────────────────────────────────────────────

/** A group of operations sharing a prefix/namespace. */
export interface TSOperationGroup {
  /** Group name (e.g., "containers") */
  name: string;
  /** Operations in this group */
  operations: TSOperation[];
}

/** A single API operation. Drives operation file, send/deserialize helpers, and options interface. */
export interface TSOperation {
  /** Method name (e.g., "listBlobs") */
  name: string;
  /** Documentation */
  docs: string[];
  /** Operation kind — determines which runtime pattern to use */
  kind: "basic" | "paging" | "lro" | "lroPaging";
  /** HTTP method */
  httpMethod: string;
  /** URL path template */
  path: string;
  /** All parameters for this operation */
  parameters: TSOperationParameter[];
  /** Return type info */
  returnType: TSReturnType;
  /** Options interface for this operation */
  optionsType: TSOptionsType;
  /** Request body emission style. */
  bodyShape: "inline" | "named-with-serializer" | "raw";
  /** Request content type, when known. */
  contentType?: string;
  /** Client api-version query parameter metadata, when the operation uses it. */
  apiVersionQuery?: TSApiVersionQuery;
  /** HTTP success status codes accepted by the deserializer. */
  expectedStatuses: string[];
}

/** A parameter on an operation. */
export interface TSOperationParameter {
  /** Parameter name */
  name: string;
  /** TypeScript type expression */
  type: string;
  /** Where this parameter goes on the wire */
  location: "path" | "query" | "header" | "body";
  /** Whether the parameter is required */
  required: boolean;
  /** Default value expression (if any) */
  defaultValue?: string;
  /** Documentation */
  docs: string[];
}

/** Return type metadata for an operation. */
export interface TSReturnType {
  /** Full TypeScript type expression */
  type: string;
  /** Whether the response is void/204 */
  isVoid: boolean;
  /** Whether the response can be null */
  nullable: boolean;
}

/** Options interface for an operation (e.g., "ListBlobsOptionalParams"). */
export interface TSOptionsType {
  /** Interface name */
  name: string;
  /** Properties on the options bag */
  properties: TSProperty[];
}

// ─── Parameters ───────────────────────────────────────────────────────

/** A parameter (used for both client and operation parameters). */
export interface TSParameter {
  /** Parameter name */
  name: string;
  /** TypeScript type expression */
  type: string;
  /** Whether this is required */
  required: boolean;
  /** Default value (if any) */
  defaultValue?: string;
  /** Documentation */
  docs: string[];
}

// ─── Models ───────────────────────────────────────────────────────────

/** A named model/interface type. Drives models.ts emission and serializer generation. */
export interface TSModel {
  /** Model name (e.g., "BlobProperties") */
  name: string;
  /** Documentation */
  docs: string[];
  /** Properties */
  properties: TSProperty[];
  /** Parent model (for inheritance) */
  baseModel?: string;
  /** Additional properties type (for Record<string, T> patterns) */
  additionalPropertiesType?: string;
  /** Discriminator info (for polymorphic hierarchies) */
  discriminator?: TSDiscriminator;
  /** Whether this model needs a serializer */
  needsSerializer: boolean;
  /** Serializer function name, when emitted */
  serializerName?: string;
  /** Whether this model needs a deserializer */
  needsDeserializer: boolean;
  /** Deserializer function name, when emitted */
  deserializerName?: string;
}

/** A property on a model or options interface. */
export interface TSProperty {
  /** Property name */
  name: string;
  /** TypeScript type expression */
  type: string;
  /** Whether the property is optional */
  optional: boolean;
  /** Whether the property is readonly */
  readonly: boolean;
  /** Wire name for serialization (if different from name) */
  serializedName?: string;
  /** Documentation */
  docs: string[];
}

/** Discriminator metadata for polymorphic models. */
export interface TSDiscriminator {
  /** Discriminator property name */
  propertyName: string;
  /** Value for this specific model variant */
  value?: string;
  /** All known derived type names */
  variants: string[];
}

// ─── Enums ────────────────────────────────────────────────────────────

/** A named enum type. May be fixed or extensible. */
export interface TSEnum {
  /** Enum type alias name */
  name: string;
  /** Documentation */
  docs: string[];
  /** Enum members */
  members: TSEnumMember[];
  /** Whether the enum is extensible (allows unknown values) */
  isExtensible: boolean;
  /** Whether to emit only the Known* enum value container. */
  knownValuesOnly?: boolean;
  /** Underlying value type ("string" or "number") */
  valueType: "string" | "number";
}

/** A single enum member. */
export interface TSEnumMember {
  /** Member name */
  name: string;
  /** Member value */
  value: string | number;
  /** Documentation */
  docs?: string[];
}

// ─── Unions ───────────────────────────────────────────────────────────

/** A named union type (TypeSpec `union` keyword). */
export interface TSUnion {
  /** Union type alias name */
  name: string;
  /** Documentation */
  docs: string[];
  /** Variant types */
  variants: TSUnionVariant[];
  /** Discriminator info (for discriminated unions) */
  discriminator?: TSUnionDiscriminator;
}

/** A variant in a union. */
export interface TSUnionVariant {
  /** Variant label (if named) */
  name?: string;
  /** TypeScript type expression */
  type: string;
}

/** Discriminator metadata for discriminated unions. */
export interface TSUnionDiscriminator {
  /** Property used for discrimination */
  propertyName: string;
}

// ─── Serializers ──────────────────────────────────────────────────────

/** A group of serialization/deserialization functions for a content type. */
export interface TSSerializerGroup {
  /** Content type this serializer handles (e.g., "application/json", "application/xml") */
  contentType: string;
  /** Models that need serialization in this format */
  models: string[];
}

// ─── Helpers ──────────────────────────────────────────────────────────

/** A static helper file to copy into the output tree. */
export interface TSHelperFile {
  /** Output path relative to source root */
  outputPath: string;
  /** Helper category for organizational purposes */
  category:
    | "paging"
    | "polling"
    | "serialization"
    | "auth"
    | "logging"
    | "url"
    | "multipart";
}

// ─── Paging ───────────────────────────────────────────────────────────

/** Paging configuration for the package. */
export interface TSPagingConfig {
  /** Whether any operation uses paging */
  hasPaging: boolean;
  /** Item property path in paged responses */
  itemPropertyPath?: string;
  /** Next link property path */
  nextLinkPropertyPath?: string;
}

// ─── Polling ──────────────────────────────────────────────────────────

/** Polling configuration for long-running operations. */
export interface TSPollingConfig {
  /** Whether any operation uses LRO */
  hasLro: boolean;
  /** Whether to emit compatibility restorePoller helper */
  emitRestorePoller: boolean;
}
