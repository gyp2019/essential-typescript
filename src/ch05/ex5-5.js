var reds = ["아이린", "슬기", "웬디", "조이", "예리"];
var twice = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"];
function totalLength(x, y) {
    var total = x.length + y.length;
    if (x instanceof Array) {
        x.push("abc");
    }
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}
console.log(totalLength("레드벨벳", "트와이스"));
console.log(totalLength(reds, twice));
console.log(reds);
