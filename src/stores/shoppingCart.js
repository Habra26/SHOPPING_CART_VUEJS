import { reactive } from "vue";

const cart = reactive([]);

const addItemToCart = (product) => {
  const index = cart.findIndex((item) => item.id === product.id);

  if (index === -1) {
    cart.push({ ...product, qty: 1 });
  } else {
    cart[index].qty += 1;
  }
};

const updateItemQty = (id, qty) => {
  const index = cart.findIndex((item) => item.id === id);
  if (index === -1) {
    return;
  }
  const q = Number(qty);
  const newQty = q > 0 ? q : 1;
  const updatedItem = { ...cart[index], qty: newQty };
  cart.splice(index, 1, updatedItem);
};

export const shoppingCartStore = reactive({
  cart,
  addItemToCart,
  updateItemQty,
});
