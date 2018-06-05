const dependencies = require("./dependencies");

const localDependencies = dependencies.getDependenciesWithClonedRepositories();
for (const localDependency of localDependencies) {
  dependencies.runLocalRepositoryNPMScript(localDependency, "latest");
}
let refreshNodeModules = false;
for (const localDependency of localDependencies) {
  const version = dependencies.getNpmPackageVersion(localDependency, "latest");
  if (dependencies.updatePackageJsonDependency(localDependency, `~${version}`)) {
    refreshNodeModules = true;
  }
  if (localDependency === "ms-rest-js") {
    dependencies.updateGeneratedPackageJsonMsRestJsDependencyVersion(`~${version}`);
  } else if (localDependency === "ms-rest-azure-js") {
    dependencies.updateGeneratedPackageJsonMsRestAzureJsDependencyVersion(`~${version}`);
  }
}
if (refreshNodeModules) {
  dependencies.refreshNodeModules();
}