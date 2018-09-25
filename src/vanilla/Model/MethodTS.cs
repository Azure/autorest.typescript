// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.DSL;
using Newtonsoft.Json;

namespace AutoRest.TypeScript.Model
{
    public class MethodTS : Method
    {
        public MethodTS()
        {
            // methods that have no group name get the client name as their name
            Group.OnGet += groupName =>
            {
                return groupName.IsNullOrEmpty() ? CodeModel?.Name : groupName;
            };
        }

        /// <summary>
        /// Returns true if method has x-ms-long-running-operation extension.
        /// </summary>
        [JsonIgnore]
        public virtual bool IsLongRunningOperation => false;

        public override void Remove(Parameter item)
        {
            base.Remove(item);
        }

        public enum MethodFlavor
        {
            Callback,
            Promise,
            HttpOperationResponse
        }

        private const string baseResponseName = "msRest.RestResponse";
        private const string baseRawResponseName = "msRest.HttpResponse";

        public string HttpResponseName
        {
            get
            {
                if (ReturnType.Headers != null)
                {
                    return Regex.Replace(ReturnType.Headers.Name, "Headers$", "Response");
                }
                else if (ReturnType.Body != null)
                {
                    return MethodGroup.Name.Value.ToPascalCase() + Name.Value.ToPascalCase() + "Response";
                }
                else
                {
                    return baseResponseName;
                }
            }
        }

        public string HttpResponseReferenceName
        {
            get
            {
                string responseName = HttpResponseName;
                return responseName == baseResponseName
                    ? baseResponseName
                    : "Models." + responseName;
            }
        }

        public bool HasCustomHttpResponseType => HttpResponseName != baseResponseName;

        private CodeModelTS CodeModelTS => (CodeModelTS)CodeModel;

        [JsonIgnore]
        public string RelativePath
        {
            get
            {
                string relativePath = Url;
                if (!string.IsNullOrEmpty(relativePath) && relativePath.StartsWith('/'))
                {
                    relativePath = relativePath.Substring(1);
                }
                return relativePath;
            }
        }

        [JsonIgnore]
        public string Path
        {
            get
            {
                string path = CodeModelTS.BasePath;
                string relativePath = RelativePath;
                if (!string.IsNullOrEmpty(relativePath))
                {
                    if (!string.IsNullOrEmpty(path))
                    {
                        path += '/';
                    }
                    path += relativePath;
                }
                return path;
            }
        }

        [JsonIgnore]
        public CompositeType OptionsParameterModelType => ((CompositeType)OptionsParameterTemplateModel.ModelType);

        [JsonIgnore]
        public Parameter OptionsParameterTemplateModel
        {
            get
            {
                return (Parameters.Where(
                    p => p != null && !p.IsClientProperty &&
                    !string.IsNullOrWhiteSpace(p.Name) && !p.IsConstant && !p.IsRequired &&
                    p.ModelType is CompositeType &&
                    (p.ModelType.Name.EqualsIgnoreCase(Group + Name + "OptionalParams") || p.ModelType.Name.EqualsIgnoreCase("RequestOptionsBase"))).FirstOrDefault(op => op != null));
            }
        }

        /// <summary>
        /// Generate the method parameter declarations for a method
        /// </summary>
        public string MethodParameterDeclaration
        {
            get
            {
                List<string> declarations = new List<string>();
                foreach (var parameter in LocalParametersWithOptions)
                {
                    declarations.Add(parameter.Name);
                }

                var declaration = string.Join(", ", declarations);
                return declaration;
            }
        }

        public string ProvideParameterType(IModelType type, bool inModelsModule = false)
        {
            if (type == null)
            {
                throw new ArgumentNullException("type");
            }

            var builder = new StringBuilder("");

            if (type.IsPrimaryType(KnownPrimaryType.Date) ||
                type.IsPrimaryType(KnownPrimaryType.DateTime) ||
                type.IsPrimaryType(KnownPrimaryType.DateTimeRfc1123) ||
                type.IsPrimaryType(KnownPrimaryType.UnixTime))
                builder.Append("Date | string");
            else if (type.IsSequenceContainingDateKind())
                builder.Append("Array<Date> | Array<string>");
            else if (type.IsDictionaryContainingDateKind())
                builder.Append("{ [key: string]: Date } | { [key: string]: string }");
            else builder.Append(type.TSType(inModelsModule));
            return builder.ToString();
        }

