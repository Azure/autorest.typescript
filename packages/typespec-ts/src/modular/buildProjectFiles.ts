import { NameType } from "@azure-tools/rlc-common";

import { ModularEmitterOptions } from "./interfaces.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import {
  getClientHierarchyMap,
  getModularClientOptions
} from "../utils/clientUtils.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { useContext } from "../contextManager.js";
import path from "path/posix";

function buildExportsForMultiClient(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions,
  packageInfo: any
) {
  const clientMap = getClientHierarchyMap(context);
  let hasTopLevelClient = false;
  for (const [hierarchy, client] of clientMap) {
    const methodMap = getMethodHierarchiesMap(context, client);
    if (hierarchy.length === 0) {
      hasTopLevelClient = true;
    }
    const { subfolder } = getModularClientOptions([hierarchy, client]);
    if (subfolder !== "" && methodMap.size > 0) {
      packageInfo.exports[`./${subfolder}`] = `./src/${subfolder}/index.ts`;

      packageInfo.exports[`./${subfolder}/api`] =
        `./src/${subfolder}/api/index.ts`;
    }
  }
  if (!hasTopLevelClient) {
    delete packageInfo.exports["./api"];
  }
  if (emitterOptions.options.hierarchyClient) {
    for (const flattenedClient of clientMap) {
      const { subfolder } = getModularClientOptions(flattenedClient);
      const client = flattenedClient[1];
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
    delete packageInfo.exports["./models"];
    const modelSubpaths = getModelSubpaths(emitterOptions);
    for (const modelSubpath of modelSubpaths) {
      packageInfo.exports[`./${modelSubpath.replace("/index.ts", "")}`] =
        `./src/${modelSubpath}`;
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
  exports["exports"]["./api"] = "./src/api/index.ts";

  return buildExportsForMultiClient(context, emitterOptions, exports);
}

function getModelSubpaths(emitterOptions: ModularEmitterOptions) {
  const outputProject = useContext("outputProject");
  const modelFiles = outputProject.getSourceFiles(
    path.join(
      emitterOptions.modularOptions.sourceRoot.replace(/\\/g, "/"),
      `models/**/*.ts`
    )
  );
  const subpath = new Set<string>();
  for (const modelFile of modelFiles) {
    const filepath = modelFile.getFilePath().replace(/\\/g, "/");
    if (!filepath.endsWith("index.ts")) {
      continue;
    }
    subpath.add(
      path.relative(
        emitterOptions.modularOptions.sourceRoot.replace(/\\/g, "/"),
        filepath
      )
    );
  }
  return Array.from(subpath);
}
