// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// The TypeScript DSL representation for adding arguments to a function call's argument list.
    /// </summary>
    public class JSArgumentList : JSValue, IDisposable
    {
        private List<BuilderPosition> argumentPositions;

        /// <summary>
        /// Create a new TSArgumentList that will emit text to the provided JSBuilder.
        /// </summary>
        /// <param name="builder">The JSBuilder to emit text to.</param>
        public JSArgumentList(JSBuilder builder)
            : base(builder)
        {
            argumentPositions = new List<BuilderPosition>();
        }

        public void Dispose()
        {
            if (argumentPositions.Count >= 2)
            {
                int firstArgumentPositionIndex = argumentPositions.First().GetIndexInBuilder();
                if (HasChangedLinesSince(firstArgumentPositionIndex))
                {
                    foreach (BuilderPosition argumentPosition in argumentPositions)
                    {
                        InsertNewLine(argumentPosition.GetIndexInBuilder());
                    }
                    AddIndentToLinesAfter(firstArgumentPositionIndex);
                }
                else
                {
                    foreach (BuilderPosition argumentPosition in argumentPositions.Skip(1))
                    {
                        Insert(argumentPosition.GetIndexInBuilder(), " ");
                    }
                }
            }
        }

        /// <summary>
        /// Perform any necessary actions before an argument is added to this argument list.
        /// </summary>
        private void BeforeArgumentAdded()
        {
            if (argumentPositions.Any())
            {
                base.Text(",");
            }
            argumentPositions.Add(CreatePosition());
        }

        /// <summary>
        /// Add a quoted-string argument to this argument list.
        /// </summary>
        /// <param name="text">The text that will be wrapped in double-quotes and then added.</param>
        public override void QuotedString(string text)
        {
            BeforeArgumentAdded();
            base.QuotedString(text);
        }

        /// <summary>
        /// Add a function call argument to this argument list.
        /// </summary>
        /// <param name="functionName">The name of the function to invoke.</param>
        /// <param name="argumentListAction">The action that will be used to populate the arguments of the function call.</param>
        public override void FunctionCall(string functionName, Action<JSArgumentList> argumentListAction)
        {
            BeforeArgumentAdded();
            base.FunctionCall(functionName, argumentListAction);
        }

        /// <summary>
        /// Add a text (not a quoted-string) argument to this argument list.
        /// </summary>
        /// <param name="text">The raw text argument to add.</param>
        public override void Text(string text)
        {
            BeforeArgumentAdded();
            base.Text(text);
        }

        /// <summary>
        /// Add a JSON array to this TSValue.
        /// </summary>
        /// <param name="arrayAction">The action that will be invoked to produce the elements of the JSON array.</param>
        public override void Array(Action<JSArray> arrayAction)
        {
            BeforeArgumentAdded();
            base.Array(arrayAction);
        }

        /// <summary>
        /// Add an object argument to this argument list.
        /// </summary>
        /// <param name="objectAction">The action that will be used to populate the properties of the object.</param>
        public override void Object(Action<JSObject> objectAction = null)
        {
            BeforeArgumentAdded();
            base.Object(objectAction);
        }

        /// <summary>
        /// Add a boolean value to this TSValue.
        /// </summary>
        /// <param name="value">The boolean value to add to this TSValue.</param>
        public override void Boolean(bool value)
        {
            BeforeArgumentAdded();
            base.Boolean(value);
        }

        /// <summary>
        /// Add a null value to this TSValue.
        /// </summary>
        public override void Null()
        {
            BeforeArgumentAdded();
            base.Null();
        }

        /// <summary>
        /// Add an undefined value to this TSValue.
        /// </summary>
        public override void Undefined()
        {
            BeforeArgumentAdded();
            base.Undefined();
        }

        /// <summary>
        /// Add a lambda to this TSArgumentList.
        /// </summary>
        public override void Lambda(string paramName, Action<JSBlock> lambdaBodyAction)
        {
            BeforeArgumentAdded();
            base.Lambda(paramName, lambdaBodyAction);
        }
    }
}
