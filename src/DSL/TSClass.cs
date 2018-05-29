// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

namespace AutoRest.TypeScript.DSL
{
    public class TSClass
    {
        private readonly TSBuilder builder;
        private State currentState;
        
        private enum State
        {
            Start,
            DocumentationComment,
            PropertyDeclaration
        }

        public TSClass(TSBuilder builder)
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

        public void PublicProperty(string propertyName, string propertyType, bool optional = false)
        {
            SetCurrentState(State.PropertyDeclaration);
            builder.Line($"public {propertyName}{(optional ? "?" : "")}: {propertyType};");
        }
    }
}