        /// <summary>
        /// Generate the method parameter declarations for a method, using TypeScript declaration syntax
        /// <param name="includeOptions">whether the ServiceClientOptions parameter should be included</param>
        /// <param name="isOptionsOptional">whether the ServiceClientOptions parameter should be optional</param>
        /// </summary>
        public string MethodParameterDeclarationTS(bool includeOptions, bool isOptionsOptional = true)
        {
            StringBuilder declarations = new StringBuilder();

            bool first = true;
            IEnumerable<Parameter> requiredParameters = LocalParameters.Where(p => p.IsRequired);
            foreach (var parameter in requiredParameters)
            {
                if (!first)
                    declarations.Append(", ");

                declarations.Append(parameter.Name);
                declarations.Append(": ");

                // For date/datetime parameters, use a union type to reflect that they can be passed as a JS Date or a string.
                var type = parameter.ModelType;
                declarations.Append(ProvideParameterType(type));

                first = false;
            }

            if (includeOptions)
            {
                if (!first)
                    declarations.Append(", ");
                if (isOptionsOptional)
                {
                    declarations.Append("options?: ");
                }
                else
                {
                    declarations.Append("options: ");
                }
                if (OptionsParameterModelType.Name.EqualsIgnoreCase("RequestOptionsBase"))
                {
                    declarations.Append("msRest.RequestOptionsBase");
                }
                else
                {
                    declarations.AppendFormat("Models.{0}", OptionsParameterModelType.Name);
                }
            }

            return declarations.ToString();
        }

        /// <summary>
        /// Generate the method parameter declarations with callback for a method, using TypeScript method syntax
        /// <param name="includeOptions">whether the ServiceClientOptions parameter should be included</param>
        /// <param name="includeCallback">If true, the method signature will have a callback, otherwise the callback will not be present.</param>
        /// </summary>
        public string MethodParameterDeclarationWithCallbackTS(bool includeOptions, bool includeCallback = true)
        {
            //var parameters = MethodParameterDeclarationTS(includeOptions);
            StringBuilder parameters = new StringBuilder();

            if (!includeCallback)
            {
                //Promise scenario no callback and options is optional
                parameters.Append(MethodParameterDeclarationTS(includeOptions));
            }
            else
            {
                //callback scenario
                if (includeOptions)
                {
                    //with options as required parameter
                    parameters.Append(MethodParameterDeclarationTS(includeOptions, isOptionsOptional: false));
                }
                else
                {
                    //with options as optional parameter
                    parameters.Append(MethodParameterDeclarationTS(includeOptions: false));
                }
            }

            if (includeCallback)
            {
                if (parameters.Length > 0)
                {
                    parameters.Append(", ");
                }
                parameters.Append("callback: msRest.ServiceCallback<" + ReturnTypeTSString + ">");
            }
            return parameters.ToString();
        }

        /// <summary>
        /// Get the parameters that are actually method parameters in the order they appear in the method signature
        /// exclude global parameters and constants.
        /// </summary>
        internal IEnumerable<Parameter> LocalParameters
        {
            get
            {
                return Parameters.Where(
                    p => p != null && !p.IsClientProperty && !string.IsNullOrWhiteSpace(p.Name) && !p.IsConstant)
                    .OrderBy(item => !item.IsRequired);
            }
        }

        /// <summary>
        /// Get the parameters that are actually method parameters in the order they appear in the method signature
        /// exclude global parameters. All the optional parameters are pushed into the second last "options" parameter.
        /// </summary>
        [JsonIgnore]
        public IEnumerable<Parameter> LocalParametersWithOptions
        {
            get
            {
                List<Parameter> requiredParamsWithOptionsList = LocalParameters.Where(p => p.IsRequired).ToList();
                requiredParamsWithOptionsList.Add(OptionsParameterTemplateModel);
                return requiredParamsWithOptionsList;
            }
        }

