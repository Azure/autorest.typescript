import { RLCOptions } from "@azure-tools/rlc-common";
import { Project } from "ts-morph";

export interface ModularOptions {
  sourceRoot: string;
  compatibilityMode: boolean;
  experimentalExtensibleEnums: boolean;
}
export interface ModularEmitterOptions {
  options: RLCOptions;
  modularOptions: ModularOptions;
  project: Project;
}

export interface ModularClientOptions {
  subfolder?: string;
  rlcClientName: string;
}

export interface OperationPathAndDeserDetails {
  path: string;
  expectedStatusesExpression: string;
  deserName: string;
  renamedDeserName?: string;
}
