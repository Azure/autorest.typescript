// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * TypeScript Code Model — Language-specific intermediate representation.
 *
 * This is the TypeScript equivalent of Go's `CodeModel` and Rust's `Crate`.
 * It represents the complete target client library as a tree of
 * language-specific data. All TCGC interpretation happens in the adapter
 * (Phase 1) — the code model is TCGC-free. All rendering happens in
 * codegen (Phase 3) — the code model is ts-morph-free.
 *
 * The code model is:
 * - Self-contained: no external dependencies, no global hooks
 * - Snapshot-testable: pure data, can be serialized/compared
 * - Renderer-agnostic: consumed by ts-morph codegen today, Alloy.js tomorrow
 */

// ─── Code Model Root ──────────────────────────────────────────────────

/**
 * Root of the TypeScript code model. Contains everything needed to
 * generate a complete TypeScript client library.
 *
 * Analogous to Go's `CodeModel` and Rust's `Crate`.
 */
export interface TSCodeModel {
  /** All clients in the package (may be hierarchical) */
  clients: TSClient[];

  /** Named model/interface declarations */
  models: TSModel[];

  /** Named enum declarations */
  enums: TSEnum[];

  /** Named union declarations */
  unions: TSUnion[];

  /** Helper wrapper types that still need legacy addDeclaration registration */
  helperTypes: TSHelperType[];

  /** Generation settings derived from emitter options */
  settings: TSGenerationSettings;
}

export type TSHelperTypeKind = "array" | "dict" | "nullable";

export interface TSHelperType {
  /** Stable semantic ID used to recover the raw helper type during transition */
  id: string;
  /** Helper kind — determines how the legacy renderer registers declarations */
  kind: TSHelperTypeKind;
  /** Display name for diagnostics/debugging */
  name: string;
  /** Namespace segments for file placement */
  namespace: string[];
  /** Wrapped element/value type */
  elementType: TSTypeReference;
  /** Whether this helper is a named nullable alias */
  isNamedAlias: boolean;
}

export function buildHelperTypeId(
  helperType: Pick<
    TSHelperType,
    "kind" | "name" | "namespace" | "elementType" | "isNamedAlias"
  >
): string {
  return [
    helperType.namespace.join("/"),
    helperType.kind,
    helperType.name,
    helperType.elementType,
    helperType.isNamedAlias ? "named" : "generated"
  ].join(":");
}

/** Normalized generation settings (not raw emitter options) */
export interface TSGenerationSettings {
  flavor: "azure" | "unbranded";
  isArm: boolean;
  sourceRoot: string;
  packageName?: string;
  packageVersion?: string;
  addCredentials: boolean;
  credentialScopes?: string[];
  credentialKeyHeaderName?: string;
  customHttpAuthHeaderName?: string;
  customHttpAuthSharedKeyPrefix?: string;
  compatibilityLro?: boolean;
  isMultiService?: boolean;
  hierarchyClient?: boolean;
}

// ─── Client ───────────────────────────────────────────────────────────

/**
 * A client in the TypeScript SDK. Maps to Go's `go.Client` and
 * Rust's `rust.Client`.
 *
 * Represents both the "modular client context" (factory function +
 * context interface) and the "classical client" (class wrapper).
 */
export interface TSClient {
  /** Stable semantic ID for cross-referencing */
  id: string;

  /** Classical client name (e.g., "FooClient") */
  name: string;

  /** Modular client name (e.g., "Foo") */
  modularName: string;

  /** RLC context type name (e.g., "FooContext") */
  contextTypeName: string;

  /** Client documentation */
  docs: string[];

  /** Client hierarchy path (e.g., ["Storage", "Blob"]) */
  path: string[];

  /** Endpoint configuration */
  endpoint: TSEndpointConfig;

  /** Credential configuration */
  credential: TSCredentialConfig;

  /** All client initialization parameters (from TCGC clientInitialization) */
  parameters: TSClientParameter[];

  /** API version configuration */
  apiVersion?: TSApiVersionConfig;

  /** Operation methods on this client */
  methods: TSMethod[];

  /** Named operation groups (non-empty prefix key) */
  operationGroups: TSOperationGroup[];

  /** Generated operation options files under the api/ tree */
  apiOptions: TSApiOptions[];

  /** Restore-poller helper metadata when compatibility LROs are enabled */
  lroConfig?: TSLroConfig;

  /** Child clients (hierarchical client pattern) */
  children: TSClient[];

  /** Whether children are initialized by parent */
  hasParentInitializedChildren: boolean;

