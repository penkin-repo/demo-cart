class BtnClear {
  constructor() {}

  static clear() {
    const btnClear = document.querySelector(".clear-cart");
    btnClear.addEventListener("click", (funcClear) => {
      localStorage.clear();
      countCartEl.innerText = "";
      let tableBodyEl = document.querySelector("#table-body");
      tableBodyEl.innerHTML = "";
    });
    
  }
}
