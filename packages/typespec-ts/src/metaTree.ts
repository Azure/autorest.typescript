import { Schema as RlcType } from "@azure-tools/rlc-common";
import { Type as ModularType } from "./modular/modularCodeModel.js";
import { Type } from "@typespec/compiler";

export interface RlcTypeMetadata {
  rlcType: RlcType;
}

export interface ModularTypeMetadata {
  modularType: ModularType;
}

export type RlcMetaTree = Map<Type, RlcTypeMetadata>;
export type ModularMetaTree = Map<Type, ModularTypeMetadata>;
