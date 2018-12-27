// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core;
using AutoRest.TypeScript.Model;

namespace AutoRest.TypeScript
{
    public abstract class TemplateFactory<TCodeModel> where TCodeModel : CodeModelTS
    {
        public abstract Template<TCodeModel> CreateServiceClientContextTemplate(TCodeModel codeModel);

        public abstract Template<TCodeModel> CreateServiceClientTemplate(TCodeModel codeModel);
    }
}
