// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.azure.Templates;
using AutoRest.TypeScript.Azure.Model;
using AutoRest.TypeScript.Model;
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

            await Generate(new AzureTemplateFactory(), codeModel);

            if (IsNotDefaultApiVersion(codeModel))
            {
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
                        await WriteMethodGroupFile(new AzureMethodGroupTemplate { Model = methodGroup });
                    }
                }
            }

            if (ShouldWritePackageJsonFile(codeModel))
            {
                await WritePackageJsonFile(codeModel);
            }

            if (ShouldWriteReadmeMdFile(codeModel))
            {
                await WriteReadmeMdFile(new AzureReadmeTemplate { Model = codeModel });
            }

            if (ShouldWriteLicenseFile(codeModel))
            {
                await WriteLicenseFile(codeModel);
            }

            if (ShouldWriteMultiApiMetadata(codeModel))
            {
                await WriteMultiApiPackageJson(codeModel);
                await WriteMultiApiTsConfig(codeModel);
                await WriteMultiApiWebpackTsConfig(codeModel);
            }

            if (ShouldWriteNonMultiApiMetadata(codeModel))
            {
                await WriteTsConfig(codeModel);
                await WriteWebpackTsConfig(codeModel);
                await WriteWebpackConfig(codeModel);
                await WriteNpmIgnore(codeModel);
            }
        }
    }
}
