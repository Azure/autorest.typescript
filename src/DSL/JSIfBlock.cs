// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

namespace AutoRest.TypeScript.DSL
{
    public class JSIfBlock : JSBlock
    {
        public JSIfBlock(JSBuilder builder)
            : base(builder)
        {
        }

        public JSIfBlock ElseIf(string condition, Action<JSBlock> bodyAction)
        {
            return builder.ElseIf(condition, bodyAction);
        }

        public void Else(Action<JSBlock> bodyAction)
        {
            builder.Else(bodyAction);
        }
    }
}
