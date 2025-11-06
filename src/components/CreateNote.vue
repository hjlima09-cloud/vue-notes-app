<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/note"; 

const noteStore = useNoteStore();

const title = ref("");

const handleNewNote = () => {
  noteStore.addNote(title.value);
  title.value = "";
};
</script>

<template>
  <form class="n-form" @submit.prevent="handleNewNote">
    <input
      type="text"
      class="note-title"
      placeholder="New Note"
      v-model="title"
    />
    <button class="create-note-btn">+</button>
  </form>
</template>

<style scoped>
.n-form {
  width: 300px;
  background-color: aquamarine;
  border: 2px solid darkcyan;
  border-radius: 8px;
  padding: 20px 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s;
}
.note-title {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #A4BFB2; 
  outline: none;
  font-size: 1.2rem;
  font-weight:400;
  width: 70%;
  transition: border-color 0.3s ease;
}

.note-title:focus {
  border-bottom: 1px solid seagreen; 
}
.create-note-btn {
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  background-color: #97A147;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.create-note-btn:hover {
  background-color: #967E1E;
  box-shadow: 0 0 11px;
}
</style>
