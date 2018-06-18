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
        /// Get the predicate to determine of the http operation status code indicates success
        /// </summary>
        public string FailureStatusCodePredicate
        {
            get
            {
                if (Responses.Any())
                {
                    List<string> predicates = new List<string>();
                    foreach (var responseStatus in Responses.Keys)
                    {
                        predicates.Add(string.Format(CultureInfo.InvariantCulture,
                            "statusCode !== {0}", GetStatusCodeReference(responseStatus)));
                    }

                    return string.Join(" && ", predicates);
                }

                return "statusCode < 200 || statusCode >= 300";
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

        public static string ConstructParameterDocumentation(string documentation)
        {
            var builder = new IndentedStringBuilder("  ");
            return builder.AppendLine(documentation)
                          .AppendLine(" * ").ToString();
        }

        /// <summary>
        /// Get the type name for the method's return type
        /// </summary>
        [JsonIgnore]
        public string ReturnTypeString
        {
            get
            {
                if (ReturnType.Body != null)
                {
                    return ReturnType.Body.Name;
                }
                else
                {
                    return "null";
                }
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

        /// <summary>
        /// The Deserialization Error handling code block that provides a useful Error
        /// message when exceptions occur in deserialization along with the request
        /// and response object
        /// </summary>
        [JsonIgnore]
        public string DeserializationError
        {
            get
            {
                var builder = new IndentedStringBuilder("  ");
                var errorVariable = this.GetUniqueName("deserializationError");
                return builder.AppendLine("let {0} = new msRest.RestError(`Error ${{error}} occurred in " +
                    "deserializing the responseBody - ${{operationRes.bodyAsText}}`);", errorVariable)
                    .AppendLine("{0}.request = msRest.stripRequest(httpRequest);", errorVariable)
                    .AppendLine("{0}.response = msRest.stripResponse(operationRes);", errorVariable)
                    .AppendLine("return Promise.reject({0});", errorVariable).ToString();
            }
        }

        public string PopulateErrorCodeAndMessage()
        {
            var builder = new IndentedStringBuilder("  ");
            if (DefaultResponse.Body != null && DefaultResponse.Body.Name.RawValue.EqualsIgnoreCase("CloudError"))
            {
                builder.AppendLine("if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;")
                       .AppendLine("if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;")
                       .AppendLine("if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;");
            }
            else
            {
                builder.AppendLine("let internalError = null;")
                       .AppendLine("if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;")
                       .AppendLine("error.code = internalError ? internalError.code : parsedErrorResponse.code;")
                       .AppendLine("error.message = internalError ? internalError.message : parsedErrorResponse.message;");
            }
            return builder.ToString();
        }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Globalization", "CA1308:NormalizeStringsToUppercase")]
        public static string GetParameterDocumentationType(Parameter parameter)
        {
            if (parameter == null)
            {
                throw new ArgumentNullException(nameof(parameter));
            }
            string typeName = "object";
            if (parameter.ModelType is PrimaryTypeTS)
            {
                typeName = parameter.ModelType.Name;
            }
            else if (parameter.ModelType is Core.Model.SequenceType)
            {
                typeName = "array";
            }
            else if (parameter.ModelType is EnumType)
            {
                typeName = "string";
            }

            return typeName.ToLowerInvariant();
        }

        public string GetDeserializationString(IModelType type, string valueReference = "result", string responseVariable = "parsedResponse")
        {
            TSBuilder builder = new TSBuilder();
            if (type is CompositeType)
            {
                builder.Line($"const resultMapper = Mappers.{type.Name};");
            }
            else
            {
                builder.Text($"const resultMapper = ");
                ClientModelExtensions.ConstructMapper(builder, type, responseVariable, null, isPageable: false, expandComposite: false, isXML: CodeModel?.ShouldGenerateXmlSerialization == true);
                builder.Line(";");
            }

            if (CodeModel.ShouldGenerateXmlSerialization && type is SequenceType st)
            {
                builder.Line("{2} = this.serializer.deserialize(resultMapper, typeof {0} === 'object' ? {0}['{1}'] : [], '{2}');", responseVariable, st.ElementType.XmlName, valueReference);
            }
            else
            {
                builder.Line("{1} = this.serializer.deserialize(resultMapper, {0}, '{1}');", responseVariable, valueReference);
            }
            return builder.ToString();
        }

        [JsonIgnore]
        public string ValidationString
        {
            get
            {
                var builder = new IndentedStringBuilder("  ");
                foreach (var parameter in ParameterTemplateModels.Where(p => !p.IsConstant))
                {
                    if ((HttpMethod == HttpMethod.Patch && parameter.ModelType is CompositeType))
                    {
                        if (parameter.IsRequired)
                        {
                            builder.AppendLine("if ({0} === null || {0} === undefined) {{", parameter.Name)
                                     .Indent()
                                     .AppendLine("throw new Error('{0} cannot be null or undefined.');", parameter.Name)
                                   .Outdent()
                                   .AppendLine("}");
                        }
                    }
                    else
                    {
                        builder.AppendLine(parameter.ModelType.ValidateType(this, parameter.Name, parameter.IsRequired));
                        if (parameter.Constraints != null && parameter.Constraints.Count > 0 && parameter.Location != ParameterLocation.Body)
                        {
                            builder.AppendLine("if ({0} !== null && {0} !== undefined) {{", parameter.Name).Indent();
                            builder = parameter.ModelType.AppendConstraintValidations(parameter.Name, parameter.Constraints, builder);
                            builder.Outdent().AppendLine("}");
                        }
                    }
                }
                return "";
            }
        }

        public string DeserializeResponse(IModelType type, string valueReference = "result", string responseVariable = "parsedResponse")
        {
            if (type == null)
            {
                throw new ArgumentNullException(nameof(type));
            }

            var builder = new IndentedStringBuilder("  ");
            builder.AppendLine("let {0} = {1} as {{ [key: string]: any }};", responseVariable, valueReference)
                   .AppendLine("try {")
                   .Indent();
            var deserializeBody = GetDeserializationString(type, valueReference, responseVariable);
            if (!string.IsNullOrWhiteSpace(deserializeBody))
            {
                builder.AppendLine("if ({0} !== null && {0} !== undefined) {{", responseVariable)
                         .Indent()
                         .AppendLine(deserializeBody)
                       .Outdent()
                       .AppendLine("}");
            }
            builder.Outdent()
                   .AppendLine("} catch (error) {")
                     .Indent()
                     .AppendLine(DeserializationError)
                   .Outdent()
                   .AppendLine("}");

            return builder.ToString();
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

                if (parameterTemplateModels.Any())
                {
                    foreach (Parameter parameter in parameterTemplateModels.Where(p => !p.IsClientProperty))
                    {
                        if (parameter.IsConstant)
                        {
                            methodBody.Line($"let {parameter.Name} = {parameter.DefaultValue};");
                        }
                        else if (parameter.IsRequired &&
                            parameter.ModelType is CompositeType parameterCompositeModelType &&
                            parameterCompositeModelType.ContainsConstantProperties)
                        {
                            methodBody.If($"{parameter.Name} === null || {parameter.Name} === undefined", ifBlock =>
                            {
                                ifBlock.Line($"{parameter.Name} = {{}} as any;");
                            });
                        }
                    }

                    string validationBlock = ValidationString;
                    if (!string.IsNullOrWhiteSpace(validationBlock))
                    {
                        methodBody.LineComment("Validate");
                        methodBody.Try(tryBlock =>
                        {
                            tryBlock.Line(validationBlock);
                        })
                        .Catch("error", catchBlock =>
                        {
                            catchBlock.Return("Promise.reject(error)");
                        });
                    }
                }

                methodBody.Line(emptyLine);

                methodBody.LineComment("Create HTTP transport objects");
                methodBody.Line("const httpRequest = new WebResource();");

                bool hasStreamResponseType = HasStreamResponseType();

                if (hasStreamResponseType)
                {
                    methodBody.Line("httpRequest.rawResponse = true;");
                }

                methodBody.Line("let operationRes: msRest.HttpOperationResponse;");

                methodBody.Try(tryBlock =>
                {
                    tryBlock.Text("const operationArguments: msRest.OperationArguments = ");
                    tryBlock.FunctionCall("msRest.createOperationArguments", GenerateOperationArguments);
                    tryBlock.Line(";");
                    tryBlock.FunctionCall($"operationRes = await {ClientReference}.sendOperationRequest", argumentList =>
                    {
                        argumentList.Text("httpRequest");
                        argumentList.Text("operationArguments");
                        argumentList.Object(GenerateOperationSpec);
                    });
                    tryBlock.Line(";");

                    tryBlock.Line("let statusCode = operationRes.status;");
                    tryBlock.If(FailureStatusCodePredicate, ifBlock =>
                    {
                        string initialErrorMessage = hasStreamResponseType
                            ? "`Unexpected status code: ${statusCode}`"
                            : "operationRes.bodyAsText as string";
                        ifBlock.Line($"let error = new msRest.RestError({initialErrorMessage});");
                        ifBlock.Line($"error.statusCode = operationRes.status;");
                        ifBlock.Line($"error.request = msRest.stripRequest(httpRequest);");
                        ifBlock.Line($"error.response = msRest.stripResponse(operationRes);");
                        const string parsedErrorResponse = "parsedErrorResponse";
                        ifBlock.Line($"let {parsedErrorResponse} = operationRes.parsedBody as {{ [key: string]: any }};");
                        ifBlock.Try(tryBlock2 =>
                        {
                            tryBlock2.If(parsedErrorResponse, ifErrorBlock =>
                            {
                                ifErrorBlock.Line(PopulateErrorCodeAndMessage());
                            });

                            if (DefaultResponse.Body != null)
                            {
                                string deserializeErrorBody = GetDeserializationString(DefaultResponse.Body, "error.body", "parsedErrorResponse");
                                if (!string.IsNullOrEmpty(deserializeErrorBody))
                                {
                                    tryBlock2.If($"{parsedErrorResponse} !== null && {parsedErrorResponse} !== undefined", ifErrorBlock =>
                                    {
                                        ifErrorBlock.Line(deserializeErrorBody);
                                    });
                                }
                            }
                        })
                        .Catch("defaultError", catchBlock =>
                        {
                            catchBlock.Line($"error.message = `Error \"${{defaultError.message}}\" occurred in deserializing the responseBody ` +");
                            catchBlock.Line($"                 `- \"${{operationRes.bodyAsText}}\" for the default response.`;");
                            catchBlock.Return("Promise.reject(error)");
                        });
                        ifBlock.Return("Promise.reject(error)");
                    });

                    if (!hasStreamResponseType)
                    {
                        tryBlock.Line(InitializeResult);

                        IEnumerable<KeyValuePair<HttpStatusCode, Response>> responsePairs = Responses.Where(response => response.Value.Body != null || response.Value.Headers != null);
                        foreach (KeyValuePair<HttpStatusCode, Response> responsePair in responsePairs)
                        {
                            tryBlock.LineComment("Deserialize Response");
                            tryBlock.If($"statusCode === {GetStatusCodeReference(responsePair.Key)}", ifBlock =>
                            {
                                if (responsePair.Value.Body != null)
                                {
                                    ifBlock.Line(DeserializeResponse(responsePair.Value.Body, "operationRes.parsedBody"));
                                }
                                if (responsePair.Value.Headers != null)
                                {
                                    ifBlock.Line($"operationRes.parsedHeaders = this.serializer.deserialize(Mappers.{responsePair.Value.Headers.Name}, operationRes.headers.rawHeaders(), 'operationRes.parsedBody');");
                                }
                            });
                        }

                        if (ReturnType.Body != null && DefaultResponse.Body != null && !Responses.Any())
                        {
                            tryBlock.Line(DeserializeResponse(DefaultResponse.Body, "operationRes.parsedBody"));
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
                List<string> operationArgumentNames = new List<string>();
                foreach (Parameter parameter in LogicalParameters)
                {
                    operationArgumentNames.Add(parameter.Name);
                }

                foreach (Parameter parameter in ParameterTemplateModels)
                {
                    operationArgumentNames.Add(parameter.Name);
                }

                foreach (Property optionsProperty in OptionsParameterProperties)
                {
                    operationArgumentNames.Add(optionsProperty.Name);
                }

                ParameterTransformations transformations = GetParameterTransformations();

                foreach (string operationArgumentName in operationArgumentNames)
                {
                    if (!obj.ContainsProperty(operationArgumentName) &&
                        !transformations.IsCreatedFromTransformation(operationArgumentName) &&
                        operationArgumentName != "options")
                    {
                        obj.TextProperty(operationArgumentName, operationArgumentName);
                    }
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
            else
            {
                operationSpec.TextProperty("baseUrl", $"{ClientReference}.baseUri");
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

            if (CodeModel.ShouldGenerateXmlSerialization)
            {
                operationSpec.BooleanProperty("isXML", true);
            }

            operationSpec.TextProperty("serializer", "this.serializer");
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
    }
}