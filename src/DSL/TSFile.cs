// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A TypeScript DSL representation for a TypeScript file.
    /// </summary>
    public class TSFile
    {
        private readonly TSBuilder builder;

        /// <summary>
        /// Create a new TSFile at the provided file path.
        /// </summary>
        /// <param name="filePath">The file path that the TSFile will be created at.</param>
        public TSFile(string filePath)
        {
            FilePath = filePath;
            builder = new TSBuilder();
        }

        /// <summary>
        /// The file path for this TSFile.
        /// </summary>
        public string FilePath { get; }

        /// <summary>
        /// Add an empty line to this TSFile.
        /// </summary>
        public void Line()
        {
            builder.Line();
        }

        /// <summary>
        /// Add a /* */ comment to this TSFile. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void Comment(params string[] lines)
        {
            builder.Comment(lines);
        }

        /// <summary>
        /// Add a /** */ comment to this TSFile. If no non-null and non-empty lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines to add. Null lines will be ignored.</param>
        public void DocumentationComment(params string[] lines)
        {
            builder.DocumentationComment(lines);
        }

        /// <summary>
        /// Add an import statement to this TSFile with the provided imported types, functions, and values.
        /// </summary>
        /// <param name="imports">The types, functions, and values to import.</param>
        /// <param name="from">The source of the types, functions, and values. If not specified, then this will default to "@azure/core-http".</param>
        public void Import(IEnumerable<string> imports, string from = "@azure/core-http")
        {
            List<string> importsList = imports.ToList();
            importsList.Sort();
            builder.Line($"import {{ {string.Join(", ", importsList)} }} from \"{from}\";");
        }

        /// <summary>
        /// Add an exported constant variable to this TSFile.
        /// </summary>
        /// <param name="variableName">The name of the variable to add.</param>
        /// <param name="variableType">The type of the variable to add.</param>
        /// <param name="valueAction">The action that will be invoked to create the value of the added variable.</param>
        public void ExportConstVariable(string variableName, string variableType, Action<TSValue> valueAction)
        {
            builder.Text($"export const {variableName}: {variableType} = ");
            try
            {
                builder.Value(valueAction);
            }
            finally
            {
                builder.Line(";");
            }
        }

        /// <summary>
        /// Add an exported constant variable to this TSFile.
        /// </summary>
        /// <param name="variableName">The name of the variable to add.</param>
        /// <param name="variableType">The type of the variable to add.</param>
        /// <param name="valueAction">The action that will be invoked to create the value of the added variable.</param>
        public void ConstVariable(string variableName, string variableType, Action<TSValue> valueAction)
        {
            builder.Text($"const {variableName}: {variableType} = ");
            try
            {
                builder.Value(valueAction);
            }
            finally
            {
                builder.Line(";");
            }
        }

        /// <summary>
        /// Add an exported constant variable to this TSFile.
        /// </summary>
        /// <param name="variableName">The name of the variable to add.</param>
        /// <param name="variableType">The type of the variable to add.</param>
        /// <param name="valueAction">The action that will be invoked to create the value of the added variable.</param>
        public void ConstVariable(string variableName, string variableType, Action<TSObject> valueAction)
        {
            ConstVariable(variableName, variableType, (TSValue tsValue) => tsValue.Object(valueAction));
        }

        /// <summary>
        /// Get the contents of this TSFile.
        /// </summary>
        /// <returns>The contents of this TSFile.</returns>
        public override string ToString()
        {
            return builder.ToString();
        }
    }
}
