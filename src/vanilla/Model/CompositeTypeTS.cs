// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Linq;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.DSL;
using static AutoRest.Core.Utilities.DependencyInjection;

namespace AutoRest.TypeScript.Model
{
    public class CompositeTypeTS : CompositeType
    {
        public CompositeTypeTS()
        {

        }

        public CompositeTypeTS(string name) : base(name)
        {

        }

        public CodeModelTS CodeModelTS => (CodeModelTS) CodeModel;

        public override Property Add(Property item)
        {
            var result = base.Add(item);
            if (result != null)
            {
                AddPolymorphicPropertyIfNecessary();
            }
            return result;
        }

        private IReadOnlyList<CompositeTypeTS> immediatePolymorphicSubtypes;

        /// <summary>Contains the immediate polymorphic children of this class.</summary>
        public IReadOnlyList<CompositeTypeTS> ImmediatePolymorphicSubtypes
        {
            get
            {
                if (immediatePolymorphicSubtypes == null)
                {
                    if (BaseIsPolymorphic)
                    {
                        immediatePolymorphicSubtypes =
                            CodeModel.ModelTypes
                                .Where(m => m.BaseModelType == this)
                                .Cast<CompositeTypeTS>()
                                .ToList()
                                .AsReadOnly();
                    }
                    else
                    {
                        immediatePolymorphicSubtypes = new List<CompositeTypeTS>().AsReadOnly();
                    }
                }
                return immediatePolymorphicSubtypes;
            }
        }

        /// <summary>The name to use when referring to this type in a parameter, return type or property definition.</summary>
        public string UnionTypeName => ImmediatePolymorphicSubtypes.Any() ? Name + "Union" : Name.ToString();

        public string NameAsFileName => Name.EqualsIgnoreCase("index") ? "IndexModelType" : (string)Name;

        public IModelType AdditionalProperties { get; set; }

        public string AdditionalPropertiesTSType()
        {
            string result = "any";
            if (AdditionalProperties != null)
            {
                var type = AdditionalProperties.TSType(true);
                result = type != "any" ? $"{type} | any" : "any";
            }
            return result;
        }

        public string AdditionalPropertiesDocumentation()
        {
            string result = "Describes unknown properties. ";
            if (AdditionalProperties != null)
            {
                var type = AdditionalProperties.TSType(true);
                if (type != "any")
                {
                    result += $"The value of an unknown property MUST be of type \"{type}\". Due to valid TS constraints " +
                        $"we have modeled this as a union of `{type} | any`.";
                }
                else
                {
                    result += "The value of an unknown property can be of \"any\" type.";
                }
            }
            return result;
        }

        /// <summary>
        /// Gets or sets the discriminator property for polymorphic types.
        /// </summary>
        public override string PolymorphicDiscriminator
        {
            get { return base.PolymorphicDiscriminator; }
            set
            {
                base.PolymorphicDiscriminator = value;
                AddPolymorphicPropertyIfNecessary();
            }
        }

        /// <summary>
        /// If PolymorphicDiscriminator is set, makes sure we have a PolymorphicDiscriminator property.
        /// </summary>
        private void AddPolymorphicPropertyIfNecessary()
        {
            if (!string.IsNullOrEmpty(PolymorphicDiscriminator) &&
                Properties.All(p => p.Name != PolymorphicDiscriminator))
            {
                base.Add(New<Core.Model.Property>(new
                {
                    IsRequired = true,
                    Name = this.PolymorphicDiscriminator,
                    SerializedName = this.PolymorphicDiscriminator,
                    Documentation = "Polymorphic Discriminator",
                    ModelType = New<PrimaryType>(KnownPrimaryType.String)
                }));
            }
        }

        public IEnumerable<Property> InterfaceProperties
        {
            get
            {
                IEnumerable<Property> result;
                if (BaseIsPolymorphic)
                {
                    result = ComposedProperties.OrderBy(p => p.IsPolymorphicDiscriminator ? 0 : 1);
                }
                else
                {
                    result = Properties;
                }
                result = result.Where(p => !p.IsConstant);
                return result;
            }
        }


        private class PropertyWrapper
        {
            public Core.Model.Property Property { get; set; }
            public List<string> RecursiveTypes { get; set; }

            public PropertyWrapper() { RecursiveTypes = new List<string>(); }
        }

