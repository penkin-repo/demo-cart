let cartRedner = new RenderGoods();
cartRedner.render();

// счетчик общего количества у корзины

let test = localStorage;

// ==================================================
// Получение массива с названиями и количеством товара
// let testingBaby = {};
// for (const key in test) {
//   if (test.hasOwnProperty(key)) {
//     testingBaby[key] = Number(test[key]);
//   }
// }
// console.table(testingBaby);
const renderCart = new RenderCart();
renderCart.renderCart();


// ===================================================
// ===================================================
// ===================================================

//счетчик общего количества в корзине
CalcTotalNumber = () => {
  let totalAmountCart = 0;
  for (const key in test) {
    if (test.hasOwnProperty(key)) {
      totalAmountCart += Number(test[key]);
    }
  }
  return totalAmountCart;
};
const countCartEl = document.querySelector("#count-cart");
if (CalcTotalNumber() === 0) {
  countCartEl.innerText = "";
} else {
  countCartEl.innerText = CalcTotalNumber();
}

// скрипт заполнения массива для корзины
const buttonsEl = document.querySelectorAll("#add-cart");
func = (e) => {
  let event = e.target;
  let good = event.getAttribute("alt");
  if (localStorage.getItem(good)) {
    test[good] = Number(test[good]) + 1;
  } else {
    test[good] = 1;
  }
  countCartEl.innerText = CalcTotalNumber();

  renderCart.renderCart(); //добавляем наполнение в корзину
};
buttonsEl.forEach((element) => {
  element.addEventListener("click", func);
});

// кнопка очистки корзинs
BtnClear.clear();
