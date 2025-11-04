<script setup>
import { RouterView } from "vue-router";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="app-layout">
    <HeaderComponent />
    <main class="main-content">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.main-content {
  flex: 1; 
}
</style>
