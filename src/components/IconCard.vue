<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  icon: String,
  title: String,
  text: String,
});
</script>

<template>
  <div class="icon-card">
    <font-awesome-icon :icon="icon" class="icon" />
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<style>
.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  flex: 1 1 250px;
  max-width: 300px;
}

.icon {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: #2c3d38;
}

.icon:hover {
  color: #2ebfc9;
}

h3 {
  margin: 0.5rem 0 0.2rem;
}
</style>
