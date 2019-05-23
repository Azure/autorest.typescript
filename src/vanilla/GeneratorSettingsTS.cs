// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core;
using AutoRest.Core.Extensibility;
using AutoRest.Core.Logging;
using Newtonsoft.Json.Linq;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace AutoRest.TypeScript
{
    public class GeneratorSettingsTS : IGeneratorSettings
    {
        /// <summary>
        /// The version that packages that haven't been published to NPM before will be generated with.
        /// </summary>
        public const string newPackageVersion = "1.0.0";

        /// <summary>
        /// Whether or not the generator should produce Azure-specific code.
        /// </summary>
        public bool? AzureArm { get; set; }

        /// <summary>
        /// Whether or not to generate a new package.json file.
        /// </summary>
        public bool? GeneratePackageJson { get; set; }

        /// <summary>
        /// Whether or not to generate a new readme.md file.
        /// </summary>
        public bool? GenerateReadmeMd { get; set; }

        /// <summary>
        /// Whether or not to generate the LICENSE.txt file.
        /// </summary>
        public bool? GenerateLicenseTxt { get; set; }

        /// <summery>
        /// Whether to add "test" NPM script.
        /// This enables "npm run test" command to be run in CI.
        /// If "true" passed, default command will be added i.e. "mocha".
        /// Otherwise, the content of the variable will be added to the script.
        /// </summary>
        public string Test { get; set; }

        /// <summery>
        /// List of comma or semicolon separated dependencies used in packages test.
        /// Dependencies will be added to devDependencies section of package.json.
        /// E.g. "nock@1.0.0, jest@2.0.0; @azure/ms-rest-js@3.0.0".
        /// </summary>
        public string TestDependencies { get; set; }

        /// <summary>
        /// The sub-folder path where source code will be generated.
        /// </summary>
        public string SourceCodeFolderPath { get; set; } = "src";

        /// <summary>
        /// The name of the npm package, e.g. "@azure/arm-storage".
        /// In multi-api scenarios this is used as a prefix to the package name, with the API version appended.
        /// e.g. "@azure/arm-storage-2018-02-01".
        /// </summary>
        public string PackageName { get; set; }

        /// <summary>
        /// The version of the npm package.
        /// </summary>
        public string PackageVersion { get; set; }

        /// <summary>
        /// Whether to use the multi-api generation mode.
        /// </summary>
        public bool Multiapi { get; set; }

        /// <summary>
        /// If true, generate the "alias" package containing the latest API version.
        /// </summary>
        public bool MultiapiLatest { get; set; }

        /// <summary>
        /// The NPM version of the package referenced in the "latest" alias package.
        /// </summary>
        public string AliasedNpmVersion { get; set; }

        /// <summary>
        /// All API version subfolders present in this package.
        /// Must be ordered from most recent to least recent, i.e. the first package in the array is considered to be the "latest".
        /// </summary>
        public string[] ApiVersions { get; set; }

        /// <summary>
        /// The current API version being generated
        /// </summary>
        public string ApiVersion { get; set; }

        /// <summary>
        /// If true, outputs package.json, tsconfig.json, webpack.config.js, and README.md files.
        /// Defaults to false.
        /// </summary>
        public bool GenerateMetadata { get; set; }

        /// <summary>
        /// The folder where the generated files will be output to.
        /// </summary>
        public string OutputFolder { get; set; }

        /// <summary>
        /// If true, models Date parameters as string in parameters and properties.
        /// </summary>
        public bool ModelDateTimeAsString { get; set; }

        /// <summmary>
        /// If true, uses optional types for the response headers interface properties.
        /// </summary>
        public bool OptionalResponseHeaders { get; set; }

        /// <summary>
        /// If true, uses enum types instead of string unions.
        /// </summary>
        public bool EnumTypes { get; set; }

        /// <summary>
        /// A list of model type names that will only be treated polymorphically during
        /// serialization and deserialization if they are directly referenced in the specification.
        /// When determining the mapper set for a MethodGroup, first a pass is made through the
        /// methods of the MethodGroup and all of the types directly referenced by the methods are
        /// collected. These types include any base/parent types that the referenced types
        /// "inherit" from.
        /// After the method pass, a pass is made through all of the types declared in the
        /// specification (not just the ones that are referenced by the MethodGroup). If any of
        /// those types have a base/parent type in the current set of collected types and the
        /// base/parent type is not included in the SkipSubtypes list, then that type will also be
        /// collected.
        /// </summary>
        public string[] SkipSubtypes { get; set; }

        /// <summary>
        /// A list of ServiceClientOptions settings to override in the generated client.
        /// By default keys are wrapped in quotes but values are not.
        /// Use single quotation marks ("'") if you want your values to be injected as a string.
        /// See ServiceClientOptions in @azure/ms-rest-js package for available options.
        /// </summary>
        public string[] CustomServiceClientOptions { get; set; }

        /// <summary>
        /// Computes the NPM package referenced by an alias package.
        /// </summary>
        public string AliasedNpmPackageName
        {
            get
            {
                if (ApiVersions != null && ApiVersions.Length != 0)
                {
                    return PackageName + "-" + ApiVersions[0];
                }
                return null;
            }
        }

        /// <summary>
        /// If true, adds "autoPublish" property to package's package.json.
        /// The property is used to determine if package can be publish automatically.
        /// </summary>
        public bool? AutoPublish { get; set; }

        /// <summary>
        /// If the PackageVersion property is null or empty, then first try to update it from an
        /// existing package.json file in the output directory. If no existing package.json file
        /// exists or it doesn't contain a version property, then update it to the latest version
        /// found on NPM.
        /// </summary>
        public void UpdatePackageVersion()
        {
            IHost host = Settings.Instance?.Host;
            if (string.IsNullOrEmpty(PackageVersion) && host != null)
            {
                string[] outputFolderContents = host.ListInputs("./").Result;
                if (outputFolderContents == null || !outputFolderContents.Contains("package.json"))
                {
                    Log(Category.Information, "The output folder doesn't contain a pre-existing package.json file to get the package version from.");
                }
                else
                {
                    Log(Category.Information, "Getting the package version from the pre-existing package.json file in the output folder.");
                    string packageJsonFileContents = host.ReadFile("package.json").Result;
                    if (!string.IsNullOrEmpty(packageJsonFileContents))
                    {
                        try
                        {
                            JObject packageJson = JObject.Parse(packageJsonFileContents);
                            string packageJsonVersion = packageJson["version"]?.ToString();
                            if (string.IsNullOrEmpty(packageJsonVersion))
                            {
                                Log(Category.Information, "Pre-existing package.json file in the output folder didn't contain a non-empty version property.");
                            }
                            else
                            {
                                PackageVersion = packageJsonVersion;
                                Log(Category.Information, $"Got version \"{PackageVersion}\" for package \"{PackageName}\" from existing package.json file.");
                            }

                            JObject packageJsonDeps = (JObject) packageJson["dependencies"];
                            string aliasedPackageName = AliasedNpmPackageName;
                            string aliasedPackageVersion = MultiapiLatest && aliasedPackageName != null ? packageJsonDeps?[aliasedPackageName]?.ToString() : null;
                            if (aliasedPackageVersion != null)
                            {
                                Log(Category.Information, $"Using package version \"{aliasedPackageVersion}\" for alias package \"{aliasedPackageName}\" from existing package.json file.");
                                AliasedNpmVersion = aliasedPackageVersion;
                            }
                        }
                        catch (Exception e)
                        {
                            Log(Category.Error, $"{e.GetType().Name} - {e.Message}");
                        }
                    }
                }
            }

            if (string.IsNullOrEmpty(PackageVersion) && !string.IsNullOrEmpty(PackageName))
            {
                Log(Category.Information, $"Getting the package version for package \"{PackageName}\" from NPM.");
                string npmPackageVersion = GetNPMPackageVersion(PackageName);
                if (!string.IsNullOrEmpty(npmPackageVersion))
                {
                    Log(Category.Information, $"Got version \"{npmPackageVersion}\" for package \"{PackageName}\" from NPM.");
                    PackageVersion = npmPackageVersion;
                }
                else
                {
                    Log(Category.Information, $"Package doesn't exist on NPM, so setting its initial version to \"{newPackageVersion}\".");
                    PackageVersion = newPackageVersion;
                }
            }
        }

        internal static string GetNPMPackageVersion(string packageName)
        {
            string filePath = ResolveFilePath("npm");
            string arguments = $"view {packageName} --json";

            ProcessStartInfo startInfo = new ProcessStartInfo()
            {
                FileName = filePath,
                Arguments = arguments,
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
            };

            StringBuilder output = new StringBuilder();
            StringBuilder error = new StringBuilder();

            Log(Category.Debug, $"Executing \"{filePath} {arguments}\".");

            Process npmProcess = new Process()
            {
                StartInfo = startInfo
            };
            npmProcess.OutputDataReceived += (object sender, DataReceivedEventArgs eventArgs) =>
            {
                output.Append(eventArgs.Data);
            };
            npmProcess.ErrorDataReceived += (object sender, DataReceivedEventArgs eventArgs) =>
            {
                error.Append(eventArgs.Data);
            };

            npmProcess.Start();

            npmProcess.BeginOutputReadLine();
            npmProcess.BeginErrorReadLine();

            npmProcess.WaitForExit();

            string packageVersion = null;

            JObject packageDetails = JObject.Parse(output.ToString());
            JToken errorObject = packageDetails["error"];
            if (errorObject != null)
            {
                Log(Category.Debug, "NPM returned an error: ...");
            }
            else
            {
                JToken distTags = packageDetails["dist-tags"];
                if (distTags == null)
                {
                    Log(Category.Debug, "No \"dist-tags\" property found in the NPM command's output.");
                }
                else
                {
                    JToken latest = distTags["latest"];
                    if (latest == null)
                    {
                        Log(Category.Debug, "No \"dist-tags.latest\" property found in the NPM command's output.");
                    }
                    else
                    {
                        packageVersion = latest.ToString();
                    }
                }
            }

            return packageVersion;
        }

        private static string ResolveFilePath(string fileName)
        {
            bool isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            string[] possibleFileExtensions = (isWindows ? new string[] { ".bat", ".cmd", ".exe" } : new string[] { "" });

            string filePath = null;
            if (Path.IsPathRooted(fileName))
            {
                Log(Category.Debug, $"\"{fileName}\" is already rooted. No resolution needed.");
                filePath = fileName;
            }
            else
            {
                string path = Environment.GetEnvironmentVariable("PATH");
                string[] pathSegments = path.Split(isWindows ? ';' : ':');
                foreach (string pathSegment in pathSegments)
                {
                    foreach (string possibleFileExtension in possibleFileExtensions)
                    {
                        string possibleFilePath = Path.Combine(pathSegment, fileName);
                        if (!string.IsNullOrEmpty(possibleFileExtension) && !possibleFilePath.EndsWith(possibleFileExtension))
                        {
                            possibleFilePath += possibleFileExtension;
                        }

                        if (File.Exists(possibleFilePath))
                        {
                            filePath = possibleFilePath;
                            Log(Category.Debug, $"Resolved \"{fileName}\" to \"{filePath}\".");
                            break;
                        }
                    }
                }

                if (filePath == null)
                {
                    Log(Category.Warning, $"Could not resolve \"{fileName}\" using the current PATH environment variable.");
                }
            }

            return filePath;
        }

        private static void Log(Category category, string message, params string[] messageArguments)
        {
            string logMessage = message;
            if (messageArguments != null && messageArguments.Length > 0)
            {
                logMessage = string.Format(message, messageArguments);
            }

            if (Core.Utilities.DependencyInjection.Context.IsActive)
            {
                Logger.Instance.Log(category, logMessage);
            }
            else
            {
                Console.WriteLine($"{category}: {logMessage}");
            }
        }

        public string RelativeOutputPath
        {
            get
            {
                    string outputFolder = OutputFolder.Replace('\\', '/');
                    string outputFolderSearchString = "/azure-sdk-for-js/sdk";
                    int searchStringIndex = outputFolder.IndexOf(outputFolderSearchString, StringComparison.OrdinalIgnoreCase);

                    if (searchStringIndex == -1) {
                        return null;
                    }

                    return outputFolder.Substring(searchStringIndex + outputFolderSearchString.Length);
            }
        }
    }
}
