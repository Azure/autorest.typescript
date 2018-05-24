// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Linq;
using System.Net;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions.Azure;
using AutoRest.TypeScript.Model;
using Newtonsoft.Json;

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
        public bool IsLongRunningOperation => Extensions.ContainsKey(AzureExtensions.LongRunningExtension);


        [JsonIgnore]
        public override string InitializeResult
        {
            get
            {
                var sb = new IndentedStringBuilder();
                if (this.HttpMethod == HttpMethod.Head &&
                    this.ReturnType.Body != null)
                {
                    HttpStatusCode code = this.Responses.Keys.FirstOrDefault(AzureExtensions.HttpHeadStatusCodeSuccessFunc);
                    sb.AppendFormat("operationRes.parsedBody = (statusCode === {0});", (int)code).AppendLine();
                }

                return sb.ToString();
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
    }
}