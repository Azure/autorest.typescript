// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

namespace AutoRest.TypeScript.DSL
{
    public class TSEnum
    {
        private readonly TSBuilder builder;

        public TSEnum(TSBuilder builder)
        {
            this.builder = builder;
        }

        public void DocumentationComment(string comment)
        {
            builder.DocumentationComment(comment);
        }

        public void Value(string value)
        {
            builder.Line($"{value},");
        }

        public void Value(string valueName, string valueValue)
        {
            Value($"{valueName} = {valueValue}");
        }
    }
}
