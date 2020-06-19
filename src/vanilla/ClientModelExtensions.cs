// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions;
using AutoRest.TypeScript.DSL;
using AutoRest.TypeScript.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using static AutoRest.Core.Utilities.DependencyInjection;

namespace AutoRest.TypeScript
{
    public static class ClientModelExtensions
    {
        /// <summary>
        /// Simple conversion of the type to string
        /// </summary>
        /// <param name="type">The type to convert</param>
        /// <param name="reference">a reference to an instance of the type</param>
        /// <returns></returns>
        public static string ToString(this IModelType type, string reference)
        {
            var known = type as PrimaryType;
            var enumType = type as EnumType;
            if (enumType != null || known.IsPrimaryType(KnownPrimaryType.String))
            {
                return reference;
            }

            if (known != null)
            {
                switch (known.KnownPrimaryType)
                {
                    case KnownPrimaryType.Date:
                        return $"coreHttp.serializeObject({reference}).replace(/[Tt].*[Zz]/, '')";
                    case KnownPrimaryType.DateTimeRfc1123:
                        return $"{reference} instanceof Date ? {reference}.toUTCString() : {reference}";
                    case KnownPrimaryType.DateTime:
                    case KnownPrimaryType.ByteArray:
                        return $"coreHttp.serializeObject({reference})";
                    case KnownPrimaryType.TimeSpan:
                        return $"{reference}";
                    case KnownPrimaryType.Base64Url:
                        return $"client.serializer.serialize({{required: true, serializedName: '{reference}', type: {{name: 'Base64Url'}}}}, {reference}, '{reference}')";
                    case KnownPrimaryType.UnixTime:
                        return $"client.serializer.serialize({{required: true, serializedName: '{reference}', type: {{name: 'UnixTime'}}}}, {reference}, '{reference}')";
                }
            }

            return $"{reference}.toString()";
        }

        /// <summary>
        /// Returns the TypeScript type string for the specified primary.KnownPrimaryType
        /// </summary>
        /// <param name="primary">primary.KnownPrimaryType to query</param>
        /// <returns>The TypeScript type correspoinding to this model primary.KnownPrimaryType</returns>
        private static string PrimaryTSType(this PrimaryType primary)
        {
            if (primary == null)
            {
                throw new ArgumentNullException(nameof(primary));
            }

            if (primary.KnownPrimaryType == KnownPrimaryType.Boolean)
                return "boolean";
            else if (primary.KnownPrimaryType == KnownPrimaryType.Double || primary.KnownPrimaryType == KnownPrimaryType.Decimal ||
                primary.KnownPrimaryType == KnownPrimaryType.Int || primary.KnownPrimaryType == KnownPrimaryType.Long)
                return "number";
            else if (primary.KnownPrimaryType == KnownPrimaryType.String || primary.KnownPrimaryType == KnownPrimaryType.Uuid)
                return "string";
            else if (primary.KnownPrimaryType == KnownPrimaryType.Date || primary.KnownPrimaryType == KnownPrimaryType.DateTime ||
                primary.KnownPrimaryType == KnownPrimaryType.DateTimeRfc1123 || primary.KnownPrimaryType == KnownPrimaryType.UnixTime)
                return "Date";
            else if (primary.KnownPrimaryType == KnownPrimaryType.Object)
                return "any";   // TODO: test this
            else if (primary.KnownPrimaryType == KnownPrimaryType.ByteArray || primary.KnownPrimaryType == KnownPrimaryType.Base64Url)
                return "Uint8Array";
            else if (primary.KnownPrimaryType == KnownPrimaryType.Stream)
                return "coreHttp.HttpRequestBody";
            else if (primary.KnownPrimaryType == KnownPrimaryType.TimeSpan)
                return "string";
            else if (primary.KnownPrimaryType == KnownPrimaryType.Credentials)
                return "coreHttp.TokenCredential | coreHttp.ServiceClientCredentials";
            else {
                throw new NotImplementedException($"Type '{primary}' not implemented");
            }
        }

        public static bool IsSequenceContainingDateKind(this IModelType type)
        {
            return type.IsSequenceContainingType(KnownPrimaryType.Date) ||
                   type.IsSequenceContainingType(KnownPrimaryType.DateTime) ||
                   type.IsSequenceContainingType(KnownPrimaryType.DateTimeRfc1123) ||
                   type.IsSequenceContainingType(KnownPrimaryType.UnixTime);
        }

