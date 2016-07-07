using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using NConsole;
using NSwag.CodeGeneration.CodeGenerators;
using NSwag.CodeGeneration.CodeGenerators.CSharp;

namespace NSwag.Commands
{
    [Description("Generates CSharp client code from a Swagger specification.")]
    public class SwaggerToCSharpClientCommand : SwaggerToCSharpCommand<SwaggerToCSharpClientGeneratorSettings>
    {
        public SwaggerToCSharpClientCommand() : base(new SwaggerToCSharpClientGeneratorSettings())
        {
        }

        [Description("The client base class (empty for no base class).")]
        [Argument(Name = "ClientBaseClass", IsRequired = false)]
        public string ClientBaseClass
        {
            get { return Settings.ClientBaseClass; }
            set { Settings.ClientBaseClass = value; }
        }

        [Description("Specifies whether generate client classes.")]
        [Argument(Name = "GenerateClientClasses", IsRequired = false)]
        public bool GenerateClientClasses
        {
            get { return Settings.GenerateClientClasses; }
            set { Settings.GenerateClientClasses = value; }
        }

        [Description("Specifies whether generate interfaces for the client classes.")]
        [Argument(Name = "GenerateClientInterfaces", IsRequired = false)]
        public bool GenerateClientInterfaces
        {
            get { return Settings.GenerateClientInterfaces; }
            set { Settings.GenerateClientInterfaces = value; }
        }

        [Description("Specifies whether to generate DTO classes.")]
        [Argument(Name = "GenerateDtoTypes", IsRequired = false)]
        public bool GenerateDtoTypes
        {
            get { return Settings.GenerateDtoTypes; }
            set { Settings.GenerateDtoTypes = value; }
        }

        [Description("Specifies whether to call CreateHttpClientAsync on the base class to create a new HttpClient.")]
        [Argument(Name = "UseHttpClientCreationMethod", IsRequired = false)]
        public bool UseHttpClientCreationMethod
        {
            get { return Settings.UseHttpClientCreationMethod; }
            set { Settings.UseHttpClientCreationMethod = value; }
        }

        [Description("Specifies whether to generate contracts output (interface and models in a separate file set with the ContractsOutput parameter).")]
        [Argument(Name = "GenerateContractsOutput", IsRequired = false)]
        public bool GenerateContractsOutput { get; set; }

        [Description("The contracts .NET namespace.")]
        [Argument(Name = "ContractsNamespace", IsRequired = false)]
        public string ContractsNamespace { get; set; }

        [Description("The contracts output file path (optional, if no path is set then a single file with the implementation and contracts is generated).")]
        [Argument(Name = "ContractsOutput", IsRequired = false)]
        public string ContractsOutputFilePath { get; set; }

        public override async Task<object> RunAsync(CommandLineProcessor processor, IConsoleHost host)
        {
            var result = await RunAsync();
            foreach (var pair in result)
                TryWriteFileOutput(pair.Key, host, () => pair.Value);
            return result;
        }

        public async Task<Dictionary<string, string>> RunAsync()
        {
            return await Task.Run(() =>
            {
                var clientGenerator = new SwaggerToCSharpClientGenerator(InputSwaggerService, Settings);

                if (GenerateContractsOutput)
                {
                    var result = new Dictionary<string, string>();

                    var savedAdditionalNamespaceUsages = Settings.AdditionalNamespaceUsages.ToArray();
                    Settings.AdditionalNamespaceUsages = Settings.AdditionalNamespaceUsages.Concat(new[] { ContractsNamespace }).ToArray();
                    result[ContractsOutputFilePath] = clientGenerator.GenerateFile(ClientGeneratorOutputType.Contracts);
                    Settings.AdditionalNamespaceUsages = savedAdditionalNamespaceUsages;

                    var savedNamespace = Settings.CSharpGeneratorSettings.Namespace;
                    Settings.CSharpGeneratorSettings.Namespace = ContractsNamespace;
                    result[OutputFilePath] = clientGenerator.GenerateFile(ClientGeneratorOutputType.Implementation);
                    Settings.CSharpGeneratorSettings.Namespace = savedNamespace;

                    return result;
                }
                else
                {
                    return new Dictionary<string, string>
                    {
                        { OutputFilePath, clientGenerator.GenerateFile(ClientGeneratorOutputType.Full) }
                    };
                }
            });
        }
    }
}