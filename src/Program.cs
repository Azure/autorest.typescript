using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AutoRest.Core;
using AutoRest.Core.Extensibility;
using AutoRest.Core.Model;
using AutoRest.Core.Parsing;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Model;
using Microsoft.Perks.JsonRPC;
using static AutoRest.Core.Utilities.DependencyInjection;
using IAnyPlugin = AutoRest.Core.Extensibility.IPlugin<AutoRest.Core.Extensibility.IGeneratorSettings, AutoRest.Core.IModelSerializer<AutoRest.Core.Model.CodeModel>, AutoRest.Core.ITransformer<AutoRest.Core.Model.CodeModel>, AutoRest.Core.CodeGenerator, AutoRest.Core.CodeNamer, AutoRest.Core.Model.CodeModel>;

namespace AutoRest.TypeScript
{
    public static class ExtensionsLoader
    {
        public static IAnyPlugin GetPlugin(string name)
        {
            switch (name)
            {
                case "TypeScript": return new AutoRest.TypeScript.PluginTS();
                case "Azure.TypeScript": return new AutoRest.TypeScript.Azure.PluginTSa();
            }
            throw new Exception("Unknown plugin: " + name);
        }
    }

    public class Program : NewPlugin
    {
        public static int Main(string[] args )
        {
            if(args != null && args.Length > 0 && args[0] == "--server") {
                var connection = new Connection(Console.OpenStandardOutput(), Console.OpenStandardInput());
                connection.Dispatch<IEnumerable<string>>("GetPluginNames", async () => new []{ "typescript" });
                connection.Dispatch<string, string, bool>("Process", (plugin, sessionId) => new Program(connection, plugin, sessionId).Process());
                connection.DispatchNotification("Shutdown", connection.Stop);

                // wait for something to do.
                connection.GetAwaiter().GetResult();

                Console.Error.WriteLine("Shutting Down");
                return 0;
            }
            Console.WriteLine("This is not an entry point.");
            Console.WriteLine("Please invoke this extension through AutoRest.");
            return 1;
        }

        private string plugin;

        public Program(Connection connection, string plugin, string sessionId) : base(connection, plugin, sessionId)
        {
            this.plugin = plugin;
        }

        private T GetXmsCodeGenSetting<T>(CodeModel codeModel, string name)
        {
            try
            {
                return (T)Convert.ChangeType(
                    codeModel.CodeGenExtensions[name],
                    typeof(T).GenericTypeArguments.Length == 0 ? typeof(T) : typeof(T).GenericTypeArguments[0] // un-nullable
                );
            }
            catch
            {
                return default(T);
            }
        }

