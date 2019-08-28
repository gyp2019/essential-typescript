interface Idol {
  name: string;
  state: IdolState;
}

enum IdolState {
  Rookie,
  Active,
  Retirement,
}

class IdolStateChanger {
  constructor(private newState: IdolState) {
  }

  canChangeState(idol: Idol): boolean {
    return !!idol;
  }

  changeState(idol: Idol): Idol {
    if (this.canChangeState(idol)) {
      idol.state = this.newState;
    }

    return idol;
  }
}

class RetirementIdolStateChanger extends IdolStateChanger {
  constructor() {
    super(IdolState.Retirement);
  }

  canChangeState(idol: Idol): boolean {
    return super.canChangeState(idol) && (idol.state === IdolState.Active);
  }
}

let changer = new RetirementIdolStateChanger();

changer.changeState({
  name: "hi",
  state: IdolState.Rookie
})

export {
  IdolStateChanger,
}
