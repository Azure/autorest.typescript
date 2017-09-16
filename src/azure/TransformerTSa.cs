using System;
using System.Linq;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions.Azure;
using AutoRest.TypeScript.Azure.Model;
using AutoRest.TypeScript.Model;
using static AutoRest.Core.Utilities.DependencyInjection;
using System.Collections.Generic;

namespace AutoRest.TypeScript.Azure
{
    public class TransformerTSa : TransformerTS, ITransformer<CodeModelTSa>
    {

        public override CodeModelTS TransformCodeModel(CodeModel codeModel)
        {
            return ((ITransformer<CodeModelTSa>)this).TransformCodeModel(codeModel);
        }

        CodeModelTSa ITransformer<CodeModelTSa>.TransformCodeModel(CodeModel cm)
        {
            var codeModel = cm as CodeModelTSa;
            if (codeModel == null)
            {
                throw new InvalidCastException("Code Model is not a TypeScript Azure code model.");
            }

            // MethodNames are normalized explicitly to provide a consitent method name while 
            // generating cloned methods for long running operations with reserved words. For
            // example - beginDeleteMethod() insteadof beginDelete() as delete is a reserved word.
            // Namer.NormalizeMethodNames(serviceClient);

            AzureExtensions.NormalizeAzureClientModel(codeModel);
            base.TransformCodeModel(codeModel);
            NormalizePaginatedMethods(codeModel);
            ExtendAllResourcesToBaseResource(codeModel);
            CreateModelTypeForOptionalClientProperties(codeModel);
            return codeModel;
        }

        private static void ExtendAllResourcesToBaseResource(CodeModelTSa codeModel)
        {
            if (codeModel != null)
            {
                foreach (var model in codeModel.ModelTypes)
                {
                    if (model.Extensions.ContainsKey(AzureExtensions.AzureResourceExtension) &&
                        (bool)model.Extensions[AzureExtensions.AzureResourceExtension])
                    {
                        model.BaseModelType = New<CompositeType>( new { Name = "BaseResource", SerializedName = "BaseResource" });
                    }
                }
            }
        }

        /// <summary>
        /// Changes paginated method signatures to return Page type.
        /// </summary>
        /// <param name="codeModel"></param>
        public virtual void NormalizePaginatedMethods(CodeModelTSa codeModel)
        {
            if (codeModel == null)
            {
                throw new ArgumentNullException("codeModel");
            }

            foreach (var method in codeModel.Methods.Where(m => m.Extensions.ContainsKey(AzureExtensions.PageableExtension)))
            {
                string nextLinkName = null;
                var ext = method.Extensions[AzureExtensions.PageableExtension] as Newtonsoft.Json.Linq.JContainer;
                if (ext == null)
                {
                    continue;
                }

                nextLinkName = (string)ext["nextLinkName"];
                string itemName = (string)ext["itemName"] ?? "value";
                foreach (var responseStatus in method.Responses.Where(r => r.Value.Body is CompositeType).Select(s => s.Key).ToArray())
                {
                    var compositType = (CompositeType)method.Responses[responseStatus].Body;
                    var sequenceType = compositType.Properties.Select(p => p.ModelType).FirstOrDefault(t => t is SequenceType) as SequenceType;

                    // if the type is a wrapper over page-able response
                    if (sequenceType != null)
                    {
                        compositType.Extensions[AzureExtensions.PageableExtension] = true;
                        var pageTemplateModel = new PageCompositeTypeTSa(nextLinkName, itemName).LoadFrom(compositType);
                        // var pageTemplateModel = new PageTemplateModel(compositType, serviceClient, nextLinkName, itemName);
                        if (!codeModel.PageTemplateModels.Any(ptm => ptm.StructurallyEquals(pageTemplateModel)))
                        {
                            codeModel.PageTemplateModels.Add(pageTemplateModel);
                        }
                    }
                }
            }
        }

        public override void CreateModelTypeForOptionalClientProperties(CodeModelTS cm)
        {
            List<string> predefinedOptionalProperties = new List<string>() {
                "requestOptions", "filters", "noRetryPolicy", "apiVersion",
                "acceptLanguage", "longRunningOperationRetryTimeout",
                "generateClientRequestId", "rpRegistrationRetryTimeout" };
            var optionalProperitesOnClient = cm.Properties.Where(
                p => (!p.IsRequired || p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue))
                && !p.IsConstant && !predefinedOptionalProperties.Contains(p.Name));
            if (optionalProperitesOnClient.Count() > 0)
            {
                string modelTypeName = cm.Name + "Options";
                var modelType = new CompositeTypeTS(modelTypeName);
                modelType.BaseModelType = New<CompositeType>(new { Name = "AzureServiceClientOptions", SerializedName = "AzureServiceClientOptions" });
                // We could end up having a property that is required but has a default value based on the above condition. If so then make it optional.
                optionalProperitesOnClient.Where(p => p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue)).ForEach(prop => prop.IsRequired = false);
                modelType.AddRange(optionalProperitesOnClient);
                var modelTypeFound = cm.ModelTypes.FirstOrDefault(m => m.Name.EqualsIgnoreCase(modelTypeName));
                if (modelTypeFound != null)
                {
                    cm.Remove(modelTypeFound);
                }
                cm.Add(modelType);
                cm.OptionalParameterTypeForClientConstructor = "Models." + modelTypeName;
            }
        }
    }
}