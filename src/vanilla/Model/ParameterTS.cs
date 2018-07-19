// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System.Collections.Generic;
using System.Linq;
using AutoRest.Core;
using AutoRest.Core.Model;
using Newtonsoft.Json;

namespace AutoRest.TypeScript.Model
{
    public class ParameterTS : Parameter
    {
        public ParameterTS() {}

        public MethodTS MethodTS => (MethodTS) Method;

        private string _mapperName;
        /// <summary>
        /// The name of this parameter's mapper.
        /// May differ from the parameter's actual name for disambiguation.
        /// </summary>
        public string MapperName
        {
            get
            {
                return _mapperName ?? Name;
            }
            set
            {
                _mapperName = value;
            }
        }
    }
}