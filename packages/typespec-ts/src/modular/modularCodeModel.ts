import { RLCOptions } from "@azure-tools/rlc-common";

export interface ModularCodeModel {
  options: RLCOptions;
  namespace?: string;
  subnamespaceToClients?: any;
  clients: Client[];
  types: Type[];
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
  defaultContentType: string;
}

export interface OperationGroup {
  className: string;
  propertyName: string;
  operations: Operation[];
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
    | "combined";
  policy?: Policy;
  apiVersions?: any[];
  clientDefaultValue?: any;
  value?: string;
  values?: EnumValue[];
  isFixed?: boolean;
  valueType?: Type;
  elementType?: Type;
  xmlMetadata?: XmlMetadata;
  format?: string;
  properties?: Property[];
  types?: Type[];
}

export interface Client {
  name: string;
  description: string;
  parameters: Parameter[];
  operationGroups: OperationGroup[];
  url: string;
  apiVersions: any[];
}

export type ParameterLocation =
  | "endpointPath"
  | "header"
  | "query"
  | "path"
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
}

export interface Response {
  headers: Header[];
  statusCodes: (number | "default")[];
  discriminator: string;
  type: Type;
  addedOn?: string;
}

export interface Operation {
  name: string;
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
}
