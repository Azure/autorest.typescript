// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A data class that contains the details needed to describe a TypeScript parameter.
    /// </summary>
    public class JSParameter
    {
        /// <summary>
        /// Create a new JSParameter object.
        /// </summary>
        /// <param name="name">The name of the parameter.</param>
        /// <param name="type">The type of the parameter.</param>
        /// <param name="description">The description of the parameter.</param>
        /// <param name="required">Whether or not the parameter is required.</param>
        public JSParameter(string name, string type, string description, bool required = true)
        {
            Name = name;
            Type = type;
            Description = description;
            Required = required;
        }

        /// <summary>
        /// The name of the parameter.
        /// </summary>
        public string Name { get; }

        /// <summary>
        /// The type of the parameter.
        /// </summary>
        public string Type { get; }

        /// <summary>
        /// The description of the parameter.
        /// </summary>
        public string Description { get; }

        /// <summary>
        /// Whether or not the parameter is required.
        /// </summary>
        public bool Required { get; }
    }
}
