// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// The TypeScript DSL representation for adding parameters to a function or method signature.
    /// </summary>
    public class TSParameterList
    {
        private readonly TSBuilder builder;
        private bool hasParameters;

        public TSParameterList(TSBuilder builder)
        {
            this.builder = builder;
        }

        public void Parameter(string parameterName, string parameterType, bool optional = false)
        {
            if (hasParameters)
            {
                builder.Text(", ");
            }
            else
            {
                hasParameters = true;
            }

            builder.Text(parameterName);
            if (optional)
            {
                builder.Text("?");
            }
            builder.Text($": {parameterType}");
        }
    }
}
