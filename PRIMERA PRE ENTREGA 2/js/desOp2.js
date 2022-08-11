// PARTE INICIAL DE MI PROYECTO FINAL

// creo las variables para la información de las fechas
//
//
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//creo una const para almacenar el llamado del elemento por id, cuyo elemento será donde se indique el precio del producto
const price = document.getElementById("priceEntry");

//creo una const para almacenar el llamado del elemento por id, cuyo elemento
//donde se almacenan las tareas escritas en el input, y enviadas a este div por medio del evento
//
//
const tasksContainer = document.getElementById("tasksContainer");

//
//
// creo const SETDAY que almacena función flecha que contiene el obejeto literal OPTIONS de parámetros y valores //date//
//para ser usados en las instancias de llamadas de date.toLocalDateString.
const setDate =
  //
  () => {
    // const options = [
    //   { day: "numeric", weekday: "long", month: "short", year: "numeric" },
    // ];

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

setDate();

let arrayProducto = [];
let arrayAmount = [];
let arrayInputP = [];
let arrayInputA = [];

//
//
//
const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  //
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);
  arrayProducto.push(value);
  arrayInputP.push(task);

  //
  const priceIntro = document.createElement("input");
  priceIntro.classList.add("formatee");
  priceIntro.setAttribute("style", "display: block");
  priceIntro.setAttribute("id", "valuePrice");
  priceIntro.setAttribute("onpaste", "return false");
  priceIntro.setAttribute("placeholder", "¿Agregas el precio?");
  priceIntro.addEventListener("keydown", FormatAmount);
  priceIntro.addEventListener("blur", arrayValueAmount);
  priceIntro.addEventListener("blur", arrayInputAmount);
  price.prepend(priceIntro);
  //

  //
  event.target.reset();
};

const changeTaskState = (event) => {
  event.target.classList.toggle("done");
};
//

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

const arrayValueAmount = function PushearAmount(event) {
  arrayAmount.push(event.target.value);
};
const arrayInputAmount = function PushearInputAmount(event) {
  arrayInputA.push(event.target);
};

// USO DEL OPERADOR ? : PARA CONDICIONAR Y BRINDAR TRUE Y FALSE
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_condicional_ternario
//

const order = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });
  return [...toDo, ...done];
};

const renderOrderedTasks = () => {
  order().forEach((el) => tasksContainer.appendChild(el));
};
