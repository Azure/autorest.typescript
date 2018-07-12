const dependencies = require("./dependencies");

const localDependencies = dependencies.getDependenciesWithClonedRepositories();
for (const localDependency of localDependencies) {
  dependencies.runLocalRepositoryNPMScript(localDependency, "preview");
}
let refreshNodeModules = dependencies.shouldForceRefresh(process.argv);
for (const localDependency of localDependencies) {
  let version = dependencies.getNpmPackageVersion(localDependency, "preview");
  if (!version) {
    version = dependencies.getNpmPackageVersion(localDependency, "latest");
  }
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