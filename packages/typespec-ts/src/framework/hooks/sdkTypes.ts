import { Operation, Type, getNamespaceFullName } from "@typespec/compiler";
import {
  SdkClientType,
  SdkHttpOperation,
  SdkModelPropertyType,
  SdkModelType,
  SdkServiceMethod,
  SdkType,
  getClientType
} from "@azure-tools/typespec-client-generator-core";
import { provideContext, useContext } from "../../contextManager.js";

import { visitPackageTypes } from "../../modular/emitModels.js";
import { SdkContext } from "../../utils/interfaces.js";
import {
  getAllAncestors,
  getAllProperties
} from "../../modular/helpers/operationHelpers.js";
import { normalizeModelPropertyName } from "../../modular/type-expressions/get-type-expression.js";
import { reportDiagnostic } from "../../lib.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";

export const emitQueue: Set<SdkType> = new Set<SdkType>();
export const flattenPropertyModelMap: Map<SdkModelPropertyType, SdkModelType> =
  new Map<SdkModelPropertyType, SdkModelType>();

export interface SdkTypeContext {
  operations: Map<Type, SdkServiceMethod<SdkHttpOperation>>;
  types: Map<Type, SdkType>;
  flattenProperties: Map<SdkModelPropertyType, SdkFlattenPropertyContext>;
}

export interface SdkFlattenPropertyContext {
  baseModel: SdkModelType;
  conflictMap?: Map<SdkModelPropertyType, string>;
}

export function useSdkTypes() {
  const sdkTypesContext = useContext("sdkTypes");
  const { tcgcContext } = useContext("emitContext");

  function getSdkType(type: Operation): SdkServiceMethod<SdkHttpOperation>;
  function getSdkType(type: Type): SdkType;
  function getSdkType(
    type: Type | Operation
  ): SdkType | SdkServiceMethod<SdkHttpOperation> {
    let sdkType: SdkType | SdkServiceMethod<SdkHttpOperation> | undefined;

    if (type.kind === "Operation") {
      sdkType = sdkTypesContext.operations.get(type);
    } else {
      sdkType =
        sdkTypesContext.types.get(type) ?? getClientType(tcgcContext, type);
    }

    if (!sdkType) {
      throw new Error(
        `SdkType not found for type: ${type.kind} ${
          "name" in type && typeof type.name == "string" ? type.name : ""
        } ${
          "namespace" in type && type.namespace
            ? ` in ${getNamespaceFullName(type.namespace)}`
            : ""
        }`
      );
    }

    return sdkType;
  }

  return getSdkType;
}

export function provideSdkTypes(context: SdkContext) {
  const { sdkPackage } = context;
  const sdkTypesContext: SdkTypeContext = {
    operations: new Map<Type, SdkServiceMethod<SdkHttpOperation>>(),
    types: new Map<Type, SdkType>(),
    flattenProperties: new Map<
      SdkModelPropertyType,
      SdkFlattenPropertyContext
    >()
  };
  visitPackageTypes(context);
  enrichFlattenProperties(
    context,
    sdkTypesContext.flattenProperties,
    flattenPropertyModelMap
  );
  for (const sdkModel of emitQueue) {
    switch (sdkModel.kind) {
      case "model":
        sdkModel.properties.forEach((prop) => {
          sdkTypesContext.types.set(prop.type.__raw!, prop.type);
        });
        if (sdkModel.discriminatedSubtypes) {
          Object.values(sdkModel.discriminatedSubtypes).forEach((subtype) => {
            sdkTypesContext.types.set(subtype.__raw!, subtype);
          });
        }
        break;
      case "enum":
        if (sdkModel.__raw) {
          sdkTypesContext.types.set(sdkModel.__raw, sdkModel);
        }
        break;
      case "union":
        sdkModel.variantTypes.forEach((v) => {
          if (v.__raw) {
            sdkTypesContext.types.set(v.__raw, v);
          }
        });
        break;
      case "array":
        sdkTypesContext.types.set(
          sdkModel.valueType.__raw!,
          sdkModel.valueType
        );
        break;
      case "dict":
        sdkTypesContext.types.set(
          sdkModel.valueType.__raw!,
          sdkModel.valueType
        );
        break;
      case "nullable":
        sdkTypesContext.types.set(sdkModel.__raw!, sdkModel);
        sdkTypesContext.types.set(sdkModel.type.__raw!, sdkModel.type);
        break;
    }
    if (!sdkModel.__raw) {
      continue;
    }
    sdkTypesContext.types.set(sdkModel.__raw, sdkModel);
  }

  for (const client of sdkPackage.clients) {
    for (const method of getAllOperationsFromClient(client)) {
      if (!method.__raw) {
        continue;
      }

      sdkTypesContext.operations.set(method.__raw, method);

      // Visit the parameters of the method to add them to the types map
      method.parameters.forEach((param) => {
        sdkTypesContext.types.set(param.type.__raw!, param.type);
      });
    }
  }

  provideContext("sdkTypes", sdkTypesContext);
}