        public static bool IsStream(this IModelType type)
        {
            return type is PrimaryType primaryType && primaryType.KnownPrimaryType == KnownPrimaryType.Stream;
        }

        public static bool IsDictionaryContainingDateKind(this IModelType type)
        {
            return type.IsDictionaryContainingType(KnownPrimaryType.Date) ||
                   type.IsDictionaryContainingType(KnownPrimaryType.DateTime) ||
                   type.IsDictionaryContainingType(KnownPrimaryType.DateTimeRfc1123) ||
                   type.IsDictionaryContainingType(KnownPrimaryType.UnixTime);
        }

        /// <summary>
        /// Return the TypeScript type (as a string) for specified type.
        /// </summary>
        /// <param name="type">IType to query</param>
        /// <param name="inModelsModule">Pass true if generating the code for the models module, thus model types don't need a "models." prefix</param>
        /// <returns>TypeScript type string for type</returns>
        public static string TSType(this IModelType type, bool inModelsModule) {
            CompositeTypeTS composite = type as CompositeTypeTS;
            SequenceType sequence = type as SequenceType;
            DictionaryType dictionary = type as DictionaryType;
            PrimaryType primary = type as PrimaryType;
            EnumType enumType = type as EnumType;

            string tsType;
            if (primary != null)
            {
                tsType = primary.PrimaryTSType();
            }
            else if (enumType != null)
            {
                string enumName = enumType.DeclarationName;
                if (inModelsModule || enumName.Contains('.') || enumName == "string")
                {
                    tsType = enumName;
                }
                else
                {
                    tsType = "Models." + enumName.ToPascalCase();
                }
            }
            else if (composite != null)
            {
                // ServiceClientCredentials starts with the "coreHttp." prefix, so strip coreHttp./coreArm. as we import those
                // types with no module prefix needed
                var compositeName = composite.UnionTypeName;
                if (compositeName.StartsWith("coreHttp.") || compositeName.StartsWith("coreArm."))
                    tsType = compositeName.Substring(compositeName.IndexOf('.') + 1);
                else if (inModelsModule || compositeName.Contains('.'))
                    tsType = compositeName;
                else
                    tsType = "Models." + compositeName;
            }
            else if (sequence != null)
            {
                if (sequence.IsSequenceContainingDateKind())
                    tsType = sequence.ElementType.TSType(inModelsModule) + "[]" + " | string[]";
                else
                    tsType = sequence.ElementType.TSType(inModelsModule) + "[]";
            }
            else if (dictionary != null)
            {
                if (dictionary.IsDictionaryContainingDateKind()) //then provide a union of Date and string
                    tsType = "{ [propertyName: string]: " + dictionary.ValueType.TSType(inModelsModule) + " }" + " | { [propertyName: string]: string }";
                else
                    tsType = "{ [propertyName: string]: " + dictionary.ValueType.TSType(inModelsModule) + " }";
            }
            else throw new NotImplementedException($"Type '{type}' not implemented");

            return tsType;
        }

        internal static string CreateRegexPatternConstraintValue(string constraintValue)
        {
            StringBuilder builder = new StringBuilder();
            if (!string.IsNullOrEmpty(constraintValue))
            {
                builder.Append('/');
                bool escaped = false;
                foreach (char c in constraintValue)
                {
                    if (c == '/' && !escaped)
                    {
                        builder.Append('\\');
                    }
                    else if (c == '\\')
                    {
                        escaped = !escaped;
                    }
                    else
                    {
                        escaped = false;
                    }
                    builder.Append(c);
                }
                builder.Append('/');
            }
            return builder.ToString();
        }

        public static string CreateSerializerExpression(this CodeModelTS codeModel)
        {
            TSBuilder builder = new TSBuilder();
            builder.FunctionCall("new coreHttp.Serializer", arguments =>
            {
                bool hasMappers = codeModel.HasMappers();
                if (hasMappers)
                {
                    arguments.Text("Mappers");
                }

                if (codeModel.ShouldGenerateXmlSerialization == true)
                {
                    if (!hasMappers)
                    {
                        arguments.Object();
                    }

                    arguments.Boolean(true);
                }
            });
            return builder.ToString();
        }

