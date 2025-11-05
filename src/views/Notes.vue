<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import NoteCard from "../components/NoteCard.vue";
import { useNoteStore } from "../stores/note";
import CreateNote from "../components/CreateNote.vue";
import { onMounted } from "vue";

const noteStore = useNoteStore();

onMounted(async () => {
  await noteStore.getNotes();
});
</script>

<template>
  <HeaderComponent />

  <section id="notes-page">
    <h2>Notas</h2>

    <h4 v-if="noteStore.loading">Loading notes</h4>
    <h4 v-else-if="noteStore.error">Something has gone wrong with the Apis</h4>

    <ul v-else class="note-list">
      <li><CreateNote /></li>
      <li v-for="note in noteStore.notes" :key="note.id">
        <NoteCard
          :note="note"
          @delete="noteStore.deleteNote"
          @toggle="noteStore.toggleMarked"
        />
      </li>

      <li v-if="!noteStore.notes.length" class="no-new-notes">
        <h3>You don't have any notes yet.</h3>
      </li>
    </ul>
  </section>
</template>
<style>
#notes-page {
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
}

.note-list {
  background-color: #d1eddf;
  width: 80%;
  min-width: 450px;
  padding: 30px;
  border: 6px solid #a4bfb2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.no-new-notes {
  text-align: center;
}
</style>
