const dependencies = require("./dependencies");

const localDependencies = dependencies.getDependenciesWithClonedRepositories();
for (const localDependency of localDependencies) {
  dependencies.runLocalRepositoryNPMScript(localDependency, "local");
}
let refreshNodeModules = dependencies.shouldForceRefresh(process.argv);
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