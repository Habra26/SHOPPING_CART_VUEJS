<script setup>
import { onMounted } from 'vue';
import DB from '@/services/DB';
import { productsStore } from '@/stores/products';

const props = defineProps({
  apiURL: { type: String, required: true },
});

onMounted(async () => {
  DB.setApiURL(props.apiURL);
  await productsStore.init(props.apiURL);
});
</script>

<template>
  <!-- Products Section -->
  <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Product card example -->
    <article 
    class="bg-white rounded-lg overflow-hidden shadow-md"
    v-for="product in productsStore.products"
    :key="product.id">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-48"
      />
      <div class="p-4">
        <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
        <p class="text-gray-700">€{{ Number(product.price).toFixed(2) }}</p>
        <button
          class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
      </div>
    </article>
  </div>
</template>

<style scoped></style>
