import { RLCOptions } from "@azure-tools/rlc-common";

export interface ModularOptions {
  sourceRoot: string;
  compatibilityMode: boolean;
  experimentalExtensibleEnums: boolean;
  experimentalSubpath?: boolean;
  experimentalMergeStrategy?: "merge" | "namespace";
}
export interface ModularEmitterOptions {
  options: RLCOptions;
  modularOptions: ModularOptions;
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
