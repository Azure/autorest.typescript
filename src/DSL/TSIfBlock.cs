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
            return builder.ElseIf(condition, bodyAction);
        }

        public void Else(Action<TSBlock> bodyAction)
        {
            builder.Else(bodyAction);
        }
    }
}
