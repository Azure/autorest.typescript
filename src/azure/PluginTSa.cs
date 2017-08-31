using AutoRest.Core;
using AutoRest.Core.Extensibility;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Azure.Model;
using AutoRest.TypeScript.Model;
using static AutoRest.Core.Utilities.DependencyInjection;

namespace AutoRest.TypeScript.Azure
{
    public sealed class PluginTSa : Plugin<GeneratorSettingsTS, TransformerTSa, CodeGeneratorTSa, CodeNamerTS, CodeModelTSa>
    {
        public PluginTSa()
        {
            Context = new Context
            {
                // inherit base settings
                Context,

                // set code model implementations our own implementations 
                new Factory<CodeModel, CodeModelTSa>(),
                new Factory<Method, MethodTSa>(),
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