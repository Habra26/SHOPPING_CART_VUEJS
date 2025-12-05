<script setup>
import { onMounted } from "vue";
import DB from "@/services/DB";
import { productsStore } from "@/stores/products";
import Product from "./Product.vue";

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
    <Product
      v-for="product in productsStore.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped></style>
