import {
  InterfaceDeclarationStructure,
  OptionalKind,
  TypeAliasDeclarationStructure
} from "ts-morph";
import { ModularCodeModel, Type } from "../modularCodeModel.js";
import { getDocsFromDescription } from "./docsHelpers.js";

// ====== UTILITIES ======

export function isAzureCoreErrorSdkType(t: Type) {
  return (
    t.name &&
    ["error", "errormodel", "innererror", "errorresponse"].includes(
      t.name.toLowerCase()
    ) &&
    t.isCoreErrorType === true
  );
}

export function getCoreClientErrorType(
  name: string,
  coreClientTypes: Set<string>
) {
  const coreClientType: string = name === "Error" ? "ErrorModel" : name;
  coreClientTypes.add(coreClientType);
  return coreClientType;
}

// ====== TYPE EXTRACTION ======

export function extractModels(codeModel: ModularCodeModel): Type[] {
  const models = codeModel.types.filter(
    (t) =>
      (t.type === "model" || t.type === "enum") &&
      !isAzureCoreErrorSdkType(t) &&
      !(t.type == "model" && t.name === "")
  );

  for (const model of codeModel.types) {
    if (model.type === "combined" && model.nullable) {
      for (const unionModel of model.types ?? []) {
        if (unionModel.type === "model") {
          models.push(unionModel);
        }
      }
    }
  }
  return models;
}

// ====== TYPE BUILDERS ======
export function buildEnumModel(
  model: Type
): OptionalKind<TypeAliasDeclarationStructure> {
  return {
    name: model.name!,
    isExported: true,
    docs: [
      ...getDocsFromDescription(model.description),
      // If it is a fixed enum we don't need to list the known values in the docs as the
      // output will be a literal union which is self documenting
      model.isFixed
        ? ""
        : // When we generate an "extensible" enum, the type will be "string" so we list the known values
          // in the docs for user reference.
          (model.values ?? []).map((v) => `"${v.value}"`).join(", ")
    ],
    type: model.isFixed
      ? (model.values ?? []).map((v) => `"${v.value}"`).join(" | ")
      : "string"
  };
}

export type InterfaceStructure = OptionalKind<InterfaceDeclarationStructure> & {
  extends: string[];
};
