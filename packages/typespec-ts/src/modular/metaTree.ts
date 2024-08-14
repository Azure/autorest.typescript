import { Schema as RlcType } from "./rlc/common/index.js";
import { Type as ModularType } from "./modularCodeModel.js";
import { Type } from "@typespec/compiler";

export interface RlcTypeMetadata {
  rlcType: RlcType;
}

export interface ModularTypeMetadata {
  modularType: ModularType;
}

export type RlcMetaTree = Map<Type, RlcTypeMetadata>;
export type ModularMetaTree = Map<Type, ModularTypeMetadata>;