// Enrich flatten properties with their base models and conflict maps
function enrichFlattenProperties(
  context: SdkContext,
  propertyContextMap: Map<SdkModelPropertyType, SdkFlattenPropertyContext>,
  propertyModelMap: Map<SdkModelPropertyType, SdkModelType>
) {
  // Build a map of base model to its existing properties excluding flatten properties
  // To check for conflicts later
  const baseModelProperties = new Map<SdkModelType, Set<string>>();
  propertyModelMap.forEach((baseModel, _) => {
    if (!baseModelProperties.has(baseModel)) {
      const propertiesExcludedFlatten = getAllProperties(
        context,
        baseModel,
        getAllAncestors(baseModel)
      )
        .filter((p) => p.flatten === false || p.flatten === undefined)
        .map((p) => normalizeModelPropertyName(context, p));
      baseModelProperties.set(
        baseModel,
        new Set<string>(propertiesExcludedFlatten)
      );
    }
  });
  for (const [flattenProperty, baseModel] of propertyModelMap) {
    const flattenContext: SdkFlattenPropertyContext = {
      baseModel: baseModel
    };
    propertyContextMap.set(flattenProperty, flattenContext);
    const existingProperties = baseModelProperties.get(baseModel)!;
    const conflictMap = new Map<SdkModelPropertyType, string>();
    const flattenModel = flattenProperty.type;

    if (flattenModel.kind !== "model") {
      continue;
    }
    if (baseModelProperties.has(flattenModel)) {
      // If the flatten model is also a base model of other flatten properties, which means it has multiple consecutive flatten operations
      // Since we cannot handle the flatten transition, report warning and skip it for now
      reportDiagnostic(context.program, {
        code: "unsupported-flatten-transition",
        format: {
          propertyName: flattenProperty.name,
          modelName: baseModel.name
        },
        target: flattenProperty.__raw!
      });
    }
    const allFlattenProperties = getAllProperties(
      context,
      flattenModel,
      getAllAncestors(flattenModel)
    );
    for (const flattenChildProperty of allFlattenProperties) {
      let childPropertyName = normalizeModelPropertyName(
        context,
        flattenChildProperty
      );
      if (existingProperties.has(childPropertyName)) {
        childPropertyName = normalizeName(
          `${childPropertyName}_${flattenProperty.name}_${childPropertyName}`,
          NameType.Property
        );
        conflictMap.set(flattenChildProperty, childPropertyName);
      }
      existingProperties.add(childPropertyName);
    }
    if (conflictMap.size === 0) {
      continue;
    }
    flattenContext.conflictMap = conflictMap;
  }
}

export function getAllOperationsFromClient(
  client: SdkClientType<SdkHttpOperation>
) {
  const clientQueue = [client];
  const operations: SdkServiceMethod<SdkHttpOperation>[] = [];
  while (clientQueue.length > 0) {
    const client = clientQueue.pop()!;
    if (client.children) {
      clientQueue.push(...client.children);
    }
    operations.push(...client.methods);
  }

  return operations;
}
