using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoRest.Core;
using AutoRest.Core.Extensibility;
using AutoRest.Core.Model;
using AutoRest.Core.Parsing;
using AutoRest.Core.Utilities;
using Microsoft.Perks.JsonRPC;

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
            Settings.Instance.CustomSettings["ClientSideValidation"] = await GetValue<bool?>("client-side-validation") ?? false;
            int defaultMaximumCommentColumns = codeGenerator == "go" ? 120 : Settings.DefaultMaximumCommentColumns;
            Settings.Instance.MaximumCommentColumns = await GetValue<int?>("max-comment-columns") ?? defaultMaximumCommentColumns;
            Settings.Instance.OutputFileName = await GetValue<string>("output-file");
            Settings.Instance.CustomSettings.Add("GenerateMetadata", await GetValue<bool?>("generate-metadata") ?? false);
            Settings.Instance.CustomSettings.Add("OutputFolder", await GetValue<string>("output-folder"));
            Settings.Instance.CustomSettings.Add("ModelEnumAsUnion", await GetValue<bool?>("model-enum-as-union") ?? false);
            if (codeGenerator == "csharp")
            {
                Settings.Instance.Header = $"<auto-generated>\n{Settings.Instance.Header}\n</auto-generated>";
            }
            if (codeGenerator == "ruby" || codeGenerator == "python")
            {
                // TODO: sort out matters here entirely instead of relying on Input being read somewhere...
                var inputFile = await GetValue<string[]>("input-file");
                Settings.Instance.Input = inputFile.FirstOrDefault();
                Settings.Instance.PackageName = await GetValue("package-name");
                Settings.Instance.PackageVersion = await GetValue("package-version");
            }
            if (codeGenerator == "go")
            {
                Settings.Instance.PackageVersion = await GetValue("package-version");
            }
            if (codeGenerator == "typescript")
            {
                Settings.Instance.PackageName = await GetValue("package-name");
                Settings.Instance.PackageVersion = await GetValue("package-version");
            }

            // process
            var plugin = ExtensionsLoader.GetPlugin(
                (await GetValue<bool?>("azure-arm") ?? false ? "Azure." : "") +
                language +
                (await GetValue<bool?>("fluent") ?? false ? ".Fluent" : "") +
                (await GetValue<bool?>("testgen") ?? false ? ".TestGen" : ""));
            Settings.PopulateSettings(plugin.Settings, Settings.Instance.CustomSettings);

            using (plugin.Activate())
            {
                Settings.Instance.Namespace = Settings.Instance.Namespace ?? CodeNamer.Instance.GetNamespaceName(altNamespace);
                var codeModel = plugin.Serializer.Load(modelAsJson);
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