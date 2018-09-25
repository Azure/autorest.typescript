// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Linq;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions;
using AutoRest.TypeScript.Model;
using static AutoRest.Core.Utilities.DependencyInjection;
using System.Collections.Generic;
using AutoRest.TypeScript.DSL;

namespace AutoRest.TypeScript
{
    public class TransformerTS : CodeModelTransformer<CodeModelTS>
    {
        public override CodeModelTS TransformCodeModel(CodeModel cm)
        {
            var codeModel = cm as CodeModelTS;

            // we're guaranteed to be in our language-specific context here.
            SwaggerExtensions.NormalizeClientModel(codeModel);
            TransformHeaderCollectionParameterTypes(codeModel);
            PopulateAdditionalProperties(codeModel);
            NormalizeOdataFilterParameter(codeModel);
            PerformParameterMapping(codeModel);
            CreateModelTypeForOptionalClientProperties(codeModel);
            CreateModelTypesForOptionalMethodParameters(codeModel);
            AddEnumTypesToCodeModel(codeModel);
            EnsureParameterMethodSet(codeModel);
            CreateUniqueParameterMapperNames(codeModel);
            DisambiguateHeaderNames(codeModel);
            AddReadOnlyDocumentation(codeModel);
            ProcessAdditionalProperties(codeModel);

            if (codeModel.Settings.ModelDateTimeAsString)
            {
                ConvertDateTimeToString(codeModel);
            }

            return codeModel;
        }

        private void AddReadOnlyDocumentation(CodeModelTS codeModel)
        {
            const string doc = "**NOTE: This property will not be serialized. It can only be populated by the server.**";
            foreach (var model in codeModel.AllModelTypes)
            {
                foreach (var property in model.Properties)
                {
                    if (property.IsReadOnly)
                    {
                        if (string.IsNullOrEmpty(property.Documentation))
                        {
                            property.Documentation = "";
                        }
                        property.Documentation += Environment.NewLine + doc;
                        property.Documentation = property.Documentation.Value.Trim();
                    }
                }
            }
        }

        private void ConvertDateTimeToString(CodeModelTS codeModel)
        {
            void addDocumentation(IVariable variable)
            {
                if (variable.ModelType is PrimaryType pt && pt.KnownPrimaryType == KnownPrimaryType.DateTime)
                {
                    const string doc = "**NOTE: This entity will be treated as a string instead of a Date because the API can potentially deal with a higher precision value than what is supported by JavaScript.**";
                    if (string.IsNullOrEmpty(variable.Documentation))
                    {
                        variable.Documentation = "";
                    }

                    variable.Documentation += Environment.NewLine + doc;
                }
            }

            void convertModel(IModelType modelType)
            {
                if (modelType is CompositeType composite)
                {
                    foreach (var property in composite.Properties)
                    {
                        addDocumentation(property);
                        convertModel(property.ModelType);
                    }
                }
                else if (modelType is PrimaryType pt &&
                    pt.KnownPrimaryType == KnownPrimaryType.DateTime)
                {
                    pt.KnownPrimaryType = KnownPrimaryType.String;
                }
            }

            foreach (var model in codeModel.AllModelTypes)
            {
                convertModel(model);
            }

            foreach (var property in codeModel.Properties)
            {
                addDocumentation(property);
                convertModel(property.ModelType);
            }

            var allMethods = codeModel.MethodGroupModels.SelectMany(g => g.MethodTemplateModels).Concat(codeModel.MethodTemplateModels);
            foreach (var method in allMethods)
            {
                foreach (var parameter in method.Parameters)
                {
                    addDocumentation(parameter);
                    convertModel(parameter.ModelType);
                }

                foreach (var response in method.Responses.Values)
                {
                    convertModel(response.Body);
                    convertModel(response.Headers);
                }

                convertModel(method.DefaultResponse.Body);
                convertModel(method.DefaultResponse.Headers);

                convertModel(method.ReturnType.Body);
                convertModel(method.ReturnType.Headers);
            }
        }

