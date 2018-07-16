// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A TypeScript DSL representation for a JSON object.
    /// </summary>
    public class TSObject : IDisposable
    {
        private readonly TSBuilder builder;
        private string propertyBeingConstructed;
        private State currentState = State.Start;
        private IList<string> propertyNames = new List<string>();

        private enum State
        {
            Start,
            LineComment,
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

                case State.LineComment:
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
        /// Get whether or not a property with the provided propertyName has already been added to this TSObject.
        /// </summary>
        /// <param name="propertyName">The name of the property to check.</param>
        public bool ContainsProperty(string propertyName)
        {
            return propertyNames.Contains(propertyName);
        }

        /// <summary>
        /// Add a line comment to this TSObject.
        /// </summary>
        /// <param name="line">The line to add as a line comment to this TSObject.</param>
        public void LineComment(string line)
        {
            SetCurrentState(State.LineComment);
            builder.LineComment(line);
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

        private bool PropertyNameNeedsToBeQuoted(string propertyName)
        {
            return propertyName.Contains(".");
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name. The provided action will be invoked to populate the value of this property.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValueAction">The action to invoke to add the property's value.</param>
        public void Property(string propertyName, Action<TSValue> propertyValueAction)
        {
            if (!string.IsNullOrEmpty(propertyBeingConstructed))
            {
                throw new InvalidOperationException($"Cannot add a property to a TSObject while constructing its child property (\"{propertyBeingConstructed}\").");
            }

            SetCurrentState(State.Property);
            if (PropertyNameNeedsToBeQuoted(propertyName))
            {
                builder.QuotedString(propertyName);
            }
            else
            {
                builder.Text(propertyName);
            }
            builder.Text(": ");
            propertyBeingConstructed = propertyName;
            try
            {
                builder.Value(propertyValueAction);
            }
            finally
            {
                propertyBeingConstructed = null;
            }

            propertyNames.Add(propertyName);
        }

        /// <summary>
        /// Spreads the properties of the given object expression into this TSObject.
        /// </summary>
        /// <param name="objectExpression">The object expression to spread in this object.</param>
        public void Spread(string objectExpression)
        {
            SetCurrentState(State.Property);
            builder.Text("...");
            builder.Text(objectExpression);
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name and null value.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        public void NullProperty(string propertyName)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.Null());
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name and boolean value.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValue">The boolean value of the new property.</param>
        public void BooleanProperty(string propertyName, bool propertyValue)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.Boolean(propertyValue));
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name and text value. The text value will not be quoted.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValue">The text value of the new property. This value will not be quoted.</param>
        public void TextProperty(string propertyName, string propertyValue)
        {
            if (!PropertyNameNeedsToBeQuoted(propertyName) && propertyName == propertyValue)
            {
                SetCurrentState(State.Property);
                builder.Text(propertyName);
                propertyNames.Add(propertyName);
            }
            else
            {
                Property(propertyName, (TSValue tsValue) => tsValue.Text(propertyValue));
            }
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name and text value. The text value will be quoted.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValue">The text value of the new property. This value will be quoted.</param>
        public void QuotedStringProperty(string propertyName, string propertyValue)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.QuotedString(propertyValue));
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name and quoted string[] values.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValue">The quoted string[] values of the new property.</param>
        public void QuotedStringArrayProperty(string propertyName, string[] propertyValue)
        {
            ArrayProperty(propertyName, (TSArray tsArray) =>
            {
                foreach (string propertyValueElement in propertyValue)
                {
                    tsArray.QuotedString(propertyValueElement);
                }
            });
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name. The provided action will be invoked to populate the array value of this property.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValueAction">The action to invoke to add the property's array value.</param>
        public void ArrayProperty(string propertyName, Action<TSArray> propertyValueAction)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.Array(propertyValueAction));
        }

        /// <summary>
        /// Add a property to this TSObject with the provided name. The provided action will be invoked to populate the object value of this property.
        /// </summary>
        /// <param name="propertyName">The name of the new property.</param>
        /// <param name="propertyValueAction">The action to invoke to add the property's object value.</param>
        public void ObjectProperty(string propertyName, Action<TSObject> propertyValueAction)
        {
            Property(propertyName, (TSValue tsValue) => tsValue.Object(propertyValueAction));
        }
    }
}
