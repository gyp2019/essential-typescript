enum IdolState {
  Trainee,
  Rookie,
  Active,
  Break,
  Retirement,
}

interface Idol {
  name: string;
  state: IdolState;
}

const idol: Idol = {
  name: "아이린",
  state: IdolState.Active,
}

console.log(idol.state);
console.log(IdolState[idol.state]);

export { Idol, IdolState };
