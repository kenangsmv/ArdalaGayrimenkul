const ID_PRODUCT_PRICE = "core-basket";

export const getProduct = () => {
  return window.localStorage.getItem(ID_PRODUCT_PRICE);
};

export const saveProduct = (product_price) => {
  window.localStorage.setItem(ID_PRODUCT_PRICE, product_price);
};

export const destroyProduct = () => {
  window.localStorage.removeItem(ID_PRODUCT_PRICE);
};

export default { getProduct, saveProduct, destroyProduct };
