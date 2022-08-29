export interface CadlProgram {
  models: Models;
  operationGroups: CadlOperationGroup[];
  serviceInformation: ServiceInformation;
}

export interface CadlOptions {
  isAzureSpec: boolean;
  namespace?: string;
}

export interface CadlChoiceValue {
  name: string;
  value: string | number | boolean;
}

export interface WithDoc {
  doc?: string | string[];
}

export interface WithSummary {
  summary?: string;
}

export interface CadlOperationGroup extends WithDoc {
  name: string;
  operations: CadlOperation[];
}

export type Extension = "Pageable" | "LRO";
export interface CadlOperation extends WithDoc, WithSummary, WithFixMe {
  name: string;
  verb: "get" | "post" | "put" | "delete";
  route: string;
  responses: string[];
  parameters: CadlParameter[];
  extensions: Extension[];
}
export interface ServiceInformation extends WithDoc {
  name: string;
  version?: string;
  endpoint?: string;
  endpointParameters?: EndpointParameter[];
  produces?: string[];
  consumes?: string[];
}

export interface EndpointParameter extends WithDoc {
  name: string;
}

export interface CadlDataType extends WithDoc, WithFixMe {
  kind: string;
  name: string;
}

export interface CadlWildcardType extends CadlDataType {
  kind: "wildcard";
}

export interface CadlEnum extends CadlDataType {
  kind: "enum";
  members: CadlChoiceValue[];
  isExtensible: boolean;
}

export interface WithFixMe {
  fixMe?: string[];
}

export type CadlParameterLocation = "path" | "query" | "header" | "body";
export interface CadlParameter extends CadlDataType {
  kind: "parameter";
  isOptional: boolean;
  type: string;
  location: CadlParameterLocation;
}

export interface CadlObjectProperty extends CadlDataType {
  kind: "property";
  isOptional: boolean;
  type: string;
  decorators?: CadlDecorator[];
  visibility?: "read";
}

export interface CadlDecorator {
  name: string;
  arguments?: string[];
  module?: string;
  namespace?: string;
}

export interface CadlAlias {
  alias: string;
  params?: string[];
  module?: string;
}

export interface CadlObject extends CadlDataType {
  kind: "object";
  properties: CadlObjectProperty[];
  parents: string[];
  extendedParents?: string[];
  spreadParents?: string[];
  decorators?: CadlDecorator[];
  alias?: CadlAlias;
}

export interface Models {
  enums: CadlEnum[];
  objects: CadlObject[];
}