        /// <summary>
        /// Get the type name for the method's return type for TS
        /// </summary>
        [JsonIgnore]
        public string ReturnTypeTSString
        {
            get
            {
                string result = "void";
                if (ReturnType.Body != null)
                {
                    // We will return the actual response if the return type is stream.
                    // That provides better user experience as customers can use
                    // .text(), .json(), etc. inbuilt methods of the response class
                    // to read the stream.
                    if (ReturnType.Body.IsStream())
                    {
                        result = "void";
                    }
                    else
                    {
                        result = ReturnType.Body.TSType(false);
                    }
                }
                return result;
            }
        }

        public void DeserializeResponse(TSBlock block, IModelType type)
        {
            if (type == null)
            {
                throw new ArgumentNullException(nameof(type));
            }

            const string responseVariable = "parsedResponse";
            const string valueReference = "operationRes.parsedBody";
            block.Line($"let {responseVariable} = {valueReference} as {{ [key: string]: any }};");
            block.If($"{responseVariable} != undefined", ifBlock =>
            {
                ifBlock.Try(tryBlock =>
                {
                    tryBlock.ConstObjectVariable("serializer", CodeModel.CreateSerializerExpression());
                    tryBlock.Text($"{valueReference} = ");
                    tryBlock.FunctionCall("serializer.deserialize", argumentList =>
                    {
                        string expressionToDeserialize = responseVariable;

                        if (type is CompositeType)
                        {
                            argumentList.Text($"Mappers.{type.Name}");
                        }
                        else
                        {
                            bool isXml = CodeModel?.ShouldGenerateXmlSerialization == true;
                            if (isXml && type is SequenceType st)
                            {
                                expressionToDeserialize = $"typeof {responseVariable} === \"object\" ? {responseVariable}[\"{st.ElementType.XmlName}\"] : []";
                            }

                            ClientModelExtensions.ConstructMapper(argumentList, type, responseVariable, null, isPageable: false, expandComposite: false, isXML: isXml);
                        }

                        argumentList.Text(expressionToDeserialize);

                        argumentList.QuotedString(valueReference);
                    });
                })
                .Catch("error", catchBlock =>
                {
                    string errorVariable = this.GetUniqueName("deserializationError");
                    catchBlock.Line($"const {errorVariable} = new msRest.RestError(`Error ${{error}} occurred in deserializing the responseBody - ${{operationRes.bodyAsText}}`);");
                    catchBlock.Line($"{errorVariable}.request = msRest.stripRequest(httpRequest);");
                    catchBlock.Line($"{errorVariable}.response = msRest.stripResponse(operationRes);");
                    catchBlock.Throw(errorVariable);
                });
            });
        }

        /// <summary>
        /// Generate a reference to the ServiceClient
        /// </summary>
        [JsonIgnore]
        public string ClientReference => MethodGroup.IsCodeModelMethodGroup ? "this" : "this.client";

        [JsonIgnore]
        public string ReturnTypeInfo
        {
            get
            {
                string result = null;

                if (ReturnType.Body is EnumType)
                {
                    var returnBodyType = ReturnType.Body as EnumType;
                    if (!returnBodyType.ModelAsString)
                    {
                        string enumValues = "";
                        for (var i = 0; i < returnBodyType.Values.Count; i++)
                        {
                            if (i == returnBodyType.Values.Count - 1)
                            {
                                enumValues += returnBodyType.Values[i].SerializedName;
                            }
                            else
                            {
                                enumValues += returnBodyType.Values[i].SerializedName + ", ";
                            }
                        }
                        result = string.Format(CultureInfo.InvariantCulture,
                            "Possible values for result are - {0}.", enumValues);
                    }
                }
                else if (ReturnType.Body is CompositeType)
                {
                    result = string.Format(CultureInfo.InvariantCulture,
                        "See {{@link {0}}} for more information.", ReturnTypeTSString);
                }

                return result;
            }
        }

        internal ParameterTransformations GetParameterTransformations()
            => new ParameterTransformations(InputParameterTransformation);

