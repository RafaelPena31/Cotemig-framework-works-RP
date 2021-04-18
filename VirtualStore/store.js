let status = "product";

function getAllProduct() {
  const productList = localStorage.getItem("products");
  const response = productList ? JSON.parse(productList) : [];
  return response;
}

function getAllCartProduct() {
  const cartList = localStorage.getItem("cart");
  const response = cartList ? JSON.parse(cartList) : [];
  return response;
}

async function fetchAllProduct() {
  let products;
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      products = json;
    });
  products = products.filter((product) => product.category !== "electronics");
  let cart = getAllCartProduct();
  cart.forEach((cartItem) => {
    products = products.filter((product) => product.id !== cartItem.id);
  });
  return products;
}

function searchProductFor(searchStr) {
  let searchArray = [];
  if (status === "products") {
    let productList = getAllProduct() ? getAllProduct() : [];
    $("section").remove();
    productList.forEach((item) => {
      if (item.title.toLowerCase().search(searchStr.toLowerCase()) !== -1) {
        searchArray.push(item);
        ProductCardComponent(item);
      }
    });
  } else {
    let productList = getAllCartProduct() ? getAllCartProduct() : [];
    $(".item").remove();
    productList.forEach((item) => {
      if (item.title.toLowerCase().search(searchStr.toLowerCase()) !== -1) {
        searchArray.push(item);
        CartCardComponent(item);
      }
    });
  }
}

function cleanSearchProduct() {
  $("#searchInput").val("");
  $("section").remove();
  $(".item").remove();
  let productList = getAllProduct() ? getAllProduct() : [];
  let productCartList = getAllCartProduct() ? getAllCartProduct() : [];

  productList.forEach((item) => {
    ProductCardComponent(item);
  });

  productCartList.forEach((item) => {
    CartCardComponent(item);
  });
}

function save(productID) {
  let productList = getAllProduct() ? getAllProduct() : [];
  let cartList = getAllCartProduct() ? getAllCartProduct() : [];
  const product = productList.find((product) => product.id === productID);
  productList = productList.filter((product) => product.id !== productID);
  !!product && cartList.push(product);
  localStorage.setItem("cart", JSON.stringify(cartList));
  localStorage.setItem("products", JSON.stringify(productList));
  !!product && $(`#cardComponent${productID}`).remove();
  !!product && CartCardComponent(product);
}

function deleteFromCart(productID) {
  let productList = getAllProduct() ? getAllProduct() : [];
  let cartList = getAllCartProduct() ? getAllCartProduct() : [];
  const product = cartList.find((product) => product.id === productID);
  cartList = cartList.filter((product) => product.id !== productID);
  !!product && productList.push(product);
  localStorage.setItem("cart", JSON.stringify(cartList));
  localStorage.setItem("products", JSON.stringify(productList));
  !!product && $(`#cardCard${productID}`).remove();
  !!product && ProductCardComponent(product);
  fetchCartComponent(true);
}

function calcProductCartQuant(productID, calc) {
  let cartList = getAllCartProduct() ? getAllCartProduct() : [];
  const product = cartList.find((product) => product.id === productID);
  cartList = cartList.filter((product) => product.id !== productID);
  switch (calc) {
    case "-":
      if (product.quantity > 1) {
        product.quantity -= 1;
      }
      break;
    case "+":
      product.quantity += 1;
      break;
    default:
      product.quantity += 1;
      break;
  }
  document
    .getElementById(`quant${product.id}`)
    .setAttribute("value", product.quantity);
  cartList.push(product);
  localStorage.setItem("cart", JSON.stringify(cartList));
  fetchCartComponent(true);
}

function renderCartList() {
  cleanSearchProduct();
  fetchCartComponent(true);
  status = "cart";
  $(".shopping-cart").css("display", "flex");
  $(".section-product-store").css("display", "none");
}

function renderProductList() {
  status = "products";
  cleanSearchProduct();
  $(".shopping-cart").css("display", "none");
  $(".section-product-store").css("display", "flex");
}

function loaderControler(state) {
  state
    ? $(".loader-container").css("display", "flex")
    : $(".loader-container").css("display", "none");
}

async function fetchProductComponent() {
  let products = await fetchAllProduct();
  products.forEach((item) => {
    item.quantity = 1;
    ProductCardComponent(item);
  });
  localStorage.setItem("products", JSON.stringify(products));
  renderProductList();
  loaderControler(false);
}

async function fetchCartComponent(rerender = false) {
  let cart = getAllCartProduct();
  let value = 0;
  cart.forEach((item) => {
    if (!rerender) {
      CartCardComponent(item);
    }
    value += item.price * item.quantity;
  });
  if (rerender) {
    $("#value-content").remove();
  }
  $("#cart-value").append(
    `<div id="value-content">${new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)}</div>`
  );
}

function CartCardComponent(product) {
  $(".shopping-cart").append(`
      <div class="item" id="cardCard${product.id}">
        <div class="buttons">
          <button type="button" onclick="deleteFromCart(${product.id})">
            <span class="material-icons"> delete </span>
          </button>
        </div>

        <img
          class="image"
          src="${product.image}"
          alt=""
        />

        <div class="description">
          <span>${product.title}</span>
          <span>ZpenaZ - ID: ${product.id}</span>
        </div>

        <div class="quantity">
          <button class="minus-btn" type="button" onclick="calcProductCartQuant(${
            product.id
          }, '-')">-</button>
          <input type="text" id="quant${product.id}" value="${
    product.quantity
  }" />
          <button class="plus-btn" type="button" onclick="calcProductCartQuant(${
            product.id
          }, '+')">+</button>
        </div>

        <div class="total-price">${new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}</div>
      </div>
    `);
}

function ProductCardComponent(product) {
  $(".section-product-store").append(`
  <section id="cardComponent${product.id}">
      <div class="container page-wrapper">
        <div class="page-inner">
          <div class="row">
            <div class="el-wrapper">
              <div class="box-up">
                <img
                  class="img"
                  src="${product.image}"
                  alt=""
                />
                <div class="img-info">
                  <div class="info-inner">
                    <span class="p-name">${product.title}</span>
                    <span class="p-company">ZpenaZ - ID: ${product.id}</span>
                  </div>
                  <div class="a-size">
                    Tamanhos disponíveis : <span class="size">S , M , L , XL</span>
                  </div>
                </div>
              </div>

              <div class="box-down">
                <div class="h-bg">
                  <div class="h-bg-inner"></div>
                </div>

                <button class="cart" type="button" onclick="save(${
                  product.id
                })">
                  <span class="price">${new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}</span>
                  <span class="add-to-cart">
                    <span class="txt">carrinho +</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `);
}

$("#search-button").click(() => {
  let searchValue = $("#searchInput").val();
  searchProductFor(searchValue);
});

$("#clean-search-button").click(() => {
  cleanSearchProduct();
});
