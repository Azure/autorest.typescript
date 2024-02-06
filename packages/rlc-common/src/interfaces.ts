// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
export interface RLCModel {
  libraryName: string;
  srcPath: string;
  paths: Paths;
  importInfo: ImportInfo;
  options?: RLCOptions;
  schemas: Schema[];
  apiVersionInfo?: ApiVersionInfo;
  parameters?: OperationParameter[];
  responses?: OperationResponse[];
  helperDetails?: HelperFunctionDetails;
  urlInfo?: UrlInfo;
  telemetryOptions?: TelemetryInfo;
  sampleGroups?: RLCSampleGroup[];
}

export interface ImportInfo {
  internalImports: Imports;
  runtimeImports: Imports;
}

export type Imports = Record<ImportType, ImportMetadata>;

export type ImportType =
  /**inner models' imports for parameter and response */
  | "parameter"
  | "response"
  | "rlcIndex"
  | "modularModel"
  /**common third party imports */
  | "restClient"
  | "coreAuth"
  | "restPipeline"
  | "coreUtil"
  | "coreLogger"
  // this is a fallback import if above imports are not available
  // mainly used in non-branded scope
  | "commonFallback"
  /**azure specific imports */
  | "azureEslintPlugin"
  | "azureTestRecorder"
  | "azureDevTool"
  | "azureAbortController"
  | "azureCoreLro"
  | "azureCorePaging";

export interface ImportMetadata {
  type: ImportType;
  specifier?: string;
  version?: string;
  importsSet?: Set<string>;
}

/**
 * A group of samples in operation_id level and they are used to generate in a sample file
 */
export interface RLCSampleGroup {
  filename: string;
  clientPackageName: string;
  defaultFactoryName: string;
  samples: RLCSampleDetail[];
  importedTypes?: string[];
}

/**
 * An independent sample detail and it will be wrapped as a func
 */
export interface RLCSampleDetail {
  /**
   * metadata for comments
   */
  description: string;
  originalFileLocation?: string;
  name: string;
  path: string;
  defaultFactoryName: string;
  clientParamAssignments: string[];
  pathParamAssignments: string[];
  methodParamAssignments: string[];
  clientParamNames: string;
  pathParamNames: string;
  methodParamNames: "options" | "" | string;
  method: string;
  isLRO: boolean;
  isPaging: boolean;
  useLegacyLro: boolean;
}

export interface TelemetryInfo {
  customRequestIdHeaderName?: string;
}

export interface PathTemplateApiVersion {
  value: string;
  templateName: string;
}

export interface UrlInfo {
  endpoint?: string;
  urlParameters?: PathParameter[];
}

export interface ApiVersionInfo {
  definedPosition?: ApiVersionPosition;
  defaultValue?: string;
  isCrossedVersion?: boolean;
}

export type ApiVersionPosition = "path" | "query" | "baseurl" | "duplicate" | "none";
export interface HelperFunctionDetails {
  hasPaging?: boolean;
  hasLongRunning?: boolean;
  clientLroOverload?: boolean;
  pageDetails?: PagingDetails;
  hasMultiCollection?: boolean;
  hasPipeCollection?: boolean;
  hasSsvCollection?: boolean;
  hasTsvCollection?: boolean;
  hasCsvCollection?: boolean;
}

export interface PagingDetails {
  itemNames: string[];
  nextLinkNames: string[];
  isComplexPaging: boolean;
}

export type Methods = {
  [key: string]: [OperationMethod];
};

export interface ResponseTypes {
  success: string[];
  error: string[];
}

export interface OperationMethod {
  optionsName: string;
  description: string;
  hasOptionalOptions: boolean;
  returnType: string;
  successStatus: string[];
  responseTypes: ResponseTypes;
  operationName: string;
  operationHelperDetail?: OperationHelperDetail;
}
export interface PathMetadata {
  name: string;
  pathParameters: PathParameter[];
  methods: Methods;
  operationGroupName: string;
  description: string;
}

export type Paths = Record<string, PathMetadata>;

export type PathParameter = {
  oriName?: string;
  name: string;
  type: string;
  description?: string;
  value?: string | number | boolean;
};

export interface OperationHelperDetail {
  lroDetails?: OperationLroDetail;
  isPageable?: boolean;
}

export const OPERATION_LRO_HIGH_PRIORITY = 0,
  OPERATION_LRO_LOW_PRIORITY = 1;
export interface OperationLroDetail {
  isLongRunning?: boolean;
  logicalResponseTypes?: ResponseTypes;
  operationLroOverload?: boolean;
  /**
   * This is used to sort the overload order, sorted in descending order
   */
  precedence?: number;
}

