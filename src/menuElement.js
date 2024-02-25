export default class MenuElement {
  static id = 0;

  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.id = MenuElement.id++;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }

  getPrice() {
    return this.price;
  }
  setPrice(price) {
    this.price = price;
  }

  menuElementToHTML() {
    return /* html */ `
      <div class="menu-card">
        <h3 class="food-name">${this.name}</h3>
        <p>Descripción:</p>
        <ul>
          <li>${this.description}</li>
        </ul>
        <h2>Precio: $${this.price}</h2>
      </div>
    `;
  }

  menuElementToTableRow() {
    return /* html */ `
      <tr>
        <td>${this.name}</td>
        <td>${this.description}</td>
        <td>$${this.price}</td>
        <td>
          <button class="edit-button">Editar</button>
          <button class="delete-button">Eliminar</button>
        </td>
      </tr>
    `;
  }
}
