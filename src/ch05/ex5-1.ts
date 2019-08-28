let retired: boolean = false;
let height: number = 168;
let name: string = "로제";
let imageUrl: null = null;
let weight: undefined = undefined;

const idol: {
  name: string;
  birth: Date;
  redired: boolean;
  height: number;
} = {
  name: "정연",
  birth: new Date("1996-11-01"),
  redired: false,
  height: 167,
};

function sum(x: number, y: number): number {
  return x + y;
}

const sub: (x: number, y: number) => number = function (val1, val2) {
  return val1 - val2;
};

const reds: string[] = ["아이린", "슬기", "웬디", "조이", "예리"];
const twice: Array<string> = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"];

export {
  idol,
  sum,
  sub,
};
