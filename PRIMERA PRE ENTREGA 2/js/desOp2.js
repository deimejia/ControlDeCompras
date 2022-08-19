// PARTE INICIAL DE MI PROYECTO FINAL
// creo las variables para la información de las fechas
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//creo una const para almacenar el llamado del elemento por id, cuyo elemento será donde se indique el precio del producto

//creo una const para almacenar el llamado del elemento por id, cuyo elemento
//donde se almacenan las tareas escritas en el input, y enviadas a este div por medio del evento
//

//
const tasksContainer = document.getElementById("tasksContainer");
const product = document.getElementsByName("taskText");
const clearAllButton = document.getElementById("clearAll");

const resetAll = function resetPage() {
  localStorage.clear();
  location.reload();
};

clearAllButton.addEventListener("click", resetAll);
//
//
let arrayProducto = [];
let done = [];

//
//
// creo const SETDAY que almacena función flecha que contiene el obejeto literal OPTIONS de parámetros y valores //date//
//para ser usados en las instancias de llamadas de date.toLocalDateString.
const setDate = () => {
  //llamo la instancia Date para obtener la fecha actual, almacenada en const DATE
  const date = new Date();
  //
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  //
  //mediante el textContent cambio el contenido de la variable que le precide (ejemplo DATENUMBER), y se le asigna
  //la fecha en forma de string con el método toLocaleDateString con idioma "es", y mostrando el contenido del parámetro correspondiente (day, weekday, etc.)
  //
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

//CONVERTIR MONTO A MONTO CON SEPARADOR DE MILES
const FormatAmount = function Amount(event) {
  v_obj = event.target;
  v_fun = cpf;
  setTimeout(sentencia, 50);
  function sentencia() {
    v_obj.value = v_fun(v_obj.value);
  }

  function cpf(v) {
    v = v.replace(/([^0-9\.]+)/g, "");
    v = v.replace(/^[\.]/, "");
    v = v.replace(/[\.][\.]/g, "");
    v = v.replace(/\.(\d)(\d)(\d)/g, ".$1$2");
    v = v.replace(/\.(\d{1,2})\./g, ".$1");
    v = v
      .toString()
      .split("")
      .reverse()
      .join("")
      .replace(/(\d{3})/g, "$1,");
    v = v.split("").reverse().join("").replace(/^[\,]/, "");
    return v;
  }
};
//
//

//

//

// USO DEL OPERADOR ? : PARA CONDICIONAR Y BRINDAR TRUE Y FALSE
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_condicional_ternario
const reOrderArray = (event) => {
  const contentProductValueT =
    event.target.parentNode.childNodes[0].textContent;
  const objChangeProductT = arrayProducto.findIndex(
    (e) => e.productValue === contentProductValueT
  );

  const removeProducts = arrayProducto.splice(objChangeProductT, 1);

  done = done.concat(removeProducts);
};
// SE AGREGA LA CLASS DONE PARA DIFERENCIAS LA TAREA HECHA

//
const changeTaskState = (event) => {
  const filterDone = event.target.parentNode.classList.contains("done");
  if (!filterDone) {
    reOrderArray(event);
    const popo = event.target.parentNode;
    printProduct();
    console.log(popo);
    syncStorage();
  }
};
// SE TOMAN LOS CHILDREN QUE TIENE CLASE DONE Y SE AGRUPAN EN UN ARRAY

// se ejecuta el evento del boton ordenar compras, el cual toma el array de productos
//en DONE y los envía al append del contenedor de productos
// const renderOrderedTasks = () => {
//   order().forEach((el) => tasksContainer.appendChild(el));
// };
//
// let arrayValuePrice;
//

function changeValuePrice(event) {
  const contentProductValue = event.target.parentNode.childNodes[0].textContent;
  const objChangePrice = arrayProducto.findIndex(
    (e) => e.productValue === contentProductValue
  );
  //

  const changePriceN = event.target.value;
  arrayProducto.splice(objChangePrice, 1, {
    productValue: contentProductValue,
    priceValue: changePriceN,
  });
  // console.log(changePrice);
  // }
  // });
}
function BluerSavePrice(event) {
  changeValuePrice(event);
  syncStorage();
}

// //
function addProduct(productValue, priceValue) {
  arrayProducto.push({ productValue, priceValue });
}
//
//

//
//
function printProduct() {
  tasksContainer.innerHTML = "";
  arrayProducto.forEach(function print(p) {
    const divInLine = document.createElement("div");
    divInLine.setAttribute("id", "called");
    divInLine.setAttribute("style", "display: flex");

    //
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder");
    task.textContent = p.productValue;

    //
    const priceIntro = document.createElement("input");
    priceIntro.classList.add("formatee", "valuePrice");
    // const valor = (priceIntro.value = "0");
    // arrayValuePrice = valor;
    priceIntro.setAttribute("onpaste", "return false");
    priceIntro.setAttribute("placeholder", "¿Agregas el precio?");
    priceIntro.addEventListener("keydown", FormatAmount);
    priceIntro.addEventListener("blur", BluerSavePrice);
    priceIntro.value = p.priceValue;

    //
    const buttonDone = document.createElement("button");
    buttonDone.addEventListener("click", changeTaskState);

    divInLine.prepend(buttonDone);
    divInLine.prepend(priceIntro);
    divInLine.prepend(task);
    tasksContainer.append(divInLine);
  });
  //
  done.forEach(function print(p) {
    const divInLine = document.createElement("div");
    divInLine.classList.add("done");
    divInLine.setAttribute("id", "called");
    divInLine.setAttribute("style", "display: flex");

    //
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder");
    task.textContent = p.productValue;

    //
    const priceIntro = document.createElement("input");
    priceIntro.classList.add("formatee", "valuePrice");
    // const valor = (priceIntro.value = "0");
    // arrayValuePrice = valor;
    priceIntro.setAttribute("onpaste", "return false");
    priceIntro.setAttribute("placeholder", "¿Agregas el precio?");
    priceIntro.addEventListener("keydown", FormatAmount);
    priceIntro.addEventListener("blur", BluerSavePrice);
    priceIntro.value = p.priceValue;

    //
    const buttonDone = document.createElement("button");

    buttonDone.addEventListener("click", changeTaskState);

    divInLine.prepend(buttonDone);
    divInLine.prepend(priceIntro);
    divInLine.prepend(task);
    tasksContainer.append(divInLine);
  });
}

//
const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  addProduct(value, "");
  printProduct(value);
  syncStorage();
  // console.log(arrayValuePrice + " DEBERIA INDICARSE PRECIO");
  //

  //

  //
  event.target.reset();
};
//
function syncStorage() {
  console.log("sincronizador");
  localStorage.setItem("saveproducts", JSON.stringify(arrayProducto));
  localStorage.setItem("saveproductsdone", JSON.stringify(done));
}

function readStorage() {
  const arrayInJson = localStorage.getItem("saveproducts");
  const productsLocalForArray = JSON.parse(arrayInJson);
  const arrayDoneInJson = localStorage.getItem("saveproductsdone");
  const productsDoneLocalForArray = JSON.parse(arrayDoneInJson);

  if (productsLocalForArray != null && productsDoneLocalForArray != null) {
    arrayProducto = arrayProducto.concat(productsLocalForArray);
    done = done.concat(productsDoneLocalForArray);

    printProduct();
  } else
    console.log(
      "No se concatena porque el local storage es " + productsLocalForArray
    );
}
//

//
readStorage();
setDate();
