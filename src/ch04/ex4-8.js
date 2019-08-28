System.register([], function (exports_1, context_1) {
    "use strict";
    var _a, name, idol;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            name = 'name_';
            idol = (_a = {},
                _a[name + 'EN'] = 'SANA',
                _a[name + 'KO'] = '사나',
                _a[name + 'JP'] = 'サナ',
                _a);
            console.log(idol);
            exports_1("default", idol);
        }
    };
});
