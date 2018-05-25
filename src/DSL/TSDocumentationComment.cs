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
                SetCurrentState(State.Description);
                builder.Line(text);
            }
        }

        public void Parameter(string parameterType, string parameterName, string parameterDocumentation, bool isOptional = false)
        {
            SetCurrentState(State.Parameters);
            builder.Line($"@param {{{parameterType}}} {(isOptional ? '[' + parameterName + ']' : parameterName)} {parameterDocumentation}");
        }

        public void Returns(string returnType, string returnDocumentation)
        {
            SetCurrentState(State.Returns);
            builder.Line($"@returns {{{returnType}}} {returnDocumentation}");
        }

        public void Resolve(string resolveType, string resolveDocumentation)
        {
            SetCurrentState(State.Resolve);
            builder.Line($"@resolve {{{resolveType}}} {resolveDocumentation}");
        }

        public void Reject(string rejectType, string rejectDocumentation)
        {
            SetCurrentState(State.Reject);
            builder.Line($"@reject {{{rejectType}}} {rejectDocumentation}");
        }
    }
}
