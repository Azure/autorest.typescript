// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Linq;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using Newtonsoft.Json;

namespace AutoRest.TypeScript.Model
{
    public class MethodGroupTS : MethodGroup
    {
        protected MethodGroupTS() : base()
        {
        }

        protected MethodGroupTS(string name): base(name)
        {
        }
        
        [JsonIgnore]
        public IEnumerable<MethodTS> MethodTemplateModels => Methods.Cast<MethodTS>();

        [JsonIgnore]
        public bool ContainsTimeSpan
        {
            get
            {
                Method method = MethodTemplateModels.FirstOrDefault(m => m.Parameters.FirstOrDefault(p =>
                    p.ModelType.IsPrimaryType(KnownPrimaryType.TimeSpan) ||
                    (p.ModelType is Core.Model.SequenceType && (p.ModelType as Core.Model.SequenceType).ElementType.IsPrimaryType(KnownPrimaryType.TimeSpan)) ||
                    (p.ModelType is Core.Model.DictionaryType && (p.ModelType as Core.Model.DictionaryType).ValueType.IsPrimaryType(KnownPrimaryType.TimeSpan))) != null);
                return  method != null;
            }
        }

        public bool ContainsCompositeOrEnumTypeInParametersOrReturnType()
        {
            bool result = false;
            foreach(var method in MethodTemplateModels)
            {
                var parametersToBeScanned = method.LocalParameters.Where(l => l.IsRequired);
                if (!method.OptionsParameterModelType.Name.EqualsIgnoreCase("RequestOptionsBase"))
                {
                    result = true;
                    break;
                }
                result = parametersToBeScanned.Any(p => p.ModelType.IsCompositeOrEnumType());

                if (result)
                    break;
            }
            if (!result)
                result = MethodTemplateModels.Any(m => m.ReturnType.Body.IsCompositeOrEnumType());
            return result;
        }
    }
}