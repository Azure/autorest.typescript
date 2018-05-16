﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Core.Utilities.Collections;

namespace AutoRest.TypeScript
{
    public class CodeNamerTS : CodeNamer
    {
        private readonly HashSet<string> _propertyNameWhiteList = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "date",
            "default",
            "error",
            "enum"
        };
        /// <summary>
        ///     Initializes a new instance of TypeScriptCodeNamingFramework.
        /// </summary>
        public CodeNamerTS()
        {
            ReservedWords.AddRange(new[]
            {
                "arguments", "array", "await", "abstract", "boolean", "buffer",
                "break", "byte", "case", "catch", "char", "class",
                "const", "continue", "debugger", "default", "delete",
                "do", "double", "date", "else", "enum", "error",
                "export", "extends", "false", "final", "finally",
                "float", "for", "function", "goto", "if", "implements",
                "import", "in", "int", "interface", "instanceof",
                "let", "long", "native", "new", "null", "package",
                "private", "protected", "public", "return", "short",
                "static", "super", "switch", "synchronized", "this",
                "throw", "transient", "true", "try", "typeof", "util",
                "var", "void", "volatile", "while", "with", "yield", "pipeline"
            });
        }

        public override string GetFieldName(string name) => CamelCase(name);

        public override string GetPropertyName(string name) => CamelCase(RemoveInvalidCharacters(name));

        public override string GetMethodName(string name) => CamelCase(GetEscapedReservedName(name, "Method"));

        public override string GetEnumMemberName(string name)
        {
            if (name == null)
            {
                return "Null";
            }
            else if (string.IsNullOrEmpty(name))
            {
                return "EmptyString";
            }
            return base.GetEnumMemberName(name).ToPascalCase();
        }

        public static string GetEnumValueName(string valueName, PrimaryType valueType)
        {
            if (valueName == null)
            {
                return "null as any";
            }
            if (valueType == null)
            {
                // Since valueType is null we will default the EnumValue to be a string. Hence sending a quoted string back.
                return Instance.QuoteValue(valueName, "'");
            }
            return Instance.EscapeDefaultValue(valueName, valueType);
        }

        public override string IsNameLegal(string desiredName, IIdentifier whoIsAsking)
        {
            // error and date are ok property names. really, it's ok.
            if (whoIsAsking is Property && _propertyNameWhiteList.Contains(desiredName)  )
            {
                return null;
            }
            return base.IsNameLegal(desiredName, whoIsAsking);
        }

        /// <summary>
        /// Removes invalid characters from the name, underscore,
        /// period, and dash.
        /// </summary>
        /// <param name="name">String to parse.</param>
        /// <returns>Namespace with invalid characters removed.</returns>
        protected virtual string RemoveInvalidCharactersProperty(string name)
        {
            return GetValidName(name, '_', '-', '.');
        }

        /// <summary>
        /// Returns true when the name comparison is a special case and should not
        /// be used to determine name conflicts.
        ///  </summary>
        /// <param name="whoIsAsking">the identifier that is checking to see if there is a conflict</param>
        /// <param name="reservedName">the identifier that would normally be reserved.</param>
        /// <returns></returns>
        public override bool IsSpecialCase(IIdentifier whoIsAsking, IIdentifier reservedName)
        {
            if (whoIsAsking is Property && reservedName is CompositeType)
            {
                var parent = (whoIsAsking as IChild)?.Parent as IIdentifier;
                if (ReferenceEquals(parent, reservedName))
                {
                    return false;
                }
                // special case: properties can have the same name as a compositetype
                // unless it is the same name as a parent.
                return true;
            }
            return false;
        }

        public override string EscapeDefaultValue(string defaultValue, IModelType type)
        {
            if (type == null)
            {
                throw new ArgumentNullException(nameof(type));
            }

            if (type is EnumType)
            {
                if (!defaultValue.IsNullOrEmpty())
                {
                    return Instance.QuoteValue(defaultValue, "'");
                }
                return null;
            }

            var primaryType = type as PrimaryType;
            if ((defaultValue != null) && (primaryType != null))
            {
                switch (primaryType.KnownPrimaryType)
                {
                    case KnownPrimaryType.String:
                        return Instance.QuoteValue(defaultValue, "'");
                    case KnownPrimaryType.Boolean:
                        return defaultValue.ToLowerInvariant();
                    case KnownPrimaryType.Date:
                    case KnownPrimaryType.DateTime:
                    case KnownPrimaryType.DateTimeRfc1123:
                        return $"new Date('{defaultValue}')";
                    case KnownPrimaryType.TimeSpan:
                        return $"'{defaultValue}'";
                    case KnownPrimaryType.ByteArray:
                        return $"new Buffer('{defaultValue}')";
                }
            }
            return defaultValue;
        }
    }
}