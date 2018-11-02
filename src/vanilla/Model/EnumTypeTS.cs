// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.TypeScript.DSL;
using System.Linq;

namespace AutoRest.TypeScript.Model
{
    public class EnumTypeTS : EnumType
    {
        public string Generate(string emptyLine)
        {
            TSBuilder builder = new TSBuilder();

            builder.DocumentationComment(comment =>
            {
                comment.Description($"Defines values for {Name}.");
                comment.Description(ExtendedDocumentation);
                comment.ReadOnly();
                comment.Enum(CodeNamer.Instance.CamelCase(UnderlyingType.Name));
            });

            builder.ExportUnionType(Name, Values.Select(v => CodeNamerTS.GetEnumValueName(v.SerializedName, UnderlyingType)));

            return builder.ToString();
        }
    }
}
