export interface CadlProgram {
  models: Models;
  serviceInformation: ServiceInformation;
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

export interface CadlEnum extends WithDoc {
  name: string;
  members: (string | number | boolean)[];
  isExtensible: boolean;
}

export type CadlParameterLocation = "path" | "query" | "header" | "body";
export interface CadlParameter extends CadlObjectProperty {
  location: CadlParameterLocation;
}

export interface CadlObjectProperty extends WithDoc {
  name: string;
  isOptional: boolean;
  type: string;
}

export interface CadlObject extends WithDoc {
  properties: CadlObjectProperty[];
  name: string;
}

export interface Models {
  enums: CadlEnum[];
  objects: CadlObject[];
  operationGroups: CadlOperationGroup[];
}
