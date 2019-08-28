System.register(["./ex6-4"], function (exports_1, context_1) {
    "use strict";
    var ex6_4_1, i0, i1;
    var __moduleName = context_1 && context_1.id;
    // function unit(x: (Idol | any), y: (Idol | any)): string {
    //   return `${x.name} x ${y.name}`;
    // }
    function unit(x, y) {
        return x.name + " x " + y.name;
    }
    return {
        setters: [
            function (ex6_4_1_1) {
                ex6_4_1 = ex6_4_1_1;
            }
        ],
        execute: function () {
            i0 = {
                name: "아이린",
                state: ex6_4_1.IdolState.Active,
            };
            i1 = {
                name: "제니",
                state: ex6_4_1.IdolState.Break,
            };
            console.log(unit(i0, i1));
        }
    };
});
