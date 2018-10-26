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
        private const string defaultGitHubUrl = "https://github.com/azure/" + defaultGitHubRepositoryName;

        private static readonly string[] propertiesToIgnore = { "generateClientRequestId" };

        private static readonly string[] serviceClientProperties = {
            "baseUri",
            "requestContentType",
            "userAgentInfo",
        };

        public GeneratorSettingsTS Settings { get; set; }

        private string _optionalParameterTypeForClientConstructor;

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
                    string outputFolder = Settings.OutputFolder.Replace('\\', '/');
                    string searchStringSuffix = $"/packages/";
                    string outputFolderSearchString = "/" + defaultGitHubRepositoryName + searchStringSuffix;
                    int searchStringIndex = outputFolder.IndexOf(outputFolderSearchString, StringComparison.OrdinalIgnoreCase);
                    if (0 <= searchStringIndex)
                    {
                        result += "/tree/master" + searchStringSuffix + outputFolder.Substring(searchStringIndex + outputFolderSearchString.Length);
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
            string deps = "\"ms-rest-js\": \"^1.0.455\",\n" + "\"tslib\": \"^1.9.3\"";
            if (Settings.MultiapiLatest)
            {
                string version = Settings.AliasedNpmVersion ?? "^1.0.0";
                deps += ",\n" + $"\"{Settings.AliasedNpmPackageName}\": \"{version}\"";
            }
            return deps;
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

            if (MethodTemplateModels.Any() || OptionalParameterTypeForClientConstructor == ServiceClientOptions || RequiredConstructorParametersTS.Contains("msRest."))
            {
                builder.ImportAllAs("msRest", "ms-rest-js");
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

        public string GenerateResponseTypes(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();
            foreach (MethodTS method in MethodsWithCustomResponseType)
            {
                builder.Line(emptyLine);
                method.GenerateResponseType(builder);
            }
            return builder.ToString();
        }

        public virtual bool HasMappers()
        {
            return OrderedMapperTemplateModels.Any();
        }

        public virtual string GenerateMapperIndex(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();
            CompositeTypeTS[] orderedMapperTemplateModels = OrderedMapperTemplateModels.ToArray();

            ImportMsRestForMappers(builder, orderedMapperTemplateModels);

            builder.Line(emptyLine);

            ExportOrderedMapperModels(builder, orderedMapperTemplateModels, emptyLine);

            ExportPolymorphicDictionary(builder, emptyLine);

            return builder.ToString();
        }

        public void ImportMsRestForMappers(TSBuilder builder, IEnumerable<CompositeTypeTS> orderedMapperModels)
        {
            if (orderedMapperModels.Any())
            {
                builder.ImportAllAs("msRest", "ms-rest-js");
            }
        }

        public void ExportOrderedMapperModels(TSBuilder builder, IEnumerable<CompositeTypeTS> orderedMapperModels, string emptyLine)
        {
            foreach (CompositeTypeTS mapperModel in OrderedMapperTemplateModels)
            {
                builder.Line(emptyLine);

                mapperModel.ConstructModelMapper(builder);
            }
        }

        public void ExportPolymorphicDictionary(TSBuilder builder, string emptyLine)
        {
            string polymorphicDictionary = PolymorphicDictionary;
            if (!string.IsNullOrEmpty(polymorphicDictionary))
            {
                builder.Line(emptyLine);
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
            builder.ImportAllAs("msRest", "ms-rest-js");
        }

        protected void GenerateNodeSampleMsRestNodeAuthImport(TSBuilder builder)
        {
            builder.ImportAllAs("msRestNodeAuth", "ms-rest-nodeauth");
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

        public string GenerateReadmeMdNodeSampleCode(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

            GenerateNodeSampleImports(builder);

            builder.ConstVariable("subscriptionId", "process.env[\"AZURE_SUBSCRIPTION_ID\"]");
            builder.Line(emptyLine);
            builder.Line($"msRestNodeAuth.interactiveLogin().then((creds) => {{");
            builder.Indent(() =>
            {
                builder.ConstVariable("client", $"new {Name}(creds, subscriptionId)");
                builder.Line(GenerateSampleMethod(false));
            });
            builder.Line($"}}).catch((err) => {{");
            builder.Indent(() =>
            {
                builder.Line("console.error(err);");
            });
            builder.Line($"}});");

            return builder.ToString();
        }

        public string GenerateReadmeMdBrowserSampleCode(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

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
                builder.Line($"{GenerateSampleMethod(true)}.catch((err) => {{");
                builder.Indent(() =>
                {
                    builder.Line("console.log(\"An error occurred:\");");
                    builder.Line("console.error(err);");
                });
                builder.Line($"}});");
            });
            builder.Line($"}});");

            return builder.ToString();
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
            return !propertiesToIgnore.Contains(propertyName) && !serviceClientProperties.Contains(propertyName);
        }
    }
}