import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

export interface PackageFolder {
  folderPath: string;
  toClean: string[];
  toUpdate: string[];
}

export interface RefreshNodeModulesOptions {
  ignoreScripts?: boolean;
}

/**
 * Get whether or not the node_modules folder should be refreshed based on the command line
 * arguments.
 * @param {string} argv The command line arguments that were provided.
 * @returns {boolean} Whether or not the node_modules folder should be refreshed.
 */
export function shouldForceRefresh(argv) {
  let result = false;
  if (argv) {
    for (const arg of argv) {
      const argLower = arg && arg.toLocaleLowerCase();
      if (argLower === "-f" || argLower === "-force" || argLower === "--force") {
        result = true;
        break;
      }
    }
  }
  return result;
}

/**
 * Replace all of the instances of searchValue in text with replaceValue.
 * @param {string} text The text to search and replace in.
 * @param {string} searchValue The value to search for in text.
 * @param {string} replaceValue The value to replace searchValue with in text.
 * @returns {string} The value of text after all of the instances of searchValue have been replaced
 * by replaceValue.
 */
function replaceAll(text: string, searchValue: string, replaceValue: string): string {
  return text.split(searchValue).join(replaceValue);
}

export function resolvePath(...paths: string[]): string {
  return normalizePath(path.resolve(...paths));
}

/**
 * Normalize the provided path by ensuring that all path separators are forward slashes ('/').
 * @param {string} pathString The path to normalize.
 * @returns {string} The normalized path.
 */
export function normalizePath(pathString: string): string {
  return replaceAll(pathString, "\\", "/")
}

/**
 * Delete the file at the provided file path.
 * @param {string} filePath The path to the file to delete.
 */
function deleteFile(filePath: string): void {
  fs.unlinkSync(filePath);
}

/**
 * Delete the folder at the provided folder path.
 * @param {string} folderPath The path to the folder to delete.
 */
function deleteFolder(folderPath: string): void {
  try {
    fs.rmdirSync(folderPath);
  } catch (error) {
    if (error.code === "ENOTEMPTY") {
      const folderEntryPaths = fs.readdirSync(folderPath);
      for (const entryName of folderEntryPaths) {
        const entryPath = resolvePath(folderPath, entryName);
        const entryStats = fs.lstatSync(entryPath);
        if (entryStats.isDirectory()) {
          deleteFolder(entryPath);
        } else {
          deleteFile(entryPath);
        }
      }
      fs.rmdirSync(folderPath);
    } else {
      throw error;
    }
  }
}

/**
 * Read the contents of text file at the provided filePath.
 * @param {string} filePath The path to the text file to read.
 * @returns {string} The text contents of the text file at the provided filePath.
 */
function readTextFileContents(filePath: string): string {
  return fs.readFileSync(filePath, { encoding: "utf8" });
}

/**
 * Execute the provided command on the shell synchronously.
 * @param {string} command The command to execute.
 * @param {string} workingDirectory The working directory to execute the command in.
 * @returns {void}
 */
function execute(command: string, workingDirectory: string): void {
  console.log(`Running "${command}" in "${workingDirectory}"...`);
  execSync(command, { cwd: workingDirectory, stdio: [0, 1, 2] });
}

/**
 * Get the absolute path to this repository's folder path.
 * @returns {string} The absolute path to this repository's folder path.
 */
export function getThisRepositoryFolderPath(): string {
  return resolvePath(__dirname, "..");
}

/**
 * Get the absolute path to the package.json in this repository.
 * @returns {string} The absolute path to the package.json.
 */
function getPackageJsonFilePath(): string {
  return resolvePath(getThisRepositoryFolderPath(), "package.json");
}

/**
 * Get the absolute path to the local clone of the repository with the provided name.
 * @param {string} repoName The name of the repository.
 * @returns {string} The absolute path to the local clone of the repository.
 */
export function getLocalRepositoryPath(repoName: string): string {
  return resolvePath(getThisRepositoryFolderPath(), "..", repoName);
}

/**
 * Get the package.json file contents parsed as a JSON object.
 * @param {string=} packageJsonFilePath The path to the package.json file to read. If this is not
 * provided, then the package.json file at the root of this repository will be used.
 * @returns {{}} The parsed package.json file contents.
 */
function getPackageJson(packageJsonFilePath?: string): any {
  if (!packageJsonFilePath) {
    packageJsonFilePath = getPackageJsonFilePath();
  }
  return JSON.parse(readTextFileContents(packageJsonFilePath));
}