        public IEnumerable<Property> DocumentationPropertyList
        {
            get
            {
                var traversalStack = new Stack<PropertyWrapper>();
                var visitedHash = new Dictionary<string, PropertyWrapper>();
                var retValue = new Stack<Core.Model.Property>();

                foreach (var property in Properties.Where(p => !p.IsConstant))
                {
                    var tempWrapper = new PropertyWrapper()
                    {
                        Property = property,
                        RecursiveTypes = new List<string> () { Name }
                    };
                    traversalStack.Push(tempWrapper);
                }

                while (traversalStack.Count() != 0)
                {
                    var wrapper = traversalStack.Pop();
                    if (wrapper.Property.ModelType is CompositeType)
                    {
                        if (!visitedHash.ContainsKey(wrapper.Property.Name))
                        {
                            if (wrapper.RecursiveTypes.Contains(wrapper.Property.ModelType.Name))
                            {
                                retValue.Push(wrapper.Property);
                            }
                            else
                            {
                                traversalStack.Push(wrapper);
                                foreach (var subProperty in ((CompositeType)wrapper.Property.ModelType).Properties)
                                {
                                    if (subProperty.IsConstant)
                                    {
                                        continue;
                                    }
                                    var individualProperty = New<Core.Model.Property>();
                                    // used FixedValue to force the string
                                    individualProperty.Name.FixedValue = wrapper.Property.Name + "." + subProperty.Name;
                                    individualProperty.ModelType = subProperty.ModelType;
                                    individualProperty.Documentation = subProperty.Documentation;
                                    //Adding the parent type to recursive list
                                    var recursiveList = new List<string>() { wrapper.Property.ModelType.Name };
                                    if (subProperty.ModelType is CompositeType)
                                    {
                                        //Adding parent's recursive types to the list as well
                                        recursiveList.AddRange(wrapper.RecursiveTypes);
                                    }
                                    var subPropertyWrapper = new PropertyWrapper()
                                    {
                                        Property = individualProperty,
                                        RecursiveTypes = recursiveList
                                    };

                                    traversalStack.Push(subPropertyWrapper);
                                }
                            }

                            visitedHash.Add(wrapper.Property.Name, wrapper);
                        }
                        else
                        {
                            retValue.Push(wrapper.Property);
                        }
                    }
                    else
                    {
                        retValue.Push(wrapper.Property);
                    }
                }

                return retValue.ToList();
            }
        }

        public static string ConstructPropertyDocumentation(string propertyDocumentation)
        {
            var builder = new IndentedStringBuilder("  ");
            return builder.AppendLine(propertyDocumentation).ToString();
        }

        public bool ContainsPropertiesInSequenceType()
        {
            var sample = ComposedProperties.FirstOrDefault(p =>
            p.ModelType is Core.Model.SequenceType ||
            p.ModelType is Core.Model.DictionaryType && (p.ModelType as Core.Model.DictionaryType).ValueType is Core.Model.SequenceType);
            return sample != null;
        }

        public bool ContainsPropertiesInCompositeType()
        {
            var sample = ComposedProperties.FirstOrDefault(p => ContainsCompositeType(p.ModelType));
            return sample != null;
        }

        private bool ContainsCompositeType(IModelType type)
        {
            bool result = false;
            //base condition
            if (type is CompositeType ||
                type is Core.Model.SequenceType && (type as Core.Model.SequenceType).ElementType is CompositeType ||
                type is Core.Model.DictionaryType && (type as Core.Model.DictionaryType).ValueType is CompositeType)
            {
                result = true;
            }
            else if (type is Core.Model.SequenceType)
            {
                result = ContainsCompositeType((type as Core.Model.SequenceType).ElementType);
            }
            else if (type is Core.Model.DictionaryType)
            {
                result = ContainsCompositeType((type as Core.Model.DictionaryType).ValueType);
            }
            return result;
        }

        public bool ContainsDurationProperty()
        {
            Core.Model.Property prop = ComposedProperties.FirstOrDefault(p =>
                (p.ModelType is PrimaryTypeTS && (p.ModelType as PrimaryTypeTS).KnownPrimaryType == KnownPrimaryType.TimeSpan) ||
                (p.ModelType is Core.Model.SequenceType && (p.ModelType as Core.Model.SequenceType).ElementType.IsPrimaryType(KnownPrimaryType.TimeSpan)) ||
                (p.ModelType is Core.Model.DictionaryType && (p.ModelType as Core.Model.DictionaryType).ValueType.IsPrimaryType(KnownPrimaryType.TimeSpan)));
            return prop != null;
        }

        /// <summary>
        /// Returns the TypeScript string to define the specified property, including its type and whether it's optional or not
        /// </summary>
        /// <param name="property">Model property to query</param>
        /// <param name="inModelsModule">Pass true if generating the code for the models module, thus model types don't need a "models." prefix</param>
        /// <returns>TypeScript property definition</returns>
        public string PropertyTS(Core.Model.Property property, bool inModelsModule)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }

            var propertyName = property.Name;
            if (property.IsPolymorphicDiscriminator)
            {
                return $"{propertyName}: \"{SerializedName}\"";
            }

            string typeString = property.ModelType.TSType(inModelsModule);
            if (property.IsReadOnly)
            {
                propertyName = "readonly " + propertyName;
            }

