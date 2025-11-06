<script setup>
import { onMounted } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import IconCard from "../components/IconCard.vue";
import NotePreview from "../components/NotePreview.vue";
import { useNoteStore } from "../stores/note";
import emptyNoteImg from "../assets/sectionNoteHome.png";

const noteStore = useNoteStore();

onMounted(() => {
  noteStore.getNotes();
});
</script>

<template>
  <HeaderComponent />

  <section class="hero">
    <div class="overlay">
      <div class="hero-content">
        <h1 class="hero-title">Organize your day easily</h1>
        <router-link to="/notes" class="notes-btn-link">
          Go to your notes now
        </router-link>
      </div>
    </div>
  </section>

  <section class="benefits">
    <IconCard
      icon="fas fa-check-circle"
      title="Simple"
      text="Create and manage your notes in seconds without complications."
    />
    <IconCard
      icon="fa-sync-alt"
      title="Sincronización"
      text="Accede a tus notas desde cualquier dispositivo conectado."
    />
    <IconCard
      icon="fas fa-lock"
      title="Privacy"
      text="Your notes are safe thanks to secure storage."
    />

  </section>

  <section class="latest-notes">
    <h2>These are your most recent notes 📝</h2>

    <div v-if="noteStore.notes.length > 0" class="note-preview-list">
      <NotePreview
        v-for="note in noteStore.notes.slice(0, 4)"
        :key="note.id"
        :note="note"
      />
    </div>

    <div v-else class="no-notes-container">
      <div class="no-notes-inner">
        <img :src="emptyNoteImg" alt="No notes" class="empty-img" />
        <div class="no-notes-text">
          <i class="fas fa-sticky-note fa-2x"></i>
          <h3>You don't have any notes yet.</h3>
          <p>
            Go to
            <router-link to="/notes" class="link-btn">Notes</router-link> to
            create your <own class=""></own>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: url("../assets/sliderHome.png") center center / cover no-repeat;
  height: 500px;
  z-index: 1;
}
.link-btn {
  color: #2ebfc9;
}
.notes-btn-link {
  border: 2px solid white;
  color: white;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.notes-btn-link:hover {
  color: #2c3d38;
  background-color: white;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4rem;
  z-index: 2;
}
.hero-title {
  color: white;
  font-size: 3rem;
  max-width: 600px;
  margin-bottom: 20px;
}
.benefits {
  display: flex;
  justify-content: center;
  gap: 6rem;
  flex-wrap: wrap;
  background: #f0f8f6;
  padding: 2rem 1rem;
}
.latest-notes {
  background-color: #fff;
  padding: 4rem 2rem;
  text-align: center;
}
.note-preview-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.no-notes-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.no-notes-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 700px;
  padding: 1rem;
}
.empty-img {
  max-width: 380px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
.no-notes-text {
  text-align: left;
}
.no-notes-text i {
  color: #2c3d38;
  margin-bottom: 0.5rem;
}
.no-notes-text h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}
.no-notes-text p {
  font-size: 1rem;
  color: #555;
}
</style>