/**
 * Get the dependencies from the provided dependencies dictionary that have local clones.
 * @param {{ [packageName: string]: string }} dependencies A dictionary of package names to package
 * versions.
 * @param {string[]} clonedRepositoryNames The array to put the names of the local cloned
 * repositories into.
 * @returns {void}
 */
function getClonedRepositories(dependencies: { [packageName: string]: string }, clonedRepositoryNames: string[]): void {
  if (clonedRepositoryNames && dependencies) {
    for (const dependencyName in dependencies) {
      if (clonedRepositoryNames.indexOf(dependencyName) === -1) {
        const repoFolderPath = getLocalRepositoryPath(dependencyName);
        if (fs.existsSync(repoFolderPath)) {
          clonedRepositoryNames.push(dependencyName);
        }
      }
    }
  }
}

/**
 * Get the names of the dependencies of this repository that have local clones.
 * @returns {string[]} The names of the dependencies of this repository that have local clones.
 */
export function getDependenciesWithClonedRepositories(): string[] {
  const clonedRepositoryNames = [];

  const packageJson: any = getPackageJson();

  getClonedRepositories(packageJson.dependencies, clonedRepositoryNames);
  getClonedRepositories(packageJson.devDependencies, clonedRepositoryNames);

  return clonedRepositoryNames;
}

/**
 * Run a script with the provided name in the local clone of the repository with the provided name.
 * @param {string} repoName The name of the repository to run the script in.
 * @param {string} scriptName The name of the script to run in the local repository.
 * @returns {void}
 */
export function runLocalRepositoryNPMScript(repoName: string, scriptName: string): void {
  const repoFolderPath: string = getLocalRepositoryPath(repoName);
  const packageJsonFilePath: string = path.join(repoFolderPath, "package.json");
  const packageJson: any = getPackageJson(packageJsonFilePath);
  const repoScripts: any = packageJson.scripts;
  if (repoScripts && repoScripts[scriptName]) {
    execute(`npm run ${scriptName}`, repoFolderPath);
  } else {
    console.log(`No script named "${scriptName}" is specified in "${packageJsonFilePath}".`);
  }
}

/**
 * Update this repository's package.json file's dependency version with the provided name to the
 * provided version. If the dependency version in the package.json file changes, then "npm install"
 * will be run for the changed dependency.
 * @param {string} dependencyName The name of the dependency to update.
 * @param {string} dependencyVersion The version to update the dependency to.
 * @returns {boolean} Whether or not the dependency changed.
 */
export function updatePackageJsonDependency(dependencyName: string, dependencyVersion: string): boolean {
  let dependencyChanged = false;

  const packageJsonFilePath: string = getPackageJsonFilePath();

  const packageJson: any = getPackageJson(packageJsonFilePath);
  if (packageJson.devDependencies[dependencyName] == dependencyVersion) {
    console.log(`"${dependencyName}" is already set to "${dependencyVersion}" in "${packageJsonFilePath}".`);
  } else {
    console.log(`Changing "${dependencyName}" to "${dependencyVersion}" in "${packageJsonFilePath}"`)
    packageJson.devDependencies[dependencyName] = dependencyVersion;

    writePackageJson(packageJson, packageJsonFilePath);

    dependencyChanged = true;
  }

  return dependencyChanged;
}

/**
 * Run NPM install in this repository
 * @param {object} options
 * @param {boolean} options.ignoreScripts whether to ignore scripts in npm install (skips dotnet build)
 * @returns {void}
 */
export function refreshNodeModules(options?: RefreshNodeModulesOptions) {
  const thisRepositoryFolderPath = getThisRepositoryFolderPath();
  const nodeModulesFolderPath = resolvePath(thisRepositoryFolderPath, "node_modules");
  if (fs.existsSync(nodeModulesFolderPath)) {

    const packageLockFilePath = resolvePath(thisRepositoryFolderPath, "package-lock.json");
    if (fs.existsSync(packageLockFilePath)) {
      console.log(`Deleting "${packageLockFilePath}"...`);
      deleteFile(packageLockFilePath);
    }

    console.log(`Deleting "${nodeModulesFolderPath}"...`);
    deleteFolder(nodeModulesFolderPath);
  }
  const ignoreScripts = options && options.ignoreScripts;
  execute("npm install" + (ignoreScripts ? " --ignore-scripts" : ""), getThisRepositoryFolderPath());
}

/**
 * Get the npm package version of the package with the provided name at the provided tag.
 * @param {string} packageName The name of the package.
 * @param {string} tag The tag of the version to retrieve.
 * @returns {string?} The version of the provided package at the provided tag.
 */
