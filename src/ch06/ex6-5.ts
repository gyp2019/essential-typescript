import { Idol, IdolState } from "./ex6-4";


// function unit(x: (Idol | any), y: (Idol | any)): string {
//   return `${x.name} x ${y.name}`;
// }

function unit(x: {name: string}, y: {name: string}): string {
  return `${x.name} x ${y.name}`;
}

const i0: Idol = {
  name: "아이린",
  state: IdolState.Active,
};

const i1: Idol = {
  name: "제니",
  state: IdolState.Break,
};


console.log(unit(i0, i1));
