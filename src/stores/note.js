import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
const API_URL = "https://69079334b1879c890eda300c.mockapi.io/api/noteapp/notes";


  const notes = ref([]);
  const loading = ref(false);
  const error = ref(false);

    // GET - Obtener todas las notas
  const getNotes = async () => {
    try {
      loading.value = true;
      const response = await fetch(API_URL);
      const data = await response.json();
      notes.value = data.reverse(); 
      error.value = false;
    } catch (e) {
      console.error("Error getting grades:", e);
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  // POST -añadir nueva nota
  const addNote = async (title) => {
    const newNote = {
      title,
      marked: false,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      const createdNote = await res.json();
      notes.value.unshift(createdNote); 
    } catch (e) {
      console.error("Error deleting note:", e);
      error.value = true;
    }
  };

  // DELETE - Eliminar nota
  const deleteNote = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      notes.value = notes.value.filter((note) => note.id !== id);
    } catch (e) {
      console.error("Error al borrar nota:", e);
      error.value = true;
    }
  };

  // PUT - Marcar o desmarcar como completaa
  const toggleMarked = async (id) => {
    const note = notes.value.find((n) => n.id === id);
    if (!note) return;

    const updatedNote = { ...note, marked: !note.marked };

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });

      note.marked = !note.marked;
    } catch (e) {
      console.error("Error updating note:", e);
      error.value = true;
    }
  };

  return {
    notes,
    loading,
    error,
    getNotes,
    addNote,
    deleteNote,
    toggleMarked,
  };
});