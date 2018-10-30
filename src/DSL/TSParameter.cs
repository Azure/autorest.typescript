// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;
using System.Linq;
using AutoRest.Core.Utilities;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A data class that contains the details needed to describe a TypeScript parameter.
    /// </summary>
    public class TSParameter
    {
        /// <summary>
        /// Create a new TSParameter object.
        /// </summary>
        /// <param name="name">The name of the parameter.</param>
        /// <param name="type">The type of the parameter.</param>
        /// <param name="description">The description of the parameter.</param>
        /// <param name="required">Whether or not the parameter is required.</param>
        public TSParameter(string name, string type, string description, bool required = true)
        {
            Name = name;
            Type = type;
            Description = description;
            Required = required;
        }

        /// <summary>
        /// Create a new TSParameter object with unionized types.
        /// </summary>
        /// <param name="name">The name of the parameter.</param>
        /// <param name="unionTypes">The types of the parameter to unionize.</param>
        /// <param name="description">The description of the parameter.</param>
        /// <param name="required">Whether or not the parameter is required.</param>
        public TSParameter(string name, IEnumerable<string> unionTypes, string description, bool required = true)
            : this(name, String.Join(" | ", unionTypes), description, required)
        {
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

        public static TSParameter Union(params TSParameter[] parameters)
        {
            return TSParameter.Union(parameters, null, null, null, null);
        }

        public static TSParameter Union(TSParameter[] parameters = null, string name = null, string type = null, string description = null, bool? required = null)
        {
            if (parameters == null || parameters.Length < 2)
            {
                throw new ArgumentException($"Cannot create union of none or single parameter");
            }

            Func<string, string> lowerFirstLetterCase = (string str) => $"{Char.ToLowerInvariant(str[0])}{str.Substring(1)}";

            if (String.IsNullOrEmpty(name))
            {
                name = parameters.Select(param => param.Name.ToPascalCase()).Aggregate((fullName, paramName) => $"{lowerFirstLetterCase(fullName)}Or{paramName}");
            }

            if (String.IsNullOrEmpty(type))
            {
                type = parameters.Select(param => param.Type).Distinct().Aggregate((fullType, typeName) => $"{fullType} | {typeName}");
            }

            if (String.IsNullOrEmpty(description))
            {
                description = parameters.Select(param => param.Description).Aggregate((fullDescription, typeDecription) => $"{fullDescription} or {lowerFirstLetterCase(typeDecription)}");
            }

            if (required == null)
            {
                required = parameters.Any(param => param.Required);
            }

            return new TSParameter(name, type, description, required == true);
        }
    }
}
