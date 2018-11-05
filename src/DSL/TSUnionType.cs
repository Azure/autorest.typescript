// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

namespace AutoRest.TypeScript.DSL
{
    public class TSUnionType
    {
        private readonly TSBuilder builder;

        private State currentState;
        private enum State
        {
            Start,
            TypeDeclaration
        }

        public TSUnionType(TSBuilder builder)
        {
            this.builder = builder;
            currentState = State.Start;
        }

        private void SetCurrentState(State newState)
        {
            switch (currentState)
            {
                case State.TypeDeclaration:
                    builder.Text(" | ");
                    break;
            }
            currentState = newState;
        }

        public void Text(string text)
        {
            SetCurrentState(State.TypeDeclaration);
            builder.Text(text);
        }

        public void QuotedString(string text)
        {
            SetCurrentState(State.TypeDeclaration);
            builder.QuotedString(text);
        }
    }
}