        public static void ConstructParameterMapper(TSObject obj, ParameterTS parameter)
        {
            MethodTS.GenerateRequestParameter(obj, parameter, parameter.MethodTS.GetParameterTransformations());
        }

        public static void ConstructRequestBodyMapper(TSValue value, Parameter requestBody)
        {
            IModelType requestBodyModelType = requestBody.ModelType;
            if (requestBodyModelType is CompositeType)
            {
                string mapperReference = $"Mappers.{requestBodyModelType.Name}";
                if (!requestBody.IsRequired)
                {
                    value.Text(mapperReference);
                }
                else
                {
                    value.Object(mapperObject =>
                    {
                        mapperObject.Spread(mapperReference);
                        mapperObject.BooleanProperty("required", true);
                    });
                }
            }
            else
            {
                ConstructMapper(
                    value,
                    requestBodyModelType,
                    requestBody.SerializedName,
                    requestBody,
                    isPageable: false,
                    expandComposite: false,
                    isXML: requestBody.Parent.CodeModel.ShouldGenerateXmlSerialization == true,
                    xmlName: requestBodyModelType.XmlProperties?.Name);
            }
        }

        public static void ConstructResponseBodyMapper(TSValue value, Response response, Method method)
        {
            IModelType responseBodyModelType = response.Body;
            if (responseBodyModelType is CompositeType)
            {
                value.Text($"Mappers.{responseBodyModelType.Name}");
            }
            else
            {
                ConstructMapper(
                    value: value,
                    type: responseBodyModelType,
                    serializedName: "parsedResponse",
                    parameter: null,
                    isPageable: false,
                    expandComposite: false,
                    isXML: method.CodeModel.ShouldGenerateXmlSerialization == true);
            }
        }

        public static void ConstructMapper(TSBuilder builder, IModelType type, string serializedName, IVariable parameter, bool isPageable, bool expandComposite, bool isXML, bool isCaseSensitive = true, string xmlName = null)
        {
            builder.Value(value => ConstructMapper(value, type, serializedName, parameter, isPageable, expandComposite, isXML, isCaseSensitive, xmlName));
        }

        public static void ConstructMapper(TSValue value, IModelType type, string serializedName, IVariable parameter, bool isPageable, bool expandComposite, bool isXML, bool isCaseSensitive = true, string xmlName = null)
        {
            value.Object(mapper => ConstructMapper(mapper, type, serializedName, parameter, isPageable, expandComposite, isXML, isCaseSensitive, xmlName));
        }

