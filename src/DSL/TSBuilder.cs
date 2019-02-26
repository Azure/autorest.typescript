// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;
using System.Linq;

namespace AutoRest.TypeScript.DSL
{
    /// <summary>
    /// A StringBuilder that has helper methods for building TypeScript code.
    /// </summary>
    public class TSBuilder : JSBuilder
    {
        public TSBuilder(int commentWordWrapWidth = defaultCommentWordWrapWidth)
            : base(commentWordWrapWidth)
        {
        }

        public TSBuilder(IBuilder builder, int commentWordWrapWidth = defaultCommentWordWrapWidth)
            : base(builder, commentWordWrapWidth)
        {
        }

        public void Class(string className, Action<TSClass> classAction)
        {
            Block($"class {className}", block =>
            {
                classAction?.Invoke(new TSClass(this));
            });
        }

        public void DocumentationComment(Action<TSDocumentationComment> commentAction)
        {
            if (commentAction != null)
            {
                using (TSDocumentationComment comment = new TSDocumentationComment(this, commentWordWrapWidth))
                {
                    commentAction.Invoke(comment);
                }
            }
        }

        /// <summary>
        /// Add a JSON array to this TSBuilder that uses the provided action to add the array's elements.
        /// </summary>
        /// <param name="action">The action that will be invoked to add the array's elements.</param>
        public void Array(Action<TSArray> action = null)
        {
            Text("[");
            Indent(() =>
            {
                using (TSArray tsArray = new TSArray(this))
                {
                    action?.Invoke(tsArray);
                }
            });
            Text("]");
        }

        /// <summary>
        /// Add a JSON object to this TSBuilder that uses the provided action to add the object's properties.
        /// </summary>
        /// <param name="action">The action that will be invoked to add the object's properties.</param>
        public void Object(Action<TSObject> action = null)
        {
            Text($"{{");
            Indent(() =>
            {
                using (TSObject tsObject = new TSObject(this))
                {
                    action?.Invoke(tsObject);
                }
            });
            Text($"}}");
        }

        public void Lambda(string paramName, Action<TSBlock> lambdaBodyAction)
        {
            Line($"{paramName} => {{");
            Indent(() =>
            {
                lambdaBodyAction.Invoke(new TSBlock(this));
            });
            Text($"}}");
        }

        /// <summary>
        /// Invoke the provided action in order to produce a value in this TSBuilder.
        /// </summary>
        /// <param name="valueAction">The action to invoke.</param>
        public void Value(Action<TSValue> valueAction)
        {
            valueAction?.Invoke(new TSValue(this));
        }

        public void ExportUnionType(string typeName, IEnumerable<string> values)
        {
            ExportUnionType(typeName, unionType =>
            {
                foreach (string value in values)
                {
                    unionType.Text(value);
                }
            });
        }

        public void ExportUnionType(string typeName, Action<TSUnionType> unionTypeAction)
        {
            ExportType(typeName, () => unionTypeAction.Invoke(new TSUnionType(this)));
        }

        public void ExportIntersectionType(string typeName, Action<TSIntersectionType> typeAction)
        {
            ExportType(typeName, () => typeAction.Invoke(new TSIntersectionType(this)));
        }

        private void ExportType(string typeName, Action typeDefinitionAction)
        {
            Text($"export type {typeName} = ");
            typeDefinitionAction.Invoke();
            Line(";");
        }

        /// <summary>
        /// Add a function call with the provided functionName to this TSBuilder. The provided
        /// action will be used to create the arguments for the function call.
        /// </summary>
        /// <param name="functionName">The name of the function to invoke.</param>
        /// <param name="argumentListAction">The action to invoke to populate the arguments of the function.</param>
        public void FunctionCall(string functionName, Action<TSArgumentList> argumentListAction)
        {
            Text($"{functionName}(");
            using (TSArgumentList argumentList = new TSArgumentList(this))
            {
                argumentListAction.Invoke(argumentList);
            }
            Text(")");
        }

        public void MethodOverload(string methodName, string returnType, string parameterList)
        {
            Line($"{methodName}({parameterList}): {returnType};");
        }

        public void Method(string methodName, string returnType, string parameterList, Action<TSBlock> methodBodyAction)
        {
            Block($"{methodName}({parameterList}): {returnType}", methodBodyAction);
        }

        public void Block(string beforeBlock, Action<TSBlock> blockAction)
        {
            Block(beforeBlock, true, blockAction);
        }

