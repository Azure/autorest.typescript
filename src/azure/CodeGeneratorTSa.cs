// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Azure.Model;
using AutoRest.TypeScript.azure.Templates;
using AutoRest.TypeScript.vanilla.Templates;
using static AutoRest.Core.Utilities.DependencyInjection;
using AutoRest.TypeScript.Model;
using AutoRest.Core;

namespace AutoRest.TypeScript.Azure
{
    public class CodeGeneratorTSa : TypeScript.CodeGeneratorTS
    {
        private const string ClientRuntimePackage = "ms-rest-azure-js version 0.1.0";

        public override string UsageInstructions => $"The {ClientRuntimePackage} or higher npm package is required to execute the generated code.";

        public override string ImplementationFileExtension => ".ts";


        /// <summary>
        /// Generate Azure TypeScript client code
        /// </summary>
        /// <param name="cm"></param>
        /// <returns></returns>
        public override async Task Generate(CodeModel cm)
        {
            var codeModel = cm as CodeModelTSa;
            if (codeModel == null)
            {
                throw new InvalidCastException("CodeModel is not a Azure TypeScript code model.");
            }

            codeModel.PackageName = Settings.Instance.PackageName;
            codeModel.PackageVersion = Settings.Instance.PackageVersion;

            // Service client
            var serviceClientTemplate = new AzureServiceClientTemplate { Model = codeModel };
            await Write(serviceClientTemplate, codeModel.Name.ToCamelCase() + ".ts");
            await Write(new AzureServiceClientContextTemplate { Model = codeModel }, codeModel.ContextName.ToCamelCase() + ".ts");
            var modelIndexTemplate = new AzureModelIndexTemplate { Model = codeModel };
            await Write(modelIndexTemplate, Path.Combine("models", "index.ts"));
            var mapperIndexTemplate = new AzureMapperIndexTemplate { Model = codeModel };
            await Write(mapperIndexTemplate, Path.Combine("models", "mappers.ts"));

            //MethodGroups
            if (codeModel.MethodGroupModels.Any())
            {
                var methodGroupIndexTemplate = new MethodGroupIndexTemplate { Model = codeModel };
                await Write(methodGroupIndexTemplate, Path.Combine("operations", "index.ts"));

                foreach (var methodGroupModel in codeModel.MethodGroupModels)
                {
                    var methodGroupTemplate = new AzureMethodGroupTemplate { Model = methodGroupModel };
                    await Write(methodGroupTemplate, Path.Combine("operations", methodGroupModel.TypeName.ToCamelCase() + ".ts"));
                }
            }

            var generateMetadata = Singleton<GeneratorSettingsTS>.Instance.GenerateMetadata;
            if (generateMetadata)
            {
                // package.json
                var packageJson = new PackageJson { Model = codeModel };
                await Write(packageJson, Path.Combine("../", "package.json"));

                // tsconfig.json
                var browserTsConfig = new TsConfig { Model = new TsConfigModel(true) };
                await Write(browserTsConfig, Path.Combine("../", "tsconfig.json"));

                // webpack.config.js
                var webpackConfig = new WebpackConfig { Model = codeModel };
                await Write(webpackConfig, Path.Combine("../", "webpack.config.js"));

                // .npmignore
                var npmIgnore = new NpmIgnore { Model = codeModel };
                await Write(npmIgnore, Path.Combine("../", ".npmignore"));

                //README.md
                var readme = new AzureReadmeTemplate { Model = codeModel };
                await Write(readme, Path.Combine("../", "README.md"));
            }
        }
    }
}