        private void DisambiguateHeaderNames(CodeModelTS codeModel)
        {
            var allHeadersMethods = codeModel.MethodGroupModels
                .SelectMany(g => g.MethodTemplateModels)
                .Concat(codeModel.MethodTemplateModels)
                .Where(m => m.ReturnType.Headers != null && m.ReturnType.Body != null);
            foreach (var method in allHeadersMethods)
            {
                foreach (var headerProp in ((CompositeTypeTS)method.ReturnType.Headers).Properties)
                {
                    if (method.ReturnType.Body is CompositeTypeTS composite &&
                        composite.ComposedProperties.Select(p => p.Name).Contains(headerProp.Name))
                    {
                        headerProp.Name = headerProp.Name + "Header";
                    }
                    else if (headerProp.Name == MethodTS.primitiveHttpBodyPropertyName ||
                        headerProp.Name == MethodTS.rawHttpResponsePropertyName)
                    {
                        headerProp.Name = headerProp.Name + "Header";
                    }
                }
            }
        }

        private void EnsureParameterMethodSet(CodeModelTS codeModel)
        {
            foreach (Method method in codeModel.Methods)
            {
                foreach (Parameter parameter in method.LogicalParameters)
                {
                    parameter.Method = method;
                }
            }
        }

        private sealed class ParameterComparer : IEqualityComparer<ParameterTS>
        {
            private ParameterComparer() {}
            public static ParameterComparer Instance { get; } = new ParameterComparer();

            public bool Equals(ParameterTS x, ParameterTS y)
            {
                TSBuilder xBuilder = new TSBuilder();
                xBuilder.Object(obj => ClientModelExtensions.ConstructParameterMapper(obj, x));

                TSBuilder yBuilder = new TSBuilder();
                yBuilder.Object(obj => ClientModelExtensions.ConstructParameterMapper(obj, y));
                return xBuilder.ToString() == yBuilder.ToString();
            }

            public int GetHashCode(ParameterTS obj)
            {
                return 0;
            }
        }

        private void CreateUniqueParameterNames(IEnumerable<ParameterTS> parameters)
        {
            IEnumerable<ParameterTS>[] distinctParameterGroups = parameters.GroupBy(p => p, ParameterComparer.Instance).ToArray();
            if (distinctParameterGroups.Length > 1)
            {
                for (int i = 0; i < distinctParameterGroups.Length; i++)
                {
                    foreach (ParameterTS param in distinctParameterGroups[i])
                    {
                        param.MapperName = param.Name + i;
                    }
                }
            }
        }
        private void CreateUniqueParameterMapperNames(CodeModelTS codeModel)
        {
            TSBuilder builder = new TSBuilder();
            var parameters = codeModel.Methods
                .SelectMany(m => m.LogicalParameters)
                .Cast<ParameterTS>()
                .Where(p => p.ModelTypeName != "RequestOptionsBase" && p.Location != ParameterLocation.Body)
                .GroupBy(p => p.Name.Value);

            foreach (var group in parameters)
            {
                CreateUniqueParameterNames(group);
            }
        }

        public void TransformHeaderCollectionParameterTypes(CodeModelTS cm)
        {
            foreach (var method in cm.Methods)
            {
                foreach (var parameter in method.Parameters)
                {
                    string prefix = parameter.Extensions?.GetValue<string>(SwaggerExtensions.HeaderCollectionPrefix);
                    if (!string.IsNullOrEmpty(prefix) && !(parameter.ModelType is DictionaryTypeTS))
                    {
                        var dictionary = New<DictionaryTypeTS>().LoadFrom(parameter.ModelType);
                        dictionary.ValueType = parameter.ModelType;
                        parameter.ModelType = dictionary;
                    }
                }
            }
        }

