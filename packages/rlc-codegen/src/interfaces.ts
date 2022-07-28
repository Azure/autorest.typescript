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
}

export interface PathMetadata {
  name: string;
  pathParameters: PathParameter[];
  methods: Methods;
  annotations?: OperationAnnotations;
}

export type Paths = Record<string, PathMetadata>;

export type PathParameter = {
  name: string;
  type: string;
  description?: string;
};

export interface OperationAnnotations {
  isLongRunning?: boolean;
  isPageable?: boolean;
}

export interface RLCModel {
  libraryName: string;
  srcPath: string;
  paths: Paths;
  schemas: Schema[];
}
export interface File {
  path: string,
  content: string
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
  description: string;
  required?: boolean;
}

export interface ObjectSchema extends Schema {
  properties?: Schema[];
  discriminatorValue?: string;
  discriminator?: Schema;
  usage?: SchemaContext[];
  children?: {
    all: ObjectSchema[];
    immediate: ObjectSchema[];
  };
  parents?: { 
    all: ObjectSchema[]
    immediate: ObjectSchema[];
  }
}

export interface Property extends Schema {

}

export interface Parameter extends Schema {

}