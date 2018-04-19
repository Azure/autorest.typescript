// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using System;

namespace AutoRest.TypeScript
{
    /// <summary>
    /// The TypeScript DSL representation for adding arguments to a function call's argument list.
    /// </summary>
    public class TSArgumentList : TSValue
    {
        private bool hasArguments;

        /// <summary>
        /// Create a new TSArgumentList that will emit text to the provided TSBuilder.
        /// </summary>
        /// <param name="builder">The TSBuilder to emit text to.</param>
        public TSArgumentList(TSBuilder builder)
            : base(builder)
        {
        }

        /// <summary>
        /// Perform any necessary actions before an argument is added to this argument list.
        /// </summary>
        private void BeforeArgumentAdded()
        {
            if (hasArguments)
            {
                base.Text(", ");
            }
            else
            {
                hasArguments = true;
            }
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
        public override void FunctionCall(string functionName, Action<TSArgumentList> argumentListAction)
        {
            BeforeArgumentAdded();
            base.FunctionCall(functionName, argumentListAction);
        }

        /// <summary>
        /// Add an object argument to this argument list.
        /// </summary>
        /// <param name="objectAction">The action that will be used to populate the properties of the object.</param>
        public override void Object(Action<TSObject> objectAction)
        {
            BeforeArgumentAdded();
            base.Object(objectAction);
        }
    }
}
