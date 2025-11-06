<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import { useNoteStore } from "../stores/note";
import { computed, onMounted } from "vue";
import NoteCard from "../components/NoteCard.vue";
import CreateNote from "../components/CreateNote.vue";

const noteStore = useNoteStore();

onMounted(() => {
  if (noteStore.notes.length === 0) {
    noteStore.getNotes();
  }
});

const completedNotes = computed(() =>
  noteStore.notes.filter((note) => note.marked)
);
const pendingNotes = computed(() =>
  noteStore.notes.filter((note) => !note.marked)
);
</script>

<template>
  <HeaderComponent />

  <h2 class="note-title">What are you waiting for to create your notes?</h2>

  <div class="notes-container">
    <div class="top-bar">
      <div class="note-form">
        <font-awesome-icon icon="fa-solid fa-pen" class="icon" />
        <CreateNote />
      </div>
      <p class="note-description">
        We help you remember. Record your to-do lists and get better organized
        every day.
      </p>
    </div>

    <div class="columns">
      <div class="column">
        <h2>Notes to do</h2>
        <transition-group name="fade" tag="div" class="notes-list">
          <NoteCard
            v-for="note in pendingNotes"
            :key="note.id"
            :note="note"
            @delete="noteStore.deleteNote"
          />
        </transition-group>
      </div>

      <div class="column">
        <h2>Completed notes</h2>
        <transition-group name="fade" tag="div" class="notes-list">
          <NoteCard
            v-for="note in completedNotes"
            :key="note.id"
            :note="note"
            @delete="noteStore.deleteNote"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<style scoped>
.note-title {
  text-align: center;
  font-size: 1.8rem;
  margin-top: 2rem;
  padding: 1rem 0;
  color: #2c3d38;
}

.notes-container {
  background: #d3f0e5;
  padding: 2rem;
  border: 4px solid #a0c0b0;
  border-radius: 16px;
  margin: 2rem auto;
  max-width: 1000px;
}

.top-bar {
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #2c3d38;
  padding-bottom: 1rem;
  flex-wrap: wrap;
}

.note-form {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.note-description {
  color: #2c3d38;
  font-size: 0.95rem;
  max-width: 400px;
}

.top-bar .icon {
  font-size: 1.5rem;
  color: #2c3d38;
}

.columns {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 300px;
}

.column h2 {
  text-align: left;
  padding-bottom: 0.5rem;
  color: #2c3d38;
  border-bottom: 2px dashed #2ebfc9;
}

.notes-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
