﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript;
using Newtonsoft.Json;
using AutoRest.Core;

namespace AutoRest.TypeScript.Model
{
    public class CodeModelTS : CodeModel
    {
        public const string ClientSideValidationSettingName = "ClientSideValidation";

        private const string ServiceClientOptions = "ServiceClientOptions";

        private const string defaultGitHubRepositoryName = "azure-sdk-for-js";
        private const string defaultGitHubUrl = "https://github.com/azure/" + defaultGitHubRepositoryName;
        private const string searchStringSuffix = "/lib/services/";
        private const string outputFolderSearchString = "/" + defaultGitHubRepositoryName + searchStringSuffix;

        public CodeModelTS()
        {
        }
        public CodeModelTS(string packageName = "test-client", string packageVersion = "0.1.0")
        {
            PackageName = packageName;
            PackageVersion = packageVersion;
        }

        private string _optionalParameterTypeForClientConstructor;

        [JsonIgnore]
        public string ContextName => Name + "Context";

        private bool _computedRequestContentType;
        private string _requestContentType;
        public string RequestContentType
        {
            get
            {
                if (!_computedRequestContentType)
                {
                    IEnumerable<string> contentTypes = Methods
                        .Select(m => m.RequestContentType)
                        .GroupBy(t => t)
                        .OrderByDescending(g => g.Count())
                        .Select(g => g.Key);

                    _computedRequestContentType = true;
                    _requestContentType = contentTypes.FirstOrDefault();
                }

                return _requestContentType;
            }
        }

        [JsonIgnore]
        public string SchemeHostAndPort
        {
            get
            {
                string result = null;
                string baseUrl = BaseUrl;
                if (!string.IsNullOrEmpty(baseUrl))
                {
                    const string colonSlashSlash = "://";
                    int colonSlashSlashIndex = baseUrl.IndexOf(colonSlashSlash);
                    int hostStartIndex = colonSlashSlashIndex == -1 ? 0 : colonSlashSlashIndex + colonSlashSlash.Length;
                    int pathStartIndex = baseUrl.IndexOf('/', hostStartIndex);
                    result = (pathStartIndex == -1 ? baseUrl : baseUrl.Substring(0, pathStartIndex));
                }
                return result;
            }
        }

        [JsonIgnore]
        public string BasePath
        {
            get
            {
                string basePath = Uri.TryCreate(BaseUrl, UriKind.Absolute, out Uri baseUri) ? baseUri.AbsolutePath : null;
                if (!string.IsNullOrEmpty(basePath))
                {
                    if (basePath.StartsWith('/'))
                    {
                        basePath = basePath.Substring(1);
                    }
                    if (basePath.EndsWith('/'))
                    {
                        basePath = basePath.Substring(0, basePath.Length - 1);
                    }
                }
                return basePath;
            }
        }

        public bool IsCustomBaseUri => Extensions.ContainsKey(SwaggerExtensions.ParameterizedHostExtension);

        [JsonIgnore]
        public IEnumerable<MethodTS> MethodTemplateModels => Methods.Cast<MethodTS>().Where(each => each.MethodGroup.IsCodeModelMethodGroup);

        [JsonIgnore]
        public virtual IEnumerable<CompositeTypeTS> ModelTemplateModels => ModelTypes.Concat(HeaderTypes).Cast<CompositeTypeTS>();

        [JsonIgnore]
        public virtual IEnumerable<EnumTypeTS> EnumTemplateModels => EnumTypes.Cast<EnumTypeTS>();

        [JsonIgnore]
        public virtual IEnumerable<MethodGroupTS> MethodGroupModels => Operations.Cast<MethodGroupTS>().Where(each => !each.IsCodeModelMethodGroup);

        [JsonIgnore]
        public virtual IEnumerable<MethodTS> MethodWrappableTemplateModels =>
            MethodTemplateModels.Where(method => !method.ReturnType.Body.IsStream());

        public IEnumerable<MethodTS> MethodsWithCustomResponseType => Methods.Cast<MethodTS>().Where(m => m.ReturnType.Headers != null || m.ReturnType.Body != null);

        /// <summary>
        /// Provides an ordered ModelTemplateModel list such that the parent
        /// type comes before in the list than its child. This helps when
        /// requiring models in index.js
        /// </summary>
        [JsonIgnore]
        public virtual IEnumerable<CompositeTypeTS> OrderedModelTemplateModels
        {
            get
            {
                List<CompositeTypeTS> orderedList = new List<CompositeTypeTS>();
                foreach (var model in ModelTemplateModels)
                {
                    constructOrderedList(model, orderedList);
                }
                return orderedList;
            }
        }

