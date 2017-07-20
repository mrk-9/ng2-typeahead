System.register(["@angular/platform-browser-dynamic", "./autocomplete-example-module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, autocomplete_example_module_1, platform;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (autocomplete_example_module_1_1) {
                autocomplete_example_module_1 = autocomplete_example_module_1_1;
            }
        ],
        execute: function () {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(autocomplete_example_module_1.AutoCompleteExampleModule);
        }
    };
});
//# sourceMappingURL=main.js.map