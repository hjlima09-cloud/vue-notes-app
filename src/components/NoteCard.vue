<script setup>
defineProps({
  note: Object,
});

const emit = defineEmits(["toggle", "delete"]);
const handleDelete = () => {
  emit("delete", note.id);
};
</script>

<template>
    <article class="note-card">
        <input type="text" class="card-title" v-model="note.title">
        <input type="checkbox" class="check" v-model="note.marked">
        <button class="delete-btn" @click="() => {
  console.log('click borrar', note.id);
  handleDelete();
}">🗑️</button>
    </article>
</template>

<style>
.note-card{
  background-color:#FAEEC3;
  width: 300px;
  padding: 20px 30px;
  border: 2px solid #ecdeb0;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s;
}
.cart-title{
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
}
[type="checkbox"]{
  transform: scale(2) translateX(-2);
}
.check{
    width: 20px;
  height: 20px;
}
.note-card:hover{
border: 3px solid #E8D084;
background-color: #E8D084;
}
.note-card:has(input:checked){
  border: 3px solid #E8D084;
  background-color: #E8D084;
  .cart-title{
    font-weight: 100;
  }
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
}

.delete-btn:hover {
  background-color: #c0392b;
}
</style>
