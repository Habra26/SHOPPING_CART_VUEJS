<script setup>
import { shoppingCartStore } from '@/stores/shoppingCart';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const addItem = () => {
  shoppingCartStore.addItemToCart(props.product);
  console.log(shoppingCartStore.cart);
};
</script>

<template>
  <article class="bg-white rounded-lg overflow-hidden shadow-md">
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-40 object-cover"
    />

    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">
        {{ product.name }}
      </h2>

      <p class="text-gray-700">€{{ Number(product.price).toFixed(2) }}</p>

      <button
        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="addItem"
      >
        Ajouter
      </button>
    </div>
  </article>
</template>
