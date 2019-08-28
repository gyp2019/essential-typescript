System.register([], function (exports_1, context_1) {
    "use strict";
    var $, todo, element, savedTodo, newTodo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            $ = function (selector) {
            };
            todo = {
                name: "Pick up drycleaning",
                completed: false,
            };
            element = $('#my-elment');
            element.data('todo', todo);
            savedTodo = element.data('todo');
            $.fn.todo = function (todo) {
                if (todo) {
                    $(this).data('todo', todo);
                }
                else {
                    return $(this).data('todo');
                }
            };
            element.todo(todo);
            newTodo = element.todo();
        }
    };
});