        /// <summary>
        /// Generates documentation for every method on the client.
        /// </summary>
        /// <param name="flavor">Describes the flavor of the method (Callback based, promise based,
        /// raw httpOperationResponse based) to be documented.</param>
        /// <returns></returns>
        public string GenerateMethodDocumentation(MethodFlavor flavor)
        {
            TSBuilder builder = new TSBuilder();

            builder.DocumentationComment(comment =>
            {
                comment.WithWordWrap(Settings.Instance?.MaximumCommentColumns ?? Settings.DefaultMaximumCommentColumns, () =>
                {
                    comment.Summary(Summary);
                    comment.Description(Description);

                    foreach (Parameter parameter in LocalParametersWithOptions)
                    {
                        comment.Parameter(parameter.Name, parameter.Documentation, !parameter.IsRequired);
                    }
                });

                if (flavor == MethodFlavor.HttpOperationResponse)
                {
                    comment.Returns("Promise", "A promise is returned");
                    comment.Resolve("HttpOperationResponse", "The deserialized result object.");
                    comment.Reject("Error|ServiceError", "The error object.");
                }
                else
                {
                    if (flavor == MethodFlavor.Callback)
                    {
                        comment.Parameter("callback", "The callback.");
                        comment.Returns("ServiceCallback", "callback(err, result, request, operationRes)");
                    }
                    else if (flavor == MethodFlavor.Promise)
                    {
                        comment.Parameter("optionalCallback", "The optional callback.", true);
                        comment.Returns("ServiceCallback|Promise", "If a callback was passed as the last parameter, then it returns the callback, else returns a Promise.");
                        comment.Line("{Promise} A promise is returned.");
                        comment.Line($"                     @resolve {{{ReturnTypeTSString}}} - The deserialized result object.");
                        comment.Line($"                     @reject {{Error | ServiceError}} - The error object.");
                        comment.Line("{ServiceCallback} optionalCallback(err, result, request, operationRes)");
                    }
                    comment.Line($"                     {{Error|ServiceError}}  err        - The Error object if an error occurred, null otherwise.");
                    comment.Line($"                     {{{ReturnTypeTSString}}} [result]   - The deserialized result object if an error did not occur.");
                    comment.Line($"                     {ReturnTypeInfo}");
                    comment.Line($"                     {{WebResource}} [request]  - The HTTP Request object if an error did not occur.");
                    comment.Line($"                     {{HttpOperationResponse}} [response] - The HTTP Response stream if an error did not occur.");

                }
            });

            return builder.ToString();
        }

        public string BuildResultInitialization(string resultReference)
        {
            if (resultReference == null)
            {
                throw new ArgumentNullException("resultReference");
            }
            var sb = new StringBuilder("");

            if (ReturnType.Body.IsPrimaryType(KnownPrimaryType.Stream))
            {
                sb.AppendFormat("{0}", resultReference);
            }
            else
            {
                sb.AppendFormat("{0}.parsedBody as {1}", resultReference, ReturnTypeTSString);
            }
            return sb.ToString();
        }

        public string GenerateWithHttpOperationResponseMethodComment()
        {
            return GenerateMethodDocumentation(MethodFlavor.HttpOperationResponse);
        }

        public void GenerateOperationArguments(TSObject operationArguments)
        {
            ParameterTransformations transformations = GetParameterTransformations();

            // Remember that Parameters contains the parameters of the REST API method, not the
            // generated method.
            foreach (Parameter parameter in Parameters)
            {
                if (parameter.IsRequired &&
                    !parameter.IsConstant &&
                    !parameter.IsClientProperty &&
                    !operationArguments.ContainsProperty(parameter.Name) &&
                    !transformations.IsCreatedFromTransformation(parameter.Name) &&
                    parameter.Name != "options")
                {
                    operationArguments.TextProperty(parameter.Name, parameter.Name);
                }
            }

            operationArguments.TextProperty("options", "options");
        }

