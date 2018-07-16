// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core;
using AutoRest.Core.Model;

namespace AutoRest.TypeScript.Model
{
    public class EnumTypeTS : EnumType
    {
        protected override string ModelAsStringType => "string";
        public string EnumName => CodeNamer.Instance.PascalCase(Name);
    }
}
