<script setup>
defineProps({
  note: Object
});
</script>

<template>
  <article class="note-preview">
    <h3>{{ note.title }}</h3>
    <p v-if="note.marked">✅ Completada</p>
    <p v-else>🕒 Pendiente</p>
  </article>
</template>

<style scoped>
.note-preview {
  background-color: #f0f8f6;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d2e6dc;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.note-preview h3 {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #2c3e50;
}
</style>
