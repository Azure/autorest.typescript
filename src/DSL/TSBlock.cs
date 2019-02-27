// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

namespace AutoRest.TypeScript.DSL
{
    public class TSBlock : IDisposable
    {
        protected readonly TSBuilder builder;
        private State currentState;

        protected enum State
        {
            Start,
            Statement,
            Comment,
            If,
            Try,
            Threw,
            Returned
        }

        public TSBlock(TSBuilder builder)
        {
            this.builder = builder;
            currentState = State.Start;
        }

        protected void SetCurrentState(State newState)
        {
            switch (currentState)
            {
                case State.Threw:
                    throw new Exception("Once a block has a throw statement emitted, no further statements can be emitted.");

                case State.Returned:
                    throw new Exception("Once a block's return statement has been emitted, no further statements can be emitted.");
            }
            currentState = newState;
        }

        public void Dispose()
        {
        }

        public void Text(string text)
        {
            SetCurrentState(State.Statement);
            builder.Text(text);
        }

        public void Line()
        {
            builder.Line();
        }

        public void Line(string text)
        {
            SetCurrentState(State.Statement);
            builder.Line(text);
        }

        public void LineComment(string text)
        {
            SetCurrentState(State.Comment);
            builder.LineComment(text);
        }

        public void FunctionCall(string functionName, Action<TSArgumentList> argumentListAction)
        {
            SetCurrentState(State.Statement);
            builder.FunctionCall(functionName, argumentListAction);
        }

        public void Indent(Action action)
        {
            builder.Indent(action);
        }

        public void ConstObjectVariable(string variableName, string variableType, Action<TSObject> valueAction)
        {
            SetCurrentState(State.Statement);
            builder.ConstObjectVariable(variableName, variableType, valueAction);
        }

        public void ConstObjectVariable(string variableName, Action<TSObject> valueAction)
        {
            SetCurrentState(State.Statement);
            builder.ConstObjectVariable(variableName, null, valueAction);
        }

        public void ConstObjectVariable(string variableName, string value)
        {
            SetCurrentState(State.Statement);
            builder.ConstObjectVariable(variableName, value);
        }

        public TSIfBlock If(string condition, Action<TSBlock> thenAction)
        {
            SetCurrentState(State.If);
            return builder.If(condition, thenAction);
        }

        public TSTryBlock Try(Action<TSBlock> tryAction)
        {
            SetCurrentState(State.Try);
            return builder.Try(tryAction);
        }

        public void Return(string text)
        {
            Return(value => value.Text(text));
        }

        public void Return(Action<TSValue> returnValueAction)
        {
            SetCurrentState(State.Returned);
            builder.Return(returnValueAction);
        }

        public void Throw(string valueToThrow)
        {
            SetCurrentState(State.Threw);
            builder.Throw(valueToThrow);
        }

        public void Value(Action<TSValue> valueAction)
        {
            builder.Value(valueAction);
        }

        public void Assignment(string variableName, string variableValue) {
            SetCurrentState(State.Statement);
            builder.Assignment(variableName, variableValue);
        }

        public void ThisAssignment(string memberVariableName, string variableValue) {
            SetCurrentState(State.Statement);
            builder.ThisAssignment(memberVariableName, variableValue);
        }
    }
}
