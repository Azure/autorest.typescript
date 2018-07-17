// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core.Extensibility;

namespace AutoRest.TypeScript
{
    public class GeneratorSettingsTS : IGeneratorSettings
    {
        /// <summary>
        /// If true, outputs package.json, tsconfig.json, webpack.config.js, and README.md files.
        /// </summary>
        public bool GenerateMetadata { get; set; }

        /// <summary>
        /// The folder where the generated files will be output to.
        /// </summary>
        public string OutputFolder { get; set; }

        /// <summary>
        /// If true, models enums as unions of literal strings.
        /// </summary>
        public bool ModelEnumAsUnion { get; set; }
    }
}