import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { Project, SourceFile } from "ts-morph";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import { ModularEmitterOptions } from "./interfaces.js";
import { resolveReference } from "../framework/reference.js";
import {
  CloudSettingHelpers,
  MultipartHelpers,
  PagingHelpers
} from "./static-helpers-metadata.js";
import {
  SdkClientType,
  SdkContext,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { join } from "path/posix";
import { useContext } from "../contextManager.js";

export function buildRootIndex(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions,
  rootIndexFile: SourceFile,
  clientMap?: [string[], SdkClientType<SdkServiceOperation>]
) {
  if (!clientMap) {
    // we still need to export the models if no client is provided
    exportModels(emitterOptions, rootIndexFile);
    return;
  }
  const project = useContext("outputProject");
  const [_, client] = clientMap;
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const { subfolder } = getModularClientOptions(clientMap);
  const clientName = `${getClassicalClientName(client)}`;
  const clientFile = project.getSourceFile(
    `${srcPath}/${subfolder && subfolder !== "" ? subfolder + "/" : ""}${normalizeName(
      clientName,
      NameType.File
    )}.ts`
  );

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/${normalizeName(
        clientName,
        NameType.File
      )}.ts`
    );
  }

  exportClassicalClient(client, rootIndexFile, subfolder ?? "");
  exportRestoreHelpers(
    rootIndexFile,
    project,
    srcPath,
    clientName,
    subfolder,
    true
  );
  exportModels(emitterOptions, rootIndexFile, clientName);
  exportModules(rootIndexFile, project, srcPath, clientName, "api", {
    subfolder,
    interfaceOnly: true,
    isTopLevel: true
  });
  exportModules(rootIndexFile, project, srcPath, clientName, "classic", {
    subfolder,
    isTopLevel: true
  });

  exportPagingTypes(context, rootIndexFile);
  exportFileContentsType(context, rootIndexFile);
  exportAzureCloudTypes(context, rootIndexFile);
}

function exportModels(
  emitterOptions: ModularEmitterOptions,
  rootIndexFile: SourceFile,
  clientName: string = ""
) {
  // export models index file if not exists
  const project = useContext("outputProject");
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const modelsExportsIndex = rootIndexFile
    .getExportDeclarations()
    ?.find((i) => {
      return i.getModuleSpecifierValue()?.startsWith(`./models/`);
    });
  if (!modelsExportsIndex) {
    exportModules(rootIndexFile, project, srcPath, clientName, "models", {
      isTopLevel: true,
      recursive: true
    });
  }
}

function exportAzureCloudTypes(context: SdkContext, rootIndexFile: SourceFile) {
  if (context.arm) {
    addExportsToRootIndexFile(rootIndexFile, [
      resolveReference(CloudSettingHelpers.AzureClouds),
      resolveReference(CloudSettingHelpers.AzureSupportedClouds)
    ]);
  }
}

/**
 * This is a temporary solution for adding paging exports. Eventually we will have the binder generate the exports automatically.
 */
function exportPagingTypes(context: SdkContext, rootIndexFile: SourceFile) {
  if (!hasPaging(context)) {
    return;
  }

  addExportsToRootIndexFile(rootIndexFile, [
    resolveReference(PagingHelpers.PageSettings),
    resolveReference(PagingHelpers.ContinuablePage),
    resolveReference(PagingHelpers.PagedAsyncIterableIterator)
  ]);
}

function hasPaging(context: SdkContext): boolean {
  return context.sdkPackage.clients.some((client) => {
    const methodMap = getMethodHierarchiesMap(context, client);
    for (const [_, operations] of methodMap) {
      if (
        operations.some((op) => op.kind === "paging" || op.kind === "lropaging")
      ) {
        return true;
      }
    }
    return false;
  });
}

function exportFileContentsType(
  context: SdkContext,
  rootIndexFile: SourceFile
) {
  if (
    context.sdkPackage.models.some((x) =>
      x.properties.some(
        // eslint-disable-next-line
        (y) => y.kind === "property" && y.multipartOptions?.isFilePart
      )
    )
  ) {
    addExportsToRootIndexFile(rootIndexFile, [
      resolveReference(MultipartHelpers.FileContents)
    ]);
  }
}

function getExistingExports(rootIndexFile: SourceFile): Set<string> {
  return new Set(
    rootIndexFile
      .getExportDeclarations()
      .flatMap((exportDecl) =>
        exportDecl.getNamedExports().map((namedExport) => namedExport.getName())
      )
  );
}

function getNewNamedExports(
  namedExports: string[],
  existingExports: Set<string>
): string[] {
  return namedExports.filter(
    (namedExport) => !existingExports.has(namedExport)
  );
}

function addExportsToRootIndexFile(
  rootIndexFile: SourceFile,
  namedExports: string[]
) {
  const existingExports = getExistingExports(rootIndexFile);
  const newNamedExports = getNewNamedExports(namedExports, existingExports);
  if (newNamedExports.length > 0) {
    rootIndexFile.addExportDeclaration({
      namedExports: newNamedExports
    });
  }
}

function exportRestoreHelpers(
  indexFile: SourceFile,
  project: Project,
  srcPath: string,
  clientName: string,
  subfolder: string = "",
  isTopLevel: boolean = false
) {
  const helperFile = project.getSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }restorePollerHelpers.ts`
  );
  if (!helperFile) {
    return;
  }
  const exported = [...indexFile.getExportedDeclarations().keys()];
  const namedExports = [...helperFile.getExportedDeclarations().keys()].map(
    (helper) => {
      if (exported.indexOf(helper) > -1) {
        return `${helper} as ${clientName}${helper}`;
      }
      return helper;
    }
  );
  const moduleSpecifier = `./${
    isTopLevel && subfolder && subfolder !== "" ? subfolder + "/" : ""
  }restorePollerHelpers.js`;
  indexFile.addExportDeclaration({
    moduleSpecifier,
    namedExports
  });
}

