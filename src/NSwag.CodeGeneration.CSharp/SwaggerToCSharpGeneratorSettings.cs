//-----------------------------------------------------------------------
// <copyright file="SwaggerToCSharpGeneratorSettings.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using NJsonSchema;
using NJsonSchema.CodeGeneration;
using NJsonSchema.CodeGeneration.CSharp;

namespace NSwag.CodeGeneration.CSharp
{
    /// <summary>Settings for the <see cref="SwaggerToCSharpGeneratorBase"/>.</summary>
    public abstract class SwaggerToCSharpGeneratorSettings : ClientGeneratorBaseSettings
    {
        /// <summary>Initializes a new instance of the <see cref="SwaggerToCSharpClientGeneratorSettings"/> class.</summary>
        protected SwaggerToCSharpGeneratorSettings()
        {
            AdditionalNamespaceUsages = null;
            CSharpGeneratorSettings = new CSharpGeneratorSettings
            {
                Namespace = "MyNamespace",
                NullHandling = NullHandling.Swagger, 
                TemplateFactory = new DefaultTemplateFactory()
            };
        }

        /// <summary>Gets or sets the CSharp generator settings.</summary>
        public CSharpGeneratorSettings CSharpGeneratorSettings { get; }

        /// <summary>Gets or sets the additional namespace usages.</summary>
        public string[] AdditionalNamespaceUsages { get; set; }

        /// <summary>Gets the code generator settings.</summary>
        public override CodeGeneratorSettingsBase CodeGeneratorSettings => CSharpGeneratorSettings;

        /// <summary>Gets or sets a value indicating whether to reorder parameters (required first, optional at the end) and generate optional C# parameters (default: false).</summary>
        public bool GenerateOptionalParameters { get; set; }
    }
}