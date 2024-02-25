export default class MenuList {
  constructor() {
    this.menu = [];
  }

  addElement(element) {
    this.menu.push(element);
    return true;
  }

  removeElement(element) {
    let elementIndex = this.menu.indexOf(element);

    if (elementIndex !== -1) {
      this.menu.splice(elementIndex, 1);
      return true;
    }

    return false;
  }

  showElements() {
    let elementsString = "";

    for (let i = 0; i < this.menu.length; i++) {
      elementsString += this.menu[i].menuElementToHTML();
    }

    return elementsString;
  }

  showElementsTable() {
    let elementsString = "";

    for (let i = 0; i < this.menu.length; i++) {
      elementsString += this.menu[i].menuElementToTableRow();
    }

    return elementsString;
  }
}