export interface RLCOptions {
  includeShortcuts?: boolean;
  multiClient?: boolean;
  batch?: any[];
  packageDetails?: PackageDetails;
  addCredentials?: boolean;
  /** Three possiblie values:
   * - undefined, no credentialScopes and relevant settings would be generated
   * - [], which means we would generate TokenCredential but no credentialScopes and relevant settings
   * - ["..."], which means we would generate credentialScopes and relevant settings with the given values
   */
  credentialScopes?: string[];
  credentialKeyHeaderName?: string;
  customHttpAuthHeaderName?: string;
  customHttpAuthSharedKeyPrefix?: string;
  /**
   * Three possible values:
   * - undefined, the default behavior which means we would generate metadata if the package.json file is absent
   * - true, which means we would always generate new files or override existing files
   * - false, which means we would not generate any files no matter there exists or not
   */
  generateMetadata?: boolean;
  /**
   * Three possible values:
   * - undefined, the default behavior which means we would generate test if there is no `test` folder
   * - true, which means we would always generate new files or override existing files
   * - false, which means we would not generate any files no matter there exists or not
   */
  generateTest?: boolean;
  generateSample?: boolean;
  azureSdkForJs?: boolean;
  azureOutputDirectory?: string;
  isTypeSpecTest?: boolean;
  title?: string;
  dependencyInfo?: DependencyInfo;
  productDocLink?: string;
  serviceInfo?: ServiceInfo;
  azureArm?: boolean;
  sourceFrom?: "TypeSpec" | "Swagger";
  isModularLibrary?: boolean;
  enableOperationGroup?: boolean;
  branded?: boolean;
  enableModelNamespace?: boolean;
  hierarchyClient?: boolean;
}

export interface ServiceInfo {
  title?: string;
  description?: string;
}

export interface DependencyInfo {
  link: string;
  description: string;
}

export interface File {
  path: string;
  content: string;
}

export enum SchemaContext {
  /** Schema is used as an input to an operation. */
  Input = "input",
  /** Schema is used as an output from an operation. */
  Output = "output",
  /** Schema is used as an exception from an operation. */
  Exception = "exception"
}

export interface Schema {
  name: string;
  type: string;
  typeName?: string;
  outputTypeName?: string;
  description?: string;
  required?: boolean;
  default?: any;
  readOnly?: boolean;
  usage?: SchemaContext[];
  alias?: string;
  outputAlias?: string;
  fromCore?: boolean;
  enum?: any[];
  isConstant?: boolean;
}

export interface ObjectSchema extends Schema {
  properties?: Record<string, Schema>;
  discriminatorValue?: string;
  discriminator?: Schema;
  isPolyParent?: boolean;
  children?: {
    all?: ObjectSchema[];
    immediate?: ObjectSchema[];
  };
  parents?: {
    all?: ObjectSchema[];
    immediate?: ObjectSchema[];
  };
}

export interface DictionarySchema extends Schema {
  valueTypeName?: string;
  outputValueTypeName?: string;
  additionalProperties?: Schema;
}

export interface ArraySchema extends Schema {
  items?: Schema;
}

export interface Property extends Schema {}

export interface Parameter extends Schema {}

export interface PackageDetails {
  name: string;
  scopeName?: string;
  nameWithoutScope?: string;
  description?: string;
  version?: string;
}
export interface OperationParameter {
  operationGroup: string;
  operationName: string;
  /**
   * An operation with multiple request parameters means that
   * the operation can get different values for content-type and each value
   * may have a different type associated to it.
   */
  parameters: ParameterMetadatas[];
}

export interface ParameterMetadatas {
  parameters?: ParameterMetadata[];
  body?: ParameterBodyMetadata;
}

export interface ParameterBodyMetadata {
  // In case of formData we'd get multiple properties in body marked as partialBody
  isPartialBody?: boolean;
  body?: ParameterBodySchema[];
}

export interface ParameterBodySchema extends Schema {
  oriSchema?: Schema;
}
export interface ParameterMetadata {
  type: "query" | "path" | "header";
  name: string;
  param: Schema;
}

export interface OperationResponse {
  operationGroup: string;
  operationName: string;
  path: string;
  responses: ResponseMetadata[];
}
export interface ResponseMetadata {
  statusCode: string;
  description?: string;
  headers?: ResponseHeaderSchema[];
  body?: ResponseBodySchema;
  predefinedName?: string;
}

export type ResponseHeaderSchema = Schema;
export type ResponseBodySchema = Schema;

export type ContentBuilder = {
  (model: RLCModel): File | File[] | undefined;
};

export type SampleParameterPosition = "client" | "path" | "method";

export type SampleParameters = Record<
  SampleParameterPosition,
  SampleParameter[]
>;

export interface SampleParameter {
  name: string;
  assignment?: string;
  value?: string;
}
