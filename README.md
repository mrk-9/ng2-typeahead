# ng2-typeahead
ng2-typeahead is angular2 ng2-typehead module. It is support static and dynamic data for auto complete

The sources for this package are in (https://github.com/rajan-g/ng2-typehead.git) repo. Please file issues and pull requests against that repo.
### Demo output
![autocomplete-screen](https://cloud.githubusercontent.com/assets/13415700/21797522/a6f5ac12-d735-11e6-92b3-b928ae69f05e.png)
##Install from npm
```sh
        npm install ng2-bootstrap-typeahead
```
### Example
#### Your Module Like below
```javascript
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
```
#### Your component like below
```javascript
/* 
 * @author RAJAN G
 */

import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `  
    <typeahead  [(ngModel)]="stateList" [typeAheadSetup]="typeAheadSetup"></typeahead>
    `,
})
export class AppComponent {
  stateListData = [{ "name": "Alabama", "abbreviation": "AL" }, { "name": "Alaska", "abbreviation": "AK" }, { "name": "AmericanSamoa", "abbreviation": "AS" }, { "name": "Arizona", "abbreviation": "AZ" }, { "name": "Arkansas", "abbreviation": "AR" }, { "name": "California", "abbreviation": "CA" }, { "name": "Colorado", "abbreviation": "CO" }, { "name": "Connecticut", "abbreviation": "CT" }, { "name": "Delaware", "abbreviation": "DE" }, { "name": "DistrictOfColumbia", "abbreviation": "DC" }, { "name": "FederatedStatesOfMicronesia", "abbreviation": "FM" }, { "name": "Florida", "abbreviation": "FL" }, { "name": "Georgia", "abbreviation": "GA" }, { "name": "Guam", "abbreviation": "GU" }, { "name": "Hawaii", "abbreviation": "HI" }, { "name": "Idaho", "abbreviation": "ID" }, { "name": "Illinois", "abbreviation": "IL" }, { "name": "Indiana", "abbreviation": "IN" }, { "name": "Iowa", "abbreviation": "IA" }, { "name": "Kansas", "abbreviation": "KS" }, { "name": "Kentucky", "abbreviation": "KY" }, { "name": "Louisiana", "abbreviation": "LA" }, { "name": "Maine", "abbreviation": "ME" }, { "name": "MarshallIslands", "abbreviation": "MH" }, { "name": "Maryland", "abbreviation": "MD" }, { "name": "Massachusetts", "abbreviation": "MA" }, { "name": "Michigan", "abbreviation": "MI" }, { "name": "Minnesota", "abbreviation": "MN" }, { "name": "Mississippi", "abbreviation": "MS" }, { "name": "Missouri", "abbreviation": "MO" }, { "name": "Montana", "abbreviation": "MT" }, { "name": "Nebraska", "abbreviation": "NE" }, { "name": "Nevada", "abbreviation": "NV" }, { "name": "NewHampshire", "abbreviation": "NH" }, { "name": "NewJersey", "abbreviation": "NJ" }, { "name": "NewMexico", "abbreviation": "NM" }, { "name": "NewYork", "abbreviation": "NY" }, { "name": "NorthCarolina", "abbreviation": "NC" }, { "name": "NorthDakota", "abbreviation": "ND" }, { "name": "NorthernMarianaIslands", "abbreviation": "MP" }, { "name": "Ohio", "abbreviation": "OH" }, { "name": "Oklahoma", "abbreviation": "OK" }, { "name": "Oregon", "abbreviation": "OR" }, { "name": "Palau", "abbreviation": "PW" }, { "name": "Pennsylvania", "abbreviation": "PA" }, { "name": "PuertoRico", "abbreviation": "PR" }, { "name": "RhodeIsland", "abbreviation": "RI" }, { "name": "SouthCarolina", "abbreviation": "SC" }, { "name": "SouthDakota", "abbreviation": "SD" }, { "name": "Tennessee", "abbreviation": "TN" }, { "name": "Texas", "abbreviation": "TX" }, { "name": "Utah", "abbreviation": "UT" }, { "name": "Vermont", "abbreviation": "VT" }, { "name": "VirginIslands", "abbreviation": "VI" }, { "name": "Virginia", "abbreviation": "VA" }, { "name": "Washington", "abbreviation": "WA" }, { "name": "WestVirginia", "abbreviation": "WV" }, { "name": "Wisconsin", "abbreviation": "WI" }, { "name": "Wyoming", "abbreviation": "WY" }];
  typeAheadSetup = {
    customTemplate: '<div> {{item.name}}</div>',
    //    timeDelay: number;
    // type: 'static', //static || dynamic.  default value is dynamic
    placeHolder: 'State name',
    textPrperty: 'name',
    valueProperty: 'abbreviation',
    searchProperty: 'name',
    onSelect: (selectedItem: any) => { console.log(selectedItem) },
    asynchDataCall: (value: string, cb: any) => {
      let result = this.stateListData.filter((item: any) => {
        return item.name.indexOf(value) !== -1;
      });
    //you can place your webservice call here
      setTimeout(() => {
        cb(result);
      }, 200);
    },
    //staticDataFilterkey: any;
    //staticData: stateListData
  }
}

```