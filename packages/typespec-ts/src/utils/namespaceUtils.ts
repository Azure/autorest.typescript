import { getAllModels, SdkType } from "@azure-tools/typespec-client-generator-core";
import {
  getNamespaceFullName,
  isGlobalNamespace,
  isService,
  Model,
  Namespace,
  Operation
} from "@typespec/compiler";
import { SdkContext } from "./interfaces.js";
import { reportDiagnostic } from "../lib.js";

export function getModelNamespaceName(
  dpgContext: SdkContext,
  namespace: Namespace
): string[] {
  const result: string[] = [];
  namespace &&
  !isGlobalNamespace(dpgContext.program, namespace) &&
  !isService(dpgContext.program, namespace)
    ? (result.push(...getModelNamespaceName(dpgContext, namespace.namespace!)),
      result.push(namespace.name))
    : result;
  return result;
}

export function getOperationNamespaceInterfaceName(
  dpgContext: SdkContext,
  operation: Operation
): string[] {
  const result: string[] = [];
  if (
    dpgContext.rlcOptions?.hierarchyClient === false &&
    dpgContext.rlcOptions?.enableOperationGroup !== true
  ) {
    return result;
  }
  if (operation.interface) {
    if (
      dpgContext.rlcOptions?.enableOperationGroup === true &&
      dpgContext.rlcOptions?.hierarchyClient === false
    ) {
      result.push(operation.interface.name);
      return result;
    }
    if (
      operation.interface.namespace &&
      !isGlobalNamespace(dpgContext.program, operation.interface.namespace) &&
      !isService(dpgContext.program, operation.interface.namespace)
    ) {
      result.push(
        ...getModelNamespaceName(dpgContext, operation.interface.namespace)
      );
    }
    result.push(operation.interface.name);
  } else if (operation.namespace) {
    !isGlobalNamespace(dpgContext.program, operation.namespace) &&
    !isService(dpgContext.program, operation.namespace)
      ? (result.push(
          ...getModelNamespaceName(dpgContext, operation.namespace.namespace!)
        ),
        result.push(operation.namespace.name))
      : result;
  }
  return result;
}

export function detectModelConflicts(dpgContext: SdkContext) {
  const allModels = getAllModels(dpgContext);
  const nameSet = new Map<string, SdkType[]>();
  let hasConflict = false;
  for (const model of allModels) {
    if (model.name === "") {
      continue;
    }
    if (nameSet.has(model.name)) {

      nameSet.set(model.name, [...nameSet.get(model.name)!, model]);
      hasConflict = true;
    } else {
      nameSet.set(model.name, [model]);
    }
  }
  for(const [key, value] of nameSet) {
    if(value.length > 1) {
      const fullNamespaceNames = nameSet.get(key)!.map((m) =>
        getNamespaceFullName((m.__raw! as Model).namespace!)
      );
      reportDiagnostic(dpgContext.program, {
        code: "duplicate-model-name",
        format: {
          modelName: key,
          namespace: fullNamespaceNames.join(", ")
        },
        target: value[0]!.__raw!
      });
    }
  }
  return hasConflict;
}