  /** Whether ARM subscriptionId overloads should be emitted */
  allowOptionalSubscriptionId: boolean;

  /** Whether operation helper declarations use a namespaced client type */
  usesNamespacedContextType: boolean;
}

// ─── Endpoint Configuration ───────────────────────────────────────────

export interface TSEndpointConfig {
  /** Whether the endpoint is parameterized (has template variables) */
  isParameterized: boolean;

  /** Server URL template (e.g., "{endpoint}/api/v1") */
  serverUrl?: string;

  /** Template parameters in the endpoint URL */
  templateParameters: TSEndpointTemplateParam[];

  /** Whether to use ARM cloud endpoint resolution */
  useArmCloudEndpoint: boolean;
}

export interface TSEndpointTemplateParam {
  name: string;
  clientDefaultValue?: unknown;
  isOptional: boolean;
  /** The raw TCGC param name (for URL template replacement) */
  tcgcName: string;
}

// ─── Credential Configuration ─────────────────────────────────────────

export interface TSCredentialConfig {
  /** Whether credentials are used */
  hasCredentials: boolean;
  /** The parameter name for the credential (e.g., "credential") */
  parameterName: string;
}

// ─── API Version Configuration ────────────────────────────────────────

export interface TSApiVersionConfig {
  /** Parameter name (e.g., "apiVersion") */
  parameterName: string;
  /** Whether the API version is embedded in the endpoint template */
  isInEndpointTemplate: boolean;
  /** Default value if not in endpoint */
  clientDefaultValue?: unknown;
  /** Known values enum name (if versioned) */
  knownValuesEnumName?: string;
}

// ─── Parameters ───────────────────────────────────────────────────────

export interface TSClientParameter {
  /** Parameter name (normalized to TypeScript conventions) */
  name: string;
  /** TypeScript type expression */
  type: string;
  /** Whether this parameter is required */
  required: boolean;
  /** Whether this parameter has a default value */
  hasDefaultValue: boolean;
  /** Default value expression */
  defaultValue?: unknown;
  /** Parameter documentation */
  docs: string[];
  /** Whether this is the API version parameter */
  isApiVersion: boolean;
  /** Whether this is the endpoint parameter */
  isEndpoint: boolean;
  /** Whether this is the credential parameter */
  isCredential: boolean;
}

// ─── Methods / Operations ─────────────────────────────────────────────

export type TSMethodKind = "basic" | "lro" | "paging" | "lroPaging";

export type TSParameterLocation = "query" | "header" | "path" | "body";

export interface TSFunctionParameter {
  name: string;
  type?: string;
  initializer?: string;
  hasQuestionToken?: boolean;
  docs?: string[];
}

export interface TSFunctionDeclaration {
  name: string;
  docs?: string[];
  isAsync?: boolean;
  isExported?: boolean;
  propertyName?: string;
  returnType?: string;
  parameters: TSFunctionParameter[];
  statements?: string | string[];
}

/**
 * An operation method on a client. This is a plain data view of the
 * operation shape that modular rendering currently derives from TCGC.
 */
export interface TSMethod {
  /** Stable semantic ID */
  id: string;
  /** Method name for the classical client */
  name: string;
  /** Original operation name before operation-group prefixing */
  originalName?: string;
  /** Binder refkey for the public api function */
  apiRefKey: string;
  /** Operation kind */
  kind: TSMethodKind;
  /** Summary/description from the operation doc comment */
  description?: string;
  /** HTTP method for the request */
  httpMethod: string;
  /** HTTP route info */
  route: TSRoute;
  /** Operation parameters */
  parameters: TSParameter[];
  /** Method return type */
  returnType: TSReturnType;
  /** Non-model response alias metadata when the operation wraps its return type */
  responseTypeAlias?: TSResponseTypeAlias;
  /** Public api function declaration */
  apiFunction: TSFunctionDeclaration;
  /** Private send helper declaration */
  sendFunction: TSFunctionDeclaration;
  /** Private deserialize helper declaration */
  deserializeFunction: TSFunctionDeclaration;
  /** Optional response headers helper declaration */
  deserializeHeadersFunction?: TSFunctionDeclaration;
  /** Optional exception headers helper declaration */
  deserializeExceptionHeadersFunction?: TSFunctionDeclaration;
  /** Compatibility LRO final return type for deprecated helpers */
  compatibilityLroReturnType?: string;
  /** Compatibility LRO paging return type for deprecated helpers */
  compatibilityLroPagingReturnType?: string;
}

export interface TSParameter {
  name: string;
  type: string;
  optional: boolean;
  defaultValue?: unknown;
  httpLocation: TSParameterLocation;
}

