import { ChangeClonedDependenciesToOptions, joinPath } from "@ts-common/azure-js-dev-tools";

const repositoryFolderPath: string = joinPath(__dirname, "..");
const testFolderPath: string = joinPath(repositoryFolderPath, "test");
const multiapiFolderPath: string = joinPath(testFolderPath, "multiapi");
const multiapiPackagesFolderPath: string = joinPath(multiapiFolderPath, "packages");
export const dependenciesOptions: ChangeClonedDependenciesToOptions = {
  packageFolders: [
    {
      path: repositoryFolderPath
    },
    {
      path: joinPath(testFolderPath, "azuremetadata/generated/Lro")
    },
    {
      path: joinPath(testFolderPath, "metadata/generated/BodyComplex")
    },
    {
      path: joinPath(multiapiPackagesFolderPath, "multiapi-test-2018-02-01"),
      runNPMInstall: false
    },
    {
      path: joinPath(multiapiPackagesFolderPath, "multiapi-test-2017-10-01"),
      runNPMInstall: false
    },
    {
      path: joinPath(multiapiPackagesFolderPath, "multiapi-test"),
      runNPMInstall: false,
      dependenciesToIgnore: ["@azure/multiapi-test-2018-02-01"]
    },
    {
      path: multiapiFolderPath
    }
  ],
  extraFilesToUpdate: [
    joinPath(repositoryFolderPath, "src/vanilla/Model/CodeModelTS.cs"),
    joinPath(repositoryFolderPath, "src/azure/Model/CodeModelTSa.cs")
  ]
}