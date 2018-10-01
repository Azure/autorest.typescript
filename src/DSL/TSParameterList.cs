// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System.Collections.Generic;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// The TypeScript DSL representation for adding parameters to a function or method signature.
    /// </summary>
    public class TSParameterList
    {
        private readonly TSBuilder builder;
        private bool hasParameters;

        /// <summary>
        /// Create a new parameter list builder.
        /// </summary>
        /// <param name="builder">The TSBuilder that will be used to collect the generated text.</param>
        public TSParameterList(TSBuilder builder)
        {
            this.builder = builder;
        }

        /// <summary>
        /// Add a parameter to this parameter list.
        /// </summary>
        /// <param name="parameter">The parameter to add.</param>
        public void Parameter(TSParameter parameter)
        {
            Parameter(parameter.Name, parameter.Type, !parameter.Required);
        }

        /// <summary>
        /// Add a new parameter to this parameter list.
        /// </summary>
        /// <param name="parameterName">The name of the parameter.</param>
        /// <param name="parameterType">The type of the parameter.</param>
        /// <param name="optional">Whether or not the parameter is optional.</param>
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

        /// <summary>
        /// Add the provided parameters to this parameter list.
        /// </summary>
        /// <param name="parameters">The parameters to add to this parameter list.</param>
        public void Parameters(IEnumerable<TSParameter> parameters)
        {
            if (parameters != null)
            {
                foreach (TSParameter parameter in parameters)
                {
                    Parameter(parameter);
                }
            }
        }
    }
}