        public static void ConstructMapper(TSObject mapper, IModelType type, string serializedName, IVariable parameter, bool isPageable, bool expandComposite, bool isXML, bool isCaseSensitive = true, string xmlName = null)
        {
            string defaultValue = null;
            bool isRequired = false;
            bool isConstant = false;
            bool isReadOnly = false;
            Dictionary<Constraint, string> constraints = null;
            var property = parameter as Property;
            if (parameter != null)
            {
                defaultValue = parameter.DefaultValue;
                isRequired = parameter.IsRequired;
                isConstant = parameter.IsConstant;
                constraints = parameter.Constraints;
            }

            string xmlPrefix = !isXML ? null : property?.XmlPrefix ?? type?.XmlPrefix;

            bool addXmlNameFromParameterValue = isXML && !string.IsNullOrEmpty(xmlName) && xmlName != serializedName;
            if (addXmlNameFromParameterValue)
            {
                if (!string.IsNullOrEmpty(xmlPrefix))
                {
                    xmlName = $"{xmlPrefix}:{xmlName}";
                }
                mapper.QuotedStringProperty("xmlName", xmlName);
            }

            if (isXML && !string.IsNullOrEmpty(serializedName) && !string.IsNullOrEmpty(xmlPrefix))
            {
                serializedName = $"{xmlPrefix}:{serializedName}";
            }

            if (property != null)
            {
                isReadOnly = property.IsReadOnly;

                if (isXML)
                {
                    if (property.XmlIsAttribute)
                    {
                        mapper.BooleanProperty("xmlIsAttribute", true);
                    }

                    if (property.XmlIsWrapped)
                    {
                        mapper.BooleanProperty("xmlIsWrapped", true);
                    }

                    string propertyXmlName = property.ModelType.XmlProperties?.Name ?? property.XmlName;
                    if (!addXmlNameFromParameterValue && !string.IsNullOrEmpty(propertyXmlName))
                    {
                        if (!string.IsNullOrEmpty(xmlPrefix))
                        {
                            propertyXmlName = $"{xmlPrefix}:{propertyXmlName}";
                        }

                        // For some reason we can't omit xmlName in this scenario if it is equal to
                        // serializedName. It might have to do with whether or not xmlElementName
                        // is present, but I'm not sure at this time.
                        mapper.QuotedStringProperty("xmlName", propertyXmlName);
                    }
                }
            }

            CompositeTypeTS composite = type as CompositeTypeTS;
            if (composite != null && composite.ContainsConstantProperties && (parameter != null && parameter.IsRequired))
            {
                defaultValue = "{}";
            }

            SequenceType sequence = type as SequenceType;
            if (sequence != null && isXML)
            {
                if (sequence.ElementXmlIsWrapped)
                {
                    mapper.BooleanProperty("xmlElementIsWrapped", true);
                }

                string xmlElementName = sequence.ElementType.XmlProperties?.Name ?? sequence.ElementXmlName;
                if (!string.IsNullOrEmpty(xmlElementName))
                {
                    mapper.QuotedStringProperty("xmlElementName", xmlElementName);
                }
            }

            if (isRequired)
            {
                mapper.BooleanProperty("required", true);
            }

            if (parameter?.IsXNullable != null)
            {
                if (parameter.IsXNullable.Value)
                {
                    mapper.BooleanProperty("nullable", true);
                }
                else
                {
                    mapper.BooleanProperty("nullable", false);
                }
            }

            if (isReadOnly)
            {
                mapper.BooleanProperty("readOnly", true);
            }

            if (isConstant)
            {
                mapper.BooleanProperty("isConstant", true);
            }

            if (serializedName != null)
            {
                if (!isCaseSensitive)
                {
                    serializedName = serializedName.ToLower();
                }
                mapper.QuotedStringProperty("serializedName", serializedName);
            }

            if (!string.IsNullOrEmpty(defaultValue))
            {
                mapper.TextProperty("defaultValue", defaultValue);
            }

            DictionaryType dictionary = type as DictionaryType;
            PrimaryType primary = type as PrimaryType;
            EnumType enumType = type as EnumType;

            void applyConstraints(TSObject obj)
            {
                bool useClientSideValidation = (bool) (Settings.Instance?.CustomSettings[CodeModelTS.ClientSideValidationSettingName] ?? false);
                if (useClientSideValidation && constraints != null && constraints.Any())
                {
                    obj.ObjectProperty("constraints", constraintsObject =>
                    {
                        foreach (KeyValuePair<Constraint,string> constraintEntry in constraints)
                        {
                            Constraint constraint = constraintEntry.Key;
                            string constraintValue = constraintEntry.Value;
                            if (constraint == Constraint.Pattern)
                            {
                                constraintValue = CreateRegexPatternConstraintValue(constraintValue);
                            }
                            constraintsObject.TextProperty(constraint.ToString(), constraintValue);
                        }
                    });
                }
            }

            // Apply header collection constraints only to dictionary values, not the dictionary itself
            string prefix = parameter?.Extensions?.GetValue<string>(SwaggerExtensions.HeaderCollectionPrefix);
            bool skipConstraints = !string.IsNullOrEmpty(prefix) && dictionary != null;
            if (!skipConstraints)
            {
                applyConstraints(mapper);
            }

            if (primary != null)
            {
                switch (primary.KnownPrimaryType)
                {
                    case KnownPrimaryType.Base64Url:
                    case KnownPrimaryType.Boolean:
                    case KnownPrimaryType.ByteArray:
                    case KnownPrimaryType.Date:
                    case KnownPrimaryType.DateTime:
                    case KnownPrimaryType.DateTimeRfc1123:
                    case KnownPrimaryType.Object:
                    case KnownPrimaryType.Stream:
                    case KnownPrimaryType.String:
                    case KnownPrimaryType.TimeSpan:
                    case KnownPrimaryType.UnixTime:
                    case KnownPrimaryType.Uuid:
                        AddTypeProperty(mapper, primary.KnownPrimaryType.ToString());
                        break;

                    case KnownPrimaryType.Int:
                    case KnownPrimaryType.Long:
                    case KnownPrimaryType.Decimal:
                    case KnownPrimaryType.Double:
                        AddTypeProperty(mapper, "Number");
                        break;

                    default:
                        throw new NotImplementedException($"{primary} is not a supported Type.");
                }
            }
            else if (enumType != null)
            {
                if (enumType.ModelAsString)
                {
                    AddTypeProperty(mapper, "String");
                }
                else
                {
                    AddTypeProperty(mapper, "Enum", typeObject =>
                    {
                        typeObject.ArrayProperty("allowedValues", allowedValues =>
                        {
                            foreach (EnumValue enumValue in enumType.Values)
                            {
                                allowedValues.QuotedString(enumValue.SerializedName);
                            }
                        });
                    });
                }
            }
            else if (sequence != null)
            {
                AddTypeProperty(mapper, "Sequence", typeObject =>
                {
                    typeObject.Property("element", element =>
                    {
                        ConstructMapper(element, sequence.ElementType, null, null, false, false, isXML, isCaseSensitive);
                    });
                });
            }
            else if (dictionary != null)
            {
                AddTypeProperty(mapper, "Dictionary", typeObject =>
                {
                    typeObject.ObjectProperty("value", dictionaryValue =>
                    {
                        ConstructMapper(dictionaryValue, dictionary.ValueType, null, null, false, false, isXML, isCaseSensitive);
                        applyConstraints(dictionaryValue);
                    });
                });

                if (!string.IsNullOrEmpty(prefix))
                {
                    mapper.QuotedStringProperty("headerCollectionPrefix", prefix);
                }
            }
            else if (composite != null)
            {
                AddTypeProperty(mapper, "Composite", typeObject =>
                {
                    if (expandComposite)
                    {
                        if (composite.IsPolymorphic)
                        {
                            // Note: If the polymorphicDiscriminator has a dot in it's name then do not escape that dot for
                            // it's serializedName, the way it is done for other properties. This makes it easy to find the
                            // discriminator property from the responseBody during deserialization. Please, do not get confused
                            // between the definition of the discriminator and the definition of the property that is
                            // marked as the discriminator.
                            typeObject.ObjectProperty("polymorphicDiscriminator", polymorphicDiscriminator =>
                            {
                                polymorphicDiscriminator.QuotedStringProperty("serializedName", composite.PolymorphicDiscriminator);
                                polymorphicDiscriminator.QuotedStringProperty("clientName", Singleton<CodeNamerTS>.Instance.GetPropertyName(composite.PolymorphicDiscriminator));
                            });
                            typeObject.QuotedStringProperty("uberParent", composite.Name);
                        }
                        else
                        {
                            CompositeType baseType = GetUberParent(composite);
                            if (baseType.IsPolymorphic)
                            {
                                typeObject.TextProperty("polymorphicDiscriminator", baseType.Name + ".type.polymorphicDiscriminator");
                                typeObject.QuotedStringProperty("uberParent", baseType.Name);
                            }
                        }
                    }

                    typeObject.QuotedStringProperty("className", composite.Name);

                    if (expandComposite)
                    {
                        typeObject.ObjectProperty("modelProperties", modelProperties =>
                        {
                            if (composite.BaseModelType != null && composite.BaseModelType.ComposedProperties.Any())
                            {
                                modelProperties.Spread(composite.BaseModelType.Name + ".type.modelProperties");
                            }
                            foreach (Property prop in composite.Properties)
                            {
                                var serializedPropertyName = prop.SerializedName;
                                if (isPageable)
                                {
                                    PropertyInfo itemName = composite.GetType().GetProperty("ItemName");
                                    PropertyInfo nextLinkName = composite.GetType().GetProperty("NextLinkName");
                                    string nextLinkNameValue = (string)nextLinkName.GetValue(composite);
                                    if (itemName != null && ((string)itemName.GetValue(composite) == prop.Name))
                                    {
                                        serializedPropertyName = "";
                                    }

                                    if (prop.Name.Contains("nextLink") && nextLinkName != null && nextLinkNameValue == null)
                                    {
                                        continue;
                                    }
                                }

                                if (modelProperties.ContainsProperty(prop.Name))
                                {
                                    // throw new InvalidOperationException($"Mapper \"{serializedName}\" contains multiple modelProperties with the name \"{prop.Name}\".");
                                }
                                else
                                {
                                    modelProperties.Property(prop.Name, propertyValue => ConstructMapper(propertyValue, prop.ModelType, serializedPropertyName, prop, false, false, isXML, isCaseSensitive));
                                }
                            }
                        });
                    }

                    if (composite.AdditionalProperties != null)
                    {
                        typeObject.ObjectProperty("additionalProperties", additionalProperties =>
                        {
                            ConstructMapper(additionalProperties, composite.AdditionalProperties, serializedName: null, parameter: null, isPageable: false, expandComposite: false, isXML: isXML);
                        });
                    }
                    else
                    {
                        CompositeTypeTS baseType = composite;
                        while (true)
                        {
                            baseType = (CompositeTypeTS) baseType.BaseModelType;
                            if (baseType == null)
                            {
                                break;
                            }
                            else if (baseType.AdditionalProperties != null)
                            {
                                typeObject.TextProperty("additionalProperties", $"{baseType.Name}.type.additionalProperties");
                                break;
                            }
                        }
                    }
                });
            }
            else
            {
                throw new NotImplementedException($"{type} is not a supported Type.");
            }
        }

