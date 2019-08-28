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
  static lastId: number = 0;

  constructor(
    private idols: Idol[],
  ) {}

  getAll(): Idol[] {
    return this.idols;
  }

  static getNextId() {
    return IdolService.lastId += 1;
  }
}

export {
  Idol,
  IdolState,
  IdolService,
}
