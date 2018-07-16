// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.Model
{
    /// <summary>
    /// A ParameterTransformation collection that add extra functions for performing queries
    /// against a provided set of ParameterTransformations.
    /// </summary>
    public class ParameterTransformations
    {
        /// <summary>
        /// The names of input parameters that are in the options parameter.
        /// </summary>
        private readonly ISet<string> inputParametersInOptions;
        /// <summary>
        /// Output Parameter Name -> Output Parameter Property Name -> Input Parameter Name
        /// </summary>
        private readonly IDictionary<string, IDictionary<string, string>> unflattenedParameterMappings;
        /// <summary>
        /// Output Parameter Name -> Input Property Path
        /// </summary>
        private readonly IDictionary<string, string[]> ungroupedParameterMappings;

        public ParameterTransformations(IEnumerable<ParameterTransformation> transformations)
        {
            inputParametersInOptions = new HashSet<string>();
            unflattenedParameterMappings = new Dictionary<string, IDictionary<string, string>>();
            ungroupedParameterMappings = new Dictionary<string, string[]>();

            foreach (ParameterTransformation transformation in transformations)
            {
                string outputParameterName = transformation.OutputParameter.Name;
                
                foreach (ParameterMapping mapping in transformation.ParameterMappings)
                {
                    Parameter inputParameter = mapping.InputParameter;
                    string inputParameterName = inputParameter.Name;
                    if (MethodTS.IsInOptionsParameter(inputParameter))
                    {
                        inputParametersInOptions.Add(inputParameterName);
                    }

                    if (!string.IsNullOrEmpty(mapping.OutputParameterProperty))
                    {
                        if (!unflattenedParameterMappings.ContainsKey(outputParameterName))
                        {
                            unflattenedParameterMappings.Add(outputParameterName, new Dictionary<string, string>());
                        }
                        IDictionary<string, string> unflattenedParameterPropertyMappings = unflattenedParameterMappings[outputParameterName];

                        unflattenedParameterPropertyMappings.Add(mapping.OutputParameterProperty, inputParameterName);
                    }
                    else
                    {
                        ungroupedParameterMappings.Add(outputParameterName, new string[] { inputParameterName, mapping.InputParameterProperty });
                    }
                }
            }
        }

        /// <summary>
        /// Get whether or not there are any parameter transformations in this collection.
        /// </summary>
        /// <returns>Whether or not there are any parameter transformations in this collection.</returns>
        public bool Any()
        {
            return unflattenedParameterMappings.Any() || ungroupedParameterMappings.Any();
        }

        /// <summary>
        /// Get whether or not the variable with the provided name is created from a parameter transformation.
        /// </summary>
        /// <param name="variableName">The variable to check.</param>
        /// <returns>Whether or not the variable with the provided name is created from a parameter transformation.</returns>
        public bool IsCreatedFromTransformation(string variableName)
        {
            return !string.IsNullOrEmpty(variableName) &&
                (unflattenedParameterMappings.ContainsKey(variableName) || ungroupedParameterMappings.ContainsKey(variableName));
        }

        /// <summary>
        /// Is the variable with the provided name a variable that was created as a result of an
        /// unflattening transformation (Input parameter maps to output parameter property)?
        /// </summary>
        /// <param name="variableName">The variable name to check.</param>
        /// <returns></returns>
        public bool IsUnflattenedVariable(string variableName)
        {
            return !string.IsNullOrEmpty(variableName) && unflattenedParameterMappings.ContainsKey(variableName);
        }

        /// <summary>
        /// Get the unflattened parameter property mappings dictionary that maps between the
        /// unflattened parameter's property names to the associated input parameter names.
        /// </summary>
        /// <param name="unflattenedParameterName">The unflattened parameter name.</param>
        /// <returns></returns>
        public IDictionary<string, string> GetUnflattenedParameterPropertyMappings(string unflattenedParameterName)
        {
            IDictionary<string, string> result = null;

            if (IsUnflattenedVariable(unflattenedParameterName))
            {
                result = unflattenedParameterMappings[unflattenedParameterName];
            }

            return result;
        }

        public bool IsUngroupedVariable(string variableName)
        {
            return !string.IsNullOrEmpty(variableName) && ungroupedParameterMappings.ContainsKey(variableName);
        }

        public string[] GetUngroupedParameterPath(string ungroupedParameterName)
        {
            string[] result = null;
            if (IsUngroupedVariable(ungroupedParameterName))
            {
                result = ungroupedParameterMappings[ungroupedParameterName];
            }
            return result;
        }

        /// <summary>
        /// Get whether or not the input parameter with the provided name is in the options parameter.
        /// </summary>
        /// <param name="inputParameterName">The name of the input parameter</param>
        /// <returns></returns>
        public bool InputParameterInOptions(string inputParameterName)
        {
            return inputParametersInOptions.Contains(inputParameterName);
        }
    }
}
