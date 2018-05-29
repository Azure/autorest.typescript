// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

namespace AutoRest.TypeScript.DSL
{
    public class TSIfBlock : TSBlock
    {
        public TSIfBlock(TSBuilder builder)
            : base(builder)
        {
        }

        public TSIfBlock ElseIf(string condition, Action<TSBlock> bodyAction)
        {
            builder.Line($" else if ({condition}) {{");
            builder.Indent(() =>
            {
                using (TSBlock block = new TSBlock(builder))
                {
                    bodyAction.Invoke(block);
                }
            });
            builder.Text($"}}");
            return new TSIfBlock(builder);
        }

        public void Else(Action<TSBlock> bodyAction)
        {
            builder.Line($" else {{");
            builder.Indent(() =>
            {
                using (TSBlock block = new TSBlock(builder))
                {
                    bodyAction.Invoke(block);
                }
            });
            builder.Text($"}}");
            SetCurrentState(State.Statements);
        }
    }
}
