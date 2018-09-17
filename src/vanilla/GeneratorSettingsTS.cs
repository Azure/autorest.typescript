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

        /// <summary>
        /// The sub-folder path where source code will be generated.
        /// </summary>
        public string SourceCodeFolderPath { get; set; } = "lib";

        /// <summary>
        /// The name of the npm package.
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
        /// The path to the "default" API version, e.g. 2016-04-01.
        /// The presence of this property indicates that we are generating
        /// the multi-api "root" artifacts, and not any TS source files.
        /// </summary>
        public string DefaultApiVersion { get; set; }

        /// <summary>
        /// All API version subfolders present in this package.
        /// </summary>
        public string[] ApiVersions { get; set; }

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
        /// If true, models enums as unions of literal strings.
        /// Otherwise, models enums as TypeScript enums. Defaults to false.
        /// </summary>
        public bool ModelEnumAsUnion { get; set; }

        /// <summary>
        /// If true, models Date parameters as string in parameters and properties.
        /// </summary>
        public bool ModelDateTimeAsString { get; set; }

        /// <summmary>
        /// If true, uses optional types for the response headers interface properties.
        /// </summary>
        public bool OptionalResponseHeaders { get; set; }

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
                    string newPackageVersion = "1.0.0";
                    string[] inputFilePaths = host?.GetValue<string[]>("input-file").Result;
                    if (inputFilePaths != null && inputFilePaths.Any((string inputFilePath) => inputFilePath.Replace('\\', '/').ToLowerInvariant().Contains("/preview/")))
                    {
                        newPackageVersion += "-preview";
                    }
                    Log(Category.Information, $"Package doesn't exist on NPM, so setting its initial version to \"{newPackageVersion}\".");
                    PackageVersion = newPackageVersion;
                }
            }
        }

        private static string GetNPMPackageVersion(string packageName)
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

        private static void NpmProcess_OutputDataReceived(object sender, DataReceivedEventArgs e)
        {
            throw new NotImplementedException();
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
    }
}