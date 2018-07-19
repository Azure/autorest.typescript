// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Model;
using AutoRest.TypeScript.vanilla.Templates;
using static AutoRest.Core.Utilities.DependencyInjection;

namespace AutoRest.TypeScript
{
    public class CodeGeneratorTS : CodeGenerator
    {
        private const string ClientRuntimePackage = "ms-rest-js version 1.0.0";


        public override string ImplementationFileExtension => ".ts";


        public override string UsageInstructions => $"The {ClientRuntimePackage} or higher npm package is required to execute the generated code.";

        /// <summary>
        ///     Generate TypeScript client code
        /// </summary>
        /// <param name="serviceClient"></param>
        /// <returns></returns>
        public override async Task Generate(CodeModel cm)
        {
            var codeModel = cm as CodeModelTS;
            if (codeModel == null)
            {
                throw new InvalidCastException("CodeModel is not a TypeScript code model.");
            }

            GeneratorSettingsTS generatorSettings = Singleton<GeneratorSettingsTS>.Instance;

            codeModel.PackageName = Settings.Instance.PackageName;
            codeModel.PackageVersion = Settings.Instance.PackageVersion;
            codeModel.OutputFolder = generatorSettings.OutputFolder;
            codeModel.ModelEnumAsUnion = generatorSettings.ModelEnumAsUnion;

            // Service client
            var serviceClientTemplate = new ServiceClientTemplate {Model = codeModel};
            await Write(serviceClientTemplate, codeModel.Name.ToCamelCase() + ".ts");
            await Write(new ServiceClientContextTemplate {Model = codeModel }, codeModel.ContextName.ToCamelCase() + ".ts");

            //Models
            if (codeModel.ModelTypes.Any())
            {
                var modelIndexTemplate = new ModelIndexTemplate {Model = codeModel};
                await Write(modelIndexTemplate, Path.Combine("models", "index.ts"));
                var mapperIndexTemplate = new MapperIndexTemplate {Model = codeModel};
                await Write(mapperIndexTemplate, Path.Combine("models", "mappers.ts"));
            }

            await Write(new ParameterTemplate {Model = codeModel}, Path.Combine("models", "parameters.ts"));

            //MethodGroups
            if (codeModel.MethodGroupModels.Any())
            {
                var methodGroupIndexTemplate = new MethodGroupIndexTemplate {Model = codeModel};
                await Write(methodGroupIndexTemplate, Path.Combine("operations", "index.ts"));

                foreach (var methodGroupModel in codeModel.MethodGroupModels)
                {
                    var mappersTemplate = new MethodGroupMappersTemplate { Model = methodGroupModel };
                    await Write(mappersTemplate, Path.Combine("models", methodGroupModel.MappersModuleName + ".ts"));
                    var methodGroupTemplate = new MethodGroupTemplate {Model = methodGroupModel};
                    await Write(methodGroupTemplate, Path.Combine("operations", methodGroupModel.TypeName.ToCamelCase() + ".ts"));
                }
            }

            if (generatorSettings.GenerateMetadata)
            {
                // package.json
                var packageJson = new PackageJson { Model = codeModel };
                await Write(packageJson, Path.Combine("../", "package.json"));

                //tsconfig.json
                var nodeTsConfig = new TsConfig { Model = new TsConfigModel(false) };
                await Write(nodeTsConfig, Path.Combine("../", "tsconfig.json"));

                // webpack.config.js
                var webpackConfig = new WebpackConfig { Model = codeModel };
                await Write(webpackConfig, Path.Combine("../", "webpack.config.js"));

                // .npmignore
                var npmIgnore = new NpmIgnore { Model = codeModel };
                await Write(npmIgnore, Path.Combine("../", ".npmignore"));

                //README.md
                var readme = new ReadmeTemplate { Model = codeModel };
                await Write(readme, Path.Combine("../", "README.md"));
            }
        }
    }
}
