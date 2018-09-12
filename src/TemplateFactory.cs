// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core;
using AutoRest.TypeScript.Model;

namespace AutoRest.TypeScript
{
    public interface TemplateFactory<TCodeModel> where TCodeModel : CodeModelTS
    {
        Template<TCodeModel> CreateServiceClientTemplate(TCodeModel codeModel);

        Template<TCodeModel> CreateServiceClientContextTemplate(TCodeModel codeModel);

        Template<TCodeModel> CreateModelsIndexTemplate(TCodeModel codeModel);

        Template<TCodeModel> CreateMappersIndexTemplate(TCodeModel codeModel);
    }
}
