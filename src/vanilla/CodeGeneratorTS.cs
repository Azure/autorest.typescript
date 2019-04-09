// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Azure.Model;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using AutoRest.TypeScript.vanilla.Templates;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AutoRest.TypeScript
{
    public class CodeGeneratorTS : CodeGenerator
    {
        private const string ClientRuntimePackage = "@azure/ms-rest-js version 1.8.1";


        public override string ImplementationFileExtension => ".ts";


        public override string UsageInstructions => $"The {ClientRuntimePackage} or higher npm package is required to execute the generated code.";

        /// <summary>
        ///     Generate TypeScript client code
        /// </summary>
        /// <param name="serviceClient"></param>
        /// <returns></returns>
        public override async Task Generate(CodeModel codeModel)
        {
            CodeModelTS codeModelTS = (CodeModelTS)codeModel;
            if (codeModelTS.Settings.AzureArm == true)
            {
                await Generate(new AzureTemplateFactory(), (CodeModelTSa)codeModelTS);
            }
            else
            {
                await Generate(new VanillaTemplateFactory(), codeModelTS);
            }
        }

        protected async Task Generate<TCodeModel>(TemplateFactory<TCodeModel> templateFactory, TCodeModel codeModel) where TCodeModel : CodeModelTS
        {
            if (!IsMultiapiLatest(codeModel))
            {
                await WriteServiceClientCodeFile(templateFactory, codeModel);
                await WriteServiceClientContextCodeFile(templateFactory, codeModel);

                if (ShouldWriteModelsFiles(codeModel))
                {
                    await WriteModelsIndexFile(codeModel);
                    if (codeModel.HasMappers())
                    {
                        await WriteMappersIndexFile(codeModel);
                    }
                }

                if (ShouldWriteParameterMappersFile(codeModel))
                {
                    await WriteParameterMappersFile(codeModel);
                }

                if (ShouldWriteMethodGroupFiles(codeModel))
                {
                    await WriteMethodGroupIndexFile(codeModel);

                    bool shouldWriteModelsFiles = ShouldWriteModelsFiles(codeModel);
                    foreach (MethodGroupTS methodGroup in codeModel.MethodGroupModels)
                    {
                        if (shouldWriteModelsFiles)
                        {
                            await WriteMethodGroupMappersFile(methodGroup);
                        }
                        await WriteMethodGroupFile(methodGroup);
                    }
                }
            }
            else
            {
                await WriteAliasFile(codeModel);
            }

            if (ShouldWritePackageJsonFile(codeModel))
            {
                await WritePackageJsonFile(codeModel);
            }

            if (ShouldWriteReadmeMdFile(codeModel))
            {
                await WriteReadmeMdFile(codeModel);
            }

            if (ShouldWriteLicenseFile(codeModel))
            {
                await WriteLicenseFile(codeModel);
            }

            if (ShouldWriteMetadata(codeModel))
            {
                await WriteTsConfig(codeModel);
                await WriteRollupConfig(codeModel);
            }
        }

        public static bool HasMappableParameters(IEnumerable<Method> methods)
        {
            return methods
                .SelectMany(m => m.LogicalParameters)
                .Any(p => p.Location != ParameterLocation.Body);
        }

        protected bool ShouldWriteParameterMappersFile(CodeModelTS codeModel)
        {
            return HasMappableParameters(codeModel.Methods);
        }

        public static bool ShouldWriteModelsFiles(CodeModelTS codeModel)
        {
            return codeModel.HasMappers() || codeModel.MethodsWithCustomResponseType.Any();
        }

        public static bool ShouldWriteMethodGroupFiles(CodeModelTS codeModel)
        {
            return codeModel.MethodGroupModels.Any();
        }

        protected bool ShouldWritePackageJsonFile(CodeModelTS codeModel)
        {
            return (codeModel.Settings.GeneratePackageJson ?? codeModel.Settings.GenerateMetadata);
        }

        protected bool ShouldWriteReadmeMdFile(CodeModelTS codeModel)
        {
            return (codeModel.Settings.GenerateReadmeMd ?? codeModel.Settings.GenerateMetadata);
        }

        protected bool ShouldWriteLicenseFile(CodeModelTS codeModel)
        {
            return (codeModel.Settings.GenerateLicenseTxt ?? codeModel.Settings.GenerateMetadata);
        }

        protected bool ShouldWriteMetadata(CodeModelTS codeModel)
        {
            return codeModel.Settings.GenerateMetadata;
        }

        protected bool IsMultiapiLatest(CodeModelTS codeModel)
        {
            return codeModel.Settings.MultiapiLatest;
        }

        protected Task WriteServiceClientCodeFile<TCodeModel>(TemplateFactory<TCodeModel> templateFactory, TCodeModel codeModel) where TCodeModel : CodeModelTS
        {
            Template<TCodeModel> serviceClientTemplate = templateFactory.CreateServiceClientTemplate(codeModel);
            string fileName = codeModel.Name.ToCamelCase() + ".ts";
            string filePath = GetSourceCodeFilePath(codeModel, fileName);
            return Write(serviceClientTemplate, filePath);
        }

        protected Task WriteServiceClientContextCodeFile<TCodeModel>(TemplateFactory<TCodeModel> templateFactory, TCodeModel codeModel) where TCodeModel : CodeModelTS
        {
            Template<TCodeModel> serviceClientContextTemplate = templateFactory.CreateServiceClientContextTemplate(codeModel);
            string fileName = codeModel.ContextName.ToCamelCase() + ".ts";
            string filePath = GetSourceCodeFilePath(codeModel, fileName);
            return Write(serviceClientContextTemplate, filePath);
        }

        protected Task WriteModelsIndexFile(CodeModelTS codeModel)
        {
            string filePath = GetSourceCodeFilePath(codeModel, "models", "index.ts");
            return Write(codeModel.GenerateModelIndex(), filePath);
        }

        protected Task WriteMappersIndexFile(CodeModelTS codeModel)
        {
            string filePath = GetSourceCodeFilePath(codeModel, "models", "mappers.ts");
            return Write(codeModel.GenerateMapperIndex(), filePath);
        }

        protected Task WriteParameterMappersFile(CodeModelTS codeModel)
        {
            string filePath = GetSourceCodeFilePath(codeModel, "models", "parameters.ts");
            return Write(new ParameterTemplate { Model = codeModel }, filePath);
        }

        protected Task WriteMethodGroupIndexFile(CodeModelTS codeModel)
        {
            string filePath = GetSourceCodeFilePath(codeModel, "operations", "index.ts");
            return Write(new MethodGroupIndexTemplate { Model = codeModel }, filePath);
        }

        protected Task WriteMethodGroupMappersFile(MethodGroupTS methodGroup)
        {
            string filePath = GetSourceCodeFilePath(methodGroup.CodeModelTS, "models", methodGroup.MappersModuleName + ".ts");
            return Write(methodGroup.GenerateMappers(), filePath);
        }

        protected Task WriteMethodGroupFile(MethodGroupTS methodGroup)
        {
            CodeModelTS codeModel = methodGroup.CodeModelTS;
            string filePath = GetSourceCodeFilePath(codeModel, "operations", methodGroup.TypeName.ToCamelCase() + ".ts");
            return Write(new MethodGroupTemplate { Model = methodGroup }, filePath);
        }

        protected Task WriteAliasFile(CodeModelTS codeModel)
        {
            string filePath = GetSourceCodeFilePath(codeModel, "index.ts");
            AliasIndexTemplate template = new AliasIndexTemplate { Model = codeModel };
            return Write(template, filePath);
        }

        protected Task WritePackageJsonFile(CodeModelTS codeModel)
        {
            return Write(codeModel.GeneratePackageJson(), "package.json");
        }

        protected Task WriteReadmeMdFile(CodeModelTS codeModel)
        {
            return Write(codeModel.GenerateReadmeMd(), "README.md");
        }

        protected Task WriteLicenseFile(CodeModelTS codeModel)
        {
            return Write(new LicenseTemplate { Model = codeModel }, "LICENSE.txt");
        }

        protected Task WriteTsConfig(CodeModelTS codeModel)
        {
            return Write(new TsConfig { Model = codeModel }, "tsconfig.json");
        }

        protected Task WriteRollupConfig(CodeModelTS codeModel)
        {
            return Write(codeModel.GenerateRollupConfig(), "rollup.config.js");
        }

        protected string GetSourceCodeFilePath(CodeModelTS codeModel, params string[] pathSegments)
        {
            return GetSourceCodeFilePath(codeModel.Settings, pathSegments);
        }

        protected string GetSourceCodeFilePath(GeneratorSettingsTS generatorSettings, params string[] pathSegments)
        {
            string[] totalPathSegments = new string[pathSegments.Length + 1];
            totalPathSegments[0] = generatorSettings.SourceCodeFolderPath;
            for (int i = 0; i < pathSegments.Length; i++)
            {
                totalPathSegments[1 + i] = pathSegments[i];
            }
            return Path.Combine(totalPathSegments).Replace('\\', '/');
        }

        public static string GenerateMethods(IEnumerable<MethodTS> methods, string emptyLine)
        {
            TSBuilder builder = new TSBuilder();
            TSClass tsClass = new TSClass(builder);
            foreach (MethodTS method in methods)
            {
                tsClass.Line(emptyLine);
                method.Generate(tsClass);
            }
            return builder.ToString();
        }
    }
}
