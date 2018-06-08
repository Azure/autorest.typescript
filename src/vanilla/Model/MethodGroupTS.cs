// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Linq;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using Newtonsoft.Json;

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

        public string SerializerPropertyDeclaration
        {
            get
            {
                var serializerParams = CodeModel.ShouldGenerateXmlSerialization ? "Mappers, true" : "Mappers";
                return $"private readonly serializer = new msRest.Serializer({serializerParams});";
            }
        }

        public ISet<string> OperationModelNames
        {
            get
            {
                ISet<string> modelNames = new HashSet<string>();
                while (true)
                {
                    int initialCount = modelNames.Count;
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

                    foreach (CompositeType model in CodeModel.ModelTypes)
                    {
                        if (model.BaseModelType != null && modelNames.Contains(model.BaseModelType.Name))
                        {
                            CollectReferencedModelNames(modelNames, model);
                        }
                    }

                    if (initialCount == modelNames.Count)
                    {
                        break;
                    }
                }

                return modelNames;
            }
        }

        public static void CollectReferencedModelNames(ISet<string> closure, IModelType model)
        {
            if (model is CompositeType composite && !closure.Contains(composite.Name))
            {
                closure.Add(composite.Name);
                if (composite.BaseModelType != null)
                {
                    CollectReferencedModelNames(closure, composite.BaseModelType);
                }
                foreach (Property property in composite.Properties)
                {
                    CollectReferencedModelNames(closure, property.ModelType);
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

        [JsonIgnore]
        public virtual IEnumerable<MethodTS> MethodWrappableTemplateModels =>
            MethodTemplateModels.Where(method => !method.ReturnType.Body.IsStream());

        [JsonIgnore]
        public bool ContainsTimeSpan
        {
            get
            {
                Method method = MethodTemplateModels.FirstOrDefault(m => m.Parameters.FirstOrDefault(p =>
                    p.ModelType.IsPrimaryType(KnownPrimaryType.TimeSpan) ||
                    (p.ModelType is Core.Model.SequenceType && (p.ModelType as Core.Model.SequenceType).ElementType.IsPrimaryType(KnownPrimaryType.TimeSpan)) ||
                    (p.ModelType is Core.Model.DictionaryType && (p.ModelType as Core.Model.DictionaryType).ValueType.IsPrimaryType(KnownPrimaryType.TimeSpan))) != null);
                return  method != null;
            }
        }

        public bool ContainsCompositeOrEnumTypeInParametersOrReturnType()
        {
            bool result = false;
            foreach(var method in MethodTemplateModels)
            {
                var parametersToBeScanned = method.LocalParameters.Where(l => l.IsRequired);
                if (!method.OptionsParameterModelType.Name.EqualsIgnoreCase("RequestOptionsBase"))
                {
                    result = true;
                    break;
                }
                result = parametersToBeScanned.Any(p => p.ModelType.IsCompositeOrEnumType());

                if (result)
                    break;
            }
            if (!result)
                result = MethodTemplateModels.Any(m => m.ReturnType.Body.IsCompositeOrEnumType());
            return result;
        }
    }
}