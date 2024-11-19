import { OptionalKind, ParameterDeclarationStructure } from "ts-morph";
import { Parameter } from "./modularCodeModel.js";

export interface ClientDetails {
  name: string;
  params?: OptionalKind<ParameterDeclarationStructure>[];
  description: string;
  baseUrl?: string;
  credentialsParam?: Parameter;
}

export interface OperationPathAndDeserDetails {
  path: string;
  expectedStatusesExpression: string;
  deserName: string;
  renamedDeserName?: string;
}
