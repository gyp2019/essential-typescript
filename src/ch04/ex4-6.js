System.register([], function (exports_1, context_1) {
    "use strict";
    var _a, idol, height, group, married, a, b, todo, id, title, completed;
    var __moduleName = context_1 && context_1.id;
    function countdown(_a) {
        var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 10 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c;
        for (var i = initial; i < final; i += interval) {
            console.log(i);
        }
    }
    return {
        setters: [],
        execute: function () {
            idol = [158, "레드벨벳", false];
            height = idol[0], group = idol[1], married = idol[2];
            console.log(height);
            console.log(group);
            console.log(married);
            a = 6;
            b = 9;
            _a = [b, a], a = _a[0], b = _a[1];
            console.log(a);
            console.log(b);
            todo = {
                id: 123,
                title: "Pick up drycleaning",
                completed: false,
            };
            exports_1("todo", todo);
            id = todo.id, title = todo.title, completed = todo.completed;
            console.log(id);
            console.log(title);
            console.log(completed);
            countdown({ initial: 7 });
        }
    };
});
