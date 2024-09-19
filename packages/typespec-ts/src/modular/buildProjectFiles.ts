import { NameType, normalizeName } from "@azure-tools/rlc-common";

import { ModularCodeModel } from "./modularCodeModel.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";

function buildExportsForMultiClient(
  codeModel: ModularCodeModel,
  packageInfo: any
) {
  if (codeModel.clients.length > 1) {
    delete packageInfo.exports["./api"];
    delete packageInfo.exports["./models"];
    for (const client of codeModel.clients) {
      const subfolder = normalizeName(
        client.name.replace("Client", ""),
        NameType.File
      );
      packageInfo.exports[`./${subfolder}`] = `./src/${subfolder}/index.ts`;

      packageInfo.exports[`./${subfolder}/api`] =
        `./src/${subfolder}/api/index.ts`;
      packageInfo.exports[`./${subfolder}/models`] =
        `./src/${subfolder}/models/index.ts`;
    }
  }
  if (codeModel.options.hierarchyClient) {
    for (const client of codeModel.clients) {
      for (const operationGroup of client.operationGroups) {
        if (operationGroup.namespaceHierarchies.length === 0) {
          continue;
        }
        const subfolder =
          codeModel.clients.length > 1
            ? normalizeName(client.name.replace("Client", ""), NameType.File)
            : undefined;
        const subApiPath = `api/${getClassicalLayerPrefix(
          operationGroup,
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

export function getModuleExports(codeModel: ModularCodeModel) {
  const exports: Record<string, any> = {
    exports: {
      ".": "./src/index.ts",
      "./models": "./src/models/index.ts"
    }
  };
  if (!codeModel.options.azureArm) {
    exports["exports"]["./api"] = "./src/api/index.ts";
  }

  return buildExportsForMultiClient(codeModel, exports);
}
