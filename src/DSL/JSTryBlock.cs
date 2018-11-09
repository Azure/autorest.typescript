// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;

namespace AutoRest.TypeScript.DSL
{
    public class JSTryBlock : JSBlock
    {
        public JSTryBlock(JSBuilder builder)
            : base(builder)
        {
        }

        public void Catch(string errorName, Action<JSBlock> catchAction)
        {
            builder.Catch(errorName, catchAction);
        }
    }
}