export function getNpmPackageVersion(packageName: string, tag: string): string | undefined {
  const npmViewResult: any = JSON.parse(execSync(`npm view ${packageName} --json`, { stdio: ['pipe', 'pipe', 'ignore'] }).toString());
  return npmViewResult['dist-tags'][tag];
}

/**
 * Update the package.json property values for "main".
 * @param {string} mainValue The value that will be used for "main".
 * @returns {void}
 */
export function updatePackageJsonMain(mainValue: string): void {
  const packageJsonFilePath = getPackageJsonFilePath();

  const packageJson = getPackageJson(packageJsonFilePath);

  if (packageJson.main == mainValue) {
    console.log(`"main" is already set to "${mainValue}" in "${packageJsonFilePath}".`);
  } else {
    console.log(`Changing "main" to "${mainValue}" in "${packageJsonFilePath}"`)
    packageJson.main = mainValue;

    writePackageJson(packageJson, packageJsonFilePath);
  }
}


/**
 * Update the dependency versions in the files at the provided codeFilePaths.
 * @param {string[]} codeFilePath The paths to the code files that should be updated.
 * @param {string} dependencyName The name of the dependency to update.
 * @param {RegExp} regularExpression The regular expression to use to find the dependency name and
 * version in the code file's contents.
 * @param {string} newValue The replacement string that will replace the text that matches the
 * provided regularExpression.
 * @param {string} newDependencyVersion The version of the dependency to set in the provided code
 * files.
 */
function updateGeneratedPackageDependencyVersion(codeFilePath: string, dependencyName: string, regularExpression: RegExp, newValue: string, newDependencyVersion: string): void {
  codeFilePath = normalizePath(codeFilePath);
  const codeFileContents: string = readTextFileContents(codeFilePath);
  const match: RegExpMatchArray = codeFileContents.match(regularExpression);
  if (match && match[1] !== newDependencyVersion) {
    console.log(`In ${codeFilePath}, changing "${dependencyName}" version from "${match[1]}" to "${newDependencyVersion}".`);
    const updatedCodeFileContents: string = codeFileContents.replace(regularExpression, newValue);
    fs.writeFileSync(codeFilePath, updatedCodeFileContents);
  }
}

/**
 * Update the code used to generate package.json files so that the ms-rest-js dependency version is
 * the provided newDependencyVersion.
 * @param {string} newDependencyVersion The version of ms-rest-js that generated package.json files
 * will depend on.
 */
export function updateGeneratedPackageJsonMsRestJsDependencyVersion(newDependencyVersion: string): void {
  updateGeneratedPackageDependencyVersion(
    resolvePath(getThisRepositoryFolderPath(), "src", "vanilla", "Model", "CodeModelTS.cs"),
    "ms-rest-js",
    /\\"ms-rest-js\\": \\"(.*)\\"/,
    `\\"ms-rest-js\\": \\"${newDependencyVersion}\\"`,
    newDependencyVersion);
  updateGeneratedPackageDependencyVersion(
    resolvePath(getThisRepositoryFolderPath(), "README.md"),
    "ms-rest-js",
    /"ms-rest-js": "(.*)"/,
    `"ms-rest-js": "${newDependencyVersion}"`,
    newDependencyVersion);
}

/**
 * Update the code used to generate package.json files so that the ms-rest-azure-js dependency version is
 * the provided newDependencyVersion.
 * @param {string} newDependencyVersion The version of ms-rest-js that generated package.json files
 * will depend on.
 */
export function updateGeneratedPackageJsonMsRestAzureJsDependencyVersion(newDependencyVersion: string): void {
  updateGeneratedPackageDependencyVersion(
    resolvePath(getThisRepositoryFolderPath(), "src", "azure", "Model", "CodeModelTSa.cs"),
    "ms-rest-azure-js",
    /\\"ms-rest-azure-js\\": \\"(.*)\\"/,
    `\\"ms-rest-azure-js\\": \\"${newDependencyVersion}\\"`,
    newDependencyVersion);
  updateGeneratedPackageDependencyVersion(
    resolvePath(getThisRepositoryFolderPath(), "README.md"),
    "ms-rest-azure-js",
    /"ms-rest-azure-js": "(.*)"/,
    `"ms-rest-azure-js": "${newDependencyVersion}"`,
    newDependencyVersion);
}

/**
 * Write the provided packageJSON object to the file at the provided packageJsonFilePath.
 * @param {any} packageJson The package json object to write.
 * @param {string} packageJsonFilePath The path to the package.json file.
 * @returns {void}
 */
function writePackageJson(packageJson: any, packageJsonFilePath: string): void {
  fs.writeFileSync(packageJsonFilePath, JSON.stringify(packageJson, undefined, "  ") + "\n");
}