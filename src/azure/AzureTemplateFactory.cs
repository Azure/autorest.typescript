// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core;
using AutoRest.TypeScript.azure.Templates;
using AutoRest.TypeScript.Azure.Model;

namespace AutoRest.TypeScript
{
    public class AzureTemplateFactory : TemplateFactoryBase<CodeModelTSa>
    {
        public override Template<CodeModelTSa> CreateServiceClientTemplate(CodeModelTSa codeModel)
        {
            return new AzureServiceClientTemplate { Model = codeModel };
        }
        public override Template<CodeModelTSa> CreateServiceClientContextTemplate(CodeModelTSa codeModel)
        {
            return new AzureServiceClientContextTemplate { Model = codeModel };
        }

        public override Template<CodeModelTSa> CreateModelsIndexTemplate(CodeModelTSa codeModel)
        {
            return new AzureModelIndexTemplate { Model = codeModel };
        }

        public override Template<CodeModelTSa> CreateMappersIndexTemplate(CodeModelTSa codeModel)
        {
            return new AzureMapperIndexTemplate { Model = codeModel };
        }
    }
}
