// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A TypeScript DSL representation for a JSON array.
    /// </summary>
    public class JSArray : IDisposable
    {
        private readonly JSBuilder builder;
        private State currentState = State.Start;

        public enum State
        {
            Start,
            Element
        }

        /// <summary>
        /// Create a new JSON array.
        /// </summary>
        /// <param name="builder">The JSBuilder that this TSArray will emit to.</param>
        public JSArray(JSBuilder builder)
        {
            this.builder = builder;
        }

        private void SetCurrentState(State newState)
        {
            switch (currentState)
            {
                case State.Start:
                    builder.Line();
                    break;

                case State.Element:
                    builder.Line(",");
                    break;

                default:
                    throw new Exception($"Unrecognized current state: {currentState}");
            }
            currentState = newState;
        }

        /// <summary>
        /// Mark the end of this TSArray. If the current state is not Start, then a newline will be added.
        /// </summary>
        public void Dispose()
        {
            if (currentState != State.Start)
            {
                builder.Line();
            }
        }

        /// <summary>
        /// Invoke the provided action to create an element value, and then add the generated value to this TSArray.
        /// </summary>
        /// <param name="valueAction">The action to invoke to add the element's value.</param>
        public void Value(Action<JSValue> valueAction)
        {
            SetCurrentState(State.Element);
            builder.Value(valueAction);
        }

        /// <summary>
        /// Add an element to this TSArray with the provided boolean value.
        /// </summary>
        /// <param name="value">The boolean value to add.</param>
        public void Boolean(bool value)
        {
            Value(tsValue => tsValue.Boolean(value));
        }

        /// <summary>
        /// Add an element to this TSArray with the provided text value.
        /// </summary>
        /// <param name="value">The text value to add.</param>
        public void Text(string value)
        {
            Value(tsValue => tsValue.Text(value));
        }

        /// <summary>
        /// Add an element to this TSArray with the provided quoted-string value.
        /// </summary>
        /// <param name="value">The value to quote and then add.</param>
        public void QuotedString(string value)
        {
            Value(tsValue => tsValue.QuotedString(value));
        }

        /// <summary>
        /// Invoke the provided action to create an element object, and then add the generated object to this TSArray.
        /// </summary>
        /// <param name="valueAction">The action to invoke to add the element's value.</param>
        public void Object(Action<JSObject> valueAction)
        {
            Value(tsValue => tsValue.Object(valueAction));
        }
    }
}
