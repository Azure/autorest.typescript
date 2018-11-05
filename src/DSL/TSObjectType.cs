// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

namespace AutoRest.TypeScript.DSL
{
    public class TSObjectType
    {
        private readonly TSBuilder builder;

        private State currentState;
        private enum State
        {
            Start,
            DocumentationComment,
            PropertyDeclaration
        }

        public TSObjectType(TSBuilder builder)
        {
            this.builder = builder;
            currentState = State.Start;
        }

        private void SetCurrentState(State newState)
        {
            switch (currentState)
            {
                case State.PropertyDeclaration:
                    builder.Line();
                    break;
            }
            currentState = newState;
        }

        public void DocumentationComment(params string[] documentationCommentLines)
        {
            if (builder.AnyCommentLines(documentationCommentLines))
            {
                SetCurrentState(State.DocumentationComment);
                builder.DocumentationComment(documentationCommentLines);
            }
        }

        public void Property(string propertyName, string propertyType, bool optional = false, bool readOnly = false)
        {
            SetCurrentState(State.PropertyDeclaration);
            builder.Line($"{(readOnly ? "readonly " : "")}{propertyName}{(optional ? "?" : "")}: {propertyType};");
        }

        public void Property(string propertyName, Action<TSIntersectionType> intersectionTypeAction, bool optional = false)
        {
            SetCurrentState(State.PropertyDeclaration);
            builder.Text($"{propertyName}{(optional ? "?" : "")}: ");
            builder.IncreaseIndent();
            intersectionTypeAction?.Invoke(new TSIntersectionType(builder));
            builder.DecreaseIndent();
            builder.Line(";");
        }

        public void IndexSignature(string propertyType)
        {
            SetCurrentState(State.PropertyDeclaration);
            builder.Line($"[propertyName: string]: {propertyType};");
        }
    }
}