        public void Block(string beforeBlock, bool newLineAfterBlock, Action<TSBlock> blockAction)
        {
            Line($"{beforeBlock} {{");
            Indent(() =>
            {
                using (TSBlock block = new TSBlock(this))
                {
                    blockAction.Invoke(block);
                }
            });
            WriteNewLineBeforeNextText = true;
            Text($"}}");
            WriteNewLineBeforeNextText = newLineAfterBlock;
        }

        public TSIfBlock If(string condition, Action<TSBlock> bodyAction)
        {
            Block($"if ({condition})", bodyAction);
            return new TSIfBlock(this);
        }

        public TSIfBlock ElseIf(string condition, Action<TSBlock> bodyAction)
        {
            WriteNewLineBeforeNextText = false;
            Block($" else if ({condition})", bodyAction);
            return new TSIfBlock(this);
        }

        public void Else(Action<TSBlock> bodyAction)
        {
            WriteNewLineBeforeNextText = false;
            Block($" else", bodyAction);
        }

        public TSTryBlock Try(Action<TSBlock> tryAction)
        {
            Block($"try", tryAction);
            return new TSTryBlock(this);
        }

        public void Catch(string errorName, Action<TSBlock> catchAction)
        {
            WriteNewLineBeforeNextText = false;
            Block($" catch ({errorName})", catchAction);
        }

        public void Return(Action<TSValue> returnValueAction)
        {
            Text("return ");
            Value(returnValueAction);
            Line(";");
        }

        public void ConstVariable(string variableName, string variableType, string variableValue)
        {
            Text($"const {variableName}");
            if (!string.IsNullOrEmpty(variableType))
            {
                Text($": {variableType}");
            }
            Text(" = ");
            Text(variableValue);
            Line($";");
        }

        public void ConstObjectVariable(string variableName, string variableType, Action<TSObject> valueAction)
        {
            Text($"const {variableName}");
            if (!string.IsNullOrEmpty(variableType))
            {
                Text($": {variableType}");
            }
            Text(" = ");
            Object(valueAction);
            Line($";");
        }

        public void ConstObjectVariable(string variableName, string variableType, string value)
        {
            Text($"const {variableName}");
            if (!string.IsNullOrEmpty(variableType))
            {
                Text($": {variableType}");
            }
            Line($" = {value};");
        }

        public void Property(string name, string type, bool required = true, string accessModifier = "")
        {
            string modifier = String.IsNullOrEmpty(accessModifier) ? "" : $"{accessModifier} ";
            string optionalSuffix = required ? "" : "?";
            Line($"{modifier}{name}{optionalSuffix}: {type};");
        }

        public void Export(Action<TSExport> exportAction)
        {
            Line($"export {{");
            Indent(() =>
            {
                using (TSExport tsExport = new TSExport(this))
                {
                    exportAction.Invoke(tsExport);
                }
            });
            Line($"}};");
        }

        public void Export(params string[] exportedValues)
        {
            Export((IEnumerable<string>)exportedValues);
        }

        public void Export(IEnumerable<string> exportedValues)
        {
            if (exportedValues != null && exportedValues.Any())
            {
                Line($"export {{ {string.Join(", ", exportedValues)} }};");
            }
        }

        /// <summary>
        /// Exports all the exports from the given module.
        /// </summary>
        public void ExportAll(string modulePath)
        {
            Line($"export * from \"{modulePath}\";");
        }

        public void ExportConst(string exportedVariableName, string exportSource)
        {
            Line($"export const {exportedVariableName} = {exportSource};");
        }

        public void ExportInterface(string interfaceName, string baseTypeName, Action<TSInterface> action)
        {
            string declaration = $"interface {interfaceName}";
            if (!string.IsNullOrEmpty(baseTypeName))
            {
                declaration += $" extends {baseTypeName}";
            }
            Block($"export {declaration}", block =>
            {
                action?.Invoke(new TSInterface(this));
            });
        }

        public void ExportEnum(string enumName, Action<TSEnum> action)
        {
            Block($"export enum {enumName}", block =>
            {
                action?.Invoke(new TSEnum(this));
            });
        }

        public void Constructor(string parameters, string superParameters, Action<TSBlock> guardChecks = null, Action<TSBlock> implementation = null)
        {
            Block($"constructor({parameters})", block => {
                guardChecks?.Invoke(new TSBlock(this));
                Line();
                Line($"super({superParameters});");
                Line();
                implementation?.Invoke(new TSBlock(this));
            });
        }
    }
}
