System.register(["../consts/idols"], function (exports_1, context_1) {
    "use strict";
    var idols_1, filtered;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (idols_1_1) {
                idols_1 = idols_1_1;
            }
        ],
        execute: function () {
            filtered = idols_1.default.filter(function (idol) { return idol.height >= 167; });
            console.log(filtered);
        }
    };
});