function exportClassicalClient(
  client: SdkClientType<SdkServiceOperation>,
  indexFile: SourceFile,
  subfolder: string,
  isSubClient: boolean = false
) {
  const clientName = client.name;
  indexFile.addExportDeclaration({
    namedExports: [clientName],
    moduleSpecifier: `./${
      subfolder && subfolder !== "" && !isSubClient ? subfolder + "/" : ""
    }${normalizeName(clientName, NameType.File)}.js`
  });
}

export interface ExportModulesOptions {
  interfaceOnly?: boolean;
  isTopLevel?: boolean;
  subfolder?: string;
  recursive?: boolean;
}

function exportModules(
  indexFile: SourceFile,
  project: Project,
  srcPath: string,
  clientName: string,
  moduleName: string,
  options: ExportModulesOptions = {
    interfaceOnly: false,
    isTopLevel: false,
    subfolder: "",
    recursive: false
  }
) {
  const subfolder = options.subfolder ?? "";
  let folders = [];
  if (options.recursive) {
    folders = project
      .getDirectories()
      .filter((dir) => {
        const formattedDir = dir.getPath().replace(/\\/g, "/");
        const targetPath = join(srcPath, subfolder, moduleName).replace(
          /\\/g,
          "/"
        );
        return formattedDir.startsWith(targetPath);
      })
      .map((dir) => {
        return dir.getPath().replace(/\\/g, "/");
      });
  } else if (options.isTopLevel && moduleName === "api") {
    folders = project
      .getDirectories()
      .filter((dir) => {
        const formattedDir = dir.getPath().replace(/\\/g, "/");
        const targetPath = join(srcPath, subfolder, moduleName).replace(
          /\\/g,
          "/"
        );
        return formattedDir.startsWith(targetPath);
      })
      .map((dir) => {
        return dir.getPath().replace(/\\/g, "/");
      });
  } else {
    folders = [join(srcPath, subfolder, moduleName).replace(/\\/g, "/")];
  }
  for (const folder of folders) {
    const apiFilePattern = join(folder, "index.ts").replace(/\\/g, "/");
    const modelsFile = project.getSourceFile(apiFilePattern);
    if (!modelsFile) {
      continue;
    }

    const exported = [...indexFile.getExportedDeclarations().keys()];
    const serializerOrDeserializerRegex = /.*(Serializer|Deserializer)(_\d+)?$/;
    const namedExports = [...modelsFile.getExportedDeclarations().entries()]
      .filter((exDeclaration) => {
        if (exDeclaration[0].startsWith("_")) {
          return false;
        }
        return exDeclaration[1].some((ex) => {
          if (
            options.interfaceOnly &&
            ex.getKindName() !== "InterfaceDeclaration"
          ) {
            return false;
          }
          if (
            moduleName === "models" &&
            ex.getKindName() === "FunctionDeclaration" &&
            serializerOrDeserializerRegex.test(exDeclaration[0])
          ) {
            return false;
          }
          if (
            options.interfaceOnly &&
            options.isTopLevel &&
            exDeclaration[0].endsWith("Context")
          ) {
            return false;
          }

          return true;
        });
      })
      .map((exDeclaration) => {
        if (exported.indexOf(exDeclaration[0]) > -1) {
          return `${exDeclaration[0]} as ${clientName}${exDeclaration[0]}`;
        }
        return exDeclaration[0];
      });
    const moduleSpecifier = `.${modelsFile
      .getFilePath()
      .replace(indexFile.getDirectoryPath(), "")
      .replace(/\\/g, "/")
      .replace(".ts", "")}.js`;
    if (namedExports.length > 0) {
      indexFile.addExportDeclaration({
        moduleSpecifier,
        namedExports
      });
    }
  }
}

export function buildSubClientIndexFile(
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions
) {
  const project = useContext("outputProject");
  const [_, client] = clientMap;
  const { subfolder } = getModularClientOptions(clientMap);
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const subClientIndexFile = project.createSourceFile(
    `${srcPath}/${subfolder && subfolder !== "" ? subfolder + "/" : ""}index.ts`,
    undefined,
    { overwrite: true }
  );
  const clientName = `${getClassicalClientName(client)}`;
  const clientFilePath = `${srcPath}/${
    subfolder && subfolder !== "" ? subfolder + "/" : ""
  }${normalizeName(clientName, NameType.File)}.ts`;
  const clientFile = project.getSourceFile(clientFilePath);

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${clientFilePath}`);
  }

  exportClassicalClient(client, subClientIndexFile, subfolder ?? "", true);
  exportRestoreHelpers(
    subClientIndexFile,
    project,
    srcPath,
    clientName,
    subfolder
  );
  exportModules(subClientIndexFile, project, srcPath, clientName, "api", {
    subfolder,
    interfaceOnly: true,
    recursive: true
  });
  exportModules(subClientIndexFile, project, srcPath, clientName, "classic", {
    subfolder
  });
}