        public virtual string PackageName { get; set; }

        public virtual string PackageVersion { get; set; }

        public string OutputFolder { get; set; }

        public bool ModelEnumAsUnion { get; set; }

        public bool ModelDateAsString { get; set; }

        public bool GenerateMetadata { get; set; }

        public bool GenerateBodyMethods { get; set; }

        public string HomePageUrl
        {
            get
            {
                string result = defaultGitHubUrl;
                if (!string.IsNullOrEmpty(OutputFolder))
                {
                    string outputFolder = OutputFolder.Replace('\\', '/');
                    int searchStringIndex = outputFolder.IndexOf(outputFolderSearchString, StringComparison.OrdinalIgnoreCase);
                    if (0 <= searchStringIndex)
                    {
                        result += searchStringSuffix + outputFolder.Substring(searchStringIndex + outputFolderSearchString.Length);
                    }
                }
                return result;
            }
        }

        public string RepositoryUrl => $"{defaultGitHubUrl}.git";

        public string BugsUrl => $"{defaultGitHubUrl}/issues";

        public string ClientPrefix
        {
            get
            {
                var clientIndex = Name.IndexOf("Client", 0, StringComparison.CurrentCultureIgnoreCase);
                return clientIndex > 0 ? Name.Substring(0, clientIndex) : Name;
            }
        }

        public bool ContainsDurationProperty()
        {
            Core.Model.Property prop = Properties.FirstOrDefault(p =>
                (p.ModelType is PrimaryTypeTS && (p.ModelType as PrimaryTypeTS).KnownPrimaryType == KnownPrimaryType.TimeSpan) ||
                (p.ModelType is Core.Model.SequenceType && (p.ModelType as Core.Model.SequenceType).ElementType.IsPrimaryType(KnownPrimaryType.TimeSpan)) ||
                (p.ModelType is Core.Model.DictionaryType && (p.ModelType as Core.Model.DictionaryType).ValueType.IsPrimaryType(KnownPrimaryType.TimeSpan)));
            return prop != null;
        }

        public bool ContainsDurationPropertyInModels()
        {
            return OrderedModelTemplateModels.Any(m => m.Properties.FirstOrDefault(p =>
               (p.ModelType is PrimaryTypeTS && (p.ModelType as PrimaryTypeTS).KnownPrimaryType == KnownPrimaryType.TimeSpan) ||
               (p.ModelType is SequenceType && (p.ModelType as SequenceType).ElementType.IsPrimaryType(KnownPrimaryType.TimeSpan)) ||
               (p.ModelType is DictionaryType && (p.ModelType as DictionaryType).ValueType.IsPrimaryType(KnownPrimaryType.TimeSpan))) != null);
        }

