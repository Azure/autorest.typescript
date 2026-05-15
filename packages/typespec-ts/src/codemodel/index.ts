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

  /** Generation settings derived from emitter options */
  settings: TSGenerationSettings;
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

  /** Child clients (hierarchical client pattern) */
  children: TSClient[];

  /** Whether children are initialized by parent */
  hasParentInitializedChildren: boolean;
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
