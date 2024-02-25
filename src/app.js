import MenuList from "./menuList.js";
import MenuElement from "./menuElement.js";

let menuList = new MenuList();

// Dialog Form
const agregarComidaDialog = document.getElementById("agregarComidaDialog");
const abrirDialogBtn = document.querySelector(".add-food-button");
const cerrarDialogBtn = document.getElementById("cerrarDialogBtn");
const agregarComidaForm = document.getElementById("agregarComidaForm");

// Valores inputs
let nombreComidaInput = document.getElementById("nombreComida");
let descripcionComidaInput = document.getElementById("descripcionComida");
let precioComidaInput = document.getElementById("precioComida");

// Obtén el contenedor del menú
const menuContainer = document.querySelector(".menu-cards-container");
// Obtén el contenedor de la tabla
const menuTable = document.querySelector(".food-table-body");

// Abrir Dialog
abrirDialogBtn.addEventListener("click", () => {
  agregarComidaDialog.showModal();
});

// Cerrar Dialog
cerrarDialogBtn.addEventListener("click", () => {
  agregarComidaDialog.close();
  limpiarFormulario();
});

// Cerrar Dialog al hacer clic fuera
agregarComidaDialog.addEventListener("click", (event) => {
  if (event.target === agregarComidaDialog) {
    agregarComidaDialog.close();
    limpiarFormulario();
  }
});

// Agregar Elemento al Menu
agregarComidaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let nombreComida = nombreComidaInput.value;
  let descripcionComida = descripcionComidaInput.value;
  let precioComida = precioComidaInput.value;

  let menuElement = new MenuElement(
    nombreComida,
    descripcionComida,
    precioComida
  );

  menuList.addElement(menuElement);
  updateDOM();

  agregarComidaDialog.close();
  limpiarFormulario();

  console.log(menuList);
});

// Delete button event listener
menuTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    let row = event.target.parentElement.parentElement;
    let cell = row.children[0];
    let name = cell.textContent;

    let element = menuList.menu.find((element) => element.name === name);

    // Mostrar el diálogo de confirmación
    const confirmarEliminarDialog = document.getElementById(
      "confirmarEliminarDialog"
    );
    const confirmarEliminarBtn = document.getElementById(
      "confirmarEliminarBtn"
    );
    const cancelarEliminarBtn = document.getElementById("cancelarEliminarBtn");

    confirmarEliminarDialog.showModal();

    confirmarEliminarBtn.onclick = () => {
      menuList.removeElement(element);
      updateDOM();
      confirmarEliminarDialog.close();
    };

    cancelarEliminarBtn.onclick = () => {
      confirmarEliminarDialog.close();
    };
  }
});

// Cerrar Dialog Eliminar al hacer clic fuera
document.addEventListener("click", (event) => {
  const confirmarEliminarDialog = document.getElementById(
    "confirmarEliminarDialog"
  );

  if (event.target === confirmarEliminarDialog) {
    confirmarEliminarDialog.close();
  }
});

// Dialog Form editar
let editarComidaDialog = document.getElementById("editarComidaDialog");
let cerrarEditarDialogBtn = document.getElementById("cerrarDialogBtnEdit");
let editarComidaForm = document.getElementById("editarComidaForm");

// Cerrar Dialog editar
cerrarEditarDialogBtn.addEventListener("click", () => {
  editarComidaDialog.close();
  limpiarFormulario();
});

// Cerrar Dialog editar al hacer clic fuera
editarComidaDialog.addEventListener("click", (event) => {
  if (event.target === editarComidaDialog) {
    editarComidaDialog.close();
    limpiarFormulario();
  }
});

// Edit button event listener
menuTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-button")) {
    let row = event.target.parentElement.parentElement;
    let cell = row.children[0];
    let name = cell.textContent;

    let element = menuList.menu.find((element) => element.name === name);

    document.getElementById("idComida").value = element.name; // Set ID for later reference
    document.getElementById("nombreComidaEdit").value = element.name;
    document.getElementById("descripcionComidaEdit").value =
      element.description;
    document.getElementById("precioComidaEdit").value = element.price;

    editarComidaDialog.showModal();
  }
});

// Editar Elemento del Menu desde el formulario
editarComidaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let editedName = document.getElementById("nombreComidaEdit").value;
  let editedDescription = document.getElementById(
    "descripcionComidaEdit"
  ).value;
  let editedPrice = document.getElementById("precioComidaEdit").value;

  // Find the element in the menuList using its original name (stored in ID)
  let elementIndex = menuList.menu.findIndex(
    (element) => element.name === document.getElementById("idComida").value
  );
  let element = menuList.menu[elementIndex];

  element.setName(editedName);
  element.setDescription(editedDescription);
  element.setPrice(editedPrice);

  updateDOM();
  editarComidaDialog.close();
  limpiarFormulario();

  console.log(menuList);
});

function limpiarFormulario() {
  nombreComidaInput.value = "";
  descripcionComidaInput.value = "";
  precioComidaInput.value = "";
}

window.addEventListener("load", () => {
  updateDOM();
});

function updateDOM() {
  const menuContainer = document.querySelector(".menu-cards-container");
  const menuTable = document.querySelector(".food-table-body");

  const menuElementsHTML = menuList.showElements();
  const menuTableHTML = menuList.showElementsTable();

  menuContainer.innerHTML = menuElementsHTML || "No hay elementos en el menú";
  menuTable.innerHTML = menuTableHTML || "No hay elementos en el menú";
}
