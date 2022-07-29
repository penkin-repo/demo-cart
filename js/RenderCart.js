class RenderCart {
  constructor(goods = cart) {
    this.goods = goods;
  }

  renderCart() {
    let testingBaby = {};
    for (const key in test) {
      if (test.hasOwnProperty(key)) {
        testingBaby[key] = Number(test[key]);
      }
    }
    // console.table(testingBaby);
    const cartTableEl = document.querySelector(".offcanvas-body");
    let cartInnerHead = `
    <table class="table">
            
              <thead>
                <tr class="align-top">
                  <th>Наименование</th>
                  <th>Количество, шт.</th>
                  <th>Стоимость, руб.</th>
                </tr>
              </thead>
              <tbody id="table-body">
            </tbody>
          </table>
          <br />
         
    `;
    cartTableEl.innerHTML = cartInnerHead;
    let tableBodyEl = document.querySelector("#table-body");

    for (const key in this.goods) {
      let title = this.goods[key].name;
      let price = this.goods[key].price;
      let imgSrc = this.goods[key].image;
      let gender = this.goods[key].gender;

      for (const key in testingBaby) {
        if (title === key) {
          let cartCount = testingBaby[key];
          let cartName = key;
          let cartPrice = price;

          let cartInner = `
          <tr>
                <td>${cartName}</td>
                <td>${cartCount}</td>
                <td>${cartPrice * Number(cartCount)}</td>
          </tr>
              `;

          tableBodyEl.insertAdjacentHTML("beforeend", cartInner);
        }
      }
    }
  }
}


