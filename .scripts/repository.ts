import * as dependencies from "./dependencies";

const repositoryFolderPath = dependencies.getThisRepositoryFolderPath();
export const packageFolders: dependencies.PackageFolder[] = [
  {
    folderPath: repositoryFolderPath
  },
  {
    folderPath: dependencies.resolvePath(repositoryFolderPath, "test", "azuremetadata", "generated")
  },
  {
    folderPath: dependencies.resolvePath(repositoryFolderPath, "test", "metadata", "generated")
  }
];