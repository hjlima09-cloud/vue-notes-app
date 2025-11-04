<script setup>
defineProps({
  icon: String,
  title: String,
  text: String,
});
</script>

<template>
  <div class="icon-card">
    <i :class="icon" class="icon"></i>
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
  max-width: 200px;
  padding: 1rem;
}
.icon {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: #2c3d38;
}
.icon:hover{
    color: #2EBFC9;
}
h3 {
  margin: 0.5rem 0 0.2rem;
}

</style>