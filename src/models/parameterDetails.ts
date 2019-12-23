import { Parameter, ParameterLocation } from "@azure-tools/codemodel";
import { Mapper } from "@azure/core-http";

export interface ParameterDetails {
  nameRef: string;
  serializedName: string;
  location: ParameterLocation;
  required?: boolean;
  parameterPath: string | string[];
  mapper: string | Mapper;
  isGlobal: boolean;
  parameter: Parameter;
  operationsIn?: string[];
}
