System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PropertyHandler;
    return {
        setters: [],
        execute: function () {
            PropertyHandler = (function () {
                function PropertyHandler() {
                }
                PropertyHandler.prototype.getValueByProperty = function (object, property) {
                    try {
                        var notations = property.split('.');
                        var current = JSON.parse(JSON.stringify(object));
                        if (notations && notations[0] == '') {
                            return current;
                        }
                        for (var _i = 0, notations_1 = notations; _i < notations_1.length; _i++) {
                            var key = notations_1[_i];
                            if (!current[key]) {
                                return null;
                            }
                            current = current[key];
                        }
                        return current;
                    }
                    catch (e) {
                        console.log(e);
                        return null;
                    }
                };
                PropertyHandler.prototype.setValueByProperty = function (object, property, value) {
                    try {
                        var notations = property.split('.');
                        var current = object;
                        if (notations && notations[0] == '') {
                            object = value;
                            return;
                        }
                        else if (notations.length == 1) {
                            object[property] = value;
                            return;
                        }
                        for (var _i = 0, notations_2 = notations; _i < notations_2.length; _i++) {
                            var key = notations_2[_i];
                            current = current[key];
                        }
                        current = value;
                        return;
                    }
                    catch (e) {
                        console.log(e);
                    }
                    return;
                };
                PropertyHandler.prototype.buildPropertyWithValue = function (object, property, value) {
                    try {
                        var notations = property.split('.');
                        var current = object;
                        if (notations && notations[0] == '') {
                            object = value;
                            return object;
                        }
                        else if (notations.length == 1) {
                            object[property] = value;
                            return object;
                        }
                        for (var i = 0; i < notations.length; i++) {
                            var key = notations[i];
                            if (!current[key] && i < notations.length - 1) {
                                current[key] = {};
                            }
                            if (current[key] && typeof current[key] === 'object') {
                                current = current[key];
                            }
                            else {
                                current[key] = value;
                            }
                        }
                        return object;
                    }
                    catch (e) {
                        console.log(e);
                    }
                    return;
                };
                return PropertyHandler;
            }());
            exports_1("PropertyHandler", PropertyHandler);
        }
    };
});
//# sourceMappingURL=PropertyHandler.js.map