        /// <summary>
        /// Finds the UberParent for a given Composite type.
        /// An uber parent is the closest parent that defines the polymorphicDiscriminator
        /// </summary>
        /// <param name="composite">The composite type to find the uberParent for</param>
        /// <returns>The uberParent or itself if it has no uberParent</returns>
        private static CompositeType GetUberParent(CompositeTypeTS composite)
        {
            CompositeType uberParent = composite;
            while (uberParent.BaseModelType != null && string.IsNullOrWhiteSpace(uberParent.PolymorphicDiscriminator))
            {
                uberParent = uberParent.BaseModelType;
            }

            return uberParent;
        }

        private static void AddTypeProperty(TSObject mapper, string mapperTypeName, Action<TSObject> additionalTypeObjectPropertiesAction = null)
        {
            mapper.ObjectProperty("type", typeObject =>
            {
                typeObject.QuotedStringProperty("name", mapperTypeName);
                additionalTypeObjectPropertiesAction?.Invoke(typeObject);
            });
        }

        /// <summary>
        /// Determine whether URL encoding should be skipped for this parameter
        /// </summary>
        /// <param name="parameter">The parameter to check</param>
        /// <returns>true if url encoding should be skipped for the parameter, otherwise false</returns>
        public static bool SkipUrlEncoding(this Parameter parameter)
        {
            if (parameter == null)
            {
                return false;
            }

            return parameter.Extensions.ContainsKey(SwaggerExtensions.SkipUrlEncodingExtension) &&
                   (bool)parameter.Extensions[SwaggerExtensions.SkipUrlEncodingExtension];
        }

