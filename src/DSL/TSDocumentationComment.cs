// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

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

        public TSDocumentationComment(TSBuilder builder)
        {
            this.builder = builder;
            previousWordWrapWidth = builder.WordWrapWidth;
        }

        private void SetCurrentState(State newState)
        {
            if (currentState == State.Start)
            {
                builder.Line("/**");
                builder.AddToPrefix(" * ");
                builder.WordWrapWidth = TSBuilder.multiLineCommentWordWrapWidth;
            }
            else
            {
                builder.Line();
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

        public void WithWordWrap(int wordWrapWidth, Action action)
        {
            builder.WithWordWrap(wordWrapWidth, action);
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

        public void Returns(string returnDocumentation)
        {
            SetCurrentState(State.Returns);
            builder.Line($"@returns {returnDocumentation}");
        }
    }
}
