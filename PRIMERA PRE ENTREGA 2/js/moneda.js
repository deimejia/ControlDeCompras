let Form = document.querySelector("#myForm");
let inputField = document.querySelector("#money");

Form.addEventListener("keydown", function necesaria() {
  //
  v_obj = inputField;
  v_fun = cpf;
  setTimeout(sentencia, 1);
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
});
