// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using AutoRest.Core;
using AutoRest.Core.Extensibility;

namespace AutoRest.TypeScript
{
    public class GeneratorSettingsTS : IGeneratorSettings
    {
        /// <summary>
        ///     Change to true if you want to no longer generate the 3 d.ts files, for some reason
        /// </summary>
        public bool GenerateMetadata { get; set; }

    }
}