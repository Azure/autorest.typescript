import { Parameter } from "@azure-tools/codemodel";

export interface ParameterDetails {
  nameRef: string;
  serializedName: string;
  parameter: Parameter;
  operationsIn?: string[];
}

export interface ModelParameters {
  globalParameters: ParameterDetails[];
  operationParameters: ParameterDetails[];
}
