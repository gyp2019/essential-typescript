const idols1 = ["정연", "모모", "사나"];
const idols2 = ["지효", "미나"];

const newIdols = [...idols1, ...idols2];
console.log(newIdols);

const [jung, ...members ] = idols1;
console.log(jung);
console.log(members);

const JENNIE = { name: "제니", birth: "1996-01-16", height: 163 };
const BLACK_PINK = { group: "블랙핑크", company: "YG Entertainment" };

const jennie = { ...JENNIE, ...BLACK_PINK };
console.log(jennie);

const { company, ...others } = jennie
console.log(company);
console.log(others);


