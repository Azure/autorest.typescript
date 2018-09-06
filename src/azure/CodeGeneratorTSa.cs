// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.azure.Templates;
using AutoRest.TypeScript.Azure.Model;
using AutoRest.TypeScript.vanilla.Templates;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

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

            if (string.IsNullOrEmpty(codeModel.Settings.DefaultApiVersion))
            {
                // Service client
                var serviceClientTemplate = new AzureServiceClientTemplate { Model = codeModel };
                await Write(serviceClientTemplate, GetSourceCodeFilePath(codeModel, codeModel.Name.ToCamelCase() + ".ts"));
                await Write(new AzureServiceClientContextTemplate { Model = codeModel }, GetSourceCodeFilePath(codeModel, codeModel.ContextName.ToCamelCase() + ".ts"));
                var modelIndexTemplate = new AzureModelIndexTemplate { Model = codeModel };
                await Write(modelIndexTemplate, GetSourceCodeFilePath(codeModel, "models", "index.ts"));
                var mapperIndexTemplate = new AzureMapperIndexTemplate { Model = codeModel };
                await Write(mapperIndexTemplate, GetSourceCodeFilePath(codeModel, "models", "mappers.ts"));
                await Write(new ParameterTemplate {Model = codeModel}, GetSourceCodeFilePath(codeModel, "models", "parameters.ts"));

                //MethodGroups
                if (codeModel.MethodGroupModels.Any())
                {
                    var methodGroupIndexTemplate = new MethodGroupIndexTemplate { Model = codeModel };
                    await Write(methodGroupIndexTemplate, GetSourceCodeFilePath(codeModel, "operations", "index.ts"));

                    foreach (var methodGroupModel in codeModel.MethodGroupModels)
                    {
                        var mappersTemplate = new MethodGroupMappersTemplate { Model = methodGroupModel };
                        await Write(mappersTemplate, GetSourceCodeFilePath(codeModel, "models", methodGroupModel.MappersModuleName + ".ts"));
                        var methodGroupTemplate = new AzureMethodGroupTemplate { Model = methodGroupModel };
                        await Write(methodGroupTemplate, GetSourceCodeFilePath(codeModel, "operations", methodGroupModel.TypeName.ToCamelCase() + ".ts"));
                    }
                }
            }

            if (codeModel.Settings.GenerateMetadata)
            {
                if (codeModel.Settings.Multiapi && string.IsNullOrEmpty(codeModel.Settings.DefaultApiVersion))
                {
                    await Write(new PackageJsonMultiApi() { Model = codeModel }, "package.json");


                    await Write(new TsConfigMultiApi() { Model = codeModel }, "tsconfig.json");

                    await Write(new TsConfigWebpackMultiApi() { Model = codeModel }, "tsconfig.esm.json");
                }
                else
                {
                    // package.json
                    var packageJson = new PackageJson { Model = codeModel };
                    await Write(packageJson, "package.json");

                    //tsconfig.json
                    var nodeTsConfig = new TsConfig { Model = codeModel };
                    await Write(nodeTsConfig, "tsconfig.json");

                    //tsconfig.esm.json
                    var webpackTsConfig = new TsConfigWebpack();
                    await Write(webpackTsConfig, "tsconfig.esm.json");

                    // webpack.config.js
                    var webpackConfig = new WebpackConfig { Model = codeModel };
                    await Write(webpackConfig, "webpack.config.js");

                    // .npmignore
                    var npmIgnore = new NpmIgnore { Model = codeModel };
                    await Write(npmIgnore, ".npmignore");

                    //README.md
                    var readme = new AzureReadmeTemplate { Model = codeModel };
                    await Write(readme, "README.md");
                }
            }
        }
    }
}