export interface TSReturnType {
  /** Full TypeScript type expression returned by the method */
  type: string;
  /** Whether the logical payload/result type is nullable */
  nullable: boolean;
  /** Whether the logical payload/result type is void */
  isVoid: boolean;
}

export interface TSResponseTypeAlias {
  name: string;
  refKey: string;
  kind: "binary" | "body" | "headAsBoolean";
  bodyType?: string;
}

export interface TSRoute {
  pathTemplate: string;
  verb: string;
}

// ─── Operation Groups ─────────────────────────────────────────────────

export interface TSOperationGroup {
  /** Group name (normalized) */
  name: string;
  /** Prefix keys for hierarchical grouping */
  prefixes: string[];
  /** Operations in this group */
  methods: TSMethod[];
}

export interface TSApiOptions {
  /** Prefix keys for the api/options file path */
  prefixes: string[];
  /** Operation option interfaces emitted into this file */
  interfaces: TSApiOptionsInterface[];
}

export interface TSApiOptionsInterface {
  /** TypeScript interface name */
  name: string;
  /** Binder refkey for import resolution */
  refKey: string;
  /** Interface properties */
  properties: TSApiOptionsProperty[];
}

export interface TSApiOptionsProperty {
  name: string;
  type: string;
  docs: string[];
}

export interface TSLroConfig {
  /** Classical client type accepted by restorePoller */
  clientName: string;
  /** Deserialization helpers indexed by operation path */
  deserializers: TSLroDeserializer[];
}

export interface TSLroDeserializer {
  /** Import path for the deserialize helper */
  moduleSpecifier: string;
  /** Exported helper name */
  exportName: string;
  /** Local alias used when duplicate helper names exist */
  localName: string;
  /** HTTP method + route key */
  path: string;
  /** Expected status expression emitted into the helper map */
  expectedStatusesExpression: string;
}

// ─── Models / Types ─────────────────────────────────────────────────────

export type TSTypeReference = string;

export interface TSModel {
  /** Stable semantic ID */
  id: string;
  /** TypeScript model/interface name */
  name: string;
  /** Relative namespace segments used for file placement */
  namespace: string[];
  /** Model documentation */
  docs: string[];
  /** Direct model properties */
  properties: TSProperty[];
  /** Base model reference for inheritance */
  baseType?: TSTypeReference;
  /** Additional properties bag value type */
  additionalPropertiesType?: TSTypeReference;
  /** Polymorphism metadata */
  discriminator?: TSDiscriminator;
}

export interface TSProperty {
  /** TypeScript property name */
  name: string;
  /** Referenced TypeScript type */
  type: TSTypeReference;
  /** Whether the property is optional */
  optional: boolean;
  /** Whether the property is readonly */
  readonly: boolean;
  /** Serialized wire name */
  serializedName?: string;
  /** Whether the property is a discriminator */
  isDiscriminator: boolean;
  /** Whether the property is flattened in serialization */
  isFlattened: boolean;
}

export interface TSDiscriminator {
  /** TypeScript discriminator property name */
  propertyName: string;
  /** Wire name used during serialization */
  serializedName?: string;
  /** Discriminator value for derived types */
  value?: string;
  /** Known derived model type names */
  derivedTypes: TSTypeReference[];
}

export interface TSEnum {
  /** Stable semantic ID */
  id: string;
  /** TypeScript enum alias name */
  name: string;
  /** Relative namespace segments used for file placement */
  namespace: string[];
  /** Enum documentation */
  docs: string[];
  /** Enum members */
  members: TSEnumMember[];
  /** Whether the enum is fixed/exhaustive */
  isFixed: boolean;
  /** Whether the enum is extensible/non-exhaustive */
  isExtensible: boolean;
  /** Underlying value type */
  valueType: TSTypeReference;
}

export interface TSEnumMember {
  name: string;
  value: string | number;
}

export interface TSUnion {
  /** Stable semantic ID */
  id: string;
  /** TypeScript union alias name */
  name: string;
  /** Relative namespace segments used for file placement */
  namespace: string[];
  /** Union documentation */
  docs: string[];
  /** Union variants */
  variants: TSUnionVariant[];
  /** Discriminator metadata when present */
  discriminator?: TSUnionDiscriminator;
}

export interface TSUnionVariant {
  /** Variant label when declared in TypeSpec */
  name?: string;
  /** Variant type reference */
  type: TSTypeReference;
}

export interface TSUnionDiscriminator {
  propertyName: string;
  envelope: "object" | "none";
  envelopePropertyName?: string;
}
