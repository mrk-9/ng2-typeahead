import { NgModule, ModuleWithProviders }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { PropertyHandler } from './PropertyHandler';
import { AutoComplete } from './autocomplete';
import { HtmlOutlet} from '../src/html-outlet';

@NgModule({
  imports:      [ BrowserModule,  FormsModule, ReactiveFormsModule],
  declarations: [ AutoComplete, HtmlOutlet],
  exports: [ AutoComplete, HtmlOutlet],
  providers:[PropertyHandler]
})
export class TypeAheadModule {
  static forRoot(): ModuleWithProviders { return {ngModule: TypeAheadModule, providers: [PropertyHandler]}; }
}