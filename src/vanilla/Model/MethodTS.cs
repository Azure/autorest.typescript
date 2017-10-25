// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Text;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
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

        public override Parameter Add(Parameter item)
        {
            var parameter = base.Add(item) as ParameterTS;
            return parameter;
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
                    result = ReturnType.Body.TSType(false);
                    // We will return the actual response if the return type is stream.
                    // That provides better user experience as customers can use 
                    // .text(), .json(), etc. inbuilt methods of the response class
                    // to read the stream.
                    if (result.Contains("ReadableStream"))
                    {
                        result = "Response";
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
                    .AppendLine("{0}.response = msRest.stripResponse(response);", errorVariable)
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

        /// <summary>
        /// Provides the parameter name in the correct jsdoc notation depending on 
        /// whether it is required or optional
        /// </summary>
        /// <param name="parameter">Parameter to be documented</param>
        /// <returns>Parameter name in the correct jsdoc notation</returns>
        public static string GetParameterDocumentationName(Parameter parameter)
        {
            if (parameter == null)
            {
                throw new ArgumentNullException(nameof(parameter));
            }
            if (parameter.IsRequired)
            {
                return parameter.Name;
            }
            else
            {
                return string.Format(CultureInfo.InvariantCulture, "[{0}]", parameter.Name);
            }
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
            var builder = new IndentedStringBuilder("  ");
            if (type is CompositeType)
            {
                builder.AppendLine("let resultMapper = Mappers.{0};", type.Name);
            }
            else
            {
                builder.AppendLine("let resultMapper = {{{0}}};", type.ConstructMapper(responseVariable, null, false, false));
            }
            builder.AppendLine("{1} = client.serializer.deserialize(resultMapper, {0}, '{1}');", responseVariable, valueReference);
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
                return builder.ToString();
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

        /// <summary>
        /// Generate code to build the URL from a url expression and method parameters
        /// </summary>
        /// <param name="variableName">The variable to store the url in.</param>
        /// <returns></returns>
        public virtual string BuildUrl(string variableName)
        {
            var builder = new IndentedStringBuilder("  ");
            BuildPathParameters(variableName, builder);
            if (HasQueryParameters())
            {
                BuildQueryParameterArray(builder);
                AddQueryParametersToUrl(variableName, builder);
            }

            return builder.ToString();
        }

        /// <summary>
        /// Generate code to construct the query string from an array of query parameter strings containing 'key=value'
        /// </summary>
        /// <param name="variableName">The variable reference for the url</param>
        /// <param name="builder">The string builder for url construction</param>
        private void AddQueryParametersToUrl(string variableName, IndentedStringBuilder builder)
        {
            builder.AppendLine("if (queryParamsArray.length > 0) {")
                .Indent();
            if (this.Extensions.ContainsKey("nextLinkMethod") && (bool)this.Extensions["nextLinkMethod"])
            {
                builder.AppendLine("{0} += ({0}.indexOf('?') !== -1 ? '&' : '?') + queryParamsArray.join('&');", variableName);
            }
            else
            {
                builder.AppendLine("{0} += '?' + queryParamsArray.join('&');", variableName);
            }

            builder.Outdent().AppendLine("}");
        }

        /// <summary>
        /// Detremines whether the Uri will have any query string
        /// </summary>
        /// <returns>True if a query string is possible given the method parameters, otherwise false</returns>
        protected virtual bool HasQueryParameters()
        {
            return LogicalParameters.Any(p => p.Location == ParameterLocation.Query);
        }

        /// <summary>
        /// Genrate code to build an array of query parameter strings in a variable named 'queryParamsArray'.  The 
        /// array should contain one string element for each query parameter of the form 'key=value'
        /// </summary>
        /// <param name="builder">The stringbuilder for url construction</param>
        protected virtual void BuildQueryParameterArray(IndentedStringBuilder builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.AppendLine("let queryParamsArray: Array<any> = [];");
            foreach (var queryParameter in LogicalParameters.Where(p => p.Location == ParameterLocation.Query))
            {
                var queryAddFormat = "queryParamsArray.push('{0}=' + encodeURIComponent({1}));";
                if (queryParameter.SkipUrlEncoding())
                {
                    queryAddFormat = "queryParamsArray.push('{0}=' + {1});";
                }

                if (!queryParameter.IsRequired)
                {
                    builder.AppendLine("if ({0} !== null && {0} !== undefined) {{", queryParameter.Name)
                        .Indent();
                }
                if (queryParameter.CollectionFormat == CollectionFormat.Multi)
                {
                    builder.AppendLine("if ({0}.length == 0) {{", queryParameter.Name).Indent()
                           .AppendLine(queryAddFormat, queryParameter.SerializedName, "''").Outdent()
                           .AppendLine("} else {").Indent()
                           .AppendLine("for (let item of {0}) {{", queryParameter.Name).Indent()
                           .AppendLine("item = (item === null || item === undefined) ? '' : item;")
                           .AppendLine(queryAddFormat, queryParameter.SerializedName, "'' + item").Outdent()
                           .AppendLine("}").Outdent()
                           .AppendLine("}").Outdent();
                }
                else
                {
                    builder.AppendLine(queryAddFormat,
                        queryParameter.SerializedName, queryParameter.GetFormattedReferenceValue());
                }
                if (!queryParameter.IsRequired)
                {
                    builder.Outdent().AppendLine("}");
                }
            }
        }

        /// <summary>
        /// Generate code to replace path parameters in the url template with the appropriate values
        /// </summary>
        /// <param name="variableName">The variable name for the url to be constructed</param>
        /// <param name="builder">The string builder for url construction</param>
        protected virtual void BuildPathParameters(string variableName, IndentedStringBuilder builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            foreach (var pathParameter in LogicalParameters.Where(p => p.Location == ParameterLocation.Path))
            {
                var pathReplaceFormat = "{0} = {0}.replace('{{{1}}}', encodeURIComponent({2}));";
                if (pathParameter.SkipUrlEncoding())
                {
                    pathReplaceFormat = "{0} = {0}.replace('{{{1}}}', {2});";
                }

                builder.AppendLine(pathReplaceFormat, variableName, pathParameter.SerializedName,
                    pathParameter.ModelType.ToString(pathParameter.Name));
            }
        }

        /// <summary>
        /// Gets the expression for default header setting. 
        /// </summary>
        public virtual string SetDefaultHeaders
        {
            get
            {
                return string.Empty;
            }
        }

        [JsonIgnore]
        public string ConstructRequestBodyMapper
        {
            get
            {
                var builder = new IndentedStringBuilder("  ");
                if (RequestBody.ModelType is CompositeType)
                {
                    builder.AppendLine("let requestModelMapper = Mappers.{0};", RequestBody.ModelType.Name);
                }
                else
                {
                    builder.AppendLine("let requestModelMapper = {{{0}}};",
                        RequestBody.ModelType.ConstructMapper(RequestBody.SerializedName, RequestBody, false, false));
                }
                return builder.ToString();
            }
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

        /// <summary>
        /// Generates input mapping code block.
        /// </summary>
        /// <returns></returns>
        public virtual string BuildInputMappings()
        {
            var builder = new IndentedStringBuilder("  ");
            if (InputParameterTransformation.Count > 0)
            {
                if (AreWeFlatteningParameters())
                {
                    return BuildFlattenParameterMappings();
                }
                else
                {
                    return BuildGroupedParameterMappings();
                }
            }
            return builder.ToString();
        }

        public virtual bool AreWeFlatteningParameters()
        {
            bool result = true;
            foreach (var transformation in InputParameterTransformation)
            {
                var compositeOutputParameter = transformation.OutputParameter.ModelType as CompositeType;
                if (compositeOutputParameter == null)
                {
                    result = false;
                    break;
                }
                else
                {
                    foreach (var poperty in compositeOutputParameter.ComposedProperties.Select(p => p.Name))
                    {
                        if (!transformation.ParameterMappings.Select(m => m.InputParameter.Name).Contains(poperty))
                        {
                            result = false;
                            break;
                        }
                    }
                    if (!result) break;
                }
            }

            return result;
        }

        public virtual string BuildFlattenParameterMappings()
        {
            var builder = new IndentedStringBuilder("  ");
            foreach (var transformation in InputParameterTransformation)
            {
                builder.AppendLine("let {0}: any",
                        transformation.OutputParameter.Name);

                builder.AppendLine("if ({0}) {{", BuildNullCheckExpression(transformation))
                       .Indent();

                if (transformation.ParameterMappings.Any(m => !string.IsNullOrEmpty(m.OutputParameterProperty)) &&
                    transformation.OutputParameter.ModelType is CompositeType)
                {
                    builder.AppendLine("{0} = {{}};",
                        transformation.OutputParameter.Name);
                }

                foreach (var mapping in transformation.ParameterMappings)
                {
                    builder.AppendLine("{0};", mapping.CreateCode(transformation.OutputParameter));
                }

                builder.Outdent()
                       .AppendLine("}");
            }

            return builder.ToString();
        }

        public virtual string BuildGroupedParameterMappings()
        {
            var builder = new IndentedStringBuilder("  ");
            if (InputParameterTransformation.Count > 0)
            {
                // Declare all the output paramaters outside the try block
                foreach (var transformation in InputParameterTransformation)
                {
                    if (transformation.OutputParameter.ModelType is CompositeType &&
                        transformation.OutputParameter.IsRequired)
                    {
                        builder.AppendLine("let {0}: any = {{}};",
                            transformation.OutputParameter.Name,
                            transformation.OutputParameter.ModelType.Name);
                    }
                    else
                    {
                        builder.AppendLine("let {0}: any;", transformation.OutputParameter.Name);
                    }

                }
                builder.AppendLine("try {").Indent();
                foreach (var transformation in InputParameterTransformation)
                {
                    builder.AppendLine("if ({0})", BuildNullCheckExpression(transformation))
                           .AppendLine("{").Indent();
                    var outputParameter = transformation.OutputParameter;
                    bool noCompositeTypeInitialized = true;
                    if (transformation.ParameterMappings.Any(m => !string.IsNullOrEmpty(m.OutputParameterProperty)) &&
                        transformation.OutputParameter.ModelType is CompositeType)
                    {
                        //required outputParameter is initialized at the time of declaration
                        if (!transformation.OutputParameter.IsRequired)
                        {
                            builder.AppendLine("{0} = {{}};",
                                transformation.OutputParameter.Name,
                                transformation.OutputParameter.ModelType.Name);
                        }

                        noCompositeTypeInitialized = false;
                    }

                    foreach (var mapping in transformation.ParameterMappings)
                    {
                        builder.AppendLine("{0};", mapping.CreateCode(transformation.OutputParameter));
                        if (noCompositeTypeInitialized)
                        {
                            // If composite type is initialized based on the above logic then it should not be validated.
                            builder.AppendLine(outputParameter.ModelType.ValidateType(this, outputParameter.Name, outputParameter.IsRequired));
                        }
                    }

                    builder.Outdent()
                           .AppendLine("}");
                }
                builder.Outdent()
                       .AppendLine("} catch (error) {")
                         .Indent()
                         .AppendLine("return Promise.reject(error);")
                       .Outdent()
                       .AppendLine("}");
            }
            return builder.ToString();
        }

        private static string BuildNullCheckExpression(ParameterTransformation transformation)
        {
            if (transformation == null)
            {
                throw new ArgumentNullException(nameof(transformation));
            }
            if (transformation.ParameterMappings.Count == 1)
            {
                return string.Format(CultureInfo.InvariantCulture,
                    "{0} !== null && {0} !== undefined",
                    transformation.ParameterMappings[0].InputParameter.Name);
            }
            else
            {
                return string.Join(" || ",
                transformation.ParameterMappings.Select(m =>
                    string.Format(CultureInfo.InvariantCulture,
                    "({0} !== null && {0} !== undefined)", m.InputParameter.Name)));
            }
        }

        public string BuildOptionalMappings()
        {
            IEnumerable<Core.Model.Property> optionalParameters =
                ((CompositeType)OptionsParameterTemplateModel.ModelType)
                .Properties.Where(p => p.Name != "customHeaders");
            var builder = new IndentedStringBuilder("  ");
            foreach (var optionalParam in optionalParameters)
            {
                string defaultValue = "undefined";
                if (!string.IsNullOrWhiteSpace(optionalParam.DefaultValue))
                {
                    defaultValue = optionalParam.DefaultValue;
                }
                builder.AppendLine("let {0} = ({1} && {1}.{2} !== undefined) ? {1}.{2} : {3};",
                    optionalParam.Name, OptionsParameterTemplateModel.Name, optionalParam.Name, defaultValue);
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
            var template = new Core.Template<Object>();
            var builder = new IndentedStringBuilder("  ");
            builder.AppendLine("/**");
            if (!String.IsNullOrEmpty(Summary))
            {
                builder.AppendLine(template.WrapComment(" * ", "@summary " + Summary)).AppendLine(" *");
            }
            if (!String.IsNullOrEmpty(Description))
            {
                builder.AppendLine(template.WrapComment(" * ", Description)).AppendLine(" *");
            }

            foreach (var parameter in LocalParametersWithOptions)
            {
                var paramDoc = $"@param {{{ProvideParameterType(parameter.ModelType, true)}}} {GetParameterDocumentationName(parameter)} {parameter.Documentation}";
                builder.AppendLine(ConstructParameterDocumentation(template.WrapComment(" * ", paramDoc)));
            }
            if (flavor == MethodFlavor.HttpOperationResponse)
            {
                var errorType = "Error|ServiceError";
                builder.AppendLine(" * @returns {Promise} A promise is returned").AppendLine(" *")
                    .AppendLine(" * @resolve {HttpOperationResponse} - The deserialized result object.").AppendLine(" *")
                    .AppendLine(" * @reject {{{0}}} - The error object.", errorType);
            }
            else
            {
                if (flavor == MethodFlavor.Callback)
                {
                    builder.AppendLine(template.WrapComment(" * ", " @param {ServiceCallback} callback - The callback.")).AppendLine(" *")
                        .AppendLine(template.WrapComment(" * ", " @returns {ServiceCallback} callback(err, result, request, response)")).AppendLine(" *");
                }
                else if (flavor == MethodFlavor.Promise)
                {
                    builder.AppendLine(template.WrapComment(" * ", " @param {ServiceCallback} [optionalCallback] - The optional callback.")).AppendLine(" *")
                        .AppendLine(template.WrapComment(" * ", " @returns {ServiceCallback|Promise} If a callback was passed as the last parameter " +
                        "then it returns the callback else returns a Promise.")).AppendLine(" *")
                        .AppendLine(" * {Promise} A promise is returned.").AppendLine(" *")
                        .AppendLine(" *                      @resolve {{{0}}} - The deserialized result object.", ReturnTypeTSString).AppendLine(" *")
                        .AppendLine(" *                      @reject {Error|ServiceError} - The error object.").AppendLine(" *")
                        .AppendLine(template.WrapComment(" * ", "{ServiceCallback} optionalCallback(err, result, request, response)")).AppendLine(" *");
                }
                builder.AppendLine(" *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.").AppendLine(" *")
                    .AppendLine(" *                      {{{0}}} [result]   - The deserialized result object if an error did not occur.", ReturnTypeTSString)
                    .AppendLine(template.WrapComment(" *                      ", ReturnTypeInfo)).AppendLine(" *")
                    .AppendLine(" *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.").AppendLine(" *")
                    .AppendLine(" *                      {Response} [response] - The HTTP Response stream if an error did not occur.");
                    
            }
            return builder.AppendLine(" */").ToString();
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
                sb.AppendFormat("{0}.response", resultReference);
            }
            else
            {
                sb.AppendFormat("{0}.bodyAsJson as {1}", resultReference, ReturnTypeTSString);
            }
            return sb.ToString();
        }
    }
}