        public static bool IsCompositeOrEnumType(this IModelType type)
        {
            if (type is CompositeType || type is EnumType)
            {
                return true;
            }
            else if (type is SequenceType)
            {
                return (type as SequenceType).ElementType.IsCompositeOrEnumType();
            }
            else if (type is DictionaryType)
            {
                return (type as DictionaryType).ValueType.IsCompositeOrEnumType();
            }
            else
            {
                return false;
            }
        }

        public static string InitializeType(this IModelType paramType, string paramName, bool isBrowser = false)
        {
            if (paramType is EnumType)
            {
                return paramType.InitializeEnumType(isBrowser);
            }
            else if (paramType is PrimaryType)
            {
                return paramType.InitializePrimaryType(paramName, isBrowser);
            }
            else if (paramType is SequenceType)
            {
                return paramType.InitializeSequenceType(paramName, isBrowser);
            }
            else if (paramType is DictionaryType)
            {
                return paramType.InitializeDictionaryType(paramName, isBrowser);
            }
            else if (paramType is CompositeType)
            {
                return paramType.InitializeCompositeType(paramName, isBrowser);
            }

            return null;
        }

        public static string InitializeCompositeType(this IModelType paramType, string paramName, bool isBrowser = false)
        {
            var builder = new IndentedStringBuilder("  ");
            var composite = (CompositeType)paramType;
            if (composite.ComposedProperties.Any())
            {
                builder.AppendLine("{").Indent();
                var composedPropertyList = new List<Property>(composite.ComposedProperties.Where(p => /**p.IsRequired &&**/ !p.IsReadOnly));
                for (var i = 0; i < composedPropertyList.Count; i++)
                {
                    var prop = composedPropertyList[i];
                    if (i != composedPropertyList.Count - 1)
                    {
                        builder.AppendLine("{0}: {1},", prop.Name, prop.ModelType.InitializeType(prop.Name, isBrowser));
                    }
                    else
                    {
                        builder.AppendLine("{0}: {1}", prop.Name, prop.ModelType.InitializeType(prop.Name, isBrowser));
                    }
                }
                builder.Outdent().Append("}");
            }
            else
            {
                builder.AppendLine("{}");
            }
            return builder.ToString();
        }

