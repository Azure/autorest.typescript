import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { Project, SourceFile } from "ts-morph";
import {
  getClassicalClientName,
  getClientName
} from "./helpers/namingHelpers.js";
import { ModularEmitterOptions } from "./interfaces.js";
import { resolveReference } from "../framework/reference.js";
import { PagingHelpers } from "./static-helpers-metadata.js";
import {
  SdkClientType,
  SdkContext,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";

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
      return i.getModuleSpecifierValue() === `./models/index.js`;
    });
  if (!modelsExportsIndex) {
    exportModules(rootIndexFile, project, srcPath, clientName, "models", {
      isTopLevel: true
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
    subfolder: ""
  }
) {
  const modelsFile = project.getSourceFile(
    `${srcPath}/${
      options.subfolder !== "" && options.subfolder
        ? options.subfolder + "/"
        : ""
    }${moduleName}/index.ts`
  );
  if (!modelsFile) {
    return;
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
  const moduleSpecifier = `./${
    options.isTopLevel && options.subfolder !== "" && options.subfolder
      ? options.subfolder + "/"
      : ""
  }${moduleName}/index.js`;
  indexFile.addExportDeclaration({
    moduleSpecifier,
    namedExports
  });
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
  const clientName = `${getClientName(client)}Client`;
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
