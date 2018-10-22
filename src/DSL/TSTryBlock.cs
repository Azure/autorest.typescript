// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

namespace AutoRest.TypeScript.DSL
{
    public class TSTryBlock : TSBlock
    {
        public TSTryBlock(TSBuilder builder)
            : base(builder)
        {
        }

        public void Catch(string errorName, Action<TSBlock> catchAction)
        {
            builder.Catch(errorName, catchAction);
        }
    }
}