        public void GenerateOperationSpec(TSObject operationSpec)
        {
            operationSpec.QuotedStringProperty("httpMethod", HttpMethod.ToString().ToUpper());
            if (IsAbsoluteUrl)
            {
                operationSpec.QuotedStringProperty("baseUrl", CodeModelTS.SchemeHostAndPort);
            }

            string path = Path;
            if (!string.IsNullOrEmpty(path))
            {
                operationSpec.QuotedStringProperty("path", path);
            }

            Parameter[] logicalParameters = LogicalParameters.ToArray();

            AddParameterRefs(operationSpec, "urlParameters", logicalParameters.Where(p => p.Location == ParameterLocation.Path));
            AddParameterRefs(operationSpec, "queryParameters", logicalParameters.Where(p => p.Location == ParameterLocation.Query));
            AddParameterRefs(operationSpec, "headerParameters", logicalParameters.Where(p => p.Location == ParameterLocation.Header));

            if (Body != null)
            {
                operationSpec.ObjectProperty("requestBody", requestBodyObject =>
                {
                    GenerateRequestParameterPath(requestBodyObject, Body, GetParameterTransformations());
                    requestBodyObject.Property("mapper", requestBodyMapper => ClientModelExtensions.ConstructRequestBodyMapper(requestBodyMapper, Body));
                });
            }
            else
            {
                IEnumerable<Parameter> formDataParameters = logicalParameters.Where(p => p.Location == ParameterLocation.FormData);
                if (formDataParameters.Any())
                {
                    AddParameterRefs(operationSpec, "formDataParameters", formDataParameters);
                    operationSpec.QuotedStringProperty("contentType", RequestContentType);
                }
            }
            if (!string.IsNullOrEmpty(RequestContentType) && RequestContentType != CodeModelTS.RequestContentType)
            {
                operationSpec.QuotedStringProperty("contentType", RequestContentType);
            }

            operationSpec.ObjectProperty("responses", responses =>
            {
                bool isXml = CodeModelTS.ShouldGenerateXmlSerialization;
                foreach (KeyValuePair<HttpStatusCode, Response> statusCodeResponsePair in Responses)
                {
                    HttpStatusCode statusCode = statusCodeResponsePair.Key;
                    Response response = statusCodeResponsePair.Value;

                    responses.ObjectProperty(((int)statusCode).ToString(), responseObject =>
                    {
                        if (response.Body != null)
                        {
                            responseObject.Property("bodyMapper", responseBodyMapper => ClientModelExtensions.ConstructResponseBodyMapper(responseBodyMapper, response, this));
                        }
                        if (response.Headers != null)
                        {
                            responseObject.Property("headersMapper", responseHeadersMapper => responseHeadersMapper.Text($"Mappers.{response.Headers.Name}"));
                        }
                    });
                }

                responses.ObjectProperty("default", defaultResponseObject =>
                {
                    Response defaultResponse = DefaultResponse;
                    if (defaultResponse != null && defaultResponse.Body != null)
                    {
                        defaultResponseObject.Property("bodyMapper", responseBodyMapper => ClientModelExtensions.ConstructResponseBodyMapper(responseBodyMapper, defaultResponse, this));
                    }
                });
            });


            if (CodeModel.ShouldGenerateXmlSerialization)
            {
                operationSpec.BooleanProperty("isXML", true);
            }

            operationSpec.TextProperty("serializer", "serializer");
        }

        private static void AddSkipEncodingProperty(TSObject parameterObject, Parameter parameter)
        {
            if (parameter.SkipUrlEncoding())
            {
                parameterObject.BooleanProperty("skipEncoding", true);
            }
        }

        internal static void GenerateRequestParameter(TSObject parameterObject, ParameterTS requestParameter, ParameterTransformations parameterTransformations)
        {
            GenerateRequestParameterPath(parameterObject, requestParameter, parameterTransformations);
            parameterObject.Property("mapper", mapper => ClientModelExtensions.ConstructMapper(mapper, requestParameter.ModelType, requestParameter.SerializedName, requestParameter, false, false, false));

            ParameterLocation location = requestParameter.Location;
            if (location == ParameterLocation.Path || location == ParameterLocation.Query)
            {
                AddSkipEncodingProperty(parameterObject, requestParameter);
            }
            if (location == ParameterLocation.Query)
            {
                if (requestParameter.CollectionFormat != CollectionFormat.None)
                {
                    parameterObject.TextProperty("collectionFormat", $"msRest.QueryCollectionFormat.{requestParameter.CollectionFormat}");
                }
            }
        }

        private static void AddParameterRefs(TSObject operationSpec, string propertyName, IEnumerable<Parameter> requestParameters)
        {
            if (requestParameters != null && requestParameters.Any())
            {
                operationSpec.ArrayProperty(propertyName, parameterArray =>
                {
                    foreach (ParameterTS requestParameter in requestParameters)
                    {
                        parameterArray.Value(v => v.Text("Parameters." + requestParameter.MapperName));
                    }
                });
            }
        }