        private void constructOrderedList(CompositeTypeTS model, List<CompositeTypeTS> orderedList)
        {
            if (model == null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            // BaseResource and CloudError are specified in the ClientRuntime.
            // They are required explicitly in a different way. Hence, they
            // are not included in the ordered list.
            if (model.BaseModelType == null ||
                (model.BaseModelType != null &&
                 (model.BaseModelType.Name == "BaseResource" ||
                  model.BaseModelType.Name == "CloudError")))
            {
                if (!orderedList.Contains(model))
                {
                    orderedList.Add(model);
                }
                return;
            }

            var baseModel = ModelTemplateModels.FirstOrDefault(m => m.Name == model.BaseModelType.Name);
            if (baseModel != null)
            {
                constructOrderedList(baseModel, orderedList);
            }
            // Add the child type after the parent type has been added.
            if (!orderedList.Contains(model))
            {
                orderedList.Add(model);
            }
        }

        public string PolymorphicDictionary
        {
            get
            {
                IndentedStringBuilder builder = new IndentedStringBuilder(IndentedStringBuilder.TwoSpaces);
                var polymorphicTypes = ModelTemplateModels.Where(m => m.BaseIsPolymorphic);

                for (int i = 0; i < polymorphicTypes.Count(); i++)
                {
                    string discriminatorField = polymorphicTypes.ElementAt(i).SerializedName;
                    var polymorphicType = polymorphicTypes.ElementAt(i) as CompositeType;
                    if (polymorphicType.BaseModelType != null)
                    {
                        while (polymorphicType.BaseModelType != null)
                        {
                            polymorphicType = polymorphicType.BaseModelType;
                        }
                        discriminatorField = string.Format(CultureInfo.InvariantCulture, "{0}.{1}",
                            polymorphicType.Name,
                            polymorphicTypes.ElementAt(i).SerializedName);
                        builder.Append(string.Format(CultureInfo.InvariantCulture,
                        "'{0}' : {1}",
                            discriminatorField,
                            polymorphicTypes.ElementAt(i).Name));
                    }
                    else
                    {
                        builder.Append(string.Format(CultureInfo.InvariantCulture,
                        "'{0}' : {1}",
                            discriminatorField,
                            polymorphicTypes.ElementAt(i).Name));
                    }


                    if (i == polymorphicTypes.Count() - 1)
                    {
                        builder.AppendLine();
                    }
                    else
                    {
                        builder.AppendLine(",");
                    }
                }

                return builder.ToString();
            }
        }

        public string RequiredConstructorParameters
        {
            get
            {
                var requireParams = new List<string>();
                this.Properties.Where(p => p.IsRequired && !p.IsConstant && string.IsNullOrEmpty(p.DefaultValue))
                    .ForEach(p => requireParams.Add(p.Name.ToCamelCase()));
                if (!IsCustomBaseUri)
                {
                    requireParams.Add("baseUri");
                }

                if (requireParams == null || requireParams.Count == 0)
                {
                    return string.Empty;
                }

                return string.Join(", ", requireParams);
            }
        }

        /// <summary>
        /// Return the service client constructor required parameters, in TypeScript syntax.
        /// </summary>
        public string RequiredConstructorParametersTS
        {
            get
            {
                StringBuilder requiredParams = new StringBuilder();

                bool first = true;
                foreach (var p in this.Properties)
                {
                    if (!p.IsRequired || p.IsConstant || (p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue)))
                        continue;

                    if (!first)
                        requiredParams.Append(", ");

                    requiredParams.Append(p.Name);
                    requiredParams.Append(": ");
                    requiredParams.Append(p.ModelType.TSType(inModelsModule: false));

                    first = false;
                }

                if (!IsCustomBaseUri)
                {
                    if (!first)
                        requiredParams.Append(", ");

                    requiredParams.Append("baseUri?: string");
                }

                return requiredParams.ToString();
            }
        }

        public virtual string OptionalParameterTypeForClientConstructor
        {
            get
            {
                return _optionalParameterTypeForClientConstructor ?? ServiceClientOptions;
            }

            set
            {
                _optionalParameterTypeForClientConstructor = value;
            }
        }

        public override IEnumerable<string> MyReservedNames => new[] { Name };

        public string ExportMethodGroupNames()
        {
            var builder = new IndentedStringBuilder("  ");
            var methodGroups = MethodGroupModels.ToArray();
            var length = methodGroups.Count();
            for (var i = 0; i < methodGroups.Count(); i++)
            {
                if (i == length - 1)
                {
                    builder.Append(methodGroups[i].TypeName);
                }
                else
                {
                    builder.Append(methodGroups[i].TypeName + ", ");
                }
            }
            return builder.ToString();
        }

        public bool IsAnyModelInheritingFromRequestOptionsBase()
        {
            return ModelTemplateModels.Any(m => m != null && m.BaseModelType != null && m.BaseModelType.Name.EqualsIgnoreCase("RequestOptionsBase"));
        }

        public virtual string ConstructRuntimeImportForModelIndex()
        {
            TSBuilder builder = new TSBuilder();
            if (OptionalParameterTypeForClientConstructor != ServiceClientOptions)
            {
                builder.Import(new string[] { ServiceClientOptions }, "ms-rest-js");
            }
            return builder.ToString();
        }

        public virtual string PackageDependencies()
        {
            return "\"ms-rest-js\": \"~0.19.388\"";
        }

        public virtual Method GetSampleMethod()
        {
            var getMethod = Methods.Where(m => m.HttpMethod == HttpMethod.Get).FirstOrDefault();
            return getMethod != null ? getMethod : Methods.FirstOrDefault();
        }

        public virtual string GetSampleMethodGroupName()
        {
            return GetSampleMethod()?.MethodGroup?.Name?.ToCamelCase();
        }

