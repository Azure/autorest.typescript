// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

namespace AutoRest.TypeScript.DSL
{
    public class TSInterface
    {
        private readonly TSBuilder builder;

        public TSInterface(TSBuilder builder)
        {
            this.builder = builder;
        }

        public void DocumentationComment(string comment)
        {
            builder.DocumentationComment(comment);
        }

        public void Property(string propertyName, string propertyType, bool optional = false, bool isReadonly = false)
        {
            builder.Line($"{(isReadonly ? "readonly " : "")}{propertyName}{(optional ? "?" : "")}: {propertyType};");
        }
    }
}
