System.register([], function (exports_1, context_1) {
    "use strict";
    var retired, height, name, imageUrl, weight, idol, sub, reds, twice;
    var __moduleName = context_1 && context_1.id;
    function sum(x, y) {
        return x + y;
    }
    exports_1("sum", sum);
    return {
        setters: [],
        execute: function () {
            retired = false;
            height = 168;
            name = "로제";
            imageUrl = null;
            weight = undefined;
            idol = {
                name: "정연",
                birth: new Date("1996-11-01"),
                redired: false,
                height: 167,
            };
            exports_1("idol", idol);
            sub = function (val1, val2) {
                return val1 - val2;
            };
            exports_1("sub", sub);
            reds = ["아이린", "슬기", "웬디", "조이", "예리"];
            twice = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"];
        }
    };
});
