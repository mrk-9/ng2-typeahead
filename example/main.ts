import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AutoCompleteExampleModule } from './autocomplete-example-module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AutoCompleteExampleModule);