        public virtual string GenerateSampleMethod(bool isBrowser = false)
        {
            var method = GetSampleMethod();
            var methodGroup = GetSampleMethodGroupName();
            var requiredParameters = method.LogicalParameters.Where(
                p => p != null && !p.IsClientProperty && !string.IsNullOrWhiteSpace(p.Name) && !p.IsConstant).OrderBy(item => !item.IsRequired).ToList();
            var builder = new IndentedStringBuilder("  ");
            var paramInit = InitializeParametersForSampleMethod(requiredParameters, isBrowser);
            builder.AppendLine(paramInit);
            var declaration = new StringBuilder();
            bool first = true;
            foreach (var param in requiredParameters)
            {
                if (!first)
                    declaration.Append(", ");
                declaration.Append(param.Name);
                first = false;
            }
            var clientRef = "client.";
            if (!string.IsNullOrEmpty(methodGroup))
            {
                clientRef = $"client.{methodGroup}.";
            }
            var methodRef = $"{clientRef}{method.Name.ToCamelCase()}({declaration.ToString()}).then((result) => {{";
            builder.AppendLine(methodRef)
                   .Indent()
                   .AppendLine("console.log(\"The result is:\");")
                   .AppendLine("console.log(result);")
                   .Outdent();
            if (isBrowser)
            {
                builder.Append("})");
            }
            else
            {
                builder.AppendLine("});");
            }

            return builder.ToString();
        }

        public string InitializeParametersForSampleMethod(List<Parameter> requiredParameters, bool isBrowser = false)
        {
            var builder = new IndentedStringBuilder("  ");
            foreach (var param in requiredParameters)
            {
                var paramValue = "\"\"";
                paramValue = param.ModelType.InitializeType(param.Name, isBrowser);
                var paramDeclaration = $"const {param.Name}";
                if (param.ModelType is CompositeType && !isBrowser)
                {
                    paramDeclaration += $": {ClientPrefix}Models.{param.ModelTypeName}";
                }
                paramDeclaration += $" = {paramValue};";
                builder.AppendLine(paramDeclaration);
            }
            return builder.ToString();
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
                        builder.ConstObjectVariable("serializer", ClientModelExtensions.CreateSerializerExpression(this));
                        addedFirstValue = true;
                    }
                    method.GenerateOperationSpecDefinition(builder);
                }
            }

            return builder.ToString();
        }

        private sealed class ParameterNameComparer : IEqualityComparer<ParameterTS>
        {
            private ParameterNameComparer() {}
            public static ParameterNameComparer Instance { get; } = new ParameterNameComparer();

            public bool Equals(ParameterTS x, ParameterTS y)
            {
                return x.MapperName == y.MapperName;
            }

            public int GetHashCode(ParameterTS obj)
            {
                return obj.MapperName.GetHashCode();
            }
        }

        public bool HasMappableParameters =>
            MethodTemplateModels
                .SelectMany(m => m.LogicalParameters)
                .Any(p => p.Location != ParameterLocation.Body);

        public string GenerateParameterMappers()
        {
            TSBuilder builder = new TSBuilder();
            IEnumerable<ParameterTS> parameters = Methods
                .SelectMany(m => m.LogicalParameters)
                .Cast<ParameterTS>()
                .Where(p => p.ModelTypeName != "RequestOptionsBase" && p.Location != ParameterLocation.Body)
                .OrderBy(p => p.MapperName)
                .Distinct(ParameterNameComparer.Instance);

            foreach (ParameterTS parameter in parameters)
            {
                string parameterInterfaceName =
                    parameter.Location == ParameterLocation.Path ? "msRest.OperationURLParameter" :
                    parameter.Location == ParameterLocation.Query ? "msRest.OperationQueryParameter" :
                    "msRest.OperationParameter";

                builder.Text("export ");
                builder.ConstObjectVariable(
                    parameter.MapperName,
                    parameterInterfaceName,
                    obj => ClientModelExtensions.ConstructParameterMapper(obj, parameter));
                builder.Line();
            }

            return builder.ToString();
        }

        public string GenerateServiceClientImports()
        {
            TSBuilder builder = new TSBuilder();

            if (MethodTemplateModels.Any() || OptionalParameterTypeForClientConstructor == ServiceClientOptions)
            {
                builder.ImportAllAs("msRest", "ms-rest-js");
            }
            builder.ImportAllAs("Models", "./models");
            builder.ImportAllAs("Mappers", "./models/mappers");

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

        public string GenerateServiceClientExports()
        {
            TSBuilder builder = new TSBuilder();
            builder.Export(exports =>
            {
                exports.Export(Name);
                exports.Export(ContextName);
                exports.ExportAs("Models", $"{ClientPrefix}Models");
                exports.ExportAs("Mappers", $"{ClientPrefix}Mappers");
            });

            if (MethodGroupModels.Any())
            {
                builder.ExportAll("./operations");
            }
            return builder.ToString();
        }
    }
}