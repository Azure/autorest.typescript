export interface CadlProgram {
  models: Models;
  operationGroups: CadlOperationGroup[];
  serviceInformation: ServiceInformation;
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

export interface CadlOperation extends WithDoc, WithSummary {
  name: string;
  verb: "get" | "post" | "put" | "delete";
  route: string;
  responses: string[];
  parameters: CadlParameter[];
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
}

export interface CadlDecorator {
  name: string;
  arguments?: string[];
  module?: string;
  namespace?: string;
}

export interface CadlObject extends CadlDataType {
  kind: "object";
  properties: CadlObjectProperty[];
  parents: string[];
  decorators?: CadlDecorator[];
}

export interface Models {
  enums: CadlEnum[];
  objects: CadlObject[];
}
