interface Idol {
  name: string;
  state: IdolState;
}

enum IdolState {
  Rookie,
  Active,
  Retirement,
}

class IdolService {
  constructor(
    private idols: Idol[],
  ) {}

  getAll(): Idol[] {
    return this.idols;
  }
}

export {
  Idol,
  IdolState,
  IdolService,
}