        public void AddEnumTypesToCodeModel(CodeModelTS cm)
        {
            // If there is an model property that is an EnumType and has not been added to the EnumTypes then add it.
            foreach (var modelType in cm.AllModelTypes)
            {
                foreach(var property in modelType.Properties)
                {
                    if (property.ModelType is EnumType propertyAsEnum && !cm.EnumTypes.Contains(propertyAsEnum))
                    {
                        if(string.IsNullOrEmpty(propertyAsEnum.Name.RawValue))
                        {
                            propertyAsEnum.SetName(property.Name);
                        }
                        cm.Add(propertyAsEnum);
                    }
                }
            }
            // If there is a method parameter that is an EnumType and has not been added to the EnumTypes then add it.
            foreach (var method in cm.Methods)
            {
                foreach(var parameter in method.Parameters)
                {
                    if (parameter.ModelType is EnumType parameterAsEnum && !cm.EnumTypes.Contains(parameterAsEnum))
                    {
                        if (string.IsNullOrEmpty(parameterAsEnum.Name.RawValue))
                        {
                            parameterAsEnum.SetName(parameter.Name);
                        }
                        cm.Add(parameterAsEnum);
                    }
                }
                // If there is a response body or header in the response pair that is an EnumType and has not been
                // added to the EnumTypes then add it.
                foreach (var responsePair in method.Responses)
                {
                    var response = responsePair.Value;
                    var modelTypes = new List<IModelType>
                    {
                        response.Body,
                        response.Headers
                    };
                    foreach (var modelType in modelTypes)
                    {
                        if (modelType is EnumType modelTypeAsEnum && !cm.EnumTypes.Contains(modelTypeAsEnum))
                        {
                            if (string.IsNullOrEmpty(modelTypeAsEnum.Name.RawValue))
                            {
                                var enumName = $"{method.Name.ToPascalCase()}{responsePair.Key}";
                                if (modelType.Equals(response.Body)) enumName += "Response";
                                modelTypeAsEnum.SetName(enumName);
                            }
                            cm.Add(modelTypeAsEnum);
                        }
                    }
                }
            }
        }

        public void PerformParameterMapping(CodeModelTS cm)
        {
            foreach (var method in cm.Methods)
            {
                foreach (var parameterTransformation in method.InputParameterTransformation)
                {
                    parameterTransformation.OutputParameter.Name =
                        method.GetUniqueName(
                            CodeNamer.Instance.GetParameterName(parameterTransformation.OutputParameter.GetClientName()));

                    foreach (var parameterMapping in parameterTransformation.ParameterMappings)
                    {
                        if (parameterMapping.InputParameterProperty != null)
                        {
                            parameterMapping.InputParameterProperty =
                                CodeNamer.Instance.GetPropertyName(parameterMapping.InputParameterProperty);
                        }

                        if (parameterMapping.OutputParameterProperty != null)
                        {
                            parameterMapping.OutputParameterProperty =
                                CodeNamer.Instance.GetPropertyName(parameterMapping.OutputParameterProperty);
                        }
                    }
                }
            }
        }

        private static readonly string[] reservedClientPropertyNames = new[]
        {
            "requestPolicyFactories",
            "httpClient",
            "httpPipelineLogger",
            "noRetryPolicy",
            "rpRegistrationRetryTimeout",
            "generateClientRequestIdHeader",
            "withCredentials",
            "clientRequestIdHeaderName"
        };

        public virtual void CreateModelTypeForOptionalClientProperties(CodeModelTS cm)
        {
            var optionalPropertiesOnClient = cm.Properties.Where(
                p => (!p.IsRequired || p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue))
                && !p.IsConstant);
            if (optionalPropertiesOnClient.Count() > 0 || !cm.IsCustomBaseUri)
            {
                string modelTypeName = cm.Name + "Options";
                var modelType = new CompositeTypeTS(modelTypeName);
                modelType.BaseModelType = New<CompositeType>(new { Name = "ServiceClientOptions", SerializedName = "ServiceClientOptions" });
                // We could end up having a property that is required but has a default value based on the above condition. If so then make it optional.
                optionalPropertiesOnClient.Where(p => p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue)).ForEach(prop => prop.IsRequired = false);

                foreach (var prop in optionalPropertiesOnClient)
                {
                    if (reservedClientPropertyNames.Contains(prop.Name.ToCamelCase()))
                    {
                        prop.Name += "Property";
                    }
                }

                modelType.AddRange(optionalPropertiesOnClient);
                if (!cm.IsCustomBaseUri)
                {
                    var prop = New<PropertyTS>();
                    prop.Name = "baseUri";
                    prop.ModelType = new PrimaryTypeTS(KnownPrimaryType.String);
                    modelType.Add(prop);
                }

