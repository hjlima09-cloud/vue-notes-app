<script setup>
defineProps({
  note: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article :class="['note-preview', { completed: note.marked }]">
    <h3>{{ note.title }}</h3>
    <p>
      <font-awesome-icon
        :icon="note.marked ? ['fas', 'check-circle'] : ['fas', 'clock']"
      />
      {{ note.marked ? "Completada" : "Pendiente" }}
    </p>
  </article>
</template>

<style>
.note-preview {
  background-color: #f0f8f6;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d2e6dc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: background-color 0.3s ease;
}

.note-preview h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.note-preview p {
  font-size: 0.9rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.note-preview.completed {
  background-color: #e8f6f1;
  border-color: #a4bfb2;
}

.note-preview.completed p {
  color: #2c3d38;
  font-weight: 600;
}
.note-preview {
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}

.note-preview:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
