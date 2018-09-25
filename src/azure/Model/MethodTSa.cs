// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions.Azure;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using Newtonsoft.Json;
using System.Linq;

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
        public override bool IsLongRunningOperation => Extensions.Get<bool>(AzureExtensions.LongRunningExtension) == true;

        /// <summary>
        /// Whether or not this is a LROPoller method version for a long running operation.
        /// </summary>
        public bool IsLongRunningOperationPoller()
            => CodeModel.Methods.Any((Method method) => GetPollerMethodName(method) == Name.ToString());

        private static string GetPollerMethodName(Method method)
        {
            return $"begin{method.Name.ToPascalCase()}";
        }

        public override string Generate(string emptyLine)
        {
            string result;
            if (IsLongRunningOperation)
            {
                result = GenerateLongRunningOperationMethod(emptyLine);
            }
            else if (IsLongRunningOperationPoller())
            {
                result = GenerateLongRunningOperationPollerMethod(emptyLine);
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

            builder.Method(Name.ToCamelCase(), $"Promise<{HttpResponseReferenceName}>", MethodParameterDeclarationTS(true, true), methodBody =>
            {
                methodBody.Line($"return this.{GetPollerMethodName(this)}({MethodParameterDeclaration})");
                methodBody.Indent(() =>
                {
                    methodBody.Text($".then(lroPoller => lroPoller.pollUntilFinished())");
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
            builder.Method(Name.ToString(), "Promise<msRestAzure.LROPoller>", MethodParameterDeclarationTS(true, true), methodBody =>
            {
                methodBody.Return(returnValue =>
                {
                    returnValue.FunctionCall($"{ClientReference}.sendLRORequest", argumentList =>
                    {
                        argumentList.Object(GenerateOperationArguments);
                        argumentList.Text(GetOperationSpecVariableName());
                        argumentList.Text("options");
                    });
                });
            });

            return builder.ToString();
        }

        public override bool IsWrappable()
        {
            return base.IsWrappable() && !IsLongRunningOperationPoller();
        }
    }
}