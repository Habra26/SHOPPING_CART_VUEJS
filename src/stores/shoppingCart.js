import { reactive } from "vue";

const cart = reactive([]);

const addItemToCart = (product) => {
  const index = cart.findIndex((item) => item.id === product.id);

  if (index === -1) {
    cart.push({...product, qty: 1,});
  } else {
    cart[index].qty += 1;
  }
};

export const shoppingCartStore = reactive({
  cart,
  addItemToCart,
});
