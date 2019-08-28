interface Idol {
  name: string;
}

interface MatchIdolFunc {
  (idol: Idol, name: string): boolean;
}

let mySearch: MatchIdolFunc;
mySearch = function(idol, name) {
  return idol.name === name;
}


export default mySearch;
