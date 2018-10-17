// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Model;
using System.Collections.Generic;

namespace AutoRest.TypeScript
{
    public static class Models
    {
        public static CodeModelTS CodeModel(GeneratorSettingsTS settings = null)
        {
            CodeModelTS codeModel = DependencyInjection.New<CodeModelTS>();

            codeModel.Settings = settings;

            return codeModel;
        }

        public static MethodGroupTS MethodGroup(CodeModelTS codeModel = null, IEnumerable<MethodTS> methods = null)
        {
            if (codeModel == null)
            {
                codeModel = CodeModel();
            }

            MethodGroupTS methodGroup = DependencyInjection.New<MethodGroupTS>();
            codeModel.Add(methodGroup);

            if (methods != null)
            {
                foreach (MethodTS method in methods)
                {
                    methodGroup.Add(method);
                }
            }

            return methodGroup;
        }

        public static MethodTS Method(
            HttpMethod httpMethod = HttpMethod.Get,
            string requestContentType = null,
            CodeModelTS codeModel = null,
            MethodGroupTS methodGroup = null,
            Response defaultResponse = null,
            IEnumerable<ParameterTS> parameters = null)
        {
            if (codeModel == null)
            {
                codeModel = CodeModel();
            }

            MethodTS method = DependencyInjection.New<MethodTS>();
            if (methodGroup == null)
            {
                methodGroup = MethodGroup(codeModel);
            }
            method.MethodGroup = methodGroup;

            codeModel.Add(method);

            method.HttpMethod = httpMethod;
            method.RequestContentType = requestContentType;

            method.DefaultResponse = defaultResponse;

            if (parameters != null)
            {
                foreach (ParameterTS parameter in parameters)
                {
                    method.Add(parameter);
                }
            }

            return method;
        }

        public static ParameterTS Parameter(string name = null, ParameterLocation location = ParameterLocation.None)
        {
            ParameterTS parameter = DependencyInjection.New<ParameterTS>();

            parameter.Name = name;
            parameter.Location = location;

            return parameter;
        }

        public static Response Response(IModelType body = null)
        {
            Response response = new Response();

            response.Body = body;

            return response;
        }

        public static CompositeTypeTS CompositeType(string name = null, IEnumerable<PropertyTS> properties = null, string xmlPrefix = null)
        {
            CompositeTypeTS compositeType = new CompositeTypeTS(name);

            if (!string.IsNullOrEmpty(xmlPrefix))
            {
                compositeType.XmlProperties = new XmlProperties
                {
                    Prefix = xmlPrefix,
                };
            }

            if (properties != null)
            {
                foreach (PropertyTS property in properties)
                {
                    compositeType.Add(property);
                }
            }

            return compositeType;
        }

        public static PropertyTS Property(string name = null, IModelType type = null, string xmlPrefix = null)
        {
            PropertyTS property = DependencyInjection.New<PropertyTS>();

            property.Name = name;
            property.ModelType = type;

            if (!string.IsNullOrEmpty(xmlPrefix))
            {
                property.XmlProperties = new XmlProperties
                {
                    Prefix = xmlPrefix,
                };
            }

            return property;
        }
    }
}
