// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

using AutoRest.Core;
using AutoRest.Core.Extensibility;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Model;
using static AutoRest.Core.Utilities.DependencyInjection;

namespace AutoRest.TypeScript
{
    public sealed class PluginTS : Plugin<GeneratorSettingsTS, TransformerTS, CodeGeneratorTS, CodeNamerTS, CodeModelTS>
    {
        public PluginTS()
        {
            Context = new Context
            {
                // inherit base settings
                Context,

                // set code model implementations our own implementations 
                new Factory<CodeModel, CodeModelTS>(),
                new Factory<Method, MethodTS>(),
                new Factory<CompositeType, CompositeTypeTS>(),
                new Factory<Property, PropertyTS>(),
                new Factory<Parameter, ParameterTS>(),
                new Factory<DictionaryType, DictionaryTypeTS>(),
                new Factory<SequenceType, SequenceTypeTS>(),
                new Factory<MethodGroup, MethodGroupTS>(),
                new Factory<EnumType, EnumType>(),
                new Factory<PrimaryType, PrimaryTypeTS>()
            };
        }
    }
}