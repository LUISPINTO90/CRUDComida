export default class MenuElement {
  static id = 0;

  constructor(
    name,
    description,
    price,
    extras = [],
    spiceLevel = "",
    servingSize = ""
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.id = MenuElement.id++;
    this.extras = extras;
    this.spiceLevel = spiceLevel;
    this.servingSize = servingSize;
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

  setExtras(extras) {
    this.extras = extras;
  }

  setSpiceLevel(spiceLevel) {
    this.spiceLevel = spiceLevel;
  }

  setServingSize(servingSize) {
    this.servingSize = servingSize;
  }

  menuElementToHTML() {
    const extrasList = this.extras.length
      ? `<ul>${this.extras.map((extra) => `<li>${extra}</li>`).join("")}</ul>`
      : "<ul><li>No tiene ingredientes extra</li></ul>";

    return /* html */ `
      <div class="menu-card">
        <h3 class="food-name">${this.name}</h3>
        <p>Descripción:</p>
        <ul>
          <li>${this.description}</li>
        </ul>
        <p>Extras:</p>
        ${extrasList}
        <p>Nivel de picor:</p>
        <ul>
          <li>${this.spiceLevel}</li>
        </ul>
        <p>Número de personas:</p>
        <ul>
          <li>${this.servingSize}</li>
        </ul>
        <h2>Precio: $${this.price}</h2>
      </div>
    `;
  }

  menuElementToTableRow() {
    const extrasCell = this.extras.length
      ? `<td>${this.extras.join(", ")}</td>`
      : "<td>No tiene ingredientes extra</td>";

    return /* html */ `
      <tr>
        <td>${this.name}</td>
        <td>${this.description}</td>
        <td>$${this.price}</td>
        ${extrasCell}
        <td>${this.spiceLevel}</td>
        <td>${this.servingSize}</td>
        <td>
          <button class="edit-button">Editar</button>
          <button class="delete-button">Eliminar</button>
        </td>
      </tr>
    `;
  }
}
