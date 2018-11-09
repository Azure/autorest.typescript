// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;
using System.Collections.Generic;

namespace AutoRest.TypeScript.DSL
{
    public class JSClass
    {
        private readonly JSBuilder builder;
        private State currentState;
        
        private enum State
        {
            Start,
            DocumentationComment,
            PropertyDeclaration,
            MethodOverload,
            Method
        }

        public JSClass(JSBuilder builder)
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

                case State.Method:
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

        public void DocumentationComment(Action<JSDocumentationComment> commentAction)
        {
            if (commentAction != null)
            {
                SetCurrentState(State.DocumentationComment);
                builder.DocumentationComment(commentAction);
            }
        }

        public void Line(string text)
        {
            builder.Line(text);
        }

        public void Method(string methodName, string parameterList, Action<JSBlock> methodBodyAction)
        {
            SetCurrentState(State.Method);
            builder.Method(methodName, parameterList, methodBodyAction);
        }

        public void Method(string methodName, Action<JSParameterList> parameterListAction, Action<JSBlock> methodBodyAction)
        {
            string parameterListString = ParameterListActionToString(parameterListAction);
            Method(methodName, parameterListString, methodBodyAction);
        }

        public void Method(string methodName, IEnumerable<JSParameter> parameters, Action<JSBlock> methodBodyAction)
        {
            Method(methodName, parameterList => parameterList.Parameters(parameters), methodBodyAction);
        }

        private static string ParameterListActionToString(Action<JSParameterList> parameterListAction)
        {
            string parameterListString = null;
            if (parameterListAction != null)
            {
                JSBuilder parameterListBuilder = new JSBuilder();
                JSParameterList parameterList = new JSParameterList(parameterListBuilder);
                parameterListAction(parameterList);
                parameterListString = parameterListBuilder.ToString();
            }
            return parameterListString;
        }
    }
}
