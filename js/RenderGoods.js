class RenderGoods {
  constructor(goods = cart) {
    this.goods = goods;
  }

  render() {
    const h1 = document.querySelector(".main-title");
    const containerEl = document.createElement("div");
    containerEl.classList.add("container-sm");
    h1.insertAdjacentElement("afterend", containerEl);

    const rowEl = document.createElement("div");
    rowEl.classList.add("row");
    rowEl.classList.add("cart");
    containerEl.append(rowEl);

    for (const key in this.goods) {
      let title = this.goods[key].name;
      let price = this.goods[key].price;
      let imgSrc = this.goods[key].image;
      let gender = this.goods[key].gender;
      
      const col = document.createElement("div");
      col.classList.add("col");
      const colInner = `
       <div class="card" style="width: 18rem">
         <div class="card-img">
           <img
             src="${imgSrc}"
             class="img-fluid"
             alt="${title}"
           />
         </div>
         <div class="card-body">
           <h5 class="card-title">${title}</h5>
           <p class="card-text gender">${gender}</p>
           <p class="card-text price">
             ${price} руб.
           </p>
           <a class="btn btn-primary" id="add-cart" alt="${title}">Добавить в корзину</a>
         </div>
       </div>
     `;
      col.innerHTML = colInner;
      rowEl.append(col);
    }
  }
}
