// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;

namespace AutoRest.TypeScript
{
    /// <summary>
    /// A TypeScript DSL representation for a value. This could be a property value, an argument in
    /// an argument list, or an element in an array.
    /// </summary>
    public class TSValue
    {
        private readonly TSBuilder builder;

        /// <summary>
        /// Create a new TSValue that will emit to the provided TSBuilder.
        /// </summary>
        /// <param name="builder">The TSBuilder this TSValue will emit to.</param>
        public TSValue(TSBuilder builder)
        {
            this.builder = builder;
        }

        /// <summary>
        /// Add a quoted-string to this TSValue.
        /// </summary>
        /// <param name="text">The text to quote and add.</param>
        public virtual void QuotedString(string text)
        {
            builder.QuotedString(text);
        }

        /// <summary>
        /// Add a function call to this TSValue.
        /// </summary>
        /// <param name="functionName">The name of the function.</param>
        /// <param name="argumentListAction">An action that will be invoked to produce the arguments of the function call.</param>
        public virtual void FunctionCall(string functionName, Action<TSArgumentList> argumentListAction)
        {
            builder.FunctionCall(functionName, argumentListAction);
        }

        /// <summary>
        /// Add text to this TSValue.
        /// </summary>
        /// <param name="text">The text to add to this TSValue.</param>
        public virtual void Text(string text)
        {
            builder.Text(text);
        }

        /// <summary>
        /// Add a JSON array to this TSValue.
        /// </summary>
        /// <param name="arrayAction">The action that will be invoked to produce the elements of the JSON array.</param>
        public virtual void Array(Action<TSArray> arrayAction)
        {
            builder.Array(arrayAction);
        }

        /// <summary>
        /// Add a JSON object to this TSValue.
        /// </summary>
        /// <param name="objectAction">The action that will be invoked to produce the properties of the JSON object.</param>
        public virtual void Object(Action<TSObject> objectAction)
        {
            builder.Object(objectAction);
        }

        /// <summary>
        /// Add a boolean value to this TSValue.
        /// </summary>
        /// <param name="value">The boolean value to add to this TSValue.</param>
        public virtual void Boolean(bool value)
        {
            builder.Boolean(value);
        }
    }
}
