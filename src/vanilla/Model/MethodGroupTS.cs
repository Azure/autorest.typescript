// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.DSL;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.Model
{
    public class MethodGroupTS : MethodGroup
    {
        protected MethodGroupTS() : base()
        {
        }

        protected MethodGroupTS(string name): base(name)
        {
        }

        [JsonIgnore]
        public CodeModelTS CodeModelTS => (CodeModelTS) CodeModel;

        [JsonIgnore]
        public IEnumerable<MethodTS> MethodTemplateModels => Methods.Cast<MethodTS>();

        public string MappersModuleName => TypeName.ToCamelCase() + "Mappers";

        public ISet<string> OperationModelNames
        {
            get
            {
                ISet<string> modelNames = new HashSet<string>();
                foreach (Method method in Methods)
                {
                    if (method.Body != null)
                    {
                        CollectReferencedModelNames(modelNames, method.Body.ModelType);
                    }
                    foreach (Response response in method.Responses.Values)
                    {
                        CollectReferencedModelNames(modelNames, response.Body);
                        CollectReferencedModelNames(modelNames, response.Headers);
                    }
                    if (method.DefaultResponse != null)
                    {
                        CollectReferencedModelNames(modelNames, method.DefaultResponse.Body);
                        CollectReferencedModelNames(modelNames, method.DefaultResponse.Headers);
                    }
                }

                IEnumerable<string> skippedSubtypes = CodeModelTS?.Settings?.SkipSubtypes?.ToHashSet() ?? Enumerable.Empty<string>();

                IEnumerable<CompositeType> modelTypesWithBaseType = CodeModel.ModelTypes.Where(modelType => modelType.BaseModelType != null).ToArray();
                int previousModelNameCount;
                do
                {
                    previousModelNameCount = modelNames.Count;
                    // Search for polymorphic subtypes
                    foreach (CompositeType model in modelTypesWithBaseType)
                    {
                        string modelTypeName = model.Name.ToString();
                        string baseModelTypeName = model.BaseModelType.Name.ToString();
                        if (modelNames.Contains(baseModelTypeName) && !modelNames.Contains(modelTypeName) && !skippedSubtypes.Contains(baseModelTypeName))
                        {
                            CollectReferencedModelNames(modelNames, model);
                        }
                    }
                }
                while (previousModelNameCount != modelNames.Count);

                return modelNames;
            }
        }

        public static void CollectReferencedModelNames(ISet<string> closure, IModelType model)
        {
            if (model is CompositeType composite)
            {
                string compositeName = composite.Name;
                // Some services define a property of CloudError named CloudErrorBody, but we don't
                // have a mapper for that in @azure/core-arm. In @azure/core-arm we
                // only have a mapper for CloudError that contains all of the information that is
                // contained by CloudErrorBody. Because of that, we can safely ignore CloudErrorBody.
                if (!closure.Contains(compositeName) && compositeName != "CloudErrorBody")
                {
                    closure.Add(compositeName);

                    if (composite.BaseModelType != null)
                    {
                        CollectReferencedModelNames(closure, composite.BaseModelType);
                    }

                    foreach (Property property in composite.Properties)
                    {
                        CollectReferencedModelNames(closure, property.ModelType);
                    }
                }
            }
            else if (model is SequenceType sequence)
            {
                CollectReferencedModelNames(closure, sequence.ElementType);
            }
            else if (model is DictionaryType dictionary)
            {
                CollectReferencedModelNames(closure, dictionary.ValueType);
            }
        }

        public bool ContainsCompositeOrEnumTypeInParametersOrReturnType()
        {
            bool result = false;
            IEnumerable<MethodTS> methods = MethodTemplateModels;
            foreach(MethodTS method in methods)
            {
                result = !method.OptionsParameterModelType.Name.EqualsIgnoreCase("RequestOptionsBase");
                if (result)
                {
                    break;
                }

                IEnumerable<Parameter> parametersToBeScanned = method.LocalParameters.Where(l => l.IsRequired);
                result = parametersToBeScanned.Any(p => p.ModelType.IsCompositeOrEnumType());
                if (result)
                {
                    break;
                }
            }

            if (!result)
            {
                result = methods.Any(m => m.ReturnType.Body.IsCompositeOrEnumType());
            }

            return result;
        }

        public string GenerateOperationSpecDefinitions(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

            builder.LineComment("Operation Specifications");
            bool addedFirstValue = false;
            foreach (MethodTS method in MethodTemplateModels)
            {
                if (!method.IsLongRunningOperation)
                {
                    if (addedFirstValue)
                    {
                        builder.Line(emptyLine);
                    }
                    else
                    {
                        builder.ConstObjectVariable("serializer", CodeModelTS.CreateSerializerExpression());
                        addedFirstValue = true;
                    }
                    method.GenerateOperationSpecDefinition(builder);
                }
            }

            return builder.ToString();
        }

        public bool HasMappableParameters => CodeGeneratorTS.HasMappableParameters(Methods);

        public string GenerateMethodGroupImports()
        {
            TSBuilder builder = new TSBuilder();

            builder.ImportAllAs("coreHttp", "@azure/core-http");
            if (MethodTemplateModels.Any((MethodTS method) => method.IsLongRunningOperation))
            {
                builder.ImportAllAs("coreArm", "@azure/core-arm");
            }

            CodeModelTS codeModel = CodeModelTS;

            if (CodeGeneratorTS.ShouldWriteModelsFiles(codeModel))
            {
                if (ContainsCompositeOrEnumTypeInParametersOrReturnType() || MethodTemplateModels.Any(m => m.HasCustomHttpResponseType))
                {
                    builder.ImportAllAs("Models", "../models");
                }
                if (codeModel.HasMappers())
                {
                    builder.ImportAllAs("Mappers", $"../models/{MappersModuleName}");
                }
            }

            if (HasMappableParameters)
            {
                builder.ImportAllAs("Parameters", "../models/parameters");
            }

            builder.Import(new string[] { codeModel.ContextName }, $"../{codeModel.ContextName.ToCamelCase()}");

            return builder.ToString();
        }

        public string GenerateMappers()
        {
            TSBuilder builder = new TSBuilder();
            builder.Comment(AutoRest.Core.Settings.Instance.Header);
            builder.Line();
            builder.Line("export {");
            builder.Indent(() =>
            {
                List<string> exportedValues = new List<string>();
                if (!string.IsNullOrWhiteSpace(CodeModelTS.PolymorphicDictionary))
                {
                    exportedValues.Add("discriminators");
                }
                exportedValues.AddRange(OperationModelNames.OrderBy(mapperName => mapperName.ToLowerInvariant()));

                builder.Line(string.Join(",\n", exportedValues));
            });
            builder.Line("} from \"../models/mappers\";");

            return builder.ToString();
        }
    }
}