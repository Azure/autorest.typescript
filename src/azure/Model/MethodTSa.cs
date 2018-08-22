// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions.Azure;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using Newtonsoft.Json;
using System.Linq;
using System.Net;

namespace AutoRest.TypeScript.Azure.Model
{
    public class MethodTSa : MethodTS
    {
        protected MethodTSa()
            : base()
        {
        }

        [JsonIgnore]
        public string ClientRequestIdString => AzureExtensions.GetClientRequestIdString(this);

        [JsonIgnore]
        public string RequestIdString => AzureExtensions.GetRequestIdString(this);

        /// <summary>
        /// Returns true if method has x-ms-long-running-operation extension.
        /// </summary>
        [JsonIgnore]
        public override bool IsLongRunningOperation => Extensions.ContainsKey(AzureExtensions.LongRunningExtension);

        /// <summary>
        /// Whether or not this is a LROPoller method version for a long running operation.
        /// </summary>
        public bool IsLongRunningOperationPoller => CodeModel.Methods.Any((Method method) => $"begin{method.Name.ToPascalCase()}" == Name.ToString());

        [JsonIgnore]
        public override string InitializeResult
        {
            get
            {
                string result = "";
                if (HttpMethod == HttpMethod.Head && ReturnType.Body != null)
                {
                    HttpStatusCode code = Responses.Keys.FirstOrDefault(AzureExtensions.HttpHeadStatusCodeSuccessFunc);
                    result = $"operationRes.parsedBody = (statusCode === {(int)code});";
                }
                return result;
            }
        }

        [JsonIgnore]
        public string LongRunningOperationMethodNameInRuntime
        {
            get
            {
                string result = null;
                if (this.IsLongRunningOperation)
                {
                    result = "getLongRunningOperationResult";
                }
                return result;
            }
        }

        public string DeserializeResponse(IModelType type)
        {
            TSBuilder builder = new TSBuilder();
            using (TSBlock block = new TSBlock(builder))
            {
                DeserializeResponse(block, type);
            }
            return builder.ToString();
        }

        public override string Generate(string emptyLine)
        {
            string result;
            string methodName = this.Name.ToString();
            if (IsLongRunningOperation)
            {
                result = GenerateLongRunningOperationMethod(emptyLine);
            }
            else if (IsLongRunningOperationPoller)
            {
                result = base.Generate(emptyLine);
            }
            else
            {
                result = base.Generate(emptyLine);
            }
            return result;
        }

        private string GenerateLongRunningOperationMethod(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

            builder.Line(emptyLine);
            builder.Line(GenerateWithHttpOperationResponseMethodComment());

            builder.Method($"{Name.ToCamelCase()}{ResponseMethodSuffix}", $"Promise<{HttpResponseReferenceName}>", MethodParameterDeclarationTS(true, true), methodBody =>
            {
                methodBody.Line($"return this.begin{Name.ToPascalCase()}{ResponseMethodSuffix}({MethodParameterDeclaration})");
                methodBody.Indent(() =>
                {
                    methodBody.Line($".then(initialResult => {ClientReference}.getLongRunningOperationResult(initialResult, options))");
                    methodBody.Line($".then(operationRes => {{");
                    methodBody.Indent(() =>
                    {
                        if (ReturnType.Body != null)
                        {
                            methodBody.Line("let httpRequest = operationRes.request;");
                        }
                        methodBody.Line(emptyLine);
                        methodBody.LineComment("Deserialize Response");
                        if (ReturnType.Body != null)
                        {
                            methodBody.Line(DeserializeResponse(ReturnType.Body));
                        }
                        if (ReturnType.Body != null && DefaultResponse.Body != null && !Responses.Any())
                        {
                            methodBody.Line(DeserializeResponse(DefaultResponse.Body));
                        }
                        methodBody.Line("return operationRes;");
                    });

                    methodBody.Text("})");
                    if (HasCustomHttpResponseType)
                    {
                        methodBody.Text($" as Promise<{HttpResponseReferenceName}>");
                    }
                    methodBody.Line(";");
                });
            });

            return builder.ToString();
        }

        private string GenerateLongRunningOperationPollerMethod(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

            string responseName = HttpResponseReferenceName;
            builder.Line(GenerateWithHttpOperationResponseMethodComment());
            builder.Method($"{Name.ToCamelCase()}{ResponseMethodSuffix}", $"Promise<LROPoller>", MethodParameterDeclarationTS(true, true), methodBody =>
            {
                methodBody.Return(returnValue =>
                {
                    returnValue.FunctionCall($"{ClientReference}.sendLRORequest", argumentList =>
                    {
                        argumentList.Object(GenerateOperationArguments);
                        argumentList.Text(GetOperationSpecVariableName());
                    });
                });
            });

            return builder.ToString();
        }

        public override bool IsWrappable()
        {
            return base.IsWrappable() && !IsLongRunningOperationPoller;
        }
    }
}