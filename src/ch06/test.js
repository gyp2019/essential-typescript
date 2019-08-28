System.register([], function (exports_1, context_1) {
    "use strict";
    var $, $element;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            $ = function (selector) {
                var _this = this;
                var _element = document.getElementById(selector);
                var _idol;
                var idolElement = {
                    idol: function (idol) {
                        if (idol) {
                            _idol = idol;
                            return _this;
                        }
                        else {
                            return _idol;
                        }
                    }
                };
                return idolElement;
            };
            $element = $('#jjj');
            // $element.id
        }
    };
});