            bool isHeaders = CodeModel?.HeaderTypes.Contains(this) == true;
            bool isOptional = !property.IsRequired && (!isHeaders || CodeModelTS.Settings.OptionalResponseHeaders);
            if (isOptional)
                return propertyName + "?: " + typeString;
            else
                return propertyName + ": " + typeString;
        }

        public virtual void ConstructModelMapper(TSBuilder builder)
        {
            builder.Text($"export const {Name}: msRest.CompositeMapper = ");
            bool isHeaders = CodeModel.HeaderTypes.Contains(this) == true;
            bool isXML = !isHeaders && CodeModel.ShouldGenerateXmlSerialization == true;
            ClientModelExtensions.ConstructMapper(builder, this, SerializedName, null, isPageable: false, expandComposite: true, isXML: isXML, isCaseSensitive: !isHeaders, xmlName: isXML ? XmlName : null);
            builder.Line(";");
        }

        /// <summary>
        /// Provides the property name in the correct jsdoc notation depending on
        /// whether it is required or optional
        /// </summary>
        /// <param name="property">Parameter to be documented</param>
        /// <returns>Parameter name in the correct jsdoc notation</returns>
        public static string GetPropertyDocumentationName(Core.Model.Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }

            return property.IsRequired ? (string) property.Name : $"[{property.Name}]";
        }

        /// <summary>
        /// Provides the property documentation string along with default value if any.
        /// </summary>
        /// <param name="property">Parameter to be documented</param>
        /// <returns>Parameter documentation string along with default value if any
        /// in correct jsdoc notation</returns>
        public static string GetPropertyDocumentationString(Core.Model.Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }

            return property.DefaultValue.IsNullOrEmpty() ?
                $"{property.Summary.EnsureEndsWith(".")} {property.Documentation}".Trim() :
                $"{property.Summary.EnsureEndsWith(".")} {property.Documentation.EnsureEndsWith(".")} Default value: {property.DefaultValue} .".Trim();
        }

        /// <summary>
        /// Provides the type of the property
        /// </summary>
        /// <param name="property">Parameter to be documented</param>
        /// <returns>Parameter name in the correct jsdoc notation</returns>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Globalization", "CA1308:NormalizeStringsToUppercase")]
        public static string GetPropertyDocumentationType(Core.Model.Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }
            string typeName = "object";
            if (property.ModelType is PrimaryTypeTS)
            {
                typeName = property.ModelType.Name;
            }
            else if (property.ModelType is Core.Model.SequenceType)
            {
                typeName = "array";
            }
            else if (property.ModelType is EnumType)
            {
                typeName = "string";
            }

            return typeName.ToLowerInvariant();
        }

        public virtual string Generate()
        {
            TSBuilder builder = new TSBuilder();

            if (ImmediatePolymorphicSubtypes.Any())
            {
                builder.DocumentationComment($"Contains the possible cases for {Name}.");
                List<string> unionTypeValues = new List<string>() { Name };
                unionTypeValues.AddRange(ImmediatePolymorphicSubtypes.Select(m => m.UnionTypeName));
                builder.ExportUnionType($"{Name}Union", unionTypeValues);
                builder.Line();
            }

            builder.DocumentationComment(comment =>
            {
                string description = Documentation;
                if (string.IsNullOrEmpty(description))
                {
                    description = $"An interface representing {Name}.";
                }
                comment.Description(description);
                comment.Summary(Summary);
            });
            string baseTypeName = null;
            if (BaseModelType != null && !BaseIsPolymorphic)
            {
                baseTypeName = BaseModelType.Name;
                if (baseTypeName == "RequestOptionsBase")
                {
                    baseTypeName = $"msRest.{baseTypeName}";
                }
            }
            builder.ExportInterface(Name, baseTypeName, tsInterface =>
            {
                ISet<string> addedPropertyNames = new HashSet<string>();
                
                foreach (Property property in InterfaceProperties)
                {
                    string propertyName = property.Name;
                    if (!addedPropertyNames.Contains(propertyName))
                    {
                        addedPropertyNames.Add(propertyName);

                        string propertyDescription = $"{property.Summary.EnsureEndsWith(".")} {property.Documentation}".Trim();
                        if (!property.DefaultValue.IsNullOrEmpty())
                        {
                            propertyDescription = $"{propertyDescription.EnsureEndsWith(".")} Default value: {property.DefaultValue}.".Trim();
                        }
                        tsInterface.DocumentationComment(propertyDescription);

                        string propertyType = property.IsPolymorphicDiscriminator ? $"\"{SerializedName}\"" : property.ModelType.TSType(true);
                        bool isReadonly = property.IsReadOnly;
                        bool isOptional = !property.IsRequired && (!(CodeModel?.HeaderTypes.Contains(this) == true) || CodeModelTS.Settings.OptionalResponseHeaders);
                        tsInterface.Property(property.Name, propertyType, optional: isOptional, isReadonly: isReadonly);
                    }
                }

                if (AdditionalProperties != null)
                {
                    tsInterface.DocumentationComment(AdditionalPropertiesDocumentation());
                    tsInterface.Property("[property: string]", AdditionalPropertiesTSType());
                }
            });

            return builder.ToString();
        }
    }
}