        private static void GenerateRequestParameterPath(TSObject parent, Parameter requestParameter, ParameterTransformations parameterTransformations)
        {
            GenerateRequestParameterPath(parent, "parameterPath", requestParameter.Name, !requestParameter.IsClientProperty && !requestParameter.IsRequired, parameterTransformations);
        }

        private static void GenerateRequestParameterPath(TSObject parent, string propertyName, string parameterName, bool parameterInOptions, ParameterTransformations parameterTransformations)
        {
            if (!parameterTransformations.IsCreatedFromTransformation(parameterName))
            {
                if (parameterInOptions || parameterTransformations.InputParameterInOptions(parameterName))
                {
                    parent.QuotedStringArrayProperty(propertyName, new string[] { "options", parameterName });
                }
                else
                {
                    parent.QuotedStringProperty(propertyName, parameterName);
                }
            }
            else if (parameterTransformations.IsUnflattenedVariable(parameterName))
            {
                // Unflattening
                parent.ObjectProperty(propertyName, parameterPathObject =>
                {
                    IDictionary<string, string> unflattenedPropertyMappings = parameterTransformations.GetUnflattenedParameterPropertyMappings(parameterName);
                    foreach (KeyValuePair<string, string> unflattenedPropertyMapping in unflattenedPropertyMappings)
                    {
                        string unflattenedPropertyName = unflattenedPropertyMapping.Key;
                        string inputParameterName = unflattenedPropertyMapping.Value;
                        bool inputParameterInOptions = parameterTransformations.InputParameterInOptions(inputParameterName);
                        GenerateRequestParameterPath(parameterPathObject, unflattenedPropertyName, inputParameterName, inputParameterInOptions, parameterTransformations);
                    }
                });
            }
            else
            {
                // Ungrouping
                string[] inputParameterPath = parameterTransformations.GetUngroupedParameterPath(parameterName);
                string inputParameterPathFirstPart = inputParameterPath[0];
                bool inputParameterInOptions = parameterTransformations.InputParameterInOptions(inputParameterPathFirstPart);
                if (inputParameterPath.Length == 1)
                {
                    GenerateRequestParameterPath(parent, propertyName, inputParameterPath[0], inputParameterInOptions, parameterTransformations);
                }
                else
                {
                    parent.ArrayProperty(propertyName, array =>
                    {
                        if (inputParameterInOptions)
                        {
                            array.QuotedString("options");
                        }
                        foreach (string inputParameterPathPart in inputParameterPath)
                        {
                            array.QuotedString(inputParameterPathPart);
                        }
                    });
                }
            }
        }

        internal sealed class PropertyNameComparer : IEqualityComparer<Property>
        {
            internal static PropertyNameComparer Instance { get; } = new PropertyNameComparer();

            public bool Equals(Property x, Property y)
            {
                return x.Name.Value == y.Name.Value;
            }

            public int GetHashCode(Property obj)
            {
                return obj.Name.Value.GetHashCode();
            }
        }

        public const string rawHttpResponsePropertyName = "_response";
        public const string primitiveHttpBodyPropertyName = "body";

        public void GenerateHttpOperationResponseType(TSIntersectionType type)
        {
            type.NamedType(baseRawResponseName);
            if ((ReturnType.Body != null && !HasStreamResponseType()) || ReturnType.Headers != null)
            {
                type.ObjectType(iface =>
                {
                    if (ReturnType.Headers != null)
                    {
                        iface.DocumentationComment(
                        "The parsed HTTP response headers.");
                        iface.Property("parsedHeaders", ReturnType.Headers.Name);
                    }

                    if (ReturnType.Body != null && !HasStreamResponseType())
                    {
                        iface.DocumentationComment("The response body as text (string format)");
                        iface.Property("bodyAsText", "string");

                        string bodyType = ReturnType.Body?.TSType(inModelsModule: true) ?? "void";
                        iface.DocumentationComment("The response body as parsed JSON or XML");
                        iface.Property("parsedBody", bodyType);
                    }
                });
            }
        }

