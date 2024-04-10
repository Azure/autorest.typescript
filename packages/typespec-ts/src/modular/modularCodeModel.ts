import { Imports } from "@azure-tools/rlc-common";
import { HelperFunctionDetails } from "@azure-tools/rlc-common";
import { OperationResponse, RLCOptions } from "@azure-tools/rlc-common";
import { UsageFlags } from "@typespec/compiler";
import { Project } from "ts-morph";

export interface ModularOptions {
  sourceRoot: string;
}
export interface ModularCodeModel {
  options: RLCOptions;
  modularOptions: ModularOptions;
  namespace?: string;
  subnamespaceToClients?: any;
  clients: Client[];
  types: Type[];
  project: Project;
  runtimeImports: Imports;
}

export interface Header {
  type: Type;
  restApiName: string;
}

export interface Property {
  clientDefaultValue?: any;
  clientName: string;
  restApiName: string;
  type: Type;
  optional?: boolean;
  description: string;
  readonly?: boolean;
  format?: string;
}

export interface BodyParameter {
  contentTypes: string[];
  type: Type;
  restApiName: string;
  location: "body";
  optional: boolean;
  description: string;
  clientName: string;
  inOverload: boolean;
  isBinaryPayload: boolean;
}

export interface OperationGroup {
  className: string;
  propertyName: string;
  operations: Operation[];
  namespaceHierarchies: string[];
}
export interface Policy {
  type: string;
  key: string;
}

export interface XmlMetadata {}
export interface EnumValue {
  name: string;
  value: string;
  description: string;
}
export interface Type {
  nullable?: boolean;
  name?: string;
  description?: string;
  type:
    | "string"
    | "Key"
    | "OAuth2"
    | "constant"
    | "model"
    | "list"
    | "byte-array"
    | "datetime"
    | "float"
    | "duration"
    | "enum"
    | "integer"
    | "float"
    | "boolean"
    | "dict"
    | "combined"
    | "any"
    | "unknown"
    | "never";
  policy?: Policy;
  apiVersions?: any[];
  clientDefaultValue?: any;
  value?: string;
  values?: EnumValue[];
  isFixed?: boolean;
  valueType?: Type;
  elementType?: Type;
  parents?: Type[];
  xmlMetadata?: XmlMetadata;
  format?: string;
  properties?: Property[];
  types?: Type[];
  isCoreErrorType?: boolean;
  usage?: UsageFlags;
  alias?: string;
  aliasType?: string;
  discriminator?: string;
  discriminatorValue?: string;
  isPolymorphicBaseModel?: boolean;
}

export interface Client {
  name: string;
  description: string;
  parameters: Parameter[];
  operationGroups: OperationGroup[];
  url: string;
  apiVersions: any[];
  rlcClientName: string;
  subfolder?: string;
  rlcHelperDetails: HelperFunctionDetails;
}

export type ParameterLocation =
  | "endpointPath"
  | "header"
  | "query"
  | "path"
  | "body"
  | "other";

export interface Parameter {
  optional: boolean;
  description: string;
  clientName: string;
  inOverload: boolean;
  restApiName: string;
  location: ParameterLocation;
  type: Type;
  implementation: string;
  skipUrlEncoding?: boolean;
  clientDefaultValue?: string | null;
  in_docstring?: boolean;
  checkClientInput?: boolean;
  delimiter?: any;
  explode?: boolean;
  groupedBy?: any;
  inDocstring?: boolean;
  inOverriden?: boolean;
  isApiVersion?: boolean;
  format?: string;
}

export interface Response {
  headers: Header[];
  statusCodes: (number | "default")[];
  discriminator: string;
  type: Type;
  addedOn?: string;
  isBinaryPayload?: boolean;
}

export interface Operation {
  name: string;
  oriName?: string;
  description: string;
  summary: string;
  url: string;
  method: string;
  parameters: Parameter[];
  bodyParameter?: BodyParameter;
  responses: Response[];
  exceptions: Response[];
  groupName: string;
  discriminator: string;
  isOverload: boolean;
  overloads: any[];
  apiVersions: any[];
  itemName?: string;
  continuationTokenName?: string;
  addedOn?: string;
  rlcResponse?: OperationResponse;
  namespaceHierarchies: string[];
}
