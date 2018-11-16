// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;

namespace AutoRest.TypeScript.DSL
{
    public class JSDocumentationComment : IDisposable
    {
        private readonly JSBuilder builder;
        private readonly int? previousWordWrapWidth;
        private State currentState;

        private enum State
        {
            Start,
            Summary,
            Description,
            Parameters,
            Deprecated,
            Returns,
            Type,
            ReadOnly,
            Enum
        }

        public JSDocumentationComment(JSBuilder builder, int commentWordWrapWidth)
        {
            this.builder = builder;
            previousWordWrapWidth = builder.WordWrapWidth;
            builder.WordWrapWidth = commentWordWrapWidth;
        }

        private void SetCurrentState(State newState)
        {
            if (currentState == State.Start)
            {
                builder.Line("/**");
                builder.AddToPrefix(" * ");
            }
            currentState = newState;
        }

        public void Dispose()
        {
            if (currentState != State.Start)
            {
                builder.WordWrapWidth = previousWordWrapWidth;
                builder.RemoveFromPrefix(" * ");
                builder.Line(" */");
            }
        }

        public void Summary(string text)
        {
            if (!string.IsNullOrEmpty(text))
            {
                SetCurrentState(State.Summary);
                builder.Line($"@summary {text}");
            }
        }

        public void Description(string text)
        {
            if (!string.IsNullOrEmpty(text))
            {
                bool addJSDocTag = currentState != State.Start && currentState != State.Description;
                SetCurrentState(State.Description);
                builder.Line($"{(addJSDocTag ? "@description " : "")}{text}");
            }
        }

        public void Parameter(string parameterName, string parameterType, string parameterDocumentation, bool isOptional = false)
        {
            SetCurrentState(State.Parameters);
            builder.Line($"@param {{{parameterType}}} {(isOptional ? '[' + parameterName + ']' : parameterName)} {parameterDocumentation}");
        }

        public void Parameters(IEnumerable<JSParameter> parameters)
        {
            if (parameters != null)
            {
                foreach (JSParameter parameter in parameters)
                {
                    Parameter(parameter.Name, parameter.Type, parameter.Description, !parameter.Required);
                }
            }
        }

        /// <summary>
        /// Add an @deprecated tag to this comment. If the deprecatedMessage is null, then the tag
        /// will not be added. If the deprecatedMessage is empty or whitespace, then just the
        /// @deprecated tag will be added. Otherwise the @deprecated tag and the message will be
        /// written.
        /// </summary>
        /// <param name="deprecatedMessage">The message to accompany the @deprecated tag.</param>
        public void Deprecated(string deprecatedMessage)
        {
            if (deprecatedMessage != null)
            {
                SetCurrentState(State.Deprecated);
                string text = "@deprecated";
                if (!string.IsNullOrWhiteSpace(deprecatedMessage))
                {
                    text += $" {deprecatedMessage}";
                }
                builder.Line(text);
            }
        }

        public void Returns(string returnType, string returnDocumentation)
        {
            SetCurrentState(State.Returns);
            builder.Line($"@returns {{{returnType}}} {returnDocumentation}");
        }

        public void ReadOnly()
        {
            SetCurrentState(State.ReadOnly);
            builder.Line("@readonly");
        }

        public void Enum(string enumType)
        {
            SetCurrentState(State.Enum);
            builder.Line($"@enum {{{enumType}}}");
        }

        public void Type(string type)
        {
            SetCurrentState(State.Type);
            builder.Line($"@type {{{type}}}");
        }
    }
}
