import { NameType } from "@azure-tools/rlc-common";

import { ModularEmitterOptions } from "./modularCodeModel.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";

function buildExportsForMultiClient(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions,
  packageInfo: any
) {
  if (context.sdkPackage.clients.length > 1) {
    delete packageInfo.exports["./api"];
    delete packageInfo.exports["./models"];
    for (const client of context.sdkPackage.clients) {
      const { subfolder } = getModularClientOptions(context, client);
      packageInfo.exports[`./${subfolder}`] = `./src/${subfolder}/index.ts`;

      packageInfo.exports[`./${subfolder}/api`] =
        `./src/${subfolder}/api/index.ts`;
      packageInfo.exports[`./${subfolder}/models`] =
        `./src/${subfolder}/models/index.ts`;
    }
  }
  if (emitterOptions.options.hierarchyClient) {
    for (const client of context.sdkPackage.clients) {
      const { subfolder } = getModularClientOptions(context, client);
      const methodMap = getMethodHierarchiesMap(context, client);
      for (const [prefixKey, _] of methodMap) {
        const prefixes = prefixKey.split("/");
        if (prefixKey === "") {
          continue;
        }
        const subApiPath = `api/${getClassicalLayerPrefix(
          prefixes,
          NameType.File,
          "/"
        )}`;
        packageInfo.exports[
          `./${subfolder ? subfolder + "/" : ""}${subApiPath}`
        ] = `src/${subfolder ? subfolder + "/" : ""}${subApiPath}/index.ts`;
      }
    }
  }

  return packageInfo.exports;
}

export function getModuleExports(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions
) {
  const exports: Record<string, any> = {
    exports: {
      ".": "./src/index.ts",
      "./models": "./src/models/index.ts"
    }
  };
  if (!emitterOptions.options.azureArm) {
    exports["exports"]["./api"] = "./src/api/index.ts";
  }

  return buildExportsForMultiClient(context, emitterOptions, exports);
}
