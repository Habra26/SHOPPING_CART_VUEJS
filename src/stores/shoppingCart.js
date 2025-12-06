import { reactive, computed, ref, watch } from "vue";
import DB from "@/services/DB";

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
  } else {
    const q = Number(qty);
    const newQty = q > 0 ? q : 1;
    const updatedQty = { ...cart[index], qty: newQty };
    cart.splice(index, 1, updatedQty);
  }
};

const deleteOneById = (id) => {
  cart.splice(
    cart.findIndex((item) => item.id === id),
    1
  );
};

const totalHTVA = computed(() =>
  cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0)
);

const tva = computed(() => totalHTVA.value * 0.2);

const shipping = ref(0);

const totalGeneral = computed(
  () => totalHTVA.value + tva.value + shipping.value
);

const clear = () => {
  if (shipping.value != 0) {
    cart.splice(0, cart.length);
    shipping.value = 0;
  }
};

watch(cart,()=>DB.updateLocalStorage(cart),{deep:true});

const init = () => {
  cart.splice(
    0,cart.length, ...(JSON.parse(localStorage.getItem('cartItems')) || [])
  );
};

export const shoppingCartStore = reactive({
  cart,
  addItemToCart,
  updateItemQty,
  deleteOneById,
  totalHTVA,
  tva,
  shipping,
  totalGeneral,
  clear,
  init,
});
