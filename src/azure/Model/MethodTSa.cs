// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions.Azure;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using Newtonsoft.Json;
using System.Collections.Generic;
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

        public override void Generate(TSClass tsClass)
        {
            if (IsLongRunningOperation)
            {
                GenerateLongRunningOperationMethod(tsClass);
            }
            else if (IsLongRunningOperationPoller())
            {
                GenerateLongRunningOperationPollerMethod(tsClass);
            }
            else
            {
                base.Generate(tsClass);
            }
        }

        private void GenerateLongRunningOperationMethod(TSClass tsClass)
        {
            string methodName = Name.ToCamelCase();
            IEnumerable<TSParameter> parameters = GetRequiredParameters().Concat(new[] { GetOptionsParameter(false) });
            string returnType = $"Promise<{HttpResponseReferenceName}>";

            GenerateDocumentationComment(tsClass, returnType, parameters);
            tsClass.Method(methodName, returnType, parameters, methodBody =>
            {
                methodBody.Line($"return this.{GetPollerMethodName(this)}({MethodParameterDeclaration})");
                methodBody.Indent(() =>
                {
                    methodBody.Text($".then(lroPoller => lroPoller.pollUntilFinished())");
                    if (HasCustomHttpResponseType)
                    {
                        methodBody.Text($" as {returnType}");
                    }
                    methodBody.Line(";");
                });
            });
        }

        private void GenerateLongRunningOperationPollerMethod(TSClass tsClass)
        {
            string methodName = Name.ToCamelCase();
            IEnumerable<TSParameter> parameters = GetRequiredParameters().Concat(new[] { GetOptionsParameter(false) });
            const string returnType = "Promise<coreArm.LROPoller>";

            GenerateDocumentationComment(tsClass, returnType, parameters);
            tsClass.Method(Name.ToString(), returnType, parameters, methodBody =>
            {
                methodBody.Return(returnValue =>
                {
                    returnValue.FunctionCall($"{ClientReference}.sendLRORequest", argumentList =>
                    {
                        argumentList.Object((TSObject tsObject) => GenerateOperationArguments(tsObject));
                        argumentList.Text(GetOperationSpecVariableName());
                        argumentList.Text("options");
                    });
                });
            });
        }

        public override bool IsWrappable()
        {
            return base.IsWrappable() && !IsLongRunningOperationPoller();
        }
    }
}