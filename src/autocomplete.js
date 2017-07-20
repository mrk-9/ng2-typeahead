System.register(["@angular/core", "@angular/forms", "./PropertyHandler"], function (exports_1, context_1) {
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
    var core_1, forms_1, PropertyHandler_1, noop, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, AutoComplete;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (PropertyHandler_1_1) {
                PropertyHandler_1 = PropertyHandler_1_1;
            }
        ],
        execute: function () {
            noop = function () {
            };
            exports_1("CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return AutoComplete; }),
                multi: true
            });
            AutoComplete = (function () {
                function AutoComplete(propertyHandler, inputEle) {
                    this.propertyHandler = propertyHandler;
                    this.inputEle = inputEle;
                    this.enable = false;
                    this.isDataLoading = false;
                    this.innerValue = '';
                    this.onTouchedCallback = noop;
                    this.onChangeCallback = noop;
                }
                AutoComplete.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataList = this.typeAheadSetup.staticData ? this.typeAheadSetup.staticData : [];
                    this.type = this.typeAheadSetup.type ? this.typeAheadSetup.type : 'dynamic';
                    if (this.typeAheadSetup.isMultiselect) {
                        window.addEventListener('click', function ($event) {
                            _this.dataList = [];
                        });
                    }
                    //    this.enable = true;
                };
                AutoComplete.prototype.onInputChange = function ($event) {
                    var _this = this;
                    var value = $event.target.value;
                    this.isDataLoading = true;
                    if (this.type === 'static') {
                        this.dataList = [];
                        var serchPropList_1 = this.typeAheadSetup.searchProperty.split(',');
                        if (this.typeAheadSetup.staticData && this.typeAheadSetup.staticData) {
                            this.dataList = this.typeAheadSetup.staticData.filter(function (item) {
                                var isValid = false;
                                for (var i = 0; i < serchPropList_1.length; i++) {
                                    var originalValue = _this.propertyHandler.getValueByProperty(item, serchPropList_1[i]);
                                    if (originalValue && originalValue.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                                        isValid = true;
                                    }
                                }
                                return isValid;
                            });
                            this.isDataLoading = false;
                        }
                    }
                    else {
                        this.typeAheadSetup.asynchDataCall(value, function (dataList) {
                            _this.dataList = dataList;
                            _this.isDataLoading = false;
                        });
                    }
                };
                AutoComplete.prototype.getLabel = function (item) {
                    return this.propertyHandler.getValueByProperty(item, this.typeAheadSetup.textPrperty);
                };
                AutoComplete.prototype.selectedItem = function (item) {
                    this.selectedObjectItem = item;
                    if (this.typeAheadSetup.isMultiselect) {
                        if (!this.value) {
                            this.value = [];
                        }
                        var isAvailable = this.isActive(item);
                        if (isAvailable) {
                            var index = this.value.indexOf(this.propertyHandler.getValueByProperty(item, this.typeAheadSetup.valueProperty));
                            this.value.splice(index, 1);
                        }
                        else {
                            this.value.push(this.propertyHandler.getValueByProperty(item, this.typeAheadSetup.valueProperty));
                        }
                    }
                    else {
                        this.value = this.propertyHandler.getValueByProperty(item, this.typeAheadSetup.valueProperty);
                        this.autoCompleteSelectedLabel = this.propertyHandler.getValueByProperty(item, this.typeAheadSetup.textPrperty);
                        this.dataList = [];
                    }
                    if (this.typeAheadSetup['onSelect']) {
                        this.typeAheadSetup['onSelect'](item);
                    }
                };
                Object.defineProperty(AutoComplete.prototype, "value", {
                    //get accessor
                    get: function () {
                        return this.innerValue;
                    },
                    //set accessor including call the onchange callback
                    set: function (v) {
                        if (v !== this.innerValue) {
                            this.innerValue = v;
                            this.onChangeCallback(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                //Set touched on blur
                AutoComplete.prototype.onBlur = function () {
                    this.onTouchedCallback();
                };
                //From ControlValueAccessor interface
                AutoComplete.prototype.writeValue = function (value) {
                    if (value !== this.value) {
                        this.value = value;
                    }
                };
                //From ControlValueAccessor interface
                AutoComplete.prototype.registerOnChange = function (fn) {
                    this.onChangeCallback = fn;
                };
                //From ControlValueAccessor interface
                AutoComplete.prototype.registerOnTouched = function (fn) {
                    this.onTouchedCallback = fn;
                };
                //FOR multi select fix
                AutoComplete.prototype.clickedInTypeHead = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                };
                AutoComplete.prototype.isActive = function (item) {
                    if (!this.typeAheadSetup.isMultiselect) {
                        return false;
                    }
                    return this.value && this.value.indexOf(this.propertyHandler.getValueByProperty(item, this.typeAheadSetup.valueProperty)) !== -1;
                };
                return AutoComplete;
            }());
            __decorate([
                core_1.Input('typeAheadSetup'),
                __metadata("design:type", Object)
            ], AutoComplete.prototype, "typeAheadSetup", void 0);
            AutoComplete = __decorate([
                core_1.Component({
                    selector: 'typeahead[ngModel][typeAheadSetup]',
                    encapsulation: core_1.ViewEncapsulation.None,
                    providers: [forms_1.NgModel, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    template: "\n   <span class=\"twitter-typeahead\" style=\"position: relative;display: inline-block;\" (click)=\"clickedInTypeHead($event)\">\n    <span [ngClass]=\"{'input-container': isDataLoading}\">\n      <input type=\"text\" [placeholder]=\"typeAheadSetup && typeAheadSetup.placeHolder ? typeAheadSetup.placeHolder : ''\" class=\"ng2typehead typeahead tt-hint input-container\" value=\"\" (keyup)=\"onInputChange($event)\" (focus)=\"enable= true;\" [(ngModel)]=\"autoCompleteSelectedLabel\" />\n    </span>\n    <input type=\"text\" style=\"display:none\" [(ngModel)]=\"value\" />\n    <pre aria-hidden=\"true\" style=\"position: absolute; visibility: hidden; white-space: pre; font-family: Arial; font-size: 22px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;\">{{autoCompleteSelectedLabel}}</pre>    \n    <div class=\"tt-dropdown-menu1 tt-menu tt-open\"  *ngIf=\"dataList && dataList.length && enable\">\n            <div  class=\"typehead-item1 tt-suggestion\" *ngFor=\"let item of dataList\"   [ngClass]=\"{'active': isActive(item)}\">\n              <div class=\" tt-cursor\" *ngIf=\"!typeAheadSetup.customTemplate\" (click)=\"selectedItem(item)\">\n              <div *ngIf=\"!typeAheadSetup.isMultiselect\">{{getLabel(item)}}{{typeAheadSetup.isMultiselect}}</div>\n              <div *ngIf=\"typeAheadSetup.isMultiselect\">\n                <input type=\"checkbox\" [checked]=\"isActive(item) ? true: null\" value=\"\"> \n                {{getLabel(item)}}</div>\n              </div>\n              <div  class=\" tt-cursor\" *ngIf=\"typeAheadSetup.customTemplate\" (click)=\"selectedItem(item)\">\n                <html-outlet [html]=\"typeAheadSetup.customTemplate\" [item]=\"item\"></html-outlet>\n              </div>\n            </div>\n    </div>\n   </span>\n    ",
                    styles: ["\n  .input-container:after {\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: scale(.5);\n    content:  url(data:image/gif;base64,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);\n  }\n  .ng2-typehead{width:100%}\n  .typehead-list{position:absolute;left:0px;z-index:100;display:block;border:1px solid #ddd;background-color:#fff;height: 200px;overflow-y: scroll;}\n  .typehead-list ul{list-style: none;padding-left: 3px; width:100%; max-height:200px;} .typehead-item{border-top:1px solid #ddd;width:100%}\n  .ng2typehead{width:100%} .typehead-item:hover{background-color: #428BCA;color:#fff}\n  span.twitter-typeahead .tt-menu,\nspan.twitter-typeahead .tt-dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n.tt-open {\ndisplay:block!important\n}\nspan.twitter-typeahead .tt-suggestion {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333333;\n  white-space: nowrap;\n}\nspan.twitter-typeahead .tt-suggestion.tt-cursor,\nspan.twitter-typeahead .tt-suggestion:hover,\nspan.twitter-typeahead .tt-suggestion:focus{\n  color: #ffffff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\nspan.twitter-typeahead .tt-suggestion.tt-cursor,\nspan.twitter-typeahead .tt-suggestion:hover,\nspan.twitter-typeahead .active,\nspan.twitter-typeahead .tt-suggestion:focus dynamic-html div{\n  color: #ffffff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\n.input-group.input-group-lg span.twitter-typeahead .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.input-group.input-group-sm span.twitter-typeahead .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nspan.twitter-typeahead {\n  width: 100%;\n}\n.input-group span.twitter-typeahead {\n  display: block !important;\n  height: 34px;\n}\n.input-group span.twitter-typeahead .tt-menu,\n.input-group span.twitter-typeahead .tt-dropdown-menu {\n  top: 32px !important;\n}\n.input-group span.twitter-typeahead:not(:first-child):not(:last-child) .form-control {\n  border-radius: 0;\n}\n.input-group span.twitter-typeahead:first-child .form-control {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group span.twitter-typeahead:last-child .form-control {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.input-group.input-group-sm span.twitter-typeahead {\n  height: 30px;\n}\n.input-group.input-group-sm span.twitter-typeahead .tt-menu,\n.input-group.input-group-sm span.twitter-typeahead .tt-dropdown-menu {\n  top: 30px !important;\n}\n.input-group.input-group-lg span.twitter-typeahead {\n  height: 46px;\n}\n.input-group.input-group-lg span.twitter-typeahead .tt-menu,\n.input-group.input-group-lg span.twitter-typeahead .tt-dropdown-menu {\n  top: 46px !important;\n}\n"]
                }),
                __metadata("design:paramtypes", [PropertyHandler_1.PropertyHandler, core_1.ElementRef])
            ], AutoComplete);
            exports_1("AutoComplete", AutoComplete);
        }
    };
});
//# sourceMappingURL=autocomplete.js.map