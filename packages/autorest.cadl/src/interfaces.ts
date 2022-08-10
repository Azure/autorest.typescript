export interface CadlProgram {
  models: Models;
  serviceInformation: ServiceInformation;
}

export interface ServiceInformation {
  name: string;
  doc?: string;
  version?: string;
  endpoint?: string;
  endpointParameters?: EndpointParameter[];
  produces?: string[];
  consumes?: string[];
}

export interface EndpointParameter {
  name: string;
  doc: string | string[];
}

export interface CadlEnum {
  name: string;
  members: (string | number | boolean)[];
  isExtensible: boolean;
}

export interface CadlObjectProperty {
  doc: string | string[];
  name: string;
  isOptional: boolean;
  type: string;
}

export interface CadlObject {
  properties: CadlObjectProperty[];
  doc: string | string[];
  name: string;
}

export interface Models {
  enums: CadlEnum[];
  objects: CadlObject[];
}
