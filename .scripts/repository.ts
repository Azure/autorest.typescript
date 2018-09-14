import * as dependencies from "./dependencies";

const repositoryFolderPath = dependencies.getThisRepositoryFolderPath();
export const packageFolders: dependencies.PackageFolder[] = [
  {
    folderPath: repositoryFolderPath,
    extraFilePaths: [
      "src/vanilla/Model/CodeModelTS.cs",
      "src/azure/Model/CodeModelTSa.cs"
    ]
  },
  {
    folderPath: dependencies.resolvePath(repositoryFolderPath, "test", "azuremetadata", "generated", "Lro")
  },
  {
    folderPath: dependencies.resolvePath(repositoryFolderPath, "test", "metadata", "generated", "BodyComplex")
  },
  {
    folderPath: dependencies.resolvePath(repositoryFolderPath, "test", "multiapi", "generated")
  }
];