import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { Project, SourceFile } from "ts-morph";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import { ModularEmitterOptions } from "./interfaces.js";
import { resolveReference } from "../framework/reference.js";
import { MultipartHelpers, PagingHelpers } from "./static-helpers-metadata.js";
import {
  SdkClientType,
  SdkContext,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { join } from "path/posix";

export function buildRootIndex(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions,
  rootIndexFile: SourceFile
) {
  const { project } = emitterOptions;
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const { subfolder } = getModularClientOptions(context, client);
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
}

/**
 * This is a temporary solution for adding paging exports. Eventually we will have the binder generate the exports automatically.
 */
function exportPagingTypes(context: SdkContext, rootIndexFile: SourceFile) {
  if (!hasPaging(context)) {
    return;
  }

  const existingExports = getExistingExports(rootIndexFile);
  const namedExports = [
    resolveReference(PagingHelpers.PageSettings),
    resolveReference(PagingHelpers.ContinuablePage),
    resolveReference(PagingHelpers.PagedAsyncIterableIterator)
  ];

  const newNamedExports = getNewNamedExports(namedExports, existingExports);

  if (newNamedExports.length > 0) {
    addExportsToRootIndexFile(rootIndexFile, newNamedExports);
  }
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
        (y) => y.kind === "property" && y.multipartOptions?.isFilePart
      )
    )
  ) {
    const existingExports = getExistingExports(rootIndexFile);
    const namedExports = [resolveReference(MultipartHelpers.FileContents)];

    const newNamedExports = getNewNamedExports(namedExports, existingExports);

    if (newNamedExports.length > 0) {
      addExportsToRootIndexFile(rootIndexFile, newNamedExports);
    }
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
  newNamedExports: string[]
) {
  rootIndexFile.addExportDeclaration({
    namedExports: newNamedExports
  });
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
        const targetPath = join(srcPath, subfolder, moduleName);
        return dir.getPath().replace(/\\/g, "/").startsWith(targetPath);
      })
      .map((dir) => {
        return dir.getPath();
      });
  } else {
    folders = [join(srcPath, subfolder, moduleName)];
  }
  for (const folder of folders) {
    const apiFilePattern = join(folder, "index.ts");
    const modelsFile = project.getSourceFile(apiFilePattern);
    if (!modelsFile) {
      continue;
    }

    const exported = [...indexFile.getExportedDeclarations().keys()];

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
            (exDeclaration[0].endsWith("Serializer") ||
              exDeclaration[0].endsWith("Deserializer"))
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
    indexFile.addExportDeclaration({
      moduleSpecifier,
      namedExports
    });
  }
}

export function buildSubClientIndexFile(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
) {
  const { subfolder } = getModularClientOptions(context, client);
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const subClientIndexFile = emitterOptions.project.createSourceFile(
    `${srcPath}/${subfolder && subfolder !== "" ? subfolder + "/" : ""}index.ts`,
    undefined,
    { overwrite: true }
  );
  const clientName = `${getClassicalClientName(client)}`;
  const clientFilePath = `${srcPath}/${
    subfolder && subfolder !== "" ? subfolder + "/" : ""
  }${normalizeName(clientName, NameType.File)}.ts`;
  const clientFile = emitterOptions.project.getSourceFile(clientFilePath);

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${clientFilePath}`);
  }

  exportClassicalClient(client, subClientIndexFile, subfolder ?? "", true);
  exportRestoreHelpers(
    subClientIndexFile,
    emitterOptions.project,
    srcPath,
    clientName,
    subfolder
  );
  exportModules(
    subClientIndexFile,
    emitterOptions.project,
    srcPath,
    clientName,
    "api",
    {
      subfolder,
      interfaceOnly: true
    }
  );
  exportModules(
    subClientIndexFile,
    emitterOptions.project,
    srcPath,
    clientName,
    "classic",
    { subfolder }
  );
}
