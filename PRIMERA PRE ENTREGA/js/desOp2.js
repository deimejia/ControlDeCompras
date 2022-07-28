// PARTE INICIAL DE MI PROYECTO FINAL

// creo las variables para la información de las fechas
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//para las tareas
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
  const options = {
    day: { day: "numeric" },
    weekday: { weekday: "long" },
    month: { month: "short" },
    year: { year: "numeric" },
  };
  const date = new Date();

  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

  dateNumber.textContent = date.toLocaleDateString("es", options.day);
  dateText.textContent = date.toLocaleDateString("es", options.weekday);
  dateMonth.textContent = date.toLocaleDateString("es", options.month);
  dateYear.textContent = date.toLocaleDateString("es", options.year);
};

const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);
  event.target.reset();
};

const changeTaskState = (event) => {
  event.target.classList.toggle("done");
};

// USO DEL OPERADOR ? : PARA CONDICIONAR Y BRINDAR TRUE Y FALSE
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_condicional_ternario

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

setDate();
