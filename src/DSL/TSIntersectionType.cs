// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Text;

namespace AutoRest.TypeScript.DSL
{
    public class TSIntersectionType
    {
        private readonly TSBuilder builder;

        private State currentState;
        private enum State
        {
            Start,
            TypeDeclaration
        }

        public TSIntersectionType(TSBuilder builder)
        {
            this.builder = builder;
            currentState = State.Start;
        }

        private void SetCurrentState(State newState)
        {
            switch (currentState)
            {
                case State.TypeDeclaration:
                    builder.Text(" & ");
                    break;
            }
            currentState = newState;
        }

        public void ObjectType(Action<TSObjectType> objectTypeAction)
        {
            SetCurrentState(State.TypeDeclaration);
            builder.Line("{");
            builder.IncreaseIndent();
            objectTypeAction?.Invoke(new TSObjectType(builder));
            builder.DecreaseIndent();
            builder.Text("}");
        }

        public void NamedType(string typeName)
        {
            SetCurrentState(State.TypeDeclaration);
            builder.Text(typeName);
        }
    }
}
