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
            Returns,
            Resolve,
            Reject
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
                Line("/**");
                builder.AddToPrefix(" * ");
                builder.WordWrapWidth = TSBuilder.multiLineCommentWordWrapWidth;
            }
            else
            {
                Line();
            }
            currentState = newState;
        }

        public void Dispose()
        {
            if (currentState != State.Start)
            {
                builder.WordWrapWidth = previousWordWrapWidth;
                builder.RemoveFromPrefix(" * ");
                Line(" */");
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
                Line($"@summary {text}");
            }
        }

        public void Description(string text)
        {
            if (!string.IsNullOrEmpty(text))
            {
                SetCurrentState(State.Description);
                Line(text);
            }
        }

        public void Parameter(string parameterName, string parameterDocumentation, bool isOptional = false)
        {
            SetCurrentState(State.Parameters);
            Line($"@param {(isOptional ? '[' + parameterName + ']' : parameterName)} {parameterDocumentation}");
        }

        public void Returns(string returnType, string returnDocumentation)
        {
            SetCurrentState(State.Returns);
            Line($"@returns {{{returnType}}} {returnDocumentation}");
        }

        public void Resolve(string resolveType, string resolveDocumentation)
        {
            SetCurrentState(State.Resolve);
            Line($"@resolve {{{resolveType}}} {resolveDocumentation}");
        }

        public void Reject(string rejectType, string rejectDocumentation)
        {
            SetCurrentState(State.Reject);
            Line($"@reject {{{rejectType}}} {rejectDocumentation}");
        }

        public void Line()
        {
            builder.Line();
        }

        public void Line(string text)
        {
            builder.Line(text);
        }
    }
}
