// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Linq;
using AutoRest.Core.Model;
using AutoRest.Extensions.Azure;
using AutoRest.TypeScript.Model;
using Newtonsoft.Json;
using AutoRest.Core.Utilities;

namespace AutoRest.TypeScript.Azure.Model
{

    public class CodeModelTSa : CodeModelTS
    {
        public CodeModelTSa()
            : base()
        {
        }

        public CodeModelTSa(string packageName = "azure-test-client", string packageVersion = "0.1.0")
        {
            PackageName = packageName;
            PackageVersion = packageVersion;
        }

        private string _optionalParameterTypeForClientConstructor;

        [JsonIgnore]
        public override bool IsAzure => true;


        [JsonIgnore]
        public override IEnumerable<CompositeTypeTS> ModelTemplateModels => base.ModelTemplateModels.Concat(PageTemplateModels).Where(each => !PageTemplateModels.Any(ptm => ptm.Name.EqualsIgnoreCase(each.Name)));

        public override string OptionalParameterTypeForClientConstructor
        {
            get
            {
                return _optionalParameterTypeForClientConstructor ?? "AzureServiceClientOptions";
            }

            set
            {
                _optionalParameterTypeForClientConstructor = value;
            }
        }

        public override CompositeType Add(CompositeType item)
        {
            // Removing all models that contain the extension "x-ms-external", as they will be
            // generated in TypeScript client runtime for azure - "ms-rest-azure-js".
            if (item.Extensions.ContainsKey(AzureExtensions.PageableExtension) ||
                item.Extensions.ContainsKey(AzureExtensions.ExternalExtension))
            {
                return null;
            }

            return base.Add(item);
        }

        public IList<PageCompositeTypeTSa> PageTemplateModels { get; set; } = new List<PageCompositeTypeTSa>();

        public override string ConstructRuntimeImportForModelIndex()
        {
            var builder = new IndentedStringBuilder("  ");
            builder.Append("import { BaseResource, CloudError");
            if (OptionalParameterTypeForClientConstructor != "AzureServiceClientOptions")
            {
                builder.Append(", AzureServiceClientOptions");
            }
            builder.Append(" } from \"ms-rest-azure-js\";");
            return builder.ToString();
        }

        public override string PackageDependencies()
        {
            return "\"ms-rest-azure-js\": \"C:/Users/daschult/Sources/ms-rest-azure-js\"";
        }
    }
}