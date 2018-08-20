import * as dependencies from "./dependencies";

const repositoryFolderPath = dependencies.getThisRepositoryFolderPath();
const azuremetadataFolderPath = dependencies.resolvePath(repositoryFolderPath, "test", "azuremetadata", "generated");
const metadataFolderPath = dependencies.resolvePath(repositoryFolderPath, "test", "metadata", "generated");
const packageFolders: dependencies.PackageFolder[] = [
  {
    folderPath: repositoryFolderPath,
    toClean: [
      "node_modules",
      "package-lock.json"
    ],
    toUpdate: [
      "package.json",
      "README.md",
      "src/vanilla/Model/CodeModelTS.cs",
      "src/azure/Model/CodeModelTSa.cs"
    ]
  },
  {
    folderPath: azuremetadataFolderPath,
    toClean: [
      "node_modules",
      "package-lock.json"
    ],
    toUpdate: [
      "package.json",
      "README.md"
    ]
  },
  {
    folderPath: metadataFolderPath,
    toClean: [
      "node_modules",
      "package-lock.json"
    ],
    toUpdate: [
      "package.json",
      "README.md"
    ]
  }
]

const localDependencies: string[] = dependencies.getDependenciesWithClonedRepositories();
for (const localDependency of localDependencies) {
  dependencies.runLocalRepositoryNPMScript(localDependency, "local");
}
let refreshNodeModules: boolean = dependencies.shouldForceRefresh(process.argv);
for (const localDependency of localDependencies) {
  const localRepositoryPath = dependencies.getLocalRepositoryPath(localDependency);
  if (dependencies.updatePackageJsonDependency(localDependency, `file:${localRepositoryPath}`)) {
    refreshNodeModules = true;
  }
  if (localDependency === "ms-rest-js") {
    dependencies.updateGeneratedPackageJsonMsRestJsDependencyVersion(localRepositoryPath);
  } else if (localDependency === "ms-rest-azure-js") {
    dependencies.updateGeneratedPackageJsonMsRestAzureJsDependencyVersion(localRepositoryPath);
  }
}
if (refreshNodeModules) {
  dependencies.refreshNodeModules();
}