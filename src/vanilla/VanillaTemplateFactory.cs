// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core;
using AutoRest.TypeScript.Model;
using AutoRest.TypeScript.vanilla.Templates;

namespace AutoRest.TypeScript
{
    public class VanillaTemplateFactory : TemplateFactory<CodeModelTS>
    {
        public override Template<CodeModelTS> CreateServiceClientTemplate(CodeModelTS codeModel)
        {
            return new ServiceClientTemplate { Model = codeModel };
        }

        public override Template<CodeModelTS> CreateServiceClientContextTemplate(CodeModelTS codeModel)
        {
            return new ServiceClientContextTemplate { Model = codeModel };
        }

        public override Template<CodeModelTS> CreateModelsIndexTemplate(CodeModelTS codeModel)
        {
            return new ModelIndexTemplate { Model = codeModel };
        }

        public override Template<CodeModelTS> CreateMappersIndexTemplate(CodeModelTS codeModel)
        {
            return new MapperIndexTemplate { Model = codeModel };
        }

        public override Template<MethodGroupTS> CreateMethodGroupTemplate(MethodGroupTS methodGroup)
        {
            return new MethodGroupTemplate { Model = methodGroup };
        }

        public override Template<CodeModelTS> CreateReadmeTemplate(CodeModelTS codeModel)
        {
            return new ReadmeTemplate { Model = codeModel };
        }
    }
}
