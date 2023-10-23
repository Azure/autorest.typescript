import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { Namespace, isGlobalNamespace, isService } from "@typespec/compiler";

export function getModelNamespaceName(
  dpgContext: SdkContext,
  namespace: Namespace
): string | undefined {
  return namespace &&
    !isGlobalNamespace(dpgContext.program, namespace) &&
    !isService(dpgContext.program, namespace)
    ? getModelNamespaceName(dpgContext, namespace.namespace!) + namespace.name
    : "";
}
