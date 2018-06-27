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

        public string HttpOperationResponseName
        {
            get
            {
                if (ReturnType.Headers == null)
                {
                    return $"msRest.HttpOperationResponse<{ReturnTypeTSString}>";
                }
                else
                {
                    return $"Models.{Regex.Replace(ReturnType.Headers.Name, "Headers$", "Response")}";
                }
            }
        }

        public override Parameter Add(Parameter item)
        {
            var parameter = base.Add(item) as ParameterTS;
            return parameter;
        }

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
        public IEnumerable<ParameterTS> ParameterTemplateModels => Parameters.Cast<ParameterTS>();

        [JsonIgnore]
        public ParameterTS OptionsParameterTemplateModel
        {
            get
            {
                return (Parameters.Where(
                    p => p != null && !p.IsClientProperty &&
                    !string.IsNullOrWhiteSpace(p.Name) && !p.IsConstant && !p.IsRequired &&
                    p.ModelType is CompositeType &&
                    (p.ModelType.Name.EqualsIgnoreCase(Group + Name + "OptionalParams") || p.ModelType.Name.EqualsIgnoreCase("RequestOptionsBase"))).FirstOrDefault(op => op != null) as ParameterTS);
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
            IEnumerable<ParameterTS> requiredParameters = LocalParameters.Where(p => p.IsRequired);
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
        internal IEnumerable<ParameterTS> LocalParameters
        {
            get
            {
                return ParameterTemplateModels.Where(
                    p => p != null && !p.IsClientProperty && !string.IsNullOrWhiteSpace(p.Name) && !p.IsConstant)
                    .OrderBy(item => !item.IsRequired);
            }
        }

        /// <summary>
        /// Get the parameters that are actually method parameters in the order they appear in the method signature
        /// exclude global parameters. All the optional parameters are pushed into the second last "options" parameter.
        /// </summary>
        [JsonIgnore]
        public IEnumerable<ParameterTS> LocalParametersWithOptions
        {
            get
            {
                List<ParameterTS> requiredParamsWithOptionsList = LocalParameters.Where(p => p.IsRequired).ToList();
                requiredParamsWithOptionsList.Add(OptionsParameterTemplateModel);
                return requiredParamsWithOptionsList as IEnumerable<ParameterTS>;
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
                    tryBlock.ConstObjectVariable("serializer", CreateSerializerExpression());
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
                    catchBlock.Return($"Promise.reject({errorVariable})");
                });
            });
        }

        /// <summary>
        /// Get the method's request body (or null if there is no request body)
        /// </summary>
        public ParameterTS RequestBody => Body as ParameterTS;

        /// <summary>
        /// Generate a reference to the ServiceClient
        /// </summary>
        [JsonIgnore]
        public string ClientReference => MethodGroup.IsCodeModelMethodGroup ? "this" : "this.client";

        public static string GetStatusCodeReference(HttpStatusCode code)
        {
            return string.Format(CultureInfo.InvariantCulture, "{0}", (int)code);
        }

        [JsonIgnore]
        public virtual string InitializeResult
        {
            get
            {
                return string.Empty;
            }
        }

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

        private ParameterTransformations GetParameterTransformations()
            => new ParameterTransformations(InputParameterTransformation);

        private IEnumerable<Property> OptionsParameterProperties
        {
            get
            {
                CompositeType optionsParameterModelType = (CompositeType)OptionsParameterTemplateModel.ModelType;
                return optionsParameterModelType.Properties.Where(property => property.Name != "customHeaders");
            }
        }

        public string BuildOptionalMappings()
        {
            TSBuilder builder = new TSBuilder();
            foreach (Property optionalParam in OptionsParameterProperties)
            {
                string defaultValue = "undefined";
                if (!string.IsNullOrWhiteSpace(optionalParam.DefaultValue))
                {
                    defaultValue = optionalParam.DefaultValue;
                }
                builder.Line("let {0} = ({1} && {1}.{2} !== undefined) ? {1}.{2} : {3};", optionalParam.Name, OptionsParameterTemplateModel.Name, optionalParam.Name, defaultValue);
            }
            return builder.ToString();
        }

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
                        comment.Parameter(ProvideParameterType(parameter.ModelType, true), parameter.Name, parameter.Documentation, !parameter.IsRequired);
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
                        comment.Parameter("ServiceCallback", "callback", "The callback.");
                        comment.Returns("ServiceCallback", "callback(err, result, request, operationRes)");
                    }
                    else if (flavor == MethodFlavor.Promise)
                    {
                        comment.Parameter("ServiceClient", "optionalCallback", "The optional callback.", true);
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

        public string GenerateWithHttpOperationResponseMethod(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

            builder.Line(GenerateWithHttpOperationResponseMethodComment());
            builder.AsyncMethod($"{Name.ToCamelCase()}WithHttpOperationResponse", $"Promise<{HttpOperationResponseName}>", MethodParameterDeclarationTS(true, true), methodBody =>
            {
                if (OptionsParameterModelType.Properties.Any())
                {
                    methodBody.Line(BuildOptionalMappings());
                }

                IEnumerable<Parameter> parameterTemplateModels = ParameterTemplateModels;

                methodBody.Line(emptyLine);

                methodBody.Line("let operationRes: msRest.HttpOperationResponse;");

                methodBody.Try(tryBlock =>
                {
                    tryBlock.FunctionCall($"operationRes = await {ClientReference}.sendOperationRequest", argumentList =>
                    {
                        argumentList.FunctionCall("msRest.createOperationArguments", GenerateOperationArguments);
                        argumentList.Text(GetOperationSpecVariableName());
                    });
                    tryBlock.Line(";");

                    if (!HasStreamResponseType())
                    {
                        string resultInitializer = InitializeResult;
                        if (!string.IsNullOrEmpty(resultInitializer))
                        {
                            tryBlock.LineComment("Deserialize Response");
                            tryBlock.Line("const statusCode = operationRes.status;");
                            tryBlock.Line(InitializeResult);

                            if (ReturnType.Body != null && DefaultResponse.Body != null && !Responses.Any())
                            {
                                DeserializeResponse(tryBlock, DefaultResponse.Body);
                            }
                        }
                    }
                })
                .Catch("err", catchBlock =>
                {
                    catchBlock.Return("Promise.reject(err)");
                });

                methodBody.Return("Promise.resolve(operationRes)");
            });

            return builder.ToString();
        }

        public void GenerateOperationArguments(TSArgumentList operationArguments)
        {
            operationArguments.Object(obj =>
            {
                ParameterTransformations transformations = GetParameterTransformations();
                Action<string, string> addArgument = (string operationArgumentName, string operationArgumentValue) =>
                {
                    if (!obj.ContainsProperty(operationArgumentName) &&
                        !transformations.IsCreatedFromTransformation(operationArgumentName) &&
                        operationArgumentName != "options")
                    {
                        obj.TextProperty(operationArgumentName, operationArgumentValue);
                    }
                };

                foreach (Parameter parameter in ParameterTemplateModels)
                {
                    if (parameter.IsConstant)
                    {
                        addArgument(parameter.Name, parameter.DefaultValue);
                    }
                    else
                    {
                        addArgument(parameter.Name, parameter.Name);
                    }
                }

                foreach (Property optionsProperty in OptionsParameterProperties)
                {
                    addArgument(optionsProperty.Name, optionsProperty.Name);
                }
            });
            operationArguments.Text("options");
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
            ParameterTransformations parameterTransformations = GetParameterTransformations();

            GenerateRequestParameters(operationSpec, "urlParameters", parameterTransformations, logicalParameters.Where(p => p.Location == ParameterLocation.Path), AddSkipEncodingProperty);
            GenerateRequestParameters(operationSpec, "queryParameters", parameterTransformations, logicalParameters.Where(p => p.Location == ParameterLocation.Query),
                (TSObject queryParameterObject, Parameter queryParameter) =>
                {
                    AddSkipEncodingProperty(queryParameterObject, queryParameter);
                    if (queryParameter.CollectionFormat != CollectionFormat.None)
                    {
                        queryParameterObject.TextProperty("collectionFormat", $"msRest.QueryCollectionFormat.{queryParameter.CollectionFormat}");
                    }
                });
            GenerateRequestParameters(operationSpec, "headerParameters", parameterTransformations, logicalParameters.Where(p => p.Location == ParameterLocation.Header));

            if (RequestBody != null)
            {
                operationSpec.ObjectProperty("requestBody", requestBodyObject =>
                {
                    GenerateRequestParameterPath(requestBodyObject, RequestBody, parameterTransformations);
                    requestBodyObject.Property("mapper", requestBodyMapper => ClientModelExtensions.ConstructRequestBodyMapper(requestBodyMapper, RequestBody));
                });
                operationSpec.QuotedStringProperty("contentType", RequestContentType);
            }
            else
            {
                IEnumerable<Parameter> formDataParameters = logicalParameters.Where(p => p.Location == ParameterLocation.FormData);
                if (formDataParameters.Any())
                {
                    GenerateRequestParameters(operationSpec, "formDataParameters", parameterTransformations, formDataParameters);
                    operationSpec.QuotedStringProperty("contentType", RequestContentType);
                }
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

            operationSpec.TextProperty("serializer", CreateSerializerExpression());
        }

        private static void AddSkipEncodingProperty(TSObject parameterObject, Parameter parameter)
        {
            if (parameter.SkipUrlEncoding())
            {
                parameterObject.BooleanProperty("skipEncoding", true);
            }
        }

        private static void GenerateRequestParameters(TSObject operationSpec, string propertyName, ParameterTransformations parameterTransformations, IEnumerable<Parameter> requestParameters, Action<TSObject, Parameter> extraParameterProperties = null)
        {
            if (requestParameters != null && requestParameters.Any())
            {
                operationSpec.ArrayProperty(propertyName, parameterArray =>
                {
                    foreach (ParameterTS requestParameter in requestParameters)
                    {
                        parameterArray.Object(parameterObject =>
                        {
                            GenerateRequestParameterPath(parameterObject, requestParameter, parameterTransformations);
                            extraParameterProperties?.Invoke(parameterObject, requestParameter);
                            parameterObject.Property("mapper", mapper => ClientModelExtensions.ConstructMapper(mapper, requestParameter.ModelType, requestParameter.SerializedName, requestParameter, false, false, false));
                        });
                    }
                });
            }
        }

        private static void GenerateRequestParameterPath(TSObject parent, Parameter requestParameter, ParameterTransformations parameterTransformations)
        {
            GenerateRequestParameterPath(parent, "parameterPath", requestParameter.Name, parameterTransformations);
        }

        private static void GenerateRequestParameterPath(TSObject parent, string propertyName, string parameterName, ParameterTransformations parameterTransformations)
        {
            if (!parameterTransformations.IsCreatedFromTransformation(parameterName))
            {
                parent.QuotedStringProperty(propertyName, parameterName);
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
                        GenerateRequestParameterPath(parameterPathObject, unflattenedPropertyName, inputParameterName, parameterTransformations);
                    }
                });
            }
            else
            {
                // Ungrouping
                string[] inputParameterPath = parameterTransformations.GetUngroupedParameterPath(parameterName);
                if (inputParameterPath.Length == 1)
                {
                    GenerateRequestParameterPath(parent, propertyName, inputParameterPath[0], parameterTransformations);
                }
                else
                {
                    parent.ArrayProperty(propertyName, parameterPathArray =>
                    {
                        foreach (string inputParameterPathPart in inputParameterPath)
                        {
                            parameterPathArray.QuotedString(inputParameterPathPart);
                        }
                    });
                }
            }
        }

        public bool HasStreamResponseType()
        {
            return Responses.Values.Any((Response r) => r.Body.IsPrimaryType(KnownPrimaryType.Stream));
        }

        public void GenerateOperationSpecDefinition(TSBuilder builder)
        {
            builder.ConstObjectVariable(GetOperationSpecVariableName(), "msRest.OperationSpec", GenerateOperationSpec);
        }

        private string GetOperationSpecVariableName()
        {
            return Name.ToCamelCase() + "OperationSpec";
        }

        public string CreateSerializerExpression()
        {
            return $"new msRest.Serializer(Mappers{(CodeModel.ShouldGenerateXmlSerialization == true ? ", true" : "")})";
        }
    }
}