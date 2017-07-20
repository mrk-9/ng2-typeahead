/*
 * @author RAJAN G
 */
System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {/*
             * @author RAJAN G
             */
            AppComponent = (function () {
                //import { AutoComplete, IView } from '../directives/autocomplete';
                function AppComponent() {
                    var _this = this;
                    this.stateListData = [{ "name": "Alabama", "abbreviation": "AL" }, { "name": "Alaska", "abbreviation": "AK" }, { "name": "AmericanSamoa", "abbreviation": "AS" }, { "name": "Arizona", "abbreviation": "AZ" }, { "name": "Arkansas", "abbreviation": "AR" }, { "name": "California", "abbreviation": "CA" }, { "name": "Colorado", "abbreviation": "CO" }, { "name": "Connecticut", "abbreviation": "CT" }, { "name": "Delaware", "abbreviation": "DE" }, { "name": "DistrictOfColumbia", "abbreviation": "DC" }, { "name": "FederatedStatesOfMicronesia", "abbreviation": "FM" }, { "name": "Florida", "abbreviation": "FL" }, { "name": "Georgia", "abbreviation": "GA" }, { "name": "Guam", "abbreviation": "GU" }, { "name": "Hawaii", "abbreviation": "HI" }, { "name": "Idaho", "abbreviation": "ID" }, { "name": "Illinois", "abbreviation": "IL" }, { "name": "Indiana", "abbreviation": "IN" }, { "name": "Iowa", "abbreviation": "IA" }, { "name": "Kansas", "abbreviation": "KS" }, { "name": "Kentucky", "abbreviation": "KY" }, { "name": "Louisiana", "abbreviation": "LA" }, { "name": "Maine", "abbreviation": "ME" }, { "name": "MarshallIslands", "abbreviation": "MH" }, { "name": "Maryland", "abbreviation": "MD" }, { "name": "Massachusetts", "abbreviation": "MA" }, { "name": "Michigan", "abbreviation": "MI" }, { "name": "Minnesota", "abbreviation": "MN" }, { "name": "Mississippi", "abbreviation": "MS" }, { "name": "Missouri", "abbreviation": "MO" }, { "name": "Montana", "abbreviation": "MT" }, { "name": "Nebraska", "abbreviation": "NE" }, { "name": "Nevada", "abbreviation": "NV" }, { "name": "NewHampshire", "abbreviation": "NH" }, { "name": "NewJersey", "abbreviation": "NJ" }, { "name": "NewMexico", "abbreviation": "NM" }, { "name": "NewYork", "abbreviation": "NY" }, { "name": "NorthCarolina", "abbreviation": "NC" }, { "name": "NorthDakota", "abbreviation": "ND" }, { "name": "NorthernMarianaIslands", "abbreviation": "MP" }, { "name": "Ohio", "abbreviation": "OH" }, { "name": "Oklahoma", "abbreviation": "OK" }, { "name": "Oregon", "abbreviation": "OR" }, { "name": "Palau", "abbreviation": "PW" }, { "name": "Pennsylvania", "abbreviation": "PA" }, { "name": "PuertoRico", "abbreviation": "PR" }, { "name": "RhodeIsland", "abbreviation": "RI" }, { "name": "SouthCarolina", "abbreviation": "SC" }, { "name": "SouthDakota", "abbreviation": "SD" }, { "name": "Tennessee", "abbreviation": "TN" }, { "name": "Texas", "abbreviation": "TX" }, { "name": "Utah", "abbreviation": "UT" }, { "name": "Vermont", "abbreviation": "VT" }, { "name": "VirginIslands", "abbreviation": "VI" }, { "name": "Virginia", "abbreviation": "VA" }, { "name": "Washington", "abbreviation": "WA" }, { "name": "WestVirginia", "abbreviation": "WV" }, { "name": "Wisconsin", "abbreviation": "WI" }, { "name": "Wyoming", "abbreviation": "WY" }];
                    this.typeAheadSetup = {
                        //customTemplate: '<div> {{item.name}}</div>',
                        //    timeDelay: number;
                        // type: 'static', //static || dynamic default dynamic
                        placeHolder: 'State name',
                        textPrperty: 'name',
                        valueProperty: 'abbreviation',
                        searchProperty: 'name',
                        isMultiselect: true,
                        onSelect: function (selectedItem) { console.log(selectedItem); },
                        asynchDataCall: function (value, cb) {
                            var result = _this.stateListData.filter(function (item) {
                                return item.name.indexOf(value) !== -1;
                            });
                            setTimeout(function () {
                                cb(result);
                            }, 200);
                        },
                    };
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n    <div style=\"width:300px;padding:10px\"> \n    <typeahead  [(ngModel)]=\"stateList\" [typeAheadSetup]=\"typeAheadSetup\"></typeahead>\n    <div></div>\n    </div>\n    <!--<html-outlet [html]=\"model.template\"></html-outlet>\n    <html-outlet [html]=\"model.template\"></html-outlet>\n    <html-outlet [html]=\"model.template\"></html-outlet>\n    <html-outlet [html]=\"model.template\"></html-outlet>\n    <typehead [(ngModel)]=\"stateList\" [typeAheadSetup]=\"typeAheadSetup\"></typehead>-->\n",
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map