        public static string InitializeDictionaryType(this IModelType paramType, string paramName, bool isBrowser = false)
        {
            var dictionary = (DictionaryType)paramType;
            var paramValue = $"{{ \"key1\": {dictionary.ValueType.InitializeType(paramName, isBrowser)} }}";
            return paramValue;
        }

        public static string InitializeSequenceType(this IModelType paramType, string paramName, bool isBrowser = false)
        {
            var sequence = (SequenceType)paramType;
            var paramValue = $"[{sequence.ElementType.InitializeType(paramName, isBrowser)}]";
            return paramValue;
        }

        public static string InitializeEnumType(this IModelType paramType, bool isBrowser = false)
        {
            var paramValue = "\"\"";
            var enumValue = ((EnumType)paramType).Values[0].SerializedName;
            paramValue = $"\"{enumValue}\"";
            // TODO: Till we support setting UnderlyingType in autorest.modeler we wil default to string type as the enum value
            // if ( ((EnumType)paramType).UnderlyingType.IsPrimaryType(KnownPrimaryType.String))
            // {
            //     paramValue = $"\"{enumValue}\"";
            // }
            return paramValue;
        }

        public static string InitializePrimaryType(this IModelType paramType, string paramName, bool isBrowser = false)
        {
            var paramValue = "\"\"";
            if (paramType.IsPrimaryType(KnownPrimaryType.String))
            {
                if (paramName.EqualsIgnoreCase("location"))
                {
                    paramValue = "\"westus\"";
                }
                else
                {
                    paramValue = $"\"test{paramName.ToCamelCase()}\"";
                }
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.Date))
            {
                paramValue = "new Date().toISOString().substring(0, 10)";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.DateTime))
            {
                paramValue = "new Date().toISOString()";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.DateTimeRfc1123))
            {
                paramValue = "new Date().toUTCString()";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.UnixTime))
            {
                paramValue = "new Date()";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.TimeSpan))
            {
                paramValue = "\"P1Y2M3DT4H5M6S\"";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.Boolean))
            {
                paramValue = "true";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.Int) || paramType.IsPrimaryType(KnownPrimaryType.Long))
            {
                paramValue = "1";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.Decimal) || paramType.IsPrimaryType(KnownPrimaryType.Double))
            {
                paramValue = "1.01";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.Object))
            {
                paramValue = "{}";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.Uuid))
            {
                paramValue = "ec7b1657-199d-4d8a-bbb2-89a11a42e02a";
            }
            else if (paramType.IsPrimaryType(KnownPrimaryType.Stream))
            {
                paramValue = isBrowser ? "new ReadableStream()" : "new require(\"stream\").Readable()";
            }
            return paramValue;
        }

        public static string ToKebabCase(this string value)
        {
            string result;

            if (string.IsNullOrEmpty(value))
            {
                result = value;
            }
            else
            {
                bool changed = false;
                StringBuilder builder = new StringBuilder();

                int valueLength = value == null ? 0 : value.Length;
                bool previousCharacterWasCapitalized = false;
                for (int i = 0; i < valueLength; ++i)
                {
                    char currentCharacter = value[i];
                    bool currentCharacterIsCapitalized = char.IsUpper(currentCharacter);

                    if (currentCharacterIsCapitalized)
                    {
                        changed = true;

                        if (i != 0 && !previousCharacterWasCapitalized)
                        {
                            builder.Append('-');
                        }
                    }

                    builder.Append(char.ToLower(currentCharacter));

                    previousCharacterWasCapitalized = currentCharacterIsCapitalized;
                }

                if (!changed)
                {
                    result = value;
                }
                else
                {
                    result = builder.ToString();
                }
            }

            return result;
        }
    }
}
