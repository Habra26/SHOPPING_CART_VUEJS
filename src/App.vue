<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import ProductsList from "./components/ProductsList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<template>
  <AppHeader />

  <!-- Main content -->
  <main class="container mx-auto py-8 px-4 flex flex-wrap">
    <section class="w-full md:w-2/3 px-4 mb-8">
      <ProductsList />
    </section>

    <!-- Shopping Cart Section -->
    <aside class="w-full md:w-1/3 px-4">
      <ShoppingCart />
    </aside>
  </main>

  <AppFooter />
</template>

<style scoped></style>
