var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var idols1 = ["정연", "모모", "사나"];
var idols2 = ["지효", "미나"];
var newIdols = idols1.concat(idols2);
console.log(newIdols);
var jung = idols1[0], members = idols1.slice(1);
console.log(jung);
console.log(members);
var JENNIE = { name: "제니", birth: "1996-01-16", height: 163 };
var BLACK_PINK = { group: "블랙핑크", company: "YG Entertainment" };
var jennie = __assign({}, JENNIE, BLACK_PINK);
console.log(jennie);
var company = jennie.company, others = __rest(jennie, ["company"]);
console.log(company);
console.log(others);
