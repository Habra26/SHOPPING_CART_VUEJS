<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import ProductsList from "./components/productsList/ProductsList.vue";
import ShoppingCart from "./components/shoppingCart/ShoppingCart.vue";
</script>

<template>
  <AppHeader />

  <!-- Main content -->
  <main class="container mx-auto py-8 px-4 flex flex-wrap">
    <section class="w-full md:w-2/3 px-4 mb-8">
      <ProductsList apiURL="https://68e117c793207c4b47963bf2.mockapi.io/" />
    </section>

    <!-- Shopping Cart Section -->
    <aside class="w-full md:w-1/3 px-4">
      <ShoppingCart />
    </aside>
  </main>

  <AppFooter />
</template>

<style scoped></style>
