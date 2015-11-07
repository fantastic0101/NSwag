//-----------------------------------------------------------------------
// <copyright file="AssemblySwaggerGeneratorViewModel.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Win32;
using MyToolkit.Command;
using MyToolkit.Storage;
using NJsonSchema;
using NSwag.CodeGeneration.SwaggerGenerators.WebApi;

namespace NSwagStudio.ViewModels.SwaggerGenerators
{
    public class AssemblySwaggerGeneratorViewModel : ViewModelBase
    {
        private string _assemblyPath;
        private string _className;
        private string[] _allClassNames;
        private EnumHandling _defaultEnumHandling;

        /// <summary>Initializes a new instance of the <see cref="AssemblySwaggerGeneratorViewModel"/> class.</summary>
        public AssemblySwaggerGeneratorViewModel()
        {
            BrowseAssemblyCommand = new AsyncRelayCommand(BrowseAssembly);
            LoadAssemblyCommand = new AsyncRelayCommand(LoadAssembly, () => !string.IsNullOrEmpty(AssemblyPath));

            AssemblyPath = ApplicationSettings.GetSetting("AssemblyPath", string.Empty);
            LoadAssemblyCommand.TryExecute();
        }

        /// <summary>Gets or sets the async type. </summary>
        public EnumHandling DefaultEnumHandling
        {
            get { return _defaultEnumHandling; }
            set { Set(ref _defaultEnumHandling, value); }
        }

        /// <summary>Gets the async types. </summary>
        public EnumHandling[] EnumHandlings
        {
            get { return Enum.GetNames(typeof(EnumHandling)).Select(t => (EnumHandling)Enum.Parse(typeof(EnumHandling), t)).ToArray(); }
        }

        /// <summary>Gets or sets the command to browse for an assembly.</summary>
        public AsyncRelayCommand BrowseAssemblyCommand { get; set; }

        /// <summary>Gets or sets the command to load the types from an assembly.</summary>
        public AsyncRelayCommand LoadAssemblyCommand { get; set; }

        /// <summary>Gets or sets the assembly path. </summary>
        public string AssemblyPath
        {
            get { return _assemblyPath; }
            set
            {
                if (Set(ref _assemblyPath, value))
                {
                    LoadAssemblyCommand.RaiseCanExecuteChanged();
                    ApplicationSettings.SetSetting("AssemblyPath", _assemblyPath);
                    RaisePropertyChanged(() => AssemblyName);
                }
            }
        }

        /// <summary>Gets the name of the selected assembly.</summary>
        public string AssemblyName
        {
            get { return Path.GetFileName(AssemblyPath); }
        }

        /// <summary>Gets or sets the class name. </summary>
        public string ClassName
        {
            get { return _className; }
            set { Set(ref _className, value); }
        }

        /// <summary>Gets or sets the all class names. </summary>
        public string[] AllClassNames
        {
            get { return _allClassNames; }
            set { Set(ref _allClassNames, value); }
        }

        private async Task BrowseAssembly()
        {
            var dlg = new OpenFileDialog();
            dlg.DefaultExt = ".dll";
            dlg.Filter = ".NET Assemblies (.dll)|*.dll";
            if (dlg.ShowDialog() == true)
            {
                AssemblyPath = dlg.FileName;
                await LoadAssembly();
            }
        }

        private Task LoadAssembly()
        {
            return RunTaskAsync(async () =>
            {
                AllClassNames = await Task.Run(() =>
                {
                    var generator = new AssemblyTypeToSwaggerGenerator(AssemblyPath);
                    return generator.GetClasses();
                });
                ClassName = AllClassNames.FirstOrDefault();
            });
        }

        public async Task<string> GenerateSwaggerAsync()
        {
            return await RunTaskAsync(async () =>
            {
                return await Task.Run(() =>
                {
                    var settings = new JsonSchemaGeneratorSettings { DefaultEnumHandling = DefaultEnumHandling };
                    var generator = new AssemblyTypeToSwaggerGenerator(AssemblyPath, settings);
                    return generator.Generate(new[] { ClassName }).ToJson();
                });
            });
        }
    }
}