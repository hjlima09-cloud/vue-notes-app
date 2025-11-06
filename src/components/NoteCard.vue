<script setup>
import { useNoteStore } from "../stores/note";

const { note } = defineProps({
  note: Object,
});

const noteStore = useNoteStore();

const handleDelete = () => {
  noteStore.deleteNote(note.id);
};
</script>

<template>
  <div class="note-card" :class="{ completed: note.marked }">
    <p>{{ note.title }}</p>
    <div class="actions">
      <label class="checkbox-wrapper">
        <input
          type="checkbox"
          :checked="note.marked"
          @change="() => noteStore.toggleMarked(note.id)"
        />
        <span class="checkmark"></span>
      </label>

      <button class="delete-btn" @click="handleDelete">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.note-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  background-color: #fffbe6;
  border: 1px solid #d8d2b0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.note-card.completed {
  background-color: #f3fab6;
  border-color: #b8f060;
}

.note-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

p {
  font-weight: 500;
  margin: 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.checkbox-wrapper {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
}

.checkbox-wrapper input {
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 2px solid #aaa;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.checkbox-wrapper input:checked + .checkmark {
  background-color: #2ebfc9;
  border-color: #2ebfc9;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-wrapper input:checked + .checkmark:after {
  display: block;
  left: 7px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 6px 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #c0392b;
}
</style>
