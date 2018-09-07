// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core.Extensibility;

namespace AutoRest.TypeScript
{
    public class GeneratorSettingsTS : IGeneratorSettings
    {
        /// <summary>
        /// Whether or not to generate a new package.json file.
        /// </summary>
        public bool GeneratePackageJson { get; set; }

        /// <summary>
        /// Whether or not to generate a new readme.md file.
        /// </summary>
        public bool GenerateReadmeMd { get; set; }

        /// <summary>
        /// Whether or not to generate the LICENSE.txt file.
        /// </summary>
        public bool GenerateLicenseTxt { get; set; }

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
    }
}