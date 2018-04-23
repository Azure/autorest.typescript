// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.TypeScript.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace AutoRest.TypeScript
{
    /// <summary>
    /// The collection of functions that are responsible for creating the TypeSpec index file (typeSpecs.ts).
    /// </summary>
    public static class TypeSpecIndexGenerator
    {
        /// <summary>
        /// Create the TypeSpec index file (typeSpecs.ts) for the provided CodeModel.
        /// </summary>
        /// <param name="codeModel">The CodeModel to create a TypeSpec index file for.</param>
        /// <returns>The TypeSpec index file.</returns>
        public static TSFile Generate(CodeModelTS codeModel)
        {
            bool isXML = (codeModel.ShouldGenerateXmlSerialization == true);

            TSFile tsFile = new TSFile(Path.Combine("models", "typeSpecs.ts"));

            tsFile.Comment(Settings.Instance.Header);
            tsFile.Line();

            CompositeType[] orderedModelTemplateModels = codeModel.OrderedModelTemplateModels.ToArray();

            IDictionary<CompositeType, IList<CompositeType>> derivedTypes = new Dictionary<CompositeType, IList<CompositeType>>();
            foreach (CompositeType compositeType in orderedModelTemplateModels)
            {
                CompositeType baseModelType = compositeType.BaseModelType;
                if (baseModelType != null)
                {
                    if (!derivedTypes.ContainsKey(baseModelType))
                    {
                        derivedTypes.Add(baseModelType, new List<CompositeType>());
                    }
                    derivedTypes[baseModelType].Add(compositeType);
                }
            }

            tsFile.Import(GetTypeSpecImports(orderedModelTemplateModels));

            ISet<CompositeType> generatedModelTypes = new HashSet<CompositeType>();
            foreach (CompositeTypeTS compositeType in orderedModelTemplateModels)
            {
                tsFile.Line();

                tsFile.DocumentationComment(compositeType.Summary, compositeType.Documentation);
                tsFile.ExportConstVariable(compositeType.Name, "CompositeTypeSpec", tsValue =>
                {
                    GenerateTypeSpec(tsValue, compositeType, generatedModelTypes, derivedTypes, isXML, isTopLevelCompositeSpec: true);
                });

                generatedModelTypes.Add(compositeType);
            }

            return tsFile;
        }

        /// <summary>
        /// Get the ms-rest-js TypeSpec imports for the provided composite types.
        /// </summary>
        /// <param name="compositeTypes">The collection of composite types to get imports for.</param>
        /// <returns>The collection of imports required by the provided composite types.</returns>
        private static IEnumerable<string> GetTypeSpecImports(IEnumerable<CompositeType> compositeTypes)
        {
            ISet<string> imports = new HashSet<string>();
            ISet<IModelType> visitedTypes = new HashSet<IModelType>();
            foreach (CompositeType compositeType in compositeTypes)
            {
                GetTypeSpecImports(imports, visitedTypes, compositeType);
            }
            return imports;
        }

        /// <summary>
        /// Add the types that need to be imported for the provided IModelType to the provided imports ISet.
        /// </summary>
        /// <param name="imports">The ISet of imports to add to.</param>
        /// <param name="visitedTypes">The IModelTypes that have already been visited (to avoid infinite recursion).</param>
        /// <param name="type">The type to add inputs for.</param>
        private static void GetTypeSpecImports(ISet<string> imports, ISet<IModelType> visitedTypes, IModelType type)
        {
            if (!visitedTypes.Contains(type))
            {
                visitedTypes.Add(type);

                if (type is CompositeType compositeType)
                {
                    imports.Add("compositeSpec");
                    imports.Add("CompositeTypeSpec");

                    foreach (Property property in compositeType.ComposedProperties)
                    {
                        GetTypeSpecImports(imports, visitedTypes, property.ModelType);
                    }
                }
                else if (type is DictionaryType dictionaryType)
                {
                    imports.Add("dictionarySpec");
                    GetTypeSpecImports(imports, visitedTypes, dictionaryType.ValueType);
                }
                else if (type is SequenceType sequenceType)
                {
                    imports.Add("sequenceSpec");
                    GetTypeSpecImports(imports, visitedTypes, sequenceType.ElementType);
                }
                else if (type is EnumType enumType)
                {
                    if (enumType.ModelAsString)
                    {
                        imports.Add("stringSpec");
                    }
                    else
                    {
                        imports.Add("enumSpec");
                    }
                }
                else if (type is PrimaryType primaryType)
                {
                    switch (primaryType.KnownPrimaryType)
                    {
                        case KnownPrimaryType.Base64Url:
                            imports.Add("base64UrlSpec");
                            break;

                        case KnownPrimaryType.Boolean:
                            imports.Add("booleanSpec");
                            break;

                        case KnownPrimaryType.ByteArray:
                            imports.Add("byteArraySpec");
                            break;

                        case KnownPrimaryType.Double:
                        case KnownPrimaryType.Int:
                        case KnownPrimaryType.Long:
                        case KnownPrimaryType.Decimal:
                            imports.Add("numberSpec");
                            break;

                        case KnownPrimaryType.Stream:
                            imports.Add("streamSpec");
                            break;

                        case KnownPrimaryType.String:
                            imports.Add("stringSpec");
                            break;

                        case KnownPrimaryType.Date:
                            imports.Add("dateSpec");
                            break;

                        case KnownPrimaryType.DateTime:
                            imports.Add("dateTimeSpec");
                            break;

                        case KnownPrimaryType.DateTimeRfc1123:
                            imports.Add("dateTimeRfc1123Spec");
                            break;

                        case KnownPrimaryType.Object:
                            imports.Add("objectSpec");
                            break;

                        case KnownPrimaryType.TimeSpan:
                            imports.Add("timeSpanSpec");
                            break;

                        case KnownPrimaryType.Uuid:
                            imports.Add("uuidSpec");
                            break;

                        default:
                            throw new Exception($"Unrecognized KnownPrimaryType: {primaryType.KnownPrimaryType}");
                    }
                }
                else
                {
                    throw new Exception($"Unrecognized IModelType: {type.GetType().FullName}");
                }
            }
        }

        /// <summary>
        /// Construct the TypeSpec definition for the provided type.
        /// </summary>
        /// <param name="tsValue">The TSValue placeholder that will be used to build the TypeSpec definition.</param>
        /// <param name="type">The IModelType to build the TypeSpec definition for.</param>
        /// <param name="generatedCompositeTypes">The CompositeTypes that have already been constructed in the current TSFile.</param>
        /// <param name="isXML">Whether or not the generated TypeSpec should provided XML-specific properties.</param>
        /// <param name="isTopLevelCompositeSpec">Whether or not the constructed TypeSpec is a top-level CompositeTypeSpec. Top-level CompositeTypeSpecs will be exported.</param>
        /// <param name="serializedName">If this is a property inside of an CompositeTypeSpec, this will be the serialized name of the property.</param>
        private static void GenerateTypeSpec(TSValue tsValue, IModelType type, IEnumerable<CompositeType> generatedCompositeTypes, IDictionary<CompositeType,IList<CompositeType>> derivedTypesMap, bool isXML, bool isTopLevelCompositeSpec = false)
        {
            if (type is CompositeType compositeType)
            {
                if (!isTopLevelCompositeSpec)
                {
                    if (generatedCompositeTypes.Contains(type))
                    {
                        tsValue.Text(type.Name);
                    }
                    else
                    {
                        tsValue.QuotedString(type.Name);
                    }
                }
                else
                {
                    tsValue.FunctionCall("compositeSpec", argumentList =>
                    {
                        argumentList.Object((TSObject compositeSpecProperties) =>
                        {
                            compositeSpecProperties.Property("typeName", $"\"{compositeType.Name}\"");
                            if (compositeType.BaseIsPolymorphic || compositeType.IsPolymorphic)
                            {
                                compositeSpecProperties.Property("polymorphism", (TSObject polymorphism) =>
                                {
                                    if (compositeType.BaseModelType != null)
                                    {
                                        polymorphism.Property("inheritsFrom", compositeType.BaseModelType.Name);
                                    }

                                    if (derivedTypesMap.TryGetValue(compositeType, out IList<CompositeType> derivedTypes))
                                    {
                                        polymorphism.Property("inheritedBy", (TSArray inheritedBy) =>
                                        {
                                            foreach (CompositeType derivedType in derivedTypes)
                                            {
                                                inheritedBy.QuotedString(derivedType.Name);
                                            }
                                        });
                                    }

                                    Property polymorphicDiscriminatorProperty = compositeType.PolymorphicDiscriminatorProperty;
                                    if (compositeType.BaseModelType == null || polymorphicDiscriminatorProperty.Name != compositeType.BaseModelType.PolymorphicDiscriminatorProperty.Name)
                                    {
                                        polymorphism.Property("discriminatorPropertyName", $"\"{polymorphicDiscriminatorProperty.Name}\"");
                                        if (polymorphicDiscriminatorProperty.Name != polymorphicDiscriminatorProperty.SerializedName)
                                        {
                                            polymorphism.Property("discriminatorPropertySerializedName", $"\"{polymorphicDiscriminatorProperty.SerializedName}\"");
                                        }
                                    }

                                    polymorphism.Property("discriminatorPropertyValue", $"\"{compositeType.SerializedName}\"");
                                });
                            }
                            compositeSpecProperties.Property("propertySpecs", (TSObject propertySpecs) =>
                            {
                                foreach (Property property in compositeType.ComposedProperties)
                                {
                                    propertySpecs.DocumentationComment(property.Summary, property.Documentation);
                                    propertySpecs.Property(property.Name, (TSObject propertySpec) =>
                                    {
                                        if (property.IsRequired)
                                        {
                                            propertySpec.Property("required", true);
                                        }

                                        if (isXML)
                                        {
                                            if (property.XmlIsAttribute)
                                            {
                                                propertySpec.Property("xmlIsAttribute", true);
                                            }

                                            if (property.XmlIsWrapped)
                                            {
                                                propertySpec.Property("xmlIsWrapped", true);
                                            }

                                            if (!string.IsNullOrEmpty(property.XmlName) && property.Name != property.XmlName)
                                            {
                                                propertySpec.Property("xmlName", $"\"{property.XmlName}\"");
                                            }
                                        }
                                        else
                                        {
                                            if (!string.IsNullOrEmpty(property.SerializedName) && property.Name != property.SerializedName)
                                            {
                                                propertySpec.Property("serializedName", $"\"{property.SerializedName}\"");
                                            }
                                        }

                                        propertySpec.Property("valueSpec", propertyValue =>
                                        {
                                            GenerateTypeSpec(propertyValue, property.ModelType, generatedCompositeTypes, derivedTypesMap, isXML);
                                        });
                                    });
                                }
                            });
                        });
                    });
                }
            }
            else if (type is DictionaryType dictionaryType)
            {
                tsValue.FunctionCall("dictionarySpec", argumentList =>
                {
                    GenerateTypeSpec(argumentList, dictionaryType.ValueType, generatedCompositeTypes, derivedTypesMap, isXML);
                });
            }
            else if (type is SequenceType sequenceType)
            {
                tsValue.FunctionCall("sequenceSpec", argumentList =>
                {
                    GenerateTypeSpec(argumentList, sequenceType.ElementType, generatedCompositeTypes, derivedTypesMap, isXML);
                });
            }
            else if (type is EnumType enumType)
            {
                if (enumType.ModelAsString)
                {
                    tsValue.Text("stringSpec");
                }
                else
                {
                    tsValue.FunctionCall("enumSpec", argumentList =>
                    {
                        argumentList.QuotedString(enumType.ClassName);
                        argumentList.Text(enumType.GetEnumValuesArray());
                    });
                }
            }
            else if (type is PrimaryType primaryType)
            {
                switch (primaryType.KnownPrimaryType)
                {
                    case KnownPrimaryType.Base64Url:
                        tsValue.Text("base64UrlSpec");
                        break;

                    case KnownPrimaryType.Boolean:
                        tsValue.Text("booleanSpec");
                        break;

                    case KnownPrimaryType.ByteArray:
                        tsValue.Text("byteArraySpec");
                        break;

                    case KnownPrimaryType.Double:
                    case KnownPrimaryType.Int:
                    case KnownPrimaryType.Long:
                    case KnownPrimaryType.Decimal:
                        tsValue.Text("numberSpec");
                        break;

                    case KnownPrimaryType.Stream:
                        tsValue.Text("streamSpec");
                        break;

                    case KnownPrimaryType.String:
                        tsValue.Text("stringSpec");
                        break;

                    case KnownPrimaryType.Date:
                        tsValue.Text("dateSpec");
                        break;

                    case KnownPrimaryType.DateTime:
                        tsValue.Text("dateTimeSpec");
                        break;

                    case KnownPrimaryType.DateTimeRfc1123:
                        tsValue.Text("dateTimeRfc1123Spec");
                        break;

                    case KnownPrimaryType.Object:
                        tsValue.Text("objectSpec");
                        break;

                    case KnownPrimaryType.TimeSpan:
                        tsValue.Text("timeSpanSpec");
                        break;

                    case KnownPrimaryType.Uuid:
                        tsValue.Text("uuidSpec");
                        break;

                    default:
                        throw new Exception($"Unrecognized KnownPrimaryType: {primaryType.KnownPrimaryType}");
                }
            }
            else
            {
                throw new Exception($"Unrecognized IModelType: {type.GetType().FullName}");
            }
        }
    }
}
