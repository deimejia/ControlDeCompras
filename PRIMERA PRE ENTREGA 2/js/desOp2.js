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

let arrayProducto = [];

const done = [];

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

// SE AGREGA LA CLASS DONE PARA DIFERENCIAS LA TAREA HECHA
const changeTaskState = (event) => {
  event.target.parentNode.classList.add("done");
};
// SE TOMAN LOS CHILDREN QUE TIENE CLASE DONE Y SE AGRUPAN EN UN ARRAY

const order = () => {
  tasksContainer.childNodes.forEach((el) => {
    if (el.classList.contains("done")) {
      done.push(el);
    }
  });
  return [...done];
};

// se ejecuta el evento del boton ordenar compras, el cual toma el array de productos
//en DONE y los envía al append del contenedor de productos
const renderOrderedTasks = () => {
  order().forEach((el) => tasksContainer.appendChild(el));
};
//
let arrayValuePrice;
//

function changeValuePrice(event) {
  const contentProductValue = event.target.parentNode.childNodes[0].textContent;
  console.log(contentProductValue);
  // console.log(
  //   event.target.parentNode.childNodes[0].textContent +
  //     " PRODUCTO PRODUCTOPRODUCTO"
  // );
  // tasksContainer.childNodes.forEach((bichi) => {
  // if (
  //   bichi.classList.contains(
  //     "updateInputContent" +
  //       `${event.target.parentNode.childNodes[0].textContent}`
  //   )
  // ) {
  // console.log("todas las clases " + event.target.parentNode.classList);
  const objChangePrice = arrayProducto.findIndex(
    (e) => e.productValue === contentProductValue
  );
  // console.log(objChangePrice);

  const changePriceN = event.target.value;
  // console.log(changePrice + " prueba");
  // console.log(event.target.value + " PRECIO DEL BLUR DE NUEVO");
  // console.log("hola hola");
  // console.log(changePrice.replace(changePrice, changePriceN));
  arrayProducto.splice(objChangePrice, 1, {
    productValue: contentProductValue,
    priceValue: changePriceN,
  });
  // console.log(changePrice);
  // }
  // });
}
function BluerSavePrice(event) {
  // console.log(event.target.parentNode.childNodes[0].textContent + " PRODUCTO");
  // console.log(event.target.value + " PRECIO DEL BLUR");

  // event.target.parentNode.classList.add(
  //   "updateInputContent" +
  //     `${event.target.parentNode.childNodes[0].textContent}`
  // );
  changeValuePrice(event);
}

// //
function addProduct(productValue, priceValue) {
  arrayProducto.unshift({ productValue, priceValue });
}

function printProduct(product) {
  const divInLine = document.createElement("div");
  divInLine.setAttribute("id", "called");
  divInLine.setAttribute("style", "display: flex");
  tasksContainer.prepend(divInLine);
  //
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");

  task.textContent = product;
  //
  const priceIntro = document.createElement("input");
  priceIntro.classList.add("formatee", "valuePrice");
  const valor = (priceIntro.value = "0");
  arrayValuePrice = valor;
  priceIntro.setAttribute("onpaste", "return false");
  priceIntro.setAttribute("placeholder", "¿Agregas el precio?");
  priceIntro.addEventListener("keydown", FormatAmount);
  priceIntro.addEventListener("blur", BluerSavePrice);
  //
  const buttonDone = document.createElement("button");
  buttonDone.addEventListener("click", changeTaskState);

  //
  divInLine.prepend(buttonDone);
  divInLine.prepend(priceIntro);
  divInLine.prepend(task);

  //
}

//
const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;

  printProduct(value);
  addProduct(value, arrayValuePrice);
  // console.log(arrayValuePrice + " DEBERIA INDICARSE PRECIO");
  //

  //

  //
  event.target.reset();
};
//

//

setDate();