                cm.Add(modelType);
                cm.OptionalParameterTypeForClientConstructor = "Models." + modelTypeName;
            }
        }


        private static readonly string[] reservedParameterNames = new[]
        {
            "customHeaders",
            "abortSignal",
            "timeout",
            "onUploadProgress",
            "onDownloadProgress"
        };

        public virtual void CreateModelTypesForOptionalMethodParameters(CodeModelTS cm)
        {
            foreach (var method in cm.Methods)
            {
                IEnumerable<Parameter> optionalParameters = method.Parameters.Where(MethodTS.IsInOptionsParameter);
                if (optionalParameters == null || !optionalParameters.Any())
                {
                    var optionsParameterTemplateModel = New<Parameter>(new
                    {
                        Name = "options",
                        SerializedName = "options",
                        IsRequired = false,
                        Documentation = "Optional Parameters.",
                        Location = ParameterLocation.None,
                        ModelType = New<CompositeType>(new
                        {
                            Name = "RequestOptionsBase",
                            SerializedName = "RequestOptionsBase",
                            Documentation = "Optional Parameters."
                        })
                    });
                    method.Add(optionsParameterTemplateModel);
                }
                else
                {
                    var optionsParameterTemplateModel = New<Parameter>(new
                    {
                        Name = "options",
                        SerializedName = "options",
                        IsRequired = false,
                        Documentation = "Optional Parameters.",
                        Location = ParameterLocation.None,
                        ModelType = New<CompositeType>(new
                        {
                            Name = method.Group.ToPascalCase() + method.Name.ToPascalCase() + "OptionalParams",
                            SerializedName = method.Name.ToPascalCase() + "Options",
                            Documentation = "Optional Parameters."
                        })
                    });
                    var optionsParameterModelType = ((CompositeType)optionsParameterTemplateModel.ModelType);
                    optionsParameterModelType.BaseModelType = New<CompositeType>(new { Name = "RequestOptionsBase", SerializedName = "RequestOptionsBase" });

                    foreach(var optionalParameter in optionalParameters)
                    {
                        var name = reservedParameterNames.Contains(optionalParameter.Name.ToCamelCase())
                            ? optionalParameter.Name + "Parameter"
                            : optionalParameter.Name.Value;

                        optionsParameterModelType.Add(New<Property>(new
                        {
                            IsReadOnly = false,
                            Name = name,
                            IsRequired = optionalParameter.IsRequired,
                            DefaultValue = optionalParameter.DefaultValue,
                            Documentation = optionalParameter.Documentation,
                            ModelType = optionalParameter.ModelType,
                            SerializedName = optionalParameter.SerializedName,
                            Constraints = optionalParameter.Constraints,
                            Extensions = optionalParameter.Extensions
                        }));
                    }
                    method.Add(optionsParameterTemplateModel);
                    cm.Add(optionsParameterModelType);
                }
            }
        }

        /// <summary>
        /// Normalize odata filter parameter to PrimaryType.String
        /// </summary>
        /// <param name="client">Service Client</param>
        public void NormalizeOdataFilterParameter(CodeModelTS client)
        {
            if (client == null)
            {
                throw new ArgumentNullException(nameof(client));
            }

            foreach (var method in client.Methods)
            {
                foreach (var parameter in method.Parameters)
                {
                    if (parameter.SerializedName.EqualsIgnoreCase("$filter") &&
                        (parameter.Location == ParameterLocation.Query) &&
                        parameter.ModelType is CompositeType)
                    {
                        parameter.ModelType = New<PrimaryType>(KnownPrimaryType.String);
                    }
                }
            }
        }


        private void PopulateAdditionalProperties(CodeModel codeModel)
        {
            if (Settings.Instance.AddCredentials)
            {
                if (!codeModel.Properties.Any(p => p.ModelType.IsPrimaryType(KnownPrimaryType.Credentials)))
                {
                    codeModel.Add(New<Property>(new
                    {
                        Name = "credentials",
                        SerializedName = "credentials",
                        ModelType = New<PrimaryType>(KnownPrimaryType.Credentials),
                        IsRequired = true,
                        Documentation = "Subscription credentials which uniquely identify client subscription."
                    }));
                }
            }
        }


        private void ProcessAdditionalProperties(CodeModelTS cm)
        {
            var modelTypes = cm.ModelTypes.Cast<CompositeTypeTS>();
            foreach(var model in modelTypes)
            {
                var modelProperties = model.Properties.ToList();
                foreach (var property in modelProperties)
                {
                    bool isAdditionalProperties =
                        property.Name.EqualsIgnoreCase("additionalProperties") &&
                        property.SerializedName == null &&
                        property.ModelType is DictionaryTypeTS;

                    if (isAdditionalProperties)
                    {
                        model.AdditionalProperties = (property.ModelType as DictionaryTypeTS).ValueType;
                        model.Remove(property);
                    }
                }
            }
        }
    }
}