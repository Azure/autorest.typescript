using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AutoRest.Core;
using AutoRest.Core.Extensibility;
using AutoRest.Core.Logging;
using AutoRest.Core.Model;
using AutoRest.Core.Parsing;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Azure;
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

        private string codeGenerator;

        public Program(Connection connection, string codeGenerator, string sessionId) : base(connection, codeGenerator, sessionId)
        {
            this.codeGenerator = codeGenerator;
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
            string[] files = await ListInputs();
            if (files.Length != 1)
            {
                throw new Exception($"Generator received incorrect number of inputs: {files.Length} : {string.Join(",", files)}");
            }

            string modelAsJson = (await ReadFile(files[0])).EnsureYamlIsJson();
            CodeModel codeModelT = new ModelSerializer<CodeModel>().Load(modelAsJson);

            await InitializeCustomSettings(codeModelT);

            IAnyPlugin plugin = await CreatePlugin();
            using (plugin.Activate())
            {
                await InitializeNamespace();

                CodeModel codeModel = plugin.Serializer.Load(modelAsJson);

                GeneratorSettingsTS settings = Singleton<GeneratorSettingsTS>.Instance;
                settings.UpdatePackageVersion();
                ((CodeModelTS)codeModel).Settings = settings;

                codeModel = plugin.Transformer.TransformCodeModel(codeModel);

                plugin.CodeGenerator.Generate(codeModel).GetAwaiter().GetResult();
            }

            WriteGeneratedFilesToDisk();

            return true;
        }

        private async Task InitializeCustomSettings(CodeModel codeModel)
        {
            new Settings
            {
                Namespace = await GetValue("namespace"),
                ClientName = GetXmsCodeGenSetting<string>(codeModel, "name") ?? await GetValue("override-client-name"),
                PayloadFlatteningThreshold = GetXmsCodeGenSetting<int?>(codeModel, "ft") ?? await GetValue<int?>("payload-flattening-threshold") ?? 0,
                AddCredentials = await GetValue<bool?>("add-credentials") ?? false,
                Host = this
            };
            string header = await GetValue("license-header");

            Settings settings = Settings.Instance;
            if (header != null)
            {
                settings.Header = header;
            }
            settings.CustomSettings.Add("InternalConstructors", GetXmsCodeGenSetting<bool?>(codeModel, "internalConstructors") ?? await GetValue<bool?>("use-internal-constructors") ?? false);
            settings.CustomSettings.Add("SyncMethods", GetXmsCodeGenSetting<string>(codeModel, "syncMethods") ?? await GetValue("sync-methods") ?? "essential");
            settings.CustomSettings.Add("UseDateTimeOffset", GetXmsCodeGenSetting<bool?>(codeModel, "useDateTimeOffset") ?? await GetValue<bool?>("use-datetimeoffset") ?? false);
            settings.CustomSettings[CodeModelTS.ClientSideValidationSettingName] = await GetValue<bool?>("client-side-validation") ?? true;
            settings.MaximumCommentColumns = await GetValue<int?>("max-comment-columns") ?? Settings.DefaultMaximumCommentColumns;
            settings.OutputFileName = await GetValue<string>("output-file");

            foreach (PropertyInfo propertyInfo in typeof(GeneratorSettingsTS).GetProperties())
            {
                string propertyName = propertyInfo.Name;
                string kebabCasePropertyName = propertyName.ToKebabCase();
                Type propertyType = propertyInfo.PropertyType;
                if (propertyType == typeof(bool))
                {
                    bool? propertyValue = await GetValue<bool?>(kebabCasePropertyName);
                    if (propertyValue != null)
                    {
                        settings.CustomSettings[propertyName] = propertyValue.Value;
                    }
                }
                else if (propertyType == typeof(bool?))
                {
                    bool? propertyValue = await GetValue<bool?>(kebabCasePropertyName);
                    if (propertyValue != null)
                    {
                        settings.CustomSettings[propertyName] = propertyValue.Value.ToString();
                    }
                }
                else if (propertyType == typeof(string))
                {
                    string propertyValue = await GetValue<string>(kebabCasePropertyName);
                    if (propertyValue != null)
                    {
                        settings.CustomSettings[propertyName] = propertyValue;
                    }
                }
                else if (propertyType == typeof(string[]))
                {
                    string[] propertyValue = await GetValue<string[]>(kebabCasePropertyName);
                    if (propertyValue != null)
                    {
                        settings.CustomSettings[propertyName] = propertyValue;
                    }
                }
                else
                {
                    throw new NotSupportedException($"Cannot convert command line argument --{kebabCasePropertyName} to {nameof(GeneratorSettingsTS)}.{propertyName} because type {propertyType} is not supported.");
                }
            }
        }

        private async Task<IAnyPlugin> CreatePlugin()
        {
            bool? azureArm = await GetValue<bool?>("azure-arm");
            IAnyPlugin plugin;
            if (azureArm == true)
            {
                plugin = new PluginTSa();
            }
            else
            {
                plugin = new PluginTS();
            }

            Settings.PopulateSettings(plugin.Settings, Settings.Instance.CustomSettings);

            return plugin;
        }

        private async Task InitializeNamespace()
        {
            if (Settings.Instance.Namespace == null)
            {
                string[] inputFiles = await GetValue<string[]>("input-file") ?? new string[0];
                string altNamespace = inputFiles.FirstOrDefault()?.Split('/').Last().Split('\\').Last().Split('.').First();
                Settings.Instance.Namespace = CodeNamer.Instance.GetNamespaceName(altNamespace);
            }
        }

        private void WriteGeneratedFilesToDisk()
        {
            MemoryFileSystem outFS = Settings.Instance.FileSystemOutput;
            string[] outFiles = outFS.GetFiles("", "*", System.IO.SearchOption.AllDirectories);
            foreach (string outFile in outFiles)
            {
                WriteFile(outFile, outFS.ReadAllText(outFile), null);
            }
        }
    }
}