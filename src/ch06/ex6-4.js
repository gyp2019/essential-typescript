System.register([], function (exports_1, context_1) {
    "use strict";
    var IdolState, idol;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (IdolState) {
                IdolState[IdolState["Trainee"] = 0] = "Trainee";
                IdolState[IdolState["Rookie"] = 1] = "Rookie";
                IdolState[IdolState["Active"] = 2] = "Active";
                IdolState[IdolState["Break"] = 3] = "Break";
                IdolState[IdolState["Retirement"] = 4] = "Retirement";
            })(IdolState || (IdolState = {}));
            exports_1("IdolState", IdolState);
            idol = {
                name: "아이린",
                state: IdolState.Active,
            };
            console.log(idol.state);
            console.log(IdolState[idol.state]);
        }
    };
});
