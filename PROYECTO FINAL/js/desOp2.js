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
const totalAmount = document.getElementById("totalAmount");

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

function changeValuePrice(event) {
  const contentProductValue = event.target.parentNode.childNodes[0].textContent;

  const objChangePriceArrayProduct = arrayProducto.findIndex(
    (e) => e.productValue === contentProductValue
  );
  const objChangePriceArrayDone = done.findIndex(
    (e) => e.productValue === contentProductValue
  );
  //
  const changePriceN = event.target.value;

  if (objChangePriceArrayProduct != -1) {
    arrayProducto.splice(objChangePriceArrayProduct, 1, {
      productValue: contentProductValue,
      priceValue: changePriceN,
    });
  } else {
    done.splice(objChangePriceArrayDone, 1, {
      productValue: contentProductValue,
      priceValue: changePriceN,
    });
  }
  // console.log(changePrice);
  // }
  // });
}

function BluerSavePrice(event) {
  changeValuePrice(event);
  syncStorage();
  addPrices();
}

// //
function addArrayProduct(productValue, priceValue) {
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
    divInLine.setAttribute("id", "formatlinePodructs");

    //
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder");
    task.textContent = p.productValue;

    //
    const priceIntro = document.createElement("input");
    priceIntro.classList.add("inputFormat", "valuePrice");
    // const valor = (priceIntro.value = "0");
    // arrayValuePrice = valor;
    priceIntro.setAttribute("onpaste", "return false");
    priceIntro.setAttribute("placeholder", "Precio");
    priceIntro.addEventListener("keydown", FormatAmount);
    priceIntro.addEventListener("blur", BluerSavePrice);
    priceIntro.value = p.priceValue;

    //
    const buttonDone = document.createElement("button");
    buttonDone.addEventListener("click", changeTaskState);
    buttonDone.textContent = "✓";
    buttonDone.classList.add("bontonDone");

    divInLine.prepend(buttonDone);
    divInLine.prepend(priceIntro);
    divInLine.prepend(task);
    tasksContainer.append(divInLine);
  });
  //
  done.forEach(function print(p) {
    const divInLine = document.createElement("div");
    divInLine.classList.add("done");
    divInLine.setAttribute("id", "formatlinePodructs");
    divInLine.setAttribute("style", "display: flex");

    //
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder", "productDone");
    task.textContent = p.productValue;

    //
    const priceIntro = document.createElement("input");
    priceIntro.classList.add("inputFormat", "valuePrice", "productDone");
    // const valor = (priceIntro.value = "0");
    // arrayValuePrice = valor;
    priceIntro.setAttribute("onpaste", "return false");
    priceIntro.setAttribute("placeholder", "Precio");
    priceIntro.addEventListener("keydown", FormatAmount);
    priceIntro.addEventListener("blur", BluerSavePrice);
    priceIntro.value = p.priceValue;

    //
    const buttonDone = document.createElement("button");
    buttonDone.addEventListener("click", changeTaskState);
    buttonDone.classList.add("bontonDone", "productDone", "bottonInDone");
    buttonDone.textContent = "✓✓";
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
  addArrayProduct(value, "");

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
    addPrices();
  } else
    console.log(
      "No se concatena porque el local storage es " + productsLocalForArray
    );
}
//
function alertMensageFetchConsejos() {
  fetch("/data/consejos.json")
    .then((res) => res.json())
    .then((data) => {
      createModal(data);
    });
}
//
function createModal(params) {
  const modal = document.createElement("dialog");
  const btnCerrarModal = document.createElement("button");
  btnCerrarModal.classList.add("formatButtonModal");
  btnCerrarModal.setAttribute("type", "button");
  btnCerrarModal.innerText = "entendido";
  btnCerrarModal.addEventListener("click", () => {
    modal.close();
  });
  const divConsejos = document.createElement("div");
  params.forEach((c) => {
    const consejo = document.createElement("p");
    consejo.classList.add("formatConsejo");
    consejo.style.listStyle = "none";
    consejo.innerText = c;
    divConsejos.appendChild(consejo);
  });
  document.body.appendChild(modal);
  modal.appendChild(divConsejos);
  modal.appendChild(btnCerrarModal);
  modal.showModal();
}
//

function addPrices() {
  let sumaListaTotal = 0;

  arrayProducto.forEach((e) => {
    if (e.priceValue !== "") {
      var AmountSinComas = e.priceValue.replace(/[,]/g, "");
      var wholeNumbers = parseInt(AmountSinComas);
      sumaListaTotal += wholeNumbers;
      console.log(e.priceValue);
    }
  });

  done.forEach((e) => {
    if (e.priceValue !== "") {
      var AmountSinComas = e.priceValue.replace(/[,]/g, "");
      var wholeNumbers = parseInt(AmountSinComas);
      sumaListaTotal += wholeNumbers;
      console.log(e.priceValue);
    }
  });

  const amountTotalAddPrices =
    "Total ₡ " +
    Intl.NumberFormat("en-CR", { maximumFractionDigits: 0 }).format(
      sumaListaTotal
    );

  return (totalAmount.textContent = amountTotalAddPrices);

  // FUENTE DE INFORMACIÓN PARA MONEDAS POR PAIS https://www.codeproject.com/Articles/78175/International-Number-Formats
}

//

alertMensageFetchConsejos();

readStorage();
setDate();