        protected override async Task<bool> ProcessInternal()
        {
            var codeGenerator = this.plugin;

            var files = await ListInputs();
            if (files.Length != 1)
            {
                throw new Exception($"Generator received incorrect number of inputs: {files.Length} : {string.Join(",", files)}");
            }
            var modelAsJson = (await ReadFile(files[0])).EnsureYamlIsJson();
            var codeModelT = new ModelSerializer<CodeModel>().Load(modelAsJson);

            // get internal name
            var language = new[] {
                "CSharp",
                "Ruby",
                "NodeJS",
                "TypeScript",
                "Python",
                "Go",
                "Php",
                "Java",
                "AzureResourceSchema",
                "JsonRpcClient" }
                .Where(x => x.ToLowerInvariant() == codeGenerator)
                .First();

            // build settings
            var altNamespace = (await GetValue<string[]>("input-file") ?? new[] { "" }).FirstOrDefault()?.Split('/').Last().Split('\\').Last().Split('.').First();

            new Settings
            {
                Namespace = await GetValue("namespace"),
                ClientName = GetXmsCodeGenSetting<string>(codeModelT, "name") ?? await GetValue("override-client-name"),
                PayloadFlatteningThreshold = GetXmsCodeGenSetting<int?>(codeModelT, "ft") ?? await GetValue<int?>("payload-flattening-threshold") ?? 0,
                AddCredentials = await GetValue<bool?>("add-credentials") ?? false,
                Host = this
            };
            var header = await GetValue("license-header");

            if (header != null)
            {
                Settings.Instance.Header = header;
            }
            Settings.Instance.CustomSettings.Add("InternalConstructors", GetXmsCodeGenSetting<bool?>(codeModelT, "internalConstructors") ?? await GetValue<bool?>("use-internal-constructors") ?? false);
            Settings.Instance.CustomSettings.Add("SyncMethods", GetXmsCodeGenSetting<string>(codeModelT, "syncMethods") ?? await GetValue("sync-methods") ?? "essential");
            Settings.Instance.CustomSettings.Add("UseDateTimeOffset", GetXmsCodeGenSetting<bool?>(codeModelT, "useDateTimeOffset") ?? await GetValue<bool?>("use-datetimeoffset") ?? false);
            Settings.Instance.CustomSettings[CodeModelTS.ClientSideValidationSettingName] = await GetValue<bool?>("client-side-validation") ?? true;
            int defaultMaximumCommentColumns = codeGenerator == "go" ? 120 : Settings.DefaultMaximumCommentColumns;
            Settings.Instance.MaximumCommentColumns = await GetValue<int?>("max-comment-columns") ?? defaultMaximumCommentColumns;
            Settings.Instance.OutputFileName = await GetValue<string>("output-file");

            foreach (PropertyInfo propertyInfo in typeof(GeneratorSettingsTS).GetProperties())
            {
                string propertyName = propertyInfo.Name;
                string kebabCasePropertyName = propertyName.ToKebabCase();
                Type propertyType = propertyInfo.PropertyType;
                if (propertyType == typeof(bool))
                {
                    bool? propertyValue = await GetValue<bool?>(kebabCasePropertyName);
                    if (propertyValue.HasValue)
                    {
                        Settings.Instance.CustomSettings[propertyName] = propertyValue.Value;
                    }
                }
                else if (propertyType == typeof(string))
                {
                    string propertyValue = await GetValue<string>(kebabCasePropertyName);
                    if (propertyValue != null)
                    {
                        Settings.Instance.CustomSettings[propertyName] = propertyValue;
                    }
                }
                else
                {
                    throw new NotSupportedException($"Cannot convert command line argument --{kebabCasePropertyName} to {nameof(GeneratorSettingsTS)}.{propertyName} because type {propertyType} is not supported.");
                }
            }

            // process
            var plugin = ExtensionsLoader.GetPlugin(
                (await GetValue<bool?>("azure-arm") ?? false ? "Azure." : "") +
                language +
                (await GetValue<bool?>("fluent") ?? false ? ".Fluent" : "") +
                (await GetValue<bool?>("testgen") ?? false ? ".TestGen" : ""));
            Settings.PopulateSettings(plugin.Settings, Settings.Instance.CustomSettings);

            void initializeSettings(CodeModelTS codeModel)
            {
                GeneratorSettingsTS generatorSettings = Singleton<GeneratorSettingsTS>.Instance;
                codeModel.PackageName = Settings.Instance.PackageName;
                codeModel.PackageVersion = Settings.Instance.PackageVersion;
                codeModel.OutputFolder = generatorSettings.OutputFolder;
                codeModel.ModelEnumAsUnion = generatorSettings.ModelEnumAsUnion;
                codeModel.ModelDateTimeAsString = generatorSettings.ModelDateTimeAsString;
                codeModel.GenerateMetadata = generatorSettings.GenerateMetadata;
                codeModel.GenerateBodyMethods = generatorSettings.GenerateBodyMethods;
            }

            using (plugin.Activate())
            {
                Settings.Instance.Namespace = Settings.Instance.Namespace ?? CodeNamer.Instance.GetNamespaceName(altNamespace);
                var codeModel = plugin.Serializer.Load(modelAsJson);
                initializeSettings((CodeModelTS) codeModel);
                codeModel = plugin.Transformer.TransformCodeModel(codeModel);
                if (await GetValue<bool?>("sample-generation") ?? false)
                {
                    plugin.CodeGenerator.GenerateSamples(codeModel).GetAwaiter().GetResult();
                }
                else
                {
                    plugin.CodeGenerator.Generate(codeModel).GetAwaiter().GetResult();
                }
            }

            // write out files
            var outFS = Settings.Instance.FileSystemOutput;
            var outFiles = outFS.GetFiles("", "*", System.IO.SearchOption.AllDirectories);
            foreach (var outFile in outFiles)
            {
                WriteFile(outFile, outFS.ReadAllText(outFile), null);
            }

            return true;
        }
    }
}