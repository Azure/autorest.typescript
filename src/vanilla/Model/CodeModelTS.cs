// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions;
using AutoRest.TypeScript.DSL;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace AutoRest.TypeScript.Model
{
    public class CodeModelTS : CodeModel
    {
        public const string ClientSideValidationSettingName = "ClientSideValidation";

        private const string ServiceClientOptions = "ServiceClientOptions";

        private const string defaultGitHubRepositoryName = "azure-sdk-for-js";

        private const string defaultGitHubUrl = "https://github.com/Azure/" + defaultGitHubRepositoryName;

        private static readonly string[] propertiesToIgnore = { "generateClientRequestId" };

        private static readonly string[] serviceClientProperties = {
            "baseUri",
            "requestContentType",
            "userAgentInfo",
        };

        public GeneratorSettingsTS Settings { get; set; }

        private string _optionalParameterTypeForClientConstructor;

        [JsonIgnore]
        public new string Name => base.Name.ToPascalCase();

        [JsonIgnore]
        public string ContextName => Name + "Context";

        [JsonIgnore]
        public string ApiVersionPackageName => Settings.PackageName + "-" + Settings.ApiVersion;

        /// <summary>
        /// The value to use in the "name" property of package.json.
        /// </summary>
        [JsonIgnore]
        public string PackageName => Settings.Multiapi && !Settings.MultiapiLatest ? ApiVersionPackageName : Settings.PackageName;

        public string BundleFilename
        {
            get
            {
                string packageName = PackageName ?? "bundle";
                int slashIndex = packageName.IndexOf("/");
                string bundleFilename = packageName.Substring(slashIndex + 1);
                return bundleFilename;
            }
        }

        private static Regex npmScopePattern = new Regex(@"@(\w+)/");
        public string BundleVarName
        {
            get
            {
                string varName = BundleFilename.ToPascalCase();
                string packageName = PackageName;
                if (!string.IsNullOrEmpty(packageName))
                {
                    Match match = npmScopePattern.Match(PackageName);
                    if (match.Success)
                    {
                        string namespaceName = match.Groups[1].Value.ToPascalCase();
                        varName = namespaceName + "." + varName;
                    }
                }
                return varName;
            }
        }

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

        private IEnumerable<string> allModelTypeNames;
        [JsonIgnore]
        public IEnumerable<string> AllModelTypeNames
        {
            get
            {
                if (allModelTypeNames == null)
                {
                    allModelTypeNames = AllModelTypes.Select((CompositeType modelType) => modelType.Name.ToString()).ToHashSet();
                }
                return allModelTypeNames;
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
            MethodTemplateModels.Where(method => method.IsWrappable());

        internal sealed class MethodResponseNameComparer : IEqualityComparer<MethodTS>
        {
            internal static MethodResponseNameComparer Instance { get; } = new MethodResponseNameComparer();

            public bool Equals(MethodTS x, MethodTS y)
            {
                return x.HttpResponseName == y.HttpResponseName;
            }

            public int GetHashCode(MethodTS obj)
            {
                return obj.HttpResponseName.GetHashCode();
            }
        }

        public IEnumerable<MethodTS> MethodsWithCustomResponseType => Methods
            .Cast<MethodTS>()
            .Where(m => m.ReturnType.Headers != null || m.ReturnType.Body != null)
            // Prevents beginFoo and foo methods from having duplicate generated response types
            .Distinct(MethodResponseNameComparer.Instance);

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

        public IEnumerable<CompositeTypeTS> OrderedMapperTemplateModels =>
            OrderedModelTemplateModels.Where(m =>
                m.BaseModelType?.Name != "RequestOptionsBase" &&
                m.BaseModelType?.Name != "ServiceClientOptions" &&
                m.BaseModelType?.Name != "AzureServiceClientOptions");

        public string HomePageUrl
        {
            get
            {
                string result = defaultGitHubUrl;
                if (!string.IsNullOrEmpty(Settings.OutputFolder))
                {
                    string relativeOutputPath = Settings.RelativeOutputPath;
                    if (!String.IsNullOrEmpty(relativeOutputPath))
                    {
                        result += "/tree/master/sdk" + relativeOutputPath;
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

        public bool AutoPublish
        {
            get
            {
                if (Settings.AutoPublish.HasValue)
                {
                    return Settings.AutoPublish.Value;
                }
                else
                {
                    bool isGeneratedForAzureSdkForJs = Settings.OutputFolder.Contains(defaultGitHubRepositoryName);
                    return isGeneratedForAzureSdkForJs;
                }
            }
        }

        [JsonIgnore]
        public bool HasTests => Settings.Test != null;

        [JsonIgnore]
        internal string TestCommand => Settings.Test.ToLowerInvariant() == "true" ? "mocha" : Settings.Test;

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
                    if (polymorphicType.BaseModelType != null && string.IsNullOrWhiteSpace(polymorphicType.PolymorphicDiscriminator))
                    {
                        while (polymorphicType.BaseModelType != null && string.IsNullOrWhiteSpace(polymorphicType.PolymorphicDiscriminator))
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

        protected IEnumerable<Property> SortedProperties
        {
            get
            {
                return Properties.OrderBy(prop => prop.ModelType.IsPrimaryType(KnownPrimaryType.Credentials) ? 0 : 1);
            }
        }

        public string RequiredConstructorParameters
        {
            get
            {
                var requireParams = new List<string>();
                SortedProperties.Where(p => p.IsRequired && !p.IsConstant && string.IsNullOrEmpty(p.DefaultValue))
                    .ForEach(p => requireParams.Add(p.Name.ToCamelCase()));

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
                foreach (var p in SortedProperties)
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

                return requiredParams.ToString();
            }
        }

        public virtual string GenerateConstructor(string superArgumentList, Action<TSBlock> guardChecks = null, Action<TSBlock> implementation = null)
        {
            TSBuilder builder = new TSBuilder();
            var clientOptionType = OptionalParameterTypeForClientConstructor;
            if (OptionalParameterTypeForClientConstructor == GetServiceClientOptionsName())
            {
                clientOptionType =
                    OptionalParameterTypeForClientConstructor.StartsWith("Azure")
                    ? "coreArm." + GetServiceClientOptionsName()
                    : "coreHttp." + GetServiceClientOptionsName();
            }

            string parameterList = (!string.IsNullOrEmpty(RequiredConstructorParametersTS) ? RequiredConstructorParametersTS + ", " : "") + "options?: " + clientOptionType;

            builder.Constructor(parameterList, superArgumentList, guardChecks, implementation);

            return builder.ToString();
        }

        public virtual string GenerateClientConstructor()
        {
            string superParameterList = (!string.IsNullOrEmpty(RequiredConstructorParameters) ? RequiredConstructorParameters + ", " : "") + "options";
            return this.GenerateConstructor(superParameterList, null, GenerateOperationGroupInitialization);
        }

        public virtual string GenerateContextConstructor(string emptyLine)
        {
            Action<TSBlock> guardCheck = block =>
            {
                foreach (var param in RequiredParameters)
                {
                    block.If($"{param.Name} == undefined", then =>
                    {
                        then.Throw($"new Error(\"\'{param.Name}\' cannot be null.\")");
                    });
                }

                if (RequiredParameters.Any())
                {
                    block.Line(emptyLine);
                }

                block.If("!options", then =>
                {
                    then.Assignment("options", "{}");
                });

                block.Line(emptyLine);
                block.If("!options.userAgent", then =>
                {
                    then.ConstObjectVariable("defaultUserAgent", "coreHttp.getDefaultUserAgentValue()");
                    then.Assignment("options.userAgent", "`${packageName}/${packageVersion} ${defaultUserAgent}`");
                });

                block.Line(GenerateCustomServiceClientOptions(emptyLine));
                block.Line(emptyLine);
            };

            string credentialsParameter = RequiredParameters.Any(p => p.ModelType.IsPrimaryType(KnownPrimaryType.Credentials)) ? "credentials" : "undefined";
            string superParameters = credentialsParameter + ", options";

            Action<TSBlock> implementation = block =>
            {
                block.Line(emptyLine);
                foreach (var property in Properties.Where(p => p.DefaultValue != null))
                {
                    block.ThisAssignment(property.Name, property.DefaultValue);
                }

                block.Line(GenerateBaseUri());

                if (!String.IsNullOrEmpty(RequestContentType))
                {
                    block.ThisAssignment("requestContentType", $"\"{RequestContentType}\"");
                }

                foreach (var param in RequiredParameters)
                {
                    block.ThisAssignment(param.Name, param.Name);
                }

                if (OptionalParameters.Where(p => p.Name != "generatedClientRequestId").Any())
                {
                    foreach (var property in OptionalParameters.Where(p => p.Name != "generatedClientRequestId"))
                    {
                        block.If($"options.{property.Name} !== null && options.{property.Name} !== undefined", then =>
                        {
                            block.ThisAssignment(property.Name, $"options.{property.Name}");
                        });
                    }
                }
            };

            return this.GenerateConstructor(superParameters, guardCheck, implementation);
        }

        protected virtual string GetServiceClientOptionsName()
        {
            return ServiceClientOptions;
        }

        private void GenerateOperationGroupInitialization(TSBlock block)
        {
            foreach (var methodGroup in MethodGroupModels)
            {
                block.ThisAssignment(methodGroup.NameForProperty, $"new operations.{methodGroup.TypeName}(this)");
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

        public virtual IEnumerable<Property> RequiredParameters
        {
            get
            {
                return Properties.Where(p => p.IsRequired && !p.IsConstant && string.IsNullOrEmpty(p.DefaultValue));
            }
        }

        public virtual IEnumerable<Property> OptionalParameters
        {
            get
            {
                return Properties.Where(p => (!p.IsRequired || p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue)) && !p.IsConstant);
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

        public string ConstructRuntimeImportForModelIndex()
        {
            TSBuilder builder = new TSBuilder();
            ConstructRuntimeImportForModelIndex(builder);
            return builder.ToString();
        }

        public virtual void ConstructRuntimeImportForModelIndex(TSBuilder builder)
        {
            if (OptionalParameterTypeForClientConstructor != ServiceClientOptions)
            {
                builder.Import(new string[] { ServiceClientOptions }, "@azure/core-http");
            }
        }

        public virtual void PackageDependencies(JSONObject dependencies)
        {
            dependencies.StringProperty("@azure/core-http", "^1.0.0-preview.1");
            dependencies.StringProperty("tslib", "^1.9.3");
            if (Settings.MultiapiLatest)
            {
                dependencies.StringProperty(Settings.AliasedNpmPackageName, Settings.AliasedNpmVersion ?? "^1.0.0");
            }
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

        public void GenerateSampleMethod(JSBuilder builder, bool isBrowser = false)
        {
            Method method = GetSampleMethod();
            string methodGroup = GetSampleMethodGroupName();
            List<Parameter> requiredParameters = method.LogicalParameters.Where(
                p => p != null && !p.IsClientProperty && !string.IsNullOrWhiteSpace(p.Name) && !p.IsConstant).OrderBy(item => !item.IsRequired).ToList();

            foreach (Parameter param in requiredParameters)
            {
                string parameterName = param.Name;
                if (param.ModelType is CompositeType && !isBrowser)
                {
                    parameterName += $": {ClientPrefix}Models.{param.ModelTypeName}";
                }

                string parameterValue = param.ModelType.InitializeType(param.Name, isBrowser);

                builder.ConstVariable(parameterName, parameterValue);
            }

            builder.FunctionCall($"client.{(string.IsNullOrEmpty(methodGroup) ? "" : $"{methodGroup}.")}{method.Name.ToCamelCase()}", argumentList =>
            {
                foreach (Parameter parameter in requiredParameters)
                {
                    argumentList.Text(parameter.Name);
                }
            });
            builder.Block(".then((result) =>", false, block =>
            {
                block.Line("console.log(\"The result is:\");");
                block.Line("console.log(result);");
            });
            builder.Text(")");
            if (!isBrowser)
            {
                builder.Line(";");
            }
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
            private ParameterNameComparer() { }
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

        public bool HasMappableParameters => CodeGeneratorTS.HasMappableParameters(MethodTemplateModels);

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
                    parameter.Location == ParameterLocation.Path ? "coreHttp.OperationURLParameter" :
                    parameter.Location == ParameterLocation.Query ? "coreHttp.OperationQueryParameter" :
                    "coreHttp.OperationParameter";

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

            if (MethodTemplateModels.Any() || OptionalParameterTypeForClientConstructor == ServiceClientOptions || RequiredConstructorParametersTS.Contains("coreHttp."))
            {
                builder.ImportAllAs("coreHttp", "@azure/core-http");
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

            if (CodeGeneratorTS.ShouldWriteMethodGroupFiles(this))
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
                if (CodeGeneratorTS.ShouldWriteModelsFiles(this))
                {
                    exports.ExportAs("Models", $"{ClientPrefix}Models");
                }
                if (HasMappers())
                {
                    exports.ExportAs("Mappers", $"{ClientPrefix}Mappers");
                }
            });

            if (MethodGroupModels.Any())
            {
                builder.ExportAll("./operations");
            }
            return builder.ToString();
        }

        public string GenerateConstructorComment(string className)
        {
            TSBuilder builder = new TSBuilder();
            builder.DocumentationComment(comment =>
            {
                comment.Description($"Initializes a new instance of the {className} class.");

                IEnumerable<Property> requiredParameters = Properties.Where(p => p.IsRequired && !p.IsConstant && string.IsNullOrEmpty(p.DefaultValue));
                foreach (Property requiredParameter in requiredParameters)
                {
                    comment.Parameter(requiredParameter.Name, requiredParameter.Documentation);
                }

                comment.Parameter("options", "The parameter options", isOptional: true);
            });
            return builder.ToString();
        }

        public string GenerateResponseTypes()
        {
            TSBuilder builder = new TSBuilder();
            foreach (MethodTS method in MethodsWithCustomResponseType)
            {
                builder.Line();
                method.GenerateResponseType(builder);
            }
            return builder.ToString();
        }

        public virtual bool HasMappers()
        {
            return OrderedMapperTemplateModels.Any();
        }

        public virtual string GenerateMapperIndex()
        {
            TSBuilder builder = new TSBuilder();
            builder.Comment(AutoRest.Core.Settings.Instance.Header);
            builder.Line();

            CompositeTypeTS[] orderedMapperTemplateModels = OrderedMapperTemplateModels.ToArray();

            ImportMsRestForMappers(builder, orderedMapperTemplateModels);

            builder.Line();

            ExportOrderedMapperModels(builder, orderedMapperTemplateModels);

            ExportPolymorphicDictionary(builder);

            return builder.ToString();
        }

        public void ImportMsRestForMappers(TSBuilder builder, IEnumerable<CompositeTypeTS> orderedMapperModels)
        {
            if (orderedMapperModels.Any())
            {
                builder.ImportAllAs("coreHttp", "@azure/core-http");
            }
        }

        public void ExportOrderedMapperModels(TSBuilder builder, IEnumerable<CompositeTypeTS> orderedMapperModels)
        {
            foreach (CompositeTypeTS mapperModel in OrderedMapperTemplateModels)
            {
                builder.Line();

                mapperModel.ConstructModelMapper(builder);
            }
        }

        public void ExportPolymorphicDictionary(TSBuilder builder)
        {
            string polymorphicDictionary = PolymorphicDictionary;
            if (!string.IsNullOrEmpty(polymorphicDictionary))
            {
                builder.Line();
                builder.Line($"export const discriminators = {{");
                builder.Indent(() =>
                {
                    builder.Line(polymorphicDictionary);
                });
                builder.Line($"}};");
            }
        }

        protected void GenerateNodeSampleMsRestJsImport(TSBuilder builder)
        {
            builder.ImportAllAs("coreHttp", "@azure/core-http");
        }

        protected void GenerateNodeSampleMsRestNodeAuthImport(TSBuilder builder)
        {
            builder.ImportAllAs("msRestNodeAuth", "@azure/ms-rest-nodeauth");
        }

        protected void GenerateNodeSampleClientImport(TSBuilder builder)
        {
            builder.Import(new[] { Name, $"{ClientPrefix}Models", $"{ClientPrefix}Mappers" }, PackageName);
        }

        protected virtual void GenerateNodeSampleImports(TSBuilder builder)
        {
            GenerateNodeSampleMsRestJsImport(builder);
            GenerateNodeSampleMsRestNodeAuthImport(builder);
            GenerateNodeSampleClientImport(builder);
        }

        public string GenerateReadmeMdNodeSampleCode()
        {
            TSBuilder builder = new TSBuilder();

            GenerateReadmeMdNodeSampleCode(builder);

            return builder.ToString();
        }

        public void GenerateReadmeMdNodeSampleCode(TSBuilder builder)
        {
            GenerateNodeSampleImports(builder);

            builder.ConstVariable("subscriptionId", "process.env[\"AZURE_SUBSCRIPTION_ID\"]");
            builder.Line();
            builder.Line($"msRestNodeAuth.interactiveLogin().then((creds) => {{");
            builder.Indent(() =>
            {
                builder.ConstVariable("client", $"new {Name}(creds, subscriptionId)");
                GenerateSampleMethod(builder, false);
            });
            builder.Line($"}}).catch((err) => {{");
            builder.Indent(() =>
            {
                builder.Line("console.error(err);");
            });
            builder.Line($"}});");
        }

        public string GenerateReadmeMdBrowserSampleCode(string indentation = "")
        {
            JSBuilder builder = new JSBuilder();
            builder.AddToPrefix(indentation);

            GenerateReadmeMdBrowserSampleCode(builder);

            return builder.ToString();
        }

        public void GenerateReadmeMdBrowserSampleCode(JSBuilder builder)
        {
            builder.ConstQuotedStringVariable("subscriptionId", "<Subscription_Id>");
            builder.Text("const authManager = new msAuth.AuthManager(");
            builder.Object(tsObject =>
            {
                tsObject.QuotedStringProperty("clientId", "<client id for your Azure AD app>");
                tsObject.QuotedStringProperty("tenant", "<optional tenant for your organization>");
            });
            builder.Line(");");

            builder.Line($"authManager.finalizeLogin().then((res) => {{");
            builder.Indent(() =>
            {
                builder.If("!res.isLoggedIn", ifBlock =>
                {
                    ifBlock.LineComment("may cause redirects");
                    ifBlock.Line("authManager.login();");
                });

                builder.ConstVariable("client", $"new {BundleVarName}.{Name}(res.creds, subscriptionId)");
                GenerateSampleMethod(builder, true);
                builder.Line($".catch((err) => {{");
                builder.Indent(() =>
                {
                    builder.Line("console.log(\"An error occurred:\");");
                    builder.Line("console.error(err);");
                });
                builder.Line($"}});");
            });
            builder.Line($"}});");
        }

        public string GenerateClassProperties(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

            foreach (Property property in Properties.Where(property => ShouldGenerateProperty(property.Name)))
            {
                builder.Property(property.Name, property.ModelType.TSType(false), property.IsRequired);
            }

            return builder.ToString();
        }

        protected virtual bool ShouldGenerateProperty(string propertyName)
        {
            string camelCaseProperty = propertyName.ToCamelCase();
            return !propertiesToIgnore.Contains(camelCaseProperty) && !serviceClientProperties.Contains(camelCaseProperty);
        }

        public string GenerateReadmeMd()
        {
            MarkdownBuilder builder = new MarkdownBuilder();
            builder.IncreaseCurrentHeaderLevel();

            string mainSectionHeader = IsAzure
                ? $"Azure {Name} SDK for JavaScript"
                : $"An isomorphic javascript sdk for - {Name}";

            builder.Section(mainSectionHeader, () =>
            {
                GeneratePackageContains(builder);
                builder.Line();
                GenerateCurrentlySupportedEnvironments(builder);
                builder.Line();
                GenerateHowToInstall(builder);
                builder.Line();
                if (Settings.MultiapiLatest)
                {
                    GenerateAvailableAPIVersions(builder);
                    builder.Line();
                }
                builder.Section("How to use", () =>
                {
                    GenerateHowToUseInNodeJs(builder);
                    builder.Line();
                    GenerateHowToUseInBrowser(builder);
                });
            });
            builder.Line();
            GenerateRelatedProjects(builder);
            builder.Line();
            GenerateImpressionPixel(builder);

            return builder.ToString();
        }

        private void GeneratePackageContains(MarkdownBuilder builder)
        {
            if (Settings.MultiapiLatest)
            {
                builder.Line($"This package contains the **latest API version ({Settings.ApiVersions[0]})** of {Name}.");
            }
            else if (Settings.Multiapi)
            {
                builder.Line($"This package contains **API version {Settings.ApiVersion}** of {Name}.");
                builder.Line();
                builder.Line($"For other API versions, see https://npmjs.com/{Settings.PackageName}.");
            }
            else
            {
                builder.Line($"This package contains an isomorphic SDK for {Name}.");
            }
        }

        private void GenerateCurrentlySupportedEnvironments(MarkdownBuilder builder)
        {
            builder.Section("Currently supported environments", () =>
            {
                builder.List(new[]
                {
                    "Node.js version 6.x.x or higher",
                    "Browser JavaScript"
                });
            });
        }

        private void GenerateHowToInstall(MarkdownBuilder builder)
        {
            builder.Section("How to Install", () =>
            {
                builder.Console($"npm install {PackageName}");
            });
        }

        private void GenerateAvailableAPIVersions(MarkdownBuilder builder)
        {
            builder.Section("Available API versions", () =>
            {
                builder.Line("| API version | NPM package | Latest |");
                builder.Line("| - | - | - |");
                bool first = true;
                foreach (string apiVersion in Settings.ApiVersions)
                {
                    builder.Line($"| {apiVersion} | https://npmjs.com/{Settings.PackageName}-{apiVersion} | {(first ? "✔️" : "")} |");
                    first = false;
                }
            });
        }

        private void GenerateHowToUseInNodeJs(MarkdownBuilder builder)
        {
            builder.Section($"nodejs - Authentication, client creation and {GetSampleMethod()?.Name} {GetSampleMethodGroupName()} as an example written in TypeScript.", () =>
            {
                builder.Section("Install @azure/ms-rest-nodeauth", () =>
                {
                    builder.Console("npm install @azure/ms-rest-nodeauth");
                });
                builder.Line();
                builder.Section("Sample code", () =>
                {
                    builder.TypeScript(tsBuilder => GenerateReadmeMdNodeSampleCode(tsBuilder));
                });
            });
        }

        private void GenerateHowToUseInBrowser(MarkdownBuilder builder)
        {
            builder.Section($"browser - Authentication, client creation and {GetSampleMethod().Name} {GetSampleMethodGroupName()} as an example written in JavaScript.", () =>
            {
                builder.Section("Install @azure/ms-rest-browserauth", () =>
                {
                    builder.Console("npm install @azure/ms-rest-browserauth");
                });
                builder.Line();
                builder.Section("Sample code", () =>
                {
                    builder.Line("See https://github.com/Azure/ms-rest-browserauth to learn how to authenticate to Azure in the browser.");
                    builder.Line();
                    builder.List("index.html");
                    builder.HTML(htmlBuilder =>
                    {
                        htmlBuilder.DOCTYPE();
                        htmlBuilder.Html(html =>
                        {
                            html.Head(head =>
                            {
                                head.Title($"{PackageName} sample");
                                head.Script("node_modules/@azure/core-http/dist/coreHttp.browser.js");
                                if (IsAzure)
                                {
                                    head.Script("node_modules/@azure/core-arm/dist/coreArm.js");
                                }
                                head.Script("node_modules/@azure/ms-rest-browserauth/dist/msAuth.js");
                                head.Script($"node_modules/{PackageName}/dist/{BundleFilename}.js");
                                head.Script(jsBuilder =>
                                {
                                    GenerateReadmeMdBrowserSampleCode(jsBuilder);
                                });
                            });
                            html.Body();
                        });
                    });
                });
            });
        }

        private void GenerateRelatedProjects(MarkdownBuilder builder)
        {
            builder.Section("Related projects", () =>
            {
                builder.List("[Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)");
            });
        }

        private void GenerateImpressionPixel(MarkdownBuilder builder)
        {
            builder.Line($"![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js/sdk{Settings.RelativeOutputPath}/README.png)");
        }

        public string GenerateRollupConfig()
        {
            JSBuilder builder = new JSBuilder();

            builder.ImportFrom("rollup", "rollup");
            builder.ImportFrom("nodeResolve", "rollup-plugin-node-resolve");
            builder.ImportFrom("sourcemaps", "rollup-plugin-sourcemaps");
            builder.Line();
            builder.DocumentationComment(comment =>
            {
                comment.Type("rollup.RollupFileOptions");
            });
            builder.ConstObjectVariable("config", config =>
            {
                string inputFilePath = $"./esm/{(Settings.MultiapiLatest ? "index" : Name.ToCamelCase())}.js";
                config.QuotedStringProperty($"input", inputFilePath);
                config.QuotedStringArrayProperty("external", new[] { "@azure/core-http", "@azure/core-arm" });
                config.ObjectProperty("output", output =>
                {
                    output.QuotedStringProperty("file", $"./dist/{BundleFilename}.js");
                    output.QuotedStringProperty("format", "umd");
                    output.QuotedStringProperty("name", BundleVarName);
                    output.BooleanProperty("sourcemap", true);
                    output.ObjectProperty("globals", globals =>
                    {
                        globals.QuotedStringProperty("@azure/core-http", "coreHttp");
                        globals.QuotedStringProperty("@azure/core-arm", "coreArm");
                    });

                    JSBuilder banner = new JSBuilder();
                    banner.Comment(AutoRest.Core.Settings.Instance.Header);
                    output.QuotedStringProperty("banner", banner.ToString());
                });
                config.ArrayProperty("plugins", plugins =>
                {
                    plugins.Text("nodeResolve({ module: true })");
                    plugins.Text("sourcemaps()");
                });
            });
            builder.Line();
            builder.ExportDefault("config");

            return builder.ToString();
        }

        public string GeneratePackageJson()
        {
            JSONBuilder builder = new JSONBuilder();

            string bundleFileName = BundleFilename;

            builder.Object(packageJson =>
            {
                packageJson.StringProperty("name", PackageName);
                packageJson.StringProperty("author", "Microsoft Corporation");
                packageJson.StringProperty("description", $"{Name.ToPascalCase()} Library with typescript type definitions for node.js and browser.");
                packageJson.StringProperty("version", Settings.PackageVersion);
                packageJson.ObjectProperty("dependencies", PackageDependencies);
                packageJson.StringArrayProperty("keywords", new[]
                {
                    "node",
                    "azure",
                    "typescript",
                    "browser",
                    "isomorphic"
                });
                packageJson.StringProperty("license", "MIT");
                packageJson.StringProperty("main", $"./dist/{bundleFileName}.js");
                string moduleName = Settings.MultiapiLatest ? "index" : Name.ToCamelCase();
                packageJson.StringProperty("module", $"./esm/{moduleName}.js");
                packageJson.StringProperty("types", $"./esm/{moduleName}.d.ts");
                packageJson.ObjectProperty("devDependencies", devDependencies =>
                {
                    devDependencies.StringProperty("typescript", "^3.1.1");
                    devDependencies.StringProperty("rollup", "^0.66.2");
                    devDependencies.StringProperty("rollup-plugin-node-resolve", "^3.4.0");
                    devDependencies.StringProperty("rollup-plugin-sourcemaps", "^0.4.2");
                    devDependencies.StringProperty("uglify-js", "^3.4.9");
                    if (!String.IsNullOrEmpty(Settings.Test))
                    {
                        devDependencies.StringProperty("mocha", "^6.1.4");

                        if (!String.IsNullOrEmpty(Settings.TestDependencies))
                        {
                            string[] testDependencies = Settings.TestDependencies.Split(',', ';').Select(dep => dep.Trim()).ToArray();
                            foreach (string testDependency in testDependencies)
                            {
                                string[] dependencyInfo = testDependency.Split('@', StringSplitOptions.RemoveEmptyEntries);

                                string testDependencyName = testDependency.StartsWith('@') ? $"@{dependencyInfo[0]}" : dependencyInfo[0];
                                string testDependencyVersion = dependencyInfo[1];

                                devDependencies.StringProperty(testDependencyName, $"^{testDependencyVersion}");
                            }
                        }
                    }
                });
                packageJson.StringProperty("homepage", HomePageUrl);
                packageJson.ObjectProperty("repository", repository =>
                {
                    repository.StringProperty("type", "git");
                    repository.StringProperty("url", RepositoryUrl);
                });
                packageJson.ObjectProperty("bugs", bugs =>
                {
                    bugs.StringProperty("url", BugsUrl);
                });
                packageJson.StringArrayProperty("files", new[]
                {
                    "dist/**/*.js",
                    "dist/**/*.js.map",
                    "dist/**/*.d.ts",
                    "dist/**/*.d.ts.map",
                    "esm/**/*.js",
                    "esm/**/*.js.map",
                    "esm/**/*.d.ts",
                    "esm/**/*.d.ts.map",
                    "src/**/*.ts",
                    "README.md",
                    "rollup.config.js",
                    "tsconfig.json"
                });
                packageJson.ObjectProperty("scripts", scripts =>
                {
                    scripts.StringProperty("build", "tsc && rollup -c rollup.config.js && npm run minify");
                    scripts.StringProperty("minify", $"\"uglifyjs -c -m --comments --source-map \\\"content='./dist/{bundleFileName}.js.map'\\\" -o ./dist/{bundleFileName}.min.js ./dist/{bundleFileName}.js\"");

                    string prepackCommand = "npm install && npm run build";
                    if (HasTests)
                    {
                        prepackCommand += " && npm run test";
                    }

                    scripts.StringProperty("prepack", prepackCommand);

                    if (HasTests)
                    {
                        scripts.StringProperty("test", TestCommand);
                    }
                });
                packageJson.BooleanProperty("sideEffects", false);

                if (AutoPublish)
                {
                    packageJson.BooleanProperty("autoPublish", true);
                }
            });

            return builder.ToString();
        }

        public virtual string GenerateModelIndex()
        {
            TSBuilder builder = new TSBuilder();

            builder.Comment(AutoRest.Core.Settings.Instance.Header);
            builder.Line();
            builder.Line(ConstructRuntimeImportForModelIndex());
            if (ContainsDurationPropertyInModels() || IsAnyModelInheritingFromRequestOptionsBase() || MethodsWithCustomResponseType.Any())
            {
                builder.ImportAllAs("coreHttp", "@azure/core-http");
            }
            foreach (CompositeTypeTS model in OrderedModelTemplateModels)
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

        public virtual string GenerateCustomServiceClientOptions(string emptyLine)
        {
            if (Settings.CustomServiceClientOptions == null || !Settings.CustomServiceClientOptions.Any())
            {
                return String.Empty;
            }

            TSBuilder builder = new TSBuilder();
            builder.Line(emptyLine);
            builder.ObjectAssignment("options", options =>
            {
                options.Spread("options");
                foreach (string optionSettings in Settings.CustomServiceClientOptions)
                {
                    string[] keyValueArray = optionSettings.Split('=');
                    string propertyName = $"\"{keyValueArray[0]}\"";
                    string propertyValue = keyValueArray[1].Replace("'", "\"");
                    options.TextProperty(propertyName, propertyValue);
                }
            });
            return builder.ToString();
        }

        public virtual string GenerateBaseUri()
        {
            TSBuilder builder = new TSBuilder();
            string baseUrlValue = !this.IsCustomBaseUri
                ? baseUrlValue = $"options.baseUri || this.baseUri || \"{BaseUrl}\""
                : baseUrlValue = $"\"{BaseUrl}\"";

            builder.ThisAssignment("baseUri", baseUrlValue);
            return builder.ToString();
        }
    }
}
