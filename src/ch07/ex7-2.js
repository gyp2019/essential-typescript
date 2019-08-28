var IdolState;
(function (IdolState) {
    IdolState[IdolState["Rookie"] = 0] = "Rookie";
    IdolState[IdolState["Active"] = 1] = "Active";
    IdolState[IdolState["Retirement"] = 2] = "Retirement";
})(IdolState || (IdolState = {}));
var IdolService = /** @class */ (function () {
    function IdolService(idols) {
        this.idols = idols;
    }
    IdolService.prototype.getAll = function () {
        return this.idols;
    };
    return IdolService;
}());
