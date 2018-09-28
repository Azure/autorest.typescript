// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;

namespace AutoRest.TypeScript.DSL
{
    public class TSDocumentationComment : IDisposable
    {
        private readonly TSBuilder builder;
        private readonly int? previousWordWrapWidth;
        private State currentState;

        private enum State
        {
            Start,
            Summary,
            Description,
            Parameters,
            Returns
        }

        public TSDocumentationComment(TSBuilder builder, int commentWordWrapWidth)
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
                bool isFirstTag = (currentState == State.Start);
                SetCurrentState(State.Description);
                builder.Line($"{(isFirstTag ? "" : "@description ")}{text}");
            }
        }

        public void Parameter(string parameterName, string parameterDocumentation, bool isOptional = false)
        {
            SetCurrentState(State.Parameters);
            builder.Line($"@param {(isOptional ? '[' + parameterName + ']' : parameterName)} {parameterDocumentation}");
        }

        public void Parameters(IEnumerable<TSParameter> parameters)
        {
            if (parameters != null)
            {
                foreach (TSParameter parameter in parameters)
                {
                    Parameter(parameter.Name, parameter.Description, !parameter.Required);
                }
            }
        }

        public void Returns(string returnDocumentation)
        {
            if (!string.IsNullOrEmpty(returnDocumentation))
            {
                SetCurrentState(State.Returns);
                builder.Line($"@returns {returnDocumentation}");
            }
        }
    }
}
