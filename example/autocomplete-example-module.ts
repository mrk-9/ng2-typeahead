import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { TypeAheadModule } from '../src/typeahead.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TypeAheadModule ],
  declarations: [AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AutoCompleteExampleModule { }