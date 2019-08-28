System.register([], function (exports_1, context_1) {
    "use strict";
    var mySearch;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            mySearch = function (idol, name) {
                return idol.name === name;
            };
            exports_1("default", mySearch);
        }
    };
});
