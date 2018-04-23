// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;

namespace AutoRest.TypeScript
{
    /// <summary>
    /// A TypeScript DSL representation for a JSON object.
    /// </summary>
    public class TSObject : IDisposable
    {
        private readonly TSBuilder builder;
        private State currentState = State.Start;

        public enum State
        {
            Start,
            BlockComment,
            Property
        }

        /// <summary>
        /// Create a new JSON object.
        /// </summary>
        /// <param name="builder">The TSBuilder that this TSObject will emit to.</param>
        public TSObject(TSBuilder builder)
        {
            this.builder = builder;
        }

        /// <summary>
        /// Set the current state of this TSObject. Changing the state may add "\n" or ",\n".
        /// </summary>
        /// <param name="value"></param>
        private void SetCurrentState(State value)
        {
            switch (currentState)
            {
                case State.Start:
                    builder.Line();
                    break;

                case State.BlockComment:
                    break;

                case State.Property:
                    builder.Line(",");
                    break;

                default:
                    throw new Exception($"Unrecognized current state: {currentState}");
            }

            currentState = value;
        }

        /// <summary>
        /// Add a documentation comment to this TSObject. If no non-null lines are provided, then nothing will be added.
        /// </summary>
        /// <param name="lines">The lines of text to add to the documentation comment.</param>
        public void DocumentationComment(params string[] lines)
        {
            if (builder.AnyCommentLines(lines))
            {
                SetCurrentState(State.BlockComment);
                builder.DocumentationComment(lines);
            }
        }

        /// <summary>
        /// Mark the end of this TSObject. If the current state is not Start, then a newline will be added.
        /// </summary>
        public void Dispose()
        {
            if (currentState != State.Start)
            {
                builder.Line();
            }
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name. The provided action will be invoked to populate the value of this property.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValueAction">The action to invoke to add the property's value.</param>
        public void Property(string propertyName, Action<TSValue> propertyValueAction)
        {
            SetCurrentState(State.Property);
            builder.Text($"{propertyName}: ");
            propertyValueAction.Invoke(new TSValue(builder));
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name and boolean value.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValue">The boolean value of the new property.</param>
        public void Property(string propertyName, bool propertyValue)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.Boolean(propertyValue));
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name and text value. The text value will not be quoted.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValue">The text value of the new property. This value will not be quoted.</param>
        public void Property(string propertyName, string propertyValue)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.Text(propertyValue));
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name. The provided action will be invoked to populate the array value of this property.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValueAction">The action to invoke to add the property's array value.</param>
        public void Property(string propertyName, Action<TSArray> propertyValueAction)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.Array(propertyValueAction));
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name. The provided action will be invoked to populate the object value of this property.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValueAction">The action to invoke to add the property's object value.</param>
        public void Property(string propertyName, Action<TSObject> propertyValueAction)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.Object(propertyValueAction));
        }
    }
}
