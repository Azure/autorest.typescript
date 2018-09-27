// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;
using System.Collections.Generic;

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
            PropertyDeclaration,
            MethodOverload,
            Method
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

        public void DocumentationComment(Action<TSDocumentationComment> commentAction)
        {
            if (commentAction != null)
            {
                SetCurrentState(State.DocumentationComment);
                builder.DocumentationComment(commentAction);
            }
        }

        public void PublicProperty(string propertyName, string propertyType, bool optional = false)
        {
            SetCurrentState(State.PropertyDeclaration);
            builder.Line($"public {propertyName}{(optional ? "?" : "")}: {propertyType};");
        }

        public void Line(string text)
        {
            builder.Line(text);
        }

        public void MethodOverload(string methodName, string returnType, string parameterList)
        {
            SetCurrentState(State.MethodOverload);
            builder.MethodOverload(methodName, returnType, parameterList);
        }

        public void MethodOverload(string methodName, string returnType, Action<TSParameterList> parameterListAction)
        {
            string parameterListString = ParameterListActionToString(parameterListAction);
            MethodOverload(methodName, returnType, parameterListString);
        }

        public void MethodOverload(string methodName, string returnType, IEnumerable<TSParameter> parameters)
        {
            MethodOverload(methodName, returnType, parameterList => parameterList.Parameters(parameters));
        }

        public void Method(string methodName, string returnType, string parameterList, Action<TSBlock> methodBodyAction)
        {
            SetCurrentState(State.Method);
            builder.Method(methodName, returnType, parameterList, methodBodyAction);
        }

        public void Method(string methodName, string returnType, Action<TSParameterList> parameterListAction, Action<TSBlock> methodBodyAction)
        {
            string parameterListString = ParameterListActionToString(parameterListAction);
            Method(methodName, returnType, parameterListString, methodBodyAction);
        }

        public void Method(string methodName, string returnType, IEnumerable<TSParameter> parameters, Action<TSBlock> methodBodyAction)
        {
            Method(methodName, returnType, parameterList => parameterList.Parameters(parameters), methodBodyAction);
        }

        private static string ParameterListActionToString(Action<TSParameterList> parameterListAction)
        {
            string parameterListString = null;
            if (parameterListAction != null)
            {
                TSBuilder parameterListBuilder = new TSBuilder();
                TSParameterList parameterList = new TSParameterList(parameterListBuilder);
                parameterListAction(parameterList);
                parameterListString = parameterListBuilder.ToString();
            }
            return parameterListString;
        }
    }
}
