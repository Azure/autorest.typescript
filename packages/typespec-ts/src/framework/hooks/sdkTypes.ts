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

export const emitQueue: Set<SdkType> = new Set<SdkType>();
export const flattenProperties: Map<SdkModelPropertyType, SdkModelType> =
  new Map<SdkModelPropertyType, SdkModelType>();

export interface SdkTypeContext {
  operations: Map<Type, SdkServiceMethod<SdkHttpOperation>>;
  types: Map<Type, SdkType>;
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
  const sdkTypesContext = {
    operations: new Map<Type, SdkServiceMethod<SdkHttpOperation>>(),
    types: new Map<Type, SdkType>()
  };
  visitPackageTypes(context);
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
