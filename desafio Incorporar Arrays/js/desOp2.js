PARTE INICIAL DE MI PROYECTO FINAL

// creo las variables para la información de las fechas
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//para las tareas
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
  const date = new Date();
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

  const options = {
    day: { day: "numeric" },
    weekday: { weekday: "long" },
    month: { month: "short" },
    year: { year: "numeric" },
  };
  dateNumber.textContent = date.toLocaleDateString("es", options.day);
  dateText.textContent = date.toLocaleDateString("es", options.weekday);
  dateMonth.textContent = date.toLocaleDateString("es", options.month);
  dateYear.textContent = date.toLocaleDateString("es", options.year);
};

setDate();
