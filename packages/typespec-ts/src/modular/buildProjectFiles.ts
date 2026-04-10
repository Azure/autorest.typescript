import { NameType } from "@azure-tools/rlc-common";

import { ModularEmitterOptions } from "./interfaces.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  getClientHierarchyMap,
  getModularClientOptions
} from "../utils/clientUtils.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { useContext } from "../contextManager.js";
import path from "path/posix";

/**
 * Computes the relative path prefix (e.g. `./src` or `./src/generated`) from
 * the project root to the modular sources directory.  This prefix is used when
 * building export map entries so that they always point to the correct folder
 * even when the generated code lives under `src/generated` instead of `src`.
 */
function getSourceRootPrefix(
  emitterOptions: ModularEmitterOptions,
  context: SdkContext
): string {
  const sourceRoot = emitterOptions.modularOptions.sourceRoot.replace(
    /\\/g,
    "/"
  );
  const rootDir = (context.generationPathDetail?.rootDir ?? "").replace(
    /\\/g,
    "/"
  );

  if (rootDir && sourceRoot.startsWith(rootDir)) {
    const relativePath = path.relative(rootDir, sourceRoot).replace(/\\/g, "/");
    return `./${relativePath}`;
  }

  return "./src";
}

function buildExportsForMultiClient(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions,
  packageInfo: any
) {
  const srcPrefix = getSourceRootPrefix(emitterOptions, context);
  const clientMap = getClientHierarchyMap(context);
  let hasTopLevelClient = false;
  for (const [hierarchy, client] of clientMap) {
    const methodMap = getMethodHierarchiesMap(context, client);
    if (hierarchy.length === 0) {
      hasTopLevelClient = true;
    }
    const { subfolder } = getModularClientOptions([hierarchy, client]);
    if (subfolder !== "" && methodMap.size > 0) {
      packageInfo.exports[`./${subfolder}`] =
        `${srcPrefix}/${subfolder}/index.ts`;

      packageInfo.exports[`./${subfolder}/api`] =
        `${srcPrefix}/${subfolder}/api/index.ts`;
    }
  }
  if (!hasTopLevelClient) {
    delete packageInfo.exports["./api"];
  }
  if (emitterOptions.options.hierarchyClient) {
    // TODO: support api subpath exports for multi-service. Skip for now. https://github.com/Azure/autorest.typescript/issues/3717
    if (!emitterOptions.options.isMultiService) {
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
          ] =
            `${srcPrefix.slice(2)}/${subfolder ? subfolder + "/" : ""}${subApiPath}/index.ts`;
        }
      }
    }
    delete packageInfo.exports["./models"];
    const modelSubpaths = getModelSubpaths(emitterOptions);
    for (const modelSubpath of modelSubpaths) {
      packageInfo.exports[`./${modelSubpath.replace("/index.ts", "")}`] =
        `${srcPrefix}/${modelSubpath}`;
    }
  }

  return packageInfo.exports;
}

export function getModuleExports(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions
) {
  const srcPrefix = getSourceRootPrefix(emitterOptions, context);
  const exports: Record<string, any> = {
    exports: {
      ".": `${srcPrefix}/index.ts`,
      "./models": `${srcPrefix}/models/index.ts`
    }
  };
  exports["exports"]["./api"] = `${srcPrefix}/api/index.ts`;

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
