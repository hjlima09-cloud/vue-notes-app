<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import IconCard from "../components/IconCard.vue";
import NotePreview from "../components/NotePreview.vue";
import { useNoteStore } from "../stores/note";

const noteStore = useNoteStore();
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
      title="Rápido y Simple"
      text="Crea y gestiona tus notas en segundos sin complicaciones."
    />
    <IconCard
      icon="fas fa-sync-alt"
      title="Sincronización"
      text="Accede a tus notas desde cualquier dispositivo conectado."
    />
    <IconCard
      icon="fas fa-lock"
      title="Privacidad"
      text="Tus notas están seguras gracias a almacenamiento seguro."
    />
    <IconCard
      icon="fas fa-bolt"
      title="Eficiencia"
      text="Interfaz rápida y ligera para aumentar tu productividad."
    />
  </section>

  <section class="latest-notes">
    <h2>Últimas notas 📝</h2>

    <div v-if="noteStore.notes.length > 0" class="note-preview-list">
      <NotePreview
        v-for="note in noteStore.notes.slice(0, 4)"
        :key="note.id"
        :note="note"
      />
    </div>

    <div v-else class="no-notes">
      <img src="../assets/sectionNoteHome.png" alt="No notes" class="empty-img" />
      <p>Aún no has creado ninguna nota. <router-link to="/notes">Ve a notas</router-link> para hacerlo.</p>
    </div>
  </section>

</template>

<style scoped>
.hero {
  background: url("../assets/sliderHome.png") center center / cover no-repeat;
  height: 500px;
  z-index: 1;
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
  gap: 3rem;
  flex-wrap: wrap;
  background: #f0f8f6;
  padding: 4rem 2rem;
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

.no-notes {
  margin-top: 2rem;
  color: #555;
}

.empty-img {
  max-width: 200px;
  margin-bottom: 1rem;
}
</style>
