﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Linq;
using AutoRest.Core.Model;
using AutoRest.Extensions.Azure;
using AutoRest.TypeScript.Model;
using Newtonsoft.Json;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.DSL;

namespace AutoRest.TypeScript.Azure.Model
{

    public class CodeModelTSa : CodeModelTS
    {
        private static readonly string[] azureServiceClientProperties = {
            "acceptLanguage",
            "longRunningOperationRetryTimeout",
        };

        private string _optionalParameterTypeForClientConstructor;

        [JsonIgnore]
        public override bool IsAzure => true;


        [JsonIgnore]
        public override IEnumerable<CompositeTypeTS> ModelTemplateModels => base.ModelTemplateModels.Concat(PageTemplateModels).Where(each => !PageTemplateModels.Any(ptm => ptm.Name.EqualsIgnoreCase(each.Name)));

        public override string OptionalParameterTypeForClientConstructor
        {
            get
            {
                return _optionalParameterTypeForClientConstructor ?? "AzureServiceClientOptions";
            }

            set
            {
                _optionalParameterTypeForClientConstructor = value;
            }
        }

        public override CompositeType Add(CompositeType item)
        {
            // Removing all models that contain the extension "x-ms-external", as they will be
            // generated in TypeScript client runtime for azure - "@azure/ms-rest-azure-js".
            if (item.Extensions.ContainsKey(AzureExtensions.PageableExtension) ||
                item.Extensions.ContainsKey(AzureExtensions.ExternalExtension))
            {
                return null;
            }

            return base.Add(item);
        }

        public IList<PageCompositeTypeTSa> PageTemplateModels { get; set; } = new List<PageCompositeTypeTSa>();

        public override void ConstructRuntimeImportForModelIndex(TSBuilder builder)
        {
            List<string> imports = new List<string>() { "BaseResource", "CloudError" };
            if (OptionalParameterTypeForClientConstructor != "AzureServiceClientOptions")
            {
                imports.Add("AzureServiceClientOptions");
            }
            builder.Import(imports, MsRestAzureLibName);
        }

        public override void PackageDependencies(JSONObject dependencies)
        {
            dependencies.StringProperty(MsRestAzureLibName, MsRestAzureDependencyVersion);
            base.PackageDependencies(dependencies);
        }

        public string GenerateAzureServiceClientImports()
        {
            TSBuilder builder = new TSBuilder();

            builder.ImportAllAs(MsRestModuleName, MsRestLibName);

            bool usesAzureOptionsType = OptionalParameterTypeForClientConstructor == "AzureServiceClientOptions";
            if (usesAzureOptionsType || MethodTemplateModels.Any((MethodTS method) => method.IsLongRunningOperation))
            {
                builder.ImportAllAs(MsRestAzureModuleName, MsRestAzureLibName);
            }

            if (CodeGeneratorTS.ShouldWriteModelsFiles(this))
            {
                builder.ImportAllAs("Models", "./models");
            }
            if (HasMappers())
            {
                builder.ImportAllAs("Mappers", "./models/mappers");
            }

            if (HasMappableParameters)
            {
                builder.ImportAllAs("Parameters", "./models/parameters");
            }

            if (MethodGroupModels.Any())
            {
                builder.ImportAllAs("operations", "./operations");
            }
            builder.Import(new string[] { ContextName }, $"./{ContextName.ToCamelCase()}");

            return builder.ToString();
        }

        public override bool HasMappers()
        {
            return true;
        }

        public override string GenerateMapperIndex()
        {
            TSBuilder builder = new TSBuilder();
            builder.Comment(AutoRest.Core.Settings.Instance.Header);
            builder.Line();

            CompositeTypeTS[] orderedMapperTemplateModels = OrderedMapperTemplateModels.ToArray();

            builder.Import(new[] { "CloudErrorMapper", "BaseResourceMapper" }, MsRestAzureLibName);

            ImportMsRestForMappers(builder, orderedMapperTemplateModels);

            builder.Line();

            builder.ExportConst("CloudError", "CloudErrorMapper");
            builder.ExportConst("BaseResource", "BaseResourceMapper");

            ExportOrderedMapperModels(builder, orderedMapperTemplateModels);

            foreach (PageCompositeTypeTSa pageModel in PageTemplateModels)
            {
                builder.Line();
                pageModel.ConstructModelMapper(builder);
            }

            ExportPolymorphicDictionary(builder);

            return builder.ToString();
        }

        protected override void GenerateNodeSampleImports(TSBuilder builder)
        {
            GenerateNodeSampleMsRestJsImport(builder);
            builder.ImportAllAs(MsRestAzureModuleName, MsRestAzureLibName);
            GenerateNodeSampleMsRestNodeAuthImport(builder);
            GenerateNodeSampleClientImport(builder);
        }

        protected override bool ShouldGenerateProperty(string propertyName)
        {
            return base.ShouldGenerateProperty(propertyName) && !azureServiceClientProperties.Contains(propertyName);
        }

        public override string GenerateModelIndex()
        {
            TSBuilder builder = new TSBuilder();

            builder.Comment(AutoRest.Core.Settings.Instance.Header);
            builder.Line();
            builder.Line(ConstructRuntimeImportForModelIndex());
            if (ContainsDurationPropertyInModels() || IsAnyModelInheritingFromRequestOptionsBase() || MethodsWithCustomResponseType.Any())
            {
                builder.ImportAllAs(MsRestModuleName, MsRestLibName);
            }
            builder.Line();
            builder.Export("BaseResource", "CloudError");
            foreach (CompositeTypeTS model in OrderedModelTemplateModels)
            {
                builder.Line();
                builder.Line(model.Generate());
            }
            foreach(PageCompositeTypeTSa model in PageTemplateModels)
            {
                builder.Line();
                builder.Line(model.Generate());
            }
            foreach (EnumTypeTS model in EnumTemplateModels)
            {
                builder.Line();
                builder.Line(model.Generate(Settings.EnumTypes));
            }
            builder.Line(GenerateResponseTypes());

            return builder.ToString();
        }

        protected override string GetServiceClientOptionsName()
        {
            return "Azure" + base.GetServiceClientOptionsName();
        }

        protected override string GetServiceClientOptionsModuleName()
        {
            return MsRestAzureModuleName;
        }
    }
}