        public string GenerateResponseType(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();
            builder.ExportIntersectionType(HttpResponseName, type =>
            {
                if (ReturnType.Body is DictionaryTypeTS dictionaryBody)
                {
                    type.ObjectType(dict =>
                    {
                        dict.DocumentationComment("The response body properties.");
                        dict.IndexSignature(dictionaryBody.ValueType.TSType(inModelsModule: true));
                    });
                }
                else if (ReturnType.Body is SequenceTypeTS sequenceBody)
                {
                    type.NamedType($"Array<{sequenceBody.ElementType.TSType(inModelsModule: true)}>");
                }
                else if (ReturnType.Body is CompositeTypeTS compositeBody)
                {
                    type.NamedType(compositeBody.TSType(inModelsModule: true));
                }

                if (ReturnType.Headers != null)
                {
                    type.NamedType(ReturnType.Headers.TSType(inModelsModule: true));
                }

                type.ObjectType(iface =>
                {
                    if (HasStreamResponseType())
                    {
                        iface.DocumentationComment(
                            "BROWSER ONLY",
                            "",
                            "The response body as a browser Blob.",
                            "Always undefined in node.js.");

                        iface.Property("blobBody", "Promise<Blob>", optional: true);

                        iface.DocumentationComment(
                            "NODEJS ONLY",
                            "",
                            "The response body as a node.js Readable stream.",
                            "Always undefined in the browser.");

                        iface.Property("readableStreamBody", "NodeJS.ReadableStream", optional: true);
                    }
                    else if (ReturnType.Body != null && !(ReturnType.Body is CompositeTypeTS || ReturnType.Body is SequenceTypeTS || ReturnType.Body is DictionaryTypeTS))
                    {
                        iface.DocumentationComment("The parsed response body.");
                        iface.Property(primitiveHttpBodyPropertyName, ReturnType.Body.TSType(inModelsModule: true));
                    }

                    iface.DocumentationComment("The underlying HTTP response.");
                    iface.Property(rawHttpResponsePropertyName, GenerateHttpOperationResponseType);
                });
            });
            return builder.ToString();
        }

        public bool HasStreamResponseType()
        {
            return Responses.Values.Any((Response r) => r.Body.IsPrimaryType(KnownPrimaryType.Stream));
        }

        public void GenerateOperationSpecDefinition(TSBuilder builder)
        {
            builder.ConstObjectVariable(GetOperationSpecVariableName(), "msRest.OperationSpec", GenerateOperationSpec);
        }

        protected string GetOperationSpecVariableName()
        {
            return Name.ToCamelCase() + "OperationSpec";
        }

        public static bool IsInOptionsParameter(Parameter parameter)
        {
            return parameter != null && !parameter.IsClientProperty && !string.IsNullOrWhiteSpace(parameter.Name) && !parameter.IsConstant && !parameter.IsRequired;
        }

        public virtual string Generate(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

            string responseName = HttpResponseReferenceName;
            // todo fix doc comment
            builder.Line(GenerateWithHttpOperationResponseMethodComment());
            builder.MethodOverload(Name.ToCamelCase(), $"Promise<{responseName}>", MethodParameterDeclarationTS(false, false));
            builder.MethodOverload(Name.ToCamelCase(), $"Promise<{responseName}>", MethodParameterDeclarationTS(true, false));
            builder.MethodOverload(Name.ToCamelCase(), $"void", MethodParameterDeclarationWithCallbackTS(includeOptions: false));
            builder.MethodOverload(Name.ToCamelCase(), $"void", MethodParameterDeclarationWithCallbackTS(includeOptions: true));
            string parameterDecl = $"{MethodParameterDeclarationTS(true, true)}, callback?: msRest.ServiceCallback<{ReturnTypeTSString}>";
            builder.Method(Name.ToCamelCase(), $"Promise<{responseName}>", parameterDecl, methodBody =>
            {
                methodBody.Return(returnValue =>
                {
                    returnValue.FunctionCall($"{ClientReference}.sendOperationRequest", argumentList =>
                    {
                        argumentList.Object(GenerateOperationArguments);
                        argumentList.Text(GetOperationSpecVariableName());
                        argumentList.Text("callback");
                    });

                    if (HasCustomHttpResponseType)
                    {
                        returnValue.Text($" as Promise<{responseName}>");
                    }
                });
            });

            return builder.ToString();
        }

        public virtual bool IsWrappable()
        {
            return !ReturnType.Body.IsStream();
        }
    }
}