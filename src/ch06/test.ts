import Idols from "../consts/idols";

interface Idol {
  name: string;
  group?: string;
  height?: number;
  weight?: number;
}

interface jIdol {
  (selector: string): jIdolElement;
}

interface jIdolElement {
  idol(): Idol;
  idol(idol: Idol): jIdolElement;
}

let $ = <jIdol>function(selector) {
  const _element = document.getElementById(selector);

  let _idol: Idol;

  const idolElement: jIdolElement = {
    idol: (idol?: Idol) => {
      if (idol) {
        _idol = idol;
        return this;
      } else {
        return _idol;
      }
    }
  }
  return idolElement;
}

let $element = $('#jjj');

// $element.id
