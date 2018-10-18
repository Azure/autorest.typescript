// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using System;
using System.Linq;

namespace AutoRest.TypeScript.Azure.Model
{
    public class PageCompositeTypeTSa : CompositeTypeTS
    {
        public PageCompositeTypeTSa(string nextLinkName, string itemName)
        {
            NextLinkName = nextLinkName;
            ItemName = itemName;
        }

        public string NextLinkName { get; private set; }

        public string ItemName { get; private set; }

        public IModelType ItemType {
            get
            {
                if (Properties == null)
                {
                    return null;
                }
                var property = Properties.FirstOrDefault(p => p.ModelType is SequenceTypeTS);
                if (property != null)
                {
                    return ((SequenceTypeTS)property.ModelType).ElementType;
                }
                else
                {
                    throw new Exception($"The Pageable model {Name} does not contain a single property that is an Array.");
                }
            }
        }

        public string ConstructTSItemTypeName()
        {
            var builder = new IndentedStringBuilder("  ");
            builder.AppendFormat("<{0}>", ClientModelExtensions.TSType(ItemType, true));
            return builder.ToString();
        }

        public override void ConstructModelMapper(TSBuilder builder)
        {
            builder.Text($"export const {Name}: msRest.CompositeMapper = ");
            ClientModelExtensions.ConstructMapper(builder, this, SerializedName, null, isPageable: true, expandComposite: true, isXML: CodeModel?.ShouldGenerateXmlSerialization == true);
            builder.Line(";");
        }
    }
}
